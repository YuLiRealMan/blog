import express from "express"
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

app.get("/articles",  (req, res)=>{
    res.render("article.ejs")    
})

app.post("/submit-article",  (req, res)=>{

    var singleArticle = createArticle(req);


    article.push(singleArticle)
    res.render("article.ejs",{

        articles: article
    })

})


function createArticle(req){
    const singleArticle = new Object();
    singleArticle.title = req.body["title"];
    singleArticle.content = req.body["content"];
    singleArticle.articleID = articleID;
    singleArticle.subContent = singleArticle.content.substring(0,200)
    singleArticle.url= "/article/"+articleID
    articleID++;
    return singleArticle;
}