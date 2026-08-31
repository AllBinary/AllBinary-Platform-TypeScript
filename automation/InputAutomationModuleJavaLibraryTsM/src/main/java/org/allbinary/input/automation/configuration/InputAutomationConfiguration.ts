
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
      //not GWT import const File = globalThis.java.io.File;

      
import { List } from '../../../../../java/util/List.js';
      //not GWT import const List = globalThis.java.util.List;

      
import { JAXBContext } from '../../../../../javax/xml/bind/JAXBContext.js';
      //not GWT import const JAXBContext = globalThis.javax.xml.bind.JAXBContext;

      
import { Marshaller } from '../../../../../javax/xml/bind/Marshaller.js';
      //not GWT import const Marshaller = globalThis.javax.xml.bind.Marshaller;

      
import { XmlAccessType } from '../../../../../javax/xml/bind/annotation/XmlAccessType.js';
      //not GWT import const XmlAccessType = globalThis.javax.xml.bind.annotation.XmlAccessType;

      
import { XmlAccessorType } from '../../../../../javax/xml/bind/annotation/XmlAccessorType.js';
      //not GWT import const XmlAccessorType = globalThis.javax.xml.bind.annotation.XmlAccessorType;

      
import { XmlElement } from '../../../../../javax/xml/bind/annotation/XmlElement.js';
      //not GWT import const XmlElement = globalThis.javax.xml.bind.annotation.XmlElement;

      
import { XmlRootElement } from '../../../../../javax/xml/bind/annotation/XmlRootElement.js';
      //not GWT import const XmlRootElement = globalThis.javax.xml.bind.annotation.XmlRootElement;

      
import { XmlType } from '../../../../../javax/xml/bind/annotation/XmlType.js';
      //not GWT import const XmlType = globalThis.javax.xml.bind.annotation.XmlType;

      
import { DomDocumentFileHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
      //not GWT import const DomDocumentFileHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentFileHelper;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { InputAutomationModuleConfiguration } from '../../../../../org/allbinary/input/automation/module/configuration/InputAutomationModuleConfiguration.js';
      //not GWT import const InputAutomationModuleConfiguration = globalThis.org.allbinary.input.automation.module.configuration.InputAutomationModuleConfiguration;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { FileUtil } from '../../../../../org/allbinary/logic/io/file/FileUtil.js';
      //not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
import { FileWrapperUtil } from '../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
      //not GWT import const FileWrapperUtil = globalThis.org.allbinary.logic.io.file.FileWrapperUtil;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
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



