
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

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { TextAnimation } from "../../../../org/allbinary/animation/text/TextAnimation.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CaptionAnimationHelperBase } from "./CaptionAnimationHelperBase.js";

export class CaptionAnimationHelper extends CaptionAnimationHelperBase {
        

    private readonly timeHelper: TimeDelayHelper = new TimeDelayHelper(620);
        
        

    private readonly textAnimation: TextAnimation = new TextAnimation(StringUtil.getInstance()!.EMPTY_STRING, AnimationBehavior.getInstance());
        
        

    private readonly captionAnimation: Animation

    private animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        
public constructor (captionAnimation: Animation, captionDx: number, captionDy: number, dx: number, dy: number){

            super();
            //var captionAnimation = captionAnimation
    //var captionDx = captionDx
    //var captionDy = captionDy
    //var dx = dx
    //var dy = dy
this.captionAnimation= new CaptionAnimation(captionAnimation, this.textAnimation, captionDx, captionDy, dx, dy);
    
}


    public isShowing(): boolean{

                        if(this.animation == this.captionAnimation)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public tick(){

                        if(this.timeHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    

                                    }
                                
}


    public update(message: string, basicColor: BasicColor){
var message = message
var basicColor = basicColor
this.textAnimation!.setBasicColorP(basicColor);
    
this.textAnimation!.setText(message);
    
this.animation= this.captionAnimation;
    
this.timeHelper!.setStartTime();
    
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.animation.paint(graphics, x, y);
    
}


}
                
            

