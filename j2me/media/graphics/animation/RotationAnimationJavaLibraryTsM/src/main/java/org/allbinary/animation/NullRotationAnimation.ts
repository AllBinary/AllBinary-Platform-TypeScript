
        /* Generated Code Do Not Modify */
        



import { AngleFactory } from "../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../org/allbinary/math/AngleInfo.js";

    
import { CircularIndexUtil } from "../../../org/allbinary/util/CircularIndexUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RotationAnimation } from "./RotationAnimation.js";

import { AnimationBehavior } from "./AnimationBehavior.js";

export class NullRotationAnimation extends RotationAnimation {
        

    public static createTotalAngle(angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior): NullRotationAnimation{
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullRotationAnimation(angleInfo, CircularIndexUtil.getInstance(totalAngle /angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()), animationBehavior);
    
}


    public static createQuarter(animationBehavior: AnimationBehavior): NullRotationAnimation{
    //var animationBehavior = animationBehavior



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullRotationAnimation(AngleInfo.getInstance(AngleFactory.getInstance()!.QUARTER_TOTAL_ANGLE), CircularIndexUtil.getInstance(4), animationBehavior);
    
}

protected constructor (angleInfo: AngleInfo, circularIndexUtil: CircularIndexUtil, animationBehavior: AnimationBehavior){
            super(angleInfo, circularIndexUtil, animationBehavior);
                        //var angleInfo = angleInfo
    //var circularIndexUtil = circularIndexUtil
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

