//Toast trigger function=============
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

function showProductInfo(data) {
  let productTileElement = document.querySelector("#productTile");

  let productHTML = `<div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[0].img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[0].name}</h5>
                </div>
                <div class="p-1">
                  <i
                    class="fa-solid fa-cart-shopping"
                    type="button"
                    id="liveToastBtn"
                  ></i>
                  <div
                    class="toast-container position-fixed bottom-0 end-0 p-3"
                  >
                    <div
                      id="liveToast"
                      class="toast align-items-center"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div class="d-flex">
                        <div class="toast-body">
                          <i class="fa-solid fa-check"></i> A new plant friend
                          has been added to your cart.
                        </div>
                        <button
                          type="button"
                          class="btn-close me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              <p class="card-text opacity-75">${data.products[0].desc}</p>
              <h5 class="product-price">$${data.products[0].price}</h5>
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[1].img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[1].name}</h5>
                </div>
                <div class="p-1">
                  <i
                    class="fa-solid fa-cart-shopping"
                    type="button"
                    id="liveToastBtn"
                  ></i>
                  <div
                    class="toast-container position-fixed bottom-0 end-0 p-3"
                  >
                    <div
                      id="liveToast"
                      class="toast align-items-center"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div class="d-flex">
                        <div class="toast-body">
                          <i class="fa-solid fa-check"></i> A new plant friend
                          has been added to your cart.
                        </div>
                        <button
                          type="button"
                          class="btn-close me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              <p class="card-text opacity-75">${data.products[1].desc}</p>
              <h5 class="product-price">$${data.products[1].price}</h5>
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[2].img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[2].name}</h5>
                </div>
                <div class="p-1">
                  <i
                    class="fa-solid fa-cart-shopping"
                    type="button"
                    id="liveToastBtn"
                  ></i>
                  <div
                    class="toast-container position-fixed bottom-0 end-0 p-3"
                  >
                    <div
                      id="liveToast"
                      class="toast align-items-center"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div class="d-flex">
                        <div class="toast-body">
                          <i class="fa-solid fa-check"></i> A new plant friend
                          has been added to your cart.
                        </div>
                        <button
                          type="button"
                          class="btn-close me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              <p class="card-text opacity-75">${data.products[2].desc}</p>
              <h5 class="product-price">$${data.products[2].price}</h5>
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
            </div>
          </div>
        </div>
        `;

  productTileElement.innerHTML = productHTML;
}

fetch("/src/plant-data.json")
  .then((response) => response.json())
  .then((data) => showProductInfo(data));
