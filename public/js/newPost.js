const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#post').value.trim();

  if (title && content) {
    const response = await fetch('/api/dashboard/newPost', {
      method: 'POST',
      body: JSON.stringify({title, content}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#button')
  .addEventListener('click', newPostHandler);
