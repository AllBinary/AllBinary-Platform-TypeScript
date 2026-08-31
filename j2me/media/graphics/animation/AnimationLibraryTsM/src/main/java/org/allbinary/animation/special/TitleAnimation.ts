
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
        



            import { System } from '../../../../java/lang/System.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { IndexedAnimationBehavior } from '../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
      //not GWT import const IndexedAnimationBehavior = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialAnimation } from './SpecialAnimation.js';

export class TitleAnimation extends SpecialAnimation {
        

    public static createAnimation(animationInterfaceArray: IndexedAnimation[], basicColorArray: BasicColor[], dxArray: number[], dyArray: number[], y: number, width: number): TitleAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TitleAnimation(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width, new IndexedAnimationBehavior(1, 250));
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public deltaX: number= 0.0;

    public deltaY: number= 0.0;

    public deltaZ: number= 0.0;

    readonly basicColorArray: BasicColor[];

    readonly dxArray: number[];

    readonly dyArray: number[];

    readonly widthP: number;

    readonly animationInterfaceArray: IndexedAnimation[];

    readonly sizeP: number;

    readonly y: number;

    private lastFrameStartTime: number;

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

public constructor (animationInterfaceArray: IndexedAnimation[], basicColorArray: BasicColor[], dxArray: number[], dyArray: number[], y: number, width: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.lastFrameStartTime= Date.now();
    
this.animationInterfaceArray= animationInterfaceArray;
    
this.sizeP= this.animationInterfaceArray!.length;
    
this.basicColorArray= basicColorArray;
    
this.dxArray= dxArray;
    
this.dyArray= dyArray;
    
this.y= y;
    
this.widthP= width;
    
this.reset();
    
}


    public nextFrame(){

    var currentTime: number = Date.now()!;;
    

    var totalTimeElapsed: number = currentTime -this.lastFrameStartTime;;
    

    var indexedAnimationBehavior: IndexedAnimationBehavior = this.getAnimationBehavior() as IndexedAnimationBehavior;;
    

                        if(totalTimeElapsed > indexedAnimationBehavior!.frameDelayTime)
                        
                                    {
                                    this.previousFrame();
    
this.lastFrameStartTime= currentTime;
    

                                    }
                                

                        if(this.animationInterfaceArray[0]!.getFrame() == 0)
                        
                                    {
                                    indexedAnimationBehavior!.loopIndex++;
    

                                    }
                                
}


    public isComplete(): boolean{

    var indexedAnimationBehavior: IndexedAnimationBehavior = this.getAnimationBehavior() as IndexedAnimationBehavior;;
    

                        if(indexedAnimationBehavior!.loopTotal ==  -1 || indexedAnimationBehavior!.loopIndex < indexedAnimationBehavior!.loopTotal || this.getFrame() != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getSize();;
    
}


    public getFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[0]!.getFrame();;
    
}


    public setFrame(frame: number){




                        for (
    var index: number = 0;index < this.sizeP; index++)
        {
this.animationInterfaceArray[index]!.setFrame(frame);
    
}

}


    public setLastFrame(){
this.setFrame(this.getSize() -1);
    
}


    public reset(){
this.setLastFrame();
    

    var indexedAnimationBehavior: IndexedAnimationBehavior = (this.getAnimationBehavior() as IndexedAnimationBehavior);;
    
indexedAnimationBehavior!.reset();
    
}


    public previousFrame(){




                        for (
    var index: number = 0;index < this.sizeP; index++)
        {
this.animationInterfaceArray[index]!.previousFrame();
    
}

}


    public paintFrameXY(graphics: Graphics, frame: number, x: number, y: number){
this.setFrame(frame);
    
this.paintXY(graphics, x, y);
    
}


    readonly CLEAR_COLOR: BasicColor = BasicColorFactory.getInstance()!.CLEAR_COLOR;

    public paintXY(graphics: Graphics, ax: number, ay: number){

    var x: number = 0;;
    

                        if(this.widthP != Integer.MIN_VALUE)
                        
                                    {
                                    x= ((this.displayInfoSingleton!.getLastWidth() -this.widthP) /2);
    

                                    }
                                

    var deltaX: number= 0;;
    

    var deltaY: number= 0;;
    




                        for (
    var index: number = 0;index < this.sizeP; index++)
        {
deltaX= this.dxArray[index] +x;
    
deltaY= this.dyArray[index] +this.y;
    

                        if(this.basicColorArray[index] != this.CLEAR_COLOR)
                        
                                    {
                                    this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColorArray[index]!);
    

                                    }
                                
this.animationInterfaceArray[index]!.paintXY(graphics, deltaX, deltaY);
    
}

}


}



