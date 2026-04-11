
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
        




export class SimpleWeaponProperties
            extends Object
         {
        

    private damage: number= 0

    private dissipation: number= 0

    private range: number= 0

    public set(simpleWeaponProperties: SimpleWeaponProperties){
var simpleWeaponProperties = simpleWeaponProperties
this.setDamage(simpleWeaponProperties!.getDamage());
    
this.setDissipation(simpleWeaponProperties!.getDissipation());
    
this.setRange(simpleWeaponProperties!.getRange());
    
}


    public setDamage(damage: number){
var damage = damage
this.damage= damage;
    
}


    public getDamage(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damage;
    
}


    public setDissipation(dissipation: number){
var dissipation = dissipation
this.dissipation= dissipation;
    
}


    public getDissipation(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dissipation;
    
}


    public getRange(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return range;
    
}


    public setRange(range: number){
var range = range
this.range= range;
    
}


}
                
            

