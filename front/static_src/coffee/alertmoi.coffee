###
Alertmoi main function
###
alertMoi = (message) ->
	new AlertMoi(message)

class AlertMoi

	divClass = 'alertmoi'
	divContentClass = 'content'
	divOkButton = '<div class="button">Ok</div>'
	fadeDuration = 800
	backDiv = '<div class="hider"></div>'
	backSelector = 'body'
	backClass = 'hider'
	backLowOpacityClass = 'hiderOpacity'
	html = ''

	constructor: (@message) ->
		@constructHtml()
		@displayAlert()
		@bindEvent()

	#Construct the html content from the message
	constructHtml: ->
		content = @constructDiv( divContentClass, @message )
		html = @constructDiv( divClass, content + divOkButton )

	constructDiv: (divClass, content) ->
		return '<div class="' + divClass + '">' + @constructP(content) + '</div>'

	constructP: (content) ->
		return '<p>' + content + '</p>'

	displayAlert: ->
		$(backSelector).append(backDiv)
		$(backSelector).append(html)
		$('.' + backClass).addClass(backLowOpacityClass)
		$('.' + backClass).fadeIn(fadeDuration)
		$('.' + divClass).fadeIn(fadeDuration)

	bindEvent: ->
		$('.' + divClass + ' .button').click ->
			$('.' + backClass).removeClass(backLowOpacityClass)
			$('.' + divClass).fadeOut(fadeDuration)