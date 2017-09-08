import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/index';
import { FooterComponent } from './components/footer/index';
import { BasicInfoComponent } from './components/basic-info/index';
import { AboutComponent } from './components/about/index';
import { SkillsComponent } from './components/skills/index';
import { EducationComponent } from './components/education/index';
import { ProjectsComponent } from './components/projects/index';
import { ExperienceComponent } from './components/experience/index';
import { GithubDirective } from './directives/github.directive';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import 'rxjs/add/operator/toPromise';
import { ProfileService } from './services/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
		HttpModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
		HeaderComponent,
		AboutComponent,
		ProjectsComponent,
		ExperienceComponent,
		FooterComponent,
		BasicInfoComponent,
		SkillsComponent,
		EducationComponent,
		//Github,
		GithubDirective
    ],
    providers: [
      //  ProductService,
     //   PubSubService,
		ProfileService
    ],
	exports: [
        GithubDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }