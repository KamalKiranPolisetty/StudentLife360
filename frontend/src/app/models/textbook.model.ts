export interface Textbook {
    _id: string;
    title: string;
    author: string;
    isbn: string;
    availableInLibrary: boolean;
    libraryLocation?: string;
    bookstoreName?: string;
  }
  