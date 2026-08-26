
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
        
//not game specific package import { XmlAccessType } from '../../../../../../javax/xml/bind/annotation/XmlAccessType.js';
      const XmlAccessType = globalThis.javax.xml.bind.annotation.XmlAccessType;

      
//not game specific package import { XmlAccessorType } from '../../../../../../javax/xml/bind/annotation/XmlAccessorType.js';
      const XmlAccessorType = globalThis.javax.xml.bind.annotation.XmlAccessorType;

      
//not game specific package import { XmlElement } from '../../../../../../javax/xml/bind/annotation/XmlElement.js';
      const XmlElement = globalThis.javax.xml.bind.annotation.XmlElement;

      
//not game specific package import { XmlRootElement } from '../../../../../../javax/xml/bind/annotation/XmlRootElement.js';
      const XmlRootElement = globalThis.javax.xml.bind.annotation.XmlRootElement;

      
//not game specific package import { XmlType } from '../../../../../../javax/xml/bind/annotation/XmlType.js';
      const XmlType = globalThis.javax.xml.bind.annotation.XmlType;

      
//not game specific package import { DynamicObjectData } from '../../../../../../org/allbinary/business/DynamicObjectData.js';
      const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
//not game specific package import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { InputAutomationData } from '../../../../../../org/allbinary/input/automation/InputAutomationData.js';
      const InputAutomationData = globalThis.org.allbinary.input.automation.InputAutomationData;

      
//not game specific package import { InputAutomationModuleData } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js';
      const InputAutomationModuleData = globalThis.org.allbinary.input.automation.module.InputAutomationModuleData;

      
//not game specific package import { InputAutomationModuleFactoryInterface } from '../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js';
      const InputAutomationModuleFactoryInterface = globalThis.org.allbinary.input.automation.module.InputAutomationModuleFactoryInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbeFactory } from '../../../../../../org/allbinary/logic/system/loader/AbeFactory.js';
      const AbeFactory = globalThis.org.allbinary.logic.system.loader.AbeFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
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
                
            

