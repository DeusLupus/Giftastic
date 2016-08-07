var topics = [
	'dog', 'cat', 'duck', 'rabbit', 'pig', 'mouse', 'coyote', 'roadrunner', 'wolverine'
];

$.each(topics, function(index){
	var $topicbtn = $('<button>').addClass('btn btn-success')
								 .attr('id', topics[index])
								 .data('name', topics[index])
								 .text(topics[index]);

	console.log("button " + topics[index]);

	$('#buttons').append($topicbtn);
})

$('.btn').on('click', function(){
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).data('name') + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response){
    	var results = response.data;

    	for (var i = 0; i < 10 ; i++) {
            var gifDiv = $('<div class="giphy">');

            var rating = results[i].rating;

            var p = $('<p>').text("Rating: " + rating);

            var gifImage = $('<img>');
            gifImage.attr('src', results[i].images.fixed_height.url).attr('state', 'still');

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $('#gifholder').prepend(gifDiv);
        }

    });
})