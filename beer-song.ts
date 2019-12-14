export class Beer {
    public static verse(verseNumber: number) {
        function getFirstLine() {
            switch (verseNumber) {
                case 0:
                    return 'No more bottles of beer on the wall, no more bottles of beer.';
                case 1:
                    return '1 bottle of beer on the wall, 1 bottle of beer.';
                default:
                    return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.`;
            }
        }

        function getSecondLine() {
            switch (verseNumber) {
                case 0:
                    return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
                case 1:
                    return `Take it down and pass it around, no more bottles of beer on the wall.`;
                default:
                    return `Take one down and pass it around, ${verseNumber - 1} bottles of beer on the wall.`;
            }
        }

        return `${getFirstLine()}\n${getSecondLine()}\n`;
    }

    public static sing(..._: number[]) {
        return 'haha';
    }
}
