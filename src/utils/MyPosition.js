


export const myPosition = (setLat,setLon,setTrigger)=>{
   
  
    if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(
    (position) => {
       
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      setTrigger(prevTrigger => !prevTrigger)

    },
    (error) => {
      console.error("Error al obtener la ubicación:", error);
      alert("Accept location permissions")
    }
  )}
  else{

  console.error("Geolocalización no soportada")}
}