
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
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DefaultMutableTreeNode } from '../../../../../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';
//not GWT import const DefaultMutableTreeNode

import { DomSearchHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ProfileActionScriptNodeInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
//not GWT import const ProfileActionScriptNodeInterface

import { ProfileActionScriptConditionFactory } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionFactory.js';
//not GWT import const ProfileActionScriptConditionFactory

import { ProfileActionScriptConditionInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
//not GWT import const ProfileActionScriptConditionInterface

import { GenericProfileActionData } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js';
//not GWT import const GenericProfileActionData

import { GenericProfileActionJPanel } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js';
//not GWT import const GenericProfileActionJPanel

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
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
    

    let actionScriptNode: Node = DomSearchHelper.getNode(GenericProfileActionData.SCRIPT, node.getChildNodes())!;;
    

                        if(actionScriptNode != 
                                    null
                                )
                        
                                    {
                                    
    let nodeList: NodeList = actionScriptNode!.getChildNodes()!;;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let actionConditionNode: Node = nodeList!.item(index)!;;
    

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

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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

    let node: Node = document.createElement(GenericProfileActionData.SCRIPT)!;;
    

    let vector: BasicArrayList = this.getProfileActionConditionInterfaceVector()!;;
    

    let size: number = vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let profileActionConditionInterface: ProfileActionScriptConditionInterface = vector.get(index) as ProfileActionScriptConditionInterface;;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

