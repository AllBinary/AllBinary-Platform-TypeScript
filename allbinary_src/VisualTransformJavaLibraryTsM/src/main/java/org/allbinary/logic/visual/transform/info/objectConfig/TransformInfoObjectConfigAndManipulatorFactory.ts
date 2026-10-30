
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

import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigAndManipulatorFactoryBase } from './TransformInfoObjectConfigAndManipulatorFactoryBase.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigAndManipulatorFactoryBase
import { TransformInfoObjectConfigData } from './TransformInfoObjectConfigData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigData
import { TransformInfoObjectConfigInterface } from './TransformInfoObjectConfigInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigInterface
import { TransformInfoObjectConfig } from './TransformInfoObjectConfig.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfig
import { GenericStoreTransformInfoObjectConfig } from './GenericStoreTransformInfoObjectConfig.js';
//sameFolderImports - not GWT import - same folder const GenericStoreTransformInfoObjectConfig

export class TransformInfoObjectConfigAndManipulatorFactory extends TransformInfoObjectConfigAndManipulatorFactoryBase {
        

    private static readonly instance: TransformInfoObjectConfigAndManipulatorFactory = new TransformInfoObjectConfigAndManipulatorFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3) return this.getInstance$overload2(args[0], args[1], args[2]);
   
    if (args.length === 2) return this.getInstance$overload3(args[0], args[1]);
   
    if (args.length === 3) return this.getInstance$overload4(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoObjectConfigAndManipulatorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectConfigAndManipulatorFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{

 try { 
    let data: string = new CryptFileReader(TransformInfoObjectConfigData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectConfigData.getInstance()!.ENCRYPTED_EXTENSION).get(objectConfigFileAbPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(abeClientInformation, transformInfoInterface, DomDocumentHelper.create(data));;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Load Object Config", getInstance(), this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigInterface{

 try { 
    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericStoreTransformInfoObjectConfig(abeClientInformation, transformInfoInterface) as TransformInfoObjectConfigInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoObjectConfig(transformInfoInterface) as TransformInfoObjectConfigInterface;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed To Get Instance: ";;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName();
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, getInstance(), commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload4(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, document: Document): TransformInfoObjectConfigInterface{

 try { 
    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(transformInfoInterface != 
                                    null
                                 && !stringValidationUtil!.isEmpty(transformInfoInterface!.getStoreName()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GenericStoreTransformInfoObjectConfig(abeClientInformation, transformInfoInterface, document) as TransformInfoObjectConfigInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoObjectConfig(transformInfoInterface, document) as TransformInfoObjectConfigInterface;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed To Get Instance: ";;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    error= error +transformInfoInterface!.getName();
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, getInstance(), "getInstance(document)", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

