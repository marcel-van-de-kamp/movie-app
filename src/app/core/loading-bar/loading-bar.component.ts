import { Component, OnInit } from '@angular/core';

import { LoadingBarService } from './loading-bar.service';



@Component({
    selector: 'cw-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
    providers: [LoadingBarService]
})
export class LoadingBarComponent implements OnInit {

    public percentage: number;

    constructor(private loadingBarService: LoadingBarService) {
        this.percentage = 0;
    }

    ngOnInit() {
        this.loadingBarService.start()
            .subscribe((value: number) => {
                this.percentage = value;
            });
    }

}
