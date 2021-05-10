import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dex';
  public searchInput: string;
    public pokemon = [
      'Victini', 'Bellsprout', 'Kricktune', 'Scatterbug',
      'Victreebel', 'Weepinbell',
   ]
}
