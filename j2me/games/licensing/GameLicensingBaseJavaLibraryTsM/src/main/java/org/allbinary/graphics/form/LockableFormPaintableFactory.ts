
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import - same folder const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

                import { LockablePaintable } from './LockablePaintable.js';
//not GWT import - same folder const LockablePaintable = globalThis.org.allbinary.graphics.form.LockablePaintable;

                import { ItemPaintable } from './ItemPaintable.js';
//not GWT import - same folder const ItemPaintable = globalThis.org.allbinary.graphics.form.ItemPaintable;

                import { PaintableForm } from './PaintableForm.js';
//not GWT import - same folder const PaintableForm = globalThis.org.allbinary.graphics.form.PaintableForm;

                
export class LockableFormPaintableFactory extends ItemPaintableFactory {
        

    private readonly lockedIndex: number;

public constructor (lockedIndex: number){

            super();
        this.lockedIndex= lockedIndex;
    
}


                //@Throws(Exception.constructor)
            
    public getInstanceItemPaintable(paintableForm: PaintableForm): ItemPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LockablePaintable(this.lockedIndex);
    
}


}



