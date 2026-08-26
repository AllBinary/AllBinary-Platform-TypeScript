
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
        



//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ColorCompositeInterface } from '../../../../org/allbinary/graphics/color/ColorCompositeInterface.js';
      const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;

      
//not game specific package import { PositionInterface } from '../../../../org/allbinary/layer/PositionInterface.js';
      const PositionInterface = globalThis.org.allbinary.layer.PositionInterface;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LineAnimation extends Animation implements ColorCompositeInterface, PositionInterface {
        

    private newLine: number[][] = new Array(2).fill(null).map(() => new Array(2).fill(0));

    private tempLine: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    private line: number[][] = new Array(2).fill(null).map(() => new Array(2).fill(0));

public constructor (basicColor: BasicColor){

            super();
        this.setBasicColorP(basicColor);
    
}


    public init(x: number, y: number){
this.newLine[0]![0]= x;
    
this.newLine[0]![1]= y;
    
this.newLine[1]![0]= x;
    
this.newLine[1]![1]= y;
    
this.tempLine= this.line;
    
this.line= this.newLine;
    
this.newLine= this.tempLine;
    
}


    public setPosition(x: number, y: number, z: number){
this.newLine[0]![0]= this.line[1]![0]!;
    
this.newLine[0]![1]= this.line[1]![1]!;
    
this.newLine[1]![0]= x;
    
this.newLine[1]![1]= y;
    
this.tempLine= this.line;
    
this.line= this.newLine;
    
this.newLine= this.tempLine;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){

    var currentLine: number[][] = this.line;;
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    
graphics.drawLine(currentLine[0]![0]!, currentLine[0]![1]!, currentLine[1]![0]!, currentLine[1]![1]!);
    
}


    public nextFrame(){
}


}
                
            

