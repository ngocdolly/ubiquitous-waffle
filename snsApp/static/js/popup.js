function showLoginPopup() {
  const loginPopup = document.getElementById('login-popup');
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      loginPopup.innerHTML = xhr.responseText;
      loginPopup.style.display = "block";
    }
  };
  xhr.open('GET', '/components/login.html', true);
  xhr.send();

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', hideLoginPopup);
}


