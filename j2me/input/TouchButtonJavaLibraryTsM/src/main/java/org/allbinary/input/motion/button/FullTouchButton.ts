
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

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { CellPosition } from "../../../../../org/allbinary/graphics/CellPosition.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TouchButton } from "./TouchButton.js";

import { TouchButtonInput } from "./TouchButtonInput.js";

import { TouchButtonResource } from "./TouchButtonResource.js";

export class FullTouchButton extends TouchButton {
        

                //@Throws(Error::class)
            
    public static create(touchButtonInput: TouchButtonInput, touchButtonResource: TouchButtonResource, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number): FullTouchButton{
    //var touchButtonInput = touchButtonInput
    //var touchButtonResource = touchButtonResource
    //var rawRectangle = rawRectangle
    //var cellPosition = cellPosition
    //var xBorder = xBorder
    //var yBorder = yBorder



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new FullTouchButton(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance(0), rawRectangle, cellPosition, xBorder, yBorder);
    
}

public constructor (touchButtonInput: TouchButtonInput, animationInterface: Animation, hintAnimationInterface: Animation, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){
            super(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder);
                        //var touchButtonInput = touchButtonInput
    //var animationInterface = animationInterface
    //var hintAnimationInterface = hintAnimationInterface
    //var rawRectangle = rawRectangle
    //var cellPosition = cellPosition
    //var xBorder = xBorder
    //var yBorder = yBorder


                            //For kotlin this is before the body of the constructor.
                    
}


    updateRectangle(){

        try {
            
    var pointFactory: PointFactory = PointFactory.getInstance()!;
        
        
;
    

    var x: number = this.rawRectangle!.getWidth() *cellPositionP!.getColumn();
        
        
;
    

    var y: number = this.rawRectangle!.getHeight() *cellPositionP!.getRow();
        
        
;
    
this.rectangleP= new Rectangle(pointFactory!.getInstance0(x, y), this.rawRectangle!.getWidth() +(2 *xBorder), this.rawRectangle!.getHeight() +(2 *yBorder));
    

    var point: GPoint = this.rectangleP!.getPoint()!;
        
        
;
    
this.animationX= point.getX() +xBorder;
    
this.animationY= point.getY() +yBorder;
    
this.hintAnimationY= animationY -this.rectangleP!.getHeight()>>1;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


}
                
            

