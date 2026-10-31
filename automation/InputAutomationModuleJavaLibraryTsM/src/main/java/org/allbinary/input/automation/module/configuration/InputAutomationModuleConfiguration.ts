
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
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { XmlAccessType } from '../../../../../../javax/xml/bind/annotation/XmlAccessType.js';
//not GWT import const XmlAccessType

import { XmlAccessorType } from '../../../../../../javax/xml/bind/annotation/XmlAccessorType.js';
//not GWT import const XmlAccessorType

import { XmlElement } from '../../../../../../javax/xml/bind/annotation/XmlElement.js';
//not GWT import const XmlElement

import { XmlRootElement } from '../../../../../../javax/xml/bind/annotation/XmlRootElement.js';
//not GWT import const XmlRootElement

import { XmlType } from '../../../../../../javax/xml/bind/annotation/XmlType.js';
//not GWT import const XmlType

import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData

import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { InputAutomationData } from '../../../../../../org/allbinary/input/automation/InputAutomationData.js';
//not GWT import const InputAutomationData

import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
//not GWT import const InputAutomationModuleData

import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
//not GWT import const InputAutomationModuleFactoryInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory

import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleConfiguration
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private className: string;

    private name: string;

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$2(args[0], args[1], args[2]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$3(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        
    }
    
    private constructor$1(abeClientInformation: AbeClientInformationInterface, node: Node): void {
        this.init(abeClientInformation, node);
    

    }
    
    private constructor$2(abeClientInformation: AbeClientInformationInterface, name: string, className: string): void {
        this.setName(name);
    
this.setClassName(className);
    
this.init(abeClientInformation);
    

    }
    
    private constructor$3(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface): void {
        this.setInputAutomationModuleInterface(inputAutomationModuleInterface);
    
this.setClassName(this.inputAutomationModuleInterface!.constructor.name.toString()!);
    

    }
    init(...args: any[]): any {
   
    if (args.length === 2) return this.init$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.init$overload2(args[0]);
   
   throw new TypeError('No matching overload: init'); }
  
                //@Throws(Exception.constructor)
            
    public init$overload1(abeClientInformation: AbeClientInformationInterface, node: Node){

    let nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    
    let classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, nodeList)!;;
    

                        if(classNameNode != 
                                    null
                                )
                        
                                    {
                                    this.setClassName(DomNodeHelper.getTextNodeValue(classNameNode));
    
this.init(abeClientInformation);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Class Node Null", this, this.commonStrings!.INIT);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF(InputAutomationData.NAME +" Node Has No Children", this, "Contructor");
    

                        }
                            
}


    public init$overload2(abeClientInformation: AbeClientInformationInterface){

 try { this.logUtil!.putF("Name: " +getName(), this, this.commonStrings!.INIT);
    
this.logUtil!.putF("ClassName: " +className, this, this.commonStrings!.INIT);
    
this.setInputAutomationModuleInterface(AbeFactory.getInstance()!.getInstance()!.getInstance(abeClientInformation, getClassName()) as InputAutomationModuleFactoryInterface);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    



                            throw new RuntimeException();
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public toDomNode(document: Document): Node{

    let node: Node = document.createElement(InputAutomationModuleData.NAME)!;;
    

    let classNameNode: Node = ModDomHelper.createTextNode(document, DynamicObjectData.NAME, this.getClassName())!;;
    
node.appendChild(classNameNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.logUtil!.putF("Name: " +name, this, "setName");
    
this.name= name;
    
}


    public getClassName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.className;
    
}


    public setClassName(className: string){
this.logUtil!.putF("ClassName : " +className, this, "setClassName");
    
this.className= className;
    
}


    public getInputAutomationModuleInterface(): InputAutomationModuleFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputAutomationModuleInterface;
    
}


    public setInputAutomationModuleInterface(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface){
this.logUtil!.putF("InputAutomationModuleFactoryInterface : " +inputAutomationModuleInterface, this, "setInputAutomationModuleInterface");
    
this.inputAutomationModuleInterface= inputAutomationModuleInterface;
    
this.setName(this.inputAutomationModuleInterface!.getName());
    
}


}

