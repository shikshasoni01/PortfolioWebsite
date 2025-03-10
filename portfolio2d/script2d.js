var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
//page reloading every time navbar items clicked
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navbar a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      location.reload();
    });
  });
});

//domload cv button
document.getElementById("download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/assests/Shiksha Sourabh Soni.pdf"; // Replace with the actual CV file path
  link.download = "resume.pdf"; // The name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//for sending email
function sendEmail() {
  const name = document.getElementById("name").value;
  const emailto = "sonisomi29@gmail.com";
  const emailform = document.getElementById("email").value;
  const message = document.getElementById("body").value;

  if (emailform === "" && name === "" && message === "") {
    alert("please fill out all the fields");
  } else {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailto}&su=Contact from ${name}&body=${encodeURIComponent(
      message
    )}`;
    window.open(gmailURL, "_blank");
    alert("mail sent successfully");
  }
  document.getElementById("name").innerText = "";
  document.getElementById("email").innerText = "";
  document.getElementById("body").innerText = "";
  document.getElementById("subject").innerText = "";
}
