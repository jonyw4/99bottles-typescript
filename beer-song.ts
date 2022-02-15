

export class Beer {
    public static verse(verseNumber: number) {
        const bearsOnTheWall = this.getBeersOnTheWallVerse(verseNumber);
        const passBeerAround = this.passBeerAroundVerse(verseNumber);
        return `${bearsOnTheWall}\n${passBeerAround}\n`;
    }
    private static getBeersOnTheWallVerse(beears: number){
        const beearsString = this.getBottleString(beears);

        if (beears > 1) {
            return `${beearsString} of beer on the wall, ${beearsString} of beer.`;
        }

        if(beears === 1){
            return `${beearsString} of beer on the wall, ${beearsString} of beer.`;
        }

        return `No more bottles of beer on the wall, no more bottles of beer.`;
    }
    private static passBeerAroundVerse(beears: number){
        if(beears > 1){
            const endBeerOnTheWall = this.getBottleString(beears - 1);
            return `Take one down and pass it around, ${endBeerOnTheWall} of beer on the wall.`;
        }

        if (beears === 1) {
            return `Take it down and pass it around, no more bottles of beer on the wall.`;
        }
        return `Go to the store and buy some more, ${this.getBottleString(99)} of beer on the wall.`;
    }
    private static getBottleString(beears: number){
        if (beears > 1) {
            return `${beears} bottles`;
        }

        if(beears === 1){
            return `1 bottle`;
        }

        return `no more bottles`;
    }
    public static sing(fromVerse: number = 99, toVerse: number = 0) {
        const verses = [];
        for (let i = fromVerse; i >= toVerse; i--) {
            verses.push(Beer.verse(i));
        }
        return verses.join("\n");
    }
}
