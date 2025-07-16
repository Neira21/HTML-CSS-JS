
  const items = document.querySelectorAll("nav ul li");

  items.forEach(item => {
    item.addEventListener("click", () => {

      // solo el primero que tenga active
      

      // Elimina la clase active de todos
      items.forEach(i => i.classList.remove("active"));
      // Añade la clase active al clickeado
      item.classList.add("active");
    });
  });
