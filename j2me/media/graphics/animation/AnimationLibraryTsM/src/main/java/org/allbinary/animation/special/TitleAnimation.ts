
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { IndexedAnimationBehavior } from "../../../../org/allbinary/animation/IndexedAnimationBehavior.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PrimitiveIntUtil } from "../../../../org/allbinary/logic/math/PrimitiveIntUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SpecialAnimation } from "./SpecialAnimation.js";

export class TitleAnimation extends SpecialAnimation {
        

    public static create(animationInterfaceArray: IndexedAnimation[], basicColorArray: BasicColor[], dxArray: number[], dyArray: number[], y: number, width: number): TitleAnimation{
    //var animationInterfaceArray = animationInterfaceArray
    //var basicColorArray = basicColorArray
    //var dxArray = dxArray
    //var dyArray = dyArray
    //var y = y
    //var width = width



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TitleAnimation(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width, new IndexedAnimationBehavior(1, 250));
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public deltaX: number= 0.0f

    public deltaY: number= 0.0f

    public deltaZ: number= 0.0f

    readonly basicColorArray: BasicColor[]

    readonly dxArray: number[]

    readonly dyArray: number[]

    readonly widthP: number

    readonly animationInterfaceArray: IndexedAnimation[]

    readonly sizeP: number

    readonly y: number

    private lastFrameStartTime: number

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
public constructor (animationInterfaceArray: IndexedAnimation[], basicColorArray: BasicColor[], dxArray: number[], dyArray: number[], y: number, width: number, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var animationInterfaceArray = animationInterfaceArray
    //var basicColorArray = basicColorArray
    //var dxArray = dxArray
    //var dyArray = dyArray
    //var y = y
    //var width = width
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.lastFrameStartTime= System.currentTimeMillis();
    
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

    var currentTime: number = System.currentTimeMillis()!;
        
        
;
    

    var totalTimeElapsed: number = currentTime -this.lastFrameStartTime;
        
        
;
    

    var indexedAnimationBehavior: IndexedAnimationBehavior = this.getAnimationBehavior(); as IndexedAnimationBehavior;
        
        
;
    

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

    var indexedAnimationBehavior: IndexedAnimationBehavior = this.getAnimationBehavior(); as IndexedAnimationBehavior;
        
        
;
    

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
    //var sequence = sequence
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
    //var frame = frame




                        for (
    var index: number = 0;
        
        
index < this.sizeP; index++)
        {
this.animationInterfaceArray[index]!.setFrame(frame);
    
}

}


    public setLastFrame(){
this.setFrame(this.getSize() -1);
    
}


    public reset(){
this.setLastFrame();
    

    var indexedAnimationBehavior: IndexedAnimationBehavior = (this.getAnimationBehavior(); as IndexedAnimationBehavior);
        
        
;
    
indexedAnimationBehavior!.reset();
    
}


    public previousFrame(){




                        for (
    var index: number = 0;
        
        
index < this.sizeP; index++)
        {
this.animationInterfaceArray[index]!.previousFrame();
    
}

}


    public paint(graphics: Graphics, frame: number, x: number, y: number){
    //var graphics = graphics
    //var frame = frame
    //var x = x
    //var y = y
this.setFrame(frame);
    
this.paint(graphics, x, y);
    
}


    readonly CLEAR_COLOR: BasicColor = BasicColorFactory.getInstance()!.CLEAR_COLOR;
        
        

    public paint(graphics: Graphics, ax: number, ay: number){
    //var graphics = graphics
    //var ax = ax
    //var ay = ay

    var x: number = 0;
        
        
;
    

                        if(this.widthP != Integer.MIN_VALUE)
                        
                                    {
                                    x= ((displayInfoSingleton!.getLastWidth() -this.widthP) /2);
    

                                    }
                                

    var deltaX: number= 0
;
    

    var deltaY: number= 0
;
    




                        for (
    var index: number = 0;
        
        
index < this.sizeP; index++)
        {
deltaX= this.dxArray[index] +x;
    
deltaY= this.dyArray[index] +this.y;
    

                        if(this.basicColorArray[index] != this.CLEAR_COLOR)
                        
                                    {
                                    this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColorArray[index]!);
    

                                    }
                                
this.animationInterfaceArray[index]!.paint(graphics, deltaX, deltaY);
    
}

}


}
                
            

