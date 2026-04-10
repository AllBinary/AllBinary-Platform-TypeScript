
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { AnimationInterface } from "../../../../../org/allbinary/animation/AnimationInterface.js";

    
import { CellPosition } from "../../../../../org/allbinary/graphics/CellPosition.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class TouchButton extends Paintable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly touchButtonInput: TouchButtonInput

    private readonly animationInterface: Animation

    readonly rawRectangle: Rectangle

    readonly xBorder: number

    readonly yBorder: number

    rectangle: Rectangle = RectangleFactory.SINGLETON;
        
        

    readonly cellPosition: CellPosition

    animationX: number= 0

    animationY: number= 0
public constructor (touchButtonInput: TouchButtonInput, animationInterface: AnimationInterface, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){

            super();
            var touchButtonInput = touchButtonInput
var animationInterface = animationInterface
var rawRectangle = rawRectangle
var cellPosition = cellPosition
var xBorder = xBorder
var yBorder = yBorder
this.touchButtonInput= touchButtonInput
this.animationInterface= animationInterface as Animation
this.rawRectangle= rawRectangle
this.cellPosition= cellPosition
this.xBorder= xBorder
this.yBorder= yBorder
this.updateRectangle()
put(StringMaker().
                            append("Created: ")!.append(this.toString())!.toString(), this, this.commonStrings!.CONSTRUCTOR)
}


    public paint(graphics: Graphics){
var graphics = graphics
paint(graphics, animationX, animationY)
}


    updateRectangle(){

        try {
            
    var x: number = this.rawRectangle!.getWidth() *cellPosition!.getColumn();
        
        


    var y: number = this.rawRectangle!.getHeight() *cellPosition!.getRow();
        
        

this.rectangle= Rectangle(PointFactory.getInstance()!.getInstance(x +xBorder, y +yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight())

    var point: GPoint = rectangle.getPoint()!;
        
        

this.animationX= point.getX()
this.animationY= point.getY()
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e)
}

}


    public getCellPositionP(): CellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPosition;
    
}


    public getRectangleP(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public getTouchButtonInput(): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return touchButtonInput;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

append("TouchButton: ")
append(stringUtil!.toString(this.rectangle))
append(" CellPosition: ")
append(stringUtil!.toString(this.cellPosition))
append(" xBorder: ")
appendint(this.xBorder)
append(" yBorder: ")
appendint(this.yBorder)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

