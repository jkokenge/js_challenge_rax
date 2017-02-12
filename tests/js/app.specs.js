describe('Controllers', function(){
    var httpBackend;
    beforeEach(module('RaxTstTbl'));

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
    }));

    afterEach (function () {

        try {
            httpBackend.flush();
        } catch (e) {
            console.log(e);
        }
        httpBackend.verifyNoOutstandingExpectation ();
        httpBackend.verifyNoOutstandingRequest ();
    });

    describe('MainTblCtrl',function(){
        var MainTblCtrl;
        var scope;
        var myctrl;
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new;
            myctrl = $controller('MainTblCtrl', {$scope : scope});

        }));

        it('test that framework works should return it works', function(){
            expect(myctrl.testSuiteWorksVar).toBe('it works!');
        });

        it('sends a GET request to http://jsonplaceholder.typicode.com/posts', function() {
            httpBackend.expect('GET', 'http://jsonplaceholder.typicode.com/posts');

        });


    });
});