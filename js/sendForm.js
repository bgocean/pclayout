const sendForm = () => {
    const form = document.querySelector(".modal");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      const sendObj = {};
      formData.forEach((value, key) => {
        sendObj[key] = value;
      });
  
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(sendObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка сети");
          }
          return response.json();
        })
        .then((json) => {
          console.log(json);
          // Показываем уведомление пользователю
          alert("Форма успешно отправлена!");
        })
        .catch((error) => {
          console.error("Ошибка:", error);
          // Показываем уведомление об ошибке пользователю
          alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
        })
        .finally(() => {
          form.reset(); // Очищаем форму
          console.log("Форма очищена");
        });
    });
  };
  
  sendForm();
  