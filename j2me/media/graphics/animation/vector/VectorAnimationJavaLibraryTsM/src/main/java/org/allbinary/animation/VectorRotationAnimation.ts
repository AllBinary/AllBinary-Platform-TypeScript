
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
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Direction } from '../../../org/allbinary/direction/Direction.js';

    
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';

    
import { Angle } from '../../../org/allbinary/math/Angle.js';

    
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';

    
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { VectorBaseRotationAnimation } from './VectorBaseRotationAnimation.js';
import { AnimationBehavior } from './AnimationBehavior.js';

export class VectorRotationAnimation extends VectorBaseRotationAnimation {
        
public constructor (currentPoints: number[][][], basicColor: BasicColor, animationBehavior: AnimationBehavior){
            super(AngleInfo.getInstance((AngleFactory.getInstance()!.TOTAL_ANGLE /currentPoints!.length)), currentPoints, basicColor, animationBehavior);
                        //var currentPoints = currentPoints
    //var basicColor = basicColor
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public setFrameByDirection(direction: Direction){
    //var direction = direction

    var angle: Angle = this.directionUtil!.getFrameAngle(direction)!;
;
    
this.adjustFrameToAngle(angle);
    
}


    public setFrameToAngle(angle: Angle){
    //var angle = angle
this.adjustFrameToAngle(angle);
    
}


    public setFrame(index: number){
    //var index = index
super.setFrame(index);
    
this.angleInfo!.adjustAngle(this.getFrame());
    
}


    public adjustFrame(newAngle: number){
    //var newAngle = newAngle
this.setFrame(this.frameUtil!.getFrameForAngle(newAngle, Math.round(this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement())));
    
}


    public adjustFrameToAngle(newAngle: Angle){
    //var newAngle = newAngle
this.adjustFrame(newAngle!.getValue());
    
}


}
                
            

