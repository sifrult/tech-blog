const updateBtn = async (event) => {

  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#post').value.trim();

    if (title || content)
{    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content}),
          headers: {
              'Content-Type': 'application/json'
          }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }}

};

document.querySelector('#button')
  .addEventListener('click', updateBtn);
