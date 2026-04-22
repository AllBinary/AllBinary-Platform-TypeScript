
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AngleIncrementInfoFactory } from "./AngleIncrementInfoFactory.js";

import { AngleIncrementInfo } from "./AngleIncrementInfo.js";

import { FrameUtil } from "./FrameUtil.js";

export class AngleInfo
            extends Object
         {
        

    public static getInstance(angleIncrement: number): AngleInfo{
var angleIncrement = angleIncrement



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AngleInfo(AngleIncrementInfoFactory.getInstance()!.getInstance(angleIncrement));
    
}


    private static readonly ANGLE: string = "Angle: ";
        
        

    private readonly angleIncrementInfo: AngleIncrementInfo

    private angle: number = 0;
        
        
private constructor (angleIncrementInfo: AngleIncrementInfo){

            super();
        var angleIncrementInfo = angleIncrementInfo
this.angleIncrementInfo= angleIncrementInfo;
    
}


    private readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;
        
        

    public adjustAngle(frame: number){
var frame = frame

    var newAngle: number = this.angleIncrementInfo!.getAngleIncrement() *frame -90;
        
        
;
    
this.setAngle(this.frameUtil!.adjustAngleToFrameAngle(newAngle);

                        );
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angle;
    
}


    public setAngle(angle: number){
var angle = angle
this.angle= angle;
    
}


    public getAngleIncrementInfo(): AngleIncrementInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleIncrementInfo;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(ANGLE);
    
stringBuffer!.appendshort(this.angle);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getAngleIncrementInfo()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

