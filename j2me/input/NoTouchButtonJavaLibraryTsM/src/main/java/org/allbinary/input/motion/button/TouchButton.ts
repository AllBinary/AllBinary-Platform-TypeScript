
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationInterface } from '../../../../../org/allbinary/animation/AnimationInterface.js';
      const AnimationInterface = globalThis.org.allbinary.animation.AnimationInterface;

      
//not game specific package import { CellPosition } from '../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonInput } from './TouchButtonInput.js';

export class TouchButton extends Paintable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly touchButtonInput: TouchButtonInput;

    private readonly animationInterface: Animation;

    readonly rawRectangle: Rectangle;

    readonly xBorder: number;

    readonly yBorder: number;

    rectangle: Rectangle = RectangleFactory.SINGLETON;

    readonly cellPosition: CellPosition;

    animationX: number= 0;

    animationY: number= 0;

public constructor (touchButtonInput: TouchButtonInput, animationInterface: AnimationInterface, rawRectangle: Rectangle, cellPosition: CellPosition, xBorder: number, yBorder: number){

            super();
        this.touchButtonInput= touchButtonInput;
    
this.animationInterface= animationInterface as Animation;
    
this.rawRectangle= rawRectangle;
    
this.cellPosition= cellPosition;
    
this.xBorder= xBorder;
    
this.yBorder= yBorder;
    
this.updateRectangle();
    
this.logUtil!.putF(new StringMaker().append("Created: ")!.append(this.toString())!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    
}


    public paint(graphics: Graphics){
this.animationInterface!.paintXY(graphics, animationX, this.animationY);
    
}


    updateRectangle(){

        try {
            
    var x: number = this.rawRectangle!.getWidth() *this.cellPosition!.getColumn();;
    

    var y: number = this.rawRectangle!.getHeight() *this.cellPosition!.getRow();;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    
this.rectangle= new Rectangle(pointFactory!.createXY(x +this.xBorder, y +this.yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight());
    

    var point: GPoint = this.rectangle.getPoint()!;;
    
this.animationX= point.getX();
    
this.animationY= point.getY();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


    public getCellPositionP(): CellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cellPosition;
    
}


    public getRectangleP(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle;
    
}


    public getTouchButtonInput(): TouchButtonInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.touchButtonInput;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append("TouchButton: ");
    
stringBuffer!.append(stringUtil!.toString(this.rectangle));
    
stringBuffer!.append(" CellPosition: ");
    
stringBuffer!.append(stringUtil!.toString(this.cellPosition));
    
stringBuffer!.append(" xBorder: ");
    
stringBuffer!.appendint(this.xBorder);
    
stringBuffer!.append(" yBorder: ");
    
stringBuffer!.appendint(this.yBorder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



