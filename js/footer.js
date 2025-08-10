// footer.js - inject footer partial
fetch('partials/footer.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.innerHTML = data;
    else document.body.insertAdjacentHTML('beforeend', data);
  })
  .catch(err => console.error('Failed to load footer partial:', err));
