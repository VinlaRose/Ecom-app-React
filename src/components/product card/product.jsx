import "./product.css";
export const ProductCard = ({product}) => {
    const {id, name, image,newPrice, oldPrice, discount, rating} = product;
    return(
        <div class="card card-vertical d-flex direction-column relative shadow">
     <div class="card-image-container">
          <img class="card-image" src={image} alt="shoes"/>
     </div>
     <div class="card-details">
          <div class="card-title">{name}</div>
          <div class="card-description">
               {/* <p class="card-des">Men Sneakers</p> */}
               <p class="card-price">
                  ₹{newPrice}
               	  <span class="price-strike-through">{oldPrice}</span>
                  {/* <span class="discount">({discount})</span> */}
               </p>
          </div>
          <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
               {/* <img src="/assets/cart-white.png" alt="cart"/>  */}
                 Add To Cart
               </button>
          </div>
     </div>
</div>
)
}
   
