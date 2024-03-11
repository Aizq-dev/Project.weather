


export const myPosition = (sendAction)=>{
   
  
    if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(
    (position) => {
      sendAction({type: 'updateLanAndLot', payload: {lat : position.coords.latitude ,lon: position.coords.longitude}})
      // setLat(position.coords.latitude)
      // setLon(position.coords.longitude)
      // setTrigger(prevTrigger => !prevTrigger)
      // setPermiss(true)

    },
    (error) => {
      console.error("Error al obtener la ubicación:", error);
      alert("Accept location permissions")
      sendAction({type: 'permiss denied'})
    }
  )}
  else{

  console.error("Geolocalización no soportada")}
}