
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
        
import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm

import { Init } from '../../../../org/allbinary/init/Init.js';
//not GWT import const Init

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InGameOptionsForm } from './InGameOptionsForm.js';
//sameFolderImports - not GWT import - same folder const InGameOptionsForm

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
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    

 }
   }
 
}


    public get(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SINGLETON;
    
}


}

