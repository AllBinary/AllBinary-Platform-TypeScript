
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

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorFillBasePaintable extends Paintable implements ColorCompositeInterface {
        

    basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    colorP: number= 0;

public constructor (basicColor: BasicColor){

            super();
        this.setBasicColorP(basicColor);
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
this.setColor(this.getBasicColorP()!.intValue());
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.colorP;
    
}


    setColor(color: number){
this.colorP= color;
    
}


    public paint(graphics: Graphics){
}


}



