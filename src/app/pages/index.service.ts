import { Injectable } from '@angular/core';
import { data } from '../shared/data/Data1';

@Injectable()
export class IndexService {
    getData() {
        return data;
    }
}