$(document).ready(function(){
  allIdeas();
});


function showIdea(idea) {
  $('.allIdeas').append(individualIdea(idea));
}

function showNewIdea(idea) {
  $('.allIdeas').prepend(individualIdea(idea));
}


function allIdeas() {
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas',
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        showIdea(idea);
      });
    }
  });
}
