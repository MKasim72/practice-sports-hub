const dp_down = document.getElementsByClassName('dp_down')
const show_data=document.getElementById('show_data')
// console.log(dp_down)
function tshirts(){
    show_data.innerHTML=`
   
<div id="show_data">
    <div class="container my-5">
        <div class="row">
            <div class="col-sm-4">
                <h3 class="text-danger">Suggested Products</h3>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="dropdown">
                    <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu dp_down" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onclick="tshirts()">T-shirts</a></li>
                        <li><a class="dropdown-item" href="#" onclick="track()">Track Pants</a></li>
                        <li><a class="dropdown-item" href="#" onclick="gym()">Gym Equipments</a></li>
                        <li><a class="dropdown-item" href="#" onclick="shoes()">Shoes</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_1_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">PUMA Black T-shirt</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto0 onclick="show_prod(1)"">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card " style="width: 18rem;">
                    <img src="images/tshirt_2_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Gym T-shirt</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(2)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_3_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Blue T-shirt</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(3)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_4_1.webp"" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">PUMA Black Jacket</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(4)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_5_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Cotton T-shirt</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(5)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_6_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Gray T-shirt</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(6)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_7_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Gym T-shirt</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(7)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_8_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">PUMA Gym Suit </h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(8)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/tshirt_9_1.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">NIKE Black T-shirt</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(9)">View</a> 
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

    `
}


function track(){
    show_data.innerHTML=`
   
<div id="show_data">
    <div class="container my-5">
        <div class="row">
            <div class="col-sm-4">
                <h3 class="text-danger">Suggested Products</h3>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="dropdown">
                    <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu dp_down" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onclick="tshirts()">T-shirts</a></li>
                        <li><a class="dropdown-item" href="#" onclick="track()">Track Pants</a></li>
                        <li><a class="dropdown-item" href="#" onclick="gym()">Gym Equipments</a></li>
                        <li><a class="dropdown-item" href="#" onclick="shoes()">Shoes</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_1_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">PUMA Track Suit</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick(10)>View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_2_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Black Track</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(11)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_3_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA IIM Gray Track</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(12)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_4_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">PUMA Fancy Track</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(13)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_5_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">Green Gym Track</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(14)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_6_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Army Color</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(15)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_7_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">PUMA Gray Cotton Tracl</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(16)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_8_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Fancy Track </h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(17)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/Men's-Track-Suit_9_1.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">NIKE Cotton Blue</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(18)">View</a> 
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

    `
}

function gym(){
    show_data.innerHTML=
    `
   
<div id="show_data">
    <div class="container my-5">
        <div class="row">
            <div class="col-sm-4">
                <h3 class="text-danger">Suggested Products</h3>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="dropdown">
                    <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu dp_down" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onclick="tshirts()">T-shirts</a></li>
                        <li><a class="dropdown-item" href="#" onclick="track()">Track Pants</a></li>
                        <li><a class="dropdown-item" href="#" onclick="gym()">Gym Equipments</a></li>
                        <li><a class="dropdown-item" href="#" onclick="shoes()">Shoes</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_1_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Spring Grip</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(19)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_2_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">Life long Dumbells</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(20)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_3_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">BULLS Gym Bag</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(21)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_4_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">BOLDFit Gym Ball</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(22)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_5_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">Fitness Gloves</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(23)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_6_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">Full Fitness Set</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(24)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_7_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">WISELIFE Yoga Mat</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(25)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_8_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">BOLDFIR Protein Bottle </h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(26)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/pro_9_1.jfif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">ABSTRACT Protein Bottle</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(27)">View</a> 
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

    `
}

function shoes(){
    show_data.innerHTML=
    `
    <div id="show_data">
    <div class="container my-5">
        <div class="row">
            <div class="col-sm-4">
                <h3 class="text-danger">Suggested Products</h3>
            </div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="dropdown">
                    <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu dp_down" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#" onclick="tshirts()">T-shirts</a></li>
                        <li><a class="dropdown-item" href="#" onclick="track()">Track Pants</a></li>
                        <li><a class="dropdown-item" href="#" onclick="gym()">Gym Equipments</a></li>
                        <li><a class="dropdown-item" href="#" onclick="shoes()">Shoes</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_1_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Crystal Cushion Blue Sports Shoes</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(28)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_2_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">LCR White Sports Shoes</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(29)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_3_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">FGUSE  RED Sports Shoes</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(30)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_4_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Canvas Green Shoes</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(31)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_5_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">XSTEP Canvas Blue Shoes</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(32)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_6_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">ASIAN Shoes</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(33)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_7_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">DSC Sports Shoes</h5>
                    <h3 class="text-center">$150</h3>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
               <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(34)">View</a> 
                </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_8_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sports Shoes with Spikes</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(35)">View</a> 
                    </div>
                </div>
            </div>
            <div class="col-sm-4 my-5">
                <div class="card" style="width: 18rem;">
                    <img src="images/shoes_pro_9_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">IndiFoot Red Sports Shoes</h5>
                        <h3 class="text-center">$150</h3>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                   <a href="#" class="btn btn-danger d-block mx-auto" onclick="show_prod(36)">View</a> 
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
    `
}


function show_prod (id){
    const selected_product = document.getElementById("selected_product");
    // window.localStorage.setItem('prod_id',id)
    const current_prod = products.find((val,ind)=>val.id==id)
    // const current_prod = products[id-1]
    localStorage.setItem('prod_id', JSON.stringify(current_prod))
   window.location.assign("./display.html") 
    
}
