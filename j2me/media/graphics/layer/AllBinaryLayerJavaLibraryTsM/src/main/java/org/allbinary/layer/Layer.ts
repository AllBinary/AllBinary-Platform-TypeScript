
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
        



import { Graphics } from "../../../javax/microedition/lcdui/Graphics.js";

    
import { CanvasStrings } from "../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class Layer
            extends Object
         {
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    x: number= 0

    y: number= 0

    z: number = 3;
        
        

    private width: number= 0

    private height: number= 0

    private visible: boolean = true;
        
        
public constructor (width: number, height: number){

            super();
            var width = width
var height = height
setLayerWidth(width)
setLayerHeight(height)
}


    public setPosition(x: number, y: number, z: number){
var x = x
var y = y
var z = z
this.x= x
this.y= y
this.z= z
}


    public move(dx: number, dy: number){
    //var dx = dx
    //var dy = dy
this.x += dx
this.y += dy
}


    public move(dx: number, dy: number, dz: number){
var dx = dx
var dy = dy
var dz = dz
this.x += dx
this.y += dy
this.z += dz
}


    public getXP(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public getYP(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public getZP(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return z;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return height;
    
}


    public getDepth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setVisible(visible: boolean){
var visible = visible
this.visible= visible
}


    public isVisible(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return visible;
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.NOT_IMPLEMENTED, this, canvasStrings!.PAINT)
}


    setLayerWidth(width: number){
var width = width

                        if(width < 0)
                        
                                    {
                                    


                            throw IllegalArgumentException()

                                    }
                                
this.width= width
}


    setLayerHeight(height: number){
var height = height

                        if(height < 0)
                        
                                    {
                                    


                            throw IllegalArgumentException()

                                    }
                                
this.height= height
}


    public toString(stringBuffer: StringMaker){
    //var stringBuffer = stringBuffer
}


}
                
            

