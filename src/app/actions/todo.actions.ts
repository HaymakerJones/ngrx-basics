import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Todo } from '../models/todo.model';

export enum TodoActionTypes {

  AddTodo = '[Todo] Add Todo',
  UpdateTodo = '[Todo] Update Todo',
  DeleteTodo = '[Todo] Delete Todo',
  ToggleDone = '[Todo] Toggle Done',
}


export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: { todo: Todo }) { }
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;

  constructor(public payload: { id: string; newValue: string; }) { }
}


export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: { id: string }) { }
}

export class ToggleDone implements Action {
  readonly type = TodoActionTypes.ToggleDone;

  constructor(public payload: { id: string; done: boolean; }) { }
}

export type TodoActions =
  AddTodo
  | UpdateTodo
  | DeleteTodo
  | ToggleDone;
