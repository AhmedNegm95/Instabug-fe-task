angular.module('core').filter('unsafe', function ($sce) { return $sce.trustAsHtml; });
