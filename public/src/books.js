const { getTotalAccountsCount } = require("./home")

function findAuthorById(authors, id) {
  //It returns the author object that has the matching ID.
  return authors.find(author => author.id === id)
 
}

function findBookById(books, id) {
  //It returns the book object that has the matching ID.
  return books.find(book => book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
//It returns an array with two arrays inside of it. 
//The first array contains books not yet returned.
//second array contains books _that have been returned
  
  let result = []
  //array with books not returned
  let notReturnedBooks = books.filter(book => !book.borrows[0].returned)
  //array with returned books  
  let returnedBooks = books.filter(book => book.borrows[0].returned)
  //push returned and not returnedBooks to result  
  result.push(notReturnedBooks,returnedBooks)  
  return result
}

function getBorrowersForBook(book, accounts) {
  //It should return an array of all the transactions from the book's `borrows` key. 
  //However, each transaction should include the related account information and the `returned` key.    
  let result = []
  //create variable for borrows in books  
  let listOfBorrows = book.borrows 
  //loop in list array of listOf Borrows array and accounts array
  listOfBorrows.forEach(borrow => {
    accounts.forEach(account => {
      // if borrow.id matches account.id, merge the objects and oush ti the result array
      if(borrow.id === account.id){      
      let mergeObj = {...borrow,...account}
      result.push(mergeObj)     
      }
    })
  })
  //splice the result to ten and return new array
  let tenBorrows = result.splice(0,10)
  
  return tenBorrows
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
