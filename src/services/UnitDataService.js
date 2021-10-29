import http from '../http-common';

class UnitDataService {
    getAll() {
        return http.get('/unit');
    }
}

export default new UnitDataService();