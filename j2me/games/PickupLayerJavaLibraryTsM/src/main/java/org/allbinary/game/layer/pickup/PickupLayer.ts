
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
        
import { GL } from '../../../../../javax/microedition/khronos/opengles/GL.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      
import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js';
      
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      
import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
      
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      
import { OpenGLSurfaceChangedInterface } from '../../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js';
      
import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PickedUpLayerInterface } from './PickedUpLayerInterface.js';
import { PickupableInterface } from './PickupableInterface.js';
import { CountedPickedUpLayerInterfaceFactory } from './CountedPickedUpLayerInterfaceFactory.js';
import { PickedUpLayerInterfaceFactoryInterface } from './PickedUpLayerInterfaceFactoryInterface.js';

export class PickupLayer extends MultiPlayerGameLayer implements PickedUpLayerInterface, PickupableInterface {
        

    private pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

    private destroyed: boolean= false

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
public constructor (name: string, remoteInfo: RemoteInfo, total: number, pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition){
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

    var viewPosition: ViewPosition = this.getViewPosition()!;
;
    

    var viewX: number = viewPosition!.getX()!;
;
    

    var viewY: number = viewPosition!.getY()!;
;
    
this.animationInterface!.paintXY(graphics, viewX, viewY);
    
}


    public paintThreed(graphics: Graphics){

    var viewPosition: ViewPosition = this.getViewPosition()!;
;
    

    var viewX: number = viewPosition!.getX()!;
;
    

    var viewY: number = viewPosition!.getY()!;
;
    
this.animationInterface!.paintThreed(graphics, viewX, viewY, 3);
    
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

    var openGLSurfaceChangedInterface: OpenGLSurfaceChangedInterface = this.animationInterface as OpenGLSurfaceChangedInterface;
;
    
openGLSurfaceChangedInterface!.set(gl);
    
}


}
                
            

