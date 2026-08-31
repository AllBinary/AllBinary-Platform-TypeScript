
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { CollidableCompositeLayer } from '../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      //not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableInterface } from './CollidableInterface.js';
import { LayerCollisionUtil } from './LayerCollisionUtil.js';
import { CollidableInterfaceCompositeInterface } from './CollidableInterfaceCompositeInterface.js';
import { CollisionTypeFactory } from './CollisionTypeFactory.js';
import { CollisionType } from './CollisionType.js';

export class CollidableBaseBehavior
            extends Object
         implements CollidableInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly layerCollisionUtil: LayerCollisionUtil = LayerCollisionUtil.getInstance()!;

    private collidable: boolean = true;

public constructor (collidable: boolean){

            super();
        this.collidable= collidable;
    
}


    public update(){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;;
    
}


    public setCollidable(collidable: boolean){
this.collidable= collidable;
    
}


    public isCollidable(ownerLayer: CollidableCompositeLayer): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collidable;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, allbinaryCollidableLayer: CollidableCompositeLayer){



                            throw new Exception(new StringMaker().append(this.commonStrings!.NOT_IMPLEMENTED)!.append(CommonLabels.getInstance()!.COLON_SEP)!.append(this.constructor.name.toString()!)!.toString());
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerCollisionUtil!.isCollision(ownerLayer, collisionLayer);;
    
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerCollisionUtil!.isCollision(ownerLayer, collidableInterfaceCompositeInterface as unknown as AllBinaryLayer);;
    
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public paint(ownerLayer: CollidableCompositeLayer, graphics: Graphics){
}


    public getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollisionTypeFactory.getInstance()!.NONE;
    
}


}



