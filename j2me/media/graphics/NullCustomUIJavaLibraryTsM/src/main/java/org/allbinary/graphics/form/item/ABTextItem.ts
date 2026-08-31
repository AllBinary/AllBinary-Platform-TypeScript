
        /* Generated Code Do Not Modify */
        



import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomCustomItem } from './CustomCustomItem.js';
import { ABCustomItemInterface } from './ABCustomItemInterface.js';
import { ABStringComponent } from './ABStringComponent.js';

export class ABTextItem extends CustomCustomItem implements ABCustomItemInterface {
        

public constructor (label: string, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public keyPressed(keyCode: number){
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
}


    public getLabelStringComponent(): ABStringComponent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABStringComponent.NULL_STRING_COMPONENT;
    
}


}



