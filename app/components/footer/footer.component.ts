import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
	selector:'profile-footer',
    moduleId: module.id.toString(),
    templateUrl: 'footer.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class FooterComponent {
}