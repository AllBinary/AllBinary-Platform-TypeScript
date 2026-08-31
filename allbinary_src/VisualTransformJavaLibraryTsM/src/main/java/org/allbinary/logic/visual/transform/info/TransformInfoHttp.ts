
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { AbContext } from '../../../../../../org/allbinary/business/context/AbContext.js';
      //not GWT import const AbContext = globalThis.org.allbinary.business.context.AbContext;

      
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { RequestParams } from '../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
import { WeblisketSessionInterface } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSessionInterface.js';
      //not GWT import const WeblisketSessionInterface = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionInterface;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlData } from '../../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
      //not GWT import const AbSqlData = globalThis.org.allbinary.logic.communication.sql.AbSqlData;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { TransformInfoObjectConfig } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js';
      //not GWT import const TransformInfoObjectConfig = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfig;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfo } from './TransformInfo.js';
//not GWT import const TransformInfo = globalThis.org.allbinary.logic.visual.transform.info.TransformInfo;

                import { TransformInfoHttpInterface } from './TransformInfoHttpInterface.js';
//not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

                import { TransformInfoData } from './TransformInfoData.js';
//not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

                
export class TransformInfoHttp extends TransformInfo implements TransformInfoHttpInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abContext: AbContext;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext, crud: boolean){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, PageContext, boolean)");
    

                                    }
                                
this.override(propertiesHashMap);
    
}


public constructor (request: HttpServletRequest, propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HttpServletRequest, HashMap, PageContext)");
    

                                    }
                                
this.set(new RequestParams(request as HttpServletRequest).toHashMap());
    
this.override(propertiesHashMap);
    
}


public constructor (databaseHashMap: HashMap<any, any>, propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, HashMap, PageContext)");
    

                                    }
                                
this.set(databaseHashMap);
    
}


public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(propertiesHashMap, pageContext);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +propertiesHashMap!.toString(), this, "Constructor(HashMap, PageContext)");
    

                                    }
                                
this.set(propertiesHashMap);
    
}


public constructor (parentViewOfThisTransformInfoInterface: TransformInfoHttp){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abContext= new AbContext(parentViewOfThisTransformInfoInterface!.getPropertiesHashMap(), parentViewOfThisTransformInfoInterface!.getPageContext());
    
}


                //@Throws(Exception.constructor)
            
    set(hashMap: HashMap<any, any>){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Properties HashMap: " +hashMap!.toString(), this, "set()");
    

                                    }
                                

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    
this.setName(hashMap!.get(transformInfoData!.NAME) as string);
    
this.setStoreName(hashMap!.get(StoreFrontData.getInstance()!.NAME) as string);
    
this.setObjectFile(hashMap!.get(transformInfoData!.OBJECTFILENAME) as string);
    
this.setObject(hashMap!.get(transformInfoData!.OBJECT) as string);
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

    var objectConfigString: string = hashMap!.get(transformInfoData!.OBJECTCONFIG) as string;;
    

                        if(stringValidationUtil!.isValidRequired(objectConfigString, 10, AbSqlData.MAXBLOB))
                        
                                    {
                                    this.setObjectConfig(objectConfigString);
    

                                    }
                                
                        else {
                            this.setObjectConfig(new TransformInfoObjectConfig(this).toString());
    

                        }
                            

                        if(!stringValidationUtil!.isEmpty(hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME) as string))
                        
                                    {
                                    this.setObjectConfigFile(hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME) as string);
    

                                    }
                                
this.setTemplateFile(hashMap!.get(transformInfoData!.TEMPLATEFILENAME) as string);
    
this.setTemplate(hashMap!.get(transformInfoData!.TEMPLATE) as string);
    
this.setDataFile(hashMap!.get(transformInfoData!.DATAFILENAME) as string);
    
this.setData(hashMap!.get(transformInfoData!.DATA) as string);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, "set()");
    

                                    }
                                
}


    public getWeblisketSession(): WeblisketSessionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getWeblisketSession();;
    
}


    public getPageContext(): PageContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPageContext();;
    
}


    public getPropertiesHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abContext!.getPropertiesHashMap();;
    
}


                //@Throws(Exception.constructor)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getTemplateFile());
    
}


                //@Throws(Exception.constructor)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getObjectConfigFile());
    
}


                //@Throws(Exception.constructor)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH, this.getDataFile());
    
}


}



