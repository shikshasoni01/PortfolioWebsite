//turn pages when click next or previous button
document.querySelectorAll(".nextprev-btn").forEach((button, index) => {
  button.onclick = () => {
    const pageId = button.getAttribute("data-page");
    const page = document.getElementById(pageId);
    const isTurned = page.classList.toggle("turn");

    // To dynamically calculate the stacking order based on the index.
    // To avoid overlapping issues with other elements that might have fixed zIndex values below 20.

    setTimeout(() => {
      page.style.zIndex = isTurned ? 20 + index : 20 - index;
    }, 500);
  };
});

//contact me button on profile page
const pages = document.querySelectorAll(".book-page.page-right");

const contactbtn = document.querySelector(".btn.contact-me");
contactbtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}
//profile button on contact me  page
const backProfilebtn = document.querySelector(".back-profile");

backProfilebtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// //opening animation
const coverRight = document.querySelector(".cover.cover-right");

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2000);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 3000);

// opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2000);
});

//domload cv button
document.getElementById("download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/assests/resumemain.pdf"; // Replace with the actual CV file path
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
}
