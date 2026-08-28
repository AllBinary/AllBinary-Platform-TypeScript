
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { TextAnimation } from '../../../../org/allbinary/animation/text/TextAnimation.js';
      const TextAnimation = globalThis.org.allbinary.animation.text.TextAnimation;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CaptionAnimationHelperBase } from './CaptionAnimationHelperBase.js';
import { CaptionAnimation } from './CaptionAnimation.js';

export class CaptionAnimationHelper extends CaptionAnimationHelperBase {
        

    private readonly timeHelper: TimeDelayHelper = new TimeDelayHelper(620);

    private readonly textAnimation: TextAnimation = new TextAnimation(StringUtil.getInstance()!.EMPTY_STRING, AnimationBehavior.getInstance());

    private readonly captionAnimation: Animation;

    private animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

public constructor (captionAnimation: Animation, captionDx: number, captionDy: number, dx: number, dy: number){

            super();
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
this.textAnimation!.setBasicColorP(basicColor);
    
this.textAnimation!.setText(message);
    
this.animation= this.captionAnimation;
    
this.timeHelper!.setStartTimeTNT();
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.animation.paintXY(graphics, x, y);
    
}


}



