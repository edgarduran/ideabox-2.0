$(document).ready(function(){
  thumbsUp();
  thumbsDown();
});

  function thumbsUp() {
    $('.allIdeas').delegate('#thumbs-up', 'click', function() {
      var $idea = $(this).parents('.idea');
      var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'));
      var quality = $(this).parents().find('#quality').text();

      if (quality === "swill") {
        var newQuality = "plausible"
      } else if (quality === "plausible") {
        var newQuality = "genius"
      } else {
        var newQuality = "genius"
      }

      $.ajax({
        type: 'PUT',
        data: {quality: newQuality},
        url:  '/api/v1/ideas/' + $ideaId,
        success: function() {
          $idea.find('#quality').text(newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    });
  }

  function thumbsDown() {
    $('.allIdeas').delegate('#thumbs-down', 'click', function() {
      var $idea = $(this).parents('.idea');
      var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'));
      var quality = $(this).parents().find('#quality').text();

      if (quality === "genius") {
        var newQuality = "plausible"
      } else if (quality === "plausible") {
        var newQuality = "swill"
      } else {
        var newQuality = "swill"
      }

      $.ajax({
        type: 'PUT',
        data: {quality: newQuality},
        url:  '/api/v1/ideas/' + $ideaId,
        success: function() {
          $idea.find('#quality').text(newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    });
  }
