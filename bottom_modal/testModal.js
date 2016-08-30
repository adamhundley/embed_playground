(function() {
  // get the modal script
  var modalScript = document.getElementById('modal_script');
  
  // get the shortname data from the script
  var shortname = modalScript.getAttribute('data-shortname');

  // modal style
  var modalStyle = '<style>' + 
    '#fareharbor-modal{ z-index: 1; position: fixed; background-color: rgba(255,255,255, .9); width: 100%; padding-bottom: 15px; -webkit-box-shadow: -1px -4px 25px 2px rgba(0,0,0,0.63); -moz-box-shadow: -1px -4px 25px 2px rgba(0,0,0,0.63); box-shadow: -1px -4px 25px 2px rgba(0,0,0,0.63); }' +

    '#modal-header{z-index: 1; font-color: black; }'+

    //Style Close X
    '#close-icon{ z-index: 1; width: 35px; display: block; float: right; margin-top: 5px; margin-right: 5px; padding: 3px; }' +
    
    '.loading{ display: none; }' + 

    '#book-buttons{ z-index: 1; list-style-type: none; margin: 0; }' +
    '.lists{ display: inline; padding-left: 100px; padding-right: 100px;}' +
    
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
    modal.className = 'loading';
    modal.id = 'fareharbor-modal';
    modal.innerHTML = modalStyle + '<link rel="stylesheet" href="https://fh-kit.com/buttons/v1/?red=f70000" type="text/css" media="screen" /><a href="javascript:void(0)"><img id="close-icon" src="https://openclipart.org/image/800px/svg_to_png/183568/close-button.png"></a><center><h2 id="modal-header">Advanced Purchase Required' + '</h2><ul id="book-buttons"><li class="lists"><a href="https://fareharbor.com/embeds/book/'+shortname+'/" class="fh-button fh-button--check" onclick="return !(window.FH && FH.open({ shortname:\'' + shortname + '\', fallback:\'simple\', view:\'items\' }));">Book Now</a></li><li class="lists"><a href="https://fareharbor.com/embeds/book/'+shortname+'/items/calendar/" onclick="return !(window.FH && FH.open({ shortname:\''+shortname+'\', fallback: \'simple\', view: \'all-availability\' }));" class="fh-button-red fh-button--cal">View Calendar</a></li></ul></center>'

    // add the modal to the page
    document.body.insertBefore(modal, document.body.childNodes[-1]);
  }
  
  createFlyUpModal();
  
  // Get the modal
  var modal = document.getElementById('fareharbor-modal');

  // Get the (x) element that closes the modal
  var close = document.getElementById('close-icon');

  // When the window loads, open the modal 
  window.onload = function() { modal.className='active' }

  // When the user clicks on (x), close the modal
  close.onclick = function() { modal.className='hidden' }

})();
