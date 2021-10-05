import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Hot Dog',
      'Delicious Doggo',
      'https://static.vecteezy.com/system/resources/previews/000/556/442/original/vector-hot-dog-character-with-sunglasses-and-smile-illustration.jpg'
    ),
    new Recipe(
      'Salad',
      'Supreme Salad',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1hkRp73yBVz6loSJK9MTXAHaHa%26pid%3DApi&f=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
