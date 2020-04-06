// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = Number(product.querySelector('.price > span').innerText)    // get the price of a product
  let quantity = Number(product.querySelector('.quantity > input').value) // get the quantity of that product
  let subtotal = product.querySelector('.subtotal > span')
  subtotal.innerHTML = price * quantity   // set the subtotal of the product to price * quantity 
  return price * quantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProduct = document.querySelectorAll('.product');   // we get a NodeList (i.e. array) of all the products
  console.log(allProduct)
  let netTotal = 0

  // we loop through all the products and add the subtotal of each product to the netTotal
  for(let singleProduct of allProduct){
    let subtotal = updateSubtotal(singleProduct);
    netTotal += subtotal
  }

  document.querySelector('#total-value > span').innerHTML = netTotal    // set the total cost
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
