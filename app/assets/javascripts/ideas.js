$(document).ready(function(){
  allIdeas();
});

function showIdea(idea) {
  $('.allIdeas').append(
    "<div class='idea' idea-id='" + idea.id + "'>"
    +"<div class='row'>"
    +"<div class='col s12 m6'>"
    +"<div class='card blue-grey darken-1'>"
    +"<div class='card-content white-text'>"
    +"<h3 id='idea-title'>" + idea.title + "</h3>"
    +"<p id='idea-body'>" + idea.body + "</p>"
    +"<h5>Idea Qaulity:</h5>"
    +"<h4 id='quality'>" + idea.quality + "</h4>"
    +"</div>"
    +"<div class='card-action'>"
    +"<button id='thumbs-up'>Thumbs Up</button>"
    +"<button id='thumbs-down'>Thumbs Down</button><br><br>"
    +"<button id='edit-idea'>Edit Idea</button>"
    +"<button id='delete-idea'>Delete</button>"
    +"</div>"
    +"</div>"
    +"</div>"
    +"</div>"
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
