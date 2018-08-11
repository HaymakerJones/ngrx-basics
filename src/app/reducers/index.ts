import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from './todo.reducer';


export interface State {
  todo: fromTodo.todoState,
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.todoReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

//Selectors
export const selectTodoState = createFeatureSelector<fromTodo.todoState>('todo');
export const { selectAll: selectAllTodos } = fromTodo.adapter.getSelectors(selectTodoState);
