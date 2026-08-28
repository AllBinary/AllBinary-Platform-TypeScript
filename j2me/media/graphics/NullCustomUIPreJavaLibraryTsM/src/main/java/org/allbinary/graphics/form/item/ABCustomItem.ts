
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';
        
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Screen } from '../../../../../javax/microedition/lcdui/Screen.js';
      const Screen = globalThis.javax.microedition.lcdui.Screen;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ABCustomItem
            extends Object
         {
        

    public static NULL_CUSTOM_ITEM: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): ABCustomItem{

                        if(ABCustomItem.NULL_CUSTOM_ITEM == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ABCustomItem.NULL_CUSTOM_ITEM= new ABCustomItem(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABCustomItem.NULL_CUSTOM_ITEM as ABCustomItem;
    
}


protected constructor (label: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        }


    public setOwner(owner: Screen){
}


    public paintXY(graphics: Graphics, x: number, y: number){
}


    public paintUnselected(graphics: Graphics, x: number, y: number){
}


    public isFocusable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getLabel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public setLabel(label: string){
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setHeight(height: number){
}


    public getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0.0;
    
}


    public setValue(value: number){
}


    public getMinimumWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMinimumHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public preMeasurement(graphics: Graphics){
}


}



