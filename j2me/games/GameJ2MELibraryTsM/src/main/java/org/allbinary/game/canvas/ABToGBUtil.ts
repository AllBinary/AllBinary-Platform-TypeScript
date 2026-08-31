
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
      //not GWT import const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ABToGBUtil
            extends Object
         {
        

    private static readonly instance: ABToGBUtil = new ABToGBUtil();

    public static getInstance(): ABToGBUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABToGBUtil.instance;
    
}


    public abCanvas: Canvas = NullCanvas.NULL_CANVAS;

    public allBinaryGameLayerManager: AllBinaryGameLayerManager = AllBinaryGameLayerManager.getNullInstance()!;

}



