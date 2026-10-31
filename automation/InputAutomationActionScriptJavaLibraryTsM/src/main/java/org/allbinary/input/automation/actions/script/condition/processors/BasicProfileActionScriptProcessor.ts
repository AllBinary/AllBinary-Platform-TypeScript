
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
//not GWT import const ActionEvent

import { JTreeInterfaceFactory } from '../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js';
//not GWT import const JTreeInterfaceFactory

import { ProfileActionScriptItem } from '../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js';
//not GWT import const ProfileActionScriptItem

import { ProfileActionScriptConditionInterface } from '../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
//not GWT import const ProfileActionScriptConditionInterface

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptProcessorInterface } from './ProfileActionScriptProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const ProfileActionScriptProcessorInterface
import { GenericProfileActionScriptProcessorData } from './GenericProfileActionScriptProcessorData.js';
//sameFolderImports - not GWT import - same folder const GenericProfileActionScriptProcessorData

export class BasicProfileActionScriptProcessor extends ProfileActionScriptItem implements ProfileActionScriptProcessorInterface {
        

    public constructor(...args: any[]) {
        if(args.length === 2) {
            const label = args[0];
            const node = args[1];
            super(label, node);
            this.constructor$0(label, node);
            
        }
        else if(args.length === 1) {
            const label = args[0];
            super(label);
            this.constructor$1(label);
            
        }
        
    }
    
    private constructor$0(label: string, node: Node): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(label: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    public actionPerformed(actionEvent: ActionEvent){
super.actionPerformed(actionEvent);
    

                        if(actionEvent!.getActionCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                    
                        if(this.getParent() instanceof ProfileActionScriptConditionInterface)
                        
                                    {
                                    
    let profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = this.getParent() as ProfileActionScriptConditionInterface;;
    
profileActionScriptConditionInterface!.removeProcessor(this as ProfileActionScriptProcessorInterface);
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

                                    }
                                

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(GenericProfileActionScriptProcessorData.NAME)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

