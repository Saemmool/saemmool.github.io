// Instantiate ScrollStory
$(function() {
    $("#container").scrollStory();
  });
  
  //Change ScrollStory offset for triggering the 'active' class to make the text leggible sooner. Default appears to be the centre of the element entering the centre of the viewport
  $('#container').scrollStory({
      triggerOffset: 250
  });
  
  //Scroll to top of next element with the same parent when user selects element with class 'next'
  $(".next").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this)
          .parents()
          .next()
          .offset().top
      },
      "slow"
    );
  });
  
  //Scroll to top of page when user selects element with class 'backtotop'
  $(".backtotop").click(function() {
    $("html,body").animate({ scrollTop: $("html,body").offset().top }, "slow");
  });