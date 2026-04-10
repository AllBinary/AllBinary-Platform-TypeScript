
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    

export class ImageArrayRotationAnimation extends ImageArrayBaseRotationAnimation {
        

    private expectedTotalFrames: number= 0
protected constructor (anyType: any = {}, animationBehavior: AnimationBehavior)                        

                            : super(
                                    (anyType as ImageArrayRotationAnimationInfo).getImageArray(), 
                                    (anyType as ImageArrayRotationAnimationInfo).getAngleInfoP(), animationBehavior){

            super();
                //var anyType = anyType
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    

    var allBinaryImageRotationAnimationInfo: ImageArrayRotationAnimationInfo = anyType as ImageArrayRotationAnimationInfo;
        
        

this.init(allBinaryImageRotationAnimationInfo!.getImageArray(), allBinaryImageRotationAnimationInfo!.getAngleInfoP(), allBinaryImageRotationAnimationInfo!.getTotalAngle())
}

public constructor (imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(imageArray, angleInfo, animationBehavior){

            super();
                //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.init(imageArray, angleInfo, totalAngle)
}

public constructor (imageArray: Image[], animationBehavior: AnimationBehavior)                        

                            : this(imageArray, AngleInfo.getInstance(10.toShort()), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), animationBehavior){

            super();
                //var imageArray = imageArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], angleInfo: AngleInfo, animationBehavior: AnimationBehavior)                        

                            : this(imageArray, angleInfo, AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), animationBehavior){

            super();
                //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    init(imageArray: Image[], angleInfo: AngleInfo, totalAngle: number){
    //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
this.expectedTotalFrames= totalAngle /this.angleInfo!.getAngleIncrementInfo()!.getAngleIncrement()
this.angleInfo!.adjustAngle(0)

                        if(expectedTotalFrames != this.getSize())
                        
                                    {
                                    


                            throw Error("Wrong Number of Frames")

                                    }
                                
}


    public setImageArray(imageArray: Image[]){
    //var imageArray = imageArray
super.setImageArray(imageArray)
this.angleInfo!.adjustAngle(0)
}


}
                
            

