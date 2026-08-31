
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickedUpLayerInterfaceFactory } from './PickedUpLayerInterfaceFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactory;

                import { CountedPickedUpLayerInterfaceFactoryInterface } from './CountedPickedUpLayerInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryInterface;

                import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerTypeFactory;

                import { IconLayer } from './IconLayer.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.IconLayer;

                import { CountedPickedUpLayerInterfaceFactoryPool } from './CountedPickedUpLayerInterfaceFactoryPool.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryPool;

                import { PickedUpLayerType } from './PickedUpLayerType.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerType;

                
export class CountedPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements CountedPickedUpLayerInterfaceFactoryInterface {
        

    public static readonly NULL_COUNTED_PICKUP_LAYER_FACTORY: CountedPickedUpLayerInterfaceFactory = new CountedPickedUpLayerInterfaceFactory(PickedUpLayerTypeFactory.getInstance()!.NONE, IconLayer.NULL_ICON_LAYER, NullAnimationFactory.getFactoryInstance()!.getInstance(0));

    private readonly id: number;

public constructor (pickeUpLayerType: PickedUpLayerType, iconLayer: IconLayer, animationInterface: Animation){
            super(pickeUpLayerType, iconLayer, animationInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var list: BasicArrayList = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList()!;;
    
this.id= list.size();
    
list.add(this);
    
}


                //@Throws(Exception.constructor)
            
    public getNextInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{



                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


}



