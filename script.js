// Typing animation
new Typed(".typing", {
  strings: ["Grafyxora", "Designer", "Creative Artist"],
  typeSpeed: 80,
  loop: true
});

// Scroll animation
ScrollReveal().reveal('.section', { delay: 200 });

// Portfolio render
const grid = document.getElementById("portfolioGrid");
portfolio.forEach(item => {
  let div = document.createElement("div");
  div.textContent = item;
  grid.appendChild(div);
});

// Result render
const tbody = document.getElementById("resultBody");

function render(data) {
  tbody.innerHTML = "";
  data.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${r.rank}</td>
        <td>${r.name}</td>
        <td>${r.school}</td>
        <td>${r.grade}</td>
      </tr>`;
  });
}
render(results);

// Search system
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = results.filter(r => r.name.toLowerCase().includes(value));
  render(filtered);
});
// Typing animation
new Typed(".typing", {
  strings: ["Grafyxora", "Graphic Designer", "Creative Artist"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});

// Scroll reveal
ScrollReveal().reveal('.section', {
  distance: '50px',
  duration: 1000,
  origin: 'bottom',
  interval: 200
});
function openModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
