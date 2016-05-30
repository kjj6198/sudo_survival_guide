(function(){
	var windowHeight = $(window).height();
	var hasImage     = $(".feature_image").length === 0 ? false : true;
	console.log(hasImage);
	if(hasImage) {
	  $("ol.category").animate({top: windowHeight + 10}, 500)
	  			.show();	
	}
  
})();

(function() {
  var canvas = document.createElement("canvas");
  var width = window.screen.availWidth;
  var height = document.body.scrollHeight;

  canvas.width = width;
  canvas.height = height;
  canvas.style.zIndex = '-1';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left  = 0;

  document.body.appendChild(canvas);


  var modeConvertBtn = document.getElementById('night_mode');

  var rgb = 255;

  $(modeConvertBtn).on('click',function(e) {
    console.log('e')
  	$('.article').addClass('night_mode');

  	var ctx = canvas.getContext('2d');
  	
  	animation();
  })

  var id;

  function animation() {
  	var ctx = canvas.getContext('2d');
  	var startTime = (new Date()).getTime();
  	var time = (new Date()).getTime() - startTime - 100;
    
   	id = window.requestAnimationFrame(animation);
   	
   	
   	if(rgb === 25) {
   		window.cancelAnimationFrame(id);
   	} 
   
   	setTimeout(function(){
   		rgb -= 1;
   		ctx.clearRect(0,0,width, height);
   		var color = 'rgba(' + rgb + ',' + rgb + ',' + rgb + ',' +'.8)';
   		ctx.fillStyle = color;
   		
   		
   		ctx.fillRect(0,0,width,height);
   	},10); 
  	
  	
  }
})();

$('#friendlyButton').on('click', e => {
  $('.article').toggleClass('larger');
})


