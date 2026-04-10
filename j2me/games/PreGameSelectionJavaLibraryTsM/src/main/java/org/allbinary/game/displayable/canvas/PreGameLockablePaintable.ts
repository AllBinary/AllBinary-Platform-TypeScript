
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { GameFeatureImageCacheFactory } from "../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js";

    
import { LockedResources } from "../../../../../org/allbinary/logic/system/security/licensing/LockedResources.js";

    
import { LockedUtil } from "../../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js";

    
import { LockablePaintable } from "../../../../../org/allbinary/graphics/form/LockablePaintable.js";

    
import { ScrollCurrentSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollCurrentSelectionForm.js";

    

export class PreGameLockablePaintable extends LockablePaintable {
        

    private readonly halfWidth: number

    private readonly paintableForm: ScrollCurrentSelectionForm
public constructor (paintableForm: ScrollCurrentSelectionForm, lockedIndex: number)                        

                            : super(lockedIndex){

            super();
            var paintableForm = paintableForm
var lockedIndex = lockedIndex


                            //For kotlin this is before the body of the constructor.
                    
this.paintableForm= paintableForm
this.halfWidth= GameFeatureImageCacheFactory.getInstance()!.get(LockedResources.getInstance()!.LOCKED_DEMO_GAME_FEATURE_RESOURCE)!.getWidth() /2
}


    public paint(graphics: Graphics, currentIndex: number, x: number, y: number){
var graphics = graphics
var currentIndex = currentIndex
var x = x
var y = y

                        if(LockedUtil.getInstance()!.isLockedFeature() && this.getPaintableForm()!.getSelectedIndex() >= this.getLockedIndex())
                        
                                    {
                                    this.getAnimation()!.paint(graphics, this.getPaintableForm()!.getDx() -this.halfWidth, this.getPaintableForm()!.getDy() +34)

                                    }
                                
}


    getPaintableForm(): ScrollCurrentSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paintableForm;
    
}


}
                
            

