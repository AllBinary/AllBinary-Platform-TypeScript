
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { GameStatisticsFactory } from "../../../../../org/allbinary/canvas/GameStatisticsFactory.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { InitUpdatePaintable } from "../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    

export class GamePerformanceInitUpdatePaintable extends InitUpdatePaintable {
        

    private readonly halfHeight: number = DisplayInfoSingleton.getInstance()!.getLastHalfHeight()!;
        
        

    private readonly yArray: IntArray = intArrayOf(halfHeight +30,halfHeight +30,halfHeight +30 +15,halfHeight +30 +15,halfHeight +30 +30,halfHeight +30 +30,halfHeight +30 +45,halfHeight +30 +45);
        
        

    private baseRefreshHelperCharArray: string[][] = new Array(0) { new Array(0) };
        
        

    public init(){
}


    public update(){
baseRefreshHelperCharArray= GameStatisticsFactory.getInstance()!.toCharArray()
}


    private readonly RED: number = BasicColorFactory.getInstance()!.RED.toInt()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        

graphics.setColor(RED)

    var charArray: string[]


    var charArray2: string[]


    var size2: number= 0


    var size3: number= 0


    var size: number = baseRefreshHelperCharArray!.length -2;
        
        





                        for (
    var index: number = size;
        
        
index >= 0; )
        {
charArray= baseRefreshHelperCharArray[index]!
charArray2= baseRefreshHelperCharArray[index +1]!
size2= charArray!.length
size3= charArray2!.length
graphics.drawChars(charArray, 0, size2, 0, yArray[index]!, 0)
graphics.drawChars(charArray2, 0, size3, size2 *myFont!.stringWidth(2), yArray[index +1]!, 0)
}

}


}
                
            

