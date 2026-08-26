
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
//not game specific package import { Init } from '../../../../org/allbinary/init/Init.js';
      const Init = globalThis.org.allbinary.init.Init;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InGameOptionsForm } from './InGameOptionsForm.js';

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
                
            

