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

dlApp.filter('platform', function() {
    return function(filename) {
        if(filename.indexOf("win32") != -1) return "Windows (32-bit)";
        if(filename.indexOf("win64") != -1) return "Windows (64-bit)";
        if(filename.indexOf("macosx") != -1) return "Mac OS X";
        return "Other";
        
    }
})
