
        /* Generated Code Do Not Modify */

        


            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomScreen } from './CustomScreen.js';
//not GWT import - same folder const CustomScreen = globalThis.org.allbinary.graphics.form.CustomScreen;

                
export class ABCustomForm extends CustomScreen {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (title: string, items: ABCustomItem[], backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        }


    public getAllitems(): ABCustomItem[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setSelectedIndex(index: number){
}


    public getSelectedIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public deleteAll(){
}


    public delete(itemNum: number){
}


    public append(item: ABCustomItem): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public insert(itemNum: number, item: ABCustomItem){
}


    public set(itemNum: number, item: ABCustomItem){
}


    public get(itemNum: number): ABCustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABCustomItem.getNullInstance();;
    
}


    public getWidth(): number{



                            throw new RuntimeException();
                    
}


    public paint(graphics: Graphics){
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}



