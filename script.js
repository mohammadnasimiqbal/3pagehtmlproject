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



setInterval(() => {
    document.getElementById("datetime").innerHTML=new Date().toDateString();

}, 1000);





setInterval(()=> {
    document.getElementById("datetime")






}, 1000);