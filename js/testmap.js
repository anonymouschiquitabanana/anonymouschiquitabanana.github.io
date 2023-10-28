const map = L.map('map', {
  center: [-29.50, 145],
  zoom: 3.5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


// const marker1 = L.marker([-37.699450, 176.279420]).addTo(map);
// const marker2 = L.marker([-27.643310, 153.305140]).addTo(map);
// const marker3 = L.marker([-33.956330, 122.150270]).addTo(map);
// const marker4 = L.marker([-34.962390, 117.391220]).addTo(map);
// const marker5 = L.marker([-17.961210, 122.214820]).addTo(map);
// const marker6 = L.marker([-16.505960, 151.751520]).addTo(map);
// const marker7 = L.marker([-22.594400, 167.484440]).addTo(map);
// const marker8 = L.marker([-37.977000, 177.057000]).addTo(map);
// const marker9 = L.marker([-41.037600, 173.017000]).addTo(map);
// const marker10 = L.marker([-37.670300, 176.212000]).addTo(map);




// separate test:
// map.setView([39, -96], 4);

//             var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 maxZoom: 7,
//                 minZoom: 4,
//                 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//             }).addTo(map);


        
//         // var marker = L.marker([41.6, -73.08]).addTo(map);

//         var locations = [
//             ['1', 41.6, -73.08],
//             ['<a href="https://www.google.com"><h1>title</h1></a><img src="img/testlogo.png" height=50px;/>', 41.6, -83.08]
//         ]


//         for (var i = 0; i < locations.length; i++) {
//             marker = new L.marker([locations[i][1], locations[i][2]])
//                 .bindPopup(locations[i][0])
//                 .addTo(map);
//         }