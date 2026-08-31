
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
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
      const Player = globalThis.javax.microedition.media.Player;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { AnimationEventHandler } from '../../../../org/allbinary/animation/AnimationEventHandler.js';
      //not GWT import const AnimationEventHandler = globalThis.org.allbinary.animation.AnimationEventHandler;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      //not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CaptionIndexedAnimation extends IndexedAnimation {
        

    private animationInterface: Animation;

    private movieIndexedAnimationInterface: IndexedAnimation;

    private captionDx: number;

    private captionDy: number;

    private dx: number;

    private dy: number;

    private time: number;

    private END_EVENT: AllBinaryEventObject;

    private timeDelayHelper: TimeDelayHelper;

    private player: Player;

public constructor (animationInterface: Animation, movieIndexedAnimationInterface: IndexedAnimation, player: Player, captionDx: number, captionDy: number, dx: number, dy: number, time: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterface= animationInterface;
    
this.movieIndexedAnimationInterface= movieIndexedAnimationInterface;
    
this.captionDx= captionDx;
    
this.captionDy= captionDy;
    
this.dx= dx;
    
this.dy= dy;
    
this.time= time;
    
this.END_EVENT= new AllBinaryEventObject(this);
    

    var timePerFrame: number = this.time /this.getSize();;
    
this.timeDelayHelper= new TimeDelayHelper(timePerFrame);
    
this.player= player;
    
this.player.start();
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){

                        if(this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    this.movieIndexedAnimationInterface!.nextFrame();
    

                                    }
                                

                        if(this.isLastFrame())
                        
                                    {
                                    AnimationEventHandler.getInstance()!.fireEvent(this.END_EVENT);
    

                                    }
                                
}


    public isLastFrame(): boolean{

                        if(this.movieIndexedAnimationInterface!.getFrame() == this.getSize() -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public previousFrame(){
this.movieIndexedAnimationInterface!.previousFrame();
    
}


    public setFrame(index: number){
this.movieIndexedAnimationInterface!.setFrame(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movieIndexedAnimationInterface!.getFrame();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movieIndexedAnimationInterface!.getSize();;
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.animationInterface!.paintXY(graphics, x +this.captionDx, y +this.captionDy);
    
this.movieIndexedAnimationInterface!.paintXY(graphics, x +this.captionDx +this.dx, y +this.captionDy +this.dy);
    
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){
this.animationInterface!.paintThreedXYZ(graphics, x +this.captionDx, y +this.captionDy, z);
    
this.movieIndexedAnimationInterface!.paintThreedXYZ(graphics, x +this.captionDx +this.dx, y +this.captionDy +this.dy, z);
    
}


}



