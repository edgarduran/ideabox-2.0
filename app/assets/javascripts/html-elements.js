function editForm() {
  return $(
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
};


function individualIdea(idea) {
  return $(
    "<div class='idea' idea-id='" + idea.id + "'>"
    +"<div class='col s4'>"
    +"<div class='card blue-grey darken-1'>"
    +"<div class='card-content white-text'>"
    +"<h3 id='idea-title'>" + idea.title + "</h3>"
    +"<p id='idea-body'>" + idea.body + "</p>"
    + "<br>"
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
  )
};
