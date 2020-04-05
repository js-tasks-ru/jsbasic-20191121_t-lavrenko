class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
  }

  show() {
    let src = this.productsUrl
    return new Promise(function(resolve) {
      fetch(src)
      .then(response => response.json())
      .then(response => resolve(response))
    })
    .then((response) => {
      let row = document.createElement('div')
      row.classList.add('row')
      row.classList.add('justify-content-end')
      let col = document.createElement('div')
      col.classList.add('col-lg-9')
      let title = document.createElement('h3')
      title.classList.add('section-title')
      title.innerHTML = 'Top Recommendations for You'
      let rowCards = document.createElement('div')
      rowCards.classList.add('row')
      rowCards.classList.add('homepage-cards')
      response.forEach((item) => {
        let product = document.createElement('div')
        product.setAttribute('data-product-id', item.id)
        product.classList.add('products-list-product')
        product.classList.add('col-md-6')
        product.classList.add('col-lg-4')
        product.classList.add('mb-4')
        let card = document.createElement('div')
        card.classList.add('card')
        let cardImage = document.createElement('div')
        cardImage.classList.add('card-img-wrap')
        let img = document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('src', item.imageUrl)
        img.setAttribute('alt', 'Card image cap')
        cardImage.appendChild(img)
        card.appendChild(cardImage)
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = item.title
        let rate = document.createElement('div')
        rate.classList.add('rate')
        let ratingStars = 0
        let ratingRewiew = 0
        if (item.rating != null) {
          ratingStars = item.rating.stars
          ratingRewiew = item.rating.reviewsAmount
        }
        for (let i = 1; i <= 5; i++) {
          let star = document.createElement('i')
          star.classList.add('icon-star')
          if (i <= ratingStars) {
            star.classList.add('checked')
          } else {
            star.classList.add('active')
          }
          rate.appendChild(star)
        }
        let rateAmount = document.createElement('span')
        rateAmount.classList.add('rate-amount')
        rateAmount.classList.add('ml-2')
        rateAmount.innerHTML = ratingRewiew
        rate.appendChild(rateAmount)
        let price = document.createElement('p')
        price.classList.add('card-text')
        price.classList.add('price-text')
        let priceAmount = document.createElement('strong')
        priceAmount.innerHTML = item.price
        price.appendChild(priceAmount)
        if (item.oldPrice != null) {
          let oldPrice = document.createElement('small')
          oldPrice.classList.add('ml-2')
          oldPrice.innerHTML = item.oldPrice
          price.appendChild(oldPrice)
          price.classList.add('discount')
        }
        let cart = document.createElement('button')
        cart.classList.add('product-add-to-cart')
        cart.setAttribute('data-button-role', 'add-to-cart')
        cart.innerHTML = 'Add to cart'

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(rate)
        cardBody.appendChild(price)
        cardBody.appendChild(cart)
        card.appendChild(cardBody)
        product.appendChild(card)
        rowCards.appendChild(product)
      })
      col.appendChild(title)
      col.appendChild(rowCards)
      row.appendChild(col)
      this.el.appendChild(row)
      let itemsToCart = []
      rowCards.addEventListener('click', (event) => {
        if (!event.target.hasAttribute('data-button-role')) {
          return
        }
        let result = confirm('Вы уверенны, что хотите добавить этот товар в корзину?')
        if (result) {
          let selectedItem = event.target.closest('.products-list-product')
          let selectedId = selectedItem.getAttribute('data-product-id')
          let newItem = undefined
          if (localStorage.getItem('cart-products') != null) {
            newItem = itemsToCart.find(item => item.id == selectedId)
          }
        if (newItem == undefined) {
          itemsToCart.push(response[selectedId-1]) 
          localStorage.setItem('cart-products', JSON.stringify(itemsToCart))
        }
        }
      })
    })
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
