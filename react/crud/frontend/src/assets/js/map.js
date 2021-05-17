function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -20.8319, lng: -41.121 },
        zoom: 15,
        mapTypeId: 'roadmap'
    });
    map = new google.maps.Map(document.getElementById('map'), mapOption);
}