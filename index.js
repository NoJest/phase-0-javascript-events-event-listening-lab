function addingEventListener() { 
    const input = document.getElementById('button');
    function mouseOverAlert(){
        alert('Mouse is over the butt!');
    }
    function clickAlert() {
      alert('heehee that tickles!');
    }
    
    input.addEventListener('click', clickAlert);
    input.addEventListener('mouseover', mouseOverAlert);
}
addingEventListener();