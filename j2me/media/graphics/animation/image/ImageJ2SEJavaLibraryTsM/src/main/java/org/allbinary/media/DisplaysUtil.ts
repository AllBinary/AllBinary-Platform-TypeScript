
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
        
import { Dimension } from '../../../java/awt/Dimension.js';
//not GWT import const Dimension

import { DisplayMode } from '../../../java/awt/DisplayMode.js';
//not GWT import const DisplayMode

import { GraphicsDevice } from '../../../java/awt/GraphicsDevice.js';
//not GWT import const GraphicsDevice

import { GraphicsEnvironment } from '../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment

import { Toolkit } from '../../../java/awt/Toolkit.js';
//not GWT import const Toolkit

import { PointFactory } from '../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle

















                                        
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

    let dimension: Dimension = Toolkit.getDefaultToolkit()!.getScreenSize()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, dimension.width, dimension.height);
    
}


    public getScreenSizesAsRectangleArray(): Rectangle[]{

    let graphicsEnvironment: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    let graphicsDeviceArray: GraphicsDevice[] = graphicsEnvironment!.getScreenDevices()!;;
    

    let graphicsDevice: GraphicsDevice;;
    

    let displayMode: DisplayMode;;
    

    let rectangle: Rectangle;;
    

    let size: number = graphicsDeviceArray!.length
                ;;
    

    let rectangleArray: Rectangle[] = new Array(size);;
    




                        for (
    let index: number = 0;index < size; index++)
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

