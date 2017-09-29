
import { fromJS } from 'immutable';
import todoContainerReducer from '../reducer';

describe('todoContainerReducer', () => {
  it('returns the initial state', () => {
    expect(todoContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
