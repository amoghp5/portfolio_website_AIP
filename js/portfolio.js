
/* nicescroll customization */
$(document).ready(function(){
    $('body').niceScroll({
      cursorcolor: '#148914',
      cursorwidth: '8px',
      cursorborder: '1px solid #115111',                
      scrollspeed: 100,
      autohidemode: false,
      horizrailenabled: false,
      cursorborderradius: 3,
      zindex: 1060
    });
  
    /* close navbar collapse after click in mobile */
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });
  
    /* Strengths section chart */
    columnChart();
    
    function columnChart(){
      var item = $('.chart', '.column-chart').find('.item'),
      itemWidth = 100 / item.length;
      item.css('width', itemWidth + '%');
      
      $('.column-chart').find('.item-progress').each(function(){
        var itemProgress = $(this),
        itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
        itemProgress.css('height', itemProgressHeight);
      });
    };
  
    /* Initializing all tooltips on the page */
    $('[data-toggle=tooltip]').tooltip();
  });
  