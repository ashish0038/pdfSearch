import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HighLightedSectionModel } from '../models/high-lighted-section.model';

@Injectable({
    providedIn: 'root'
})
export class PublisherSubscriberService {
    private HighLightObservable = new Subject<HighLightedSectionModel>();
    publishHighLightObservable(data: HighLightedSectionModel) {
        this.HighLightObservable.next(data);
    }
    getHighLightObservable(): Observable<HighLightedSectionModel> {
        return this.HighLightObservable.asObservable();
    }


}
