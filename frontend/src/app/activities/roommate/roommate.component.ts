import { Component } from '@angular/core';
import { SearchService } from '../../_services/search.service';
import { Roommate } from '../../models/roommate.model';

@Component({
  selector: 'app-roommate',
  templateUrl: './roommate.component.html'
})
export class RoommateComponent {
  roommates: any[]=[];
  moveInDate: Date = new Date();
  gender: string='';
  priceRange: number=0;

  constructor(private searchService: SearchService) { }

  searchRoommates(moveInDate: Date, gender: string, priceRange: number): void {
    this.searchService.findRoommates(moveInDate, gender, priceRange)
      .subscribe((response:any)=> {
        this.roommates = response.roommates;
        console.log(response.roommates);
      });
  }
}
