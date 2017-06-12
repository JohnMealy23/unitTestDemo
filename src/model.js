import utils from '../src/utils';

/**
 * Creates a register management instance
 * @constructor
 */
const Module = function(initialState = {}) {

    const state = Object.assign({}, initialState);

    /**
     * Register a value to state object at a random key
     * @param {*} value The value to be cached in state
     * @returns {boolean|string} Returns `false` if no value was passed, or random id if one was passed
     */
    this.register = (value) => {
        if(!value) {
            return false;
        }
        const id = utils.getUuid(true);
        state[id] = value;
        return id;
    };

    /**
     * Register a value to state at a random key
     * @param {Promise} promise The promise which will resolve to the value to be cached
     * @returns {Promise} Returns the promise resulting from the call to `then`. Resolves to the state key of the cached value
     */
    this.registerAsync = (promise) => {
        return promise.then((value) => {
            const id = utils.getUuid(true);
            state[id] = value;
            return id;
        });
    };

    /**
     * Retrieves full state
     * @returns {Object} the state
     */
    this.getState = () => state;
};

export default Module;