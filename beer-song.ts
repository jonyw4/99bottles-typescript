export class Beer {
    public static verse(verseNumber: number) {
        const firstLine =
            verseNumber === 1
                ? '1 bottle of beer on the wall, 1 bottle of beer.'
                : `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.`;
        const secondLine =
            verseNumber === 1
                ? `Take it down and pass it around, no more bottles of beer on the wall.`
                : `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.`;
        return `${firstLine}\n${secondLine}\n`;
    }

    public static sing(..._: number[]) {
        return 'haha';
    }
}
