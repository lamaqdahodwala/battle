class Move {
    constructor(dmg, confuses, poisons) {
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
            you: undefined,
            enemy: undefined
        }
    },
    mounted() {
        alert("Battle it out with various pokemon against a computer. Plan out your moves to drain your opponent's health to win.")
    }
})

app.mount("#app")