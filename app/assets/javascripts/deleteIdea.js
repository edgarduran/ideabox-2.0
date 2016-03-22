$(document).ready(function(){
  deleteIdea();
});

function deleteIdea() {
  $('.allIdeas').delegate('#delete-idea', 'click', function () {
    var $idea = $(this).parent('.idea')
    var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))

    $.ajax({
      type: 'DELETE',
      url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
      success: function() {
        $idea.remove();
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })

};
