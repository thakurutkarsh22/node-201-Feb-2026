
// Handler Function
function HomeResponse (req, res, next) {
    // send is only and only with expressjs and NOT node js 
        // send behind the scenes is doing JSON.stringy();
        // send behind the scenes is doing res.write() and res.end()
        // send is good for sending HTML and TEXT and any generic thing
    res.send("Welcome to the home page  this wesite is about nice things express");
}


function AboutResponse (req, res) {
    res.send("Welcome to the about page  this page is a developer page express EXPRESS");
}

function ContactResponse (req, res) {
    res.send("Welcome to the contact page  this page is a developer page express");
}


module.exports = {HomeResponse, AboutResponse, ContactResponse}