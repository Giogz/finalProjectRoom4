const ourController =  new postController(0);
ourController.addPost("ourTitle", "ourDescription", "ourUrl");
console.log(ourController);

const post2 =  new postController(0);
ourController.addPost("ourTitle2", "ourDescription2", "ourUrl2");
console.log(post2);

let gioPost = {
    title : "my First Post",
    description : " This is my first post that I do ",
    url : "https://images.pexels.com/photos/10037017/pexels-photo-10037017.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10037017.jpg&fm=jpg"
}
ourController.addPost(gioPost);
console.log(gioPost);