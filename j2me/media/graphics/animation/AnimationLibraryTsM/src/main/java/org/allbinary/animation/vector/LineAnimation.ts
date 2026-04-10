
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ColorCompositeInterface } from "../../../../org/allbinary/graphics/color/ColorCompositeInterface.js";

    
import { PositionInterface } from "../../../../org/allbinary/layer/PositionInterface.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    

export class LineAnimation extends Animation
                , ColorCompositeInterface
                , PositionInterface {
        

    private newLine: IntArray[] = Array(2) { IntArray(2) };
        
        

    private tempLine: IntArray[] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;
        
        

    private line: IntArray[] = Array(2) { IntArray(2) };
        
        
public constructor (basicColor: BasicColor){

            super();
            var basicColor = basicColor
this.setBasicColorP(basicColor)
}


    public init(x: number, y: number){
var x = x
var y = y
this.newLine[0]![0]= x
this.newLine[0]![1]= y
this.newLine[1]![0]= x
this.newLine[1]![1]= y
this.tempLine= this.line
this.line= this.newLine
this.newLine= this.tempLine
}


    public setPosition(x: number, y: number, z: number){
var x = x
var y = y
var z = z
this.newLine[0]![0]= this.line[1]![0]!
this.newLine[0]![1]= this.line[1]![1]!
this.newLine[1]![0]= x
this.newLine[1]![1]= y
this.tempLine= this.line
this.line= this.newLine
this.newLine= this.tempLine
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y

    var currentLine: IntArray[] = this.line;
        
        

this.basicSetColorUtil!.setBasicColorP(graphics, this.getBasicColorP(), this.getColor())
graphics.drawLine(currentLine[0]![0]!, currentLine[0]![1]!, currentLine[1]![0]!, currentLine[1]![1]!)
}


    public nextFrame(){
}


}
                
            

