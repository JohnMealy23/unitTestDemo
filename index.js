import Model from './src/model';

debugger;

const config = { prop: 'hello' };
const instance = new Model(config);

const newValue = 'there';
const id = instance.register(newValue);

const state = instance.getState();

console.log(state[id] === newValue);