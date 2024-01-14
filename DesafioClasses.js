class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

const mago = new Heroi("Veiga", 1000, "mago");
const guerreiro = new Heroi("Garen", 35, "guerreiro");
const monge = new Heroi("Lee", 40, "monge");
const ninja = new Heroi("Hanzo", 30, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();