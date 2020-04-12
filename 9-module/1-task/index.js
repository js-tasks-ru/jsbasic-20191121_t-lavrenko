'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    let products = JSON.parse(localStorage.getItem('cart-products'))
    let productListBox = document.createElement('div')
    productListBox.classList.add('product-list-box')
    products.forEach((item) => {
      let dataProduct = document.createElement('div')
      dataProduct.setAttribute('data-product-id', item.id)
      dataProduct.classList.add('product-wrapper')
      dataProduct.classList.add('box-inner-col')
      dataProduct.classList.add('description-col')
      
      let imageContainer = document.createElement('div')
      imageContainer.classList.add('product-image-container')
      let image = document.createElement('img')
      image.classList.add('product-image')
      image.setAttribute('src', item.imageUrl)
      image.setAttribute('alt', 'img')
      imageContainer.appendChild(image)
      
      let productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      let title = document.createElement('h4')
      title.classList.add('col-title')
      title.classList.add('mb-2')
      title.innerHTML = item.title
      let rate = document.createElement('div')
      rate.classList.add('rate')
      let itemStars = 0
      let itemReview = 0
      if (item.rating != null) {
        itemStars = item.rating.stars
        itemReview = item.rating.reviewsAmount
      }
      for (let i = 1; i <= 5; i++) {
        let star = document.createElement('i')
        star.classList.add('icon-star')
        if (i <= itemStars) {
          star.classList.add('checked')
        }
        rate.appendChild(star)
      }
      let rateAmount = document.createElement('p')
      rateAmount.classList.add('rate-amount')
      rateAmount.classList.add('d-none')
      rateAmount.classList.add('d-md-block')
      rateAmount.classList.add('mt-1')
      rateAmount.innerHTML = `${itemReview} reviewes`
      productDescription.appendChild(title)
      productDescription.appendChild(rate)
      productDescription.appendChild(rateAmount)

      let productPrice = document.createElement('div')
      productPrice.classList.add('product-price')
      let priceTitle = document.createElement('p')
      priceTitle.classList.add('mb-0')
      priceTitle.classList.add('font-weight-light')
      priceTitle.innerHTML = 'Price:'
      let priceAmount = document.createElement('h4')
      priceAmount.classList.add('col-title')
      priceAmount.classList.add('price-text')
      priceAmount.classList.add('mb-2')
      priceAmount.innerHTML = item.price
      productPrice.appendChild(priceTitle)
      productPrice.appendChild(priceAmount)

      let removeButton = document.createElement('div')
      removeButton.classList.add('product-remove-button-wrapper')
      let button = document.createElement('button')
      button.classList.add('product-remove-button')
      button.setAttribute('type','button')
      button.setAttribute('data-button-role','checkout-remove-product')
      button.innerHTML = 'X'
      removeButton.appendChild(button)

      dataProduct.appendChild(imageContainer)
      dataProduct.appendChild(productDescription)
      dataProduct.appendChild(productPrice)
      dataProduct.appendChild(removeButton)
      productListBox.appendChild(dataProduct)
    })
    parentElement.appendChild(productListBox)

    productListBox.addEventListener('click', (event) => {
      if (!event.target.hasAttribute('data-button-role') || event.target.getAttribute('data-button-role') != 'checkout-remove-product') {
        return
      }
      let confirmDelete = confirm('Вы уверенны, что хотите удалить этот товар из корзины?')
      if (confirmDelete) {
        let selectedItem = event.target.closest('.product-wrapper')
        let selectedId = selectedItem.getAttribute('data-product-id')
        productListBox.removeChild(selectedItem)
        products.forEach((item, i) => {
          if (item.id == selectedId) {
            products.splice(i, 1)
          }
        })
        localStorage.setItem('cart-products', JSON.stringify(products))
      }
    })

  }
}

window.CheckoutProductList = CheckoutProductList;
