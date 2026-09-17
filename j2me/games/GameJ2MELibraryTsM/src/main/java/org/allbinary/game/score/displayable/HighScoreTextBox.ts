
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { TextField } from '../../../../../javax/microedition/lcdui/TextField.js';
//not GWT import const TextField

import { PostGameCommandFactory } from '../../../../../org/allbinary/PostGameCommandFactory.js';
//not GWT import const PostGameCommandFactory

import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo

import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
//not GWT import const HighScore

import { HighScoresHelperBaseInterface } from '../../../../../org/allbinary/game/score/HighScoresHelperBaseInterface.js';
//not GWT import const HighScoresHelperBaseInterface

import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
//not GWT import const HighScoresFactoryInterface

import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { CustomTextBox } from '../../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
//not GWT import const CustomTextBox

import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable

import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable

import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
//not GWT import const SimpleTextPaintable

import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const VirtualKeyboardEventHandler

import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem

import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
//not GWT import const InApplicationPurchaseFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoreUtil } from './HighScoreUtil.js';
//not GWT import - same folder const HighScoreUtil

export class HighScoreTextBox extends CustomTextBox {
        

    private readonly virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;

    private readonly highScoreUtil: HighScoreUtil;

    private readonly pleaseWait: Paintable = new SimpleTextPaintable(this.commonStrings!.PLEASE_WAIT, BasicColorFactory.getInstance()!.WHITE);

    private paintable: Paintable = NullPaintable.getInstance()!;

    public submitted: boolean = false;

public constructor (highScoresFactoryInterface: HighScoresFactoryInterface, highScoresHelper: HighScoresHelperBaseInterface, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, cmdListener: CommandListener, name: string, highScore: HighScore, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, "New High Score Enter Name:", name, 12, TextField.ANY, Font.getDefaultFont(), backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.highScoreUtil= new HighScoreUtil(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    
    var username: string = InApplicationPurchaseFactory.getInstance()!.getUserName()!;;
    

                        if(username != 
                                    null
                                )
                        
                                    {
                                    this.getTextFieldItem()!.setString(username);
    

                                    }
                                
                        else {
                            this.getTextFieldItem()!.setString("NoGamerInfo");
    

                        }
                            

                                    }
                                
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
PostGameCommandFactory.getInstance()!.addCommands(this);
    
this.addCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND);
    
this.setCommandListener(cmdListener);
    
}


    public open(){
this.virtualKeyboardEventHandler!.open();
    
this.paintable= NullPaintable.getInstance();
    
super.open();
    
}


    public close(){
this.virtualKeyboardEventHandler!.close();
    
this.paintable= this.pleaseWait;
    
this.repaintBehavior!.onChangeRepaint(this);
    
super.close();
    
this.removeCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND);
    
this.update();
    

                        if(this.submitted)
                        
                                    {
                                    this.highScoreUtil!.saveHighScore();
    

                                    }
                                
                        else {
                            
                        }
                            
this.paintable= NullPaintable.getInstance();
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Exception.constructor)
            
    public update(){

    var name: string = this.getTextFieldItem()!.getString()!;;
    
this.highScoreUtil!.update(name);
    
super.update();
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
this.paintable.paint(graphics);
    
}


    public saveHighScore(){
this.highScoreUtil!.saveHighScore();
    
}


    public submit(){
this.highScoreUtil!.submit(this);
    
}


}



