import { urlLike } from './url_config.js';

class Likes {
  static getData = async () => {
    const response = await fetch(urlLike);
    const likes = await response.json();
    return likes;
  }

  // post likes to the api
  static postData = () => {
    document.body.addEventListener('click', async (e) => {
      if (e.target.classList.contains('fa-solid')) {
        const id = Number(e.target.dataset.set);
        const data = {
          item_id: id,
        };
        fetch(
          urlLike,
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ).then(() => {
          if (e.target.classList.contains('fa-solid')) {
            const likeBtn = e.target;
            const value = parseInt(likeBtn.nextElementSibling.innerHTML, 10) + 1;
            likeBtn.nextElementSibling.innerHTML = value;
          }
        });
      }
    });
  }
}

export default Likes;