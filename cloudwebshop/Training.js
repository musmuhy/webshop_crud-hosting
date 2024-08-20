// Placeholder for JavaScript functionality, if needed
document.addEventListener('DOMContentLoaded', () => {
    // You can add interactivity here
});

function initMap() {
    var gymLocation = { lat: -25.363, lng: 131.044 }; // Example coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: gymLocation
    });
    var marker = new google.maps.Marker({
        position: gymLocation,
        map: map
    });
}
