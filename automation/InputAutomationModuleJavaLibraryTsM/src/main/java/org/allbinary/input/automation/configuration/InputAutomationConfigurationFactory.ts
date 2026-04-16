
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
        



import { File } from "../../../../../java/io/File.js";

    
import { FileInputStream } from "../../../../../java/io/FileInputStream.js";

    
import { List } from "../../../../../java/util/List.js";

    
import { JAXBContext } from "../../../../../javax/xml/bind/JAXBContext.js";

    
import { JAXBElement } from "../../../../../javax/xml/bind/JAXBElement.js";

    
import { Unmarshaller } from "../../../../../javax/xml/bind/Unmarshaller.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { InputAutomationModuleConfiguration } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { InputAutomationConfiguration } from "./InputAutomationConfiguration.js";

export class InputAutomationConfigurationFactory
            extends Object
         {
        

    private inputAutomationConfiguration: InputAutomationConfiguration = 
                null
            ;
        
        

                //@Throws(Error::class)
            
    public static init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var INPUT_AUTOMATION_CONFIGURATION: string = "InputAutomationConfiguration";
        
        
;
    

    var file: File = InputAutomationConfiguration.getFile()!;
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    logUtil!.putF("LoadingConfiguration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

    var jaxbContext: JAXBContext = JAXBContext.newInstance(InputAutomationConfiguration::class)!;
        
        
;
    

    var unmarshaller: Unmarshaller = jaxbContext!.createUnmarshaller()!;
        
        
;
    

    var root: JAXBElement<InputAutomationConfiguration> = unmarshaller.unmarshal(new StreamSource(new FileInputStream(file)), InputAutomationConfiguration::class)!;
        
        
;
    
inputAutomationConfiguration= root.getValue();

                         as InputAutomationConfiguration;
    

    var inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration> = inputAutomationConfiguration!.getInputAutomationModuleConfigurationList()!;
        
        
;
    
logUtil!.putF("isInstalled: " +inputAutomationConfiguration!.isInstalled(), INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

    var size: number = inputAutomationModuleConfigurationList!.size!;
        
        
;
    

    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
inputAutomationModuleConfiguration= inputAutomationModuleConfigurationList!.get(index);
    
inputAutomationModuleConfiguration!.init(abeClientInformation);
    
}

logUtil!.putF("LoadedConfiguration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

                                    }
                                
                        else {
                            logUtil!.putF("New Configuration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    
inputAutomationConfiguration= new InputAutomationConfiguration();
    

                        }
                            
}


    public static getInstance(): InputAutomationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationConfiguration;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


}
                
            

