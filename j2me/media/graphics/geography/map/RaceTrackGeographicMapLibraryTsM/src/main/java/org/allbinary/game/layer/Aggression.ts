
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
        



import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

export class Aggression
            extends Object
         {
        

    private ram: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private projectile: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private drops: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        
public constructor (ram: Integer, projectile: Integer, drops: Integer){

            super();
            var ram = ram
var projectile = projectile
var drops = drops
this.this.setRam(ram)
this.this.setProjectile(projectile)
this.this.setDrops(drops)
}


    public getRam(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ram;
    
}


    public setRam(ram: Integer){
var ram = ram
this.ram= ram
}


    public getProjectile(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return projectile;
    
}


    public setProjectile(projectile: Integer){
var projectile = projectile
this.projectile= projectile
}


    public getDrops(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return drops;
    
}


    public setDrops(drops: Integer){
var drops = drops
this.drops= drops
}


}
                
            

