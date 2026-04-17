
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
        



import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MouseStrings
            extends Object
         {
        

    private static readonly instance: MouseStrings = new MouseStrings();
        
        

    public static getInstance(): MouseStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly MOUSE_PRESSED: string = "mousePressed";
        
        

    public readonly MOUSE_RELEASED: string = "mouseReleased";
        
        

    public readonly MOUSE_CLICKED: string = "mouseClicked";
        
        

    public readonly MOUSE_DRAGGED: string = "mouseDragged";
        
        

    public readonly MOUSE_MOVED: string = "mouseMoved";
        
        

    public readonly MOUSE_PRESSED_LABEL: string = "MousePressed" +CommonSeps.getInstance()!.COLON_SEP;
        
        

    public readonly MOUSE_RELEASED_LABEL: string = "MouseReleased" +CommonSeps.getInstance()!.COLON_SEP;
        
        

    public readonly MOUSE_CLICKED_LABEL: string = "MouseClicked" +CommonSeps.getInstance()!.COLON_SEP;
        
        

    public readonly MOUSE_DRAGGED_LABEL: string = "MouseDragged" +CommonSeps.getInstance()!.COLON_SEP;
        
        

    public readonly MOUSE_MOVED_LABEL: string = "MouseMoved" +CommonSeps.getInstance()!.COLON_SEP;
        
        

}
                
            

