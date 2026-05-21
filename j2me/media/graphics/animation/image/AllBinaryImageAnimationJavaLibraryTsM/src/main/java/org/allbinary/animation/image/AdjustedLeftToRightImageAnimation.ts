
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LeftToRightImageAnimation } from './LeftToRightImageAnimation.js';

export class AdjustedLeftToRightImageAnimation extends LeftToRightImageAnimation {
        

    private dx: number= 0

    private dy: number= 0
public constructor (image: Image, sequenceArray: number[], dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(image, sequenceArray, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init(dx, dy);
    
}


                //@Throws(Exception.constructor)
            
    public init(dx: number, dy: number){
this.dx= dx;
    
this.dy= dy;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x +this.dx, y +this.dy);
    
}


}
                
            

