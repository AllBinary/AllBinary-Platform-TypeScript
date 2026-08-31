
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

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaintableForm } from './PaintableForm.js';

export class FormPaintable extends Paintable {
        

    private readonly form: PaintableForm;

public constructor (form: PaintableForm){

            super();
        this.form= form;
    
}


    public paint(graphics: Graphics){
this.form.paint(graphics);
    
}


    public getForm(): PaintableForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.form;
    
}


}



