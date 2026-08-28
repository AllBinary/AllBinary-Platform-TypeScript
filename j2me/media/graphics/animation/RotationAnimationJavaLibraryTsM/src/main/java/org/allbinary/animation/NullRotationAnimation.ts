
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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



