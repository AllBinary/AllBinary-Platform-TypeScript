
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
        



import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class Health
            extends Object
        
                , HealthInterface {
        

    public static readonly NULL_HEALTH: Health = new Health(0);
        
        

    public static readonly NAME: string = "Health Resource";
        
        

    private static readonly HEALTH_LABEL: string = "Health: ";
        
        

    private static readonly MAX_HEALTH_LABEL: string = " Max: ";
        
        

    private health: number= 0

    private maxHealth: number= 0

    private healthListenerInterface: HealthListenerInterface = NullHealthListener.NULL_HEALTH_LISTENER;
        
        
public constructor (maxHealth: number){

            super();
            var maxHealth = maxHealth
this.this.setMaxHealth(maxHealth)
this.this.setHealth(maxHealth)
}


    public heal(ahealth: number){
var ahealth = ahealth

    var newHealth: number = this.getHealth() +ahealth;
        
        


                        if(newHealth > this.getMaxHealth())
                        
                                    {
                                    this.this.setHealth(this.getMaxHealth())

                                    }
                                
                        else {
                            this.this.setHealth(newHealth)

                        }
                            
}


    public heal(){
this.this.setHealth(this.getMaxHealth())
}


    public isDamaged(): boolean{

                        if(this.getHealth() != this.getMaxHealth())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public damage(ahealth: number){
var ahealth = ahealth

                        if(ahealth < 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("******* Trying to heal when damaging. Damage: ")
stringBuffer!.appendint(ahealth)
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(this.toString())
ForcedLogUtil.log(stringBuffer!.toString(), this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var health: number = this.getHealth() -ahealth;
        
        

this.this.setHealth(health)
}


    public isAlive(): boolean{

                        if(this.getHealth() <= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public getMaxHealth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxHealth;
    
}


    public setMaxHealth(maxHealth: number){
var maxHealth = maxHealth
this.maxHealth= maxHealth
}


    public setHealth(health: number){
var health = health

                        if(health > this.getMaxHealth())
                        
                                    {
                                    this.health= this.getMaxHealth()

                                    }
                                
                             else 
                        if(health < 0)
                        
                                    {
                                    this.health= 0

                                    }
                                
                        else {
                            this.health= health

                        }
                            

                        if(this.healthListenerInterface != 
                                    null
                                )
                        
                                    {
                                    this.healthListenerInterface!.onHealthChange()

                                    }
                                
}


    public getHealth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return health;
    
}


    public addListener(healthGraphic: HealthListenerInterface){
var healthGraphic = healthGraphic
this.healthListenerInterface= healthGraphic
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(Health.HEALTH_LABEL)
stringBuffer!.appendint(this.health)
stringBuffer!.append(Health.MAX_HEALTH_LABEL)
stringBuffer!.appendint(this.maxHealth)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

