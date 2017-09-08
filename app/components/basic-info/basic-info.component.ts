import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-basic-info',
    moduleId: module.id.toString(),
    templateUrl: 'basic-info.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class BasicInfoComponent {
	basicInfo  = '';
	email  = '';
	constructor(profileService:ProfileService){
		 profileService.getBasicInfo().then( data => this.basicInfo = data)
	}	
}