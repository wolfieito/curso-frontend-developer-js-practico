const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuOptionsIcon = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainter = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#ProductDetail')
const productDetailClose = document.querySelector('.product-detail-close')

email.addEventListener('click', toggleDesktopMenu);
menuOptionsIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleaside)
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
    const isAsideOpen = !(shoppingCartContainer.classList.contains('inactive'))

    if (isAsideOpen)
        shoppingCartContainer.classList.add('inactive')


    desktopMenu.classList.toggle('inactive') //quita o agrega la clase inactive
                                      // si la tiene la quita, si no la tiene la pone
}

function toggleMobileMenu(){
    const isAsideOpen = !(shoppingCartContainer.classList.contains('inactive'))

    if (isAsideOpen)
        shoppingCartContainer.classList.add('inactive')

    closeProductDetail()

    mobileMenu.classList.toggle('inactive') //quita o agrega la clase inactive
                                      // si la tiene la quita, si no la tiene la pone
}

function toggleaside(){
    const isMobileMenuOpen = !(mobileMenu.classList.contains('inactive'))
    const isDesktopMenuOpen = !(desktopMenu.classList.contains('inactive'))
    const isProductDetailOpen = !(productDetailContainer.classList.contains('inactive'))

    if (isDesktopMenuOpen)
        desktopMenu.classList.add('inactive')

    if (isMobileMenuOpen)
        mobileMenu.classList.add('inactive')

    if (isProductDetailOpen){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')

}

function closeProductDetail(){
    if (!productDetailContainer.classList.contains('inactive'))
        productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Lawn mower',
    price: 1500,
    image: 'https://cdn2.toro.com/en/-/media/Images/Toro/Homeowner/category-page/2023/Rotating-Banner-Mobile-500x450/2023-Homeowner-WPM-Stripe.ashx'
})
productList.push({
    name: 'Fountain',
    price: 1900,
    image: 'https://www.collinsdictionary.com/images/full/fountain_523439644_1000.jpg'
})
productList.push({
    name: 'Yard light',
    price: 20,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2021/06/smartoutdoorlights-2048px-5063.jpg'
})
productList.push({
    name: 'Yard chairs',
    price: 50,
    image: 'https://pyxis.nymag.com/v1/imgs/b5d/8d5/6c95047badf156b94d437ba610c8c4924b-adirondack-chair-lede.rhorizontal.w600.jpg'
})
productList.push({
    name: 'Yard table',
    price: 100,
    image: 'https://www.thespruce.com/thmb/GilgwyhrC4gqBd2J7OWfv6NX5xw=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc()/cherishedbliss-2fe16e06a68b44589c6631e6b39ae68f.jpg'
})

renderProducts(productList)

function renderProducts(arr){
    for (product of arr){ //of nos da el elemento del array, in nos da el indice
        const productCard = document.createElement('div')
        //crear un elemento tipo div
        productCard.classList.add('product-card')
        //agregando la clase product-card al elemento div que creamos
    
        const imgProd = document.createElement('img')
        imgProd.setAttribute('src', product.image)
        imgProd.addEventListener('click', openProductDetailAside)
    
        productCard.appendChild(imgProd)
        //le agregamos el elemento tipo img en el elemento div con la clase product-card
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        productCard.appendChild(productInfo)
    
        const productInfoDiv = document.createElement('div')
    
        productInfo.appendChild(productInfoDiv)
    
        const priceProd = document.createElement('p')
        priceProd.innerText = product.name
    
        const nameProd = document.createElement('p')
        nameProd.innerText = '$' + product.price
    
        const figure = document.createElement('figure')
    
        productInfo.appendChild(figure)
    
        const imgAddCart = document.createElement('img')
        imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(imgAddCart)
    
        productInfoDiv.appendChild(priceProd)
        productInfoDiv.appendChild(nameProd)
    
        cardsContainter.appendChild(productCard)
        //agregar el product card en el elemento contenedor de cartas del html
    }
}