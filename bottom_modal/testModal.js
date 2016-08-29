(function() {
  // get the modal script
  var modalScript = document.getElementById('modal_script');
  
  // get the shortname data from the script
  var shortname = modalScript.getAttribute('data-shortname');

  // modal style
  var modalStyle = '<style>' + 
    '#fareharbor-modal{ z-index: 1; color:white; position: fixed; background-color: #4186c7; width: 100%; padding-bottom: 15px; }' +

    '.loading{ display:none; }' + 

    //Style Close X
    '#close{ display: block; float: right; margin-top: 5px; margin-right: 5px; padding: 3px; }'+
    '#close-icon{ width: 55px; }' +
    
    //Slide in CSS
    '.active {bottom: -300px; animation: active 2s 2s both; -webkit-animation: active 2s 2s both;}' +
    '@keyframes active { 100% {bottom: 0px}}'+
    '@-webkit-keyframes active { 100% {bottom: 0px}}'+

    //Slide out CSS
    '.hidden {bottom: 0px; animation: hidden 2s both; -webkit-animation: hidden 2s both;}' +
    '@keyframes hidden { 100% {bottom: -300px}}'+
    '@-webkit-keyframes hidden { 100% {bottom: -300px}}'+
    '</style>';
  
  var createFlyUpModal = function() {
    // create modal
    var modal = document.createElement('div');
    modal.id = 'fareharbor-modal';
    modal.innerHTML = modalStyle + '<a href="javascript:void(0)" id="close"><img id="close-icon" src="http://halloooo.com/images/closeIcon.png"> </a><center><h2 id="modal-header">Advanced Purchase Required' + '</h2><table><tr><td><a href="https://fareharbor.com/embeds/book/'+shortname+'/" class="fh-button" onclick="return !(window.FH && FH.open({ shortname:\'' + shortname + '\', fallback:\'simple\', view:\'items\' }));">Book Now</a></td><td><a href="https://fareharbor.com/embeds/book/'+shortname+'/items/calendar/" onclick="return !(window.FH && FH.open({ shortname:\''+shortname+'\', fallback: \'simple\', view: \'all-availability\' }));" class="fh-button-red fh-button--cal">View Calendar</a></td></tr></table></center>'

    // add the modal to the page
    document.body.insertBefore(modal, document.body.lastChild);
  }
  
  createFlyUpModal();
  
  // Get the modal
  var modal = document.getElementById('fareharbor-modal');

  // Get the (x) element that closes the modal
  var close = document.getElementById('close');

  // When the window loads, open the modal 
  window.onload = function() { modal.className='active' }

  // When the user clicks on (x), close the modal
  close.onclick = function() { modal.className='hidden' }

})();
