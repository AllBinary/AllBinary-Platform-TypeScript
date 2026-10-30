
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { TransformInfoEntity } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
//not GWT import const TransformInfoEntity

import { TransformInfoEntityBuilder } from '../../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfoObjectFactory } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js';
//not GWT import const TransformInfoObjectFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformTemplateInterface } from './TransformTemplateInterface.js';
//not GWT import - same folder const TransformTemplateInterface

export class TransformTemplateFactory
            extends Object
         {
        

    private static readonly instance: TransformTemplateFactory = new TransformTemplateFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 4 && typeof args[1] === 'string') return this.getInstance$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformTemplateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformTemplateFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, templateName: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformTemplateInterface{

 try { 
    let transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(templateName, propertiesHashMap, pageContext)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface) as TransformTemplateInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed To Get Instance";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(error +templateName +"->TemplateFactory", this, "getInstance(viewName, HashMap, PageContext)", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

