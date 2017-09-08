import { Component } from '@angular/core';

import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-basic-info',
    moduleId: module.id.toString(),
    templateUrl: 'basic-info.component.html' 
})

export class BasicInfoComponent {
	basicInfo  = '';
	email  = '';
	constructor(profileService:ProfileService){
		 profileService.getBasicInfo().then( data => this.basicInfo = data)
	}	
}