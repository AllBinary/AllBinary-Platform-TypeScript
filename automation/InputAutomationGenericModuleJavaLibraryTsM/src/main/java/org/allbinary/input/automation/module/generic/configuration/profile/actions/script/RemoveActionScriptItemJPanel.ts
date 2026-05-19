
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
        



            import { Object } from '../../../../../../../../../../java/lang/Object.js';


        
import { ProfileActionScriptConditionInterface } from '../../../../../../../../../../org/allbinary/input/automation/actions/script/condition/ProfileActionScriptConditionInterface.js';
      
import { GenericProfileAction } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileAction.js';
      
import { GenericProfileActionJPanel } from '../../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionJPanel.js';
      
import { LogUtil } from '../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Panel } from './Panel.js';
import { JButton } from './JButton.js';
import { GridLayout } from './GridLayout.js';
import { ActionListener } from './ActionListener.js';
import { ActionEvent } from './ActionEvent.js';

export class RemoveActionScriptItemJPanel extends java.awt.Panel {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private genericProfileActionJPanel: GenericProfileActionJPanel

    private profileActionScriptConditionInterface: ProfileActionScriptConditionInterface
public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, profileActionScriptConditionInterface: ProfileActionScriptConditionInterface){

            super();
        this.initComponents();
    
this.genericProfileActionJPanel= genericProfileActionJPanel;
    
this.profileActionScriptConditionInterface= profileActionScriptConditionInterface;
    
}


    initComponents(){
this.removeJButton= new javax.swing.JButton();
    
setLayout(new java.awt.GridLayout());
    
this.removeJButton!.setText("Remove");
    
this.removeJButton!.addActionListener(new class extends java.awt.event.ActionListener
                                {
                                
    public actionPerformed(evt: java.awt.event.ActionEvent){
removeJButtonActionPerformed(evt);
    
}

                                }
                            );
    
add(this.removeJButton);
    
}


    removeJButtonActionPerformed(evt: java.awt.event.ActionEvent){

    var genericProfileAction: GenericProfileAction = this.genericProfileActionJPanel!.getGenericProfileAction()!;
;
    

                        if(genericProfileAction == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("GenericProfileAction was null", this, "removeJButtonActionPerformed");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
genericProfileAction!.getGenericProfileActionScript()!.removeCondition(this.profileActionScriptConditionInterface);
    
this.genericProfileActionJPanel!.updateProfileActionUI();
    
}


    private removeJButton: javax.swing.JButton

}
                
            

