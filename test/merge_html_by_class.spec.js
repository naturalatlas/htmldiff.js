
describe('merge_html_by_class', function(){
  var cut, res;

  beforeEach(function(){
      cut = require('../js/htmldiff').merge_html_by_class;
  });

  it('should be a function', function(){
    expect(cut).is.a('function');
  });

  it('should identify a figure tag as a image component and merge all in one token', function(){
      expect(cut('(<[^>]+) class="image*?"','slideshow',['<figure class="image">','<div style="background-image: url("//link_to_an_image.jpg");>','</div>','</figure>']))
          .eql(['<figure class="image"><div style="background-image: url("//link_to_an_image.jpg");></div></figure>']);
    });

  it('should identify a  tags as a slideshow component and merge all in one token', function(){
      expect(cut('slideshow"','',['<div class="slideshow">','<figure class="image">','<div style="background-image: url("//link_to_an_image.jpg");>','</div>','</figure>','</div>']))
          .eql(['<div class="slideshow"><figure class="image"><div style="background-image: url("//link_to_an_image.jpg");></div></figure></div>']);
    });

  it('should identify a  tags as a product-image-part component and merge all in one token', function(){
      expect(cut('(<[^>]+) class="product-image-part*?"','slideshow',['<div class="product-image-part">','<figure class="image">','<div style="background-image: url("//link_to_an_image.jpg");>','</div>','</figure>','</div>']))
          .eql(['<div class="product-image-part"><figure class="image"><div style="background-image: url("//link_to_an_image.jpg");></div></figure></div>']);
    });

}); // describe('html_to_tokens')


