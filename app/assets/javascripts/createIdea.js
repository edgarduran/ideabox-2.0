$(document).ready(function(){
  createIdea();
});


function createIdea() {
  $('#create-idea').on('click', function() {
    var ideaParams = {
        title: $('#idea-title').val(),
        body: $('#idea-body').val()
    }
    $('#idea-title').val('');
    $('#idea-body').val('');

  $.ajax({
      type: 'POST',
      url:  'http://localhost:3000/api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        showIdea(newIdea)
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })

};
