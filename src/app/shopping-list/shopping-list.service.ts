import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
import {ImmutableService} from '../services/immutable-service';
import {HttpCollectionStorage} from '../services/storage/http-collection-storage';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingListService extends ImmutableService<Ingredient> {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private storageProvider: HttpCollectionStorage) {
    super();
    this.storage = storageProvider.getInstance('foobar');
  }

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    console.log('addIn', this.storage);
    debugger;
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
