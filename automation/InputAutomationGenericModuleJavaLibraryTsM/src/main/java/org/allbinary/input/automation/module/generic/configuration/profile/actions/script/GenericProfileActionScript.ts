
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
        
import { HashMap } from '../../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { DefaultMutableTreeNode } from '../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';
      //not GWT import const DefaultMutableTreeNode = globalThis.javax.swing.tree.DefaultMutableTreeNode;

      
import { DomSearchHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ProfileActionScriptNodeInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
      //not GWT import const ProfileActionScriptNodeInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptNodeInterface;

      
import { ProfileActionScriptConditionFactory } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionFactory.js';
      //not GWT import const ProfileActionScriptConditionFactory = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionFactory;

      
import { ProfileActionScriptConditionInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      //not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

      
import { GenericProfileActionData } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js';
      //not GWT import const GenericProfileActionData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionData;

      
import { GenericProfileActionJPanel } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js';
      //not GWT import const GenericProfileActionJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionJPanel;

      
//not plain js import { StdUtil } from '../../../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GenericProfileActionScript extends DefaultMutableTreeNode implements ProfileActionScriptNodeInterface {
        

    private static readonly NAME: string = "Root";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private genericProfileActionJPanel: GenericProfileActionJPanel;

    private profileActionConditionInterfaceVector: BasicArrayList;

public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, node: Node){
            super(NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.setProfileActionConditionInterfaceVector(new BasicArrayListD());
    

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
    
this.setProfileActionConditionInterfaceVector(new BasicArrayListD());
    
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

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public getProfileActionConditionInterfaceVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionConditionInterfaceVector;
    
}


    public setProfileActionConditionInterfaceVector(profileActionConditionInterfaceVector: BasicArrayList){
this.profileActionConditionInterfaceVector= profileActionConditionInterfaceVector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionData.SCRIPT)!;;
    

    var vector: BasicArrayList = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = vector.size()!;;
    




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



