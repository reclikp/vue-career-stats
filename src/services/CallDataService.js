import http from '../http-common';

class CallDataService {
    getAll(){
        return http.get('/call')
    }

    getTotalTime() {
        return http.get('/call/totalTime');
    }
}

export default new CallDataService();