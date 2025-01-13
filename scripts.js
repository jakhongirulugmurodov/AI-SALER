// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        business: document.getElementById('business').value,
        problem: document.getElementById('problem').value
    };
    console.log('Form Data:', formData);
    alert('Rahmat! So‘rovingiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.');
    this.reset();
});
