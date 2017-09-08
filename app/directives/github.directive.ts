
import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[github]' })
export class GithubDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}
	
    ngOnInit(){
        // Use renderer to render the emelemt with styles
		GitHubActivity.feed({ username: "mpvineesh", selector: '#'+this.el.nativeElement.id});
    }
}