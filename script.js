


    function changeText(elementId, newText, resetText, buttonResetText) {
      const element = document.getElementById(elementId);
      const button = event.target; // Refers to the button that was clicked

      if (element.innerHTML === newText) {
        element.innerHTML = resetText;
        button.innerHTML = buttonResetText;
      } else {
        element.innerHTML = newText;
        button.innerHTML = "Reset";
      }
    }


    
 
   
    
    
    
