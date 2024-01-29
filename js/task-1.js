const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((category) =>{
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul>li').length;

  console.log(`Elements: ${categoryElements}`);
  console.log(`Category: ${categoryName}`);
})