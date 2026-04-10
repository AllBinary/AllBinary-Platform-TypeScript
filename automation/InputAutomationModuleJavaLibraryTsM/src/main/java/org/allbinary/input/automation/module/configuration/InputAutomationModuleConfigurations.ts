
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
        



import { File } from "../../../../../../java/io/File.js";

    
import { FileInputStream } from "../../../../../../java/io/FileInputStream.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { List } from "../../../../../../java/util/List.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { InputAutomationModuleData } from "../../../../../../org/allbinary/input/automation/module/InputAutomationModuleData.js";

    
import { NewInputAutomationModulesData } from "../../../../../../org/allbinary/input/automation/module/NewInputAutomationModulesData.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

export class InputAutomationModuleConfigurations
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private hashMap: HashMap<Any, Any>
public constructor (abeClientInformation: AbeClientInformationInterface, file: File){

            super();
                //var abeClientInformation = abeClientInformation
    //var file = file
this.setHashMap(HashMap<Any, Any>())

    var bytes: ByteArray = ByteArray(100000);
        
        


    var idFile: FileInputStream = new FileInputStream(file);
        
        


    var length: number = idFile!.read(bytes)!;
        
        


    var data: string = new bytes.decodeToString();
        
        


    var endIndex: number = data.lastIndexOf('>')!;
        
        


    var document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;
        
        


    var nodeList: NodeList = document.getElementsByTagName(NewInputAutomationModulesData.NAME)!;
        
        


                        if(nodeList!.getLength() > 0)
                        
                                    {
                                    
    var nameNodeList: NodeList = document.getElementsByTagName(InputAutomationModuleData.NAME)!;
        
        

logUtil!.put("Number Of Module(s) Specified: " +nameNodeList!.getLength(), this, "Contructor")




                        for (
    var index: number = 0;
        
        
index < nameNodeList!.getLength(); index++)
        {

    var node: Node = nameNodeList!.item(index)!;
        
        

this.add(InputAutomationModuleConfiguration(abeClientInformation, node))
}


                                    }
                                
}

public constructor (abeClientInformation: AbeClientInformationInterface, document: Document){

            super();
                //var abeClientInformation = abeClientInformation
    //var document = document
this.setHashMap(HashMap<Any, Any>())

    var nameNodeList: NodeList = document.getElementsByTagName(InputAutomationModuleData.NAME)!;
        
        

logUtil!.put("Number Of Module(s) Specified: " +nameNodeList!.getLength(), this, "Contructor")




                        for (
    var index: number = 0;
        
        
index < nameNodeList!.getLength(); index++)
        {

    var node: Node = nameNodeList!.item(index)!;
        
        

this.add(InputAutomationModuleConfiguration(abeClientInformation, node))
}

}

public constructor (inputAutomationModuleConfigurationList: List<InputAutomationModuleConfiguration>){

            super();
                //var inputAutomationModuleConfigurationList = inputAutomationModuleConfigurationList
this.setHashMap(HashMap<Any, Any>())

    var size: number = inputAutomationModuleConfigurationList!.size!;
        
        


    var inputAutomationModuleConfiguration: InputAutomationModuleConfiguration





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
inputAutomationModuleConfiguration= inputAutomationModuleConfigurationList!.get(index)
this.add(inputAutomationModuleConfiguration)
}

}

public constructor (){

            super();
            this.setHashMap(HashMap<Any, Any>())
}


    public add(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){
    //var inputAutomationModuleConfiguration = inputAutomationModuleConfiguration
this.getHashMap()!.put(inputAutomationModuleConfiguration!.getClassName(), inputAutomationModuleConfiguration)
}


    public remove(inputAutomationModuleConfiguration: InputAutomationModuleConfiguration){
    //var inputAutomationModuleConfiguration = inputAutomationModuleConfiguration
this.getHashMap()!.remove(inputAutomationModuleConfiguration!.getClassName())
}


    public getHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public setHashMap(hashMap: HashMap<Any, Any>){
var hashMap = hashMap
this.hashMap= hashMap
}


}
                
            

