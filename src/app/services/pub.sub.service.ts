import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HighLightedSectionModel } from '../models/high-lighted-section.model';

@Injectable({
    providedIn: 'root'
})
export class PublisherSubscriberService {
    private HighLightObservable = new BehaviorSubject<HighLightedSectionModel>(null);
    publishHighLightObservable(data: HighLightedSectionModel) {
        this.HighLightObservable.next(data);
    }
    getHighLightObservable(): Observable<HighLightedSectionModel> {
        return this.HighLightObservable.asObservable();
    }
    
}
