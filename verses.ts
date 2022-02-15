export interface BeerVerse {
    getOnTheWall(): string;
    passArround(): string;
}

class Bottle {
    public static getStringByQty(qty: number): string{
         if (qty === 1) {
             return 'bottle';
         }
        return 'bottles';
    }
}

export class ManyBearsOnTheWallVerse implements BeerVerse {
    constructor(private beearsOnTheWall: number) {}
    getOnTheWall(): string {
        return `${this.beearsOnTheWall} bottles of beer on the wall, ${this.beearsOnTheWall} bottles of beer.`;
    }
    passArround(): string {
        const newBeearsOnTheWall = this.beearsOnTheWall - 1;
        const bottleString = Bottle.getStringByQty(newBeearsOnTheWall);
        return `Take one down and pass it around, ${newBeearsOnTheWall} ${bottleString} of beer on the wall.`;
    }
}

export class OneBearOnTheWallVerse implements BeerVerse {
    getOnTheWall(): string {
        return '1 bottle of beer on the wall, 1 bottle of beer.';
    }
    passArround(): string {
        return 'Take it down and pass it around, no more bottles of beer on the wall.';
    }
}

export class EmptyBearOnTheWallVerse implements BeerVerse {
    getOnTheWall(): string {
        return 'No more bottles of beer on the wall, no more bottles of beer.';
    }
    passArround(): string {
        return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
}
