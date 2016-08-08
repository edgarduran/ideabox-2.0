$(document).ready(function(){
  editIdea();
});

  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parents('.idea');
      var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'));
      var currentTitle = $(this).closest('.idea').find('#idea-title').text();
      var currentBody = $(this).closest('.idea').find('#idea-body').text();
      var content = $(this).parents('.idea').find('.card-content');
      var action = $(this).parents('.idea').find('.card-action');
      var editButton = $(this);

      content.toggle();
      action.prepend(editForm());
      $(this).parents('.idea').find('#edit-title').val(currentTitle);
      $(this).parents('.idea').find('#edit-body').val(currentBody);
      editButton.toggle();
      // $idea.prepend(editForm());

      $idea.delegate('#save-changes', 'click', function() {
        var editParams = {
          title: $(this).parents('.idea').find('#edit-title').val(),
          body : $(this).parents('.idea').find('#edit-body').val()
        };

        $.ajax({
          type: 'PUT',
          data: editParams,
          url:  '/api/v1/ideas/' + $ideaId,
          success: function() {
            editButton.toggle();
            content.toggle();
            $('.edit-form').hide();
            $idea.find('#idea-title').text(editParams.title);
            $idea.find('#idea-body').text(editParams.body);
          },
          error: function(xhr) {
            console.log(xhr.responseText);
          }
        });

      });

    });
  }
