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
        // const geoApi_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lng}&localityLanguage=en`;
        // fetch(geoApi_URL)
        // .then(resp => resp.json())
        // .then(loc => {
        //     locate.textContent = loc.principalSubdivision;
        // })
    
    
    }
    if(!navigator.geolocation){
        alert("Oppss!! seems there is no gelocation functionality");
    }
    else{
        navigator.geolocation.getCurrentPosition(success);
    }
}
// function closePopup (){
//     popup.classList.remove("open-popup");
// }