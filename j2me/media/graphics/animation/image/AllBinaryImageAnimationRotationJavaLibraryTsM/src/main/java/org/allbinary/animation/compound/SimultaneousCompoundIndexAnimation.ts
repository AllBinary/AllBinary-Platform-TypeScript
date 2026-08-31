
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
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      //not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SimultaneousCompoundIndexAnimation extends IndexedAnimation {
        

    private animationInterfaceArray: IndexedAnimation[];

public constructor (animationInterfaceArray: IndexedAnimation[], animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray;
    
}


    public setFrame(frameIndex: number){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.setFrame(frameIndex);
    
}

}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getFrame();;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getAnimationSize();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getSize();;
    
}


    public previousFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.previousFrame();
    
}

}


                //@Throws(Exception.constructor)
            
    public nextFrame(){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.nextFrame();
    
}

}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.paintXY(graphics, x, y);
    
}

}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.paintThreedXYZ(graphics, x, y, z);
    
}

}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){




                        for (
    var index: number = this.animationInterfaceArray!.length
                ;--index >= 0; )
        {
this.animationInterfaceArray[index]!.set(gl);
    
}

}


    public getAnimationInterfaceArray(): IndexedAnimation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: IndexedAnimation[]){
this.animationInterfaceArray= animationInterfaceArray;
    
}


}



