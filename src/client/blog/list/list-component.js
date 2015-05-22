BlogListController.$inject = ['Post'];
function BlogListController(Post){
  this.posts = Post.query();

}

function BlogListComponent(){
  this.restrict = 'E';
  this.controller = BlogListController;
  this.controllerAs = 'state';
  this.templateUrl = 'blog/list';
  this.scope = {};
}

BlogListComponent.factory = function(){
  return new BlogListComponent();
};

angular.module('blog.list.component', [
  'blog.post.service',
  'blog.list.template'
]).directive('blogList', BlogListComponent.factory)
;
