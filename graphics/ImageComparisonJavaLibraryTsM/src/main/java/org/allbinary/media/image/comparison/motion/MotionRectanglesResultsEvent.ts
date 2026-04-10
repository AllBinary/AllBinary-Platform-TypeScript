
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
        



import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class MotionRectanglesResultsEvent extends AllBinaryEventObject {
        

    private readonly frame: Long

    private motionRectangles: MotionRectangles
public constructor (anyType: any = {}, frame: Long, motionRectangles: MotionRectangles)                        

                            : super(anyType){

            super();
            var anyType = anyType
var frame = frame
var motionRectangles = motionRectangles


                            //For kotlin this is before the body of the constructor.
                    
this.frame= frame
this.setMotionRectangles(motionRectangles)
}


    public getMotionRectangles(): MotionRectangles{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangles;
    
}


    public setMotionRectangles(motionRectangles: MotionRectangles){
var motionRectangles = motionRectangles
this.motionRectangles= motionRectangles
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


}
                
            

