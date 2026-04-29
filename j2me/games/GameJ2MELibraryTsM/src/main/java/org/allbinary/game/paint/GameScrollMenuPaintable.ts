
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
        



import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ColorChangeEventHandler } from "../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js";

    
import { ColorChangeListener } from "../../../../org/allbinary/graphics/color/ColorChangeListener.js";

    
import { FormPaintable } from "../../../../org/allbinary/graphics/form/FormPaintable.js";

    
import { ScrollSelectionForm } from "../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { StringComponent } from "../../../../org/allbinary/graphics/form/item/StringComponent.js";

    
import { TextItem } from "../../../../org/allbinary/graphics/form/item/TextItem.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicGameDemoPaintable } from "./BasicGameDemoPaintable.js";

export class GameScrollMenuPaintable extends BasicGameDemoPaintable implements ColorChangeListener {
        
public constructor (mainDemoStatePaintable: Paintable, ownershipPaintable: Paintable, helpPaintableInterface: Paintable, basicColor: BasicColor){
            super(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface);
                    var mainDemoStatePaintable = mainDemoStatePaintable
var ownershipPaintable = ownershipPaintable
var helpPaintableInterface = helpPaintableInterface
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.setColor(basicColor);
    
ColorChangeEventHandler.getInstance()!.addListener(this);
    
}


    public setState(state: number){
var state = state
this.setCurrentStatePaintable(this.getMainDemoStatePaintable());
    
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
}


    setColor(basicColor: BasicColor){
var basicColor = basicColor

    var mainGameDemoStatePaintable: MainGameDemoStatePaintable =  as MainGameDemoStatePaintablethis.getMainDemoStatePaintable();;
;
    

    var formPaintable: FormPaintable =  as FormPaintablemainGameDemoStatePaintable!.getMenuPaintableInterface();;
;
    

    var scrollSelectionForm: ScrollSelectionForm =  as ScrollSelectionFormformPaintable!.getForm();;
;
    
mainGameDemoStatePaintable!.getOwnershipPaintableInterface()!.setBasicColorP(basicColor);
    
scrollSelectionForm!.setButtonBasicColor(basicColor);
    




                        for (
    var index: number = scrollSelectionForm!.size() -1;
index >= 0; index--)
        {

    var item: TextItem =  as TextItemscrollSelectionForm!.get(index);;
;
    

    var stringComponent: StringComponent = item.getLabelStringComponent()!;
;
    

                        if(stringComponent != 
                                    null
                                )
                        
                                    {
                                    stringComponent!.setForegroundBasicColor(basicColor);
    

                                    }
                                
}

}


}
                
            

