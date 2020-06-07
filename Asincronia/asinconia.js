function getChuckNorrisJoke() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let joke = new Array(JSON.parse(request.response));
                showJokes(joke);
            }
            else {
                alert('Error to get Chuck Norris Joke. Try again!')
            }
        }
    };
    request.send(null);
}

function getCategories() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.chucknorris.io/jokes/categories', true);
    request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let categories = JSON.parse(request.response);
                showCategories(categories);
            }
            else {
                alert('Error to get Chuck Norris Categories. Try again!')
            }
        }
    };
    request.send(null);
}

function getChuckNorrisJokeByCategory() {
    let request = new XMLHttpRequest();
    let category = document.getElementById("categories").value;
    request.open('GET', 'https://api.chucknorris.io/jokes/random?category=' + category, true);
    request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let joke = new Array(JSON.parse(request.response));
                showJokes(joke);
            }
            else {
                alert('Error to get Chuck Norris Joke. Try again!')
            }
        }
    };
    request.send(null);
}

function getChuckNorrisJokeByQuery() {
    let request = new XMLHttpRequest();
    let query = document.getElementById("query").value;
    request.open('GET', 'https://api.chucknorris.io/jokes/search?query=' + query, true);
    request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                let response = JSON.parse(request.response);
                let jokes = response.result;
                showJokes(jokes);
            }
            else {
                alert('Error to get Chuck Norris Joke. Try again!')
            }
        }
    };
    request.send(null);
}

function showCategories(categories) {
    let select = document.getElementById('categories');
    categories.forEach((category) => {
        let option = document.createElement('OPTION');
        option.innerHTML = category;
        select.appendChild(option);
    });
}

function showJokes(jokes) {
    let table = document.getElementById("table"),
        tbody = document.getElementById("tbody"),
        tr, td;

    if (tbody)
        table.removeChild(tbody);

    tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    table.appendChild(tbody);

    jokes.forEach((joke) => {
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.innerHTML = joke.id;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = joke.value;
        tr.appendChild(td);

        td = document.createElement("td");
        let a = document.createElement("A");
        a.href = joke.url;
        a.innerHTML = joke.url;
        td.appendChild(a);
        tr.appendChild(td);

        td = document.createElement("td");
        let img = document.createElement("img");
        img.src = joke.icon_url;
        td.appendChild(img);
        tr.appendChild(td);

        tbody.appendChild(tr);
    });

    document.getElementById("total").innerText = "Jokes found: " + jokes.length;
}

getCategories();
getChuckNorrisJoke();








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





