
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
//not plain js import { Font } from '../../../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { GameAdStateFactory } from '../../../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
      //not GWT import const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
import { Processor } from '../../../../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { GameAdState } from '../../../../../../../org/allbinary/game/GameAdState.js';
      //not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
import { GameNotification } from '../../../../../../../org/allbinary/game/ag/layer/hud/basic/notification/GameNotification.js';
      //not GWT import const GameNotification = globalThis.org.allbinary.game.ag.layer.hud.basic.notification.GameNotification;

      
import { GameNotificationHud } from '../../../../../../../org/allbinary/game/ag/layer/hud/basic/notification/GameNotificationHud.js';
      //not GWT import const GameNotificationHud = globalThis.org.allbinary.game.ag.layer.hud.basic.notification.GameNotificationHud;

      
import { GameNotificationEventHandler } from '../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      //not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
import { CustomGPoint } from '../../../../../../../org/allbinary/graphics/CustomGPoint.js';
      //not GWT import const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;

      
//not plain js import { GPoint } from '../../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { BasicColor } from '../../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { DisplayInfoSingleton } from '../../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { UpdateMyFontInterface } from '../../../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { GameTickTimeDelayHelper } from '../../../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      //not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      //not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { CircularIndexUtil } from '../../../../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import { SetAndRemoveProcessor } from './SetAndRemoveProcessor.js';
//not GWT import const  = globalThis.org.allbinary.game.ag.layer.hud.basic.SetAndRemoveProcessor;

                //import { NextUnremoveableProcessor } from './NextUnremoveableProcessor.js';
//not GWT import const  = globalThis.org.allbinary.game.ag.layer.hud.basic.NextUnremoveableProcessor;

                
export class PlayerGameNotificationHud extends GameNotificationHud implements UpdateMyFontInterface {
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly circularIndexUtil: CircularIndexUtil;

    private readonly gameNotification: GameNotification = new GameNotification();

    private readonly permanentGameNotification: GameNotification = new GameNotification();

//inner= member=true isStatic=
SetAndRemoveProcessor = class extends Processor {
        

    private readonly updateMeasurementProcessor: PlayerGameNotificationHud;

public constructor (updateMeasurementProcessor: PlayerGameNotificationHud){

            super();
        this.updateMeasurementProcessor= updateMeasurementProcessor;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.updateMeasurementProcessor!.setAndRemoveProcess();
    
}


}


//inner= member=true isStatic=
NextUnremoveableProcessor = class extends Processor {
        

    private readonly updateMeasurementProcessor: PlayerGameNotificationHud;

public constructor (updateMeasurementProcessor: PlayerGameNotificationHud){

            super();
        this.updateMeasurementProcessor= updateMeasurementProcessor;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.updateMeasurementProcessor!.setNextUnremoveableProcess();
    
}


}


    private readonly setAndRemoveProcessor: Processor = new this.SetAndRemoveProcessor(this);

    private readonly nextUnremoveableProcessor: Processor = new this.NextUnremoveableProcessor(this);

    private processor: Processor = Processor.getInstance()!;

    private readonly PERMANENT_GAME_NOTIFICATION: string = "Permanent Game Notification: ";

    private lastString: string = StringUtil.getInstance()!.EMPTY_STRING;

    private string: string = this.EMPTY_STRING;

    private point: CustomGPoint = CustomGPoint.NULL_CUSTOM_POINT;

    private width: number= 0;

public constructor (location: number, direction: number, bufferZone: number, basicColor: BasicColor){
            super(location, direction, bufferZone, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.circularIndexUtil= CircularIndexUtil.createInstance(0);
    

    var gameNotificationEventHandler: GameNotificationEventHandler = GameNotificationEventHandler.getInstance()!;;
    
gameNotificationEventHandler!.removeAllListeners();
    
gameNotificationEventHandler!.addListenerInterface(this);
    
}


    public updateMeasurement(graphics: Graphics){

        try {
            super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.width= font.stringWidth(this.string);
    
this.processor.process();
    
this.processor= Processor.getInstance();
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


    getPoint(x: number, y: number): GPoint{
this.point= CustomGPoint.getInstance3(0, 0);
    
this.point.setX(x);
    
this.point.setY(y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.point;
    
}


    add(string: string, seconds: Integer, basicColor: BasicColor, permanent: Boolean){

                        if(permanent.valueOf())
                        
                                    {
                                    
                        if(this.lastString != string)
                        
                                    {
                                    this.lastString= string;
    
this.logUtil!.putF(new StringMaker().append(this.PERMANENT_GAME_NOTIFICATION)!.append(string)!.toString(), this, this.commonStrings!.ADD);
    

                                    }
                                
this.permanentGameNotification!.add(string, seconds, basicColor);
    
this.circularIndexUtil!.setSize(this.permanentGameNotification!.getSize());
    

                                    }
                                
                        else {
                            this.gameNotification!.add(string, seconds, basicColor);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public processTick(){

                        if(this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    
    var gameAdState: GameAdState = GameAdStateFactory.getInstance()!.getCurrentInstance()!;;
    

                        if(gameAdState!.isShowingAtLocation(this.getLocation()))
                        
                                    {
                                    this.offsetY=  -54;
    

                                    }
                                
                        else {
                            this.offsetY= 0;
    

                        }
                            

                        if(this.gameNotification!.getSize() > 0)
                        
                                    {
                                    this.setAndRemove();
    

                                    }
                                
                             else 
                        if(this.permanentGameNotification!.getSize() > 0)
                        
                                    {
                                    this.setNextUnremoveable();
    

                                    }
                                
                        else {
                            this.string= this.EMPTY_STRING;
    

                        }
                            

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    setAndRemove(){
this.string= this.gameNotification!.stringList!.removeAt(0) as string;
    
this.processor= this.setAndRemoveProcessor;
    
}


                //@Throws(Exception.constructor)
            
    setAndRemoveProcess(){
this.setX((this.displayInfo!.getLastWidth() -this.width)>>1);
    
this.point.setX(this.getX());
    
this.point.setY(this.getY());
    

    var time: Integer = this.gameNotification!.timeList!.removeAt(0) as Integer;;
    

    var iTime: number = time.intValue() *1000;;
    

                        if(iTime == 0)
                        
                                    {
                                    iTime= 500;
    

                                    }
                                
this.timeDelayHelper!.delay= iTime;
    
this.setBasicColorP(this.gameNotification!.colorList!.removeAt(0) as BasicColor);
    
}


                //@Throws(Exception.constructor)
            
    setNextUnremoveable(){

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.string= this.permanentGameNotification!.stringList!.objectArray[index]! as string;
    
this.processor= this.nextUnremoveableProcessor;
    
}


                //@Throws(Exception.constructor)
            
    setNextUnremoveableProcess(){

    var index: number = this.circularIndexUtil!.getIndex()!;;
    
this.setX((this.displayInfo!.getLastWidth() -this.width)>>1);
    
this.point.setX(this.getX());
    
this.point.setY(this.getY());
    

    var time: Integer = this.permanentGameNotification!.timeList!.objectArray[index]! as Integer;;
    
this.timeDelayHelper!.delay= time.intValue() *1000;
    
this.setBasicColorP(this.permanentGameNotification!.colorList!.objectArray[index]! as BasicColor);
    
this.circularIndexUtil!.next();
    
}


    public clear(){
this.gameNotification!.clear();
    
this.permanentGameNotification!.clear();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
super.paintString(graphics, this.string);
    
}


}



