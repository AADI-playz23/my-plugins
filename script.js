const compileBtn = document.getElementById("compileBtn");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const repairBtn = document.getElementById("repairBtn");

compileBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  popupMessage.textContent = "Compiling plugin...";

  // Fake delay to simulate compilation
  setTimeout(() => {
    const error = Math.random() < 0.5; // 50% chance of error
    if (error) {
      popupMessage.textContent = "Error found in plugin!";
      repairBtn.classList.remove("hidden");
    } else {
      popupMessage.textContent = "Plugin compiled successfully ✅";
    }
  }, 3000);
});

repairBtn.addEventListener("click", () => {
  popupMessage.textContent = "Repairing error...";
  repairBtn.classList.add("hidden");

  setTimeout(() => {
    popupMessage.textContent = "Error fixed and plugin compiled ✅";
  }, 2000);
});
