import { Component } from '@angular/core';
 
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-header',
    moduleId: module.id.toString(),
    templateUrl: 'header.component.html' 
})

export class HeaderComponent {
	basicInfo  = '';
	constructor(profileService:ProfileService){
		 profileService.getBasicInfo().then( data => this.basicInfo = data)
	}	
}