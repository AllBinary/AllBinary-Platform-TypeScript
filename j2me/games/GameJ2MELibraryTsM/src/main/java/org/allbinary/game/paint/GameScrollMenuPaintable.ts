
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
      const ColorChangeEventHandler = globalThis.org.allbinary.graphics.color.ColorChangeEventHandler;

      
//not game specific package import { ColorChangeListener } from '../../../../org/allbinary/graphics/color/ColorChangeListener.js';
      const ColorChangeListener = globalThis.org.allbinary.graphics.color.ColorChangeListener;

      
//not game specific package import { FormPaintable } from '../../../../org/allbinary/graphics/form/FormPaintable.js';
      const FormPaintable = globalThis.org.allbinary.graphics.form.FormPaintable;

      
//not game specific package import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { ABStringComponent } from '../../../../org/allbinary/graphics/form/item/ABStringComponent.js';
      const ABStringComponent = globalThis.org.allbinary.graphics.form.item.ABStringComponent;

      
//not game specific package import { ABTextItem } from '../../../../org/allbinary/graphics/form/item/ABTextItem.js';
      const ABTextItem = globalThis.org.allbinary.graphics.form.item.ABTextItem;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGameDemoPaintable } from './BasicGameDemoPaintable.js';
import { MainGameDemoStatePaintable } from './MainGameDemoStatePaintable.js';

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
                
            

