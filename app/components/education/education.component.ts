import { Component } from '@angular/core';

import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-education',
    moduleId: module.id.toString(),
    templateUrl: 'education.component.html'
})

export class EducationComponent {
	education  = '';
	constructor(profileService:ProfileService){
		 profileService.getEducation().then(  data => this.education = data );
	}	
}