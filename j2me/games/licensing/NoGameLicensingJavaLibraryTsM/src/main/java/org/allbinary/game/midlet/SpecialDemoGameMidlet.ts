
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
        



import { ClientInformationFactory } from "../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js";

    
import { LicenseServerInitFileUtil } from "../../../../org/allbinary/logic/system/security/licensing/LicenseServerInitFileUtil.js";

    
import { RunnableInterface } from "../../../../org/allbinary/thread/RunnableInterface.js";

    

export class SpecialDemoGameMidlet extends DemoGameMidlet {
        
public constructor (clientInformationFactory: ClientInformationFactory, licenseLoadingType: LicenseLoadingType)                        

                            : super(clientInformationFactory){

            super();
                //var clientInformationFactory = clientInformationFactory
    //var licenseLoadingType = licenseLoadingType


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (clientInformationFactory: ClientInformationFactory, licenseLoadingType: LicenseLoadingType, demoSetup: DemoSetup, licenseCheckRunnable: RunnableInterface)                        

                            : super(clientInformationFactory){

            super();
                //var clientInformationFactory = clientInformationFactory
    //var licenseLoadingType = licenseLoadingType
    //var demoSetup = demoSetup
    //var licenseCheckRunnable = licenseCheckRunnable


                            //For kotlin this is before the body of the constructor.
                    
}


    public initView(){
}


    public preInit(){
LicenseServerInitFileUtil().
                            init();
    
}


}
                
            

