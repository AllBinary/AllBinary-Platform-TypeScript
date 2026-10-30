
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
        
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LastKeyAIVisitor extends Visitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly TRUE: Boolean = BooleanFactory.getInstance()!.TRUE;

public constructor (){

            super();
        }


    public visit(anyType: any): any{

 try { 
    let basicAI: BasicAI = anyType as BasicAI;;
    

    let key: number = basicAI!.getLastKey()!;;
    

                        if(key !=  -1)
                        
                                    {
                                    basicAI!.processKeyAI(key);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.VISIT, e);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TRUE;
    
}


}

