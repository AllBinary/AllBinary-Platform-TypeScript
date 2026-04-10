
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

    

export class RectangleFilledAdjustedAnimation extends Animation
                , ColorCompositeInterface {
        

    private width: number

    private height: number

    private offsetX: number

    private offsetY: number
public constructor (width: number, height: number, offsetX: number, offsetY: number, basicColor: BasicColor){

            super();
            var width = width
var height = height
var offsetX = offsetX
var offsetY = offsetY
var basicColor = basicColor
this.width= width
this.height= height
this.offsetX= offsetX
this.offsetY= offsetY
this.this.setBasicColorP(basicColor)
}


    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor())
graphics.fillRect(x +this.offsetX, y +this.offsetY, width, height)
}


    public setWidth(width: number){
var width = width
this.width= width
}


    public setHeight(height: number){
var height = height
this.height= height
}


    public setOffsetX(offsetX: number){
var offsetX = offsetX
this.offsetX= offsetX
}


    public setOffsetY(offsetY: number){
var offsetY = offsetY
this.offsetY= offsetY
}


}
                
            

