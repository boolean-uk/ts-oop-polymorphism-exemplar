import { Player, SpellAttack, SwordAttack } from "."

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })

    it("should reduce the players health on successful sword hits", () => {
        let result

        do {
            result = player.takeHit(new SwordAttack)
        } while (result.includes('sword attack missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The sword attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful spell hits", () => {
        let result

        do {
            result = player.takeHit(new SpellAttack('fire'))
        } while (result.includes('fire attack missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The fire attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })
})