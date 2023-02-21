const newCommentHandler = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#comment').value.trim();
    const blogpost_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (comment_text) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ comment_text, blogpost_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        }  else {
            alert('Failed to comment')
        }
    }
}

document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommentHandler);
