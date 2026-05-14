
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { SmallIntegerSingletonFactory } from '../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AngleFactory } from './AngleFactory.js';
import { FrameUtil } from './FrameUtil.js';

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
    
this.DOWN_FRAME= smallIntegerSingletonFactory!.getAt(angleFactory!.DOWN.getValue() /this.angleIncrement);
    
this.UP_FRAME= smallIntegerSingletonFactory!.getAt(Math.round(angleFactory!.UP.getValue()));
    
this.LEFT_FRAME= smallIntegerSingletonFactory!.getAt(angleFactory!.LEFT.getValue() /this.angleIncrement);
    
this.RIGHT_FRAME= smallIntegerSingletonFactory!.getAt(angleFactory!.RIGHT.getValue() /this.angleIncrement);
    
}


    private readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;

    public getFrameAngle(frame: number): number{
var frame = frame



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frameUtil!.getFrameAngle(frame, Math.round(this.angleIncrement));;
    
}


    public getAngleIncrement(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleIncrement;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(AngleIncrementInfo.INCREMENT)!.appendshort(this.angleIncrement)!.toString();;
    
}


    public getClosestGeneralDirection(angle: number): number{
var angle = angle

    var closestDirection: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(360)!;
;
    

                        if(this.UP_FRAME.intValue() -angle < closestDirection!.intValue() -angle)
                        
                                    {
                                    closestDirection= this.UP_FRAME;
    

                                    }
                                

                        if(this.DOWN_FRAME.intValue() -angle < closestDirection!.intValue() -angle)
                        
                                    {
                                    closestDirection= this.DOWN_FRAME;
    

                                    }
                                

                        if(this.LEFT_FRAME.intValue() -angle < closestDirection!.intValue() -angle)
                        
                                    {
                                    closestDirection= this.LEFT_FRAME;
    

                                    }
                                

                        if(this.RIGHT_FRAME.intValue() -angle < closestDirection!.intValue() -angle)
                        
                                    {
                                    closestDirection= this.RIGHT_FRAME;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return closestDirection!.intValue();;
    
}


}
                
            

