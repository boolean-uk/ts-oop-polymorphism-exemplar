interface Attack {
    type: string
    getDamage(): number
}

export class SpellAttack implements Attack {
    private _element: string

    constructor(element: string) {
        this._element = element
    }

    get type(): string {
        return this._element
    }

    getDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
}

export class SwordAttack implements Attack {
    get type(): string {
        return 'sword'
    }

    getDamage(): number {
        return Math.floor(Math.random() * (8 - 2) + 1)
    }
}

export class AxeAttack implements Attack {
    get type(): string {
        return 'axe'
    }

    getDamage(): number {
        return Math.floor(Math.random() * (10 - 2) + 1)
    }
}

export class Player {
    private _health = 52
    private _armour = 14

    get health(): number {
        return this._health
    }

    takeHit(attack: Attack): string {
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

        if (attackRoll >= this._armour) {
            const damage = attack.getDamage()
            this._health -= damage
            return `The ${attack.type} attack hit for ${damage} damage! The player now has ${this._health} health.`
        }

        return `The ${attack.type} attack missed!`
    }
}
