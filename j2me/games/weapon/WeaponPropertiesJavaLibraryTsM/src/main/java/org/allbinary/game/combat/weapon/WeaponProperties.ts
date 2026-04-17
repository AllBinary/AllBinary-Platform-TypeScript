
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
        



import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SimpleWeaponProperties } from "./SimpleWeaponProperties.js";

export class WeaponProperties extends SimpleWeaponProperties {
        

    public static readonly NULL_WEAPON_PROPERTIES: WeaponProperties = new WeaponProperties(0L, 0L, 0L, 0, 0.toShort());
        
        

    private messageSent: boolean = false;
        
        

    private static readonly DAMAGE: string = "Damage: ";
        
        

    private static readonly RANGE: string = "Range: ";
        
        

    private static readonly RELOAD: string = "Reload: ";
        
        

    private reloadTime: number= 0

    private targetingTime: number= 0

    private speed: BasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;
        
        

    private readonly MAX: number = 10240L;
        
        

    private readonly ZERO: number = 0;
        
        
public constructor (reloadTime: number, targetingTime: number, speed: number, damage: number, dissipation: number){

            super();
            var reloadTime = reloadTime
var targetingTime = targetingTime
var speed = speed
var damage = damage
var dissipation = dissipation

                        if(speed < MAX && speed != 0L && !messageSent)
                        
                                    {
                                    
    var MESSAGE: string = "Danger Danger Danger: Speed probably to slow if using 1 degree calculations as velocity for a single axis could be below 1024: ";
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.put(new StringMaker().
                            append(MESSAGE)!.appendlong(speed)!.toString(), this, commonStrings!.CONSTRUCTOR);
    
messageSent= true;
    

                                    }
                                
this.setReloadTime(reloadTime);
    
this.setTargetingTime(targetingTime);
    
this.setDamage(damage);
    
this.setDissipation(dissipation);
    
this.setSpeed(new BasicDecimal(speed));
    

                        if(dissipation != ZERO)
                        
                                    {
                                    
    var unscaledDamage: number = this.speed.getUnscaled() *damage;
        
        
;
    

    var scaledDissipation: number = dissipation *this.speed.getScaledFactorValue();
        
        
;
    

    var value: number = (unscaledDamage /scaledDissipation);
        
        
;
    
this.setRange((value *9).toInt() /10);
    

                                    }
                                
}

public constructor (speed: number, damage: number, dissipation: number)                        

                            : this( -1L,  -1L, speed, damage, dissipation){

            super();
            var speed = speed
var damage = damage
var dissipation = dissipation


                            //For kotlin this is before the body of the constructor.
                    
}


    setReloadTime(reloadTime: number){
var reloadTime = reloadTime
this.reloadTime= reloadTime;
    
}


    public getReloadTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reloadTime;
    
}


    setTargetingTime(targetingTime: number){
var targetingTime = targetingTime
this.targetingTime= targetingTime;
    
}


    public getTargetingTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return targetingTime;
    
}


    public getSpeed(): BasicDecimal{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return speed;
    
}


    public setSpeed(speed: BasicDecimal){
var speed = speed
this.speed= speed;
    
}


    public getDamage(range: number): number{
var range = range



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getDamage() -((this.getDissipation() *range) /this.speed.getScaled());
    
}


    public toStringArray(): string[]{

    var index: number = 0;
        
        
;
    

    var stringArray: string[] = new Array(3);
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringArray[index++]= stringBuffer!.append(DAMAGE)!.appendint(this.getDamage())!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringArray[index++]= stringBuffer!.append(RANGE)!.appendint(this.getRange())!.toString();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringArray[index++]= stringBuffer!.append(RELOAD)!.appendlong(this.getReloadTime())!.toString();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringArray;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(DAMAGE)!.appendint(this.getDamage());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(RANGE)!.appendint(this.getRange());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(RELOAD)!.appendlong(this.getReloadTime());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

