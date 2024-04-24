const express = require("express");
const Controller = require("../controller/index");
const { checkAuth } = require('../middleware/check_auth')
const { upload } = require('../middleware/multer')
const Routers = express.Router();
Routers.use(express.static('public'))


const bodyParser = require("body-parser")
Routers.use(bodyParser.json())
Routers.use(bodyParser.urlencoded({ extended: true }))



//  API ROUTE

Routers.post("/creatbook", upload.single("image"), express.static("../../src/public/bookImage"), checkAuth, Controller.creatbook);

Routers.get("/bookGetFind/:id", checkAuth, Controller.bookGetId);

Routers.get("/searchBook/:key", checkAuth, Controller.search)

Routers.get("/allBook", checkAuth, Controller.allBook);

Routers.get("/authorGetBook", checkAuth, Controller.authorGetBook);

Routers.get("/bookAuthorDetails/:id", checkAuth, Controller.bookAuthorDetails);

Routers.get("/sortingPriceBook", checkAuth, Controller.sortingPriceBook)

Routers.patch("/updateBook/:id", upload.single('image'), checkAuth, Controller.updateBook);

Routers.delete("/deleteBook/:id", checkAuth, Controller.deleteBook);

Routers.get('/aggregation', Controller.aggregation)




exports.Routers = Routers;