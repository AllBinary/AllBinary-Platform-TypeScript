
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { CellPosition } from '../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButton } from './TouchButton.js';
//not GWT import - same folder const TouchButton = globalThis.org.allbinary.input.motion.button.TouchButton;

                import { TouchButtonInput } from './TouchButtonInput.js';
//not GWT import - same folder const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;

                import { TouchButtonResource } from './TouchButtonResource.js';
//not GWT import - same folder const TouchButtonResource = globalThis.org.allbinary.input.motion.button.TouchButtonResource;

                
export class FullTouchButton extends TouchButton {
        

                //@Throws(Exception.constructor)
            
    public static createButton(touchButtonInput: TouchButtonInput, touchButtonResource: TouchButtonResource, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number): FullTouchButton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new FullTouchButton(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance(0), rawRectangle, cellPosition, xBorder, yBorder);
    
}


public constructor (touchButtonInput: TouchButtonInput, animationInterface: Animation, hintAnimationInterface: Animation, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){
            super(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    updateRectangle(){

        try {
            
    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var x: number = this.rawRectangle!.getWidth() *this.cellPositionP!.getColumn();;
    

    var y: number = this.rawRectangle!.getHeight() *this.cellPositionP!.getRow();;
    
this.rectangleP= new Rectangle(pointFactory!.createXY(x, y), this.rawRectangle!.getWidth() +(2 *this.xBorder), this.rawRectangle!.getHeight() +(2 *this.yBorder));
    

    var point: GPoint = this.rectangleP!.getPoint()!;;
    
this.animationX= point.getX() +this.xBorder;
    
this.animationY= point.getY() +this.yBorder;
    
this.hintAnimationY= this.animationY -this.rectangleP!.getHeight()>>1;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


}



