
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
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { TransformInfoEntity } from '../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntity.js';
      const TransformInfoEntity = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntity;

      
//not game specific package import { TransformInfoEntityBuilder } from '../../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
      const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { TransformInfoData } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { TransformInfoHttpFactory } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpFactory.js';
      const TransformInfoHttpFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpFactory;

      
//not game specific package import { TransformInfoHttpInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { TransformInfoObjectFactory } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoObjectFactory.js';
      const TransformInfoObjectFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoObjectFactory;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInterface } from './TransformInterface.js';

export class TransformFactory
            extends Object
         {
        

    private static readonly instance: TransformFactory = new TransformFactory();

    public static getInstance(): TransformFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, viewName: string, ownerTransformInfoInterface: TransformInfoInterface): TransformInterface{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +viewName, this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var ownerTransformInfoHttpInterface: TransformInfoHttpInterface = ownerTransformInfoInterface as TransformInfoHttpInterface;;
    

    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(viewName, ownerTransformInfoHttpInterface!.getPropertiesHashMap(), ownerTransformInfoHttpInterface!.getPageContext())!;;
    

                        if(transformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Such View In DB: " +viewName);
                    

                                    }
                                
transformInfoInterface!.setChild();
    

    var anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +viewName, this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInterface{

        try {
            
    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var transformInfoEntity: TransformInfoEntity = TransformInfoEntityBuilder.getInstance()!;;
    

    var transformInfoInterface: TransformInfoInterface = transformInfoEntity!.get(propertiesHashMap!.get(transformInfoData!.NAME) as string, propertiesHashMap, pageContext)!;;
    

                        if(transformInfoInterface != 
                                    null
                                )
                        
                                    {
                                    transformInfoInterface!.override(propertiesHashMap);
    

                                    }
                                
                        else {
                            transformInfoInterface= TransformInfoHttpFactory.getInstance(propertiesHashMap, pageContext) as TransformInfoInterface;
    

                        }
                            

    var anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +propertiesHashMap!.get(transformInfoData!.NAME), this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Failed To Get Instance: ");
    
stringBuffer!.append(propertiesHashMap!.get(TransformInfoData.getInstance()!.NAME) as string);
    
stringBuffer!.append("->TransformFactory");
    
this.logUtil!.put(stringBuffer!.toString(), this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInterface{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Creating Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)");
    

                                    }
                                

    var anyType: any = TransformInfoObjectFactory.getInstance()!.getInstance(abeClientInformation, transformInfoInterface)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Created Transform: " +transformInfoInterface!.getName(), this, "getInstance(TransformInfoInterface)");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType as TransformInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(TransformInfoInterface)", e);
    

                                    }
                                



                            throw e;
                    
}

}


}
                
            

