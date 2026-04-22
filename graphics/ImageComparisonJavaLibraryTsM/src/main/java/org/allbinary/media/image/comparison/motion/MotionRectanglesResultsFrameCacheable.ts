
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
        



import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CacheableInterface } from "../../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MotionRectangles } from "./MotionRectangles.js";

export class MotionRectanglesResultsFrameCacheable
            extends Object
         implements CacheableInterface {
        

    private motionRectangles: MotionRectangles

    private frame: Long
public constructor (motionRectangles: MotionRectangles, frame: Long){

            super();
        var motionRectangles = motionRectangles
var frame = frame
this.frame= frame;
    
this.setMotionRectangles(motionRectangles);
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


    public getMotionRectangles(): MotionRectangles{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangles;
    
}


    public setMotionRectangles(motionRectangles: MotionRectangles){
var motionRectangles = motionRectangles
this.motionRectangles= motionRectangles;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(" Frame: ");
    
stringBuffer!.append(this.getKey()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

