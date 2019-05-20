var _ = require('lodash');

function updateStackHistory(state) {
    return state.updateIn(['stackHistory', 0], function(stackHistory) {
        let array = state.get('_stack').get(0).toArray();
        return stackHistory.push(array);
    });
}
/*
 * Usage:
 * var newState = stack.push(state, val);
 *
 * OR
 *
 * var newState = stack.push(state, val, function(state) {
 *     // Do stuff
 *     return state;
 * });
 */
module.exports.push = function(state, val, callback) {
    state = state.updateIn(['_stack', 0], function(stack) {
        if (!_.isArray(val)) {
            val = [val];
        }
        return stack.push.apply(stack, val);
    });

    state = updateStackHistory(state);
    if (callback) {
        return function() {
            return callback(state);
        };
    }
    return state;
};

/*
 * Usage:
 * var newState = stack.pop(state, function(state, val[, val2[, valn]]) {
 *     // Do stuff with vals
 *     return state;
 * });
 */
module.exports.pop = function(inState, callback) {
    var numVals = callback.length - 1;
    var vals = _.range(0, numVals, 0);

    var state = inState.updateIn(['_stack', 0], function(stack) {
        return stack.withMutations(function(stack) {
            vals = _.map(vals, function(val) {
                if (stack.length) {
                    val = stack.last();
                    stack = stack.pop();
                }
                return val;
            });
            return stack;
        });
    });
    state = updateStackHistory(state);
    return callback.apply(null, [state].concat(vals));
};

module.exports.top = function(state) {
    return state.getIn(['_stack', 0]).last();
};

module.exports.clear = function(state) {
    state = state.updateIn(['stackHistory', 0], function(stackHistory) {
        return stackHistory.clear();
    });
    return state.updateIn(['_stack', 0], function(stack) {
        return stack.clear();
    });
};
