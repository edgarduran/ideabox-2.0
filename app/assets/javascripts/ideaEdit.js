$(document).ready(function(){
  editIdea();
});


  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))

      $.ajax({
        type: 'PUT',
        data: 'tbd',
        url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
        success: function() {
          console.log('lucky charms');
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      })

    })
  };
