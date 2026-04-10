
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
        



import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonPhoneStrings } from "../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class AngleFactory
            extends Object
         {
        

    private static readonly instance: AngleFactory = new AngleFactory();
        
        

    public static getInstance(): AngleFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static main(args: string[]){
var args = args

    var stringMaker: StringMaker = new StringMaker();
        
        


    var angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        





                        for (
    var index: number = 0;
        
        
index < 360; index++)
        {
stringMaker!.appendint(index)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.appendshort(angleFactory!.getClosestDirection(index)!.getValue())!.append(CommonSeps.getInstance()!.NEW_LINE)
}

LogUtil.getInstance()!.put(stringMaker!.toString(), "main", "main")
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly TOTAL_ANGLE: number = 360;
        
        

    public readonly QUARTER_TOTAL_ANGLE: number = 90;
        
        

    private readonly angleArray: Angle[] = new Array(TOTAL_ANGLE.toInt());
        
        

    private readonly NEGATIVE_ONE: number =  -1;
        
        

    public readonly NOT_ANGLE: NamedAngle = new NamedAngle(NEGATIVE_ONE, CommonStrings.getInstance()!.EMPTY);
        
        

    public readonly DOWN: NamedAngle

    public readonly UP: NamedAngle

    public readonly LEFT: NamedAngle

    public readonly RIGHT: NamedAngle
public constructor (){

            super();
            
    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        


    var total: number = angleArray!.length.toShort();
        
        

UP= NamedAngle(0.toShort(), commonPhoneStrings!.UP)
angleArray[0]= UP




                        for (
    var index: number = 1;
        
        
index < 90; index++)
        {
angleArray[index]= Angle(index.toShort())
}

RIGHT= NamedAngle(90.toShort(), commonPhoneStrings!.RIGHT)
angleArray[90]= RIGHT




                        for (
    var index: number = 91;
        
        
index < 180; index++)
        {
angleArray[index]= Angle(index.toShort())
}

DOWN= NamedAngle(180.toShort(), commonPhoneStrings!.DOWN)
angleArray[180]= DOWN




                        for (
    var index: number = 181;
        
        
index < 270; index++)
        {
angleArray[index]= Angle(index.toShort())
}

LEFT= NamedAngle(270.toShort(), commonPhoneStrings!.LEFT)
angleArray[270]= LEFT




                        for (
    var index: number = 271;
        
        
index < total; index++)
        {
angleArray[index]= Angle(index.toShort())
}

}


    private readonly frameUtil: FrameUtil = FrameUtil.getInstance()!;
        
        

    public getInstance(index: number): Angle{
    //var index = index

    var adjustedIndex: number = frameUtil!.adjustAngleToFrameAngle(index).toInt();
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleArray[adjustedIndex]!;
    
}


    public getClosestDirection(angle: number): Angle{
var angle = angle

                        if((angle >= 315 && angle < 360) || (angle >= 0 && angle < 45))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.UP;
    

                                    }
                                
                             else 
                        if(angle >= 45 && angle < 135)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.RIGHT;
    

                                    }
                                
                             else 
                        if(angle >= 135 && angle < 225)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.DOWN;
    

                                    }
                                
                             else 
                        if(angle >= 225 && angle < 315)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.LEFT;
    

                                    }
                                



                            throw RuntimeException()
}


    public getGeneralDirection(): Angle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NOT_ANGLE;
    
}


}
                
            

