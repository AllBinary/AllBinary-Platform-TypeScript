
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { RTSLayerFormFactory } from "../../../../org/allbinary/game/input/RTSLayerFormFactory.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ScrollSelectionForm } from "../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { ItemArraySingletonFactoryInterface } from "../../../../org/allbinary/graphics/form/item/ItemArraySingletonFactoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RTSScrollSelectionFormFactory } from "./RTSScrollSelectionFormFactory.js";

import { RTSLayer } from "./RTSLayer.js";

export class AdvancedRTSLayerFormFactory extends RTSLayerFormFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly scrollSelectionForm: ScrollSelectionForm
protected constructor (label: string, itemArrayFactoryInterface: ItemArraySingletonFactoryInterface){

            super();
            //var label = label
    //var itemArrayFactoryInterface = itemArrayFactoryInterface

    var scrollSelectionForm: ScrollSelectionForm = ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM;
        
        
;
    

        try {
            
    var items: CustomItem[] = itemArrayFactoryInterface!.getItems()!;
        
        
;
    
scrollSelectionForm= RTSScrollSelectionFormFactory.getInstance(label, items);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.scrollSelectionForm= scrollSelectionForm;
    
}


    public getInstance(rtsLayer: RTSLayer): ScrollSelectionForm{
    //var rtsLayer = rtsLayer



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm;
    
}


}
                
            

