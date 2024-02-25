import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.updateLiveTime(); // Initialize the live time
    setInterval(() => this.updateLiveTime(), 1000); // Update live time every second
  }

  contacts = [
    { iconClass: 'bi bi-telephone-fill', info: '+91 99110 99110' },
    { iconClass: 'bi bi-envelope-open-fill', info: 'example@xyz.com' },
    { iconClass: 'bi bi-clock-fill', info: () => new Date().toLocaleString() } // Function to get live time
  ];

  updateLiveTime() {
    const index = this.contacts.findIndex(contact => contact.iconClass === 'bi bi-clock');
    if (index !== -1) {
      this.contacts[index].info = () => new Date().toLocaleString(); // Update live time
    }
  }

  getContactInfo(contact: { iconClass: string, info: string | Function }) {
    return typeof contact.info === 'function' ? (contact.info as Function)() : contact.info;
}

}
