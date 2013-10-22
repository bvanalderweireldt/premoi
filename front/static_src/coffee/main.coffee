$( document ).ready ->
	loadSliders()

loadSliders = ->
	console.log ( "success" ) 
	$.getJSON( 'sliders')
		.done (data) ->
			slidersJson = JSON.parse( JSON.stringify(data) )
			alertMoi(slidersJson[0].fields.image)
			
		.fail ->
			alertMoi('Error while loading !')
