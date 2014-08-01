// alert("hello!");

//$(document).ready(function() {
 // $('.user_profile_btn_left').on('click', function() {
//    $('.user_profile_btn_left').toggleClass('active');
//  })
//})

//$(document).ready(function() {
  //$('.user_question_items_btn').on('click', function() {
    //$('.user_question_items_btn').removeClass('active');
    //$(this).addClass('active');
 // });//
//});





$(document).ready(function() {
  var btn = $('.hamburger'),
      content = $('.content'),
      menu = $('nav'),
      content1 = $('.content-chat'),
      content2 = $('.content-relationship'),
      content3 = $('.content-marriage');
      
  
  $('.chat').on('click', function(event) {
   content1.show();
   content2.hide();
   content3.hide();});
    
   
  $('.relationship').on('click', function(event) {
   content1.hide();
   content2.show();
   content3.hide();});
   
  
  $('.marriage').on('click', function(event) {
   content1.hide();
   content2.hide();
   content3.show();});
   
   menu.on("click", function(){
      content.toggleClass('open');
      content.stop().animate({
        marginLeft: 0
      }, 500);
    
      menu.stop().animate({
        left: -200
      }, 500); });
 

  $('.hamburger').on('click', function(event) {
    event.preventDefault();
    content.toggleClass('open');




    if (content.hasClass('open')) {
      menu.stop().animate({
        left: 0
      }, 500);
      content.stop().animate({
        marginLeft: 200
      }, 500);
    } else {
      menu.stop().animate({
        left: -200
      }, 500);
      content.stop().animate({
        marginLeft: 0
      }, 500);
    }
  });
});