//Toast trigger function=============
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

function showInfo(data) {
  console.table(data.products[0].name);
}

fetch("/src/plant-data.json")
  .then((response) => response.json())
  .then((data) => showInfo(data));
