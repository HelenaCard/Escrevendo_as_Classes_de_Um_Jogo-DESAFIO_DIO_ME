class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

function atacarHeroi(tipoHeroi) {
    let heroi = new Heroi("Herói Genérico", 25, tipoHeroi);
    let mensagemAtaque = heroi.atacar();
    document.getElementById("resultado").textContent = mensagemAtaque;
}