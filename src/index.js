function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // --A função gera número aleatorio para ficar mais divertido o código.

let heroi = "Rei do Javascript"
let xp = getRandomNumber(0, 10001);
// A váriavel já inicia com o nome da função, usei while mas fica com loop infinito.

switch (true) {
    case (xp >= 0 && xp <= 1000):
        console.log("O Herói de nome " + heroi + " está no nível de Ferro.");
        break;
    case (xp >= 1001 && xp <= 2000):
        console.log("O Herói de nome " + heroi + " está no nível de Bronze.");
        break;
    case (xp >= 2001 && xp <= 5000):
        console.log("O Herói de nome " + heroi + " está no nível de Prata.");
        break;
    case (xp >= 5001 && xp <= 7000):
        console.log("O Herói de nome " + heroi + " está no nível de Ouro.");
        break;
    case (xp >= 7001 && xp <= 8000):
        console.log("O Herói de nome " + heroi + " está no nível de Platina.");
        break;
    case (xp >= 8001 && xp <= 9000):
        console.log("O Herói de nome " + heroi + " está no nível de Ascendente.");
        break;
    case (xp >= 9001 && xp <= 10000):
        console.log("O Herói de nome " + heroi + " está no nível de Imortal.");
        break;
    case (xp >= 10001):
        console.log("O Herói de nome " + heroi + " está no nível de Radiante.");
        break;
    default:
        console.log("O level não foi especificado corretamente.");
        break;
}