// Simulated shelter data
const shelters = [
    { id: 1, name: "Community Center", address: "123 Main St", capacity: 200, lat: 40.7128, lng: -74.0060 },
    { id: 2, name: "High School Gym", address: "456 Oak Ave", capacity: 150, lat: 40.7282, lng: -73.9942 },
    { id: 3, name: "Public Library", address: "789 Elm St", capacity: 100, lat: 40.7589, lng: -73.9851 },
];

// Populate available shelters
const shelterList = document.getElementById('shelter-list');

shelters.forEach(shelter => {
    const shelterItem = document.createElement('div');
    shelterItem.classList.add('shelter-item');
    shelterItem.innerHTML = `
        <h3>${shelter.name}</h3>
        <p>${shelter.address}</p>
        <p>Capacity: ${shelter.capacity}</p>
    `;
    shelterList.appendChild(shelterItem);
});

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12
    });

    shelters.forEach(shelter => {
        const marker = new google.maps.Marker({
            position: { lat: shelter.lat, lng: shelter.lng },
            map: map,
            title: shelter.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <h3>${shelter.name}</h3>
                <p>${shelter.address}</p>
                <p>Capacity: ${shelter.capacity}</p>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Handle shelter request form submission
const shelterForm = document.getElementById('shelter-form');
shelterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(shelterForm);
    const shelterRequest = Object.fromEntries(formData.entries());
    console.log('Shelter request submitted:', shelterRequest);
    alert('Shelter request submitted successfully!');
    shelterForm.reset();
});

// Handle volunteer registration form submission
const volunteerForm = document.getElementById('volunteer-form');
volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(volunteerForm);
    const volunteerData = Object.fromEntries(formData.entries());
    console.log('Volunteer registration submitted:', volunteerData);
    alert('Volunteer registration submitted successfully!');
    volunteerForm.reset();
});

// Add animations to elements
function addAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });
}

// Call addAnimations when the page loads
window.addEventListener('load', addAnimations);

// Add this to your CSS file for the fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);