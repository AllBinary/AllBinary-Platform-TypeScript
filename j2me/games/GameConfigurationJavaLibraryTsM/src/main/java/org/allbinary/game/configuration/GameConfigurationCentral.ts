
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
        
import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
//not GWT import const GameConfigurationPersistanceSingleton

import { KeyValuePersistance } from '../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js';
//not GWT import const KeyValuePersistance

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfiguration } from './GameConfiguration.js';
//sameFolderImports - not GWT import - same folder const GameConfiguration

export class GameConfigurationCentral
            extends Object
         {
        

    private static SINGLETON: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameConfigurationCentral{

                        if(GameConfigurationCentral.SINGLETON == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    GameConfigurationCentral.SINGLETON= new GameConfigurationCentral();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameConfigurationCentral.SINGLETON as GameConfigurationCentral;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly SCALE: GameConfiguration;

    public readonly ORIENTATION: GameConfiguration;

    public readonly SENSOR_UPDATE_RATE: GameConfiguration;

    public readonly VIBRATION: GameConfiguration;

    public readonly CHALLENGE_LEVEL: GameConfiguration;

    public readonly COLLIDE_DAMAGE: GameConfiguration;

    public readonly DURABILITY_CHALLENGE_LEVEL: GameConfiguration;

    public readonly SPEED_CHALLENGE_LEVEL: GameConfiguration;

    public readonly ATTACK_CHALLENGE_LEVEL: GameConfiguration;

    public readonly CONTROL_LEVEL: GameConfiguration;

    public readonly PLAYER_INPUT_WAIT: GameConfiguration;

    public readonly SPEED: GameConfiguration;

    public readonly SOUND_VOLUME: GameConfiguration;

    public readonly MAX_GAME_OBJECTS: GameConfiguration;

    public readonly MAX_LAYERS: GameConfiguration;

    private gameControlFidelity: number = 36;

private constructor (){

            super();
        
    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    
this.SCALE= new GameConfiguration("Scale", smallIntegerSingletonFactory!.getAt(2), smallIntegerSingletonFactory!.getAt(2), smallIntegerSingletonFactory!.getAt(3));
    
this.ORIENTATION= new GameConfiguration("Orientation", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(8));
    
this.SENSOR_UPDATE_RATE= new GameConfiguration("Sensor Update Rate", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(3));
    
this.VIBRATION= new GameConfiguration("Vibration", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(3));
    
this.CHALLENGE_LEVEL= new GameConfiguration("Global Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.COLLIDE_DAMAGE= new GameConfiguration("Collide Damage Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.DURABILITY_CHALLENGE_LEVEL= new GameConfiguration("Enemy Durability Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.SPEED_CHALLENGE_LEVEL= new GameConfiguration("Enemy Speed Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.ATTACK_CHALLENGE_LEVEL= new GameConfiguration("Enemy Attack Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.CONTROL_LEVEL= new GameConfiguration("Control Fidelity", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.PLAYER_INPUT_WAIT= new GameConfiguration("Input Wait", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.SPEED= new GameConfiguration("Game Speed (Device Specific)", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10));
    
this.SOUND_VOLUME= new GameConfiguration("Sound Volume", smallIntegerSingletonFactory!.getAt(6), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(10));
    
this.MAX_GAME_OBJECTS= new GameConfiguration("Max Game Objects", smallIntegerSingletonFactory!.getAt(20), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(50));
    
this.MAX_LAYERS= new GameConfiguration("Max Layers", smallIntegerSingletonFactory!.getAt(20), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(50));
    
}


    public load(abeClientInformation: AbeClientInformationInterface){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation);
    

    let list: BasicArrayList = keyValuePersistance!.getIds()!;;
    

                        if(list.size() > 0)
                        
                                    {
                                    
    let hashtable: ABHashtable<any, any> = keyValuePersistance!.get(0)!;;
    

    let anyType: any = this.SCALE.getName();;
    

    let value: string = hashtable.get(anyType) as string;;
    
this.SCALE.setValue(smallIntegerSingletonFactory!.getAt(Integer.valueOf(value)!.intValue()));
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Game Configuration To Load", this, commonStrings!.LOAD);
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.LOAD, e);
    

 }
   }
 
}


    public setGameControlFidelity(gameControlFidelity: number){
this.gameControlFidelity= gameControlFidelity;
    
}


    public getGameControlFidelity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameControlFidelity;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let commonStrings: CommonSeps = CommonSeps.getInstance()!;;
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SCALE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SCALE.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.ORIENTATION.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.ORIENTATION.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SENSOR_UPDATE_RATE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SENSOR_UPDATE_RATE.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.VIBRATION.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.VIBRATION.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.CHALLENGE_LEVEL.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.COLLIDE_DAMAGE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.COLLIDE_DAMAGE.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.DURABILITY_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.DURABILITY_CHALLENGE_LEVEL.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SPEED_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SPEED_CHALLENGE_LEVEL.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.ATTACK_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.ATTACK_CHALLENGE_LEVEL.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.CONTROL_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.CONTROL_LEVEL.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SPEED.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SPEED.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.MAX_GAME_OBJECTS.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.MAX_GAME_OBJECTS.getValue()!.intValue());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.MAX_LAYERS.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.MAX_LAYERS.getValue()!.intValue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

