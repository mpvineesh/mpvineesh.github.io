import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
//import { HeaderCopmonent } from '../header/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class HomeComponent {
}