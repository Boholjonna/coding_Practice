




// This function is called when the button is clicked
// It changes the text of the button and the text of an element may it be p, h1, h2, etc. as long as it is text

function changeText(button, buttonOldText, newButtonText, elementId, newText) {
  const target = document.getElementById(elementId);

  // Store original text in a custom attribute if not already saved
  if (!target.hasAttribute('data-original-text')) {
    target.setAttribute('data-original-text', target.innerText);
  }

  const originalText = target.getAttribute('data-original-text');

  if (button.innerText === buttonOldText) {
    button.innerText = newButtonText;
    target.innerText = newText;
  } else {
    button.innerText = buttonOldText;
    target.innerText = originalText;
  }
}
