
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { SpecialAnimationInterface } from "../../../../org/allbinary/animation/special/SpecialAnimationInterface.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class ImageArraySpecialAnimation extends ImageArrayAnimation
                , SpecialAnimationInterface {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(270);
        
        
public constructor (imageArray: Image[], animationBehavior: AnimationBehavior)                        

                            : super(imageArray, animationBehavior){

            super();
                //var imageArray = imageArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.reset()
}


    private loopCount: number = 0;
        
        

    public getLoopCount(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loopCount;
    
}


    public setLastFrame(){
setIndex(this.circularIndexUtil!.getSize() -1)
}


    public reset(){
this.setFrame(this.getSize() -1)
loopCount= 0
}


    public nextFrame(){

    
                        if(this.getFrame() > 0)
                        
                                    {
                                    
    
                        if(timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.previousFrame()

    
                        if(this.getFrame() == 0)
                        
                                    {
                                    loopCount++

                                    }
                                

                                    }
                                

                                    }
                                
}


    private readonly loopCountTotal: number = 1;
        
        

    public isComplete(): boolean{

    
                        if(loopCount < loopCountTotal || this.getFrame() != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
var x = x
var y = y
x= DisplayInfoSingleton.getInstance()!.getLastHalfWidth() -(this.getImage(this.circularIndexUtil!.getIndex())!.getWidth() shr 1)
y= 5
paint(graphics, x, y)
}


}
                
            

