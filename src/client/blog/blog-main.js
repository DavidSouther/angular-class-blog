angular.module('blog', [
  'ngRoute',
  'blog.list.component',
  'blog.post.read.component',
  'blog.post.edit.component'
]).config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/list', {
    template: '<blog-list></blog-list>'
  })
  .when('/post/new', {
    template: '<blog-post-edit />'
  })
  .when('/post/edit/:postId?', {
    template: '<blog-post-edit />'
  })
  .when('/post/:postId', {
    template: '<blog-post-read />'
  })
  .otherwise({
    redirectTo: '/list'
  })
  ;
}]);
