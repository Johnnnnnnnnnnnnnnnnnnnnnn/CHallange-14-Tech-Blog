async function commentHandler(event) {
    event.preventDefault();

    const commentContent = document.querySelector("textarea[name='comment-body']").value.trim();
    const postId = window.location.toString().split("/")[window.location.toString().split("/").length - 1]

    if(commentContent) {
        const response = await fetch("/api/comments", {
            method:"POST",
            body: JSON.stringify({
                post_id: postId,
                comment_content: commentContent
            }),
            headers: {
                "content-Type": "application/json"
            }
        });

        if(response.ok) {
            document.location.reload();
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector(".comment-form").addEventListener("submit", commentHandler);