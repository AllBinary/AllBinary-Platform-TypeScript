
        /* Generated Code Do Not Modify */
        



import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CustomItem } from "./CustomItem.js";

export class CustomGaugeItem extends CustomItem {
        

    public static readonly NULL_GAUGE_ITEM: CustomGaugeItem = new CustomGaugeItem(StringUtil.getInstance()!.EMPTY_STRING, 1, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        
public constructor (label: string, maxValue: number, initialValue: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(label, backgroundBasicColor, foregroundBasicColor){

            super();
            var label = label
var maxValue = maxValue
var initialValue = initialValue
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

