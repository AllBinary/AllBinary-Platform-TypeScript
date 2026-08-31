
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
        
            import { Class } from '../../../../../java/lang/Class.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeFactory } from '../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
      //not GWT import const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowWrapper } from './WorkFlowWrapper.js';
//not GWT import const  = globalThis.org.allbinary.logic.control.workflow.WorkFlowWrapper;

                import { WorkFlowInterface } from './WorkFlowInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

                
export class NewWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: NewWorkFlowFactory = new NewWorkFlowFactory();

    public static getInstance(): NewWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NewWorkFlowFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>, pageContext: PageContext): WorkFlowInterface{

        try {
            
    var className: string = hashMap!.get(DynamicObjectData.NAME) as string;;
    

    var params: any[] = new Array(2);;
    

    var classes: Function[] = new Array(2);;
    
classes[0]= hashMap!.constructor;
    
classes[1]= AbeFactory.getInstance()!.constructor;
    
params[0]= hashMap;
    
params[1]= pageContext;
    

    var anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, classes, params)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

                                    }
                                



                            throw e;
                    
}
*/
}


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, className: string): WorkFlowInterface{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

                        if(className != 
                                    null
                                 && className!.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    
    var anyType: any = AbeFactory.getInstance()!.getInstance(abeClientInformation, className, 
                            null, 
                            null)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new WorkFlowWrapper(anyType) as WorkFlowInterface;
    

                                    }
                                
                             else 
                        if()
                        

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                            throw e;
                    
}
*/
}


}



