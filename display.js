document.addEventListener('DOMContentLoaded', () => {
    const selectedProduct = JSON.parse(window.localStorage.getItem('prod_id'));
    const selectedProductContainer = document.getElementById('selected-product');
    
    if (selectedProduct) {
      const productElement = document.createElement('div');
      productElement.classList.add('product', 'selected-product');
      productElement.innerHTML = `
      <div class="container-fluid"
      style="background-color: black;width: 100%;height: 100%;background-image: radial-gradient(black 10px,red 10px);background-size: 15px 15px;overflow-y: hidden;">
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">
                  <b style="color: white;font-size: xx-large;">SPORT<b style="color: red;">Z</b> HUB</b>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon" style="border: 5px solid red;"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
                      <li class="nav-item">
                          <a class="nav-link text-light navs" aria-current="page" href="index.html"
                              style="font-size: 15px;"><b>Home</b></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-light" href="cart.html" style="font-size: 15px;"><b>Cart</b></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-light active" href="product.html"
                              style="font-size: 15px;"><b>Products</b></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-light" href="main_register.html"
                              style="font-size: 15px;"><b>Register</b></a>
                      </li>
                  </ul>
                  <!-- <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> -->
              </div>
          </div>
      </nav>
  </div>
  <div class="container my-5">
       <div class="row">
          <div class="col-sm-6" style="border:2px solid red;border-style:dashed;">
              <img src="${'images/'+selectedProduct.image}" alt="${selectedProduct.name}" width="500px" id="prod_img">
          </div>
          <div class="col-sm-6">
            <div class="row">
               <div class="col-sm">
                   <h1 style="-webkit-text-stroke-width:1px ;-webkit-text-stroke-color: red;" id="prod_nm">${selectedProduct.name}</h1></div>
               </div>  
               <div class="col-sm">
               <p style="color:black;font-size:25px;"><b id="prod_desc">${selectedProduct.desc}</b></p>
               </div>
               <div class="d-flex justify-content-between align-items-center">
               <div class="ratings">
                   <i class="fa fa-star rating-color"></i>
                   <i class="fa fa-star rating-color"></i>
                   <i class="fa fa-star rating-color"></i>
                   <i class="fa fa-star rating-color"></i>
                   <i class="fa fa-star"></i>
               </div>
               <h5 class="review-count">12 Reviews</h5>
           </div>
               <div class="col-sm">
                 <h2 class="text-danger" style=""><b>${selectedProduct.price}</b></h2>
               </div>
               <div class="col-sm my-4">
                 <button class="btn btn-dark text-danger btn-lg btn-block" onclick="add(${selectedProduct.id})"><b>Add to Cart</b></button>
                 <button class="btn btn-dark text-danger btn-lg btn-block" onclick="back()"><b>Back to Products</b></button>
                 
               </div>
            </div> 
                      
          </div>
          
       
       </div>

        
       
        <!--<p>${selectedProduct.desc}</p>-->
        </div>
      `;
    
      selectedProductContainer.appendChild(productElement);
    } 
  });

  const products = [
    {
        id : 1,
        name : 'PUMA Black Tshirt',
        image : 'tshirt_1_1.webp',
        price : "$120" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style. While the fabric keeps you fresh all day, the print amps up your casual game in unbelievable ways.',
    },
    {
        id : 2,
        name : 'PUMA Gym Tshirt',
        image : 'tshirt_2_1.webp',
        price : "$140" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',

    },
    {
        id : 3,
        name : 'PUMA Blue Tshirt',
        image : 'tshirt_3_1.webp',
        price : "$110" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 4,
        name : 'PUMA Black Jacket',
        image : 'tshirt_4_1.webp',
        price : "$200 ",
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 5,
        name : 'PUMA Cotton Tshirt',
        image : 'tshirt_5_1.webp',
        price : "$110" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 6,
        name : 'PUMA Gray Tshirt',
        image : 'tshirt_6_1.webp',
        price : "$110" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 7,
        name : 'PUMA Gym Tshirt',
        image : 'tshirt_7_1.webp',
        price : "$90" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 8,
        name : 'PUMA Gym Suit',
        image : 'tshirt_8_1.webp',
        price : "$190" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 9,
        name : 'Nike Black Tshirt',
        image : 'tshirt_9_1.webp',
        price : "$110" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
        {
        id : 10,
        name : 'PUMA Tack Suit',
        image : "Men's-Track-Suit_1_1.avif",
        price : "$210" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 11,
        name : 'PUMA Black Track',
        image : "Men's-Track-Suit_2_1.avif",
        price : "$110" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 12,
        name : 'PUMA IIM Gray Track',
        image : "Men's-Track-Suit_3_1.avif",
        price : "$170" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 13,
        name : 'PUMA Fancy Track',
        image : "Men's-Track-Suit_4_1.avif",
        price : "$180" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 14,
        name : 'Green Gym Track',
        image : "Men's-Track-Suit_5_1.avif",
        price : "$150" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 15,
        name : 'PUMA Army Color',
        image : "Men's-Track-Suit_6_1.avif",
        price : "$170" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 16,
        name : 'PUMA Gray Cotton Track',
        image : "Men's-Track-Suit_7_1.avif",
        price : "$160" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 17,
        name : 'Fancy Track',
        image : "Men's-Track-Suit_8_1.avif",
        price : "$120" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 18,
        name : 'Nike Cotton Blue',
        image : "Men's-Track-Suit_9_1.avif",
        price : "$160" ,
        desc :  'Walk down the street in confidence in the PUMA Graphic mens T-Shirt which adds innumerable stars to your style.',
    },
    {
        id : 19,
        name : 'Spring Grip',
        image : 'pro_1_1.jfif',
        price : "$110" ,
        desc :  'Strauss Adjustable Hand Grip| Adjustable Resistance (10KG - 40KG) | Hand Gripper for Home & Gym Workouts | Perfect for Finger & Forearm Hand Exercises & Strength Building for Men & Women (Black)',
    },
    {
        id : 20,
        name : 'Life Long Dumbells',
        image : 'pro_2_1.jpg',
        price : "$100" ,
        desc :  'Pack (5 kg*2)| Dumbbells set for home gym, Gym dumbbell set, Rubber Encased Hex Fixed Dumbbell Weight, 5 kg dumbbell, Dumbbell sets online Hexa, Rubber dumbbell set (5Kg Pair)',
    },
        {
        id : 21,
        name : 'Bulls Gym Bag',
        image : 'pro_3_1.jfif',
        price : "$90 ",
        desc :  'Gym Duffel 28L Sports Bag for Men and Women(Black & Orange) Polyester | 2 in 1 Yoga Mat Holder Duffle Bag with Shoe Compartment, Detachable Shoulder Strap with Quick Access Pocket, Dumbbell sets online Hexa, Rubber dumbbell set (5Kg Pair)',
    },
    
        {
        id : 22,
        name : 'BoldFit Gym Ball',
        image : 'pro_4_1.jfif',
        price : "$85" ,
        desc :  'Boldfit Gym Ball for Exercise Anti Burst Exercise Ball with Foot Pump for Workout Yoga Ball for Women and Men Swiss Ball for Balance Stability Training, Birthing Ball for Pregnancy, Fitness',
    },

    
    {
        id : 23,
        name : 'Fitness Gloves',
        image : 'pro_5_1.jfif',
        price : "$110" ,
        desc :  'Wear gloves do gym make fitness Without injuries ...',
    },
    
    
    {
        id : 24,
        name : 'Full Fitness Set',
        image : 'pro_6_1.jfif',
        price : "$290" ,
        desc :  'Boldfit Gym Ball for Exercise Anti Burst Exercise Ball with Foot Pump for Workout Yoga Ball for Women and Men Swiss Ball for Balance Stability Training, Birthing Ball for Pregnancy, Fitness',
    },
    
        {
        id : 25,
        name : 'WISELIFE Yoga Mat',
        image : 'pro_7_1.jfif',
        price :" $170" ,
        desc :  'Boldfit Gym Ball for Exercise Anti Burst Exercise Ball with Foot Pump for Workout Yoga Ball for Women and Men Swiss Ball for Balance Stability Training, Birthing Ball for Pregnancy, Fitness',
    },
    
        {
        id : 26,
        name : 'BoldFit Protein Bottle',
        image : 'pro_8_1.jfif',
        price : "$90 ",
        desc :  '5 litres Protein Bottle',
    },

    {
        id : 27,
        name : 'Abstract Protein Bottle',
        image : 'pro_9_1.jfif',
        price : "$60" ,
        desc :  '2 litres Protein Bottle',
    },
    
        {
        id : 28,
        name : 'Crystal Cushion Blue Sports Shoes',
        image : 'shoes_pro_1_1.jpg',
        price : "$190 ",
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
            {
        id : 29,
        name : 'LCR White Sports Shoes',
        image : 'shoes_pro_2_1.jpg',
        price : "$180" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
            {
        id : 30,
        name : 'FGUSE Red Sports Shoes',
        image : 'shoes_pro_3_1.jpg',
        price : "$150" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
    {
        id : 31,
        name : 'Canvas Green Shoes',
        image : 'shoes_pro_4_1.jpg',
        price : "$120" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
            {
        id : 32,
        name : 'XSTEP Canvas Blue Shoes',
        image : 'shoes_pro_5_1.jpg',
        price : "$90" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
            {
        id : 33,
        name : 'ASIAN Welcrove Shoes',
        image : 'shoes_pro_6_1.jpg',
        price : "$90" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
                {
        id : 34,
        name : 'DSC Sports Shoes',
        image : 'shoes_pro_7_1.jpg',
        price : "$190" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
        
    {
        id : 35,
        name : 'Sports Shoes With Spikes',
        image : 'shoes_pro_8_1.jpg',
        price : "$140" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
    {
        id : 36,
        name : 'IndiFoot Red Sports Shoes',
        image : 'shoes_pro_9_1.jpg',
        price : "$120" ,
        desc :  'ASIAN Mens Sports Running Shoes with Crystal Cushion Technology Lightweight Casual Sneaker Shoes Crystal-13…',
    },
    {
        id:37,
        name : "Smart Brand 4",
        image : "exclusive.png",
        price : '$650',
        desc : "The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.",
    }
    
    
       
       
]


  const back = () => {
    window.history.back();
  }

  // const add = (id) => {
  //   const selected_product = document.getElementById("selected_product");
  //   // window.localStorage.setItem('prod_id',id)
    // const current_prod = products.find((val,ind)=>val.id==id)
  //   // const current_prod = products[id-1]
  //   localStorage.setItem('add_cart', JSON.stringify(current_prod))
  //  window.location.assign("./cart.html") 
  // }

  const add=(id)=>{
    const current_prod = products.find((val,ind)=>val.id==id)
    window.localStorage.setItem('cart',JSON.stringify(current_prod))



  }

  