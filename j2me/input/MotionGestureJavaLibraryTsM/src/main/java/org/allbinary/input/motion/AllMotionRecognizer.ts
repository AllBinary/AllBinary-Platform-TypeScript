
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

    
import { TouchButtonRecognizer } from "../../../../org/allbinary/input/motion/button/TouchButtonRecognizer.js";

    
import { MotionGestureRecognizer } from "../../../../org/allbinary/input/motion/gesture/MotionGestureRecognizer.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MotionRecognizer } from "./MotionRecognizer.js";

export class AllMotionRecognizer extends MotionRecognizer {
        

    private index: number = 0;
        
        

    private static readonly pointCircularPool: GPointCircularPool = new GPointCircularPool(40);
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly motionGestureRecognizer: MotionGestureRecognizer

    private touchButtonProcessing: boolean = false;
        
        

    private readonly touchButtonRecognizer: TouchButtonRecognizer

    private readonly id: number
public constructor (){

            super();
            this.id= index++;
    
this.motionGestureRecognizer= new MotionGestureRecognizer(id);
    
this.touchButtonRecognizer= new TouchButtonRecognizer();
    
}


                //@Throws(Error::class)
            
    public processStartMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
    //var x = x
    //var y = y
    //var deviceId = deviceId
    //var modifiers = modifiers

                        if(this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId))
                        
                                    {
                                    touchButtonProcessing= true;
    

                                    }
                                

                        if(!touchButtonProcessing)
                        
                                    {
                                    
    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processPressedMotionEvent(point, deviceId, modifiers);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public processEndMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
    //var x = x
    //var y = y
    //var deviceId = deviceId
    //var modifiers = modifiers

                        if(this.touchButtonRecognizer!.releaseTouchButtonInput(x, y, deviceId))
                        
                                    {
                                    
                                    }
                                

                        if(!touchButtonProcessing)
                        
                                    {
                                    
    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processReleasedMotionEvent(point, deviceId, modifiers);
    

                                    }
                                

                        if(touchButtonProcessing)
                        
                                    {
                                    touchButtonProcessing= false;
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public processDraggedMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
    //var x = x
    //var y = y
    //var deviceId = deviceId
    //var modifiers = modifiers

                        if(touchButtonProcessing)
                        
                                    {
                                    this.touchButtonRecognizer!.pressTouchButtonInput(x, y, deviceId);
    

                                    }
                                

                        if(!touchButtonProcessing)
                        
                                    {
                                    
    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processDraggedMotionEvent(point, deviceId, modifiers);
    

                                    }
                                
}


    private lastX: number= 0

    private lastY: number= 0

                //@Throws(Error::class)
            
    public processMovedMotionEvent(x: number, y: number, deviceId: number, modifiers: number){
    //var x = x
    //var y = y
    //var deviceId = deviceId
    //var modifiers = modifiers

                        if(x != lastX || y != lastY)
                        
                                    {
                                    this.lastX= x;
    
this.lastY= y;
    

    var point: CustomGPoint = pointCircularPool!.getNextInstance();

                         as CustomGPoint;
        
        
;
    
point.setX(x);
    
point.setY(y);
    
this.motionGestureRecognizer!.processMovedMotionEvent(point, deviceId, modifiers);
    

                                    }
                                
}


    public getMotionGestureRecognizer(): MotionGestureRecognizer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGestureRecognizer;
    
}


}
                
            

