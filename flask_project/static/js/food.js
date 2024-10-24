document.addEventListener("DOMContentLoaded", function() {
    // Define bounds for India
    var indiaBounds = L.latLngBounds(
        L.latLng(6.4626, 68.1100), // Southwest corner
        L.latLng(37.4820, 97.4130)  // Northeast corner
    );

    // Initialize the map centered on India with bounds
    var map = L.map('map', {
        maxBounds: indiaBounds,
        maxBoundsViscosity: 1.0
    }).setView([20.5937, 78.9629], 5); // Centered on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([20.5937, 78.9629]).addTo(map)
        .bindPopup('Our Location')
        .openPopup();

    // Restrict the map to India bounds
    map.setMaxBounds(indiaBounds);
    map.on('moveend', function() {
        if (!indiaBounds.contains(map.getCenter())) {
            map.panInsideBounds(indiaBounds);
        }
    });

    // Update marker position on map click
    map.on('click', function(e) {
        var latLng = e.latlng;
        if (indiaBounds.contains(latLng)) {
            marker.setLatLng(latLng);
            map.setView(latLng, map.getZoom());
            marker.bindPopup('New Location: ' + latLng.toString()).openPopup();
        }
    });

    // Form submission handling
    var form = document.getElementById("request-form");
    var responseElement = document.getElementById("form-response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;

        // Display a thank-you message
        responseElement.textContent = 'Thank you, ${name}! Your request will be processed.';

        // Geocode the address and update marker location
        geocodeAddress(address, function(latLng) {
            if (latLng && indiaBounds.contains(latLng)) {
                marker.setLatLng(latLng);
                map.setView(latLng, map.getZoom());
                marker.bindPopup('Requested Location: ' + latLng.toString()).openPopup();
            } else {
                alert('Unable to find location or location outside India. Please check the address and try again.');
            }
        });
    });

    // Geocode function using OpenStreetMap Nominatim API
    function geocodeAddress(address, callback) {
        var url = 'https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&accept-language=en&countrycodes=IN';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    var lat = parseFloat(data[0].lat);
                    var lon = parseFloat(data[0].lon);
                    callback(L.latLng(lat, lon));
                } else {
                    callback(null);
                }
            })
            .catch(() => callback(null));
    }

    // Scroll to Top functionality
    var scrollToTopBtn = document.getElementById("scrollToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
    scrollToTopBtn.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Real-Time Updates simulation
    var updatesElement = document.getElementById("updates");
    var updates = [
        "Update 1: Supplies have arrived at the central distribution center.",
        "Update 2: Volunteers needed for packing food.",
        "Update 3: Distribution to affected areas is underway."
    ];

    function displayUpdates() {
        updatesElement.innerHTML = "";
        updates.forEach(function(update) {
            var p = document.createElement("p");
            p.textContent = update;
            updatesElement.appendChild(p);
        });
    }

    displayUpdates();
});