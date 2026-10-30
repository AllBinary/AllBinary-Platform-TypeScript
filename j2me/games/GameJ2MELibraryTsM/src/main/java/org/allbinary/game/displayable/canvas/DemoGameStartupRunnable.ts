
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { ABRunnable } from '../../../../../org/allbinary/thread/ABRunnable.js';
//not GWT import const ABRunnable

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoCanvas } from './DemoCanvas.js';
//sameFolderImports - not GWT import - same folder const DemoCanvas

export class DemoGameStartupRunnable extends ABRunnable {
        

    public static readonly TYPE: number = 4;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly demoCanvas: DemoCanvas;

public constructor (demoCanvas: DemoCanvas){

            super();
        this.demoCanvas= demoCanvas;
    
}


    public run(){

 try { this.setRunning(true);
    
this.demoCanvas!.stopGameDemo();
    
this.demoCanvas!.create();
    
this.demoCanvas!.start();
    
this.setRunning(false);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.setRunning(false);
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DemoGameStartupRunnable.TYPE;
    
}


}

