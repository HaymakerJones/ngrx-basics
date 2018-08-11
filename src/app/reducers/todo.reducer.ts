import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models/todo.model';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';

export interface todoState extends EntityState<Todo> {

}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: todoState = adapter.getInitialState({

});

export function todoReducer(
  state = initialState,
  action: TodoActions
): todoState {
  switch (action.type) {
    case TodoActionTypes.AddTodo: {
      return adapter.addOne(action.payload.todo, state);
    }

    case TodoActionTypes.UpdateTodo: {
      return adapter.updateOne({
        id: action.payload.id, changes: { value: action.payload.newValue }
      }, state);
    }

    case TodoActionTypes.DeleteTodo: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
