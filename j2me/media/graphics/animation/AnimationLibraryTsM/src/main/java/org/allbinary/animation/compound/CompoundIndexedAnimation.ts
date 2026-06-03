
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
        
import { GL } from '../../../../javax/microedition/khronos/opengles/GL.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompoundAnimationInterface } from './CompoundAnimationInterface.js';

export class CompoundIndexedAnimation extends IndexedAnimation implements CompoundAnimationInterface {
        

    private circularIndexUtil: CircularIndexUtil;

    private animationInterfaceArray: Animation[];

public constructor (animationInterfaceArray: Animation[], animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterfaceArray= animationInterfaceArray;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.animationInterfaceArray!.length);
    
}


    public setFrame(index: number){

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;;
    
indexedAnimation!.setFrame(index);
    
}


    public getFrame(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getFrame();;
    
}


    public getSize(): number{

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return indexedAnimation!.getSize();;
    
}


    public previousFrame(){

    var indexedAnimation: IndexedAnimation = this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;;
    
indexedAnimation!.previousFrame();
    
}


    public setSequence(sequence: number[]){
}


    public getSequence(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PrimitiveIntUtil.getArrayInstance();;
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.nextFrame();
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintXY(graphics, x, y);
    
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){
this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]!.paintThreedXYZ(graphics, x, y, z);
    
}


    public getCurrentAnimation(): IndexedAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray[this.circularIndexUtil!.getIndex()]! as IndexedAnimation;
    
}


    public nextAnimation(){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.next();
    
this.setFrame(frame);
    
}


    public previousAnimation(){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.previous();
    
this.setFrame(frame);
    
}


    public setAnimation(index: number){

    var frame: number = this.getFrame()!;;
    
this.circularIndexUtil!.setIndex(index);
    
this.setFrame(frame);
    
}


    public getAnimationInterfaceArray(): Animation[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterfaceArray;
    
}


    public setAnimationInterfaceArray(animationInterfaceArray: Animation[]){
this.animationInterfaceArray= animationInterfaceArray;
    
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


}
                
            

