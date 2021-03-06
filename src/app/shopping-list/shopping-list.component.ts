import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoggingService } from '../logging.service';

import { AppState } from '../store/app.reducer';

import { ShoppingListState } from './store/shopping-list.reducer';
import { StartEdit } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<ShoppingListState>;

  constructor(
    private loggingService: LoggingService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit({ index }));
  }
}
