document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Berhasil Di Kirim Ke Zheta!! Terima kasih:D');
});

  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");
  });
