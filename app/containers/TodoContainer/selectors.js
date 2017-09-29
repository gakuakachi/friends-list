import { createSelector } from 'reselect';

/**
 * Direct selector to the todoContainer state domain
 */
const selectTodoContainerDomain = () => (state) => state.get('todoContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoContainer
 */

const makeSelectTodoContainer = () => createSelector(
  selectTodoContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTodoContainer;
export {
  selectTodoContainerDomain,
};
