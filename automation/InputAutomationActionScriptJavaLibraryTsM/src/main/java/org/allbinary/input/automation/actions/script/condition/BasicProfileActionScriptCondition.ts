
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
import { ActionEvent } from '../../../../../../../java/awt/event/ActionEvent.js';

    
import { Vector } from '../../../../../../../java/util/Vector.js';

    
import { swing } from '../../../../../../../javax/swing.js';

    
import { TreePath } from '../../../../../../../javax/swing/tree/TreePath.js';

    
import { JTreeInterfaceFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';

    
import { ProfileActionScriptItem } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js';

    
import { ProfileActionScriptNodeInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptNodeInterface.js';

    
import { ProfileActionScriptProcessorInterface } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/ProfileActionScriptProcessorInterface.js';

    
import { GenericProfileActionScriptInputData } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/GenericProfileActionScriptInputData.js';

    
import { KeyboardActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/KeyboardActionScriptInput.js';

    
import { MouseActionScriptInput } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/MouseActionScriptInput.js';

    
import { ProfileActionScriptInputFactory } from '../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/input/ProfileActionScriptInputFactory.js';

    
import { GenericProfileActionScriptOutputData } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/GenericProfileActionScriptOutputData.js';

    
import { ImageActionScriptOutput } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ImageActionScriptOutput.js';

    
import { ProfileActionScriptOutputFactory } from '../../../../../../../org/allbinary/input/automation/module/actions/script/condition/processors/output/ProfileActionScriptOutputFactory.js';

    
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';

    
import { Document } from '../../../../../../../org/w3c/dom/Document.js';

    
import { Node } from '../../../../../../../org/w3c/dom/Node.js';

    
import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';

    

















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

    private profileActionProcessorInterfaceVector: Vector

    private profileActionConditionInterfaceVector: Vector
public constructor (label: string, node: Node){
            super(label, node);
                    var label = label
var node = node


                            //For kotlin this is before the body of the constructor.
                    
this.init();
    

    var nodeList: NodeList = node.getChildNodes()!;
;
    




                        for (
    var index: number = 0;
index < nodeList!.getLength(); index++)
        {

    var actionItemNode: Node = nodeList!.item(index)!;
;
    

                        if(actionItemNode!.getNodeType() == Node.ELEMENT_NODE)
                        
                                    {
                                    
                        if(actionItemNode!.getNodeName()!.localeCompare(GenericProfileActionScriptConditionData.NAME) == 0)
                        
                                    {
                                    this.addCondition(ProfileActionScriptConditionFactory.getInstance(actionItemNode));
    

                                    }
                                
                             else 
                        if(actionItemNode!.getNodeName()!.localeCompare(GenericProfileActionScriptInputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptInputFactory.getInstance(actionItemNode));
    

                                    }
                                
                             else 
                        if(actionItemNode!.getNodeName()!.localeCompare(GenericProfileActionScriptOutputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptOutputFactory.getInstance(actionItemNode));
    

                                    }
                                

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public addProcessorNodes(node: Node){
var node = node

    var nodeList: NodeList = node.getChildNodes()!;
;
    




                        for (
    var index: number = 0;
index < nodeList!.getLength(); index++)
        {

    var processorActionItemNode: Node = nodeList!.item(index)!;
;
    

                        if(processorActionItemNode!.getNodeName()!.localeCompare(GenericProfileActionScriptInputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptInputFactory.getInstance(processorActionItemNode));
    

                                    }
                                
                             else 
                        if(processorActionItemNode!.getNodeName()!.localeCompare(GenericProfileActionScriptOutputData.NAME) == 0)
                        
                                    {
                                    this.addProcessor(ProfileActionScriptOutputFactory.getInstance(processorActionItemNode));
    

                                    }
                                
}

}

public constructor (label: string){
            super(label);
                    var label = label


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

    var jMenu: JMenu = new JMenu(NEW_CONDITION);
;
    

    var jMenuItemColorAt: JMenuItem = new JMenuItem(NEW_COLOR_AT);
;
    

    var jMenuItemAlways: JMenuItem = new JMenuItem(NEW_ALWAYS);
;
    

    var jMenuItemTimeInterval: JMenuItem = new JMenuItem(NEW_TIME_INTERVAL);
;
    
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

    var jMenu: JMenu = new JMenu(NEW_INPUT);
;
    

    var jMenuItemKey: JMenuItem = new JMenuItem(NEW_KEY_INPUT);
;
    

    var jMenuItemMouse: JMenuItem = new JMenuItem(NEW_MOUSE_INPUT);
;
    

    var jMenuItemJoystick: JMenuItem = new JMenuItem(NEW_JOYSTICK_INPUT);
;
    
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

    var jMenu: JMenu = new JMenu(NEW_OUTPUT);
;
    

    var jMenuItemImage: JMenuItem = new JMenuItem(NEW_IMAGE_OUTPUT);
;
    
jMenuItemImage!.addActionListener(this);
    
jMenu!.add(jMenuItemImage);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return jMenu;
    
}


    public addProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface){
var profileActionProcessorInterface = profileActionProcessorInterface
this.logUtil!.putF(this.commonStrings!.START, this, "addInput");
    
this.getProfileActionProcessorInterfaceVector()!.add(profileActionProcessorInterface);
    
this.add(profileActionProcessorInterface);
    
}


    public removeProcessor(profileActionProcessorInterface: ProfileActionScriptProcessorInterface){
var profileActionProcessorInterface = profileActionProcessorInterface
this.logUtil!.putF(this.commonStrings!.START, this, "removeInput");
    
this.getProfileActionProcessorInterfaceVector()!.remove(profileActionProcessorInterface);
    
this.remove(profileActionProcessorInterface);
    
}


    public removeCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
var profileActionScriptNodeInterface = profileActionScriptNodeInterface
this.logUtil!.putF(this.commonStrings!.START, this, "removeCondition");
    
this.getProfileActionConditionInterfaceVector()!.remove(profileActionScriptNodeInterface);
    
this.remove(profileActionScriptNodeInterface);
    
}


    public addCondition(profileActionScriptNodeInterface: ProfileActionScriptNodeInterface){
var profileActionScriptNodeInterface = profileActionScriptNodeInterface
this.logUtil!.putF(this.commonStrings!.START, this, "addCondition");
    
this.getProfileActionConditionInterfaceVector()!.add(profileActionScriptNodeInterface);
    
this.add(profileActionScriptNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionScriptConditionData.NAME)!;
;
    

    var profileActionConditionInterfaceVector: Vector = this.getProfileActionConditionInterfaceVector()!;
;
    

    var size: number = profileActionConditionInterfaceVector!.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var profileActionConditionInterface: ProfileActionScriptConditionInterface = profileActionConditionInterfaceVector!.get(index) as ProfileActionScriptConditionInterface;
;
    
node.appendChild(profileActionConditionInterface!.toXmlNode(document));
    
}


    var profileActionProcessorInterfaceVector: Vector = this.getProfileActionProcessorInterfaceVector()!;
;
    

    var size2: number = profileActionProcessorInterfaceVector!.length!;
;
    




                        for (
    var index: number = 0;
index < size2; index++)
        {

    var profileActionProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;
;
    
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
var profileActionConditionInterfaceVector = profileActionConditionInterfaceVector
this.profileActionConditionInterfaceVector= profileActionConditionInterfaceVector;
    
}


    public actionPerformed(actionEvent: ActionEvent){
var actionEvent = actionEvent

        try {
            super.actionPerformed(actionEvent);
    

                        if(actionEvent!.getActionCommand()!.localeCompare(DELETE) == 0)
                        
                                    {
                                    
                        if(this.getParent() instanceof ProfileActionScriptNodeInterface)
                        
                                    {
                                    
    var profileActionScriptNodeInterface: ProfileActionScriptNodeInterface = this.getParent() as ProfileActionScriptNodeInterface;
;
    
profileActionScriptNodeInterface!.removeCondition(this);
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

                                    }
                                

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_COLOR_AT) == 0)
                        
                                    {
                                    this.addCondition(new ColorAtActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_ALWAYS) == 0)
                        
                                    {
                                    this.addCondition(new AlwaysActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_TIME_INTERVAL) == 0)
                        
                                    {
                                    this.addCondition(new TimeIntervalActionScriptCondition());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_KEY_INPUT) == 0)
                        
                                    {
                                    this.addProcessor(new KeyboardActionScriptInput());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_MOUSE_INPUT) == 0)
                        
                                    {
                                    this.addProcessor(new MouseActionScriptInput());
    
this.updateTree();
    

                                    }
                                
                             else 
                        if(actionEvent!.getActionCommand()!.localeCompare(NEW_IMAGE_OUTPUT) == 0)
                        
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
var profileActionProcessorInterfaceVector = profileActionProcessorInterfaceVector
this.profileActionProcessorInterfaceVector= profileActionProcessorInterfaceVector;
    
}


    updateTree(){
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

    var treePath: TreePath = new TreePath(this);
;
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.getActionScriptJTree()!.expandPath(treePath);
    
}


                //@Throws(Exception.constructor)
            
    public shouldProcess(frame: number): boolean{
var frame = frame

    var profileActionConditionInterfaceVector: Vector = this.getProfileActionConditionInterfaceVector()!;
;
    

    var size: number = profileActionConditionInterfaceVector!.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = profileActionConditionInterfaceVector!.get(index) as ProfileActionScriptConditionInterface;
;
    

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
            
    public process(frame: number){
var frame = frame
this.logUtil!.putF(new StringMaker().
                            append("Start - Processing ")!.appendint(this.getProfileActionProcessorInterfaceVector()!.size())!.append(" inputs")!.toString(), this, commonStrings!.PROCESS);
    

    var profileActionProcessorInterfaceVector: Vector = this.getProfileActionProcessorInterfaceVector()!;
;
    

    var size: number = profileActionProcessorInterfaceVector!.length!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var profileActionScriptProcessorInterface: ProfileActionScriptProcessorInterface = profileActionProcessorInterfaceVector!.get(index) as ProfileActionScriptProcessorInterface;
;
    
profileActionScriptProcessorInterface!.process(frame);
    
}

}


}
                
            

