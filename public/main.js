function initializeSpotlight() {
  const spotlight = document.getElementById("spotlight");
  if (spotlight) {
    document.body.classList.add("spotlight-enabled");
    document.addEventListener("mousemove", (e) => {
      spotlight.style.top = `${e.clientY}px`;
      spotlight.style.left = `${e.clientX}px`;
    });
  } else {
    console.error('Spotlight element not found');
  }
}

function navigateTo(event, url) {
  if (event.ctrlKey || event.metaKey) {
    return;
  }
  event.preventDefault();
  history.pushState(null, '', url);
  location.href = url; // This line reloads the page
}

function attachLinkHandlers() {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('target') !== '_blank' && link.rel !== 'noopener noreferrer') {
        navigateTo(e, link.href);
      }
    });
  });
}

window.addEventListener("popstate", () => {
  fetch(location.pathname)
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
      document.dispatchEvent(new CustomEvent("page:load"));
    })
    .catch(err => console.error("Failed to load page:", err));
});

document.addEventListener("DOMContentLoaded", () => {
  initializeSpotlight();
  attachLinkHandlers();

  document.addEventListener("page:load", () => {
    initializeSpotlight();
    attachLinkHandlers();
  });
});
  