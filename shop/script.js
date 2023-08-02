const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
console.log(typeof currentUser);

const menItems = document.getElementById("men-items");
const womenItems = document.getElementById("women-items");
const jewelleryItems = document.getElementById("jewellery-items");
const electronicItems = document.getElementById("electronic-items");
console.log("hello");
let allProducts = [];
const endpoint = `https://fakestoreapi.com/products`;
async function getProductObjects(endpoint) {
  const response = await fetch(endpoint);
  const responseData = await response.json();
  allProducts = responseData;
  loadProductsOntoUI(responseData);
}
getProductObjects(endpoint);

function loadProductsOntoUI(responseData) {
  console.log("inside fn");
  responseData.forEach((item) => {
    console.log("inside foreach");
    const { title, price, category, image, rating } = item;
    if (category === "men's clothing") {
      menItems.innerHTML += `
    <div class="item">
              <img src="${image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating:${rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>`;
    }
    if (category === "women's clothing") {
      womenItems.innerHTML += `
    <div class="item">
              <img src="${image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating:${rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>`;
    }
    if (category === "jewelery") {
      jewelleryItems.innerHTML += `
    <div class="item">
              <img src="${image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating:${rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>`;
    }
    if (category === "electronics") {
      electronicItems.innerHTML += `
    <div class="item">
              <img src="${image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating:${rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>`;
    }
  });
}

function loadDataOntoUIByCategory(event){
  const category = event.target;
  const categoryName = category.innerText;
  category.classList.add("active");
  console.log(category,categoryName)
}

