// Animate progress bars on page load
window.addEventListener("load", () => {
  document.querySelectorAll(".progress div").forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});
