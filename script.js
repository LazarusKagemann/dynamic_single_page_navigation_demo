document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionId = section.id;
        fetch(`${sectionId}.html`)
            .then(response => response.text())
            .then(data => {
                section.innerHTML = data;
            })
            .catch(error => console.error('Error loading section content:', error));
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
