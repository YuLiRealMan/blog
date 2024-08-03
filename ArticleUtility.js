export function createArticle(req, articleID){
    const singleArticle = new Object();
    singleArticle.title = req.body["title"];
    singleArticle.content = req.body["content"];
    singleArticle.articleID = articleID;
    singleArticle.subContent = singleArticle.content.substring(0,200)
    singleArticle.url= "/article/"+articleID
    return singleArticle;
}
