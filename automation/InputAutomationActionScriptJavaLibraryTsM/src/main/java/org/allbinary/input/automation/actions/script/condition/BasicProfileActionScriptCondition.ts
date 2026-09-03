
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
        
import { ActionEvent } from '../../../../../../../java/awt/event/ActionEvent.js';
      //not GWT import const ActionEvent = globalThis.java.awt.event.ActionEvent;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { swing } from '../../../../../../../javax/swing.js';
      //not GWT import const swing = globalThis.javax.swing;

      
import { TreePath } from '../../../../../../../javax/swing/tree/TreePath.js';
      //not GWT import const TreePath = globalThis.javax.swing.tree.TreePath;

      
import { JTreeInterfaceFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';
      //not GWT import const JTreeInterfaceFactory = globalThis.org.allbinary.input.automation.actions.script.JTreeInterfaceFactory;

      
import { ProfileActionScriptItem } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js';
      //not GWT import const ProfileActionScriptItem = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptItem;

      
import { ProfileActionScriptNodeInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';
      //not GWT import const ProfileActionScriptNodeInterface = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptNodeInterface;

      
import { ProfileActionScriptProcessorInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/ProfileActionScriptProcessorInterface.js';
      //not GWT import const ProfileActionScriptProcessorInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.ProfileActionScriptProcessorInterface;

      
import { GenericProfileActionScriptInputData } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/GenericProfileActionScriptInputData.js';
      //not GWT import const GenericProfileActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.GenericProfileActionScriptInputData;

      
import { KeyboardActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/KeyboardActionScriptInput.js';
      //not GWT import const KeyboardActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.KeyboardActionScriptInput;

      
import { MouseActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/MouseActionScriptInput.js';
      //not GWT import const MouseActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInput;

      
import { ProfileActionScriptInputFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/ProfileActionScriptInputFactory.js';
      //not GWT import const ProfileActionScriptInputFactory = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.ProfileActionScriptInputFactory;

      
import { GenericProfileActionScriptOutputData } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/GenericProfileActionScriptOutputData.js';
      //not GWT import const GenericProfileActionScriptOutputData = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.GenericProfileActionScriptOutputData;

      
import { ImageActionScriptOutput } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ImageActionScriptOutput.js';
      //not GWT import const ImageActionScriptOutput = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutput;

      
import { ProfileActionScriptOutputFactory } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ProfileActionScriptOutputFactory.js';
      //not GWT import const ProfileActionScriptOutputFactory = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ProfileActionScriptOutputFactory;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptConditionInterface } from './ProfileActionScriptConditionInterface.js';
//not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

                import { GenericProfileActionScriptConditionData } from './GenericProfileActionScriptConditionData.js';
//not GWT import const GenericProfileActionScriptConditionData = globalThis.org.allbinary.input.automation.actions.script.condition.GenericProfileActionScriptConditionData;

                import { ProfileActionScriptConditionFactory } from './ProfileActionScriptConditionFactory.js';
//not GWT import const ProfileActionScriptConditionFactory = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionFactory;

                import { JMenu } from './JMenu.js';
//not GWT import const JMenu = globalThis.org.allbinary.input.automation.actions.script.condition.JMenu;

                import { JMenuItem } from './JMenuItem.js';
//not GWT import const JMenuItem = globalThis.org.allbinary.input.automation.actions.script.condition.JMenuItem;

                import { TimeIntervalActionScriptCondition } from './TimeIntervalActionScriptCondition.js';
//not GWT import const TimeIntervalActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.TimeIntervalActionScriptCondition;

                import { AlwaysActionScriptCondition } from './AlwaysActionScriptCondition.js';
//not GWT import const AlwaysActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.AlwaysActionScriptCondition;

                import { ColorAtActionScriptCondition } from './ColorAtActionScriptCondition.js';
//not GWT import const ColorAtActionScriptCondition = globalThis.org.allbinary.input.automation.actions.script.condition.ColorAtActionScriptCondition;

                
export class BasicProfileActionScriptCondition extends ProfileActionScriptItem implements ProfileActionScriptConditionInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private profileActionProcessorInterfaceVector: BasicArrayList;

    private profileActionConditionInterfaceVector: BasicArrayList;

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
this.setProfileActionProcessorInterfaceVector(new BasicArrayListD());
    
this.setProfileActionConditionInterfaceVector(new BasicArrayListD());
    
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
    

    var profileActionConditionInterfaceVector: BasicArrayList = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = profileActionConditionInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = profileActionConditionInterfaceVector!.get(index) as ProfileActionScriptConditionInterface;;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}


    var profileActionProcessorInterfaceVector: BasicArrayList = this.getProfileActionProcessorInterfaceVector()!;;
    

    var size2: number = profileActionProcessorInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {

    var profileActionProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;;
    
node.appendChild(profileActionProcessorInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getProfileActionConditionInterfaceVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionConditionInterfaceVector;
    
}


    public setProfileActionConditionInterfaceVector(profileActionConditionInterfaceVector: BasicArrayList){
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


    public getProfileActionProcessorInterfaceVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profileActionProcessorInterfaceVector;
    
}


    public setProfileActionProcessorInterfaceVector(profileActionProcessorInterfaceVector: BasicArrayList){
this.profileActionProcessorInterfaceVector= profileActionProcessorInterfaceVector;
    
}


    updateTree(){
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

    var treePath: TreePath = new TreePath(this);;
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.getActionScriptJTree()!.expandPath(treePath);
    
}


                //@Throws(Exception.constructor)
            
    public shouldProcess(frame: Long): boolean{

    var profileActionConditionInterfaceVector: BasicArrayList = this.getProfileActionConditionInterfaceVector()!;;
    

    var size: number = profileActionConditionInterfaceVector!.size()!;;
    




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
    

    var profileActionProcessorInterfaceVector: BasicArrayList = this.getProfileActionProcessorInterfaceVector()!;;
    

    var size: number = profileActionProcessorInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var profileActionScriptProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;;
    
profileActionScriptProcessorInterface!.process(frame);
    
}

}


}



