
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
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { Dimension } from '../../../java/awt/Dimension.js';
      const Dimension = globalThis.java.awt.Dimension;

      
//not game specific package import { DisplayMode } from '../../../java/awt/DisplayMode.js';
      const DisplayMode = globalThis.java.awt.DisplayMode;

      
//not game specific package import { GraphicsDevice } from '../../../java/awt/GraphicsDevice.js';
      const GraphicsDevice = globalThis.java.awt.GraphicsDevice;

      
//not game specific package import { GraphicsEnvironment } from '../../../java/awt/GraphicsEnvironment.js';
      const GraphicsEnvironment = globalThis.java.awt.GraphicsEnvironment;

      
//not game specific package import { Toolkit } from '../../../java/awt/Toolkit.js';
      const Toolkit = globalThis.java.awt.Toolkit;

      
//not game specific package import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DisplaysUtil
            extends Object
         {
        

    public static getInstance(): DisplaysUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DisplaysUtil.instance;
    
}


    private static readonly instance: DisplaysUtil = new DisplaysUtil();

    public getPrimaryScreenSize(): Rectangle{

    var dimension: Dimension = Toolkit.getDefaultToolkit()!.getScreenSize()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, dimension.width, dimension.height);
    
}


    public getScreenSizesAsRectangleArray(): Rectangle[]{

    var graphicsEnvironment: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    var graphicsDeviceArray: GraphicsDevice[] = graphicsEnvironment!.getScreenDevices()!;;
    

    var graphicsDevice: GraphicsDevice;;
    

    var displayMode: DisplayMode;;
    

    var rectangle: Rectangle;;
    

    var size: number = graphicsDeviceArray!.length
                ;;
    

    var rectangleArray: Rectangle[] = new Array(size);;
    




                        for (
    var index: number = 0;index < size; index++)
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



