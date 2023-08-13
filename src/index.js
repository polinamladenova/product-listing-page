//Toast trigger function=============
let toastTrigger = document.getElementById("liveToastBtn");
let toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

function showCactusProductInfo(data) {
  let cactusProductTileElement = document.querySelector("#cactusProductTile");

  let cactusProductHTML = `<div class="product-grid container-fluid ps-5">
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[20].img}" class="card-img-top" alt="${data.products[20].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[20].name}</h5>
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
              <p class="card-text opacity-75">${data.products[20].desc}</p>
              <h5 class="product-price">$${data.products[20].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[21].img}" class="card-img-top" alt="${data.products[21].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[21].name}</h5>
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
              <p class="card-text opacity-75">${data.products[21].desc}</p>
              <h5 class="product-price">$${data.products[21].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[22].img}" class="card-img-top" alt="${data.products[22].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[22].name}</h5>
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
              <p class="card-text opacity-75">${data.products[22].desc}</p>
              <h5 class="product-price">$${data.products[22].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[23].img}" class="card-img-top" alt="${data.products[23].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[23].name}</h5>
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
              <p class="card-text opacity-75">${data.products[23].desc}</p>
              <h5 class="product-price">$${data.products[23].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[24].img}" class="card-img-top" alt="${data.products[24].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[24].name}</h5>
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
              <p class="card-text opacity-75">${data.products[24].desc}</p>
              <h5 class="product-price">$${data.products[24].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[25].img}" class="card-img-top" alt="${data.products[25].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[25].name}</h5>
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
              <p class="card-text opacity-75">${data.products[25].desc}</p>
              <h5 class="product-price">$${data.products[25].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[26].img}" class="card-img-top" alt="${data.products[26].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[26].name}</h5>
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
              <p class="card-text opacity-75">${data.products[26].desc}</p>
              <h5 class="product-price">$${data.products[26].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[27].img}" class="card-img-top" alt="${data.products[27].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[27].name}</h5>
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
              <p class="card-text opacity-75">${data.products[27].desc}</p>
              <h5 class="product-price">$${data.products[27].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[28].img}" class="card-img-top" alt="${data.products[28].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[28].name}</h5>
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
              <p class="card-text opacity-75">${data.products[28].desc}</p>
              <h5 class="product-price">$${data.products[28].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[29].img}" class="card-img-top" alt="${data.products[29].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[29].name}</h5>
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
              <p class="card-text opacity-75">${data.products[29].desc}</p>
              <h5 class="product-price">$${data.products[29].price}</h5>
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
        </div>
    </div>`;

  cactusProductTileElement.innerHTML = cactusProductHTML;
}

function showFoliageProductInfo(data) {
  let foliageProductTileElement = document.querySelector("#foliageProductTile");

  let foliageProductHTML = `<div class="product-grid container-fluid ps-5">
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[0].img}" class="card-img-top" alt="${data.products[0].desc}" />
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[1].img}" class="card-img-top" alt="${data.products[1].desc}" />
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[2].img}" class="card-img-top" alt="${data.products[2].desc}" />
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
              <span class="d-flex">
                <h5 class="new-product-price me-2">$${data.products[2].salePrice}</h5>
                <h5 class="old-product-price">$${data.products[2].price}</h5>
              </span>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[3].img}" class="card-img-top" alt="${data.products[3].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[3].name}</h5>
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
              <p class="card-text opacity-75">${data.products[3].desc}</p>
              <h5 class="product-price">$${data.products[3].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[4].img}" class="card-img-top" alt="${data.products[4].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[4].name}</h5>
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
              <p class="card-text opacity-75">${data.products[4].desc}</p>
              <h5 class="product-price">$${data.products[4].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[5].img}" class="card-img-top" alt="${data.products[5].desc}" />
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
              <p class="card-text opacity-75">${data.products[5].desc}</p>
              <h5 class="product-price">$${data.products[5].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[6].img}" class="card-img-top" alt="${data.products[6].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[6].name}</h5>
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
              <p class="card-text opacity-75">${data.products[6].desc}</p>
              <h5 class="product-price">$${data.products[6].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[7].img}" class="card-img-top" alt="${data.products[7].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[7].name}</h5>
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
              <p class="card-text opacity-75">${data.products[7].desc}</p>
               <span class="d-flex">
                <h5 class="new-product-price me-2">$${data.products[7].salePrice}</h5>
                <h5 class="old-product-price">$${data.products[7].price}</h5>
              </span>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[8].img}" class="card-img-top" alt="${data.products[8].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[8].name}</h5>
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
              <p class="card-text opacity-75">${data.products[8].desc}</p>
              <h5 class="product-price">$${data.products[8].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[9].img}" class="card-img-top" alt="${data.products[9].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[9].name}</h5>
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
              <p class="card-text opacity-75">${data.products[9].desc}</p>
               <span class="d-flex">
                <h5 class="new-product-price me-2">$${data.products[9].salePrice}</h5>
                <h5 class="old-product-price">$${data.products[9].price}</h5>
              </span>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[10].img}" class="card-img-top" alt="${data.products[10].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[10].name}</h5>
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
              <p class="card-text opacity-75">${data.products[10].desc}</p>
              <h5 class="product-price">$${data.products[10].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[11].img}" class="card-img-top" alt="${data.products[11].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[11].name}</h5>
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
              <p class="card-text opacity-75">${data.products[11].desc}</p>
              <h5 class="product-price">$${data.products[11].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[12].img}" class="card-img-top" alt="${data.products[12].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[12].name}</h5>
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
              <p class="card-text opacity-75">${data.products[12].desc}</p>
              <h5 class="product-price">$${data.products[12].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[13].img}" class="card-img-top" alt="${data.products[13].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[13].name}</h5>
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
              <p class="card-text opacity-75">${data.products[13].desc}</p>
              <h5 class="product-price">$${data.products[13].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[14].img}" class="card-img-top" alt="${data.products[14].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[14].name}</h5>
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
              <p class="card-text opacity-75">${data.products[14].desc}</p>
              <h5 class="product-price">$${data.products[14].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[15].img}" class="card-img-top" alt="${data.products[15].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[15].name}</h5>
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
              <p class="card-text opacity-75">${data.products[15].desc}</p>
              <h5 class="product-price">$${data.products[15].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[16].img}" class="card-img-top" alt="${data.products[16].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[16].name}</h5>
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
              <p class="card-text opacity-75">${data.products[16].desc}</p>
              <h5 class="product-price">$${data.products[16].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[17].img}" class="card-img-top" alt="${data.products[17].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[17].name}</h5>
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
              <p class="card-text opacity-75">${data.products[17].desc}</p>
              <h5 class="product-price">$${data.products[17].price}</h5>
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
      </div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[18].img}" class="card-img-top" alt="${data.products[18].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[18].name}</h5>
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
              <p class="card-text opacity-75">${data.products[18].desc}</p>
              <h5 class="product-price">$${data.products[18].price}</h5>
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
        <div class="col-md-4">
          <div class="card" style="width: 24rem">
            <img src="${data.products[19].img}" class="card-img-top" alt="${data.products[19].desc}" />
            <div class="card-body">
              <span class="d-flex mb-1">
                <div class="me-auto p-0">
                  <h5 class="card-title">${data.products[19].name}</h5>
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
              <p class="card-text opacity-75">${data.products[19].desc}</p>
              <h5 class="product-price">$${data.products[19].price}</h5>
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
    </div>`;

  foliageProductTileElement.innerHTML = foliageProductHTML;
}

fetch("/src/plant-data.json")
  .then((response) => response.json())
  .then((data) => showCactusProductInfo(data));

fetch("/src/plant-data.json")
  .then((response) => response.json())
  .then((data) => showFoliageProductInfo(data));
