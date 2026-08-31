
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
        



import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      //not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CircleAnimation extends Animation implements ColorCompositeInterface {
        

    readonly TOTAL_ANGLE: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);

    width: number;

    height: number;

public constructor (width: number, height: number, basicColor: BasicColor){

            super();
        this.width= width;
    
this.height= height;
    
this.setBasicColorP(basicColor);
    
}


    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.drawArc(x, y, this.width, this.height, 0, this.TOTAL_ANGLE);
    
}


}



