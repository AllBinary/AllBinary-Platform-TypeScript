
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
        



import { XmlAccessType } from "../../../../../../javax/xml/bind/annotation/XmlAccessType.js";

    
import { XmlAccessorType } from "../../../../../../javax/xml/bind/annotation/XmlAccessorType.js";

    
import { XmlElement } from "../../../../../../javax/xml/bind/annotation/XmlElement.js";

    
import { XmlRootElement } from "../../../../../../javax/xml/bind/annotation/XmlRootElement.js";

    
import { XmlType } from "../../../../../../javax/xml/bind/annotation/XmlType.js";

    
import { DynamicObjectData } from "../../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { InputAutomationData } from "../../../../../../org/allbinary/input/automation/InputAutomationData.js";

    
import { InputAutomationModuleData } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js";

    
import { InputAutomationModuleFactoryInterface } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleFactoryInterface.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeFactory } from "../../../../../../org/allbinary/logic/system/loader/AbeFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class InputAutomationModuleConfiguration
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private className: string

    private name: string

    private inputAutomationModuleInterface: InputAutomationModuleFactoryInterface
public constructor (){

            super();
            }

public constructor (abeClientInformation: AbeClientInformationInterface, node: Node){

            super();
                //var abeClientInformation = abeClientInformation
    //var node = node
this.init(abeClientInformation, node)
}

public constructor (abeClientInformation: AbeClientInformationInterface, name: string, className: string){

            super();
                //var abeClientInformation = abeClientInformation
    //var name = name
    //var className = className
this.setName(name)
this.setClassName(className)
this.init(abeClientInformation)
}

public constructor (inputAutomationModuleInterface: InputAutomationModuleFactoryInterface){

            super();
            var inputAutomationModuleInterface = inputAutomationModuleInterface
this.setInputAutomationModuleInterface(inputAutomationModuleInterface)
this.setClassName(this.inputAutomationModuleInterface!.::class.toString()!)
}


                //@Throws(Error::class)
            
    public init(abeClientInformation: AbeClientInformationInterface, node: Node){
    //var abeClientInformation = abeClientInformation
    //var node = node

    var nodeList: NodeList = node.getChildNodes()!;
        
        


                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    
    var classNameNode: Node = DomSearchHelper.getNode(DynamicObjectData.NAME, nodeList)!;
        
        


                        if(classNameNode != 
                                    null
                                )
                        
                                    {
                                    this.setClassName(DomNodeHelper.getTextNodeValue(classNameNode))
this.init(abeClientInformation)

                                    }
                                
                        else {
                            logUtil!.put("Class Node Null", this, this.commonStrings!.INIT)

                        }
                            

                                    }
                                
                        else {
                            logUtil!.put(InputAutomationData.NAME +" Node Has No Children", this, "Contructor")

                        }
                            
}


    public init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

        try {
            logUtil!.put("Name: " +getName(), this, this.commonStrings!.INIT)
logUtil!.put("ClassName: " +className, this, this.commonStrings!.INIT)
this.setInputAutomationModuleInterface(AbeFactory.getInstance()!.getInstance()!.getInstance(abeClientInformation, getClassName()) as InputAutomationModuleFactoryInterface)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e)



                            throw RuntimeException()
}

}


                //@Throws(Error::class)
            
    public toDomNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(InputAutomationModuleData.NAME)!;
        
        


    var classNameNode: Node = ModDomHelper.createTextNode(document, DynamicObjectData.NAME, this.getClassName())!;
        
        

node.appendChild(classNameNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
logUtil!.put("Name: " +name, this, "setName")
this.name= name
}


    public getClassName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return className;
    
}


    public setClassName(className: string){
    //var className = className
logUtil!.put("ClassName : " +className, this, "setClassName")
this.className= className
}


    public getInputAutomationModuleInterface(): InputAutomationModuleFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationModuleInterface;
    
}


    public setInputAutomationModuleInterface(inputAutomationModuleInterface: InputAutomationModuleFactoryInterface){
var inputAutomationModuleInterface = inputAutomationModuleInterface
logUtil!.put("InputAutomationModuleFactoryInterface : " +inputAutomationModuleInterface, this, "setInputAutomationModuleInterface")
this.inputAutomationModuleInterface= inputAutomationModuleInterface
this.setName(this.inputAutomationModuleInterface!.getName())
}


}
                
            

