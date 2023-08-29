document.addEventListener("DOMContentLoaded", function () {
  const overlayButtons = document.querySelectorAll(".overlay");
  const submitButton = document.querySelector(".submit");
  const container = document.querySelector(".container");
  const container2 = document.querySelector(".container2");
  const selectedDiv = document.querySelector(".selected");

  let selectedNumber = null;

  function clearButtonStyles() {
    overlayButtons.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
  }

  function applySelectedStyles(button) {
    selectedNumber = parseInt(button.textContent);
    button.style.backgroundColor = "hsl(25, 97%, 53%)";
    button.style.color = "white";
  }

  overlayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearButtonStyles();
      applySelectedStyles(button);
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedNumber !== null) {
      container.style.display = "none";
      container2.style.display = "flex";
      selectedDiv.textContent = `You selected ${selectedNumber} out of 5.`;
    }
  });
});
