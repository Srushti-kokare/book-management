
const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const reviewController = require("../controllers/reviewController")

const middleware = require("../middleware/auth")



// user
router.post("/register", userController.register)

router.post("/login", userController.login)

// book
router.post('/books', middleware.authentication, bookController.createBook)

router.get("/books", middleware.authentication, bookController.getBook)

router.get("/books/:bookId", middleware.authentication, bookController.getBooksById)

router.put("/books/:bookId", middleware.authentication, middleware.authorisation, bookController.updateBook)

router.delete("/books/:bookId", middleware.authentication, middleware.authorisation, bookController.deleteBook)

// review
router.post("/books/:bookId/review", reviewController.createReview)

router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)

router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)


module.exports = router;
