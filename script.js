const panels = document.querySelectorAll('.panel');

/* Defining a click event listener with a function for each panel */
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(); //First, the class 'active' will be removed from all panels
    panel.classList.add('active'); // Second, the class 'active' will be added to the clicked panel, that what will make it expand'
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
