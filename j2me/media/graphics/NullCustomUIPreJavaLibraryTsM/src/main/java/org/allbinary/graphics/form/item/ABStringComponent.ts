
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ABStringComponent
            extends Object
         {
        

    public static readonly NULL_STRING_COMPONENT: ABStringComponent = new ABStringComponent(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);

    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}


public constructor (backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        }


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
}


}



