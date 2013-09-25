$( document ).ready ->
	loadSliders()

loadSliders = ->
	console.log ( "success" ) 
	$.getJSON( 'sliders')
	.done ->
		alertMoi('ceci est l appel')
	.fail ->
		alertMoi('ceci est l appel')
