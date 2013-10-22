/*
Alertmoi main function
*/

var AlertMoi, alertMoi;

alertMoi = function(message) {
  return new AlertMoi(message);
};

AlertMoi = (function() {
  var backClass, backDiv, backLowOpacityClass, backSelector, divClass, divContentClass, divOkButton, fadeDuration, html;

  divClass = 'alertmoi';

  divContentClass = 'content';

  divOkButton = '<div class="button">Ok</div>';

  fadeDuration = 800;

  backDiv = '<div class="hider"></div>';

  backSelector = 'body';

  backClass = 'hider';

  backLowOpacityClass = 'hiderOpacity';

  html = '';

  function AlertMoi(message) {
    this.message = message;
    this.constructHtml();
    this.displayAlert();
    this.bindEvent();
  }

  AlertMoi.prototype.constructHtml = function() {
    var content;
    content = this.constructDiv(divContentClass, this.message);
    return html = this.constructDiv(divClass, content + divOkButton);
  };

  AlertMoi.prototype.constructDiv = function(divClass, content) {
    return '<div class="' + divClass + '">' + this.constructP(content) + '</div>';
  };

  AlertMoi.prototype.constructP = function(content) {
    return '<p>' + content + '</p>';
  };

  AlertMoi.prototype.displayAlert = function() {
    $(backSelector).append(backDiv);
    $(backSelector).append(html);
    $('.' + backClass).addClass(backLowOpacityClass);
    $('.' + backClass).fadeIn(fadeDuration);
    return $('.' + divClass).fadeIn(fadeDuration);
  };

  AlertMoi.prototype.bindEvent = function() {
    return $('.' + divClass + ' .button').click(function() {
      $('.' + backClass).removeClass(backLowOpacityClass);
      return $('.' + divClass).fadeOut(fadeDuration);
    });
  };

  return AlertMoi;

})();

var loadSliders;

$(document).ready(function() {
  return loadSliders();
});

loadSliders = function() {
  console.log("success");
  return $.getJSON('sliders').done(function(data) {
    var slidersJson;
    slidersJson = JSON.parse(JSON.stringify(data));
    return alertMoi(slidersJson[0].fields.image);
  }).fail(function() {
    return alertMoi('Error while loading !');
  });
};
