import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Recipes-and-Ingredients';
  elementSelected: string = 'recipes';

  onNavigate(elementSelected: string) {
    this.elementSelected = elementSelected;
    console.log(this.elementSelected);
  }
}
