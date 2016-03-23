$(document).ready(function(){
  allIdeas();
});

function showIdea(idea) {
  $('.allIdeas').append(
    "<div class='idea' idea-id='" + idea.id + "'>"
      +"<h4> Idea title: " + idea.title + "</h4>"
      +"<p>" + idea.body + "</p>"
      +"<p id='quality'>" + idea.quality + "</p>"
      +"<p id='score'>" + idea.score + "</p>"
      +"<button id='thumbs-up'>Thumbs Up</button>"
      +"<button id='thumbs-down'>Thumbs Down</button>"
      +"<button id='delete-idea'>Delete</button>"
    +"</div>"
  )
};

function allIdeas() {
  $.ajax({
    type: 'GET',
    url:  'http://localhost:3000/api/v1/ideas',
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        showIdea(idea)
      })
    }
  })
};
