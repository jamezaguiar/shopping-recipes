import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';

import {
  ShoppingListState,
  ShoppingListAppState,
} from './store/shopping-list.reducer';

import { StartEdit, StopEdit } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<ShoppingListState>;

  constructor(
    private loggingService: LoggingService,
    private store: Store<ShoppingListAppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit({ index }));
  }
}
