import { createObjectCsvWriter } from 'csv-writer';
import Textbook from '../models/book.js';


// Sample data for textbooks
const textbooks = [
    {
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      isbn: '9780132350884',
      availableInLibrary: true,
      libraryLocation: 'Software Engineering Section',
      bookstoreName: 'Coding Central',
    },
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
      isbn: '9780201633610',
      availableInLibrary: true,
      libraryLocation: 'Software Engineering Section',
      bookstoreName: 'Software Design Store',
    },
    {
      title: 'Operating System Concepts',
      author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
      isbn: '9781118129388',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'OS Books Inc.',
    },
    {
      title: 'Database System Concepts',
      author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
      isbn: '9780073523323',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'DB Solutions',
    },
    {
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Stuart Russell, Peter Norvig',
      isbn: '9780136042594',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'AI Bookstore',
    },
    {
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum, David J. Wetherall',
      isbn: '9780132126953',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'Networking Hub',
    },
    {
      title: 'Introduction to the Theory of Computation',
      author: 'Michael Sipser',
      isbn: '9781133187790',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'Theory Books Inc.',
    },
    {
      title: 'Data Structures and Algorithms in Python',
      author: 'Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser',
      isbn: '9781118290279',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'Python Books Galore',
    },
    {
      title: 'Computer Organization and Design',
      author: 'David A. Patterson, John L. Hennessy',
      isbn: '9780123747501',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'CompOrg Books',
    },
    {
      title: 'Programming Language Pragmatics',
      author: 'Michael L. Scott',
      isbn: '9780124104099',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'PLP Books',
    },
    {
      title: 'Software Engineering: A Practitioner\'s Approach',
      author: 'Roger S. Pressman',
      isbn: '9780078022128',
      availableInLibrary: true,
      libraryLocation: 'Software Engineering Section',
      bookstoreName: 'SE Books Shop',
    },
    {
      title: 'Introduction to Data Mining',
      author: 'Pang-Ning Tan, Michael Steinbach, Vipin Kumar',
      isbn: '9780133128901',
      availableInLibrary: true,
      libraryLocation: 'Computer Science Section',
      bookstoreName: 'Data Mining Mart',
    },
    {
      title: 'Discrete Mathematics and Its Applications',
      author: 'Kenneth H. Rosen',
      isbn: '9780073383095',
      availableInLibrary: true,
      libraryLocation: 'Mathematics Section',
      bookstoreName: 'Discrete Books Depot',
    },
  ];
  
// Write textbook data to CSV file
const writeTextbooksToCSV = async (textbooks) => {
  const csvWriter = createObjectCsvWriter({
    path: 'textbooks.csv',
    header: [
      { id: 'title', title: 'Title' },
      { id: 'author', title: 'Author' },
      { id: 'isbn', title: 'ISBN' },
      { id: 'availableInLibrary', title: 'Available in Library' },
      { id: 'libraryLocation', title: 'Library Location' },
      { id: 'bookstoreName', title: 'Bookstore Name' },
    ],
  });

  try {
    await csvWriter.writeRecords(textbooks);
    console.log('CSV file created successfully');
  } catch (error) {
    console.error('Error writing to CSV file:', error);
  }
};

// Save textbooks to MongoDB (optional)
const saveTextbooksToDatabase = async (textbooks) => {
  try {
    await Textbook.insertMany(textbooks);
    console.log('Textbooks saved to database successfully');
  } catch (error) {
    console.error('Error saving textbooks to database:', error);
  }
};

// Call the functions to write data to CSV file and save to database
export const csvMaker = ()=>{
writeTextbooksToCSV(textbooks);
saveTextbooksToDatabase(textbooks);
}
