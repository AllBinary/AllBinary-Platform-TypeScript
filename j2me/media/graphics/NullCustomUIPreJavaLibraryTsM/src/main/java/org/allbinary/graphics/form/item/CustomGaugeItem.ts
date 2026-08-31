
        /* Generated Code Do Not Modify */

        


import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomItem } from './CustomItem.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.item.CustomItem;

                
export class CustomGaugeItem extends CustomItem {
        

    public static readonly NULL_GAUGE_ITEM: CustomGaugeItem = new CustomGaugeItem(StringUtil.getInstance()!.EMPTY_STRING, 1, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);

public constructor (label: string, maxValue: number, initialValue: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}



