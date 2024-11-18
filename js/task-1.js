
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('li.item');

console.log(`Numbers of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsNumber = item.querySelector('ul').children.length;

    console.log(`Category: ${title} Elements: ${elementsNumber}`)
    })