
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
        
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HealthInterface } from './HealthInterface.js';
//not GWT import const HealthInterface = globalThis.org.allbinary.game.health.HealthInterface;

                import { NullHealthListener } from './NullHealthListener.js';
//not GWT import const NullHealthListener = globalThis.org.allbinary.game.health.NullHealthListener;

                import { HealthListenerInterface } from './HealthListenerInterface.js';
//not GWT import const HealthListenerInterface = globalThis.org.allbinary.game.health.HealthListenerInterface;

                
export class Health
            extends Object
         implements HealthInterface {
        

    public static readonly NULL_HEALTH: Health = new Health(0);

    public static readonly NAME: string = "Health Resource";

    private static readonly HEALTH_LABEL: string = "Health: ";

    private static readonly MAX_HEALTH_LABEL: string = " Max: ";

    private health: number= 0;

    private maxHealth: number= 0;

    private healthListenerInterface: HealthListenerInterface = NullHealthListener.NULL_HEALTH_LISTENER;

public constructor (maxHealth: number){

            super();
        this.setMaxHealth(maxHealth);
    
this.setHealth(maxHealth);
    
}


    public heal(ahealth: number){

    var newHealth: number = this.getHealth() +ahealth;;
    

                        if(newHealth > this.getMaxHealth())
                        
                                    {
                                    this.setHealth(this.getMaxHealth());
    

                                    }
                                
                        else {
                            this.setHealth(newHealth);
    

                        }
                            
}


    public healMax(){
this.setHealth(this.getMaxHealth());
    
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

                        if(ahealth < 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("******* Trying to heal when damaging. Damage: ");
    
stringBuffer!.appendint(ahealth);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(this.toString());
    
ForcedLogUtil.log(stringBuffer!.toString(), this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var health: number = this.getHealth() -ahealth;;
    
this.setHealth(health);
    
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
                        return this.maxHealth;
    
}


    public setMaxHealth(maxHealth: number){
this.maxHealth= maxHealth;
    
}


    public setHealth(health: number){

                        if(health > this.getMaxHealth())
                        
                                    {
                                    this.health= this.getMaxHealth();
    

                                    }
                                
                             else 
                        if(health < 0)
                        
                                    {
                                    this.health= 0;
    

                                    }
                                
                        else {
                            this.health= health;
    

                        }
                            

                        if(this.healthListenerInterface != 
                                    null
                                )
                        
                                    {
                                    this.healthListenerInterface!.onHealthChange();
    

                                    }
                                
}


    public getHealth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.health;
    
}


    public addListener(healthGraphic: HealthListenerInterface){
this.healthListenerInterface= healthGraphic;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(Health.HEALTH_LABEL);
    
stringBuffer!.appendint(this.health);
    
stringBuffer!.append(Health.MAX_HEALTH_LABEL);
    
stringBuffer!.appendint(this.maxHealth);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



