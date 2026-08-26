
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { RTSLayerFormFactory } from '../../../../org/allbinary/game/input/RTSLayerFormFactory.js';
      const RTSLayerFormFactory = globalThis.org.allbinary.game.input.RTSLayerFormFactory;

      
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { ItemArraySingletonFactoryInterface } from '../../../../org/allbinary/graphics/form/item/ItemArraySingletonFactoryInterface.js';
      const ItemArraySingletonFactoryInterface = globalThis.org.allbinary.graphics.form.item.ItemArraySingletonFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSScrollSelectionFormFactory } from './RTSScrollSelectionFormFactory.js';
import { RTSLayer } from './RTSLayer.js';

export class AdvancedRTSLayerFormFactory extends RTSLayerFormFactory {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly scrollSelectionForm: ScrollSelectionForm;

protected constructor (label: string, itemArrayFactoryInterface: ItemArraySingletonFactoryInterface){

            super();
        
    var scrollSelectionForm: ScrollSelectionForm = ScrollSelectionForm.getNullScrollSelectionForm()!;;
    

        try {
            
    var items: ABCustomItem[] = itemArrayFactoryInterface!.getItems()!;;
    
scrollSelectionForm= RTSScrollSelectionFormFactory.getInstance(label, items);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.scrollSelectionForm= scrollSelectionForm;
    
}


    public getInstance(rtsLayer: RTSLayer): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm;
    
}


}
                
            

