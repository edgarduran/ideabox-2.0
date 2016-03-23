$(document).ready(function(){
  editIdea();
});


  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))
      var titleField = $(this).siblings('#idea-title')
      var bodyField = $(this).siblings('#idea-body')
      var editButton = $(this)
      var saveButton = $("<button id='save-changes'>Save Changes</button>")
      var editForm = (
        "<div class='form-edit'>"
          +"<label>Title</label>"
          +"<input class='form-control' type='text' id='edit-title'>"
          +"<label>Body</label>"
          +"<textarea class='form-control' id='edit-body' name='body' rows='3' cols='30'></textarea>"
          +"<button id='save-changes'>Save Changes</button>"
        +"</div>"
      )

      titleField.toggle();
      bodyField.toggle();
      editButton.toggle();
      $idea.prepend(editForm);

      $idea.delegate('#save-changes', 'click', function() {
        var editParams = {
          title: $(this).siblings('#edit-title').val(),
          body : $(this).siblings('#edit-body').val()
        }

        $.ajax({
          type: 'PUT',
          data: editParams,
          url:  'http://localhost:3000/api/v1/ideas/' + $ideaId,
          success: function() {
            editButton.toggle();
            $('#save-changes').parent().hide();
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
