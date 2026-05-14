// helpers/parseKi.ts

const units: Record<string, number> = {
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24,
};

export const parseKi = (value: string): number => {
    const normalized = value.toLowerCase().trim();

    // separa: "19.84 Septillion"
    const [numberPart, unit] = normalized.split(' ');

    // elimina separadores tipo 54.000.000
    const cleanNumber = numberPart.replace(/\./g, '');

    const number = parseFloat(cleanNumber);

    return unit && units[unit] ? number * units[unit] : number;
};
