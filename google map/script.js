mapboxgl.accessToken = 'pk.eyJ1IjoiZXppbzk5IiwiYSI6ImNsMjR5cnZ2cTI1Y2ozaXFkNGV4aXd2dTQifQ.Ky8nDa1ROh8upTFSUd_ePg';

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation,{
         enableHighAccuracy: true
        })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation() {
    setupMap([-1.54, 100.83])

}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
        });

        map.addControl(new mapboxgl.NavigationControl());  
        
        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken
          });
          
          map.addControl(directions, 'top-left');
}

