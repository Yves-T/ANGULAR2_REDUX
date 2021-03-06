import { Component, OnInit, Input } from '@angular/core';
import { ContactStore, Contact as ContactModel } from '../store';
import { removeContact, starContact } from '../actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: ContactModel;

  constructor(private store: ContactStore) { }

  ngOnInit() {
  }

  removeContact(contact) {
    this.store.dispatch(removeContact(contact.id));
  }

  starContact(contact) {
    this.store.dispatch(starContact(contact.id));
  }
}
