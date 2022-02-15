import { BeerVerse, ManyBearsOnTheWallVerse, OneBearOnTheWallVerse, EmptyBearOnTheWallVerse } from './verses';

export class Beer {
    public static verse(verseNumber: number): string {
        let verse: BeerVerse;
        if (verseNumber > 1) {
            verse = new ManyBearsOnTheWallVerse(verseNumber);
        }
        else if (verseNumber === 1) {
            verse = new OneBearOnTheWallVerse();
        }
        else {
            verse = new EmptyBearOnTheWallVerse();
        }

        return `${verse.getOnTheWall()}\n${verse.passArround()}\n`;
    }
    public static sing(fromVerse: number = 99, toVerse: number = 0): string {
        const verses = [];
        for (let i = fromVerse; i >= toVerse; i--) {
            verses.push(Beer.verse(i));
        }
        return verses.join("\n");
    }
}
