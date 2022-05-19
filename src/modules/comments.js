/* eslint-disable linebreak-style */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XKoSxq12U35aNHorgjxm/comments';
class Comments {
  // get single comments
  static getComments = async (id) => {
    const response = await fetch(`${url}?item_id=${id}`);
    const comments = await response.json();
    return comments;
  }

  // post method
  static postComments = () => {
    document.body.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('#name').value;
      const comment = document.querySelector('#comment').value;
      const form = document.querySelector('.comment-form');
      const commentList = document.querySelector('.comment-list');
      const totalComments = document.querySelector('.num-comment');
      const id = form.dataset.set;
      // post form data
      const data = {
        item_id: id,
        username,
        comment,
      };
      fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then(async () => {
        // reset the form values
        form.reset();
        const comments = await Comments.getComments(id);
        let allComments = '';
        if (comments.length) {
          comments.forEach((comment) => {
            const data = `
              <p><span class="date">${comment.creation_date}</span>: ${comment.comment} (${comment.username})</p>
              `;
            allComments += data;
          });
          commentList.innerHTML = allComments;
          totalComments.innerHTML = comments.length;
        }
      });
    });
  }
}

export default Comments;