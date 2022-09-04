//The openPopup function executes once one the user clicks the Locate Me button
function openPopup(){
    let popup = document.querySelector('#popup');
    popup.classList.add("open-popup");
    let locate = document.querySelector('p');
// The success executes once the user allows the browser to get location
document.addEventListener('DOMContentLoaded', success);
    function success (position){
        const location = {lat:position.coords.latitude, lng:position.coords.longitude};
        console.log(location.lat+''+ location.lng);
         const geoApi_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lng}&localityLanguage=en`;
        fetch(geoApi_URL)
        .then(resp => resp.json())
        .then(loc => {
            locate.textContent = loc.principalSubdivision;
        })   
    }

// error function executes once there is an error in getting the geolaction object
    function error (error){
        alert(`${error.mesage}`);
    }

// The options object specifies more on fresh time accuracy and time span for cached information
    const options = {
        timeOut: 15000,
        maximumAge: 40000,
        enableHighAccuracy: 350
    }

//the if function checks if the browser has the geolacation functionality
    if(!navigator.geolocation){
        alert("Oppss!! seems there is no gelocation functionality");
    }
    else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
// closePopup function closes the pop up when the user clicks the Close button
function closePopup (){
    popup.classList.remove("open-popup");
}
// document.addEventListener('DOMContentLoaded', openPopup);
