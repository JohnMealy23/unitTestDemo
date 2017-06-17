//////////////////
// test_file_2.js

import { expect } from 'chai';
import dependency from '../src/execution_order';

describe('test_2', () => {

    console.log('describe 2');
    before(() => {

        dependency.holla = 'forward';
    });

    after(() => {
        dependency.holla = 'after';

    })

    it('should be like that', () => {
        console.log('it 2');
        expect(dependency.holla).to.equal('forward');
    });
});
