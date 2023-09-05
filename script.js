
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

// script for slideshow
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 2000); 
// }

// showSlides();
  // Function to start the slideshow for a specific card
  function startSlideshow(cardIndex) {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.project-card')[cardIndex].querySelectorAll('.slide');
    
    function showSlide(n) {
      if (n < 0) {
        slideIndex = slides.length - 1;
      }
      if (n >= slides.length) {
        slideIndex = 0;
      }
      slides.forEach((slide) => (slide.style.display = 'none'));
      slides[slideIndex].style.display = 'block';
    }
    
    function nextSlide() {
      showSlide((slideIndex += 1));
    }
    
    function prevSlide() {
      showSlide((slideIndex -= 1));
    }
    
    showSlide(slideIndex);
    
    setInterval(() => {
      nextSlide();
    }, 1000); // Change slide every 3 seconds (adjust this as needed)
  }
  
  // Initialize the slideshow for each project card
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    startSlideshow(index);
  });




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



  