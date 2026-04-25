
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

    
import { AndroidUtil } from "../../../../org/allbinary/AndroidUtil.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CircleAnimation } from "./CircleAnimation.js";

export class AdjustedCircleAnimation extends CircleAnimation {
        

    public static create(width: number, height: number, xAdjustment: number, yAdjustment: number, basicColor: BasicColor): AdjustedCircleAnimation{
    //var width = width
    //var height = height
    //var xAdjustment = xAdjustment
    //var yAdjustment = yAdjustment
    //var basicColor = basicColor

    var adjustedCircleAnimation: AdjustedCircleAnimation = new AdjustedCircleAnimation(width, height, basicColor);
        
        
;
    
adjustedCircleAnimation!.init(xAdjustment, yAdjustment);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjustedCircleAnimation;
    
}


    public static createW(width: number, height: number, innerWidth: number, basicColor: BasicColor): AdjustedCircleAnimation{
    //var width = width
    //var height = height
    //var innerWidth = innerWidth
    //var basicColor = basicColor

    var adjustedCircleAnimation: AdjustedCircleAnimation = new AdjustedCircleAnimation(width, height, basicColor);
        
        
;
    
adjustedCircleAnimation!.init(innerWidth);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return adjustedCircleAnimation;
    
}


    private xAdjustment: number= 0

    private yAdjustment: number= 0
public constructor (width: number, height: number, basicColor: BasicColor){
            super(width, height, basicColor);
                        //var width = width
    //var height = height
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    init(xAdjustment: number, yAdjustment: number){
    //var xAdjustment = xAdjustment
    //var yAdjustment = yAdjustment
this.xAdjustment= xAdjustment;
    
this.yAdjustment= yAdjustment;
    
}


    init(innerWidth: number){
    //var innerWidth = innerWidth

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
    var widthPortion: number = (((innerWidth /3) *10) /7);
        
        
;
    
this.xAdjustment=  -((width>>1) -widthPortion);
    
this.yAdjustment= this.xAdjustment;
    

                                    }
                                
                        else {
                            this.xAdjustment=  -((width>>1) -innerWidth);
    
this.yAdjustment= this.xAdjustment;
    

                        }
                            
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.drawArc(x +this.xAdjustment, y +this.yAdjustment, this.width, this.height, 0, TOTAL_ANGLE);
    
}


}
                
            

