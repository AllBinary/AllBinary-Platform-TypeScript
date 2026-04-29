
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
        
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Aggression
            extends Object
         {
        

    private ram: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private projectile: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private drops: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;
public constructor (ram: number, projectile: number, drops: number){

            super();
        var ram = ram
var projectile = projectile
var drops = drops
this.setRam(ram);
    
this.setProjectile(projectile);
    
this.setDrops(drops);
    
}


    public getRam(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ram;
    
}


    public setRam(ram: number){
var ram = ram
this.ram= ram;
    
}


    public getProjectile(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.projectile;
    
}


    public setProjectile(projectile: number){
var projectile = projectile
this.projectile= projectile;
    
}


    public getDrops(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.drops;
    
}


    public setDrops(drops: number){
var drops = drops
this.drops= drops;
    
}


}
                
            

