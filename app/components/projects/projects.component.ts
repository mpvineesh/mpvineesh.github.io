import { Component } from '@angular/core';
 
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-projects',
    moduleId: module.id.toString(),
    templateUrl: 'projects.component.html' 
})

export class ProjectsComponent {
	projects = '';
	constructor(profileService:ProfileService){
		profileService.getProjects().then(data => this.projects = data)
	}
}