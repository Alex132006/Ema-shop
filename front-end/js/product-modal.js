const products = [
    {
        image: "../img-ema/chemise bleu foncee.jpg",
        shop: "Ema's Shop",
        name: "Pagne traditionnel",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Découvrez notre pagne traditionnel de haute qualité, confectionné avec soin pour allier confort et élégance. Ce vêtement authentique est parfait pour toutes les occasions, qu'il s'agisse d'un événement spécial ou d'une tenue quotidienne. Sa coupe moderne et ses motifs raffinés en font un choix idéal pour ceux qui apprécient le style africain contemporain."
    },
    {
        image: "../img-ema/chemise Bleu.jpg",
        shop: "Ema's Shop",
        name: "Ensemble pagne",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Cet ensemble pagne allie tradition et modernité pour une silhouette élégante et racée. Fabriqué dans des tissus soyeux et résistants, il offre un confort optimal tout en affirmant votre style. Idéal pour les cérémonies, les sorties ou le travail, cet habit complet est un incontournable de la garde-robe africaine chic."
    },
    {
        image: "../img-ema/chemise rose rayee.jpg",
        shop: "Ema's Shop",
        name: "Pagne tissé",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Ce pagne tissé est le résultat d'un savoir-faire artisanal authentique. Ses motifs géométriques et ses couleurs vibrantes en font une pièce unique qui célèbre l'héritage textile africain. Léger, respirant et élégant, il se porte en toute saison pour un look à la fois moderne et ancestral."
    },
    {
        image: "../img-ema/chemise rose.jpg",
        shop: "Ema's Shop",
        name: "Pagne imprimé",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Le pagne imprimé séduit par ses motifs colorés et contemporains. Confectionné dans un coton doux et durable, il s'adapte à toutes les morphologies et à tous les styles. Que ce soit pour un événement familial ou une sortie entre amis, ce pagne vous garantit élégance et originalité."
    },
    {
        image: "../img-ema/chemise verte rayee.jpg",
        shop: "Ema's Shop",
        name: "Pagne moderne",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Le pagne moderne revisite les classiques avec des lignes épurées et des teintes actuelles. Son tissu premium assure une sensation de douceur et une tenue impeccable throughout the journée. Parfait pour celles et ceux qui souhaitent allier tradition africaine et tendance urbaine."
    },
    {
        image: "../img-ema/chemise belge.jpg",
        shop: "Ema's Shop",
        name: "Pagne de cérémonie",
        price: 13000,
        priceText: "13.000 cfa",
        oldPrice: 15000,
        oldPriceText: "15.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Ce pagne de cérémonie est conçu pour les moments exceptionnels. Ses finitions impeccables et ses matériaux nobles en font le choix parfait pour les mariages, les baptêmes ou les fêtes traditionnelles. Son élégance naturelle sublimera votre tenue et fera sensation."
    },
    {
        image: "../img-ema/sandale marron.jpg",
        shop: "Ema's Shop",
        name: "Sandale marron",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale marron élégante et confortable, parfaite pour un style décontracté tout en restant raffinée. Cuir souple et semelle antidérapante pour un confort optimal au quotidien."
    },
    {
        image: "../img-ema/sandale noire blanc.jpg",
        shop: "Ema's Shop",
        name: "Sandale noire et blanche",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale noire et blanche au design moderne et épuré. Idéale pour compléter vos tenues estivales avec une touche de sophistication. Légère et durable, elle vous accompagne partout."
    },
    {
        image: "../img-ema/Sandale kaku.jpg",
        shop: "Ema's Shop",
        name: "Sandale kaku",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale kaku traditionnelle revisité avec un confort moderne. Son motif typique et sa fabrication artisanale en font une pièce unique qui honore le savoir-faire local tout en s'adaptant à votre style de vie actif."
    },
    {
        image: "../img-ema/Sandale marr.jpg",
        shop: "Ema's Shop",
        name: "Sandale marron",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale marron classique et intemporelle. Conçue avec des matériaux de qualité, elle allie robustesse et élégance pour un usage quotidien sans compromis."
    },
    {
        image: "../img-ema/Sandale marron .jpg",
        shop: "Ema's Shop",
        name: "Sandale marron",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale marron de style casual, parfaite pour la maison comme pour les sorties. Sa semelle ergonomique et sa bride ajustable garantissent un maintien parfait."
    },
    {
        image: "../img-ema/Sandale marron blanch.jpg",
        shop: "Ema's Shop",
        name: "Sandale marron blanche",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale marron et blanche au design lumineux et frais. Parfaite pour les beaux jours, elle apporte une note de légèreté et d'élégance à toutes vos tenues d'été."
    },
    {
        image: "../img-ema/Sandale marron kaku.jpg",
        shop: "Ema's Shop",
        name: "Sandale marron kaku",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale marron kaku alliant tradition et modernité. Son design unique et sa fabrication soignée en font un choix de prédilection pour ceux qui recherchent authenticité et confort."
    },
    {
        image: "../img-ema/Sandale noire.jpg",
        shop: "Ema's Shop",
        name: "Sandale noire",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale noire sobre et chic, indispensable à toute garde-robe. Sa polyvalence et son confort en font la compagne idéale pour vos journées actives comme pour vos soirées décontractées."
    },
    {
        image: "../img-ema/Sandale verte.jpg",
        shop: "Ema's Shop",
        name: "Sandale verte",
        price: 15000,
        priceText: "15.000 cfa",
        oldPrice: 20000,
        oldPriceText: "20.000 cfa",
        rating: 4.5,
        notes: 734,
        description: "Sandale verte au ton rafraîchissant et original. Sa couleur vive et sa coupe ergonomique en font un accessoire tendance pour sublimer vos looks estivaux avec originalité."
    }
];

let currentProductIndex = null;
let currentQuantity = 1;

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeProductModal()">&times;</button>
            <div class="modal-image-wrapper">
                <img id="modal-product-image" src="" alt="">
            </div>
            <div class="modal-info">
                <p id="modal-shop-name" class="modal-shop"></p>
                <h2 id="modal-product-name" class="modal-name"></h2>
                <div class="modal-rating">
                    <i class="fa-solid fa-star"></i>
                    <span id="modal-rating"></span>
                </div>
                <div class="modal-prices">
                    <span id="modal-price" class="modal-current-price"></span>
                    <span id="modal-old-price" class="modal-old-price"></span>
                </div>
                <p id="modal-description" class="modal-description"></p>
                <div class="modal-quantity">
                    <button onclick="changeQuantity(-1)">-</button>
                    <span id="modal-quantity">1</span>
                    <button onclick="changeQuantity(1)">+</button>
                </div>
                <button class="modal-add-cart" onclick="addToCart()">
                    <i class="fa-solid fa-cart-shopping"></i> Ajouter au panier
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
}

function openProductModal(index) {
    const product = products[index];
    if (!product) return;

    currentProductIndex = index;
    currentQuantity = 1;

    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-shop-name').innerHTML = '<i class="fa-solid fa-certificate"></i> ' + product.shop;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-rating').textContent = product.rating + ' (' + product.notes + ' notes)';
    document.getElementById('modal-price').innerHTML = '<i class="fa-solid fa-wallet"></i> ' + product.priceText;
    document.getElementById('modal-old-price').textContent = product.oldPriceText;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-quantity').textContent = currentQuantity;

    document.getElementById('product-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = '';
}

function changeQuantity(delta) {
    currentQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
    document.getElementById('modal-quantity').textContent = currentQuantity;
}

function addToCart() {
    if (currentProductIndex === null) return;

    const product = products[currentProductIndex];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            id: Date.now(),
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: currentQuantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    const notification = document.createElement('div');
    notification.className = 'modal-notification';
    notification.innerHTML = '<i class="fa-solid fa-check-circle"></i> Produit ajouté au panier !';
    notification.style.display = 'flex';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.display = 'none';
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);

    closeProductModal();
}

document.addEventListener('DOMContentLoaded', function() {
    createModal();
});
