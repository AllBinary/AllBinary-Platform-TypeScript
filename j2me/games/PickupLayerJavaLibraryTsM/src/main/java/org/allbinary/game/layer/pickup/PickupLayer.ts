
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
        



import { GL } from "../../../../../javax/microedition/khronos/opengles/GL.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from "../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js";

    
import { DestroyedLayerProcessor } from "../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { MultiPlayerGameLayer } from "../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { OpenGLSurfaceChangedInterface } from "../../../../../org/allbinary/image/opengles/OpenGLSurfaceChangedInterface.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

import { CountedPickedUpLayerInterfaceFactory } from "./CountedPickedUpLayerInterfaceFactory.js";

export class PickupLayer extends MultiPlayerGameLayer
                , PickedUpLayerInterface
                , PickupableInterface {
        

    private pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        
        

    private destroyed: boolean= false

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        
public constructor (name: string, remoteInfo: RemoteInfo, viewPosition: ViewPosition)                        

                            : super(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), viewPosition){

            super();
                //var name = name
    //var remoteInfo = remoteInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableAlwaysPickupNeverCollideBehaviorFactory.getInstance());
    
this.setLayerWidth(10);
    
this.setLayerHeight(10);
    
}

public constructor (name: string, remoteInfo: RemoteInfo, total: number, pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : super(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition){

            super();
                //var name = name
    //var remoteInfo = remoteInfo
    //var total = total
    //var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
    //var animationInterface = animationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableAlwaysPickupNeverCollideBehaviorFactory.getInstance());
    
this.setLayerWidth(10);
    
this.setLayerHeight(10);
    
this.init(pickedUpLayerInterfaceFactoryInterface, animationInterface);
    
}

public constructor (name: string, viewPosition: ViewPosition)                        

                            : this(name, RemoteInfo.REMOTE_INFO, viewPosition){

            super();
                //var name = name
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string, total: number, pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition)                        

                            : this(name, RemoteInfo.REMOTE_INFO, total, pickedUpLayerInterfaceFactoryInterface, animationInterface, rectangle, viewPosition){

            super();
                //var name = name
    //var total = total
    //var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
    //var animationInterface = animationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface, animationInterface: Animation){
    //var pickedUpLayerInterfaceFactoryInterface = pickedUpLayerInterfaceFactoryInterface
    //var animationInterface = animationInterface
this.pickedUpLayerInterfaceFactoryInterface= pickedUpLayerInterfaceFactoryInterface;
    
this.animationInterface= animationInterface;
    
this.setDestroyed(false);
    
}


    public init(x: number, y: number, z: number){
var x = x
var y = y
var z = z
this.setPosition(x, y, z);
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var viewPosition: ViewPosition = this.getViewPosition()!;
        
        
;
    

    var viewX: number = viewPosition!.getX()!;
        
        
;
    

    var viewY: number = viewPosition!.getY()!;
        
        
;
    
this.animationInterface!.paint(graphics, viewX, viewY);
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics

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
                        return destroyed;
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    DestroyedLayerProcessor.getInstance()!.add(this);
    

                                    }
                                
}


    public damage(damage: number, damageType: number){
var damage = damage
var damageType = damageType
}


    public getDamage(damageType: number): number{
var damageType = damageType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
var gl = gl

    var openGLSurfaceChangedInterface: OpenGLSurfaceChangedInterface = this.animationInterface as OpenGLSurfaceChangedInterface;
        
        
;
    
openGLSurfaceChangedInterface!.set(gl);
    
}


}
                
            

