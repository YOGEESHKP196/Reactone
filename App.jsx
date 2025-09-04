import {books} from './books';
import Book from './Book';
const title = "Miccro Degree";
const author = "Rakesh";


//Parent Component
function BookList(){
  return(
    <>
  {books.map((book) => {
  return <Book book={book}/>;})}
   </>
  //<Book/>
  );
}


export default BookList;