
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ItemPaintable } from '../../../../../org/allbinary/graphics/form/ItemPaintable.js';
//not GWT import const ItemPaintable = globalThis.org.allbinary.graphics.form.ItemPaintable;

      
import { ItemPaintableFactory } from '../../../../../org/allbinary/graphics/form/ItemPaintableFactory.js';
//not GWT import const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

      
import { PaintableForm } from '../../../../../org/allbinary/graphics/form/PaintableForm.js';
//not GWT import const PaintableForm = globalThis.org.allbinary.graphics.form.PaintableForm;

      
import { ScrollCurrentSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js';
//not GWT import const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PreGameLockablePaintable } from './PreGameLockablePaintable.js';
//not GWT import - same folder const PreGameLockablePaintable = globalThis.org.allbinary.game.displayable.canvas.PreGameLockablePaintable;

                
export class PreGameLockableFormPaintableFactory extends ItemPaintableFactory {
        

    private readonly lockedIndex: number;

public constructor (lockedIndex: number){

            super();
        this.lockedIndex= lockedIndex;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceItemPaintable(paintableForm: PaintableForm): ItemPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PreGameLockablePaintable(paintableForm as ScrollCurrentSelectionForm, this.lockedIndex);
    
}


}



