
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
        



import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class DamageUtil
            extends Object
         {
        

    private static readonly instance: DamageUtil = new DamageUtil();
        
        

    public static getInstance(): DamageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly COLLIDE: string = "collide";
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public process(damageableInterface: DamageableInterface, damageableInterface2: DamageableInterface){
var damageableInterface = damageableInterface
var damageableInterface2 = damageableInterface2
damageableInterface!.damage(damageableInterface2!.getDamage(0), 0);
    
}


                //@Throws(Error::class)
            
    public debugDamage(collidableInterfaceCompositeInterface1: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){
var collidableInterfaceCompositeInterface1 = collidableInterfaceCompositeInterface1
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface as CollidableDestroyableDamageableLayer;
        
        
;
    

    var damage: number = collidableDestroyableDamageableLayer!.getDamage(0)!;
        
        
;
    

                        if(damage > 20000)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Collision ");
    
stringBuffer!.append(collidableInterfaceCompositeInterface1!.toString());
    
stringBuffer!.append(" with: ");
    
stringBuffer!.append(collidableInterfaceCompositeInterface!.toString());
    
stringBuffer!.append(" damage: ");
    
stringBuffer!.appendint(damage);
    
this.logUtil!.putF(stringBuffer!.toString(), collidableInterfaceCompositeInterface1, COLLIDE);
    

                                    }
                                
}


}
                
            

