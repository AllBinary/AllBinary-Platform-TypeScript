
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { ActionEvent } from '../../../../../../java/awt/event/ActionEvent.js';

    
import { ActionListener } from '../../../../../../java/awt/event/ActionListener.js';

    
import { swing } from '../../../../../../javax/swing.js';

    
import { DefaultMutableTreeNode } from '../../../../../../javax/swing/tree/DefaultMutableTreeNode.js';

    
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';

    
import { Node } from '../../../../../../org/w3c/dom/Node.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptItemInterface } from './ProfileActionScriptItemInterface.js';
import { JPopupMenu } from './JPopupMenu.js';
import { JMenuItem } from './JMenuItem.js';

export class ProfileActionScriptItem extends DefaultMutableTreeNode implements ProfileActionScriptItemInterface, ActionListener {
        

    private static readonly EDIT: string = "Edit";

    static readonly DELETE: string = "Delete";

    static readonly NEW_CONDITION: string = "New Condition";

    static readonly NEW_INPUT: string = "New Input";

    static readonly NEW_OUTPUT: string = "New Output";

    static readonly NEW_COLOR_AT: string = "Color At";

    static readonly NEW_TIME_INTERVAL: string = "Time Interval";

    static readonly NEW_ALWAYS: string = "Always On/Off";

    static readonly NEW_KEY_INPUT: string = "Key";

    static readonly NEW_MOUSE_INPUT: string = "Mouse";

    static readonly NEW_JOYSTICK_INPUT: string = "Joystick";

    static readonly NEW_IMAGE_OUTPUT: string = "Image";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private jPopupMenu: JPopupMenu
public constructor (label: string, node: Node){
            super(label);
                    var label = label
var node = node


                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
this.logUtil!.putF("Label: " +label, this, this.commonStrings!.CONSTRUCTOR);
    
}

public constructor (label: string){
            super(label);
                    var label = label


                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
this.logUtil!.putF("Label: " +label, this, this.commonStrings!.CONSTRUCTOR);
    
}


    init(){
this.setJPopupMenu(new JPopupMenu());
    

    var jMenuItemEdit: JMenuItem = new JMenuItem(EDIT);
;
    

    var jMenuItemDelete: JMenuItem = new JMenuItem(DELETE);
;
    
jMenuItemEdit!.addActionListener(this);
    
jMenuItemDelete!.addActionListener(this);
    
this.getJPopupMenu()!.add(jMenuItemEdit);
    
this.getJPopupMenu()!.add(jMenuItemDelete);
    
}


                //@Throws(Exception.constructor)
            
    public process(frame: number){
var frame = frame



                            throw Error();
                    
}


    public getJPopupMenu(): JPopupMenu{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.jPopupMenu;
    
}


    public showDialog(){



                            throw Error();
                    
}


    public actionPerformed(actionEvent: ActionEvent){
var actionEvent = actionEvent

                        if(actionEvent!.getActionCommand()!.localeCompare(ProfileActionScriptItem.EDIT) == 0)
                        
                                    {
                                    this.showDialog();
    

                                    }
                                
}


    public setJPopupMenu(jPopupMenu: JPopupMenu){
var jPopupMenu = jPopupMenu
this.jPopupMenu= jPopupMenu;
    
}


}
                
            

