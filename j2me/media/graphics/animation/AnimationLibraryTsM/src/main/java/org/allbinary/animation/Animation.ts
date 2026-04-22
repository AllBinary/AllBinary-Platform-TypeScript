
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
        



import { GL } from "../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicColor } from "../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { OpenGLSurfaceChangedInterface } from "../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnimationInterface } from "./AnimationInterface.js";

export class Animation
            extends Object
         implements AnimationInterface, OpenGLSurfaceChangedInterface {
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    colorP: number= 0

    changeBasicColorP: BasicColor = BasicColorFactory.getInstance()!.NULL_COLOR;
        
        

    changeColorP: number= 0

    public alphaP: number= 0
protected constructor (){

            super();
        }


    public setAlpha(alpha: number){
    //var alpha = alpha
this.alphaP= alpha;
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
}


    public paintThreed(graphics: Graphics, x: number, y: number, z: number){
    //var graphics = graphics
    //var x = x
    //var y = y
    //var z = z
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
    //var basicColor = basicColor
this.basicColor= basicColor;
    
this.colorP= this.basicColor!.toInt();
    
}


    public getChangeBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.changeBasicColorP;
    
}


    public changeBasicColor(basicColor: BasicColor){
    //var basicColor = basicColor
this.changeBasicColorP= basicColor;
    
this.changeColorP= this.changeBasicColorP!.toInt();
    
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
    //var scaleX = scaleX
    //var scaleY = scaleY
}


    public setMaxScale(maxScaleX: number, maxScaleY: number){
    //var maxScaleX = maxScaleX
    //var maxScaleY = maxScaleY
}


                //@Throws(Error::class)
            
    public set(gl: GL){
var gl = gl
}


    public setDx(dx: number){
    //var dx = dx
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setDy(dy: number){
    //var dy = dy
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

