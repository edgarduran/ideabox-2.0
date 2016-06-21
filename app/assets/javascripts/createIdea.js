$(document).ready(function(){
  createIdea();
});

function clearForm() {
  $('#idea-title').val('');
  $('#idea-body').val('');
}

function createIdea() {
  $('#create-idea').on('click', function() {
    var ideaParams = {
      title: $('#idea-title').val().substring(0, 15),
      body: $('#idea-body').val().substring(0, 100)
    };

  $.ajax({
      type: 'POST',
      url:  '/api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        showIdea(newIdea);
        clearForm();
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });

}
