
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
        



import { AndroidInfoFactory } from "../../../../../../org/allbinary/android/AndroidInfoFactory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GenericOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

export class AndroidOS extends GenericOperatingSystem {
        

    private stringBuffer: StringBuilder = new StringBuilder();
        
        

    private readonly DEVICE_ID: string = "DeviceId";
        
        

    private readonly DEVICE_SOFTWARE_VERSION: string = "DeviceSoftwareVersion";
        
        

    private readonly LINE_1_NUMBER: string = "Line1Number";
        
        
public constructor (){

            super();
            
    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        
;
    

                        if(SDK_VERSION > 10)
                        
                                    {
                                    this.scalable= true;
    

                                    }
                                

    var properties: AndroidSystemProperties = AndroidSystemProperties.getInstance()!;
        
        
;
    

    var commonStrings: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuffer!.append(DEVICE_ID);
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getDeviceId());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append(DEVICE_SOFTWARE_VERSION);
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getDeviceSoftwareVersion());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append(LINE_1_NUMBER);
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getLine1Number());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("NetworkCountryIso");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getNetworkCountryIso());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("NetworkOperator");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getNetworkOperator());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("NetworkOperatorName");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getNetworkOperatorName());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("NetworkType");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getNetworkType());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("PhoneType");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getPhoneType());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("SimCountryIso");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getSimCountryIso());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("SimOperator");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getSimOperator());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("SimOperatorName");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getSimOperatorName());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("SimSerialNumber");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getSimSerialNumber());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("SubscriberId");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getSubscriberId());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("VoiceMailAlphaTag");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getVoiceMailAlphaTag());
    
stringBuffer!.append(commonStrings!.SPACE);
    
stringBuffer!.append("VoiceMailNumber");
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.append(properties.getVoiceMailNumber());
    
stringBuffer!.append(commonStrings!.SPACE);
    
}


    private readonly OUYA: string = "ouya";
        
        

    public isOverScan(): boolean{

    var properties: AndroidSystemProperties = AndroidSystemProperties.getInstance()!;
        
        
;
    

                        if(properties.getDevice()!.lowercase()!.indexOf(OUYA) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getOverScanXPercent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 90;
    
}


    public getOverScanYPercent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 90;
    
}


    public toString(): string{

    var osBuffer: StringMaker = new StringMaker();
        
        
;
    
osBuffer!.append(super.toString());
    
osBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
osBuffer!.append("Other System Info: \n");
    
osBuffer!.append(this.stringBuffer!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();

                        ;
    
}


}
                
            

