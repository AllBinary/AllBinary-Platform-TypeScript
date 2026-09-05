
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GL } from '../../../javax/microedition/khronos/opengles/GL.js';
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { BasicColorSetUtil } from '../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
import { OpenGLSurfaceChangedInterface } from '../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
//not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterface } from './AnimationInterface.js';
//not GWT import - same folder const AnimationInterface = globalThis.org.allbinary.animation.AnimationInterface;

                
export class Animation
            extends Object
         implements AnimationInterface, OpenGLSurfaceChangedInterface {
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    colorP: number= 0;

    changeBasicColorP: BasicColor = BasicColorFactory.getInstance()!.NULL_COLOR;

    changeColorP: number= 0;

    public alphaP: number= 0;

public constructor (){

            super();
        }


    public setAlpha(alpha: number){
this.alphaP= alpha;
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){
}


    public isThreed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
this.colorP= this.basicColor!.intValue();
    
}


    public setBackgroundBasicColorP(basicColor: BasicColor){
}


    public getChangeBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changeBasicColorP;
    
}


    public changeBasicColor(basicColor: BasicColor){
this.changeBasicColorP= basicColor;
    
this.changeColorP= this.changeBasicColorP!.intValue();
    
}


    public getChangeColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changeColorP;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.colorP;
    
}


    public setScale(scaleX: number, scaleY: number){
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){
}


    public setDx(dx: number){
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setDy(dy: number){
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}



