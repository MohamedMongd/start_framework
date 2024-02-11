import { Component } from '@angular/core';
import { faStar,faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portofli',
  templateUrl: './portofli.component.html',
  styleUrls: ['./portofli.component.css']
})
export class PortofliComponent {
  mayStar =faStar
  mayplus =faPlus
}
