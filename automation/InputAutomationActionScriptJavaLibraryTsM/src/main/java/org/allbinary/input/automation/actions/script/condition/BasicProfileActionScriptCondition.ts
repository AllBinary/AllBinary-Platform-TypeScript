
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
//not game specific package import { ActionEvent } from '../../../../../../../java/awt/event/ActionEvent.js';
      const ActionEvent = globalThis.java.awt.event.ActionEvent;

      
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { swing } from '../../../../../../../javax/swing.js';
      const swing = globalThis.javax.swing;

      
//not game specific package import { TreePath } from '../../../../../../../javax/swing/tree/TreePath.js';
      const TreePath = globalThis.javax.swing.tree.TreePath;

      
//not game specific package import { JTreeInterfaceFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';
      const JTreeInterfaceFactory = globalThis.org.allbinary.input.automation.actions.script.JTreeInterfaceFactory;

      
//not game specific package import { ProfileActionScriptItem } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js';
      const ProfileActionScriptItem = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptItem;

      
//not game specific package import { ProfileActionScriptNodeInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
      const ProfileActionScriptNodeInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptNodeInterface;

      
//not game specific package import { ProfileActionScriptProcessorInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/ProfileActionScriptProcessorInterface.js';
      const ProfileActionScriptProcessorInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.ProfileActionScriptProcessorInterface;

      
//not game specific package import { GenericProfileActionScriptInputData } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/GenericProfileActionScriptInputData.js';
      const GenericProfileActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.GenericProfileActionScriptInputData;

      
//not game specific package import { KeyboardActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/KeyboardActionScriptInput.js';
      const KeyboardActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.KeyboardActionScriptInput;

      
//not game specific package import { MouseActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/MouseActionScriptInput.js';
      const MouseActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInput;

      
//not game specific package import { ProfileActionScriptInputFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/ProfileActionScriptInputFactory.js';
      const ProfileActionScriptInputFactory = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.ProfileActionScriptInputFactory;

      
//not game specific package import { GenericProfileActionScriptOutputData } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/GenericProfileActionScriptOutputData.js';
      const GenericProfileActionScriptOutputData = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.GenericProfileActionScriptOutputData;

      
//not game specific package import { ImageActionScriptOutput } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ImageActionScriptOutput.js';
      const ImageActionScriptOutput = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutput;

      
//not game specific package import { ProfileActionScriptOutputFactory } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ProfileActionScriptOutputFactory.js';
      const ProfileActionScriptOutputFactory = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ProfileActionScriptOutputFactory;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptConditionInterface } from './ProfileActionScriptConditionInterface.js';
import { GenericProfileActionScriptConditionData } from './GenericProfileActionScriptConditionData.js';
import { ProfileActionScriptConditionFactory } from './ProfileActionScriptConditionFactory.js';
import { JMenu } from './JMenu.js';
import { JMenuItem } from './JMenuItem.js';
import { TimeIntervalActionScriptCondition } from './TimeIntervalActionScriptCondition.js';
import { AlwaysActionScriptCondition } from './AlwaysActionScriptCondition.js';
import { ColorAtActionScriptCondition } from './ColorAtActionScriptCondition.js';

export class BasicProfileActionScriptCondition extends ProfileActionScriptItem implements ProfileActionScriptConditionInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private profileActionProcessorInterfaceVector: Vector;

    private profileActionConditionInterfaceVector: Vector;

public constructor (label: string, node: Node){
            super(label, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    

    var nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var actionItemNode: Node = nodeList!.item(index)!;;
    

                        if(actionItemNode!.getNodeType() == Node.ELEMENT_NODE)
                        
                                    {
                                    
                        if(actionItemNode!.getNodeName()!.compareTo(GenericProfileActionScriptConditionData.NAME) == 0)
                        
                                    {
                                    this.addCondition(ProfileActionScriptConditionFactory.getInstance(actionItemNode));
    

                                    }
                                
                             else 
                        if(actionItemNode!.getNodeName()!.compareTo(GenericProfileActionScriptInputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptInputFactory.getInstance(actionItemNode));
    

                                    }
                                
                             else 
                        if(actionItemNode!.getNodeName()!.compareTo(GenericProfileActionScriptOutputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptOutputFactory.getInstance(actionItemNode));
    

                                    }
                                

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public addProcessorNodes(node: Node){

    var nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var processorActionItemNode: Node = nodeList!.item(index)!;;
    

                        if(processorActionItemNode!.getNodeName()!.compareTo(GenericProfileActionScriptInputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptInputFactory.getInstance(processorActionItemNode));
    

                                    }
                                
                             else 
                        if(processorActionItemNode!.getNodeName()!.compareTo(GenericProfileActionScriptOutputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptOutputFactory.getInstance(processorActionItemNode));
    

                                    }
                                
}

}


public constructor (label: string){
            super(label);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
}


    init(){
this.setProfileActionProcessorInterfaceVector(new Vector());
    
this.setProfileActionConditionInterfaceVector(new Vector());
    
this.getJPopupMenu()!.add(this.getConditionJPopupMenu());
    
this.getJPopupMenu()!.add(this.getInputJPopupMenu());
    
this.getJPopupMenu()!.add(this.getOutputJPopupMenu());
    
}


    getConditionJPopupMenu(): JMenu{

    var jMenu: JMenu = new JMenu(NEW_CONDITION);;
    

    var jMenuItemColorAt: JMenuItem = new JMenuItem(NEW_COLOR_AT);;
    

    var jMenuItemAlways: JMenuItem = new JMenuItem(NEW_ALWAYS);;
    

    var jMenuItemTimeInterval: JMenuItem = new JMenuItem(NEW_TIME_INTERVAL);;
    
jMenuItemColorAt!.addActionListener(this);
    
jMenuItemAlways!.addActionListener(this);
    
jMenuItemTimeInterval!.addActionListener(this);
    
jMenu!.add(jMenuItemColorAt);
    
jMenu!.add(jMenuItemAlways);
    
jMenu!.add(jMenuItemTimeInterval);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return jMenu;
    
}


    getInputJPopupMenu(): JMenu{

    var jMenu: JMenu = new JMenu(NEW_INPUT);;
    

    var jMenuItemKey: JMenuItem = new JMenuItem(NEW_KEY_INPUT);;
    

    var jMenuItemMouse: JMenuItem = new JMenuItem(NEW_MOUSE_INPUT);;
    

    var jMenuItemJoystick: JMenuItem = new JMenuItem(NEW_JOYSTICK_INPUT);;
    
jMenuItemKey!.addActionListener(this);
    
jMenuItemMouse!.addActionListener(this);
    
jMenuItemJoystick!.addActionListener(this);
    
jMenu!.add(jMenuItemKey);
    
jMenu!.add(jMenuItemMouse);
    
jMenu!.add(jMenuItemJoystick);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return jMenu;
    
}


    getOutputJPopupMenu(): JMenu{

    var jMenu: JMenu = new JMenu(NEW_OUTPUT);;
    

    var jMenuItemImage: JMenuItem = new JMenuItem(NEW_IMAGE_OUTPUT);;
    
jMenuItemImage!.addActionListener(this);
    
jMenu!.add(jMenuItemImage);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return jMenu;
    
}


    public addProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "addInput");
    
this.getProfileActionProcessorInterfaceVector()!.add(profileActionProcessorInterface);
    
this.add(profileActionProcessorInterface);
    
}


    public removeProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "removeInput");
    
this.getProfileActionProcessorInterfaceVector()!.remove(profileActionProcessorInterface);
    
this.remove(profileActionProcessorInterface);
    
}


    public removeCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "removeCondition");
    
this.getProfileActionConditionInterfaceVector()!.remove(profileActionScriptNodeInterface);
    
this.remove(profileActionScriptNodeInterface);
    
}


    public addCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
this.logUtil!.putF(this.commonStrings!.START, this, "addCondition");
    
this.getProfileActionConditionInterfaceVector()!.add(profileActionScriptNodeInterface);
    
this.add(profileActionScriptNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionScriptConditionData.NAME)!;;
    

    var profileActionConditionInterfaceVector: Vector = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = profileActionConditionInterfaceVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = profileActionConditionInterfaceVector!.get(index) as ProfileActionScriptConditionInterface;;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}


    var profileActionProcessorInterfaceVector: Vector = this.getProfileActionProcessorInterfaceVector()!;;
    

    var size2: number = profileActionProcessorInterfaceVector!.length!;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {

    var profileActionProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;;
    
node.appendChild(profileActionProcessorInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getProfileActionConditionInterfaceVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionConditionInterfaceVector;
    
}


    public setProfileActionConditionInterfaceVector(profileActionConditionInterfaceVector: Vector){
this.profileActionConditionInterfaceVector= profileActionConditionInterfaceVector;
    
}


    public actionPerformed(actionEvent: ActionEvent){

        try {
            super.actionPerformed(actionEvent);
    

                        if(actionEvent!.getActionCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                    
                        if(this.getParent() instanceof ProfileActionScriptNodeInterface)
                        
                                    {
                                    
    var profileActionScriptNodeInterface: ProfileActionScriptNodeInterface = this.getParent() as ProfileActionScriptNodeInterface;;
    
profileActionScriptNodeInterface!.removeCondition(this);
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

                                    }
                                

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_COLOR_AT) == 0)
                        
                                    {
                                    this.addCondition(new ColorAtActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_ALWAYS) == 0)
                        
                                    {
                                    this.addCondition(new AlwaysActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_TIME_INTERVAL) == 0)
                        
                                    {
                                    this.addCondition(new TimeIntervalActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_KEY_INPUT) == 0)
                        
                                    {
                                    this.addProcessor(new KeyboardActionScriptInput());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_MOUSE_INPUT) == 0)
                        
                                    {
                                    this.addProcessor(new MouseActionScriptInput());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.compareTo(NEW_IMAGE_OUTPUT) == 0)
                        
                                    {
                                    this.addProcessor(new ImageActionScriptOutput());
    
this.updateTree();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put("Error", this, "actionPerformed", e);
    
}

}


    public getProfileActionProcessorInterfaceVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionProcessorInterfaceVector;
    
}


    public setProfileActionProcessorInterfaceVector(profileActionProcessorInterfaceVector: Vector){
this.profileActionProcessorInterfaceVector= profileActionProcessorInterfaceVector;
    
}


    updateTree(){
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

    var treePath: TreePath = new TreePath(this);;
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.getActionScriptJTree()!.expandPath(treePath);
    
}


                //@Throws(Exception.constructor)
            
    public shouldProcess(frame: Long): boolean{

    var profileActionConditionInterfaceVector: Vector = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = profileActionConditionInterfaceVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = profileActionConditionInterfaceVector!.get(index) as ProfileActionScriptConditionInterface;;
    

                        if(!profileActionScriptConditionInterface!.shouldProcess(frame))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public process(frame: Long){
this.logUtil!.putF(new StringMaker().append("Start - Processing ")!.appendint(this.getProfileActionProcessorInterfaceVector()!.size())!.append(" inputs")!.toString(), this, this.commonStrings!.PROCESS);
    

    var profileActionProcessorInterfaceVector: Vector = this.getProfileActionProcessorInterfaceVector()!;;
    

    var size: number = profileActionProcessorInterfaceVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionScriptProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;;
    
profileActionScriptProcessorInterface!.process(frame);
    
}

}


}



