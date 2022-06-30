import { Component, OnInit } from '@angular/core';

@Component({
  /*
  * The selector is use like selector of css
  * we can overwrite this as attribute
  * or we can select by the class.
  * Note : Selecting by ID won't work because does not supported by the Angular.
  * */
  // selector: '[app-servers]',
  // selector : '.app-servers',
  selector : 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Reza','Rahmani','Ahmad','Alireza'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! and Server name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
