// Tests the ng-underscore module has access to underscore functions as accessible
describe('ng-underscore', function () {

    beforeEach(module('ngUnderscore'));

    it('should have underscore as a constant defined', inject(function (underscore) {
        expect(underscore).toBeDefined();
    }));

    it('should contain the underscore toArray function', inject(function (underscore) {
        expect(underscore.toArray).toBeDefined();
    }));

    it('should use be able to use a underscore function', inject(function (underscore) {
        var testObject = {
                1: 's',
                2: 'a',
                3: 'd'
            },
            valid = underscore.chain(testObject).toArray().isArray().value();

        expect(valid).toBeTruthy();
    }));

});
