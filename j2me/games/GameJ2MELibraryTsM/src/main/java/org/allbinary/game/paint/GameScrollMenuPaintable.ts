
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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

        


import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor
import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
//not GWT import const ColorChangeEventHandler
import { ColorChangeListener } from '../../../../org/allbinary/graphics/color/ColorChangeListener.js';
//not GWT import const ColorChangeListener
import { FormPaintable } from '../../../../org/allbinary/graphics/form/FormPaintable.js';
//not GWT import const FormPaintable
import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm
import { ABStringComponent } from '../../../../org/allbinary/graphics/form/item/ABStringComponent.js';
//not GWT import const ABStringComponent
import { ABTextItem } from '../../../../org/allbinary/graphics/form/item/ABTextItem.js';
//not GWT import const ABTextItem
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGameDemoPaintable } from './BasicGameDemoPaintable.js';
//not GWT import - same folder const BasicGameDemoPaintableimport { MainGameDemoStatePaintable } from './MainGameDemoStatePaintable.js';
//not GWT import - same folder const MainGameDemoStatePaintable
export class GameScrollMenuPaintable extends BasicGameDemoPaintable implements ColorChangeListener {
        

public constructor (mainDemoStatePaintable: Paintable, ownershipPaintable: Paintable, helpPaintableInterface: Paintable, basicColor: BasicColor){
            super(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setColor(basicColor);
    
ColorChangeEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public setState(state: number){
this.setCurrentStatePaintable(this.getMainDemoStatePaintable());
    
}


    public onEvent(eventObject: AllBinaryEventObject){
}


    setColor(basicColor: BasicColor){

    var mainGameDemoStatePaintable: MainGameDemoStatePaintable = this.getMainDemoStatePaintable() as MainGameDemoStatePaintable;;
    

    var formPaintable: FormPaintable = mainGameDemoStatePaintable!.getMenuPaintableInterface() as FormPaintable;;
    

    var scrollSelectionForm: ScrollSelectionForm = formPaintable!.getForm() as ScrollSelectionForm;;
    
mainGameDemoStatePaintable!.getOwnershipPaintableInterface()!.setBasicColorP(basicColor);
    
scrollSelectionForm!.setButtonBasicColor(basicColor);
    

    var item: ABTextItem;;
    

    var stringComponent: ABStringComponent;;
    




                        for (
    var index: number = scrollSelectionForm!.size() -1;index >= 0; index--)
        {
item= scrollSelectionForm!.get(index) as ABTextItem;
    
stringComponent= item.getLabelStringComponent();
    

                        if(stringComponent != 
                                    null
                                )
                        
                                    {
                                    stringComponent!.setForegroundBasicColor(basicColor);
    

                                    }
                                
}

}


}



