
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      //not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameOptionsForm } from './GameOptionsForm.js';
//not GWT import const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;

                
export class GameOptionsFormFactory
            extends Object
         {
        

    private static readonly instance: GameOptionsFormFactory = new GameOptionsFormFactory();

    public static getInstance(): GameOptionsFormFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameOptionsFormFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    public init(commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor): CommandForm{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameOptionsForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandForm.getNullCommandForm();;
    
}

}


}



