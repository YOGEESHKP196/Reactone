//Child Component
function Book(props){
  function clickHandler() {
    alert("hello!!!");
    console.log("Hello")
  }
  return(
    <>
    <h1>{props.book.title}</h1>
    <p>{props.book.author}</p>
    <button type="button" onClick={clickHandler}>Click Me</button>
    </>
  )
}

export default Book;