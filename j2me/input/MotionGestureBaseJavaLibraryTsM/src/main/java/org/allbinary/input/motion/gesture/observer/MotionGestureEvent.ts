
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
        



//not game specific package import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { TsUtil } from '../../../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionGestureEvent extends AllBinaryEventObject {
        

    private static readonly CURRENT: string = CommonLabels.getInstance()!.CURRENT;

    private static readonly PREVIOUS: string = " Previous: ";

    private static readonly HASHCODE: string = " hashcode: ";

    private motionGesture: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;

    private readonly id: number;

    private previousPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;

    private currentPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;

public constructor (source: any = {}, id: number, motionGesture: MotionGestureInput){
            super(source);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.id= id;
    
this.setMotionGesture(motionGesture);
    
}


    public getMotionGesture(): MotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionGesture;
    
}


    public setMotionGesture(motionGesture: MotionGestureInput){
this.motionGesture= motionGesture;
    
}


    public getPreviousPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.previousPoint;
    
}


    public setPreviousPoint(previousPoint: GPoint){
this.previousPoint= previousPoint;
    
}


    public getCurrentPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentPoint;
    
}


    public setCurrentPoint(currentPoint: GPoint){
this.currentPoint= currentPoint;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append(stringUtil!.toString(this.motionGesture));
    
stringBuffer!.append(MotionGestureEvent.CURRENT);
    
stringBuffer!.append(stringUtil!.toString(this.currentPoint));
    
stringBuffer!.append(MotionGestureEvent.PREVIOUS);
    
stringBuffer!.append(stringUtil!.toString(this.previousPoint));
    
stringBuffer!.append(MotionGestureEvent.HASHCODE);
    
stringBuffer!.appendint(TsUtil.getInstance()!.hashCode(this));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


}
                
            

