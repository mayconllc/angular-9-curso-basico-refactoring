import { Component } from '@angular/core';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private headerService: HeaderService) {
    headerService.header = {
      title: 'Home',
      icon: 'home'
    }
  }

}
