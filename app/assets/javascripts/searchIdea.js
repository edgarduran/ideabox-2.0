$(document).ready(function(){
  searchIdea();
});

function searchIdea() {
  $('#idea-search').keyup(function(event) {
    var searchTerm = $(this).val().toLowerCase();
    var ideas      = $('.allIdeas').children();

    ideas.removeClass('dont-show');

    var hiddenIdeas = ideas.filter(function() {
      var titleAndBodyText = $(this).find('#idea-title, #idea-body')
                                    .text()
                                    .toLowerCase();
      return !(titleAndBodyText.includes(searchTerm));
    });

    hiddenIdeas.addClass('dont-show');
  });
}

var titleAndBodyText = $(this).parents().next().find('#idea-title, #idea-body');
