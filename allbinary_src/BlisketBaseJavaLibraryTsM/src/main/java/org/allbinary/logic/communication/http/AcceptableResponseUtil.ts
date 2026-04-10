
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    

export class AcceptableResponseUtil
            extends Object
         {
        

    private static readonly instance: AcceptableResponseUtil = new AcceptableResponseUtil();
        
        

    public static getInstance(): AcceptableResponseUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                init{
AcceptableResponseFactory.getInstance()!.HTML.hashCode()
}

    public readonly candidateVector: Vector = new Vector();
        
        

    public readonly tagNameVector: Vector = new Vector();
        
        

    public get(index: number): string{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return candidateVector!.get(index) as String;
    
}


    public getTagName(index: number): string{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tagNameVector!.get(index) as String;
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return candidateVector!.length;
    
}


}
                
            

