// Examine the DOCUMENT OBJECT

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);

// SELECTORS

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent = "Hello";
// headerTitle.innerText = 'Hello123';
// headerTitle.innerHTML = '<h3>Hello 456</h3>';
// header.style.borderBottom = 'solid 3px black'; 

// GET Elements by CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1].textContent);


// QUERY SELECTOR
// var headerID = document.getElementById('main-header');
// console.log(headerID.innerText);

// var header = document.querySelector('#main-header');
// console.log(header.textContent);
// header.style.borderBottom = 'solid 3px black'

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral';


// QUERY SELECTOR ALL

// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = "Hello World";

var oddItems = document.querySelectorAll('li:nth-child(odd)')
var evenItems = document.querySelectorAll('li:nth-child(even)')

for(var i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = '#f4f4f4';
    evenItems[i].style.backgroundColor = '#ccc';
}