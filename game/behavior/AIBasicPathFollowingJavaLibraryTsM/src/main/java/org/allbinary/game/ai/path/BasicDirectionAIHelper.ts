
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
        
            import { Math } from '../../../../../java/lang/Math.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { AngleIncrementInfo } from '../../../../../org/allbinary/math/AngleIncrementInfo.js';
      const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;

      
//not game specific package import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicDirectionAIHelper
            extends Object
         {
        

    private name: string;

    private angleInfo: AngleInfo;

public constructor (name: string, angleInfo: AngleInfo){

            super();
        this.name= name;
    
this.angleInfo= angleInfo;
    
}


    turnAI(frame: number): number{

    var keyDirection: number =  -1;;
    

    var directionAngle: number = this.angleInfo!.getAngleIncrementInfo()!.getFrameAngle(frame)!;;
    

    var angle: number = this.angleInfo!.getAngle()!;;
    

    var degrees: number = Math.abs(directionAngle -angle)!;;
    

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

    var angle: number = this.angleInfo!.getAngleIncrementInfo()!.getFrameAngle(frame.intValue());;
    

                        if(this.angleInfo!.getAngle() != angle)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.turnAI(frame.intValue());;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Canvas.UP;
    

                        }
                            
}


    public getAIKeyPressedFromDirection(geographicMapDirectionData: Direction): number{

    var keyDirection: number =  -1;;
    

    var angleIncrementInfo: AngleIncrementInfo = this.angleInfo!.getAngleIncrementInfo()!;;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

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
                        return this.angleInfo;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}
                
            

