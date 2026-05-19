
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


        
import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
      
import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
      
import { AnimationBehavior } from '../../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      
import { Angle } from '../../../../../org/allbinary/math/Angle.js';
      
import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HackRotationSpriteIndexedAnimation } from './HackRotationSpriteIndexedAnimation.js';

export class AllBinarySpriteRotationAnimation extends HackRotationSpriteIndexedAnimation {
        
public constructor (sprite: Sprite, image: Image, animationBehavior: AnimationBehavior){
            super(sprite, image, AngleInfo.getInstance((AngleFactory.getInstance()!.TOTAL_ANGLE /sprite.getRawFrameCount())), animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public nextRotation(){
this.sprite.nextFrame();
    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public previousRotation(){
this.sprite.prevFrame();
    
this.angleInfo!.adjustAngle(this.sprite.getFrame());
    
}


    public setFrameByDirection(direction: Direction){

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;
;
    
this.adjustFrameToAngle(angle);
    
}


    public setFrameToAngle(angle: Angle){
this.adjustFrameToAngle(angle);
    
}


    public setFrame(index: number){
this.sprite.setFrame(index);
    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public adjustFrameToAngle(angle: Angle){
this.adjustFrame(angle.getValue());
    
}


    public adjustFrame(angle: number){
this.setFrame(this.frameUtil!.getFrameForAngle(angle, Math.round(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())));
    
}


}
                
            

