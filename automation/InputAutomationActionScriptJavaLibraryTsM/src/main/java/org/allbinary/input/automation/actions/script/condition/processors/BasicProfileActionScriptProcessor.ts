
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
        



import { ActionEvent } from "../../../../../../../../java/awt/event/ActionEvent.js";

    
import { JTreeInterfaceFactory } from "../../../../../../../../org/allbinary/input/automation/actions/script/JTreeInterfaceFactory.js";

    
import { ProfileActionScriptItem } from "../../../../../../../../org/allbinary/input/automation/actions/script/ProfileActionScriptItem.js";

    
import { ProfileActionScriptConditionInterface } from "../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

import { GenericProfileActionScriptProcessorData } from "./GenericProfileActionScriptProcessorData.js";

export class BasicProfileActionScriptProcessor extends ProfileActionScriptItem
                , ProfileActionScriptProcessorInterface {
        
public constructor (label: string, node: Node)                        

                            : super(label, node){

            super();
            var label = label
var node = node


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (label: string)                        

                            : super(label){

            super();
            var label = label


                            //For kotlin this is before the body of the constructor.
                    
}


    public actionPerformed(actionEvent: ActionEvent){
var actionEvent = actionEvent
super.actionPerformed(actionEvent);
    

                        if(actionEvent!.getActionCommand()!.compareTo(DELETE) == 0)
                        
                                    {
                                    
                        if(this.getParent();

                         is ProfileActionScriptConditionInterface)
                        
                                    {
                                    
    var profileActionScriptConditionInterface: ProfileActionScriptConditionInterface = this.getParent();

                         as ProfileActionScriptConditionInterface;
        
        
;
    
profileActionScriptConditionInterface!.removeProcessor(this as ProfileActionScriptProcessorInterface);
    
JTreeInterfaceFactory.getInstance()!.getJTreeInterface()!.updateJTree();
    

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionScriptProcessorData.NAME)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

