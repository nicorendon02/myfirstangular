import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfirstangular';

  constructor (private router:Router)
  {

  }

  viewMap()
  {
    alert('VER MAPA'),
    console.log('INGRESE A VER EL MAPA')
    this.router.navigate(['/examples/gmap'])
  }
}
