/*
* A component simply is just a class , a TypeScript class, so that Angular is able
* to instantiate
* it to creates objects based on the blueprint we set up here you could say
* */

import {Component} from "@angular/core";

/* Now we need to pass a JavaScript Object to this
* Component decorator to configure it because without
* any configuration , it's still not that valuable to Angular.
*  */
@Component({
  selector: 'app-server',
  /*
  * The other important piece we need to have is the
  * template and here let's reference another external file
  * */
  templateUrl: './server.component.html',
  styles : [`
    .online {
      color: cornsilk;
    }
  `]
})
export class ServerComponent {

  serverId : number = 10;
  serverStatus : string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'blue' : 'red';
  }
}
