
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CustomScreen } from "./CustomScreen.js";

export class CustomForm extends CustomScreen {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (title: string, items: CustomItem[], backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        var title = title
var items = items
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor
}


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setSelectedIndex(index: number){
var index = index
}


    public getSelectedIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public deleteAll(){
}


    public delete(itemNum: number){
var itemNum = itemNum
}


    public append(item: CustomItem): number{
var item = item



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public insert(itemNum: number, item: CustomItem){
var itemNum = itemNum
var item = item
}


    public set(itemNum: number, item: CustomItem){
var itemNum = itemNum
var item = item
}


    public get(itemNum: number): CustomItem{
var itemNum = itemNum



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CustomItem.NULL_CUSTOM_ITEM;
    
}


    public getWidth(): number{



                            throw new RuntimeException()
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}
                
            

