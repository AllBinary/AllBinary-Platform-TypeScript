
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
        



import { HashMap } from "../../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../../java/util/Vector.js";

    
import { DefaultMutableTreeNode } from "../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js";

    
import { DomSearchHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ProfileActionScriptNodeInterface } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js";

    
import { ProfileActionScriptConditionFactory } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionFactory.js";

    
import { ProfileActionScriptConditionInterface } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js";

    
import { GenericProfileActionData } from "../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js";

    
import { GenericProfileActionJPanel } from "../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js";

    
import { LogUtil } from "../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../../org/w3c/dom/NodeList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericProfileActionScript extends DefaultMutableTreeNode implements ProfileActionScriptNodeInterface {
        

    private static readonly NAME: string = "Root";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private genericProfileActionJPanel: GenericProfileActionJPanel

    private profileActionConditionInterfaceVector: Vector
public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, node: Node){
            super(NAME);
                    var genericProfileActionJPanel = genericProfileActionJPanel
var node = node


                            //For kotlin this is before the body of the constructor.
                    
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.setProfileActionConditionInterfaceVector(new Vector());
    

    var actionScriptNode: Node = DomSearchHelper.getNode(GenericProfileActionData.SCRIPT, node.getChildNodes())!;
        
        
;
    

                        if(actionScriptNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionScriptNode!.getChildNodes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var actionConditionNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(actionConditionNode!.getNodeType() == Node.ELEMENT_NODE)
                        
                                    {
                                    this.addCondition(ProfileActionScriptConditionFactory.getInstance(actionConditionNode));
    

                                    }
                                
}


                                    }
                                
                        else {
                            


                            throw new Error("Profile Action Script Node Null")

                        }
                            
}

public constructor (genericProfileActionJPanel: GenericProfileActionJPanel){

            super();
        var genericProfileActionJPanel = genericProfileActionJPanel
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.setProfileActionConditionInterfaceVector(new Vector());
    
}


    public addCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
var profileActionScriptNodeInterface = profileActionScriptNodeInterface
this.logUtil!.putF(this.commonStrings!.START, this, "addCondition");
    
this.getProfileActionConditionInterfaceVector()!.add(profileActionScriptNodeInterface);
    
this.add(profileActionScriptNodeInterface);
    
}


    public removeCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
var profileActionScriptNodeInterface = profileActionScriptNodeInterface
this.logUtil!.putF(this.commonStrings!.START, this, "removeCondition");
    
this.getProfileActionConditionInterfaceVector()!.remove(profileActionScriptNodeInterface);
    
this.remove(profileActionScriptNodeInterface);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getProfileActionConditionInterfaceVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return profileActionConditionInterfaceVector;
    
}


    public setProfileActionConditionInterfaceVector(profileActionConditionInterfaceVector: Vector){
var profileActionConditionInterfaceVector = profileActionConditionInterfaceVector
this.profileActionConditionInterfaceVector= profileActionConditionInterfaceVector;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionData.SCRIPT)!;
        
        
;
    

    var vector: Vector = this.getProfileActionConditionInterfaceVector()!;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = vector.get(index); as ProfileActionScriptConditionInterface;
        
        
;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

