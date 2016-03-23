$(document).ready(function(){
  thumbsUp();
  thumbsDown();
});

  function thumbsUp() {
    $('.allIdeas').delegate('#thumbs-up', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))
      var quality = $(this).siblings('#quality').text()

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
        url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
        success: function() {
          $idea.find('#quality').text(newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      })
    })
  };

  function thumbsDown() {
    $('.allIdeas').delegate('#thumbs-down', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))
      var quality = $(this).siblings('#quality').text()

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
        url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
        success: function() {
          $idea.find('#quality').text(newQuality);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      })
    })
  };
