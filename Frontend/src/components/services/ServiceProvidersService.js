import axios from "axios";

const Provider_API_BASE_URL = "http://localhost:8080/serviceProviders";

class ServiceProvidersService {


    getServiceProviders(){
        return axios.get(Provider_API_BASE_URL);
    }

    createServiceProviders(serviceProvider){
        return axios.post(Provider_API_BASE_URL,serviceProvider);
    }

    getServiceProvidersById(serviceProviderId){
        return axios.get(Provider_API_BASE_URL + '/' + serviceProviderId);
    }

    updateServiceProviders(serviceProvider,serviceProviderId){
        return axios.put(Provider_API_BASE_URL + '/' + serviceProviderId,serviceProvider);
    }

    deleteServiceProviders(serviceProviderId){
        return axios.delete(Provider_API_BASE_URL + '/' +serviceProviderId);
    }
}

export default new ServiceProvidersService()