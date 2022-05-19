import url from './url_config.js';

const getDogShowInfo = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};

const constructDogShowInfoDOM = (dogShow) => {
  const popUpCtn = document.getElementById('ctn-dog-info-window');
  popUpCtn.classList.add('show');
  popUpCtn.innerHTML = '';
  const showInfoDiv = `
        <div class="ctn-dog-info">
            <div class="ctn-icn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="ctn-img">

                <img src="https://cdn2.thedogapi.com/images/${dogShow.reference_image_id}.jpg" alt="dogshow_preview">

            </div>
            <h3 class="dogshow-name">${dogShow.name}</h3>
            <div class="dogshow_info">
                <h5>Type : <span>${dogShow.bred_for}</span></h5>
                <h5>Origin : <span>${dogShow.origin}</span></h5>
                <h5>Life : <span>${dogShow.life_span}</span></h5>
                <h5>Group : <span>${dogShow.breed_group}</span></h5>
            </div>
            <div class="ctn-comment">
                <div class="ctn-comments-head">
                    <h3 class="comments-head">Comments (<span class="num-comment"></span>) </h3>
                </div>
                <div class="comment-list"></div>
            </div>
            <h3>Add a comment</h3>
            <form class="comment-form" action="" method="post">
                <input class="name-area" type="text" name="name" id="name">
                <textarea class="comment-area" type="text" name="comment" id="comment" required></textarea>
                <input class="sub-button" type="submit" value="Comment">
            </form>
        </div>`;

  popUpCtn.innerHTML += showInfoDiv;
  const sd = popUpCtn.querySelector('.ctn-icn');
  sd.addEventListener('click', () => {
    popUpCtn.classList.remove('show');
  });
};

const renderPopUp = (id) => {
  getDogShowInfo(id).then((dogShow) => constructDogShowInfoDOM(dogShow));
};

// const createComment = (id) => {
// send the comment to the server
// };

export default renderPopUp;