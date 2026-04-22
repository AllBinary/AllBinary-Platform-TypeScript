
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { LockedResources } from "../../../../org/allbinary/logic/system/security/licensing/LockedResources.js";

    
import { LockedUtil } from "../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ItemPaintable } from "./ItemPaintable.js";

export class LockablePaintable extends ItemPaintable {
        

    private readonly animation: Animation = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(LockedResources.getInstance()!.LOCKED_DEMO_GAME_FEATURE_RESOURCE)!.getInstance(0)!;
        
        

    private readonly lockedIndex: number
public constructor (lockedIndex: number){

            super();
        var lockedIndex = lockedIndex
this.lockedIndex= lockedIndex;
    
}


    public paint(graphics: Graphics, currentIndex: number, x: number, y: number){
var graphics = graphics
var currentIndex = currentIndex
var x = x
var y = y

                        if(LockedUtil.getInstance()!.isLockedFeature() && currentIndex >= this.getLockedIndex())
                        
                                    {
                                    this.getAnimation()!.paint(graphics, x, y);
    

                                    }
                                
}


    getLockedIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lockedIndex;
    
}


    getAnimation(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animation;
    
}


}
                
            

