import axios from "axios"

const getDetails = async (url, detailsHandler, errorHandler) => {
    errorHandler(null)
    await axios
      .get(url)
      .then((res) => {
        detailsHandler(res.data)
      })
      .catch((err) => errorHandler(err.message))
  }

  export default getDetails;