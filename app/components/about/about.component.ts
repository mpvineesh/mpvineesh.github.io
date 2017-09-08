import { Component } from '@angular/core';

import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-about-me',
    moduleId: module.id.toString(),
    templateUrl: 'about.component.html' 
})

export class AboutComponent {
	aboutMe  = '';
	constructor(profileService:ProfileService){
		 //profileService.getAbout().then(  data => this.aboutMe = data );
	}	
}