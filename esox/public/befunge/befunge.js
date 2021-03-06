var Immutable = require('immutable');
var _ = require('lodash');

var parse = require('./parser');
var interpret = require('./interpreter');

function initState(program) {
    program = program || [[]];
    try {
        program = program.toArray();
    } catch (e) {
        // do nothing
    }
    let width = program.reduce(function(longest, line) { return Math.max(longest, line.length); }, 0);

    for(let i = 0; i < program.length; i++) {
        let line = program[i];

        try {
            line = line.toArray();
        } catch (e) {
            // do nothing
        }
            
        if (line.length < width) {
            let extend = (new Array(width - line.length).fill(" "));
            line = line.concat(extend);
        }
        program[i] = line;
    }

    return Immutable.fromJS({
        x: -1,
        y: 0,
        height: program.length,
        width: width,
        direction: '>',
        tick: 0,
        stringmode: false,
        skipmode: false,
        noTick: false,
        running: false,
        terminated: false,
        returncode: 0,
        program: program,
        _stack: [[]],
        stackHistory: [[]],
        outputString: '',
        currentStringLength: 0
    });
}

var Befunge = function(programString, options) {
    var settings = _.extend({
        input: function() {
            throw new Error('Please provide an input function if your program needs input');
        },
        output: function(output) {
            console.log(output);
        },
        delay: 0
    }, options);

    var b = {
        state: initState(parse(programString)),
        setDelay: function(newDelay) {
            settings.delay = newDelay;
        },
        getDelay: function() {
            return settings.delay
        },
        parse: function(programString) {
            return Immutable.fromJS(parse(programString));
        },
        reset: function(newProgramString) {
            if (_.isString(newProgramString)) {
                programString = newProgramString;
            }
            b.state = initState(b.parse(programString));
            return b;
        },
        setWidth: function(width) {

        },
        setHeight: function(height) {

        },
        step: function() {
            if (!b.state.get('terminated')) {
                b.state = interpret(b.state, settings);
                if (settings.callback) {
                    settings.callback(b.state);
                }
            }
            return b.state;
        },
        run: function() {
            if (programString != '') {
                if (b.state.get('terminated')) {
                    b.reset();
                }
                b.state = b.state.set('running', true);
                b._runStep();
            }
        },
        _runStep: function() {
            if (b.state.get('running') && !b.state.get('terminated')) {
                b.step();
                setTimeout(b._runStep.bind(b), settings.delay);
            }
        },
        pause: function() {
            b.state = b.state.set('running', false);
        }
    };
    return b;
};

module.exports = Befunge;
