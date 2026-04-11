
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
        



import { MathUtil } from "../../../org/allbinary/logic/math/MathUtil.js";

    

export class DistanceUtil
            extends Object
         {
        

    private static readonly instance: DistanceUtil = new DistanceUtil();
        
        

    public static getInstance(): DistanceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    public getDistance(x1: number, y1: number, x2: number, y2: number): number{
    //var x1 = x1
    //var y1 = y1
    //var x2 = x2
    //var y2 = y2

    var dx: number = x1 -x2;
        
        
;
    

    var dy: number = y1 -y2;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mathUtil!.sqrt((dx *dx) +(dy *dy));

                        .toInt();
    
}


}
                
            

