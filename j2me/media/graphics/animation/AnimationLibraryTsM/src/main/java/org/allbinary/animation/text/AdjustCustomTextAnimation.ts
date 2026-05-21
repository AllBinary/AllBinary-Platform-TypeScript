
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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


        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomTextAnimation } from './CustomTextAnimation.js';

export class AdjustCustomTextAnimation extends CustomTextAnimation {
        

    private dx: number

    private dy: number
public constructor (text: string, fontSize: number, dx: number, dy: number, animationBehavior: AnimationBehavior){
            super(text, fontSize, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.dx= dx;
    
this.dy= dy;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dx;
    
}


    public setDx(dx: number){
this.dx= dx;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dy;
    
}


    public setDy(dy: number){
this.dy= dy;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
super.paintXY(graphics, x +this.dx, y +this.dy);
    
}


}
                
            

