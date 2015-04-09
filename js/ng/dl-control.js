var dlApp = angular.module('dlApp', []);
var MODEL_URL = 'http://download.nodecdn.net/containers/mcedit/downloads.jsonp';

var DL_SCOPE;

function MCEDIT2_DOWNLOADS(data) {
    DL_SCOPE.downloads = data;
}

dlApp.controller('DownloadListCtrl', function ($scope, $http) {
    DL_SCOPE=$scope;
    $http.jsonp(MODEL_URL);

});

dlApp.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});
