document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("internForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      alert(data.message);
      form.reset();

    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed");
    }
  });

});