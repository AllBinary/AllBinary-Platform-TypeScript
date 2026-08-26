
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DamageableInterface } from './DamageableInterface.js';

export class DamageUtil
            extends Object
         {
        

    private static readonly instance: DamageUtil = new DamageUtil();

    public static getInstance(): DamageUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DamageUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly COLLIDE: string = "collide";

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public process(damageableInterface: DamageableInterface, damageableInterface2: DamageableInterface){
damageableInterface!.damage(damageableInterface2!.getDamage(0), 0);
    
}


                //@Throws(Exception.constructor)
            
    public debugDamage(collidableInterfaceCompositeInterface1: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface as CollidableDestroyableDamageableLayer;;
    

    var damage: number = collidableDestroyableDamageableLayer!.getDamage(0)!;;
    

                        if(damage > 20000)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Collision ");
    
stringBuffer!.append(collidableInterfaceCompositeInterface1!.toString());
    
stringBuffer!.append(" with: ");
    
stringBuffer!.append(collidableInterfaceCompositeInterface!.toString());
    
stringBuffer!.append(" damage: ");
    
stringBuffer!.appendint(damage);
    
this.logUtil!.putF(stringBuffer!.toString(), collidableInterfaceCompositeInterface1, this.COLLIDE);
    

                                    }
                                
}


}
                
            

