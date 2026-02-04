setInterval(() => {
  document.getElementById("datetime").innerHTML=new Date().toLocaleString();
}, 1000);



document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    alert("✅Message sent");

    form.reset();
  });
});
