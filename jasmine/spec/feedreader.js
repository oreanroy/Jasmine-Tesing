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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('check if has url', function(){
            for(e in allFeeds){
                expect(allFeeds[e].url).not.toBe(undefined);
                expect(allFeeds[e].url.length).not.toBe(0);  
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('check if has and name', function(){
            for(e in allFeeds){
                expect(allFeeds[e].name).not.toBe(undefined);
                expect(allFeeds[e].url.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('check if menu is hidden initaily', function(){
            expect($('body')[0].className).toBe('menu-hidden');
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         var menu = $('.menu-icon-link');
         it('check if the visibility of menu changes on click', function(){
            var change = $('icon-list');
                    menu.click();
                    expect($('body').hasClass('menu-hiddden')).toBe(false);
                    menu.click();
                    expect($('body').hasClass('menu-hidden')).toBe(true);
            });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
         /* TODO: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */
        it('ensure that loadFeed function completes its work', function(){
            expect($('.feed .entry').length).not.toBe(0);    
        });
    });
        /* TODO: Write a new test suite named "New Feed Selection" */
    
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
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('ensure that content changes', function(done){
            data1 = $('.feed').html();
            expect(data1).not.toBe(data);
            done();
        });
    });
}());
