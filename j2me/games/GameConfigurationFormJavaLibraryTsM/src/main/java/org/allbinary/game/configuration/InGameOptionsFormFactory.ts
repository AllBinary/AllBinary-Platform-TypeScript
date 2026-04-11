
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
        



import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { Init } from "../../../../org/allbinary/init/Init.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class InGameOptionsFormFactory
            extends Object
         {
        

    private static readonly instance: InGameOptionsFormFactory = new InGameOptionsFormFactory();
        
        

    public static getInstance(): InGameOptionsFormFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private SINGLETON: CommandForm = CommandForm.NULL_COMMAND_FORM;
        
        

    public init(commandListener: CommandListener, initInterface: Init, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
var commandListener = commandListener
var initInterface = initInterface
var title = title
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor

        try {
            
                        if(SINGLETON == CommandForm.NULL_COMMAND_FORM)
                        
                                    {
                                    initInterface!.init();
    
SINGLETON= new InGameOptionsForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


    public get(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


}
                
            

