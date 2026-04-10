
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
        




export class UnitTechnologySingletonFactory
            extends Object
         {
        

    private static readonly instance: UnitTechnologySingletonFactory = new UnitTechnologySingletonFactory();
        
        

    public static getInstance(): UnitTechnologySingletonFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
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
this.this.setDamage(0)
this.this.setHealth(0)
this.this.setReload(0)
this.this.setRepair(0)
this.this.setSpeed(0)
}


    public getDamage(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damage;
    
}


    public setDamage(damage: number){
var damage = damage
this.damage= damage
}


    public getHealth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return health;
    
}


    public setHealth(health: number){
var health = health
this.health= health
}


    public getReload(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return reload;
    
}


    public setReload(reload: number){
var reload = reload
this.reload= reload
}


    public getRepair(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return repair;
    
}


    public setRepair(repair: number){
var repair = repair
this.repair= repair
}


    public getSpeed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return speed;
    
}


    public setSpeed(speed: number){
var speed = speed
this.speed= speed
}


}
                
            

