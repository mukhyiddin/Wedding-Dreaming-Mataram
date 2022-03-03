const Getfoto = async () => {
    let response = await fetch(
        "https://621e1018849220b1fc8e2388.mockapi.io/foto",
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        }
    );

    let data = await response.json();

    console.log(data);
    data.forEach(element => {
        document.getElementById("get-foto").innerHTML += `
    <img src="${element.Foto}">`

    });
};


Getfoto();