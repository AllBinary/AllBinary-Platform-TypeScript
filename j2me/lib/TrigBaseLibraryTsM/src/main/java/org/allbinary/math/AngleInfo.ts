
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { AngleIncrementInfo } from './AngleIncrementInfo.js';
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;

                //not plain js import { AngleIncrementInfoFactory } from './AngleIncrementInfoFactory.js';
const AngleIncrementInfoFactory = globalThis.org.allbinary.math.AngleIncrementInfoFactory;

                //not plain js import { FrameUtil } from './FrameUtil.js';
const FrameUtil = globalThis.org.allbinary.math.FrameUtil;

                
export class AngleInfo
            extends Object
         {
        

    public static getInstance(angleIncrement: number): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AngleInfo(AngleIncrementInfoFactory.getInstance()!.getAt(angleIncrement));
    
}


    private static readonly ANGLE: string = "Angle: ";

    private readonly angleIncrementInfo: AngleIncrementInfo;

    private angle: number = 0;

private constructor (angleIncrementInfo: AngleIncrementInfo){

            super();
        this.angleIncrementInfo= angleIncrementInfo;
    
}


    private readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;

    public adjustAngle(frame: number){

    var newAngle: number = this.angleIncrementInfo!.getAngleIncrement() *frame -90;;
    
this.setAngle(this.frameUtil!.adjustAngleToFrameAngle(newAngle));
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public setAngle(angle: number){
this.angle= angle;
    
}


    public getAngleIncrementInfo(): AngleIncrementInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angleIncrementInfo;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(AngleInfo.ANGLE);
    
stringBuffer!.appendshort(this.angle);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getAngleIncrementInfo()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



