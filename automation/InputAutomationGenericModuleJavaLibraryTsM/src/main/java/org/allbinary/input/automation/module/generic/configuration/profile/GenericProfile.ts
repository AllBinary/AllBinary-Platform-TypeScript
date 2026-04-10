
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
        



import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { DomNodeHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { GenericProfileActions } from "../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../org/w3c/dom/NodeList.js";

    

export class GenericProfile
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private vector: Vector

    private genericProfileActions: GenericProfileActions
public constructor (node: Node){

            super();
            var node = node
this.setName(DomNodeHelper.getTextNodeValue(node))
this.vector= Vector()

    var nodeList: NodeList = node.getChildNodes()!;
        
        

logUtil!.put("Name: " +this.getName() +" Child Nodes: " +nodeList!.getLength(), this, "Contructor")




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var profileNode: Node = nodeList!.item(index)!;
        
        


                        if(profileNode!.getNodeName()!.compareTo(GenericProfileDataWorkerData.NAME) == 0)
                        
                                    {
                                    
    var genericProfileDataWorkerType: GenericProfileDataWorkerType = GenericProfileDataWorkerType.getInstance(profileNode)!;
        
        

logUtil!.put("Adding GenericProfileDataWorkerType: " +genericProfileDataWorkerType!.toString(), this, "Contructor")
this.vector.add(genericProfileDataWorkerType)

                                    }
                                
}

}

public constructor (name: string){

            super();
            var name = name
this.setName(name)
this.vector= Vector()
}


    public getGenericProfileDataWorkerTypeVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vector;
    
}


    public add(genericProfileDataWorkerType: GenericProfileDataWorkerType){
var genericProfileDataWorkerType = genericProfileDataWorkerType

                        if(!this.vector.contains(genericProfileDataWorkerType))
                        this.vector.add(genericProfileDataWorkerType)
}


    public remove(genericProfileDataWorkerType: GenericProfileDataWorkerType){
var genericProfileDataWorkerType = genericProfileDataWorkerType
this.vector.remove(genericProfileDataWorkerType)
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createTextNode(document, GenericProfileData.NAME, name)!;
        
        


    var size: number = vector.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = vector.get(index) as GenericProfileDataWorkerType;
        
        

node.appendChild(genericProfileDataWorkerType!.toXmlNode(document))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
var genericProfileActions = genericProfileActions
this.genericProfileActions= genericProfileActions
}


}
                
            

