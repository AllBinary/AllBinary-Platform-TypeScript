
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomItem } from './ABCustomItem.js';

export class ABCustomGaugeItem extends ABCustomItem {
        

    public static readonly NULL_GAUGE_ITEM: ABCustomGaugeItem = new ABCustomGaugeItem(StringUtil.getInstance()!.EMPTY_STRING, 1, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);

public constructor (label: string, maxValue: number, initialValue: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

