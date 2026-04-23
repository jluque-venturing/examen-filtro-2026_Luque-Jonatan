const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

const spellCostFireball = 30;
const spellCostIceShield = 20;
const spellCostCrimsonRay = 50;

function calculateDamage(attack, defense) {
    const result = attack - defense;
    return result < 0 ? 0 : result;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => currentMana >= spellCost && !isStunned;

function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

console.log(calculateDamage(attack, defense));
console.log(isAlive(health));
console.log(canCastSpell(mana, spellCostFireball, false));
console.log(getPresentation(name, characterClass, level));