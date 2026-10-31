
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { FileInputStream } from '../../../../../../java/io/FileInputStream.js';
//not GWT import const FileInputStream

import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { List } from '../../../../../../java/util/List.js';
//not GWT import const List

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
//not GWT import const InputAutomationModuleData

import { NewInputAutomationModulesData } from '../../../../../../org/allbinary/input/automation/module/NewInputAutomationModulesData.js';
//not GWT import const NewInputAutomationModulesData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputAutomationModuleConfiguration } from './InputAutomationModuleConfiguration.js';
//sameFolderImports - not GWT import - same folder const InputAutomationModuleConfiguration

export class InputAutomationModuleConfigurations
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashMap: HashMap<any, any>;

    public constructor(...args: any[]) {
        super();
        if(args.length === 2 && args[0] instanceof AbeClientInformationInterface && args[1] instanceof File) {
            this.constructor$0(args[0], args[1]);
        }
        else if(args.length === 2) {
            this.constructor$1(args[0], args[1]);
        }
        else if(args.length === 1) {
            this.constructor$2(args[0]);
        }
        else if(args.length === 0) {
            this.constructor$3();
        }
        
    }
    
    private constructor$0(abeClientInformation: AbeClientInformationInterface, file: File): void {
        this.setHashMap(new HashMap<any, any>());
    

    let bytes: number[] = new Array(100000);;
    

    let idFile: FileInputStream = new FileInputStream(file);;
    

    let length: number = idFile!.read(bytes)!;;
    

    let data: string = String.fromCharCode(...bytes);;
    

    let endIndex: number = data.lastIndexOf('>')!;;
    

    let document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;;
    

    let nodeList: NodeList = document.getElementsByTagName(NewInputAutomationModulesData.NAME)!;;
    

                        if(nodeList!.getLength() > 0)
                        
                                    {
                                    
    let nameNodeList: NodeList = document.getElementsByTagName(InputAutomationModuleData.NAME)!;;
    
this.logUtil!.putF("Number Of Module(s) Specified: " +nameNodeList!.getLength(), this, "Contructor");
    




                        for (
    let index: number = 0;index < nameNodeList!.getLength(); index++)
        {

    let node: Node = nameNodeList!.item(index)!;;
    
this.add(new InputAutomationModuleConfiguration(abeClientInformation, node));
    
}


                                    }
                                

    }
    
    private constructor$1(abeClientInformation: AbeClientInformationInterface, document: Document): void {
        this.setHashMap(new HashMap<any, any>());
    

    let nameNodeList: NodeList = document.getElementsByTagName(InputAutomationModuleData.NAME)!;;
    
this.logUtil!.putF("Number Of Module(s) Specified: " +nameNodeList!.getLength(), this, "Contructor");
    




                        for (
    let index: number = 0;index < nameNodeList!.getLength(); index++)
        {

    let node: Node = nameNodeList!.item(index)!;;
    
this.add(new InputAutomationModuleConfiguration(abeClientInformation, node));
    
}


    }
    
    private constructor$2(inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration>): void {
        this.setHashMap(new HashMap<any, any>());
    

    let size: number = inputAutomationModuleConfigurationList!.length!;;
    

    let inputAutomationModuleConfiguration: InputAutomationModuleConfiguration;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
inputAutomationModuleConfiguration= inputAutomationModuleConfigurationList!.get(index);
    
this.add(inputAutomationModuleConfiguration);
    
}


    }
    
    private constructor$3(): void {
        this.setHashMap(new HashMap<any, any>());
    

    }
    
    public add(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){
this.getHashMap()!.put(inputAutomationModuleConfiguration!.getClassName(), inputAutomationModuleConfiguration);
    
}


    public remove(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){
this.getHashMap()!.remove(inputAutomationModuleConfiguration!.getClassName());
    
}


    public getHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashMap;
    
}


    public setHashMap(hashMap: HashMap<any, any>){
this.hashMap= hashMap;
    
}


}

