const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Load saved mode
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  body.classList.add("dark");
}

// Toggle theme and save preference
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  // Animate button
  toggleBtn.classList.add("animate-wiggle");
  setTimeout(() => toggleBtn.classList.remove("animate-wiggle"), 400);
  
  // Save preference
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});
