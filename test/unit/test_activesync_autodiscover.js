/**
 * Test our ActiveSync AutoDiscover logic, specifically the case where our
 * autoconfig probes think they have found an AutoDiscover endpoint but we have
 * not actually run AutoDiscover.  All of our other automated ActiveSync tests
 * use hardcoded server paths and so aren't getting us coverage.
 *
 * Note: Our v1 autoconfig process *would* run AutoDiscover, but we've changed
 * that.)
 *
 * In the future we might also add some other weird AutoDiscover scenarios in
 * here.
 *
 *
 **/

define(['rdcommon/testcontext', './resources/th_main',
        'wbxml', 'activesync/codepages',
        'exports'],
       function($tc, $th_main, $wbxml, $ascp, exports) {

var TD = exports.TD = $tc.defineTestsFor(
  { id: 'test_activesync_autodiscover' }, null,
  [$th_main.TESTHELPER], ['app']);


/**
 * Create an ActiveSync account using the result that our autoconfig returns
 * for probed 'autodiscover' endpoints.  These differ from fully specified
 * autoconfig entries returned via 'local' or 'hardcoded' which do not need
 * to run autodiscover.
 *
 * We don't run through autoconfig because then we have to stub out a crapload
 * of XHR calls and that's annoying and doesn't get us anything except us
 * potentially breaking the non-mock uses of XHR we do want to work.
 */
TD.commonCase('create ActiveSync account from fake autoconfig result',
              function(T, RT) {

  var testUniverse = T.actor('testUniverse', 'U'),
      testAccount = T.actor(
        'testAccount', 'A',
        { universe: testUniverse, createVia: 'autodiscover' });

  // So, there isn't actually anything to do in here.

  T.group('cleanup');
});


}); // end define
