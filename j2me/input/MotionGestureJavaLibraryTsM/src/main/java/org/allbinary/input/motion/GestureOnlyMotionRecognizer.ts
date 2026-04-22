
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
        



import { CustomGPoint } from "../../../../org/allbinary/graphics/CustomGPoint.js";

    
import { GPointCircularPool } from "../../../../org/allbinary/graphics/GPointCircularPool.js";

    
import { MotionGestureRecognizer } from "../../../../org/allbinary/input/motion/gesture/MotionGestureRecognizer.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MotionRecognizer } from "./MotionRecognizer.js";

export class GestureOnlyMotionRecognizer extends MotionRecognizer {
        

    private index: number = 0;
        
        

    private static readonly pointCircularPool: GPointCircularPool = new GPointCircularPool(40);
        
        

    private readonly motionGestureRecognizer: MotionGestureRecognizer

    private readonly id: number
public constructor (){

            super();
        this.id= index++;
    
this.motionGestureRecognizer= new MotionGestureRecognizer(id);
    
}


                //@Throws(Error::class)
            
    public processStartMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processPressedMotionEvent(point, deviceId, modifiers);
    
}


                //@Throws(Error::class)
            
    public processEndMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processReleasedMotionEvent(point, deviceId, modifiers);
    
}


                //@Throws(Error::class)
            
    public processDraggedMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
var x = x
var y = y
var deviceId = deviceId
var modifiers = modifiers

    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processDraggedMotionEvent(point, deviceId, modifiers);
    
}


}
                
            

