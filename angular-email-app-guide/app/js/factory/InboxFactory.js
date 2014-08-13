/**
 * Factory: InboxFactory
 */
app.factory('InboxFactory',
  function InboxFactory ($q, $http, $location) {

  'use strict';

  var exports = {};

  // title for the view
  exports.title = 'My Inbox';

  // we'll bind the XHR response to this,
  // so we can .splice() from the array to show
  // visual feedback
  exports.messages = [];

  exports.goToMessage = function (id) {
    if (angular.isNumber(id)) {
      $location.path('inbox/email/' + id);
    }
  };

  exports.deleteMessage = function (id, $index) {
    // we have access to `id`, and the `$index`
    // depending on the backend, we would make a
    // POST, DELETE with the `id` or just hit
    // the REST endpoint
    //
    // for this example, we'll simply assume we've
    // hit the backend and on success only we can
    // provide visual feedback and remove the item
    // from the array
    this.messages.splice($index, 1);
  };

  exports.getMessages = function () {
    var deferred = $q.defer();
    $http.get('json/emails.json')
    .success(function (data) {
      deferred.resolve(data);
    })
    .error(function (data) {
      deferred.reject(data);
    });
    return deferred.promise;
  };

  return exports;

});
