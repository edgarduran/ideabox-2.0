$(document).ready(function(){
  editIdea();
});

  function editIdea() {
    $('.allIdeas').delegate('#edit-idea', 'click', function() {
      var $idea = $(this).parents('.idea')
      var $ideaId = parseInt($(this).parents('.idea').attr('idea-id'))
      var titleField = $(this).parents().find('#idea-title')
      var bodyField = $(this).parents().find('#idea-body')
      var editButton = $(this)
      var editForm = (
        "<div class='container'>"
          +"<div class='row'>"
            +"<form class='col s12'>"
              +"<h5>Make changes here</h5>"
              +"<div class='row'>"
                +"<div class='input-field col s6'>"
                  +"<i class='material-icons prefix'>star_rate</i>"
                  +"<label for='icon_prefix'>Title</label>"
                  +"<input class='form-control' id='edit-title' type='text' class='validate'>"
                +"</div>"
              +"</div>"
              +"<div class='row'>"
                +"<div class='input-field col s6'>"
                  +"<i class='material-icons prefix'>comment</i>"
                  +"<label for='star_rate'>Body</label>"
                  +"<textarea id='edit-body' class='materialize-textarea' length='120'></textarea>"
                  +"<a class='btn-floating btn-large waves-effect waves-light green' id='save-changes' value='Save Changes'><i class='material-icons'>done</i></a>"
                +"</div>"
              +"</div>"
            +"</form>"
          +"</div>"
        +"</div>"
      )

      titleField.toggle();
      bodyField.toggle();
      editButton.toggle();
      $idea.prepend(editForm);

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
