
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
        
export class CaptionAnimation extends Animation {
        

    private readonly animationInterface: Animation

    private readonly overlayAnimationInterface: Animation

    private readonly captionDx: number

    private readonly captionDy: number

    private readonly dx: number

    private readonly dy: number
public constructor (animationInterface: Animation, overlayAnimationInterface: Animation, captionDx: number, captionDy: number, dx: number, dy: number){

            super();
                //var animationInterface = animationInterface
    //var overlayAnimationInterface = overlayAnimationInterface
    //var captionDx = captionDx
    //var captionDy = captionDy
    //var dx = dx
    //var dy = dy
this.animationInterface= animationInterface;
    
this.overlayAnimationInterface= overlayAnimationInterface;
    
this.captionDx= captionDx;
    
this.captionDy= captionDy;
    
this.dx= dx;
    
this.dy= dy;
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.animationInterface!.paint(graphics, x +this.captionDx, y +this.captionDy);
    
this.overlayAnimationInterface!.paint(graphics, x +this.captionDx +dx, y +this.captionDy +dy);
    
}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z
this.animationInterface!.paintThreed(graphics, x +this.captionDx, y +this.captionDy, z);
    
this.overlayAnimationInterface!.paintThreed(graphics, x +this.captionDx +dx, y +this.captionDy +dy, z);
    
}


}
                
            

