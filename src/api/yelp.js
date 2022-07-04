import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer m1AV5YlWsDnua_-467J2RNIhu7IUB2ZPQh_eLHdCojoqaxWjqqCNw4fY3keUCnKGgyhOI8LJWrEYyv_B3NdAq84IWYySdY_xTPgEsjsWXO5jPdhV5Pp6NWriNOfBYnYx",
  },
});
