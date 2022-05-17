const scores = document.querySelector('.card-container');

const url = 'https://api.thedogapi.com/v1/breeds';
class App {
  static getData = async () => {
    const response = await fetch(url);
    const dogs = await response.json();
    return dogs;
  }

  static displayData = async () => {
    let data = [];
    try {
      const fetchData = await App.getData();
      data = fetchData.splice(0, 9);
    } catch (e) {
      const info = `
      <div class="card-container">
        <span>${e}</span>
      </div>
      `;
      scores.innerHTML = info;
    }
    let result = '';
    data.forEach((data) => {
      const { name, image } = data;
      const { url } = image;
      const info = `
      <!-- card -->
      <article class="card">
        <div class="card-image" style="background-image: url(${url}); background-size:cover; background-position:center; background-repeat:no-repeat;">
        </div>
        <div class="card-info">
          <p>${name}</p>
          <div>
            <span><i class="fa-solid fa-heart"></i></span>
            <span>3 likes</span>
          </div>
        </div>
        <button class="card-btn">comments</button>
      </article>
      <!-- end of card -->
        `;
      result += info;
    });
    scores.innerHTML = result;
  }
}

export default App;