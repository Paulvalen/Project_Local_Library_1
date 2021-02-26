function findAccountById(accounts, id) {
  //It returns the account object that has the matching ID.
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  //It returns a sorted array of objects. The objects are sorted alphabetically by last name.
  return accounts.sort((lastnameA, lastnameB) => lastnameA.name.last.toLowerCase() < lastnameB.name.last.toLowerCase() ? -1 : 1) 
}

function getTotalNumberOfBorrows(account, books) {
  //It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
  //to look if the account is inclided in the borrows array insode the book item
  let result = 0
  for(let i = 0; i< books.length; i++){
    //look for account  inside the borrows arrays id's
    for( let j = 0; j < books[i].borrows.length; j++){
      //if the account matches the borrows id add 1      
      if(account.id === books[i].borrows[j].id){ 
        result++   
      }
    }
  }  
  return result
}

function getBooksPossessedByAccount(account, books, authors) { 
  //create an array foir teh result
  let result = []
  //loop the books array
  books.forEach(book =>{
    //inside books array look for authorsId to match atuthors. id
    const authorObj = authors.find(author => author.id === book.authorId)
    //create the key author and asign the authorObj 
    book.author = authorObj
    //look for the books that borrows.Id matches account.id, and returned is false
    if(book.borrows[0].id === account.id && !book.borrows[0].returned){
      //push the books to the result array
      result.push(book)
      
    }
  })  
  
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
