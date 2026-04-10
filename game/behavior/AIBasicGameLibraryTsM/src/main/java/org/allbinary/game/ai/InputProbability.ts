
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class InputProbability
            extends Object
         {
        

    public INPUT_PROBABILITY: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private readonly likelyhoodIntegerArray: Integer[][]

    private readonly repeatLikelyhoodIntegerArray: Integer[]

    private readonly max: number

    private readonly timeDelayHelper: TimeDelayHelper
public constructor (likelyhoodIntegerArray: Integer[][], repeatLikelyhoodIntegerArray: Integer[], max: number, timeDelayHelper: TimeDelayHelper){

            super();
            var likelyhoodIntegerArray = likelyhoodIntegerArray
var repeatLikelyhoodIntegerArray = repeatLikelyhoodIntegerArray
var max = max
var timeDelayHelper = timeDelayHelper
this.likelyhoodIntegerArray= likelyhoodIntegerArray
this.repeatLikelyhoodIntegerArray= repeatLikelyhoodIntegerArray
this.max= max
this.timeDelayHelper= timeDelayHelper
}


    public getLikelyhoodIntegerArray(): Integer[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return likelyhoodIntegerArray;
    
}


    public getRepeatLikelyhoodIntegerArray(): Integer[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return repeatLikelyhoodIntegerArray;
    
}


    public getMax(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return max;
    
}


    public getTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeDelayHelper;
    
}


    public toHashtable(): Hashtable<Any, Any>{

    var hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

hashtable.put(INPUT_PROBABILITY, this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

