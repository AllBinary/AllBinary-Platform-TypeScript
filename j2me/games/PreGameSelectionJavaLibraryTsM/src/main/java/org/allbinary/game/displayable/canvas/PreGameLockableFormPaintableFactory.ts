
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
        



import { ItemPaintable } from "../../../../../org/allbinary/graphics/form/ItemPaintable.js";

    
import { ItemPaintableFactory } from "../../../../../org/allbinary/graphics/form/ItemPaintableFactory.js";

    
import { PaintableForm } from "../../../../../org/allbinary/graphics/form/PaintableForm.js";

    
import { ScrollCurrentSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PreGameLockableFormPaintableFactory extends ItemPaintableFactory {
        

    private readonly lockedIndex: number
public constructor (lockedIndex: number){

            super();
            var lockedIndex = lockedIndex
this.lockedIndex= lockedIndex;
    
}


                //@Throws(Error::class)
            
    public getInstance(paintableForm: PaintableForm): ItemPaintable{
var paintableForm = paintableForm



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PreGameLockablePaintable(paintableForm as ScrollCurrentSelectionForm, this.lockedIndex);
    
}


}
                
            

