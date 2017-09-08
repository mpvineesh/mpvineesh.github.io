import { Component } from '@angular/core';

import { fadeInAnimation } from '../_animations/index';

@Component({
	selector:'profile-header',
    moduleId: module.id.toString(),
    templateUrl: 'header.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class HeaderComponent {
}