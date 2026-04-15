
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { SmallIntegerSingletonFactory } from "../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

export class AngleIncrementInfo
            extends Object
         {
        

    private static readonly INCREMENT: string = "Inc: ";
        
        

    private readonly angleIncrement: number

    public readonly DOWN_FRAME: Integer

    public readonly UP_FRAME: Integer

    public readonly LEFT_FRAME: Integer

    public readonly RIGHT_FRAME: Integer
public constructor (angleIncrement: number){

            super();
            var angleIncrement = angleIncrement
this.angleIncrement= angleIncrement;
    

    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    
this.DOWN_FRAME= smallIntegerSingletonFactory!.getInstance(angleFactory!.DOWN.getValue() /this.angleIncrement);
    
this.UP_FRAME= smallIntegerSingletonFactory!.getInstance(angleFactory!.UP.getValue();

                        .toInt());
    
this.LEFT_FRAME= smallIntegerSingletonFactory!.getInstance(angleFactory!.LEFT.getValue() /this.angleIncrement);
    
this.RIGHT_FRAME= smallIntegerSingletonFactory!.getInstance(angleFactory!.RIGHT.getValue() /this.angleIncrement);
    
}


    private readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;
        
        

    public getFrameAngle(frame: number): number{
var frame = frame



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameUtil!.getFrameAngle(frame, this.angleIncrement.toInt());

                        ;
    
}


    public getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleIncrement;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(INCREMENT)!.appendshort(this.angleIncrement)!.toString();

                        ;
    
}


    public getClosestGeneralDirection(angle: number): number{
var angle = angle

    var closestDirection: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(360)!;
        
        
;
    

                        if(UP_FRAME.toInt() -angle < closestDirection!.toInt() -angle)
                        
                                    {
                                    closestDirection= UP_FRAME;
    

                                    }
                                

                        if(DOWN_FRAME.toInt() -angle < closestDirection!.toInt() -angle)
                        
                                    {
                                    closestDirection= DOWN_FRAME;
    

                                    }
                                

                        if(LEFT_FRAME.toInt() -angle < closestDirection!.toInt() -angle)
                        
                                    {
                                    closestDirection= LEFT_FRAME;
    

                                    }
                                

                        if(RIGHT_FRAME.toInt() -angle < closestDirection!.toInt() -angle)
                        
                                    {
                                    closestDirection= RIGHT_FRAME;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return closestDirection!.toInt();

                        ;
    
}


}
                
            

