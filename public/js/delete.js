const deleteBtn = async (event) => {
  event.preventDefault();
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/blogpost/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post');
  }
};


document.querySelector('.deleteBtn')
    .addEventListener('click', deleteBtn);
