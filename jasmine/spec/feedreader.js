/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //checks if the url is defined and not empty
        it('check if has url', function(){
            for(e in allFeeds){
                expect(allFeeds[e].url).toBeDefined();
                expect(allFeeds[e].url.length).not.toBe(0);  
            }
        });
        //checks if the name is defined and not empty
        it('check if has and name', function(){
            for(e in allFeeds){
                expect(allFeeds[e].name).toBeDefined();
                expect(allFeeds[e].name.length).not.toBe(0);
            }
        });
    });
    /*  A new test suite named "The menu" */
    describe('The menu', function(){
        //chekck if the menu element is hidden by deafault
        it('check if menu is hidden initaily', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         //checks weather the class of body changes on being clicked
         var menu = $('.menu-icon-link');
         it('check if the visibility of menu changes on click', function(){
                    menu.click();
                    expect($('body').hasClass('menu-hiddden')).toBe(false);
                    menu.click();
                    expect($('body').hasClass('menu-hidden')).toBe(true);
            });
    });
    /*  A new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
         //test if loadFeed function completes its job
        it('ensure that loadFeed function completes its work', function(){
            expect($('.feed .entry').length).not.toBe(0);    
        });
    });
        /* A new suite for async calls Selection" */
    
    describe('New Feed Selection', function(){
        var data;
        var data1;
        beforeEach(function(done){
            loadFeed(0, function(){
                data = $('.feed').html();
                loadFeed(1, function(){
                    done();
                });
            });
        });
        //checking content chnages in second call
        it('ensure that content changes', function(done){
            data1 = $('.feed').html();
            expect(data1).not.toBe(data);
            done();
        });
    });
}());
