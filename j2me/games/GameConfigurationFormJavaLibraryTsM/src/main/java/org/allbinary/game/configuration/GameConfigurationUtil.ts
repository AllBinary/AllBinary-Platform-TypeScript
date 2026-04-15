
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Item } from "../../../../javax/microedition/lcdui/Item.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class GameConfigurationUtil
            extends Object
         {
        

    private static readonly instance: GameConfigurationUtil = new GameConfigurationUtil();
        
        

    public static getInstance(): GameConfigurationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public change(gameOptionsForm: GameOptionsForm, gauge: GameConfigurationGauge){
var gameOptionsForm = gameOptionsForm
var gauge = gauge
this.update(gauge);
    

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
        
        
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstance(gauge.getLabel())!;
        
        
;
    
this.updateChallange(gameOptionsForm, gameConfiguration);
    
}


    private readonly GAUGE_UPDATE: string = "Gauge Update: ";
        
        

    private readonly FROM: string = " from: ";
        
        

    private readonly TO: string = " to: ";
        
        

                //@Throws(Error::class)
            
    public update(gauge: GameConfigurationGauge){
var gauge = gauge

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
        
        
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstance(gauge.getLabel())!;
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var value: Integer = smallIntegerSingletonFactory!.getInstance(gauge.getValue() +gameConfiguration!.getMinValue()!.toInt())!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(GAUGE_UPDATE);
    
stringBuffer!.append(gameConfiguration!.getName());
    
stringBuffer!.append(FROM);
    
stringBuffer!.appendint(gameConfiguration!.getValue()!.toInt());
    
stringBuffer!.append(TO);
    
stringBuffer!.appendint(value.toInt());
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.UPDATE);
    
gameConfiguration!.setValue(value);
    
}


                //@Throws(Error::class)
            
    public setDefault(gauge: GameConfigurationGauge){
var gauge = gauge

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
        
        
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstance(gauge.getLabel())!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Gauge Default: ");
    
stringBuffer!.append(gameConfiguration!.getName());
    
stringBuffer!.append(TO);
    
stringBuffer!.appendint(gameConfiguration!.getDefaultValue()!.toInt());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "setDefault");
    
gauge.setValue(gameConfiguration!.getDefaultValue()!.toInt() -gameConfiguration!.getMinValue()!.toInt());
    
gameConfiguration!.setValue(gameConfiguration!.getDefaultValue());
    
}


                //@Throws(Error::class)
            
    public updateChallange(gameOptionsForm: GameOptionsForm, gameConfiguration: GameConfiguration){
var gameOptionsForm = gameOptionsForm
var gameConfiguration = gameConfiguration

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
        
        
;
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;
        
        
;
    

                        if(gameConfiguration == gameConfigurationCentral!.CHALLENGE_LEVEL)
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.START, this, "updateChallange");
    
gameConfigurationCentral!.COLLIDE_DAMAGE.setValue(gameConfiguration!.getValue());
    
gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL.setValue(gameConfiguration!.getValue());
    
gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL.setValue(gameConfiguration!.getValue());
    
gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL.setValue(gameConfiguration!.getValue());
    

    var size: number = gameOptionsForm!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = gameOptionsForm!.get(index)!;
        
        
;
    

                        if(item is GameConfigurationGauge)
                        
                                    {
                                    
    var gauge: GameConfigurationGauge = item as GameConfigurationGauge;
        
        
;
    

    var name: string = item.getLabel()!;
        
        
;
    

    var nextGameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstance(name)!;
        
        
;
    

                        if(nextGameConfiguration == gameConfigurationCentral!.COLLIDE_DAMAGE)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.COLLIDE_DAMAGE.getValue()!.toInt() -gameConfiguration!.getMinValue()!.toInt());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL.getValue()!.toInt() -gameConfiguration!.getMinValue()!.toInt());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL.getValue()!.toInt() -gameConfiguration!.getMinValue()!.toInt());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL.getValue()!.toInt() -gameConfiguration!.getMinValue()!.toInt());
    

                                    }
                                

                                    }
                                
}


                                    }
                                
}


    private COMPETITION_VALUE: number = 1;
        
        

    public updateCompetitionValue(){
this.logUtil!.putF(commonStrings!.START, this, "updateCompetitionValue");
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;
        
        
;
    
COMPETITION_VALUE= gameConfigurationCentral!.COLLIDE_DAMAGE.getValue()!.toInt() +gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL.getValue()!.toInt() +gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL.getValue()!.toInt() +gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL.getValue()!.toInt();
    
COMPETITION_VALUE= (COMPETITION_VALUE shr 2);
    
}


    public getCompetitionValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return COMPETITION_VALUE;
    
}


}
                
            

