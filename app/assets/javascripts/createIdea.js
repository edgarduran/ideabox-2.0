$(document).ready(function(){
  createIdea();
});

function clearForm() {
  $('#idea-title').val('');
  $('#idea-body').val('');
};

function createIdea() {
  $('#create-idea').on('click', function() {
    var ideaParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val()
    }

  $.ajax({
      type: 'POST',
      url:  '/api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        showNewIdea(newIdea);
        clearForm();
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })

};
