let orgCoordinates = coordinates;
let map;

let lat = []
let lng = []

const endpoint = `https://maps.gomaps.pro/maps/api/geocode/json`;
const API_KEY = 'AlzaSyi2FuDew1ZmJf11mGh5K_Z8YejT7wVEymu';
let address = orgCoordinates;
const url = `${endpoint}?address=${encodeURIComponent(address)}&key=${API_KEY}`;

async function mapCoordinate() {
    const value = await fetch(url);
    const data = await value.json();

    let coordinate = data.results[0].geometry.location
    lat.push(coordinate.lat)
    lng.push(coordinate.lng)
}
mapCoordinate()


function initMap() {
    let lat1 = lat[0]
    let lng1 = lng[0]
    
    map = new google.maps.Map(document.getElementById('map'), { center: { lat: lat1, lng: lng1 }, zoom: 11 });
    
}
initMap()












// function initMap() {
// //     // Create the map centered on a default location
// //     //     // Address to geocode
// //     // console.log(coordinate)
// //     // let lat = coordinate.lat
// //     // // console.log(lat);
// //     // let lng = coordinate.lat
// //     let lat1 = lat[0]
// //    // console.log(lat1);
    
// //     let lng1 = lng[0]
// //     //console.log(lng1);
    

//     map = new google.maps.Map(document.getElementById('map'), { center: { lat: 28.6692, lng: 77.4538 }, zoom: 11 });
//     // center: { lat: 28.7041, lng: 77.1025 }
//     // center: { lat: 28.6692, lng: 77.4538 }

//     //console.log(coordinate)

    

//     const input = document.getElementById('pac-input');
//     console.log(input);

//     // Create the autocomplete object and bind it to the input field
//     autocomplete = new google.maps.places.Autocomplete(input);
//     autocomplete.bindTo('bounds', map);

//    //  Set up the event listener for when the user selects a place
//     autocomplete.addListener('place_changed', () => {
//         const place = autocomplete.getPlace();
//         if (!place.geometry) {
//             console.log("No details available for the input: '" + place.name + "'");
//             return;
//         }

//         if (place.geometry.viewport) {
//             map.fitBounds(place.geometry.viewport);
//         } else {
//             map.setCenter(place.geometry.location);
//             map.setZoom(17); // Zoom to 17 if the place has no viewport
//         }

//         // Place a marker on the selected location
//         new google.maps.Marker({
//             position: place.geometry.location,
//             map: map
//         });
//     });
// }

