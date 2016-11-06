import { Component } from '@angular/core';
import { ContactStore } from '../store';
import { addContact } from '../actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contactID: number;

  constructor(private store: ContactStore) {
    this.contactID = 0;
  }

  addContact(contact) {
    this.store.dispatch(addContact(contact, this.contactID++));
  }

}
