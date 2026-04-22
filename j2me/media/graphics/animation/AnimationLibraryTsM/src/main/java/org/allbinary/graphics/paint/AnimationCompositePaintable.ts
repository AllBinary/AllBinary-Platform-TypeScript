
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InitUpdatePaintable } from "./InitUpdatePaintable.js";

export class AnimationCompositePaintable extends InitUpdatePaintable {
        

    private readonly animationInterface: Animation
public constructor (animationInterface: Animation){

            super();
        var animationInterface = animationInterface
this.animationInterface= animationInterface;
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paint(graphics, 0, 0);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
this.animationInterface!.paintThreed(graphics, 0, 0, 0);
    
}


}
                
            

