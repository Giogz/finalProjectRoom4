
class postController{
    constructor (postsId = 0) {
        this.postsId = postsId;
        this.posts = [];
    }
    addPost(title,description,url){
        const post = {
            id:this.postsId++,
            title,
            description,
            url,
        }
        this.posts.push(post);
    }


}

