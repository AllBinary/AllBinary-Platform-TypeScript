
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { SpecialAnimationInterface } from '../../../../org/allbinary/animation/special/SpecialAnimationInterface.js';
      const SpecialAnimationInterface = globalThis.org.allbinary.animation.special.SpecialAnimationInterface;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayAnimation } from './ImageArrayAnimation.js';

export class ImageArraySpecialAnimation extends ImageArrayAnimation implements SpecialAnimationInterface {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(270);

public constructor (imageArray: Image[], animationBehavior: AnimationBehavior){
            super(imageArray, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.reset();
    
}


    private loopCount: number = 0;

    public getLoopCount(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loopCount;
    
}


    public setLastFrame(){
this.circularIndexUtil!.setIndex(this.circularIndexUtil!.getSize() -1);
    
}


    public reset(){
this.setFrame(this.getSize() -1);
    
this.loopCount= 0;
    
}


    public nextFrame(){

                        if(this.getFrame() > 0)
                        
                                    {
                                    
                        if(this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.previousFrame();
    

                        if(this.getFrame() == 0)
                        
                                    {
                                    this.loopCount++;
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    private readonly loopCountTotal: number = 1;

    public isComplete(): boolean{

                        if(this.loopCount < this.loopCountTotal || this.getFrame() != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public paintXY(graphics: Graphics, x: number, y: number){
x= DisplayInfoSingleton.getInstance()!.getLastHalfWidth() -(this.getImage(this.circularIndexUtil!.getIndex())!.getWidth()>>1);
    
y= 5;
    
super.paintXY(graphics, x, y);
    
}


}



