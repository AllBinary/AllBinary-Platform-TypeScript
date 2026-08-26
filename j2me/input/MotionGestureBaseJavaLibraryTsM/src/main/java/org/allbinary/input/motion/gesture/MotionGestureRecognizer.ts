
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Math } from '../../../../../java/lang/Math.js';
        
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { Line } from '../../../../../org/allbinary/graphics/Line.js';
      const Line = globalThis.org.allbinary.graphics.Line;

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { MotionGestureConfiguration } from '../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js';
      const MotionGestureConfiguration = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration;

      
//not game specific package import { MotionGestureConfigurationFactory } from '../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
      const MotionGestureConfigurationFactory = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { MotionEventCircularPool } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionEventCircularPool.js';
      const MotionEventCircularPool = globalThis.org.allbinary.input.motion.gesture.observer.MotionEventCircularPool;

      
//not game specific package import { MotionGestureEvent } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';
      const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

      
//not game specific package import { MovedMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/MovedMotionGesturesHandler.js';
      const MovedMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.MovedMotionGesturesHandler;

      
//not game specific package import { ScrolledMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/ScrolledMotionGesturesHandler.js';
      const ScrolledMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.ScrolledMotionGesturesHandler;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { J2SEMath } from '../../../../../org/allbinary/logic/math/J2SEMath.js';
      const J2SEMath = globalThis.org.allbinary.logic.math.J2SEMath;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchMotionGestureFactory } from './TouchMotionGestureFactory.js';
import { MotionGestureInput } from './MotionGestureInput.js';

export class MotionGestureRecognizer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly j2seMath: J2SEMath = J2SEMath.getInstance()!;

    private readonly origin: GPoint = PointFactory.getInstance()!.ZERO_ZERO;

    private previous: GPoint = this.origin;

    private intermediate: GPoint = this.origin;

    private readonly line: Line = new Line(this.origin, this.origin);

    private readonly motionGesturesHandler: BasicMotionGesturesHandler;

    private readonly movedMotionGesturesHandler: BasicEventHandler;

    private readonly scrolledMotionGesturesHandler: BasicEventHandler;

    private readonly motionEventCircularPool: MotionEventCircularPool;

public constructor (id: number){

            super();
        this.motionEventCircularPool= MotionEventCircularPool.createPool(id);
    

    var motionGesturesHandler: BasicEventHandler = new BasicEventHandler();;
    

    var movedMotionGesturesHandler: BasicEventHandler = motionGesturesHandler;;
    

    var scrolledMotionGesturesHandler: BasicEventHandler = motionGesturesHandler;;
    

        try {
            motionGesturesHandler= BasicMotionGesturesHandler.getInstance();
    
movedMotionGesturesHandler= MovedMotionGesturesHandler.getInstance();
    
scrolledMotionGesturesHandler= ScrolledMotionGesturesHandler.getInstance();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.motionGesturesHandler= motionGesturesHandler as BasicMotionGesturesHandler;
    
this.movedMotionGesturesHandler= movedMotionGesturesHandler;
    
this.scrolledMotionGesturesHandler= scrolledMotionGesturesHandler;
    
}


                //@Throws(Exception.constructor)
            
    public processPressedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{
this.intermediate= this.origin;
    
this.previous= this.origin;
    

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.PRESSED)!;;
    
event.setPreviousPoint(this.previous);
    
event.setCurrentPoint(current);
    
this.motionGesturesHandler!.fireEvent(event);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public processReleasedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.RELEASED)!;;
    
event.setPreviousPoint(this.previous);
    
event.setCurrentPoint(current);
    
this.motionGesturesHandler!.fireEvent(event);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public processDraggedMotionEvent(current: GPoint, deviceId: number, buttonMask: number){

                        if(this.previous == this.origin || this.intermediate == this.origin)
                        
                                    {
                                    this.previous= current;
    
this.intermediate= current;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.line.setP1(this.previous);
    
this.line.setP2(current);
    

    var minimumMotionGesture: number = MotionGestureConfigurationFactory.getInstance()!.getMinimumMotionGesture()!;;
    

                        if(this.j2seMath!.abs(this.line.getDeltaX()) < minimumMotionGesture && this.j2seMath!.abs(this.line.getDeltaY()) < minimumMotionGesture)
                        
                                    {
                                    this.intermediate= current;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var gradient: number = this.line.getGradient()!;;
    

    var absGradient: number = this.j2seMath!.abs(gradient);;
    

    var conf: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;;
    

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var newMotionGesture: MotionGestureInput = touchMotionGestureFactory!.NO_MOTION;;
    

    var diagonalToleranceHigher: number = 12.0;;
    

    var diagonalToleranceLower: number = 12.0;;
    

                        if(conf.isDiagonalMotionGestureAllowed())
                        
                                    {
                                    diagonalToleranceHigher= (90 -conf.getDiagonalTolerance());
    
diagonalToleranceLower= conf.getDiagonalTolerance();
    

                                    }
                                

                        if(absGradient > Math.tan(Math.toRadians(diagonalToleranceHigher)))
                        
                                    {
                                    
                        if(this.line.getDeltaY() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.UP;
    

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DOWN;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(absGradient < Math.tan(Math.toRadians(diagonalToleranceLower)))
                        
                                    {
                                    
                        if(this.line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.LEFT;
    

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.RIGHT;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(gradient > 0)
                        
                                    {
                                    
                        if(this.line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.DIAGONAL_UP_LEFT;
    

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT;
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(this.line.getDeltaX() > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT;
    

                                    }
                                
                        else {
                            newMotionGesture= touchMotionGestureFactory!.DIAGONAL_UP_RIGHT;
    

                        }
                            

                        }
                            

                        }
                            

                        }
                            
this.previous= current;
    
this.intermediate= current;
    

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(newMotionGesture)!;;
    
event.setPreviousPoint(this.previous);
    
event.setCurrentPoint(current);
    
this.motionGesturesHandler!.fireEvent(event);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}


                //@Throws(Exception.constructor)
            
    public processMovedMotionEvent(current: GPoint, deviceId: number, button: number): boolean{

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(TouchMotionGestureFactory.getInstance()!.NO_MOTION)!;;
    
event.setPreviousPoint(this.previous);
    
event.setCurrentPoint(current);
    
this.movedMotionGesturesHandler!.fireEvent(event);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public processScrolledMotionEvent(current: GPoint, deviceId: number, button: number): boolean{

    var touchMotionGestureFactory: TouchMotionGestureFactory = TouchMotionGestureFactory.getInstance()!;;
    

    var newMotionGesture: MotionGestureInput = touchMotionGestureFactory!.NO_MOTION;;
    

                        if(button > 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.SCROLL_UP;
    

                                    }
                                
                             else 
                        if(button < 0)
                        
                                    {
                                    newMotionGesture= touchMotionGestureFactory!.SCROLL_DOWN;
    

                                    }
                                

    var event: MotionGestureEvent = this.motionEventCircularPool!.getInstance(newMotionGesture)!;;
    
event.setPreviousPoint(this.previous);
    
event.setCurrentPoint(current);
    
this.scrolledMotionGesturesHandler!.fireEvent(event);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getMotionGesturesHandler(): BasicMotionGesturesHandler{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionGesturesHandler;
    
}


}
                
            

