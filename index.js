
require("dotenv").config();
const User = require('./src/model/userModel')
const express = require("express");
const mongoose = require("mongoose");
const CONFIG = require("./src/config/config");
const cors = require('cors');
const session = require("express-session")
const cookieParser = require('cookie-parser')
const path = require("path")

// const ratelimiters = require("./src/middleware/rateLimit")

///////////////////////////////////////////////////////////////////////////////
// pracrtice 
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser())

server.use('/bookImage', express.static(path.join(__dirname, "./src/public/bookImage")))

///////////////////////////////////////////////////////////////////////////////
//  EJS handlebar
///////////////////////////////////////////////////////////////////////////////
server.use(cors());
server.set('view engine', "ejs")


// server.use((req, res, next) => {
//     res.locals.message = req.session.message
//     delete req.session.message
//     next();
// })
server.get("/", (req, res) => {
    res.render("/home/ts/Documents/krunal/book_Management/src/views/mainIndex.ejs", { title: "home page" })
})



server.use(session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
}))
 
///////////////////////////////////////////////////////////////////////////////
//Router require
///////////////////////////////////////////////////////////////////////////////
const userRouter = require("./src/route/userRoute");
const BookRouter = require('./src/route/bookRoute')
const cartRouter = require('./src/route/cartRouter')
const orderRouter = require('./src/route/orderRoute')
const otpRouter = require('./src/route/otpRouter')
const paymentRouter = require('./src/route/paymentRoute')
const feedbackRouter = require('./src/route/feedbackRoute');
// const session = require("express-session");


///////////////////////////////////////////////////////////////////////////////
//database  connection
///////////////////////////////////////////////////////////////////////////////

mongoose
    .connect(CONFIG.DB.CONNECTION_URL)
    .then(() => {
        console.log("dataBase connection successfully");
    })
    .catch((error) => {
        console.log("connection failed", error);
    });



///////////////////////////////////////////////////////////////////////////////
//Router
///////////////////////////////////////////////////////////////////////////////

// server.use(ratelimiters)
server.use("/users/", userRouter.Routers);
server.use("/books/", BookRouter.Routers);
server.use("/carts/", cartRouter.Routers);
server.use('/orders/', orderRouter.Routers)
server.use('/otp/', otpRouter.Routers)
server.use('/payment/', paymentRouter.Routers)
server.use('/feedback/', feedbackRouter.Routers)

//////////////////////////////////////////////////////////////////////////////////
//server
/////////////////////////////////////////////////////////////////////////////////


// server.use((req, res) => {
//     res.send("server is runnig")
// })


server.listen(CONFIG.PORT, () => {
    console.log(`server start on http://localhost:${CONFIG.PORT}`);
});

////////////////////////////////////////////////////////////////////////////////////////////////


// require("dotenv").config();
// const cron = require("node-cron")
// const express = require("express");
// const mongoose = require("mongoose");
// const CONFIG = require("./src/config/config");
// const logger = require('morgan')  /// req type , status code , time load, show in console
// const ratelimiters = require("./src/middleware/rateLimit")

///////////////////////////////////////////////////////////////////////////////
// pracrtice 
///////////////////////////////////////////////////////////////////////////////
// const cookieParser = require('cookie-parser')
//   const status = require('express-status-monitor')
// const fs = require('fs')
// const cluster = require("node:cluster")
// const os = require('os')
///////////////////////////////////////////////////////////////////////////////
// const server = express();

// server.use(logger('tiny'))
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
// server.use(cookieParser())

// server.use(status())

///////////////////////////////////////////////////////////////////////////////
//Router require
///////////////////////////////////////////////////////////////////////////////
// const userRouter = require("./src/route/userRoute");
// const BookRouter = require('./src/route/bookRoute')
// const cartRouter = require('./src/route/cartRouter')
// const orderRouter = require('./src/route/orderRoute')
// const otpRouter = require('./src/route/otpRouter')



///////////////////////////////////////////////////////////////////////////////
//database  connection
///////////////////////////////////////////////////////////////////////////////

// mongoose
//     .connect(CONFIG.DB.CONNECTION_URL)
//     .then(() => {
//         console.log("dataBase connection successfully");
//     })
//     .catch((error) => {
//         console.log("connection failed", error);
//     });


///////////////////////////////////////////////////////////////////////////////
//Router
///////////////////////////////////////////////////////////////////////////////

// server.use(ratelimiters)
// server.use("/users/", userRouter.Routers);
// server.use("/books/", BookRouter.Routers);
// server.use("/carts/", cartRouter.Routers);
// server.use('/orders/', orderRouter.Routers)
// server.use('/otp/', otpRouter.Routers)


///////////////////////////////////////////////////////////////////////////////////////////////////
// stream file 
/////////////////////////////////////////////////////////////////////////////////////////////////////

// server.get('/', (req, res) => {
//     const stream = fs.createReadStream('/home/ts/Documents/krunal/node_crud/Stream_example.txt', 'utf-8')
//     console.log(stream);
//     stream.on("data", (chunk) => res.write(chunk));
//     stream.on("end", () => res.end())
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////
//  cluster
/////////////////////////////////////////////////////////////////////////////////////////////////////

// const totalCpu = os.cpus().length


// if (cluster.isPrimary) {
//     for (let i = 0; i < totalCpu; i++) {
//         cluster.fork()
//     }

// }
// else {
//     const server = express()
//     // const PORT = 6000
//     server.get('/', (req, res) => {
//         return res.json({ message: ` hello from express server${process.pid}` })
//     })
//     // server.listen(CONFIG.PORT, () => {
//     //     console.log(`server start on http://localhost:${CONFIG.PORT}`);
//     // });
// }



//////////////////////////////////////////////////////////////////////////////////////
// cron job
//////////////////////////////////////////////////////////////////////////////////////
// const scheduleOption = {
//     Time: "* * * * * *",
// };

// const cronJob = cron.schedule(scheduleOption.Time, (err) => {
//     try {
//         if (cron) {
//             return console.log("Task executed at", new Date());
//         } else {
//             console.log(message.err);
//         }
//     } catch (error) {
//         console.log("Task not executed at a time");
//     }
// });
// cronJob.start();
// console.log("hello", cron);

// module.exports = cron;


// const data = cron.schedule(" */10 * * * * * ", () => {
//     console.log("hello")
// })
/////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
//server
/////////////////////////////////////////////////////////////////////////////////

// server.use((req, res) => {
//     res.send("server is runnig")
// })

// server.listen(CONFIG.PORT, () => {
//     console.log(`server start on http://localhost:${CONFIG.PORT}`);
// });


