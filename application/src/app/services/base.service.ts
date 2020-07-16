import { environment } from '../../environments/environment';

export abstract class BaseService {
    protected apiUrl: string = environment.apiUrl ;

    protected GetResponseData(response: any){
        return response || {};
    }
}