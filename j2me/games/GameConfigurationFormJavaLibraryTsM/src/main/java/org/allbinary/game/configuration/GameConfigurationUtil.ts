
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Item } from '../../../../javax/microedition/lcdui/Item.js';

    
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';

    
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';

    
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
import { GameConfiguration } from './GameConfiguration.js';
import { GameOptionsForm } from './GameOptionsForm.js';
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
import { GameConfigurationCentral } from './GameConfigurationCentral.js';

export class GameConfigurationUtil
            extends Object
         {
        

    private static readonly instance: GameConfigurationUtil = new GameConfigurationUtil();

    public static getInstance(): GameConfigurationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameConfigurationUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public change(gameOptionsForm: GameOptionsForm, gauge: GameConfigurationGauge){
var gameOptionsForm = gameOptionsForm
var gauge = gauge
this.update(gauge);
    

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstanceByName(gauge.getLabel())!;
;
    
this.updateChallange(gameOptionsForm, gameConfiguration);
    
}


    private readonly GAUGE_UPDATE: string = "Gauge Update: ";

    private readonly FROM: string = " from: ";

    private readonly TO: string = " to: ";

                //@Throws(Exception.constructor)
            
    public update(gauge: GameConfigurationGauge){
var gauge = gauge

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstanceByName(gauge.getLabel())!;
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
;
    

    var value: Integer = smallIntegerSingletonFactory!.getAt(gauge.getValue() +gameConfiguration!.getMinValue()!.intValue())!;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(this.GAUGE_UPDATE);
    
stringBuffer!.append(gameConfiguration!.getName());
    
stringBuffer!.append(this.FROM);
    
stringBuffer!.appendint(gameConfiguration!.getValue()!.intValue());
    
stringBuffer!.append(this.TO);
    
stringBuffer!.appendint(value.intValue());
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.UPDATE);
    
gameConfiguration!.setValue(value);
    
}


                //@Throws(Exception.constructor)
            
    public setDefault(gauge: GameConfigurationGauge){
var gauge = gauge

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
;
    

    var gameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstanceByName(gauge.getLabel())!;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Gauge Default: ");
    
stringBuffer!.append(gameConfiguration!.getName());
    
stringBuffer!.append(this.TO);
    
stringBuffer!.appendint(gameConfiguration!.getDefaultValue()!.intValue());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "setDefault");
    
gauge.setValue(gameConfiguration!.getDefaultValue()!.intValue() -gameConfiguration!.getMinValue()!.intValue());
    
gameConfiguration!.setValue(gameConfiguration!.getDefaultValue());
    
}


                //@Throws(Exception.constructor)
            
    public updateChallange(gameOptionsForm: GameOptionsForm, gameConfiguration: GameConfiguration){
var gameOptionsForm = gameOptionsForm
var gameConfiguration = gameConfiguration

    var gameConfigurationSingleton: GameConfigurationSingleton = GameConfigurationSingleton.getInstance()!;
;
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;
;
    

                        if(gameConfiguration == gameConfigurationCentral!.CHALLENGE_LEVEL)
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "updateChallange");
    
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
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    
    var gauge: GameConfigurationGauge = item as GameConfigurationGauge;
;
    

    var name: string = item.getLabel()!;
;
    

    var nextGameConfiguration: GameConfiguration = gameConfigurationSingleton!.getInstanceByName(name)!;
;
    

                        if(nextGameConfiguration == gameConfigurationCentral!.COLLIDE_DAMAGE)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.COLLIDE_DAMAGE.getValue()!.intValue() -gameConfiguration!.getMinValue()!.intValue());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL.getValue()!.intValue() -gameConfiguration!.getMinValue()!.intValue());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL.getValue()!.intValue() -gameConfiguration!.getMinValue()!.intValue());
    

                                    }
                                
                             else 
                        if(nextGameConfiguration == gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL)
                        
                                    {
                                    gauge.setValue(gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL.getValue()!.intValue() -gameConfiguration!.getMinValue()!.intValue());
    

                                    }
                                

                                    }
                                
}


                                    }
                                
}


    private COMPETITION_VALUE: number = 1;

    public updateCompetitionValue(){
this.logUtil!.putF(this.commonStrings!.START, this, "updateCompetitionValue");
    

    var gameConfigurationCentral: GameConfigurationCentral = GameConfigurationCentral.getInstance()!;
;
    
this.COMPETITION_VALUE= gameConfigurationCentral!.COLLIDE_DAMAGE.getValue()!.intValue() +gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL.getValue()!.intValue() +gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL.getValue()!.intValue() +gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL.getValue()!.intValue();
    
this.COMPETITION_VALUE= (this.COMPETITION_VALUE>>2);
    
}


    public getCompetitionValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.COMPETITION_VALUE;
    
}


}
                
            

