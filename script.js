
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });



document.querySelector(".resumeDownload").addEventListener("click", function() {
  const resumeFilePath = "./resume/Lokesh-Kumar-Resume.pdf";
  downloadResume(resumeFilePath);
});

function downloadResume(fileUrl) {
  const anchor = document.createElement("a");
  anchor.style.display = "none";
  anchor.href = fileUrl;
  anchor.download = "lokesh-Kumar-Resume"; 
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// style for slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); 
}

showSlides();


// Integrate GitHub calendar
GitHubCalendar(".calendar", "lokeshkumar111");

// or enable responsive functionality:
GitHubCalendar(".calendar", "lokeshkumar111", { responsive: true });

// // Use a proxy if needed
GitHubCalendar(".calendar", "lokeshkumar111", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  }
}).then((r) => r.text());



  