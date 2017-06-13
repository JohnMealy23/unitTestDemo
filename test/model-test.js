// Testing utilities:
import { expect } from 'chai';
import sinon from 'sinon';

// Module to test:
import utils from '../src/utils';

// Dependency in need of stubbing
import Model from '../src/model';

describe('Model', () => {

    // Vars for use throughout testing:
    const sandbox = sinon.sandbox.create();
    const uuid = 'imAnId';
    const testValue = 'imAValue';
    const initialState = { key: 'value'};
    let getUuidStub;
    let instance;

    before(() => {
        getUuidStub = sandbox.stub(utils, 'getUuid')
        getUuidStub.callsFake(() => uuid);
        instance = new Model();
    });

    // Ensure you've removed all spies and stubs after your tests have run
    // If this step isn't taken on a shared dependency, downstream
    after(() => {
        sandbox.restore();
    });

    it('should instantiate with the expected api', () => {
        instance = new Model(initialState);
        expect(instance.getState()).to.deep.equal(initialState);
    });
    it('should instantiate with the initial state passed in', () => {
        instance = new Model(initialState);
        expect(instance.getState()).to.deep.equal(initialState);
    });

    describe('register', () => {
        let id;

        it('should return a unique id from the getUuid utility', () => {
            id = instance.register(testValue);
            expect(id).to.equal(uuid);
            expect(id).to.be.a('string');
        });
        it('should call utils.getUuid', () => {
            expect(getUuidStub.callCount).to.equal(1);
            expect(getUuidStub.getCall(0).args[0]).to.equal(true);
        });
        it('should register its value at the id it returned', () => {
            const state = instance.getState();
            expect(state[id]).to.equal(testValue);
        })
    });

    describe('registerAsync', () => {
        let instance;
        let promise;
        let id;

        beforeEach(() => {
            instance = new Model(initialState);
        });

        /**
         * When a promise is returned in an `it` statement's callback,
         * mocha knows the test will be asynchronous, and will wait
         * until the promise's resolution to evaluate the test.
         */

        it('should resolve to an id', () => {
            const promise = Promise.resolve(testValue);
            return instance.registerAsync(promise)
                .then((id) => {
                    expect(id).to.equal(uuid);
                });
        });

        /**
         * The argument of the `it`s callback may also be used to indicate the
         * completion of an async method
         */
        it('should populate the state with the retrieved value', (done) => {
            promise.then((id) => {
                const state = instance.getState();
                expect(state[id]).to.equal(testValue);
                done();
            });
        });
    })
});
