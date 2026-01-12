const moods = document.querySelectorAll(".mood");

moods.forEach(mood => {
  mood.addEventListener("click", () => {
    moods.forEach(m => m.classList.remove("active"));
    mood.classList.add("active");
  });
});
