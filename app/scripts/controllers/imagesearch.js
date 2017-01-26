$(document).on('ready', function(){
  var searchPhotos = function(tags){
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    console.log(tags);
    //Request object from Flickr
    $.getJSON(flickrAPI, {
    tags: tags,
    tagmode: "any",
    format: "json" //Format it comes back in
    }).done(function (data){ // Receives the data from the JSON call.
      $("#images").empty(); // Empty the current content
      $.each(data.items, function(i, item){
        // Loop and parse items. Put individual items into the list.
        // Create var each time
        var newListItem = $('<li>').addClass("col-md-4");
        var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem); // Make p and add title from data, append to the new list item just created
        var newDate = $('<p class="image-date">').text(item.date_taken).appendTo(newListItem);
        var newDescription = $('<p class="image-description">').html(item.description).appendTo(newListItem);

        var newLink = $('<a>').attr('href', item.link).text('View on Flickr').addClass("flickr-link btn btn-sm ").appendTo(newListItem); // Add class to link so it can be styled

        // Button for modal
        var newButton = $("<button class='btn btn-sm btn-primary'>Enlarge</button>").attr({
          'data-title': item.title,
          'data-toggle': "modal",
          'data-target': "#infoModal",
          'data-imgsrc': item.media.m,
          'data-description': item.description,
          'type': "button"
        }).appendTo(newListItem);

        newListItem.appendTo('#images'); // Add content to the page
        if (i === 15) {
          return false;
        }
      });
    });
  };

  // Search button executes the search when clicked.
  $('button.search').on('click', function(event){
    // Prevent the default event execution so the browser doesn't
    event.preventDefault();
    // Get the value of 'input[name="searchText"]' and use the `tags` value,  send to `searchImages()`.
    var searchTextInput =
    $(event.target.parentElement).find('input[name="searchText"]')[0];
    console.log(searchTextInput);
    // Call `searchPhotos()` to fetch images
    searchPhotos(searchTextInput.value);
  });


  // "More info" popup
  $('#infoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.data('title'); // Extract info from data-* attributes
    var imgSrc = button.data('imgsrc');
    var imageDescription = button.data('description');

    // Update the modal's content. We'll use jQuery here.
    var modal = $(this);
    modal.find('.modal-title').html(title);
    var modalBody = modal.find('.modal-body');
    modalBody.empty();
    var modalDescription = $("<p class='image-description'>").html(imageDescription).appendTo(modalBody);
  });

});
