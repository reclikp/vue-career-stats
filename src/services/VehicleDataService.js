import http from '../http-common';

class VehicleDataService {
    getAll() {
        return http.get('/vehicle');
    }
}

export default new VehicleDataService();