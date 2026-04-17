
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Screen } from "../../../../../javax/microedition/lcdui/Screen.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomItem
            extends Object
         {
        

    public static readonly NULL_CUSTOM_ITEM: CustomItem = new CustomItem(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        
protected constructor (label: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
            var label = label
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor
}


    public setOwner(owner: Screen){
var owner = owner
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
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
var label = label
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setHeight(height: number){
var height = height
}


    public getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0.0f;
    
}


    public setValue(value: number){
var value = value
}


    public getMinimumWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getMinimumHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

