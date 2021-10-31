import http from '../http-common';

class UnitDataService {
    getAll() {
        return http.get('/unit');
    }

    get(id) {
        return http.get(`/unit/${id}`);
    }
}

export default new UnitDataService();