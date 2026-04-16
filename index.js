/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  // Select element by ID and change its text content
  const heading = document.getElementById('main-heading');
  if (heading) {
    heading.textContent = 'DOM Manipulation Challenge';
  }
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  // Select element by ID and modify its style property
  const box = document.getElementById('box-to-modify');
  if (box) {
    box.style.backgroundColor = 'lightblue';
  }
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  // Create new element using createElement
  const newItem = document.createElement('li');
  // Set its text content
  newItem.textContent = 'New Item';
  // Select the parent element and append the new child
  const itemList = document.getElementById('item-list');
  if (itemList) {
    itemList.appendChild(newItem);
  }
}

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  // Select element by class name (querySelector is preferred as shown in Chapter 9)
  const paragraph = document.querySelector('.content-para');
  if (paragraph) {
    // Using classList to add a class (as shown on page 11, Chapter 9)
    paragraph.classList.add('highlight');
  }
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  // Select the element to remove
  const elementToRemove = document.getElementById('to-be-removed');
  if (elementToRemove) {
    // Remove the child from its parent (as shown on page 20, Chapter 9)
    elementToRemove.remove();
  }
}
