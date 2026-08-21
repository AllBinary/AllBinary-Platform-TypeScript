
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
        
import { File } from '../../../../../java/io/File.js';
      
import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
      
import { List } from '../../../../../java/util/List.js';
      
import { JAXBContext } from '../../../../../javax/xml/bind/JAXBContext.js';
      
import { JAXBElement } from '../../../../../javax/xml/bind/JAXBElement.js';
      
import { Unmarshaller } from '../../../../../javax/xml/bind/Unmarshaller.js';
      
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      
import { InputAutomationModuleConfiguration } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationConfiguration } from './InputAutomationConfiguration.js';

export class InputAutomationConfigurationFactory
            extends Object
         {
        

    private static readonly instance: InputAutomationConfigurationFactory = new InputAutomationConfigurationFactory();

    public static getInstance(): InputAutomationConfigurationFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputAutomationConfigurationFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public inputAutomationConfiguration: InputAutomationConfiguration = 
                null
            ;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var INPUT_AUTOMATION_CONFIGURATION: string = "InputAutomationConfiguration";;
    

    var file: File = InputAutomationConfiguration.getFile()!;;
    

                        if(file.isFile())
                        
                                    {
                                    logUtil!.putF("LoadingConfiguration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

    var jaxbContext: JAXBContext = JAXBContext.newInstance(InputAutomationConfiguration.constructor)!;;
    

    var unmarshaller: Unmarshaller = jaxbContext!.createUnmarshaller()!;;
    

    var root: JAXBElement<InputAutomationConfiguration> = unmarshaller.unmarshal(new StreamSource(new FileInputStream(file)), InputAutomationConfiguration.constructor)!;;
    
this.inputAutomationConfiguration= root.getValue() as InputAutomationConfiguration;
    

    var inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration> = this.inputAutomationConfiguration!.getInputAutomationModuleConfigurationList()!;;
    
logUtil!.putF("isInstalled: " +this.inputAutomationConfiguration!.isInstalled() +" inputAutomationModuleConfigurationList: " +inputAutomationModuleConfigurationList, INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

                        if(inputAutomationModuleConfigurationList != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = inputAutomationModuleConfigurationList!.length!;;
    

    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
inputAutomationModuleConfiguration= inputAutomationModuleConfigurationList!.get(index);
    
inputAutomationModuleConfiguration!.init(abeClientInformation);
    
}


                                    }
                                
logUtil!.putF("LoadedConfiguration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

                                    }
                                
                        else {
                            logUtil!.putF("New Configuration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    
this.inputAutomationConfiguration= new InputAutomationConfiguration();
    

                        }
                            
}


}
                
            

