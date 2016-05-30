(function(){
  window.addEventListener('hashchange',(e) => {
  	var curPosition = window.scrollY;
    var position    = e.currentTarget.scrollY;
    console.log(curPosition);
    console.log(position);
    if(curPosition !== position) {
    	for(var i = curPosition; i < position; i++) {
    		console.log(i);
    	  setTimeout(function(){window.scrollTo(0,i)}, 500);
    	}
      
    }
    
  })
})();
