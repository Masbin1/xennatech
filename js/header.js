// header.js - inject header partial
fetch('partials/header.html')
  .then(res => res.text())
  .then(data => {
    // Insert partial into <header-placeholder> element if exists, else into document.body at top
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) placeholder.innerHTML = data;
    else {
      // create a temp wrapper and insert before first element
      const temp = document.createElement('div');
      temp.innerHTML = data;
      document.body.insertBefore(temp, document.body.firstChild);
    }
  })
  .catch(err => console.error('Failed to load header partial:', err));
