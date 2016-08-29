(function() {
  // get the modal script
  var modalScript = document.getElementById('modal_script');
  
  // get the shortname data from the script
  var shortname = modalScript.getAttribute('data-shortname');

  //set backgroundColor
  var backgroundColor = modalScript.getAttribute('data-background-color');

  if(!backgroundColor){
    backgroundColor = "#4186c7"
  };

  // modal style
  var modalStyle = '<style>' + 
    '#fareharbor-modal{position: fixed; z-index: 1; bottom: 0; width: 100%; height: 10px; overflow: auto; }' + 
    
    '#modal-content{z-index: 1; color:white; position: fixed; background-color: '+backgroundColor+
    '; width: 100%; padding-bottom: 150px;}' +

    '.loading{display:none;}' + 

    //Sytle Close X
    '#close{ display: block; color: blue; font-color: blue; float: right; margin-top: 5px; margin-right: 5px; padding: 3px; font-size: 28px; font-weight: bold; background-color: white; border-radius: 30px; -moz-border-radius: 30px; }'+
    
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
    // cover screen with modal
    var modalContainer = document.createElement('div');
    modalContainer.id = 'fareharbor-modal';
    // insert actual modal
    modalContainer.innerHTML = modalStyle + '<div class="loading" id="modal-content"><a href="#" id="close"> x </a><center><h2 id="modal-header">Advanced Purchase Required' + '</h2><table><tr><td><a href="https://fareharbor.com/embeds/book/'+shortname+'/" class="fh-button" onclick="return !(window.FH && FH.open({ shortname:\'' + shortname + '\', fallback:\'simple\', view:\'items\' }));">Book Now</a></td><td><a href="https://fareharbor.com/embeds/book/'+shortname+'/items/calendar/" onclick="return !(window.FH && FH.open({ shortname:\''+shortname+'\', fallback: \'simple\', view: \'all-availability\' }));" class="fh-button-red fh-button--cal">View Calendar</a></td></tr></table></center></div>'

    // add the modal to the page
    document.body.insertBefore(modalContainer, document.body.firstChild);
  }
  
  createFlyUpModal();
  
  // Get the modal
  var modalContent = document.getElementById('modal-content');

  // Get the (x) element that closes the modal
  var close = document.getElementById("close");

  // When the window loads, open the modal 
  window.onload = function() { modalContent.className="active" }

  // When the user clicks on (x), close the modal
  close.onclick = function() { modalContent.className="hidden" }

})();
