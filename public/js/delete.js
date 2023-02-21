const deleteBtn = async (event) => {
    if (event.target.hasAttribute('data-blogTitleId')) {
      const id = event.target.getAttribute('data-blogTitleId');
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };


document.querySelector('.delete')
    .addEventListener('click', deleteBtn);
