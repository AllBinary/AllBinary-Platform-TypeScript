
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
        



import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { TouchMotionGestureFactory } from "../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    

export class MotionGestureEvent extends AllBinaryEventObject {
        

    private static readonly CURRENT: string = CommonLabels.getInstance()!.CURRENT;
        
        

    private static readonly PREVIOUS: string = " Previous: ";
        
        

    private static readonly HASHCODE: string = " hashcode: ";
        
        

    private motionGesture: MotionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
        
        

    private readonly id: number

    private previousPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

    private currentPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        
public constructor (source: any = {}, id: number, motionGesture: MotionGestureInput)                        

                            : super(source){

            super();
            var source = source
var id = id
var motionGesture = motionGesture


                            //For kotlin this is before the body of the constructor.
                    
this.id= id
this.setMotionGesture(motionGesture)
}


    public getMotionGesture(): MotionGestureInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGesture;
    
}


    public setMotionGesture(motionGesture: MotionGestureInput){
var motionGesture = motionGesture
this.motionGesture= motionGesture
}


    public getPreviousPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return previousPoint;
    
}


    public setPreviousPoint(previousPoint: GPoint){
var previousPoint = previousPoint
this.previousPoint= previousPoint
}


    public getCurrentPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentPoint;
    
}


    public setCurrentPoint(currentPoint: GPoint){
var currentPoint = currentPoint
this.currentPoint= currentPoint
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

stringBuffer!.append(stringUtil!.toString(this.motionGesture))
stringBuffer!.append(CURRENT)
stringBuffer!.append(stringUtil!.toString(this.currentPoint))
stringBuffer!.append(PREVIOUS)
stringBuffer!.append(stringUtil!.toString(this.previousPoint))
stringBuffer!.append(HASHCODE)
stringBuffer!.appendint(this.hashCode())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


}
                
            

