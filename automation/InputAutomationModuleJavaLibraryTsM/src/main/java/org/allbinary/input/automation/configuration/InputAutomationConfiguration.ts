
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
        
//not game specific package import { File } from '../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { List } from '../../../../../java/util/List.js';
      const List = globalThis.java.util.List;

      
//not game specific package import { JAXBContext } from '../../../../../javax/xml/bind/JAXBContext.js';
      const JAXBContext = globalThis.javax.xml.bind.JAXBContext;

      
//not game specific package import { Marshaller } from '../../../../../javax/xml/bind/Marshaller.js';
      const Marshaller = globalThis.javax.xml.bind.Marshaller;

      
//not game specific package import { XmlAccessType } from '../../../../../javax/xml/bind/annotation/XmlAccessType.js';
      const XmlAccessType = globalThis.javax.xml.bind.annotation.XmlAccessType;

      
//not game specific package import { XmlAccessorType } from '../../../../../javax/xml/bind/annotation/XmlAccessorType.js';
      const XmlAccessorType = globalThis.javax.xml.bind.annotation.XmlAccessorType;

      
//not game specific package import { XmlElement } from '../../../../../javax/xml/bind/annotation/XmlElement.js';
      const XmlElement = globalThis.javax.xml.bind.annotation.XmlElement;

      
//not game specific package import { XmlRootElement } from '../../../../../javax/xml/bind/annotation/XmlRootElement.js';
      const XmlRootElement = globalThis.javax.xml.bind.annotation.XmlRootElement;

      
//not game specific package import { XmlType } from '../../../../../javax/xml/bind/annotation/XmlType.js';
      const XmlType = globalThis.javax.xml.bind.annotation.XmlType;

      
//not game specific package import { DomDocumentFileHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
      const DomDocumentFileHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentFileHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { InputAutomationModuleConfiguration } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
      const InputAutomationModuleConfiguration = globalThis.org.allbinary.input.automation.module.configuration.InputAutomationModuleConfiguration;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { FileUtil } from '../../../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { FileWrapperUtil } from '../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
      const FileWrapperUtil = globalThis.org.allbinary.logic.io.file.FileWrapperUtil;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //name="inputAutomationConfiguration", 
export class InputAutomationConfiguration
            extends Object
         {
        

    private static readonly FILENAME: string = "InputAutomationConfig.xml";

    public static getFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new File(FILENAME);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private installed: boolean= false;

    private inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration>;

public constructor (){

            super();
        }


    public isInstalled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.installed;
    
}


    public setInstalled(installed: boolean){
this.installed= installed;
    
this.logUtil!.putF("Installed: " +installed, this, "setIntalled");
    
}


    public getInputAutomationModuleConfigurationList(): List<InputAutomationModuleConfiguration>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputAutomationModuleConfigurationList;
    
}


                //@Throws(Exception.constructor)
            
    public save(){

    var document: Document = DomDocumentHelper.create()!;;
    

                    //Otherwise - statement - EmptyStmt


    var file: File = new File(FILENAME);;
    
FileUtil.getInstance()!.copy(new AbPath(file.getAbsolutePath(), StringUtil.getInstance()!.EMPTY_STRING), new AbPath(file.getAbsolutePath() +".bak.xml", StringUtil.getInstance()!.EMPTY_STRING));
    

    var jaxbContext: JAXBContext = JAXBContext.newInstance(InputAutomationConfiguration.constructor)!;;
    

    var marshaller: Marshaller = jaxbContext!.createMarshaller()!;;
    
marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
    
marshaller.marshal(this, document);
    
DomDocumentFileHelper.save(FileWrapperUtil.wrapFile(file), document);
    
}


}
                
            

