function showCustomAlert() {
    const modal = document.getElementById('alert-modal');
    modal.style.display = 'flex'; // Show the modal
}

function closeCustomAlert() {
    const modal = document.getElementById('alert-modal');
    modal.style.display = 'none'; // Hide the modal
}


function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
