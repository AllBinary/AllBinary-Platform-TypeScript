
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
        



import { Control } from "../../../../javax/microedition/media/Control.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicPlayer } from "./BasicPlayer.js";

export class NoPlayer extends BasicPlayer {
        

    public static readonly NO_PLAYER: NoPlayer = new NoPlayer();
        
        
public constructor (){

            super();
            }


    public close(){
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.NULL_STRING;
    
}


    public getControl(controlType: string): Control{
var controlType = controlType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NullControl();
    
}


    public getControls(): Control[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return [];
    
}


}
                
            

