const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('closes')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
};;






// script.js

const themeToggleButton = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Check for saved theme in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
} else {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Toggle icon visibility
    if (document.body.classList.contains('light-theme')) {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    } else {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    }
    
    // Save the theme to local storage
    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

 // This script sets the current year
 document.getElementById("year").textContent = new Date().getFullYear();



 function toggleDescription(id) {
  const description = document.getElementById(`description-${id}`);
  description.style.display = description.style.display === 'block' ? 'none' : 'block';
}