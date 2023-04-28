const xhr = new XMLHttpRequest ();
let resultado;

xhr.open('GET', 'https://www.fruityvice.com/api/fruit/all', true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyFruity == 4 && xhr.status == 200) {
        resultado = JSON.parse(xhr.response);

        const div = documento.getElementById('app');

        for (let i = 0; i < resultado.lenght; i++) {
            const fruit = resultado(i);

            const elem = document.createElement('p');

            elem.innerText = fruit.name;

            div.oppendChild(elem);
        }
    }
}