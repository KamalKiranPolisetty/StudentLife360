import { Component } from '@angular/core';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrl: './people-search.component.css'
})
export class PeopleSearchComponent {
  searchResult: any;
  firstName: string = '';
  lastName: string = '';
  department: string = '';

  constructor(private searchService: SearchService) { }

  search(): void {
    this.searchService.searchPeople(this.firstName, this.lastName, this.department)
      .subscribe(
        (response) => {
          this.searchResult = response.users;
          console.log(response.users);
        },
        (error) => {
          console.error('Error:', error);
          // Handle error
        }
      );
  }
}
