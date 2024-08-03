import express from "express"
import * as Utils from './ArticleUtility.js';
const app = express()
const port =3000
var article = []
var articleID =  0;
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))


app.listen(port , function () {
    console.log(`listening to ${port}`)
})

app.get("/",  (req, res)=>{
    res.render("index.ejs")    
})

app.get("/about",  (req, res)=>{
    res.render("about.ejs")    
})

app.get("/contact",  (req, res)=>{
    res.render("contact.ejs")    
})


app.get("/articles/:id", (req, res) => {

    const articleId = req.params.id;
    
    res.render("articlepage.ejs", { 
        title : article[articleId].title,
        content : article[articleId].content
     });  
    })

app.get("/articles",  (req, res)=>{
    res.render("article.ejs")    
})

app.post("/submit-article",  (req, res)=>{

    var singleArticle = Utils.createArticle(req,articleID);
    articleID++;

    article.push(singleArticle)
    res.render("article.ejs",{

        articles: article
    })

})




