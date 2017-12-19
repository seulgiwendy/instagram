const likeButton = () => {
    console.log("you've pressed like button!");
    var likeButtonElement = document.getElementById("like-button");
    let likeClassName = likeButtonElement.className.match("like to-like");

    if(likeClassName) {
        likeButtonElement.className = "like did-like";
        return;
    }
    likeButtonElement.className = "like to-like";
}