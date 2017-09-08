import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-skills',
    moduleId: module.id.toString(),
    templateUrl: 'skills.component.html'  
})

export class SkillsComponent {
	skills  = '';
	constructor(profileService:ProfileService){
		 profileService.getSkills().then(  data => this.skills = data );
	}	
}