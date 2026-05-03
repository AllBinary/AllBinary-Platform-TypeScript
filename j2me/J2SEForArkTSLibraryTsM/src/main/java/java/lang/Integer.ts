/*actual*/ export class Integer
            extends Object
         {
               public static MAX_VALUE: number = 2147483647;
               public static MIN_VALUE: number = -2147483648;

    /*actual*/ public static toHexString(value: number): string {
                        return value.toString(16);
    
}

  /*actual*/ public static parseInt(value: string): number {
    return Number.parseInt(value, 10);

  }


}
                
            

