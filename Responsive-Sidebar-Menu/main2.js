const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  toggleBtn.innerHTML = sidebar.classList.contains("expanded")
    ? '<i class="fas fa-angle-double-right"></i>'
    : '<i class="fas fa-angle-double-left"></i>';
});
