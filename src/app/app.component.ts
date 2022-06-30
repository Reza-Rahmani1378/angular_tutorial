import { Component } from '@angular/core';

/*
* You notice that styleUrls is an array here whereas templateUrl wasn't.
* It is this because we could reference multiple external stylesheets here,
* so you could add pointers to other stylesheets.
* */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  * Note : You can't combine styleUrls and styles but both
  * important here has to be an array,that's the difference
  * to template , you must only have one template, you may have multiple style
  * files or style definitions and you can choose between inline and external file.
  * The rules are basically the same as for the template.
  *
  * So if you had more code , using the external file.
  * */
  styleUrls: ['./app.component.css']
 /* styles :[`
    h3 {
      color: blue;
    }
  `]*/
})
export class AppComponent {
  name = 'Reza';
}
