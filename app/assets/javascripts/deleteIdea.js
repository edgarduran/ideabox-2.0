$(document).ready(function(){
  deleteIdea();
});

function deleteIdea() {
  $('.allIdeas').delegate('#delete-idea', 'click', function () {
    var $idea = $(this).parents('.idea')
    var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'))

    $.ajax({
      type: 'DELETE',
      url:  '/api/v1/ideas/' + $ideaId,
      success: function() {
        $idea.remove();
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    })
  })

};
