getPosts(callbackSuccess, callbackError);

function callbackSuccess(posts, callbackPosts) {
    console.warn(posts.length);
    callbackPosts(posts, callbackPrimerPost);
}

function callbackError(error) {
    console.error(error);
}

function callbackPosts(posts, callbackPrimerPost) {
    console.warn(JSON.stringify(posts));
    callbackPrimerPost(posts);
}

function callbackPrimerPost(posts) {
    console.warn(JSON.stringify(posts[0]));
}

function getPosts(callbackSuccess, callbackError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                callbackSuccess(xhr.response, callbackPosts);
            } else {
                callbackError(new Error('Error to get post from server.'));
            }
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
}

var postsPromise = new Promise(
    function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(new Error('Error to get post from server.'));
                }
            }
        }
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xhr.send();
    }
);

function getPostsPromise() {
    postsPromise
        .then(function (posts) {
            console.log("Cantidad de posts " + posts.length)
            return Promise.resolve(posts);
        })
        .then(function (posts) {
            console.log("Posts: " + JSON.stringify(posts));
            return Promise.resolve(posts);
        })
        .then (function (posts) {
            console.log("El primer post es: " + JSON.stringify(posts[0]));
            return Promise.reject("De igual forma llame el error");
        })
        .catch(function (error) {
            console.error(error);
        });
}

getPostsPromise();