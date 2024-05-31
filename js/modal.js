const modal = () => {
  const modalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("modal__close");
    closeBtn.innerHTML = "&times;"; // Символ ×

    const modalInner = document.querySelector(".modal__inner");
    modalInner.appendChild(closeBtn);

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
};

modal();
