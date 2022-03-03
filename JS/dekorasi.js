const Getfoto = async () => {
  let response = await fetch("https://62201641ce99a7de194f8f98.mockapi.io/dekorasi", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  let data = await response.json();

  console.log(data);
  data.forEach((element) => {
    document.getElementById("dekorasi").innerHTML += `
    <img src="${element.foto}" />
  `;
  });
};

Getfoto();
