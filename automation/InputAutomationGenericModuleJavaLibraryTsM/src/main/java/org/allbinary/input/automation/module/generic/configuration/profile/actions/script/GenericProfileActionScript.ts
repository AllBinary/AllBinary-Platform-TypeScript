
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
        



            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DefaultMutableTreeNode } from '../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';
      const DefaultMutableTreeNode = globalThis.javax.swing.tree.DefaultMutableTreeNode;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { ProfileActionScriptNodeInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
      const ProfileActionScriptNodeInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptNodeInterface;

      
//not game specific package import { ProfileActionScriptConditionFactory } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionFactory.js';
      const ProfileActionScriptConditionFactory = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionFactory;

      
//not game specific package import { ProfileActionScriptConditionInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

      
//not game specific package import { GenericProfileActionData } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js';
      const GenericProfileActionData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionData;

      
//not game specific package import { GenericProfileActionJPanel } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js';
      const GenericProfileActionJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionJPanel;

      
//not game specific package import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericProfileActionScript extends DefaultMutableTreeNode implements ProfileActionScriptNodeInterface {
        

    private static readonly NAME: string = "Root";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private genericProfileActionJPanel: GenericProfileActionJPanel;

    private profileActionConditionInterfaceVector: Vector;

public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, node: Node){
            super(NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.setProfileActionConditionInterfaceVector(new Vector());
    

    var actionScriptNode: Node = DomSearchHelper.getNode(GenericProfileActionData.SCRIPT, node.getChildNodes())!;;
    

                        if(actionScriptNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionScriptNode!.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var actionConditionNode: Node = nodeList!.item(index)!;;
    

                        if(actionConditionNode!.getNodeType() == Node.ELEMENT_NODE)
                        
                                    {
                                    this.addCondition(ProfileActionScriptConditionFactory.getInstance(actionConditionNode));
    

                                    }
                                
}


                                    }
                                
                        else {
                            


                            throw new Exception("Profile Action Script Node Null");
                    

                        }
                            
}


public constructor (genericProfileActionJPanel: GenericProfileActionJPanel){

            super();
        this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.setProfileActionConditionInterfaceVector(new Vector());
    
}


    public addCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "addCondition");
    
this.getProfileActionConditionInterfaceVector()!.add(profileActionScriptNodeInterface);
    
this.add(profileActionScriptNodeInterface);
    
}


    public removeCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "removeCondition");
    
this.getProfileActionConditionInterfaceVector()!.remove(profileActionScriptNodeInterface);
    
this.remove(profileActionScriptNodeInterface);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getProfileActionConditionInterfaceVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionConditionInterfaceVector;
    
}


    public setProfileActionConditionInterfaceVector(profileActionConditionInterfaceVector: Vector){
this.profileActionConditionInterfaceVector= profileActionConditionInterfaceVector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionData.SCRIPT)!;;
    

    var vector: Vector = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = vector.get(index) as ProfileActionScriptConditionInterface;;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

