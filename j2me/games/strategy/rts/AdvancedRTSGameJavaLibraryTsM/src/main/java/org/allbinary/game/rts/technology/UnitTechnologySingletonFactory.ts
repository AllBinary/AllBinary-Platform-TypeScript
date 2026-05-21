
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UnitTechnologySingletonFactory
            extends Object
         {
        

    private static readonly instance: UnitTechnologySingletonFactory = new UnitTechnologySingletonFactory();

    public static getInstance(): UnitTechnologySingletonFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UnitTechnologySingletonFactory.instance;
    
}


    private damage: number= 0

    private health: number= 0

    private reload: number= 0

    private repair: number= 0

    private speed: number= 0
private constructor (){

            super();
        }


    public init(){
this.setDamage(0);
    
this.setHealth(0);
    
this.setReload(0);
    
this.setRepair(0);
    
this.setSpeed(0);
    
}


    public getDamage(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.damage;
    
}


    public setDamage(damage: number){
this.damage= damage;
    
}


    public getHealth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.health;
    
}


    public setHealth(health: number){
this.health= health;
    
}


    public getReload(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.reload;
    
}


    public setReload(reload: number){
this.reload= reload;
    
}


    public getRepair(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.repair;
    
}


    public setRepair(repair: number){
this.repair= repair;
    
}


    public getSpeed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.speed;
    
}


    public setSpeed(speed: number){
this.speed= speed;
    
}


}
                
            

