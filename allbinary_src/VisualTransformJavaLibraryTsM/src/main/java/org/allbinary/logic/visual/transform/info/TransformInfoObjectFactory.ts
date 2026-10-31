
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
        
            //import { Class } from '../../../../../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { TransformInterface } from '../../../../../../org/allbinary/logic/visual/transform/TransformInterface.js';
//not GWT import const TransformInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoInterface } from './TransformInfoInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoInterface

export class TransformInfoObjectFactory
            extends Object
         {
        

    private static readonly instance: TransformInfoObjectFactory = new TransformInfoObjectFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): TransformInfoObjectFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoObjectFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInterface{

 try { 
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("Creating View: " +transformInfoInterface!.getName(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                

    let params: any[] = new Array(1);;
    

    let classes: Function[] = new Array(1);;
    
classes[0]= 
                                    //Otherwise - expression - AssignExpr - value - ClassExpr
;
    
params[0]= transformInfoInterface;
    

    let anyType: TransformInterface = AbeFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface!.getObjectFile(), classes, params) as TransformInterface;;
    

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    
                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("\nNo Such View Name: ");
    
stringBuffer!.append(transformInfoInterface!.getName());
    
stringBuffer!.append("\nNo Such View Object: ");
    
stringBuffer!.append(transformInfoInterface!.getObjectFile());
    



                            throw new Exception(stringBuffer!.toString());
                    

                                    }
                                
                        else {
                            


                            throw new Exception("No Such View Object since transformInfo is null");
                    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
 }
 catch (caught: any) {
 if (caught instanceof LicensingException) {
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
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(error, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
  else {
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
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(error, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


}

