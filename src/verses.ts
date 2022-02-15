import { Bottle } from './bottle'

export interface BeerVerse {
    getOnTheWall(): string;
    passArround(): string;
}

export class ManyBearsOnTheWallVerse implements BeerVerse {
    constructor(private bottlesOnWallQty: number) {}
    getOnTheWall(): string {
        return `${this.bottlesOnWallQty} bottles of beer on the wall, ${this.bottlesOnWallQty} bottles of beer.`;
    }
    passArround(): string {
        const updatedBottlesOnWallQty = this.bottlesOnWallQty - 1;
        const bottleString = Bottle.getStringByQty(updatedBottlesOnWallQty);
        return `Take one down and pass it around, ${updatedBottlesOnWallQty} ${bottleString} of beer on the wall.`;
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
