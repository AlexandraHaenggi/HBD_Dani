document.addEventListener('DOMContentLoaded', function () {
    const presentIcon = document.getElementById('presentIcon');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    const imagesDiv = document.getElementById('images');

    presentIcon.addEventListener('click', function () {
        console.log('Present icon clicked'); // Debugging line
        // Add an animation class to the present icon
        presentIcon.classList.add('animate');

        // Show the modal after a delay
        setTimeout(() => {
            console.log('Showing modal'); // Debugging line
            modal.style.display = 'flex';
        }, 1000); // Adjust delay to match animation duration
    });

    closeButton.addEventListener('click', function () {
        console.log('Close button clicked'); // Debugging line
        modal.style.display = 'none';
        presentIcon.classList.remove('animate'); // Reset the animation class
        imagesDiv.style.display = 'block'; // Show images after closing modal
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            console.log('Modal background clicked'); // Debugging line
            modal.style.display = 'none';
            presentIcon.classList.remove('animate'); // Reset the animation class
            imagesDiv.style.display = 'block'; // Show images after closing modal
        }
    });
});
