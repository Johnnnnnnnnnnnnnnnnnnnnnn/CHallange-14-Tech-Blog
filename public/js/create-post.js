async function createPost(event) {
    event.preventDefaul();

    document.location.replace("/dashboard/new");
}

document.querySelector("#create-new-post").addEventListener("click", createPost);