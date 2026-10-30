
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { TransformInfoEntity } from '../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
//not GWT import const TransformInfoEntity

import { TransformInfoEntityBuilder } from '../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
//not GWT import const TransformInfoEntityBuilder

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoData } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData

import { TransformInfoHttpFactory } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpFactory.js';
//not GWT import const TransformInfoHttpFactory

import { TransformInfoHttpInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface

import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { TransformInfoObjectFactory } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js';
//not GWT import const TransformInfoObjectFactory

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInterface } from './TransformInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInterface

export class TransformFactory
            extends Object
         {
        

    private static readonly instance: TransformFactory = new TransformFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 3 && typeof args[1] === 'string') return this.getInstance$overload2(args[0], args[1], args[2]);
   
    if (args.length === 3) return this.getInstance$overload3(args[0], args[1], args[2]);
   
    if (args.length === 2) return this.getInstance$overload4(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, viewName: string, ownerTransformInfoInterface: TransformInfoInterface): TransformInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +viewName, this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    let ownerTransformInfoHttpInterface: TransformInfoHttpInterface = ownerTransformInfoInterface as TransformInfoHttpInterface;;
    

    let transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(viewName, ownerTransformInfoHttpInterface!.getPropertiesHashMap(), ownerTransformInfoHttpInterface!.getPageContext())!;;
    

                        if(transformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Such View In DB: " +viewName);
                    

                                    }
                                
transformInfoInterface!.setChild();
    

    let anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +viewName, this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInterface{

 try { 
    let transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    let transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    let transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(propertiesHashMap!.get(transformInfoData!.NAME) as string, propertiesHashMap, pageContext)!;;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    transformInfoInterface!.override(propertiesHashMap);
    

                                    }
                                
                        else {
                            transformInfoInterface= TransformInfoHttpFactory.getInstance(propertiesHashMap, pageContext) as TransformInfoInterface;
    

                        }
                            

    let anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(propertiesHashMap!.get(TransformInfoData.getInstance()!.NAME) as string);
    
stringBuffer!.append("->TransformFactory");
    
this.logUtil!.put(stringBuffer!.toString(), this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload4(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)");
    

                                    }
                                

    let anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(TransformInfoInterface)", e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

