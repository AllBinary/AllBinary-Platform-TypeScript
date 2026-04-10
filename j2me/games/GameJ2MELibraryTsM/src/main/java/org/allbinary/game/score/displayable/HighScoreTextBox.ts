
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
        



import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { TextField } from "../../../../../javax/microedition/lcdui/TextField.js";

    
import { PostGameCommandFactory } from "../../../../../org/allbinary/PostGameCommandFactory.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { HighScore } from "../../../../../org/allbinary/game/score/HighScore.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { HighScoresHelperBase } from "../../../../../org/allbinary/game/score/HighScoresHelperBase.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CustomTextBox } from "../../../../../org/allbinary/graphics/form/item/CustomTextBox.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { SimpleTextPaintable } from "../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js";

    
import { VirtualKeyboardEventHandler } from "../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GenericOperatingSystem } from "../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { InApplicationPurchaseFactory } from "../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js";

    

export class HighScoreTextBox extends CustomTextBox {
        

    private readonly virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;
        
        

    private readonly highScoreUtil: HighScoreUtil

    private readonly pleaseWait: Paintable = new SimpleTextPaintable(commonStrings!.PLEASE_WAIT, BasicColorFactory.getInstance()!.WHITE);
        
        

    private paintable: Paintable = NullPaintable.getInstance()!;
        
        

    public submitted: boolean = false;
        
        
public constructor (highScoresFactoryInterface: HighScoresFactoryInterface, highScoresHelper: HighScoresHelperBase, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, cmdListener: CommandListener, name: string, highScore: HighScore, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(cmdListener, "New High Score Enter Name:", name, 12, TextField.ANY, backgrounBasicColor, foregroundBasicColor){

            super();
                //var highScoresFactoryInterface = highScoresFactoryInterface
    //var highScoresHelper = highScoresHelper
    //var abeClientInformation = abeClientInformation
    //var gameInfo = gameInfo
    //var cmdListener = cmdListener
    //var name = name
    //var highScore = highScore
    //var backgrounBasicColor = backgrounBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
highScoreUtil= HighScoreUtil(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore)

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        


    
                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    
    var username: string = InApplicationPurchaseFactory.getInstance()!.getUserName()!;
        
        


    
                        if(username != 
                                    null
                                )
                        
                                    {
                                    setString(username)

                                    }
                                
                        else {
                            setString("NoGamerInfo")

                        }
                            

                                    }
                                
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands()
addCommands(this)
this.addCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND)
this.setCommandListener(cmdListener)
}


    public open(){
open()
this.paintable= NullPaintable.getInstance()
open()
}


    public close(){
close()
this.paintable= this.pleaseWait
onChangeRepaint(this)
close()
this.removeCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND)
this.update()

    
                        if(this.submitted)
                        
                                    {
                                    saveHighScore()

                                    }
                                
                        else {
                            
                        }
                            
this.paintable= NullPaintable.getInstance()
onChangeRepaint(this)
}


                @Throws(Exception::class)
            
    public update(){

    var name: string = this.getTextFieldItem()!.getString()!;
        
        

update(name)
update()
}


    public paint(graphics: Graphics){
var graphics = graphics
paint(graphics)
paint(graphics)
}


    public saveHighScore(){
saveHighScore()
}


    public submit(){
submit(this)
}


}
                
            

