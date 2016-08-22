(function() {

  // get the modal script
  var modalScript = document.querySelectorAll('script[src*=modal]');
  
  // get the shortname data from the script
  var shortname = modalScript[0].getAttribute('data-shortname');

  var modalStyle = '<style>' + 
  '#fareharbor-modal{display: none;position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); -webkit-animation-name: fadeIn; -webkit-animation-duration: 0.4s; animation-name: fadeIn; animation-duration: 0.4s}' + 
  '.modal{display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); -webkit-animation-name: fadeIn; -webkit-animation-duration: 0.4s; animation-name: fadeIn; animation-duration: 0.4s}' + 
  '#modal-content{ position: fixed; bottom: 0; background-color: #fefefe; width: 100%; -webkit-animation-name: slideIn; -webkit-animation-duration: 0.4s; animation-name: slideIn; animation-duration: 0.4s; }' + 
  '.close{ color: white; float: right; font-size: 28px; font-weight: bold; }'+
  '.close:hover{color: #000; text-decoration: none; cursor: pointer;}'+
  '.close:focus{color: #000; text-decoration: none; cursor: pointer;}'+
  '.modal-header {padding: 2px 16px; background-color: #5cb85c; color: white;}'+
  '.modal-body {padding: 2px 16px;}'+
  '.modal-footer {padding: 2px 16px; background-color: #5cb85c; color: white;}'+
  '@-webkit-keyframes slideIn { from {bottom: -300px; opacity: 0} to {bottom: 0; opacity: 1} }'+
  '@keyframes slideIn { from {bottom: -300px; opacity: 0} to {bottom: 0; opacity: 1}}'+
  '@-webkit-keyframes fadeIn { from {opacity: 0} to {opacity: 1} }'+
  '@keyframes fadeIn { from {opacity: 0} to {opacity: 1} }'+
  '</style>'
  
  var createFlyUpModal = function() {
    var modalContainer = document.createElement('div');
    modalContainer.id = 'fareharbor-modal';
    modalContainer.class = 'modal';
    modalContainer.innerHTML = modalStyle + '<div id="modal-content"><span class="close">x</span><center><p>Advanced Purchase Required' + '</p><br><a class="fh-button" href="https://fareharbor.com/embeds/book/'+shortname+'/">Book Now</a><a href="https://fareharbor.com/embeds/book/'+shortname+'/items/calendar/" class="fh-button-red fh-button--cal">View Calendar</a></center></div>'
    document.body.insertBefore(modalContainer, document.body.firstChild);
  }
  
  createFlyUpModal();
  
  // Get the modal
  var modal = document.getElementById('fareharbor-modal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // 
  // When the window loads, open the modal 
  window.onload = function() {
    modal.style.display = "block";
  }
  // 
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
})();
