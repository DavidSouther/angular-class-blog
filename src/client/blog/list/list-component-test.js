describe('Blog', function(){
  describe('List', function(){
    var component;

    beforeEach(module('blog.list.component'));
    beforeEach(function(){
      component = render('<blog-list></blog-list>');
    });

    describe('Component', function(){
      it('Exposes blog posts', function(){
        component.find('li').length.should.equal(2);
      });
    });

  });
});
