
import {publish} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable ,  ConnectableObservable } from 'rxjs';
import { Observer } from 'rxjs/observer';


@Injectable()
export class LoadingBarService {

    private currentPercentage: number;
    // hot observable: //http://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html
    private observable: any;
    private intervalId: any;

    constructor() {
        this.currentPercentage = 0;
    }

    start(): ConnectableObservable<number> {
        this.observable = new Observable((observer: Observer<number>) => {

            // TODO: should provide window and inject it: http://stackoverflow.com/a/40292188/5182446
            this.intervalId = setInterval(() => {
                this.currentPercentage += 10;
                observer.next(this.currentPercentage);

                if (this.currentPercentage === 100) {
                    clearInterval(this.intervalId);
                    observer.complete();
                }
            }, 100);
        }).pipe(publish());

        this.observable.connect();

        return this.observable;
    }
}
