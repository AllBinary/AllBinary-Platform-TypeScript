
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CustomGPoint } from '../../../../org/allbinary/graphics/CustomGPoint.js';
      //not GWT import const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;

      
//not plain js import { GPointCircularPool } from '../../../../org/allbinary/graphics/GPointCircularPool.js';
      const GPointCircularPool = globalThis.org.allbinary.graphics.GPointCircularPool;

      
import { MotionGestureRecognizer } from '../../../../org/allbinary/input/motion/gesture/MotionGestureRecognizer.js';
      //not GWT import const MotionGestureRecognizer = globalThis.org.allbinary.input.motion.gesture.MotionGestureRecognizer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRecognizer } from './MotionRecognizer.js';
//not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;

                
export class GestureOnlyMotionRecognizer extends MotionRecognizer {
        

    private static index: number = 0;

    private static readonly pointCircularPool: GPointCircularPool = new GPointCircularPool(40);

    private readonly motionGestureRecognizer: MotionGestureRecognizer;

    private readonly id: number;

public constructor (){

            super();
        this.id= GestureOnlyMotionRecognizer.index++;
    
this.motionGestureRecognizer= new MotionGestureRecognizer(this.id);
    
}


                //@Throws(Exception.constructor)
            
    public processStartMotionEvent(x: number, y: number, deviceId: number, modifiers: number){

    var point: CustomGPoint = GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance() as CustomGPoint;;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processPressedMotionEvent(point, deviceId, modifiers);
    
}


                //@Throws(Exception.constructor)
            
    public processEndMotionEvent(x: number, y: number, deviceId: number, modifiers: number){

    var point: CustomGPoint = GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance() as CustomGPoint;;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processReleasedMotionEvent(point, deviceId, modifiers);
    
}


                //@Throws(Exception.constructor)
            
    public processDraggedMotionEvent(x: number, y: number, deviceId: number, modifiers: number){

    var point: CustomGPoint = GestureOnlyMotionRecognizer.pointCircularPool!.getNextInstance() as CustomGPoint;;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processDraggedMotionEvent(point, deviceId, modifiers);
    
}


}



