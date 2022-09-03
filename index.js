// let popup = document.querySelector('#popup');
// function openPopup (){
//     popup.classList.add("open-popup");

// }

// function closePopup (){
//     popup.classList.remove("open-popup");
// }
function openPopup(){
    let popup = document.querySelector('#popup');
    popup.classList.add("open-popup");
    let locate = document.querySelector('p');
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

    function error (error){
        alert(`${error.mesage}`);

    }

    const options = {
        timeOut: 15000,
        maximumAge: 40000,
        enableHighAccuracy: 350

    }
    if(!navigator.geolocation){
        alert("Oppss!! seems there is no gelocation functionality");
    }
    else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
function closePopup (){
    popup.classList.remove("open-popup");
}