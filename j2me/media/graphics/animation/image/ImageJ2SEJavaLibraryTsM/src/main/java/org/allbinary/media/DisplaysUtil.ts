
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
        



import { Dimension } from "../../../java/awt/Dimension.js";

    
import { DisplayMode } from "../../../java/awt/DisplayMode.js";

    
import { GraphicsDevice } from "../../../java/awt/GraphicsDevice.js";

    
import { GraphicsEnvironment } from "../../../java/awt/GraphicsEnvironment.js";

    
import { Toolkit } from "../../../java/awt/Toolkit.js";

    
import { PointFactory } from "../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../org/allbinary/graphics/Rectangle.js";

    

export class DisplaysUtil
            extends Object
         {
        

    public static getInstance(): DisplaysUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly instance: DisplaysUtil = new DisplaysUtil();
        
        

    public getPrimaryScreenSize(): Rectangle{

    var dimension: Dimension = Toolkit.getDefaultToolkit()!.getScreenSize()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, dimension.width, dimension.height);
    
}


    public getScreenSizesAsRectangleArray(): Rectangle[]{

    var graphicsEnvironment: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;
        
        
;
    

    var graphicsDeviceArray: GraphicsDevice[] = graphicsEnvironment!.getScreenDevices()!;
        
        
;
    

    var graphicsDevice: GraphicsDevice
;
    

    var displayMode: DisplayMode
;
    

    var rectangle: Rectangle
;
    

    var size: number = graphicsDeviceArray!.length
                ;
        
        
;
    

    var rectangleArray: Rectangle[] = new Array(size);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
graphicsDevice= graphicsDeviceArray[index]!;
    
displayMode= graphicsDevice!.getDisplayMode();
    
rectangle= new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, displayMode!.getWidth(), displayMode!.getHeight());
    
rectangleArray[index]= rectangle;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangleArray;
    
}


}
                
            

