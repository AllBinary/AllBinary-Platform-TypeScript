
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { AngleIncrementInfo } from "../../../../../org/allbinary/math/AngleIncrementInfo.js";

    
import { AngleInfo } from "../../../../../org/allbinary/math/AngleInfo.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Math } from "./Math.js";

export class BasicDirectionAIHelper
            extends Object
         {
        

    private name: string

    private angleInfo: AngleInfo
public constructor (name: string, angleInfo: AngleInfo){

            super();
            //var name = name
    //var angleInfo = angleInfo
this.name= name;
    
this.angleInfo= angleInfo;
    
}


    turnAI(frame: number): number{
var frame = frame

    var keyDirection: number =  -1;
        
        
;
    

    var directionAngle: number = this.angleInfo!.getAngleIncrementInfo()!.getFrameAngle(frame)!;
        
        
;
    

    var angle: number = this.angleInfo!.getAngle()!;
        
        
;
    

    var degrees: number = Math.abs(directionAngle -angle)!;
        
        
;
    

                        if(degrees < 180)
                        
                                    {
                                    
                        if(angle > directionAngle)
                        
                                    {
                                    keyDirection= Canvas.LEFT;
    

                                    }
                                
                             else 
                        if(angle < directionAngle)
                        
                                    {
                                    keyDirection= Canvas.RIGHT;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(angle > directionAngle)
                        
                                    {
                                    keyDirection= Canvas.RIGHT;
    

                                    }
                                
                             else 
                        if(angle < directionAngle)
                        
                                    {
                                    keyDirection= Canvas.LEFT;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyDirection;
    
}


    getAIKeyPressed(frame: Integer): number{
    //var frame = frame

    var angle: number = this.angleInfo!.getAngleIncrementInfo()!.getFrameAngle(frame.toInt());

                        ;
        
        
;
    

                        if(this.angleInfo!.getAngle() != angle)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.turnAI(frame.toInt());

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Canvas.UP;
    

                        }
                            
}


    public getAIKeyPressedFromDirection(geographicMapDirectionData: Direction): number{
    //var geographicMapDirectionData = geographicMapDirectionData

    var keyDirection: number =  -1;
        
        
;
    

    var angleIncrementInfo: AngleIncrementInfo = this.angleInfo!.getAngleIncrementInfo()!;
        
        
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        
;
    

                        if(geographicMapDirectionData == directionFactory!.DOWN)
                        
                                    {
                                    keyDirection= this.getAIKeyPressed(angleIncrementInfo!.DOWN_FRAME);
    

                                    }
                                
                             else 
                        if(geographicMapDirectionData == directionFactory!.UP)
                        
                                    {
                                    keyDirection= this.getAIKeyPressed(angleIncrementInfo!.UP_FRAME);
    

                                    }
                                
                             else 
                        if(geographicMapDirectionData == directionFactory!.LEFT)
                        
                                    {
                                    keyDirection= this.getAIKeyPressed(angleIncrementInfo!.LEFT_FRAME);
    

                                    }
                                
                             else 
                        if(geographicMapDirectionData == directionFactory!.RIGHT)
                        
                                    {
                                    keyDirection= this.getAIKeyPressed(angleIncrementInfo!.RIGHT_FRAME);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyDirection;
    
}


    getAngleInfoP(): AngleInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return angleInfo;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

