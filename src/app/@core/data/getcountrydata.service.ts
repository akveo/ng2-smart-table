import { Injectable } from '@angular/core';
import { Http, Response, HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {
    CountryData: Array<any>;

    constructor(private http: Http) { }
   getData() {
       debugger;
        return this.http.get('assets/country-currency.json')
                 .map((res: Response) => res.json());
    }
}
