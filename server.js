// ************* MODELS IMPORT ************
const User= require('./models/User');
const Company = require('./models/Company')
// *************** Express *****************
const express = require("express");
const app = express();
const port = 8000;

// *************** Middleware **************
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// /////////////////////////////////////////
// SERVER JAVASCRIPT 
// ////////////////////////////////////////

// //// ROUTES ////////////////////////////////

/**
 * User Route *********************************
 */
 app.get("/api/users/new", (request, response) => {
    const user = new User();
    response.json(user);
  });
/**
 * Company Route ********************************
 */
app.get("/api/companies/new",(request, response) => {
    const company = new Company();
    response.json(company);
})
/**
 * User - Company Route ***********************
 */
app.get("/api/user/company",(request,response)=>{
    const user = new User();
    const company = new Company();  
    response.json({...user,company:company})

})
// * Listen to Port

const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);