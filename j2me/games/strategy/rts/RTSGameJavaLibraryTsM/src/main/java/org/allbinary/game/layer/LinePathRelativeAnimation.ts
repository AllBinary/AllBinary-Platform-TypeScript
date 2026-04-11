
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    

export class LinePathRelativeAnimation extends LinePathAnimation {
        

    private static readonly instance: LinePathRelativeAnimation = new LinePathRelativeAnimation();
        
        

    public static getInstance(): LinePathAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public paint(graphics: Graphics, point: GPoint, nextPoint: GPoint, tiledLayer: Layer){
    //var graphics = graphics
    //var point = point
    //var nextPoint = nextPoint
    //var tiledLayer = tiledLayer
graphics.drawLine(nextPoint!.getX() -tiledLayer!.getXP(), nextPoint!.getY() -tiledLayer!.getYP(), point.getX() -tiledLayer!.getXP(), point.getY() -tiledLayer!.getYP());
    
}


}
                
            

