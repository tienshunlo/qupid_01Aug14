alert("hello!");

$(document).ready(function() {
  $('.user_profile_btn_left').on('click', function() {
    $('.user_profile_btn_left').toggleClass('active');
  })
})

$(document).ready(function() {
  $('.user_question_items_btn').on('click', function() {
    $('.user_question_items_btn').removeClass('active');
    $(this).addClass('active');
  });
});