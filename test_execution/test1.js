//////////////////
// test_file_1.js

import { expect } from 'chai';
import dependency from '../src/execution_order';

describe('test_1', () => {

    console.log("describe 1");

    it('should be like this', () => {

        console.log("it 1");
        expect(dependency.holla).to.equal('back');

    });
});
