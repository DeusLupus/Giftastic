var topics = [
	'dog', 'cat', 'duck', 'rabbit', 'pig', 'mouse', 'coyote', 'roadrunner'
];

$.each(topics, function(index){
	var $topicbtn = $('<button>').addClass('btn btn-success')
								 .attr( 'id', topics[index])
								 .data('name', topics[index])
								 .text(topics[index]);

	console.log("button " + topics[index]);

	$('#buttons').append($topicbtn);
})

$('.btn').on('click', function(){
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).data() + "&api_key=dc6zaTOxFJmzC&limit=10";
})