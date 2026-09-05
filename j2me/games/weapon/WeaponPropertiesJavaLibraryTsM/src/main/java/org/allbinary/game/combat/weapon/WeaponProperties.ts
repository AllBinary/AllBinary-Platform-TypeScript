
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleWeaponProperties } from './SimpleWeaponProperties.js';
//not GWT import - same folder const SimpleWeaponProperties = globalThis.org.allbinary.game.combat.weapon.SimpleWeaponProperties;

                
export class WeaponProperties extends SimpleWeaponProperties {
        

    public static readonly NULL_WEAPON_PROPERTIES: WeaponProperties = new WeaponProperties(0, 0, 0, 0, 0);

    private static messageSent: boolean = false;

    private static readonly DAMAGE: string = "Damage: ";

    private static readonly RANGE: string = "Range: ";

    private static readonly RELOAD: string = "Reload: ";

    private reloadTime: number= 0;

    private targetingTime: number= 0;

    private speed: BasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;

    private readonly MAX: number = 10240;

    private readonly ZERO: number = 0;

public constructor (reloadTime: number, targetingTime: number, speed: number, damage: number, dissipation: number){

            super();
        
                        if(speed < this.MAX && speed != 0 && !WeaponProperties.messageSent)
                        
                                    {
                                    
    var MESSAGE: string = "Danger Danger Danger: Speed probably to slow if using 1 degree calculations as velocity for a single axis could be below 1024: ";;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put(new StringMaker().append(MESSAGE)!.appendlong(speed)!.toString(), this, commonStrings!.CONSTRUCTOR);
    
WeaponProperties.messageSent= true;
    

                                    }
                                
this.setReloadTime(reloadTime);
    
this.setTargetingTime(targetingTime);
    
this.setDamage(damage);
    
this.setDissipation(dissipation);
    
this.setSpeed(new BasicDecimal(speed));
    

                        if(dissipation != this.ZERO)
                        
                                    {
                                    
    var unscaledDamage: number = this.speed.getUnscaled() *damage;;
    

    var scaledDissipation: number = dissipation *this.speed.getScaledFactorValue();;
    

    var value: number = (unscaledDamage /scaledDissipation);;
    
this.setRange(Math.round((value *9)) /10);
    

                                    }
                                
}


    setReloadTime(reloadTime: number){
this.reloadTime= reloadTime;
    
}


    public getReloadTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.reloadTime;
    
}


    setTargetingTime(targetingTime: number){
this.targetingTime= targetingTime;
    
}


    public getTargetingTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.targetingTime;
    
}


    public getSpeed(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.speed;
    
}


    public setSpeed(speed: BasicDecimal){
this.speed= speed;
    
}


    public getDamageI(range: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getDamage() -((this.getDissipation() *range) /this.speed.getScaled());
    
}


    public toStringArray(): string[]{

    var index: number = 0;;
    

    var stringArray: string[] = new Array(3);;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringArray[index++]= stringBuffer!.append(WeaponProperties.DAMAGE)!.appendint(this.getDamage())!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringArray[index++]= stringBuffer!.append(WeaponProperties.RANGE)!.appendint(this.getRange())!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringArray[index++]= stringBuffer!.append(WeaponProperties.RELOAD)!.appendlong(this.getReloadTime())!.toString();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringArray;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(WeaponProperties.DAMAGE)!.appendint(this.getDamage());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(WeaponProperties.RANGE)!.appendint(this.getRange());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(WeaponProperties.RELOAD)!.appendlong(this.getReloadTime());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



