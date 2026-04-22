
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
        



import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CanvasStrings
            extends Object
         {
        

    private static readonly instance: CanvasStrings = new CanvasStrings();
        
        

    public static getInstance(): CanvasStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly CONSTRUCTOR: string = "MyCanvas::MyCanvas";
        
        

    public readonly PAUSE: string = "MyCanvas::pause";
        
        

    public readonly UN_PAUSE: string = "MyCanvas::unPause";
        
        

    public readonly SET_FULL_SCREEN_MODE: string = "setFullScreenMode";
        
        

    public readonly SIZE_CHANGED: string = "sizeChanged";
        
        

    public readonly SCALED_IMAGES: string = "scaledImages";
        
        

    public readonly PAINT: string = "paint";
        
        

    public readonly ON_DISPLAY_CHANGE_EVENT: string = "onDisplayChangeEvent";
        
        

    public readonly EMPTY_CHILD_NAME_LIST: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    public readonly ABOUT: string = "About";
        
        

    public readonly OPTIONS: string = "Options";
        
        

    public readonly FONT_ATLAS: string = "/font.png";
        
        

    public readonly OBJ_MODEL: string = "_obj";
        
        

    public readonly MD2_MODEL: string = "_md2";
        
        

    public readonly _PNG: string = ".png";
        
        

}
                
            

