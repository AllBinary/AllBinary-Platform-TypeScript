
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
import { Direction } from '../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not plain js import { Angle } from '../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorBaseRotationAnimation } from './VectorBaseRotationAnimation.js';
//not GWT import const  = globalThis.org.allbinary.animation.VectorBaseRotationAnimation;

                import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import const  = globalThis.org.allbinary.animation.AnimationBehavior;

                
export class VectorRotationAnimation extends VectorBaseRotationAnimation {
        

public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior){
            super(AngleInfo.getInstance((AngleFactory.getInstance()!.TOTAL_ANGLE /currentPoints!.length)), currentPoints, basicColor, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public setFrameByDirection(direction: Direction){

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;;
    
this.adjustFrameToAngle(angle);
    
}


    public setFrameToAngle(angle: Angle){
this.adjustFrameToAngle(angle);
    
}


    public setFrame(index: number){
super.setFrame(index);
    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public adjustFrame(newAngle: number){
this.setFrame(this.frameUtil!.getFrameForAngle(newAngle, Math.round(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())));
    
}


    public adjustFrameToAngle(newAngle: Angle){
this.adjustFrame(newAngle!.getValue());
    
}


}



