
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GL } from '../../../../../javax/microedition/khronos/opengles/GL.js';
      const GL = globalThis.javax.microedition.khronos.opengles.GL;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js';
      const CollidableAlwaysPickupNeverCollideBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableAlwaysPickupNeverCollideBehaviorFactory;

      
//not game specific package import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
//not game specific package import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
      const MultiPlayerGameLayer = globalThis.org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer;

      
//not game specific package import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { OpenGLSurfaceChangedInterface } from '../../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;

      
//not game specific package import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
import { PickupableInterface } from './PickupableInterface.js';
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';

export class PickupLayer extends MultiPlayerGameLayer implements PickedUpLayerInterface, PickupableInterface {
        

    private pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

    private destroyed: boolean= false;

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

public constructor (name: string, remoteInfo: RemoteInfo, total: number, pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPositionBase){
            super(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableAlwaysPickupNeverCollideBehaviorFactory.getInstance()!.createBehavior());
    
this.setLayerWidth(10);
    
this.setLayerHeight(10);
    
this.init(pickedUpLayerInterfaceFactoryInterface, animationInterface);
    
}


    public init(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation){
this.pickedUpLayerInterfaceFactoryInterface= pickedUpLayerInterfaceFactoryInterface;
    
this.animationInterface= animationInterface;
    
this.setDestroyed(false);
    
}


    public initXYZ(x: number, y: number, z: number){
this.setPosition(x, y, z);
    
}


    public paint(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.animationInterface!.paintXY(graphics, viewX, viewY);
    
}


    public paintThreed(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.animationInterface!.paintThreedXYZ(graphics, viewX, viewY, 3);
    
}


    public getPickedUpLayerInterfaceFactoryInterface(): PickedUpLayerInterfaceFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pickedUpLayerInterfaceFactoryInterface;
    
}


    public setPickedUp(){
this.setDestroyed(true);
    
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyed;
    
}


    public setDestroyed(destroyed: boolean){
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    DestroyedLayerProcessor.getInstance()!.add(this);
    

                                    }
                                
}


    public damage(damage: number, damageType: number){
}


    public getDamage(damageType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){

    var openGLSurfaceChangedInterface: OpenGLSurfaceChangedInterface = this.animationInterface as OpenGLSurfaceChangedInterface;;
    
openGLSurfaceChangedInterface!.set(gl);
    
}


}



