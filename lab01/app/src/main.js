document.addEventListener('DOMContentLoaded', () => {

  // --- РЕАКТИВНОСТЬ 1: Кнопка "Добавить в корзину" ---
  const cartButtons = document.querySelectorAll('.add-to-cart-btn');

  cartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.target;
      
      // Проверяем, не добавлен ли товар уже в корзину
      if (!clickedButton.classList.contains('in-cart')) {
        clickedButton.textContent = 'В корзине';
        clickedButton.classList.add('in-cart');
        // Можно также заблокировать кнопку после добавления
        clickedButton.disabled = true; 
      }
    });
  });


  // --- РЕАКТИВНОСТЬ 2: Поиск товаров ---
  const searchInput = document.getElementById('searchInput');
  const categories = document.querySelectorAll('.category');

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();

    categories.forEach(category => {
      const catTitle = category.querySelector('.category__title');
      const prodCards = category.querySelectorAll('.product-card');
      let visProdCount = 0;
      
      prodCards.forEach(card => {
        const prodNameEl = card.querySelector('.product-card__name');
        const prodName = prodNameEl.textContent.toLowerCase();
        
        if(prodName.includes(searchTerm)) {
          card.style.display = 'flex';
          visProdCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      if(visProdCount > 1) {
        catTitle.style.display = 'block';
      } else {
        catTitle.style.display = 'none';
      }
    });
  });

});