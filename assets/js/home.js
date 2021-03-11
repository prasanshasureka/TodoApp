console.log('JS Script');
var dropdown = document.querySelector('select');
var allCategory = [];
for (i = 1; i < dropdown.options.length; i++) {
    allCategory.push(dropdown.options[i].text.toLowerCase());
}
console.log(allCategory);

var colors = ['#9c27b0', '#8bc34a', '#e91e63', '#009688', '#ffc107'];

var items = document.querySelectorAll('li');
console.log(items);

for (i of items){
    category = i.querySelector('#categoryDiv');
    console.log(category.innerHTML.trim());
    indexOfCategory = allCategory.indexOf(category.innerHTML.trim());
    console.log(allCategory.indexOf(category.innerHTML.trim()));
    category.style.backgroundColor = colors[indexOfCategory];
}





