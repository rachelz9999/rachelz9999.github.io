if ($(window).width() < 768) {
   var feature1 = 30;
}
else {
   var feature1 = 80;
}


$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + feature1;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
        }); 
    
    });
});