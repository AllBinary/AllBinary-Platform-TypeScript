
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

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ColorCompositeInterface } from "../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    
import { AngleFactory } from "../../../../org/allbinary/math/AngleFactory.js";

    

export class CircleAnimation extends Animation
                , ColorCompositeInterface {
        

    readonly TOTAL_ANGLE: number = AngleFactory.getInstance()!.TOTAL_ANGLE.toInt();
        
        

    width: number

    height: number
public constructor (widthAndHeight: number, basicColor: BasicColor){

            super();
            var widthAndHeight = widthAndHeight
var basicColor = basicColor
this.width= widthAndHeight
this.height= widthAndHeight
this.this.setBasicColorP(basicColor)
}

public constructor (width: number, height: number, basicColor: BasicColor){

            super();
            var width = width
var height = height
var basicColor = basicColor
this.width= width
this.height= height
this.this.setBasicColorP(basicColor)
}


    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor())
graphics.drawArc(x, y, width, height, 0, TOTAL_ANGLE)
}


}
                
            

