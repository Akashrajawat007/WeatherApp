 const getLocation = (handleError, handleLocation) => {
  if (!navigator.geolocation) {
    handleError(
      "GeoLocation is not Supported  by this browser, please search by City name manually!"
    )
  } else {
    navigator.geolocation.getCurrentPosition((position) =>
      handleLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    ),
    (err) => {
        handleError(err.message)
    }
  }
}
export default getLocation;