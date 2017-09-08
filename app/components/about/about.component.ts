import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-about-me',
    moduleId: module.id.toString(),
    templateUrl: 'about.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class AboutComponent {
	aboutMe  = '';
	constructor(profileService:ProfileService){
		 //profileService.getAbout().then(  data => this.aboutMe = data );
	}	
}