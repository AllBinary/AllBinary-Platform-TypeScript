
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

      
import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
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

                
export class DbWorkFlowFactory
            extends Object
         {
        

    private static readonly instance: DbWorkFlowFactory = new DbWorkFlowFactory();

    public static getInstance(): DbWorkFlowFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DbWorkFlowFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, hashMap: HashMap<any, any>): WorkFlowInterface{

        try {
            
    var className: string = hashMap!.get(DynamicObjectData.NAME) as string;;
    

    var params: any[] = new Array(1);;
    

    var classes: Function[] = new Array(1);;
    
classes[0]= hashMap!.constructor;
    
params[0]= hashMap;
    

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


}



