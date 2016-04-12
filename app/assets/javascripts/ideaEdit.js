$(document).ready(function(){
  editIdea();
});

  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parents('.idea')
      var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'))
      var titleField = $(this).closest('.idea').find('#idea-title')
      var bodyField = $(this).closest('.idea').find('#idea-body')
      var editButton = $(this)

      titleField.toggle();
      bodyField.toggle();
      editButton.toggle();
      $idea.prepend(editForm());

      $idea.delegate('#save-changes', 'click', function() {
        var editParams = {
          title: $(this).parents().find('#edit-title').val(),
          body : $(this).parents().find('#edit-body').val()
        }

        $.ajax({
          type: 'PUT',
          data: editParams,
          url:  '/api/v1/ideas/' + $ideaId,
          success: function() {
            editButton.toggle();
            $('#save-changes').closest('.container').hide();
            bodyField.toggle();
            bodyField.text(editParams.body);
            titleField.toggle();
            titleField.text(editParams.title);
          },
          error: function(xhr) {
            console.log(xhr.responseText);
          }
        })

      })

    })
  };
