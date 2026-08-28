
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { TextField } from '../../../../../javax/microedition/lcdui/TextField.js';
      const TextField = globalThis.javax.microedition.lcdui.TextField;

      
//not game specific package import { PostGameCommandFactory } from '../../../../../org/allbinary/PostGameCommandFactory.js';
      const PostGameCommandFactory = globalThis.org.allbinary.PostGameCommandFactory;

      
//not game specific package import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
      const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
//not game specific package import { HighScoresHelperBaseInterface } from '../../../../../org/allbinary/game/score/HighScoresHelperBaseInterface.js';
      const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

      
//not game specific package import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { CustomTextBox } from '../../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
      const SimpleTextPaintable = globalThis.org.allbinary.graphics.paint.SimpleTextPaintable;

      
//not game specific package import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
//not game specific package import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
//not game specific package import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
      const InApplicationPurchaseFactory = globalThis.org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoreUtil } from './HighScoreUtil.js';

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



