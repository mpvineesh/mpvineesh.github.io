import {Component, AfterViewInit, ElementRef} from '@angular/core';


import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'github-activity',
    moduleId: module.id.toString(),
    templateUrl: 'github.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class Github implements AfterViewInit {
    GitHubActivity: any;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        this.GitHubActivity = jQuery('#ghfeed'); 
		//console.log(this.elementRef.nativeElement);
		//this.GitHubActivity = jQuery(this.elementRef.nativeElement);        
		GitHubActivity.feed({ username: "mpvineesh", selector: this.GitHubActivity });
    }
}