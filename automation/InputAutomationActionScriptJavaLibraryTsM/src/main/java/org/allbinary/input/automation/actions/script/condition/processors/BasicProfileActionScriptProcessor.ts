
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { ActionEvent } from '../../../../../../../../java/awt/event/ActionEvent.js';
      //not GWT import const ActionEvent = globalThis.java.awt.event.ActionEvent;

      
import { JTreeInterfaceFactory } from '../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';
      //not GWT import const JTreeInterfaceFactory = globalThis.org.allbinary.input.automation.actions.script.JTreeInterfaceFactory;

      
import { ProfileActionScriptItem } from '../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js';
      //not GWT import const ProfileActionScriptItem = globalThis.org.allbinary.input.automation.actions.script.ProfileActionScriptItem;

      
import { ProfileActionScriptConditionInterface } from '../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      //not GWT import const ProfileActionScriptConditionInterface = globalThis.org.allbinary.input.automation.actions.script.condition.ProfileActionScriptConditionInterface;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptProcessorInterface } from './ProfileActionScriptProcessorInterface.js';
import { GenericProfileActionScriptProcessorData } from './GenericProfileActionScriptProcessorData.js';

export class BasicProfileActionScriptProcessor extends ProfileActionScriptItem implements ProfileActionScriptProcessorInterface {
        

public constructor (label: string, node: Node){
            super(label, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (label: string){
            super(label);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public actionPerformed(actionEvent: ActionEvent){
super.actionPerformed(actionEvent);
    

                        if(actionEvent!.getActionCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                    
                        if(this.getParent() instanceof ProfileActionScriptConditionInterface)
                        
                                    {
                                    
    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = this.getParent() as ProfileActionScriptConditionInterface;;
    
profileActionScriptConditionInterface!.removeProcessor(this as ProfileActionScriptProcessorInterface);
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

                                    }
                                

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionScriptProcessorData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



