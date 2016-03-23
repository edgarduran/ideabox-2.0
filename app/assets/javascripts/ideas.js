$(document).ready(function(){
  allIdeas();
});

function showIdea(idea) {
  $('.allIdeas').append(
    "<div class='idea' idea-id='" + idea.id + "'>"
      +"<h4 id='idea-title'> Idea title: " + idea.title + "</h4>"
      +"<p id='idea-body'>" + idea.body + "</p>"
      +"<p id='quality'>" + idea.quality + "</p>"
      +"<button id='thumbs-up'>Thumbs Up</button>"
      +"<button id='thumbs-down'>Thumbs Down</button>"
      +"<button id='edit-idea'>Edit Idea</button>"
      +"<button id='delete-idea'>Delete</button>"
    +"</div>"
  )
};

function allIdeas() {
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas',
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        showIdea(idea)
      })
    }
  })
};
