describe('Blog', function(){
  describe('List', function(){
    var component;

    beforeEach(module('blog.list.component'));

    beforeEach(module(function($provide){
      $provide.value('Post', {
        query: function(){
          return [
            { title: 'Hello', content: 'The First Post'},
            { title: 'Things!', content: 'We have things to say'}
          ];
        }
      });
    }));

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
