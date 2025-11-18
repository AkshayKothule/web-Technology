
const connection=require("../databaseconfig/dbconnection");
//display the page and render it on ejs \
//
exports.getlogin=(req , resp)=>{
    console.log(req.url+"------------------"+req.method);
    resp.render("emplogin");

}
