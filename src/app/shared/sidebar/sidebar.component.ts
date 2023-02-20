import { Component } from '@angular/core';
import { SlidebarService } from 'src/app/services/slidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: any[];

  constructor(private sidebarService: SlidebarService){
   this.menuItems = sidebarService.menu;
   console.log(this.menuItems);


  }

}
