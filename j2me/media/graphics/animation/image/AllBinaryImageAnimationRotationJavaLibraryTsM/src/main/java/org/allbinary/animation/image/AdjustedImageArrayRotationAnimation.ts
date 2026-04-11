
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

    
import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    

export class AdjustedImageArrayRotationAnimation extends ImageArrayRotationAnimation {
        

    private dx: number= 0

    private dy: number= 0
public constructor (anyType: any = {}, animationBehavior: AnimationBehavior)                        

                            : super(anyType, animationBehavior){

            super();
                //var anyType = anyType
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    

    var allBinaryImageRotationAnimationInfo: ImageArrayRotationAnimationInfo = anyType as ImageArrayRotationAnimationInfo;
        
        
;
    
this.init(allBinaryImageRotationAnimationInfo!.getDx(), allBinaryImageRotationAnimationInfo!.getDy());
    
}

public constructor (imageArray: Image[], animationBehavior: AnimationBehavior)                        

                            : this(imageArray, AngleInfo.getInstance(10.toShort()), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), 0, 0, animationBehavior){

            super();
                //var imageArray = imageArray
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : this(imageArray, AngleInfo.getInstance(10.toShort()), AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), dx, dy, animationBehavior){

            super();
                //var imageArray = imageArray
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], angleInfo: AngleInfo, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : this(imageArray, angleInfo, AngleFactory.getInstance()!.TOTAL_ANGLE.toInt(), dx, dy, animationBehavior){

            super();
                //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, dx: number, dy: number, animationBehavior: AnimationBehavior)                        

                            : super(imageArray, angleInfo, totalAngle, animationBehavior){

            super();
                //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var dx = dx
    //var dy = dy
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy);
    
}

public constructor (imageArray: Image[], angleInfo: AngleInfo, totalAngle: number, animationBehavior: AnimationBehavior)                        

                            : super(imageArray, angleInfo, totalAngle, animationBehavior){

            super();
                //var imageArray = imageArray
    //var angleInfo = angleInfo
    //var totalAngle = totalAngle
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.init( -(imageArray[0]!.getWidth() shr 2),  -(imageArray[0]!.getHeight() shr 2));
    
}


                //@Throws(Error::class)
            
    public init(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.setDx(dx);
    
this.setDy(dy);
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
super.paint(graphics, x +this.dx, y +this.dy);
    
}


    public setDx(dx: number){
    //var dx = dx
this.dx= dx;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


    public setDy(dy: number){
    //var dy = dy
this.dy= dy;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dy;
    
}


}
                
            

