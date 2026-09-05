
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { ABHashtable } from '../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputProbability
            extends Object
         {
        

    public static INPUT_PROBABILITY: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private readonly likelyhoodIntegerArray: Integer[][];

    private readonly repeatLikelyhoodIntegerArray: Integer[];

    private readonly max: number;

    private readonly timeDelayHelper: TimeDelayHelper;

public constructor (likelyhoodIntegerArray: Integer[][], repeatLikelyhoodIntegerArray: Integer[], max: number, timeDelayHelper: TimeDelayHelper){

            super();
        this.likelyhoodIntegerArray= likelyhoodIntegerArray;
    
this.repeatLikelyhoodIntegerArray= repeatLikelyhoodIntegerArray;
    
this.max= max;
    
this.timeDelayHelper= timeDelayHelper;
    
}


    public getLikelyhoodIntegerArray(): Integer[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.likelyhoodIntegerArray;
    
}


    public getRepeatLikelyhoodIntegerArray(): Integer[]{



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


    public toHashtable(): ABHashtable{

    var hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;;
    
hashtable.put(InputProbability.INPUT_PROBABILITY, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}



