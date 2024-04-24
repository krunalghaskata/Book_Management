const express = require("express");
const Controller = require("../controller/index");
const { checkAuth } = require('../middleware/check_auth')
const Routers = express.Router();

const passport = require("passport");



// Initialize passport
Routers.use(passport.initialize());
Routers.use(passport.session());

// Google OAuth routes
Routers.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
Routers.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


//API ROUTER

Routers.post("/signup", Controller.signup);

Routers.post("/login", Controller.login);

Routers.post('/logOut', checkAuth, Controller.logOut)

Routers.get("/userId", checkAuth, Controller.userId);

Routers.get("/allUser", Controller.allUser);

Routers.patch("/updateUser", checkAuth, Controller.updateUser);

Routers.delete("/deleteUser/:id", checkAuth, Controller.deleteUser);

Routers.post("/forgotPassword", checkAuth, Controller.forgotPassword)

Routers.post("/resetPassword/:token", checkAuth, Controller.resetPassword);

Routers.post('/updatedPassword', Controller.updatedPassword)



exports.Routers = Routers;