import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {
	private APIUrl = 'http://mpvineesh.github.io/data/';
	//private APIUrl = 'http://my.local/angular/my-profile/data/';
	constructor(private http: Http) { 
	}
     
	private getSkills() {
		let WebAPIUrl = this.APIUrl + 'skills.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	private getExperience() {
        let WebAPIUrl = this.APIUrl + 'experience.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	private getBasicInfo() {
        let WebAPIUrl = this.APIUrl + 'basic-info.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	private getEducation() {
        let WebAPIUrl = this.APIUrl + 'education.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	private getAbout() {
        let WebAPIUrl = this.APIUrl + 'about.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	private getProjects() {
        let WebAPIUrl = this.APIUrl + 'projects.json';
        return this.http.get(WebAPIUrl).toPromise().then(response => response.json().data);
    }
	
	
	
	
	
	
}