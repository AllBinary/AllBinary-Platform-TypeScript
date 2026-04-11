
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { CellPosition } from "../../../../../org/allbinary/graphics/CellPosition.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class FullTouchButton extends TouchButton {
        
public constructor (touchButtonInput: TouchButtonInput, touchButtonResource: TouchButtonResource, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number)                        

                            : super(touchButtonInput, touchButtonResource, rawRectangle, cellPosition, xBorder, yBorder){

            super();
            var touchButtonInput = touchButtonInput
var touchButtonResource = touchButtonResource
var rawRectangle = rawRectangle
var cellPosition = cellPosition
var xBorder = xBorder
var yBorder = yBorder


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (touchButtonInput: TouchButtonInput, animationInterface: Animation, hintAnimationInterface: Animation, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number)                        

                            : super(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder){

            super();
            var touchButtonInput = touchButtonInput
var animationInterface = animationInterface
var hintAnimationInterface = hintAnimationInterface
var rawRectangle = rawRectangle
var cellPosition = cellPosition
var xBorder = xBorder
var yBorder = yBorder


                            //For kotlin this is before the body of the constructor.
                    
}


    updateRectangle(){

        try {
            
    var x: number = this.rawRectangle!.getWidth() *cellPositionP!.getColumn();
        
        
;
    

    var y: number = this.rawRectangle!.getHeight() *cellPositionP!.getRow();
        
        
;
    
this.rectangleP= new Rectangle(PointFactory.getInstance()!.getInstance(x, y), this.rawRectangle!.getWidth() +(2 *xBorder), this.rawRectangle!.getHeight() +(2 *yBorder));
    

    var point: GPoint = this.rectangleP!.getPoint()!;
        
        
;
    
this.animationX= point.getX() +xBorder;
    
this.animationY= point.getY() +yBorder;
    
this.hintAnimationY= animationY -this.rectangleP!.getHeight() shr 1;
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


}
                
            

