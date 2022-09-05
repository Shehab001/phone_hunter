const displayPhones = (datas) => {
  loader(true);
  const place = document.getElementById("place");
  place.innerHTML = "";
  //place.textContent = "";

  //invalid input message
  const msg = document.getElementById("msg");
  if (datas.length === 0) {
    //alert(msg);
    msg.classList.remove("hidden");
    //alert(datas.length);
  } else {
    msg.classList.add("hidden");
  }
  //slicing
  //datas = datas.slice(0, 3);

  for (data of datas) {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
   <div class="card card-side bg-base-100 shadow-xl m-10">
      <figure>
        <img src="${data.image}" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${data.phone_name}</h2>
        <p>${data.brand}</p>
        <p>${data.slug}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>

    `;

    place.appendChild(newDiv);
  }

  loader(false);
};

//loader

const loader = (value) => {
  const load = document.getElementById("loader");

  if (value == true) {
    //alert("ho");
    load.classList.remove("hidden");
  } else {
    load.classList.add("hidden");
  }
};

const callApi = async (input) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
  const res = await fetch(url);
  const data = await res.json();

  displayPhones(data.data);
  //alert(data);
  //console.log(data);
};

document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("input").value;

  //alert(input);
  callApi(input);
});
