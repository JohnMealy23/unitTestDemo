//////////////////
// test_file_3.js

import { expect } from 'chai';
import dependency from '../src/execution_order';

describe('test_3', () => {

    console.log('describe 3');

    before(() => {
        console.log('before 1');
        dependency.holla = 'back';
    });

    it('should be like like a wiffle ball bat', () => {
        console.log('it 3');
        expect(dependency.holla).to.equal('back');
    });
});