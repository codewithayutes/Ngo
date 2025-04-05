// Enable Bootstrap Scrollspy feature
document.addEventListener("DOMContentLoaded", function () {
    let scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbarNav",
        offset: 100
    });

    // Fade-in on scroll animation for Our Team section
    const faders = document.querySelectorAll('.fade-in-on-scroll');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

function showDonateSection() {
    const section = document.getElementById("donate");
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  function hideDonateSection() {
    document.getElementById("donate").style.display = "none";
  }
  
  function copyUPI() {
    const text = document.getElementById("upi-id").textContent;
    navigator.clipboard.writeText(text);
    alert("✅ UPI ID copied to clipboard!");
  }


  
