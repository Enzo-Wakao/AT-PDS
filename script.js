let data = [
    {
        id: "121w1x",
        elemento: "Níquel",
        peso: 98.8,
        volume: 10,
        long: "50N",
        lag: "159W"
    },
    {
        id: "56nb5g",
        elemento: "Cobalto",
        peso: 0.6,
        volume: 0.5,
        long: "120S",
        lag: "12W"
    },
    {
        id: "2k4o6p",
        elemento: "Cobre",
        peso: 52.8,
        volume: 30,
        long: "151S",
        lag: "160E"
    },
    {
        id: "2erghn",
        elemento: "Mercúrio",
        peso: 2552.30,
        volume: 251,
        long: "93S",
        lag: "72W"
    },
    {
        id: "0192r7",
        elemento: "Sódio",
        peso: 895.8,
        volume: 3,
        long: "179N",
        lag: "1E"
    }
];

// NÃO MEXER NOS DADOS, O CÓDIGO DE VOCÊS DEVE ESTAR A PARTIR DESTA LINHA

//Passar as informações como string
const lista = document.getElementById("lista");
const datta = document.getElementById("DATA");

function search(){
    lista.innerHTML = "";
    for (let i = 0; i < data.length; i++) {

        if(data[i].id >= datta.value){
            lista.innerHTML += 
            `
            <li>
                <p> ID: ${data[i].id} </p>
                <p> Elemento: ${data[i].elemento} </p>
                <p> Peso: ${data[i].peso} </p>
                <p> Volume: ${data[i].volume} </p>
                <p> Long: ${data[i].long} </p>
                <p> Lag: ${data[i].lag} </p>
            </li
            `;
        }
    }
}

let dados = [
    {
        id: document.getElementById("id").value,
        Elemento: document.getElementById("elemento").value,
        Peso: document.getElementById("peso").value,
        Volume: document.getElementById("volume").value,
        Long: document.getElementById("long").value,
        Lag: document.getElementById("lag").value
    }
];

function sstore() {
    console.log(dados);
    document.getElementById('msg').innerHTML = "Obrigado! Seus dados já foram cadastrados!"
}
