/*
* What is an app module ?
* Angular uses components to build web pages and uses modules to
* basically bundle different pieces , for example
* components of your app into packages.
* */
/*
* What is an app module?
* Well it's as I said bundle of functionalities of our app
* and it basically gives Angular the information
* @Note@ --> I'm saying 'app' here because we only have
* one module , hence representing our complete app
* */
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/*
* Which features does my app have and use.
* As you can see, it also is just an empty TypeScript class
* */
export class AppModule { }
