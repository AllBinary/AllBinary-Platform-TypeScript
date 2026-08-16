
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FixedPoint
            extends Object
         {
        

    private static readonly instance: FixedPoint = new FixedPoint();

    public static getInstance(): FixedPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly ONE: number = 1<<16;

    public toFixed(val: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((val *65536.0));
    
}


    public toFixed(val: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((val *65536.0));
    
}


    public mul(a: number, b: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(((a *b)>>16));
    
}


    public div(a: number, b: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round((((a)<<16) /b));
    
}


    public toInt(fixed: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fixed>>16;
    
}


}
                
            

