/*
 *
 * TodoContainer actions
 *
 */

import * as Actions from './constants';

export function defaultAction() {
  return {
    type: Actions.DEFAULT_ACTION,
  };
}

export function addTodo(newTodo) {
  return {
    type: Actions.ADD_TODO,
    newTodo
  }
}

export function toggleTodo(todoId) {
  return {
    type: Actions.TOGGLE_TODO,
    todoId
  }
}

export function deleteTodo(todoId) {
  return {
    type: Actions.DELETE_TODO,
    todoId
  }
}

export function filterTodo(filterType) {
  return {
    type: Actions.FILTER_TODO,
    filterType
  }
}
