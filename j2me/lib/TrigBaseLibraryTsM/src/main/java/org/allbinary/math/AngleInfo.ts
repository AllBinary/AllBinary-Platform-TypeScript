
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
        

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;



















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AngleIncrementInfo } from './AngleIncrementInfo.js';
//sameFolderImports - not GWT import - same folder const AngleIncrementInfo
import { AngleIncrementInfoFactory } from './AngleIncrementInfoFactory.js';
//sameFolderImports - not GWT import - same folder const AngleIncrementInfoFactory
import { FrameUtil } from './FrameUtil.js';
//sameFolderImports - not GWT import - same folder const FrameUtil

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

    let newAngle: number = this.angleIncrementInfo!.getAngleIncrement() *frame -90;;
    
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

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(AngleInfo.ANGLE);
    
stringBuffer!.appendshort(this.angle);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getAngleIncrementInfo()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

