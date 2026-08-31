
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      //not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
import { Init } from '../../../../org/allbinary/init/Init.js';
      //not GWT import const Init = globalThis.org.allbinary.init.Init;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InGameOptionsForm } from './InGameOptionsForm.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.InGameOptionsForm;

                
export class InGameOptionsFormFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): InGameOptionsFormFactory{

                        if(InGameOptionsFormFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    InGameOptionsFormFactory.instance= new InGameOptionsFormFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InGameOptionsFormFactory.instance as InGameOptionsFormFactory;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private SINGLETON: CommandForm = CommandForm.getNullCommandForm()!;

    public init(commandListener: CommandListener, initInterface: Init, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){

        try {
            
                        if(this.SINGLETON == CommandForm.getNullCommandForm())
                        
                                    {
                                    initInterface!.init();
    
this.SINGLETON= new InGameOptionsForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


    public get(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SINGLETON;
    
}


}



