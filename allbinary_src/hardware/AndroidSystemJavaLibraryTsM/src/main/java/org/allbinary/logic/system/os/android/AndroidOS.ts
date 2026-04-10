
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
        
        


    
                        if(SDK_VERSION > 10)
                        
                                    {
                                    this.scalable= true

                                    }
                                

    var properties: AndroidSystemProperties = AndroidSystemProperties.getInstance()!;
        
        


    var commonStrings: CommonSeps = CommonSeps.getInstance()!;
        
        

append(DEVICE_ID)
append(commonStrings!.EQUALS)
append(properties.getDeviceId())
append(commonStrings!.SPACE)
append(DEVICE_SOFTWARE_VERSION)
append(commonStrings!.EQUALS)
append(properties.getDeviceSoftwareVersion())
append(commonStrings!.SPACE)
append(LINE_1_NUMBER)
append(commonStrings!.EQUALS)
append(properties.getLine1Number())
append(commonStrings!.SPACE)
append("NetworkCountryIso")
append(commonStrings!.EQUALS)
append(properties.getNetworkCountryIso())
append(commonStrings!.SPACE)
append("NetworkOperator")
append(commonStrings!.EQUALS)
append(properties.getNetworkOperator())
append(commonStrings!.SPACE)
append("NetworkOperatorName")
append(commonStrings!.EQUALS)
append(properties.getNetworkOperatorName())
append(commonStrings!.SPACE)
append("NetworkType")
append(commonStrings!.EQUALS)
append(properties.getNetworkType())
append(commonStrings!.SPACE)
append("PhoneType")
append(commonStrings!.EQUALS)
append(properties.getPhoneType())
append(commonStrings!.SPACE)
append("SimCountryIso")
append(commonStrings!.EQUALS)
append(properties.getSimCountryIso())
append(commonStrings!.SPACE)
append("SimOperator")
append(commonStrings!.EQUALS)
append(properties.getSimOperator())
append(commonStrings!.SPACE)
append("SimOperatorName")
append(commonStrings!.EQUALS)
append(properties.getSimOperatorName())
append(commonStrings!.SPACE)
append("SimSerialNumber")
append(commonStrings!.EQUALS)
append(properties.getSimSerialNumber())
append(commonStrings!.SPACE)
append("SubscriberId")
append(commonStrings!.EQUALS)
append(properties.getSubscriberId())
append(commonStrings!.SPACE)
append("VoiceMailAlphaTag")
append(commonStrings!.EQUALS)
append(properties.getVoiceMailAlphaTag())
append(commonStrings!.SPACE)
append("VoiceMailNumber")
append(commonStrings!.EQUALS)
append(properties.getVoiceMailNumber())
append(commonStrings!.SPACE)
}


    private readonly OUYA: string = "ouya";
        
        

    public isOverScan(): boolean{

    var properties: AndroidSystemProperties = AndroidSystemProperties.getInstance()!;
        
        


    
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
        
        

append(super.toString())
append(CommonSeps.getInstance()!.SPACE)
append("Other System Info: \n")
append(this.stringBuffer!.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();
    
}


}
                
            

