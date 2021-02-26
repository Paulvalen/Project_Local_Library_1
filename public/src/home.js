function getTotalBooksCount(books) {
  //It returns a number that represents the number of book objects inside of the array.
    return books.length
}

function getTotalAccountsCount(accounts) {
  //It returns a number that represents the number of account objects inside of the array.
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //It returns a number that represents the number of books _that are currently checked out of the library
  //look through the book array 

  let result = 0
  for(i = 0; i < books.length; i++){
    for(j = 0; j < books[i].borrows.length; j++){
      //If the transaction says the book `returned: false` 
      if(!books[i].borrows[j].returned){
        //add one to result if borrows.returned is false
        result++
        }
      }
    }
  return result
}

function getMostCommonGenres(books) {
  //It returns an array containing five objects or fewer that represents the most common occurring genres,   
  //only the top five should be returned.
  let result = []
  let commonGenres = books.reduce((acc,book) => {
    //look for genre in books and add 1 when is found
    return { ...acc,[book.genre]:(acc[book.genre] || 0) + 1}      
    },{})
    //loop in commonGenres object and add the keys
    for( let prop in commonGenres){
      //The `name` key which represents the name of the genre.
      const name = prop;
      //The `count` key which represents the number of times the genre occurs.
      const count = commonGenres[prop]
      //pushh the object to result 
      result.push({name,count})      
    }
  //sort result in order from counts up to down
  result.sort((countA,countB) => (countA.count > countB.count) ? -1: 1)
  //return only five elements  
  let resultFive = result.slice(0,5)  
  
  return resultFive
}

function getMostPopularBooks(books) {
  //It returns an array containing five objects or fewer that represents the most popular books in
  //the library. Popularity is represented by the number of times a book has been borrowed.
  let booksList = []
  //loop in books array create variable to hold the book titles and counts
  books.forEach(book =>{
    const name = book.title
    const count = book.borrows.length
    //push the object to booklist array    
    booksList.push({name,count})
  })
  //sort booklist by count up top down
  booksList.sort((bookA,bookB) => (bookA.count > bookB.count) ? -1:1)
  
  let topFiveBooks = booksList.splice(0,5)
  //return with array with the first five
  return topFiveBooks
}

function getMostPopularAuthors(books, authors) {
  //array for the result not sorted
  let result = []
  //loop in authors array and create variables to hold first and last names
  authors.forEach(author => {
    const first = author.name.first
    const last = author.name.last
    //create variable to hold firts and last and count
    let name = first+' '+last //`${first}  ${last}` this works, but returns failed in the test
    let count = 0
    //loop in books and if book.authorId matches author.id, add the borrows length to count 
      books.forEach(book => {
      if(book.authorId === author.id){
        count = book.borrows.length
        }
      })    
    //push the objects to result
    result.push({name,count})
  })
  //sort result by count order
  result.sort((authorA,authorB) => (authorA.count > authorB.count) ? -1: 1)
  let topFiveAuthors = result.splice(0,5)
  
  return topFiveAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
