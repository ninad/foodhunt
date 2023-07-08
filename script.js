const foods = ["Pizza", "Burger", "Sushi"];
const eateries = ["Joe's Pizza", "Burger King", "Sushi Palace"];
let posts = [];

function showFoodSuggestions(value) {
  const suggestions = foods.filter(food => food.toLowerCase().startsWith(value.toLowerCase()));
  document.getElementById('foodSuggestions').innerHTML = suggestions.map(suggestion => `<span onclick="selectFood('${suggestion}')">${suggestion}</span>`).join('');
}

function showEaterySuggestions(value) {
  const suggestions = eateries.filter(eatery => eatery.toLowerCase().startsWith(value.toLowerCase()));
  document.getElementById('eaterySuggestions').innerHTML = suggestions.map(suggestion => `<span onclick="selectEatery('${suggestion}')">${suggestion}</span>`).join('');
}

function selectFood(food) {
  document.getElementById('foodInput').value = food;
  document.getElementById('foodSuggestions').innerHTML = '';
}

function selectEatery(eatery) {
  document.getElementById('eateryInput').value = eatery;
  document.getElementById('eaterySuggestions').innerHTML = '';
}

function submitPost() {
  const food = document.getElementById('foodInput').value;
  const eatery = document.getElementById('eateryInput').value;
  const post = `I found the best ${food} at ${eatery}`;
  posts.unshift(post);
  document.getElementById('posts').innerHTML = posts.join('<br>');
}
