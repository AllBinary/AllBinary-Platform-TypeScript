
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
        



import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { Line } from "../../../../../org/allbinary/graphics/Line.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { MotionGestureConfiguration } from "../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js";

    
import { MotionGestureConfigurationFactory } from "../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js";

    
import { BasicMotionGesturesHandler } from "../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { MotionEventCircularPool } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionEventCircularPool.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { MovedMotionGesturesHandler } from "../../../../../org/allbinary/input/motion/gesture/observer/MovedMotionGesturesHandler.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { J2SEMath } from "../../../../../org/allbinary/logic/math/J2SEMath.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class MotionGestureRecognizer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly j2seMath: J2SEMath = J2SEMath.getInstance()!;
        
        

    private readonly origin: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

    private previous: GPoint = origin;
        
        

    private intermediate: GPoint = origin;
        
        

    private readonly line: Line = new Line(origin, origin);
        
        

    private readonly motionGesturesHandler: BasicMotionGesturesHandler

    private readonly movedMotionGesturesHandler: BasicEventHandler

    private readonly motionEventCircularPool: MotionEventCircularPool
public constructor (id: number){

            super();
                //var id = id
this.motionEventCircularPool= MotionEventCircularPool.getInstance(id)

    var motionGesturesHandler: BasicEventHandler = new BasicEventHandler();
        
        


    var movedMotionGesturesHandler: BasicEventHandler = motionGesturesHandler;
        
        


        try {
            motionGesturesHandler= BasicMotionGesturesHandler.getInstance()
movedMotionGesturesHandler= MovedMotionGesturesHandler.getInstance()
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

this.motionGesturesHandler= motionGesturesHandler as BasicMotionGesturesHandler
this.movedMotionGesturesHandler= movedMotionGesturesHandler
}


                //@Throws(Error::class)
            
    public processPressedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{
    //var current = current
    //var deviceId = deviceId
    //var button = button
intermediate= origin
previous= origin

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.PRESSED)!;
        
        

event.setPreviousPoint(previous)
event.setCurrentPoint(current)
motionGesturesHandler!.fireEvent(event)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public processReleasedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{
    //var current = current
    //var deviceId = deviceId
    //var button = button

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.RELEASED)!;
        
        

event.setPreviousPoint(previous)
event.setCurrentPoint(current)
motionGesturesHandler!.fireEvent(event)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public processDraggedMotionEvent(current: GPoint, deviceId: number, buttonMask: number){
    //var current = current
    //var deviceId = deviceId
    //var buttonMask = buttonMask

                        if(previous == origin || intermediate == origin)
                        
                                    {
                                    previous= current
intermediate= current



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
line.setP1(previous)
line.setP2(current)

    var minimumMotionGesture: number = MotionGestureConfigurationFactory.getInstance()!.getMinimumMotionGesture()!;
        
        


                        if(j2seMath!.abs(line.getDeltaX().toFloat()) < minimumMotionGesture && j2seMath!.abs(line.getDeltaY().toFloat()) < minimumMotionGesture)
                        
                                    {
                                    intermediate= current



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var gradient: number = line.getGradient()!;
        
        


    var absGradient: number = j2seMath!.abs(gradient.toFloat()).toDouble();
        
        


    var conf: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;
        
        


    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;
        
        


    var newMotionGesture: MotionGestureInput = touchMotionGestureFactory!.NO_MOTION;
        
        


    var diagonalToleranceHigher: number = 12.0;
        
        


    var diagonalToleranceLower: number = 12.0;
        
        


                        if(conf.isDiagonalMotionGestureAllowed())
                        
                                    {
                                    diagonalToleranceHigher= (90 -conf.getDiagonalTolerance()).toDouble()
diagonalToleranceLower= conf.getDiagonalTolerance().toDouble()

                                    }
                                

                        if(absGradient > Math.tan(Math.toRadians(diagonalToleranceHigher)))
                        
                                    {
                                    
                        if(line.getDeltaY() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.UP

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DOWN

                        }
                            

                                    }
                                
                        else {
                            
                        if(absGradient < Math.tan(Math.toRadians(diagonalToleranceLower)))
                        
                                    {
                                    
                        if(line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.LEFT

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.RIGHT

                        }
                            

                                    }
                                
                        else {
                            
                        if(gradient > 0)
                        
                                    {
                                    
                        if(line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.DIAGONAL_UP_LEFT

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT

                        }
                            

                                    }
                                
                        else {
                            
                        if(line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DIAGONAL_UP_RIGHT

                        }
                            

                        }
                            

                        }
                            

                        }
                            
previous= current
intermediate= current

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(newMotionGesture)!;
        
        

event.setPreviousPoint(previous)
event.setCurrentPoint(current)
motionGesturesHandler!.fireEvent(event)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


                //@Throws(Error::class)
            
    public processMovedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{
    //var current = current
    //var deviceId = deviceId
    //var button = button

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.NO_MOTION)!;
        
        

event.setPreviousPoint(previous)
event.setCurrentPoint(current)
movedMotionGesturesHandler!.fireEvent(event)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getMotionGesturesHandler(): BasicMotionGesturesHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGesturesHandler;
    
}


}
                
            

