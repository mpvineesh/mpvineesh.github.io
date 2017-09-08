import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-experience',
    moduleId: module.id.toString(),
    templateUrl: 'experience.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class ExperienceComponent {
	experience  = '';
	constructor(profileService:ProfileService){
		 profileService.getExperience().then(  data => this.experience = data );
	}	
}