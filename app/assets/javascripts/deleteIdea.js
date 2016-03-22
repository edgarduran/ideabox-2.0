$(document).ready(function(){
  deletIdea();
});

  function deletIdea() {



  };

  
  $('.allIdeas').delegate('#delete-idea', 'click', function() {
    var $idea = $(this).closest('.idea')

  $.ajax({
    type: 'DELETE',
    url:  "http://localhost:3000/api/v1/idea/" + $idea.attr('idea-id'),
    success: function(){
      $idea.remove()
    },
    error: function(xhr) {
      console.log(xhr.responseText);
    }
  })
  })
