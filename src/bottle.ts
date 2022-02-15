export class Bottle {
    public static getStringByQty(qty: number): string {
        if (qty === 1) {
            return 'bottle';
        }
        return 'bottles';
    }
}
