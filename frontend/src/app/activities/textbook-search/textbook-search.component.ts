import { Component } from '@angular/core';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-textbook-search',
  templateUrl: './textbook-search.component.html',
  styleUrl: './textbook-search.component.css'
})
export class TextbookSearchComponent {
  textbooks: any[] = [];
  errorMessage: string = '';

  constructor(private textbookService: SearchService) { }

  searchTextbooks(title?: string, author?: string, isbn?: string): void {
    this.textbookService.searchTextbooks(title, author, isbn).subscribe(
      (response) => {
        this.textbooks = response.textbooks;
      },
      (error) => {
        console.error('Failed to search textbooks', error);
        this.errorMessage = error.message || 'An error occurred while searching textbooks.';
      }
    );
  }
}
