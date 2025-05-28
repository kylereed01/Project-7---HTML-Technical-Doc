function showContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.doc-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('intro');
});