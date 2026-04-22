
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

    
import { Player } from "../../../../javax/microedition/media/Player.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { AnimationEventHandler } from "../../../../org/allbinary/animation/AnimationEventHandler.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CaptionIndexedAnimation extends IndexedAnimation {
        

    private animationInterface: Animation

    private movieIndexedAnimationInterface: IndexedAnimation

    private captionDx: number

    private captionDy: number

    private dx: number

    private dy: number

    private time: number

    private END_EVENT: AllBinaryEventObject

    private timeDelayHelper: TimeDelayHelper

    private player: Player
public constructor (animationInterface: Animation, movieIndexedAnimationInterface: IndexedAnimation, player: Player, captionDx: number, captionDy: number, dx: number, dy: number, time: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var animationInterface = animationInterface
    //var movieIndexedAnimationInterface = movieIndexedAnimationInterface
    //var player = player
    //var captionDx = captionDx
    //var captionDy = captionDy
    //var dx = dx
    //var dy = dy
    //var time = time
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.animationInterface= animationInterface;
    
this.movieIndexedAnimationInterface= movieIndexedAnimationInterface;
    
this.captionDx= captionDx;
    
this.captionDy= captionDy;
    
this.dx= dx;
    
this.dy= dy;
    
this.time= time;
    
this.END_EVENT= new AllBinaryEventObject(this);
    

    var timePerFrame: number = this.time /this.getSize();
        
        
;
    
this.timeDelayHelper= new TimeDelayHelper(timePerFrame);
    
this.player= player;
    
this.player.start();
    
}


                //@Throws(Error::class)
            
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
var index = index
this.movieIndexedAnimationInterface!.setFrame(index);
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movieIndexedAnimationInterface!.getFrame();

                        ;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movieIndexedAnimationInterface!.getSize();

                        ;
    
}


    public setSequence(sequence: number[]){
var sequence = sequence
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();

                        ;
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.animationInterface!.paint(graphics, x +this.captionDx, y +this.captionDy);
    
this.movieIndexedAnimationInterface!.paint(graphics, x +this.captionDx +this.dx, y +this.captionDy +this.dy);
    
}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z
this.animationInterface!.paintThreed(graphics, x +this.captionDx, y +this.captionDy, z);
    
this.movieIndexedAnimationInterface!.paintThreed(graphics, x +this.captionDx +this.dx, y +this.captionDy +this.dy, z);
    
}


}
                
            

