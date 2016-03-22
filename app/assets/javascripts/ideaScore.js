$(document).ready(function(){
  increaseScore();
  decreaseScore();
});

  function increaseScore() {
    $('.allIdeas').delegate('#thumbs-up', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))

      $.ajax({
        type: 'PUT',
        url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
        success: function() {
          console.log('Thumbs Up');
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      })
    })
  };


  function decreaseScore() {
    $('.allIdeas').delegate('#thumbs-down', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))

      $.ajax({
        type: 'PUT',
        url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
        success: function() {
          console.log('Thumbs Down');
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      })
    })
  };
