
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

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
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

    private readonly hintAnimationInterface: Animation

    readonly rawRectangle: Rectangle

    readonly xBorder: number

    readonly yBorder: number

    rectangleP: Rectangle = RectangleFactory.SINGLETON;
        
        

    readonly cellPositionP: CellPosition

    animationX: number= 0

    animationY: number= 0

    hintAnimationY: number= 0
public constructor (touchButtonInput: TouchButtonInput, touchButtonResource: TouchButtonResource, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number)                        

                            : this(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance(0), rawRectangle, cellPosition, xBorder, yBorder){

            super();
            var touchButtonInput = touchButtonInput
var touchButtonResource = touchButtonResource
var rawRectangle = rawRectangle
var cellPosition = cellPosition
var xBorder = xBorder
var yBorder = yBorder


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (touchButtonInput: TouchButtonInput, animationInterface: Animation, hintAnimationInterface: Animation, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){

            super();
            var touchButtonInput = touchButtonInput
var animationInterface = animationInterface
var hintAnimationInterface = hintAnimationInterface
var rawRectangle = rawRectangle
var cellPosition = cellPosition
var xBorder = xBorder
var yBorder = yBorder
this.touchButtonInput= touchButtonInput
this.animationInterface= animationInterface
this.hintAnimationInterface= hintAnimationInterface
this.rawRectangle= rawRectangle
this.cellPositionP= cellPosition
this.xBorder= xBorder
this.yBorder= yBorder
this.updateRectangle()
put(StringMaker().
                            append("Created: ")!.append(this.toString())!.toString(), this, commonStrings!.CONSTRUCTOR)
}


    public paintHint(graphics: Graphics){
var graphics = graphics
paint(graphics, animationX, this.hintAnimationY)
}


    public paint(graphics: Graphics){
var graphics = graphics
paint(graphics, animationX, animationY)
}


    updateRectangle(){

        try {
            
    var x: number = this.rawRectangle!.getWidth() *cellPositionP!.getColumn();
        
        


    var y: number = this.rawRectangle!.getHeight() *cellPositionP!.getRow();
        
        

this.rectangleP= Rectangle(PointFactory.getInstance()!.getInstance(x +xBorder, y +yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight())

    var point: GPoint = rectangleP!.getPoint()!;
        
        

this.animationX= point.getX()
this.animationY= point.getY()
this.hintAnimationY= animationY -32
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "updateRectangle", e)
}

}


    public getCellPosition(): CellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cellPositionP;
    
}


    public getRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleP;
    
}


    public getTouchButtonInput(): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return touchButtonInput;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

append("TouchButton: ")
append(stringUtil!.toString(this.getRectangle()))
append(" CellPosition: ")
append(stringUtil!.toString(this.cellPositionP))
append(" xBorder: ")
appendint(this.xBorder)
append(" yBorder: ")
appendint(this.yBorder)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

