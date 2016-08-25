var dlApp = angular.module('dlApp', []);
var MODEL_URL = 'https://api.github.com/repos/mcedit/mcedit2/releases';


dlApp.controller('DownloadListCtrl', function ($scope, $http) {
    $http.get(MODEL_URL).success(function(data) {
        $scope.downloads = data
    })

});

dlApp.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});
