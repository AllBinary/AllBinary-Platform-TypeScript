
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DistanceUtil
            extends Object
         {
        

    private static readonly instance: DistanceUtil = new DistanceUtil();

    public static getInstance(): DistanceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DistanceUtil.instance;
    
}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    public getDistance(x1: number, y1: number, x2: number, y2: number): number{

    let dx: number = x1 -x2;;
    

    let dy: number = y1 -y2;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc(this.mathUtil!.sqrt((dx *dx) +(dy *dy)));
    
}


}

