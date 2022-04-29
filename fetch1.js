async function image(){
  let response = await fetch('  https://static5.depositphotos.com/1007168/472/i/950/depositphotos_4725473-stock-photo-hot-summer-sun-wearing-shades.jpg');//'https://assets.chucknorris.host/img/avatar/chuck-norris.png'

let blob = await response.blob(); // скачиваем как Blob-объект

// создаём <img>
let img = document.createElement('img');
img.style = 'position:fixed;top:40px;left:10px;width:100px';
document.body.append(img);

// выводим на экран
img.src = URL.createObjectURL(blob);
}


const func = async () => {
 try {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await res.json()
  let span = document.createElement('span');
  span.innerHTML = data.value;
  image()
  document.body.append(span);
 } catch (error) {
   console.log(error);
 }
}

 func()

