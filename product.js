
// Adding the event listener.
document.getElementById('productType').addEventListener('change', (event) => 
{
      // Hiding every list.
      document.querySelectorAll('.product').forEach(product => {product.style = 'display:none'});
      // Showing the needed list.
      document.getElementById(event.target.value).style = 'display: block';
      console.log(event);
})
