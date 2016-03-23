$(document).ready(function(){
  editIdea();
});

var editForm = (
  "<div class='form-group'>"
    +"<label>Title</label>"
    +"<input class='form-control' type='text' id='edit-title'>"
    +"<label>Body</label>"
    +"<textarea class='form-control' id='edit-body' name='body' rows='3' cols='30'></textarea>"
  +"</div>"
)

  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parent('.idea')
      var $ideaId = parseInt($(this).parent('.idea').attr('idea-id'))
      var titleField = $(this).siblings('#idea-title')
      var bodyField = $(this).siblings('#idea-body')
      var editButton = $(this)
      var saveButton = $("<button id='save-changes'>Save Changes</button>")
      var editParams = {
        title: $(this).siblings('#edit-title').val(),
        body : $(this).siblings('#edit-body').val()
      }

      titleField.hide();
      bodyField.hide();
      editButton.hide();
      $idea.prepend(editForm);
      $idea.append(saveButton);

      $.ajax({
        type: 'PUT',
        data: editParams,
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
