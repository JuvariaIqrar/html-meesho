let loc= document.querySelector(".loca");

    function gotLocation(position){
        console.log(position);
    }
    function failedloc(){
        console.log('This is fail');
    }

    loc.addEventListener("click", async () => {
        navigator.geolocation.getCurrentPosition(gotLocation,failedloc)
});
