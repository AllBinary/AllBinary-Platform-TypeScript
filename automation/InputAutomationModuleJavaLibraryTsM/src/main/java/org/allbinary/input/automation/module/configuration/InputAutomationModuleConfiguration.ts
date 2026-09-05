
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
//not GWT import const XmlAccessType = globalThis.javax.xml.bind.annotation.XmlAccessType;

      
import { XmlAccessorType } from '../../../../../../javax/xml/bind/annotation/XmlAccessorType.js';
//not GWT import const XmlAccessorType = globalThis.javax.xml.bind.annotation.XmlAccessorType;

      
import { XmlElement } from '../../../../../../javax/xml/bind/annotation/XmlElement.js';
//not GWT import const XmlElement = globalThis.javax.xml.bind.annotation.XmlElement;

      
import { XmlRootElement } from '../../../../../../javax/xml/bind/annotation/XmlRootElement.js';
//not GWT import const XmlRootElement = globalThis.javax.xml.bind.annotation.XmlRootElement;

      
import { XmlType } from '../../../../../../javax/xml/bind/annotation/XmlType.js';
//not GWT import const XmlType = globalThis.javax.xml.bind.annotation.XmlType;

      
import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
//not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { InputAutomationData } from '../../../../../../org/allbinary/input/automation/InputAutomationData.js';
//not GWT import const InputAutomationData = globalThis.org.allbinary.input.automation.InputAutomationData;

      
import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
//not GWT import const InputAutomationModuleData = globalThis.org.allbinary.input.automation.module.InputAutomationModuleData;

      
import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
//not GWT import const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
//not GWT import const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationModuleConfiguration
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private className: string;

    private name: string;

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface;

public constructor (){

            super();
        }


public constructor (abeClientInformation: AbeClientInformationInterface, node: Node){

            super();
        this.init(abeClientInformation, node);
    
}


public constructor (abeClientInformation: AbeClientInformationInterface, name: string, className: string){

            super();
        this.setName(name);
    
this.setClassName(className);
    
this.init(abeClientInformation);
    
}


public constructor (inputAutomationModuleInterface: InputAutomationModuleFactoryInterface){

            super();
        this.setInputAutomationModuleInterface(inputAutomationModuleInterface);
    
this.setClassName(this.inputAutomationModuleInterface!.constructor.name.toString()!);
    
}


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface, node: Node){

    var nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    
    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, nodeList)!;;
    

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


    public init(abeClientInformation: AbeClientInformationInterface){

        try {
            this.logUtil!.putF("Name: " +getName(), this, this.commonStrings!.INIT);
    
this.logUtil!.putF("ClassName: " +className, this, this.commonStrings!.INIT);
    
this.setInputAutomationModuleInterface(AbeFactory.getInstance()!.getInstance()!.getInstance(abeClientInformation, getClassName()) as InputAutomationModuleFactoryInterface);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    



                            throw new RuntimeException();
                    
}

}


                //@Throws(Exception.constructor)
            
    public toDomNode(document: Document): Node{

    var node: Node = document.createElement(InputAutomationModuleData.NAME)!;;
    

    var classNameNode: Node = ModDomHelper.createTextNode(document, DynamicObjectData.NAME, this.getClassName())!;;
    
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



