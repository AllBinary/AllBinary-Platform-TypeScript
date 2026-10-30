
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { DomDocumentHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { CryptFileReader } from '../../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigData
import { TransformInfoObjectConfig } from './TransformInfoObjectConfig.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfig
import { TransformInfoObjectConfigInterface } from './TransformInfoObjectConfigInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigInterface

export class TransformInfoObjectConfigNoManipulationFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoObjectConfigNoManipulationFactory = new TransformInfoObjectConfigNoManipulationFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoObjectConfigNoManipulationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectConfigNoManipulationFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{

 try { 
    let transformInfoObjectConfigData: TransformInfoObjectConfigData = TransformInfoObjectConfigData.getInstance()!;;
    

    let data: string = new CryptFileReader(transformInfoObjectConfigData!.UNCRYPTED_EXTENSION, transformInfoObjectConfigData!.getInstance()!.ENCRYPTED_EXTENSION).get(objectConfigFileAbPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoObjectConfig(transformInfoInterface, DomDocumentHelper.create(data));
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Load Object Config", this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

