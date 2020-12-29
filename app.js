// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 151; i++) {
    const div = document.createElement('div');
    container.append(div);
    
    const image = document.createElement('img');
    image.src = `${URL}${i}.png`;
    div.append(image);
    
    const span = document.createElement('span');
    span.innerText = i;
    div.append(span);

    div.classList.add('pokemon');
}
