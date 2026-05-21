
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      
import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RotationAnimation } from './RotationAnimation.js';
import { AnimationBehavior } from './AnimationBehavior.js';

export class NullRotationAnimation extends RotationAnimation {
        

    public static createTotalAngle(angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior): NullRotationAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullRotationAnimation(angleInfo, CircularIndexUtil.createInstance(totalAngle /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
    
}


    public static createQuarter(animationBehavior: AnimationBehavior): NullRotationAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullRotationAnimation(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
    
}

protected constructor (angleInfo: AngleInfo, circularIndexUtil: CircularIndexUtil, animationBehavior: AnimationBehavior){
            super(angleInfo, circularIndexUtil, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

