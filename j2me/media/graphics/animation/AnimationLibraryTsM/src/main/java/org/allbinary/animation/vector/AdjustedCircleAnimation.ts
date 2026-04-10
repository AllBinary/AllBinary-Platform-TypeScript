
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

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    

export class AdjustedCircleAnimation extends CircleAnimation {
        

    private xAdjustment: number

    private yAdjustment: number
public constructor (width: number, height: number, xAdjustment: number, yAdjustment: number, basicColor: BasicColor)                        

                            : super(width, height, basicColor){

            super();
            var width = width
var height = height
var xAdjustment = xAdjustment
var yAdjustment = yAdjustment
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.xAdjustment= xAdjustment
this.yAdjustment= yAdjustment
}

public constructor (width: number, height: number, innerWidth: number, basicColor: BasicColor)                        

                            : super(width, height, basicColor){

            super();
            var width = width
var height = height
var innerWidth = innerWidth
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
    var widthPortion: number = (((innerWidth /3) *10) /7);
        
        

this.xAdjustment=  -((width shr 1) -widthPortion)
this.yAdjustment= this.xAdjustment

                                    }
                                
                        else {
                            this.xAdjustment=  -((width shr 1) -innerWidth)
this.yAdjustment= this.xAdjustment

                        }
                            
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor())
graphics.drawArc(x +this.xAdjustment, y +this.yAdjustment, width, height, 0, TOTAL_ANGLE)
}


}
                
            

