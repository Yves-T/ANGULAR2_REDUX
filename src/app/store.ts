import * as Immutable from 'immutable';
import { createStore } from 'redux';
import { IContactAction } from './actions';
import { reducer } from './reducers';

export class Contact {
  id: number;
  name: string;
  star: boolean;
}

export class ContactStore {
  store = createStore(reducer, Immutable.List<Contact>());

  get contacts(): Immutable.List<Contact> {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}