import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-projects',
    moduleId: module.id.toString(),
    templateUrl: 'projects.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class ProjectsComponent {
	projects = '';
	constructor(profileService:ProfileService){
		profileService.getProjects().then(data => this.projects = data)
	}
}