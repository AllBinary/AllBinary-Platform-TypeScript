
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
        
//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GL } from '../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicColor } from '../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BasicColorSetUtil } from '../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
//not game specific package import { OpenGLSurfaceChangedInterface } from '../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnimationInterface } from './AnimationInterface.js';

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



