import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-header',
    moduleId: module.id.toString(),
    templateUrl: 'header.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class HeaderComponent {
	basicInfo  = '';
	constructor(profileService:ProfileService){
		 profileService.getBasicInfo().then( data => this.basicInfo = data)
	}	
}