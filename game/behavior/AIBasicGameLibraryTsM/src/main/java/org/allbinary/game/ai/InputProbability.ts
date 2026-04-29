
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputProbability
            extends Object
         {
        

    public INPUT_PROBABILITY: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private readonly likelyhoodIntegerArray: number[][]

    private readonly repeatLikelyhoodIntegerArray: number[]

    private readonly max: number

    private readonly timeDelayHelper: TimeDelayHelper
public constructor (likelyhoodIntegerArray: number[][], repeatLikelyhoodIntegerArray: number[], max: number, timeDelayHelper: TimeDelayHelper){

            super();
        var likelyhoodIntegerArray = likelyhoodIntegerArray
var repeatLikelyhoodIntegerArray = repeatLikelyhoodIntegerArray
var max = max
var timeDelayHelper = timeDelayHelper
this.likelyhoodIntegerArray= likelyhoodIntegerArray;
    
this.repeatLikelyhoodIntegerArray= repeatLikelyhoodIntegerArray;
    
this.max= max;
    
this.timeDelayHelper= timeDelayHelper;
    
}


    public getLikelyhoodIntegerArray(): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.likelyhoodIntegerArray;
    
}


    public getRepeatLikelyhoodIntegerArray(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.repeatLikelyhoodIntegerArray;
    
}


    public getMax(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.max;
    
}


    public getTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeDelayHelper;
    
}


    public toHashtable(): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();
;
    
hashtable.put(INPUT_PROBABILITY, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

