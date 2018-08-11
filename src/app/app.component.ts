import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { State, selectAllTodos } from './reducers';
import { Todo } from './models/todo.model';
import * as TodoActions from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos$: any;
  todo: string;
  editing = false;
  idToEdit: string | null;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.todos$ = this.store.select(selectAllTodos);
  }

  generateUUID() {
    return UUID.UUID();
  }

  addTodo(value) {
    const todo: Todo = {
      value,
      done: false,
      id: this.generateUUID()
    };

    this.store.dispatch(new TodoActions.AddTodo({ todo }));

    this.todo = '';
  }

  deleteTodo(id) {
    this.store.dispatch(new TodoActions.DeleteTodo({ id }));
  }

  editTodo(todo) {
    this.editing = true;
    this.todo = todo.value;
    this.idToEdit = todo.id;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.idToEdit = null;
  }

  updateTodo(updatedTodo) {
    this.store.dispatch(new TodoActions.UpdateTodo({
      id: this.idToEdit,
      newValue: updatedTodo
    }));

    this.todo = '';
    this.idToEdit = null;
    this.editing = false;
  }

  toggleDone(todo) {
    this.store.dispatch(new TodoActions.ToggleDone({ id: todo.id, done: !todo.done }));
  }

}
