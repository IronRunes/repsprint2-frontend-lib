/** main js script **/
$(document).ready(function(){

  console.log('started...');

  /** box toggling **/
  $('.box-toggler:radio').change(function(){
    if($(this).val() == 'yes'){
      $($(this).data('toggle-target')).removeClass('hidden').addClass('show');
    }
    else {
      $($(this).data('toggle-target')).addClass('hidden').removeClass('show');
    }
  });

  /** display input field to enter "other" value **/
  $('select').change(function(){

    if($(this).val() == 'other'){
      $('#' + $(this).attr('id') + '-other').addClass('show').removeClass('hidden').focus();
    }
    else {
      $('#' + $(this).attr('id') + '-other').addClass('hidden').removeClass('show');
    }
  });

  /** get MP **/
  $.getJSON('http://api.parldata.eu/hu/orszaggyules/people/550303bc273a39033bab34ed', function(result){
    $('#start .media-heading').text(result.name);
    $('#start .media-heading + a').attr('href', 'mailto:' + result.email).text(result.email);
    $('#start .media-left').append('<img class="media-object" src="' + result.image + '" title="' + result.name + '" alt="' + result.name + '">');
  });

  /** capture repeating blocks on load to get clean portions **/

  var repeatBlock = [];
  $('button.repeater').each(function(i){
    repeatBlock.push( $(this).prev().clone() );
  });
  console.log(repeatBlock);

  /** Add more input fields on click **/
  $('button.repeater').click(function(e){
    e.preventDefault();
    var repeaterClone = $(this).prev().clone();
    repeaterClone.find('input').val('');
    $(repeaterClone).insertAfter($(this).prev());
    //$(repeaterClone).find('.selectpicker').selectpicker('render');

  });

});
