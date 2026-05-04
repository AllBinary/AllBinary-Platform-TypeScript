export class Character {

    public static isDigit(char: string): boolean {
        //if(char.length > 1) throw new Error();
        const code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
    }

    public static toUpperCase(char: string): string {
        //if(char.length > 1) throw new Error();
        return char.toUpperCase();
    }

    public static toLowerCase(char: string): string {
        //if(char.length > 1) throw new Error();
        return char.toLowerCase();
    }

}
