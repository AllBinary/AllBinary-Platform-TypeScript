
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
//not GWT import const File

import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
//not GWT import const FileInputStream

import { List } from '../../../../../java/util/List.js';
//not GWT import const List

import { JAXBContext } from '../../../../../javax/xml/bind/JAXBContext.js';
//not GWT import const JAXBContext

import { JAXBElement } from '../../../../../javax/xml/bind/JAXBElement.js';
//not GWT import const JAXBElement

import { Unmarshaller } from '../../../../../javax/xml/bind/Unmarshaller.js';
//not GWT import const Unmarshaller

import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource

import { InputAutomationModuleConfiguration } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
//not GWT import const InputAutomationModuleConfiguration

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationConfiguration } from './InputAutomationConfiguration.js';
//not GWT import - same folder const InputAutomationConfiguration

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

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let INPUT_AUTOMATION_CONFIGURATION: string = "InputAutomationConfiguration";;
    

    let file: File = InputAutomationConfiguration.getFile()!;;
    

                        if(file.isFile())
                        
                                    {
                                    logUtil!.putF("LoadingConfiguration", INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

    let jaxbContext: JAXBContext = JAXBContext.newInstance(InputAutomationConfiguration)!;;
    

    let unmarshaller: Unmarshaller = jaxbContext!.createUnmarshaller()!;;
    

    let root: JAXBElement<InputAutomationConfiguration> = unmarshaller.unmarshal(new StreamSource(new FileInputStream(file)), InputAutomationConfiguration)!;;
    
this.inputAutomationConfiguration= root.getValue() as InputAutomationConfiguration;
    

    let inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration> = this.inputAutomationConfiguration!.getInputAutomationModuleConfigurationList()!;;
    
logUtil!.putF("isInstalled: " +this.inputAutomationConfiguration!.isInstalled() +" inputAutomationModuleConfigurationList: " +inputAutomationModuleConfigurationList, INPUT_AUTOMATION_CONFIGURATION, commonStrings!.INIT);
    

                        if(inputAutomationModuleConfigurationList != 
                                    null
                                )
                        
                                    {
                                    
    let size: number = inputAutomationModuleConfigurationList!.length!;;
    

    let inputAutomationModuleConfiguration: InputAutomationModuleConfiguration;;
    




                        for (
    let index: number = 0;index < size; index++)
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

