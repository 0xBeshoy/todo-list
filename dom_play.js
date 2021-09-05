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

// var oddItems = document.querySelectorAll('li:nth-child(odd)')
// var evenItems = document.querySelectorAll('li:nth-child(even)')

// for(var i = 0; i < oddItems.length; i++) {
//     oddItems[i].style.backgroundColor = '#f4f4f4';
//     evenItems[i].style.backgroundColor = '#ccc';
// }


// Traversing the DOM

// var itemList = document.querySelector('#items');

// console.log(itemList.children);
// itemList.children[1].style.textDecoration = 'line-through'
// itemList.children[2].style.backgroundColor = 'yellow'


// // Creating the Element that I'd like to append to the DOM
// var newDiv = document.createElement('div');
// // Adding a class to that element
// newDiv.className = 'Hello';
// // Adding an ID to that element
// newDiv.id = 'HelloID';
// // Adding an Attribute
// newDiv.setAttribute('title', 'Hello World');
// // Adding text to that element
// newDiv.appendChild(document.createTextNode('Hello World'));

// // Appending that element to the DOM

// // Selecting the elements around the element i'd like to append 
// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')
// // Appending the element
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '15px'



// // Events

// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick
// );

// function buttonClick(e){
//     // console.log("Button Clicked");
//     // document.getElementById('header-title').textContent = 'Hello World';
//     // console.log(e)
// }

// var button = document.getElementById('button')
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouseover', runEvent);
// // button.addEventListener('mouseenter', runEvent);
// // button.addEventListener('mouseleave', runEvent);


// function runEvent(e){
//     console.log(e.type);
    
// }