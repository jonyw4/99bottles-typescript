export class Beer {
    public static verse(verseNumber: number) {
        function getLines() {
            switch (verseNumber) {
                case 0:
                    return [
                        'No more bottles of beer on the wall, no more bottles of beer.',
                        'Go to the store and buy some more, 99 bottles of beer on the wall.',
                    ] as const;
                case 1:
                    return [
                        '1 bottle of beer on the wall, 1 bottle of beer.',
                        `Take it down and pass it around, no more bottles of beer on the wall.`,
                    ] as const;
                case 2:
                    return [`2 bottles of beer on the wall, 2 bottles of beer.`, `Take one down and pass it around, 1 bottle of beer on the wall.`] as const;
                default:
                    return [
                        `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.`,
                        `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.`,
                    ] as const;
            }
        }
        const [firstLine, secondLine] = getLines();
        return `${firstLine}\n${secondLine}\n`;
    }

    public static sing(fromVerse: number = 99, toVerse: number = 0) {
        const numberOfVerses = fromVerse - toVerse + 1;
        const verses = Array.from({ length: numberOfVerses }, (_, i) => i + toVerse)
            .reverse()
            .map(this.verse);

        return verses.join('\n');
    }
}
