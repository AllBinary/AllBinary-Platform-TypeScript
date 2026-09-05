
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
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

      
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonInput } from './TouchButtonInput.js';
//not GWT import - same folder const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;

                import { TouchButtonResource } from './TouchButtonResource.js';
//not GWT import - same folder const TouchButtonResource = globalThis.org.allbinary.input.motion.button.TouchButtonResource;

                
export class TouchButton extends Paintable {
        

                //@Throws(Exception.constructor)
            
    public static createButton(touchButtonInput: TouchButtonInput, touchButtonResource: TouchButtonResource, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number): TouchButton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TouchButton(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance(0), rawRectangle, cellPosition, xBorder, yBorder);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly touchButtonInput: TouchButtonInput;

    private readonly animationInterface: Animation;

    private readonly hintAnimationInterface: Animation;

    readonly rawRectangle: Rectangle;

    readonly xBorder: number;

    readonly yBorder: number;

    rectangleP: Rectangle = RectangleFactory.SINGLETON;

    readonly cellPositionP: CellPosition;

    animationX: number= 0;

    animationY: number= 0;

    hintAnimationY: number= 0;

public constructor (touchButtonInput: TouchButtonInput, animationInterface: Animation, hintAnimationInterface: Animation, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){

            super();
        this.touchButtonInput= touchButtonInput;
    
this.animationInterface= animationInterface;
    
this.hintAnimationInterface= hintAnimationInterface;
    
this.rawRectangle= rawRectangle;
    
this.cellPositionP= cellPosition;
    
this.xBorder= xBorder;
    
this.yBorder= yBorder;
    
this.updateRectangle();
    
this.logUtil!.putF(new StringMaker().append("Created: ")!.append(this.toString())!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public paintHint(graphics: Graphics){
this.hintAnimationInterface!.paintXY(graphics, this.animationX, this.hintAnimationY);
    
}


    public paint(graphics: Graphics){
this.animationInterface!.paintXY(graphics, this.animationX, this.animationY);
    
}


    updateRectangle(){

        try {
            
    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var x: number = this.rawRectangle!.getWidth() *this.cellPositionP!.getColumn();;
    

    var y: number = this.rawRectangle!.getHeight() *this.cellPositionP!.getRow();;
    
this.rectangleP= new Rectangle(pointFactory!.createXY(x +this.xBorder, y +this.yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight());
    

    var point: GPoint = this.rectangleP!.getPoint()!;;
    
this.animationX= point.getX();
    
this.animationY= point.getY();
    
this.hintAnimationY= this.animationY -32;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


    public getCellPosition(): CellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPositionP;
    
}


    public getRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangleP;
    
}


    public getTouchButtonInput(): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.touchButtonInput;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append("TouchButton: ");
    
stringBuffer!.append(stringUtil!.toString(this.getRectangle()));
    
stringBuffer!.append(" CellPosition: ");
    
stringBuffer!.append(stringUtil!.toString(this.cellPositionP));
    
stringBuffer!.append(" xBorder: ");
    
stringBuffer!.appendint(this.xBorder);
    
stringBuffer!.append(" yBorder: ");
    
stringBuffer!.appendint(this.yBorder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



