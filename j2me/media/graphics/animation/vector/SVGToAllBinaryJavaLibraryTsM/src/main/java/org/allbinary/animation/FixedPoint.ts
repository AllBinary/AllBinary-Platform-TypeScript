
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FixedPoint
            extends Object
         {
        

    private static readonly instance: FixedPoint = new FixedPoint();

    public static getInstance(): FixedPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FixedPoint.instance;
    
}


    public readonly ONE: number = 1<<16;
toFixed(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'number') return this.toFixed$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'number') return this.toFixed$overload2(args[0]);
   
   throw new TypeError('No matching overload: toFixed'); }
  
    public toFixed$overload1(val: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((val *65536.0));
    
}


    public toFixed$overload2(val: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((val *65536.0));
    
}


    public mul(a: number, b: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc(((a *b)>>16));
    
}


    public div(a: number, b: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc((globalThis.Math.trunc(((a)<<16) /b)));
    
}


    public toInt(fixed: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fixed>>16;
    
}


}

