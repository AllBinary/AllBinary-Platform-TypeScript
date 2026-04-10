
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
        



import { ProfileActionScriptConditionInterface } from "../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js";

    
import { GenericProfileAction } from "../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js";

    
import { GenericProfileActionJPanel } from "../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js";

    
import { LogUtil } from "../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class RemoveActionScriptItemJPanel extends java.awt.Panel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private genericProfileActionJPanel: GenericProfileActionJPanel

    private profileActionScriptConditionInterface: ProfileActionScriptConditionInterface
public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, profileActionScriptConditionInterface: ProfileActionScriptConditionInterface){

            super();
            var genericProfileActionJPanel = genericProfileActionJPanel
var profileActionScriptConditionInterface = profileActionScriptConditionInterface
initComponents()
this.genericProfileActionJPanel= genericProfileActionJPanel
this.profileActionScriptConditionInterface= profileActionScriptConditionInterface
}


    initComponents(){
removeJButton= javax.swing.JButton()
setLayout(java.awt.GridLayout())
removeJButton!.setText("Remove")
removeJButton!.addActionListener(object: java.awt.event.ActionListener()
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt
removeJButtonActionPerformed(evt)
}

                                }
                            )
add(removeJButton)
}


    removeJButtonActionPerformed(evt: java.awt.event.ActionEvent){
var evt = evt

    var genericProfileAction: GenericProfileAction = this.genericProfileActionJPanel!.getGenericProfileAction()!;
        
        


                        if(genericProfileAction == 
                                    null
                                )
                        
                                    {
                                    logUtil!.put("GenericProfileAction was null", this, "removeJButtonActionPerformed")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
genericProfileAction!.getGenericProfileActionScript()!.removeCondition(this.profileActionScriptConditionInterface)
this.genericProfileActionJPanel!.updateProfileActionUI()
}


    private removeJButton: javax.swing.JButton

}
                
            

