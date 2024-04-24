const creatbook = require('./createBook')
const bookGetId = require('./bookFind')
const allBook = require('./allBookFind')
const updateBook = require('./updateBook')
const deleteBook = require('./deleteBook')
const authorGetBook = require('./authorGetBook')
const bookAuthorDetails = require('./bookAuthorDetails')
const sortingPriceBook  = require("./queryBook")
const search = require('./searchBook')
const aggregation = require('./aggregation')
module.exports = {
    creatbook,
    bookGetId,
    allBook,
    updateBook,
    deleteBook,
    authorGetBook,
    bookAuthorDetails,
    sortingPriceBook,
    search,
    aggregation
    

}  
