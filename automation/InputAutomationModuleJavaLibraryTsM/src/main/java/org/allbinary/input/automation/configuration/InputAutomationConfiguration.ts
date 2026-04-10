
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

    
import { List } from "../../../../../java/util/List.js";

    
import { JAXBContext } from "../../../../../javax/xml/bind/JAXBContext.js";

    
import { Marshaller } from "../../../../../javax/xml/bind/Marshaller.js";

    
import { XmlAccessType } from "../../../../../javax/xml/bind/annotation/XmlAccessType.js";

    
import { XmlAccessorType } from "../../../../../javax/xml/bind/annotation/XmlAccessorType.js";

    
import { XmlElement } from "../../../../../javax/xml/bind/annotation/XmlElement.js";

    
import { XmlRootElement } from "../../../../../javax/xml/bind/annotation/XmlRootElement.js";

    
import { XmlType } from "../../../../../javax/xml/bind/annotation/XmlType.js";

    
import { DomDocumentFileHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { InputAutomationModuleConfiguration } from "../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileUtil } from "../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { FileWrapperUtil } from "../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    

export class InputAutomationConfiguration
            extends Object
         {
        

    private static readonly FILENAME: string = "InputAutomationConfig.xml";
        
        

    public static getFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return File(FILENAME);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private installed: boolean= false

    private inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration>
public constructor (){

            super();
            }


    public isInstalled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return installed;
    
}


    public setInstalled(installed: boolean){
var installed = installed
this.installed= installed
logUtil!.put("Installed: " +installed, this, "setIntalled")
}


    public getInputAutomationModuleConfigurationList(): List<InputAutomationModuleConfiguration>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationModuleConfigurationList;
    
}


                //@Throws(Error::class)
            
    public save(){

    var document: Document = DomDocumentHelper.create()!;
        
        


                    //Otherwise - statement - EmptyStmt


    var file: File = new File(FILENAME);
        
        

FileUtil.getInstance()!.copy(AbPath(file.getAbsolutePath()), AbPath(file.getAbsolutePath() +".bak.xml"))

    var jaxbContext: JAXBContext = JAXBContext.newInstance(InputAutomationConfiguration::class)!;
        
        


    var marshaller: Marshaller = jaxbContext!.createMarshaller()!;
        
        

marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true)
marshaller.marshal(this, document)
DomDocumentFileHelper.save(FileWrapperUtil.wrapFile(file), document)
}


}
                
            

