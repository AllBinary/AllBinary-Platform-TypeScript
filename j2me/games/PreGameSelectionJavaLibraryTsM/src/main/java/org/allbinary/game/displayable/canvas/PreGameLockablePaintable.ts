
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
        
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { GameFeatureImageCacheFactory } from '../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
      const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;

      
//not game specific package import { LockedResources } from '../../../../../org/allbinary/logic/system/security/licensing/LockedResources.js';
      const LockedResources = globalThis.org.allbinary.logic.system.security.licensing.LockedResources;

      
//not game specific package import { LockedUtil } from '../../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
      const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;

      
//not game specific package import { LockablePaintable } from '../../../../../org/allbinary/graphics/form/LockablePaintable.js';
      const LockablePaintable = globalThis.org.allbinary.graphics.form.LockablePaintable;

      
//not game specific package import { ScrollCurrentSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js';
      const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PreGameLockablePaintable extends LockablePaintable {
        

    private readonly halfWidth: number;

    private readonly paintableForm: ScrollCurrentSelectionForm;

public constructor (paintableForm: ScrollCurrentSelectionForm, lockedIndex: number){
            super(lockedIndex);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.paintableForm= paintableForm;
    
this.halfWidth= GameFeatureImageCacheFactory.getInstance()!.getWithKey(LockedResources.getInstance()!.LOCKED_DEMO_GAME_FEATURE_RESOURCE)!.getWidth() /2;
    
}


    public paint(graphics: Graphics, currentIndex: number, x: number, y: number){

                        if(LockedUtil.getInstance()!.isLocked() && this.getPaintableForm()!.getSelectedIndex() >= this.getLockedIndex())
                        
                                    {
                                    this.getAnimation()!.paintXY(graphics, this.getPaintableForm()!.getDx() -this.halfWidth, this.getPaintableForm()!.getDy() +34);
    

                                    }
                                
}


    getPaintableForm(): ScrollCurrentSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paintableForm;
    
}


}
                
            

