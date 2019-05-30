var React = require('react');
var Befunge = require('./befunge');
var _ = require('lodash');

var d = React.DOM;

var Main = React.createClass({
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    },
    update: function(programState) {
        this.state.prevStates.push(this.state.b.state);
        this.state.b.state = programState;
        this.setState({
            b: this.state.b,
            prevStates: this.state.prevStates
        });
    },
    input: function() {
        this.setState({
            wantsInput: true
        });
    },
    output: function(s) { },
    reset: function(programString) {
        this.setState({
            b: this.state.b.reset(programString),
            prevStates: []
        });
        if (_.isString(programString)) {
            window.localStorage.setItem('storedProgram', programString);
        }
    },
    run: function() {
        this.state.b.run();
    },
    stepBack: function() {
        if (this.state.prevStates.length) {
            this.state.b.state = this.state.prevStates.pop();
            this.setState({
                b: this.state.b,
                prevStates: this.state.prevStates
            });
        }
    },
    setDelay: function(delay) {
        this.state.b.setDelay(delay);
        this.setState({
            b: this.state.b
        });
    },
    getDelay: function() {
        return this.state.b.getDelay();
    },
    getInitialState: function() {
        return {
            b: null,
            prevStates: []
        };
    },
    componentWillMount: function() {
        var initialProgram = window.localStorage.getItem('storedProgram') || samplesBefunge[0].code;
        var b = Befunge(initialProgram, {
            input: this.input,
            output: this.output,
            callback: this.update
        });
        if (this.props.code) {
            b = b.reset(this.props.code);
        }
        this.setState({
            b: b,
            programState: b.state
        });
    },
    render: function() {
        return d.div(
            null,
            d.div(
                null,
                BoardSettings({
                    width: this.state.b.state.get('width'),
                    height: this.state.b.state.get('height'),
                }),
                d.div(
                    { className: 'left' },
                    /*Editor({
                        program: this.state.b.state.get('program'),
                        reset: this.reset
                    }),*/
                    Controls({
                        b: this.state.b,
                        run: this.run,
                        stepBack: this.stepBack,
                        reset: this.reset,
                        setDelay: this.setDelay,
                        getDelay: this.getDelay
                    }),
                    Program({
                        program: this.state.b.state.get('program'),
                        width: this.state.b.state.get('width'),
                        height: this.state.b.state.get('height'),
                        reset: this.reset,
                        x: this.state.b.state.get('x'),
                        y: this.state.b.state.get('y')
                    })
                ),
                d.div(
                    { className: 'right' },
                    Stats({
                        programState: this.state.b.state
                    })
                ),
                Output({
                    outputString: this.state.b.state.get('outputString')
                })
            )
        );
    }
});

var Controls = React.createClass({
    seIncrementDelay: function(e) {
        let current = this.props.getDelay();
        current += 100;
        this.props.setDelay(parseInt(current));
    },
    setDecrementDelay: function(e) {
        let current = this.props.getDelay();
        if(current > 0) {
            current -= 100;
        }
        this.props.setDelay(parseInt(current));
    },
    render: function() {
        return d.div(
            {className: 'controls'},
            d.button(
                {
                    type: 'button',
                    title:'Run',
                    onClick: this.props.run,
                    className: 'btn btn-success'
                },
                d.i({
                    className: "glyphicon glyphicon-play"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Pause',
                    onClick: this.props.b.pause,
                    className: 'btn btn-warning'
                },
                d.i({
                    className: "glyphicon glyphicon-pause"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Step forward',
                    onClick: this.props.b.step,
                    className: 'btn btn-info'
                },
                d.i({
                    className: "glyphicon glyphicon-step-forward"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Step backward',
                    onClick: this.props.stepBack,
                    className: 'btn btn-info'
                },
                d.i({
                    className: "glyphicon glyphicon-step-backward"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Reset',
                    onClick: this.props.reset,
                    className: 'btn btn-warning'
                },
                d.i({
                    className: "glyphicon glyphicon-refresh"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Increase delay',
                    onClick: this.seIncrementDelay,
                    className: 'btn btn-primary'
                },
                d.i({
                    className: "glyphicon glyphicon-plus"
                })
            ),
            d.button(
                {
                    type: 'button',
                    title:'Decrease delay',
                    onClick: this.setDecrementDelay,
                    className: 'btn btn-primary'
                },
                d.i({
                    className: "glyphicon glyphicon-minus"
                })
            )
        );
    }
});

var Stats = React.createClass({
    getInitialState: function() {
        return {
            show: false
        };
    },
    setShow: function(e) {
        this.setState({
            show: e.target.checked
        });
    },
    updateScroll: function() {
        Array.from(document.getElementsByClassName('stack'))
        .forEach((e) => {
            if (e) {
                e.scrollTop = e.scrollHeight;
            }
        });
    },
    render: function() {
        var s = this.props.programState;
        var info = null;
        info = d.div(
            { className: 'info' },
            d.div(
                null,
                'Delay: ', this._owner.getDelay(),
                ' Show as Character',
                d.input({
                    type:'checkbox',
                    ref: 'show as character',
                    value: this.state.show,
                    onClick: this.setShow
                })
            ),
            d.div(
                {className: 'stack'},
                s.get('stackHistory').get(0).toArray().map((e, i) => {
                    let result = `Step ${i} : [${e.toString()}]`;
                    if(this.state.show) {
                        let array = e.map(e => String.fromCharCode(e));
                        result = `Step ${i} : [${array}]`;
                    }
                    return d.div(
                        null,
                        result
                    )
                })
            )
        );
        this.updateScroll();
        return d.div(
            {className: 'stats'},
            info
        );
    }
});

var Output = React.createClass({
    render: function() {
        return d.div(
            { className: 'output' },
            d.strong(null, 'Output:'),
            this.props.outputString
        );
    }
});

var Program = React.createClass({
    updateProgram: function(e) {
        const possitionY = parseInt(e.target.dataset.possitionY),
            possitionX = parseInt(e.target.dataset.possitionX),
            oldValue = e.target.dataset.value;
        let programString = this.props.program.map((line, idx) => {
            line = line.toArray();
            if (idx === possitionY) {
                let containsOldValueIdx = e.target.value.indexOf(oldValue);
                let value = e.target.value;
                if (containsOldValueIdx !== -1) {
                    value = value.substring(0, containsOldValueIdx) + value.substring(containsOldValueIdx + 1, value.length);
                }
                line[possitionX] = value !== ""? value : " ";
            }
            return line.join('');
        }).join('\n');
        this.props.reset(programString);
    },
    render: function() {
        var self = this;
        return d.div(
            { className: 'program' },
            this.props.program.toArray().map(function(line, y) {
                line = line.toArray();
                return d.div(
                    {
                        className: 'program-line',
                        key: 'line-' + y
                    },
                    line.map(function(cell, x) {
                        var current = (self.props.x == x && self.props.y == y);
                        return d.span(
                            {
                                className: (current ? 'current' : ''),
                                key: 'cell-' + x
                            },
                            // Replace spaces with non-breaking spaces
                            //(cell == ' ' ? '\u00a0' : cell),
                            (d.input({
                                key: 'cel-input' + x,
                                value: cell,
                                type: 'text',
                                'data-possition-x': x,
                                'data-possition-y': y,
                                'data-value': cell,
                                style: {
                                    width: '100%',
                                    margin: '0px',
                                },
                                onChange: self.updateProgram,
                            })),
                        );
                    })
                );
            })
        );
    }
});

var BoardSettings = React.createClass({
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    },
    updateProgramBoardWidth: function(e) {
        let width = e.target.value;
        console.log(width);
        this.props.width = width;
    },
    updateProgramBoardHeight: function (e) {
        let height = e.target.valeu;
        console.log(height);
        this.props.height = height;
    },
    render: function () {
        var self = this;
        let width = d.div(
            {className:"inline"},
            d.label(
                {className: "none", for:"width"},
                d.span({className: "none"}, "Width:"),
            ),
            d.input(
                {
                    className: "form-control",
                    value: self.props.width,
                    onChange: self.updateProgramBoardWidth,
                    type: 'number',
                    name: "width"
                })
        );
        let height = d.div(
            {className:"inline"},
            d.label(
                {className: "none", for:"height"},
                d.span({className: "none"}, "Height:"),
            ),
            d.input(
                {
                    className: "form-control",
                    value: self.props.height,
                    onChange: self.updateProgramBoardHeight,
                    type: 'number',
                    name: "height"
                })
        );
        return d.div(
            {className: 'board-settings controls-row1-col1'},
            width,
            height,
        );
    }
})
var Editor = React.createClass({
    updateProgram: function(e) {
        this.props.reset(e.target.value);
    },
    updateScroll: function (e) {
        this.refs.numbers.getDOMNode().scrollTop = this.refs.numbers.getDOMNode().scrollTop;
    },
    render: function() {
        var programString = this.props.program.map(function(line) {
            return line.toArray().join('');
        }).toArray().join('\n');

        var counter = d.div({
                className: 'tln-wrapper',
                ref: 'numbers',
                key: 'countersTlnWrapper',
            },
            this.props.program.toArray().map((e, i) => {
                return d.span(
                    {className: 'tln-line'},
                )
            })
        )
        return d.div(
            {className: 'editor'},
            counter,
            d.textarea({
                className: 'tln-active',
                value: programString,
                ref: 'program',
                onChange: this.updateProgram,
                onScroll: this.updateScroll
            })
        );
    }
});

var samplesBefunge = [
    {
        title: 'Endless loop',
        code: '>      v\n'+
              '        \n'+
              '        \n'+
              '        \n'+
              '^      <'
    },
    {
        title: 'To The Stack',
        code: '0 1 9 9',
    },
    {
        title: 'To The Stack',
        code: '0 1 9 9 @',
    },
    {
        title: 'To The Stack',
        code: '"abc" @',
    },
    {
        title: 'Hello world 1',
        code: '"dlroW olleH" ,,,,,,,,,,, @'
    },
    {
        title: 'Hello world 2',
        code:   'v                 \n'+
                '                  \n'+
                '              v ,<\n'+
                '>"dlroW olleH">: |\n'+
                '                 >$@'
    },
    {
        title: 'Hello world',
        code: '0"!dlrow olleH">:#,_@'
    },
    {
        title: 'Hello world',
        code: '45+'
    },
    {
        title: 'Count and rewrite',
        code: '>91+:9`v\n' +
            'p   v  _v\n' +
            '    >$0 v\n' +
            '^ 01+*68<'
    },
    {
        title: 'Fibonacii',
        code:   '>> 100p 110p 1. ",",   1.",", > 00g 10g: 00p + :. ",",  10p       v\n'+
                '                              ^                                   <'
    },
    {
        title: 'Fizzbuzz',
        code: '0> 1+:3%v\n' +
            '>^  v%5:_:5% v\n' +
            ',v.:_v     v0_0"zzub"v\n' +
            '"v         #\n' +
            '     >0"zzub"v\n' +
            '"   v"fizz"<         <\n' +
            '^<         $<>:#,_v\n' +
            '    >      #^^#   <'
    },
    {
        title: 'Quine',
        code: ':0g:84*-!#@_,1+'
    },
    {
        title: 'Weird recursive quine',
        code: 'p>n00g1+00p00g00#;g:84*-!#v_\\55*00g*+00gp1+::0;'
    },
];

var SampleList = React.createClass({
    handleChange: function(e) {
        var i = parseInt(e.target.value);
        if (i > -1) {
            this.props.reset(samplesBefunge[i].code);
        }
    },
    render: function() {
        return d.select(
            {
                onChange: this.handleChange,
                value: -1
            },
            d.option({ value: -1 }, 'Load sample...'),
            samplesBefunge.map(function(sample, i) {
                return d.option(
                    {
                        key: i,
                        value: i
                    },
                    sample.title
                );
            })
        );
    }
});


Array
.from(document.getElementsByClassName('befunge'))
.forEach((element, i) => {
    let code = null;
    if (i < samplesBefunge.length) {
        code = samplesBefunge[i].code;
        React.renderComponent(
            Main({code: code}),
            element
        );
    }
});
