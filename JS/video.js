const Getfoto = async () => {
    let response = await fetch(
        "https://621e1018849220b1fc8e2388.mockapi.io/video",
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
        document.getElementById("get-video").innerHTML += `
        <div style="${element.bg}">
        <div class="container p-4">
            <div class="row">
                <div style="${element.tkanan} padding-bottom: 5rem;" class="video1">
                    <iframe maxwidth=80% src="${element.video}" class="videoframe"
                        frameborder="0"></iframe>
                    <div class="textvideo" style="${element.style1}">
                        <h1 style="${element.padding}">${element.tittle}</h1>
                        <p>${element.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    });
};


Getfoto();