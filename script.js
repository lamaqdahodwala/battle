class Move {
    constructor(name, dmg, confuses, poisons) {
        this.name = name
        this.dmg = dmg
        this.confuses = confuses
        this.poisons = poisons
    }
}

class Character {
    constructor(name, health, move1, move2, move3) {
        this.name = name
        this.health = health
        this.move1 = move1
        this.move2 = move2
        this.move3 = move3
        this.moves = [move1, move2, move3]
        this.ispoisoned = false
        this.isconfused = false
    }
    damaged(move){
        if (move.confuses){
            this.isconfused = true
        }
        if (move.poisons){
            this.ispoisoned = true
            this.health -= 10
        }
        this.health -= move.dmg
    }
    attack(move, opponent){
        if (this.isconfused){
            var random = Math.floor((Math.random() * 2)+1)
            if (random == 1){
                this.health -= 30
                this.isconfused = false
                return
            }
        }

        if (this.ispoisoned){
            this.health -= 10
            this.ispoisoned = false
        }

        opponent.damaged(move)
    }
}

app = Vue.createApp({
    data() {
        return {
            you: new Character('hello world', 160, new Move('water shot', 50, false, false,), new Move('bomb', 160, true, false), new Move('super bomb', 2400000, true, true)),
            enemy: new Character('your mom', 230, new Move('prepare for death', 5000, false, false), new Move("EEEEEEEEE", 5888888888888888888, false, false), new Move("xd", 488842188949821, false, false))
        }
    },
    mounted() {
        alert("Battle it out with various pokemon against a computer. Plan out your moves to drain your opponent's health to win.")
    }
})

app.mount("#app")