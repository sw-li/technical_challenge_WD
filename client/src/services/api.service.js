import axios from "axios";


// we will be encapsulating all the axios call here in this class
// so that latter it will be easier to change the server url

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }
  
  getAllPhones = () => {
    return this.api.get("/api/phones");
  };

  getPhoneById = (id) => {
    return this.api.get(`/api/phone/${id}`);
  }
}

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
