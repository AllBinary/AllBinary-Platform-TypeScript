
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

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { IndexedAnimation } from "../../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { NullIndexedAnimationFactory } from "../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js";

    
import { CollidableBaseBehavior } from "../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js";

    
import { ExplosionResources } from "../../../../../org/allbinary/game/combat/damage/ExplosionResources.js";

    
import { DestroyedLayerProcessor } from "../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js";

    
import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { GameConfigurationUtil } from "../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { MultiPlayerGameLayer } from "../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { NoScoreable } from "../../../../../org/allbinary/game/score/NoScoreable.js";

    
import { ScoreableInterface } from "../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { TickableInterface } from "../../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Movement } from "../../../../../org/allbinary/physics/movement/Movement.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CollidableWeaponBehavior } from "./CollidableWeaponBehavior.js";

export class WeaponLayer extends MultiPlayerGameLayer implements TickableInterface {
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        

    initAnimationInterface: Animation

    private destroyedAnimationInterface: Animation

    private sourceLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        

    totalDamage: number= 0

    private initDamage: number= 0

    private destroyed: boolean = true;
        
        

    scoreableInterface: ScoreableInterface = NoScoreable.getInstance()!;
        
        

    private movement: Movement

    private weaponProperties: WeaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
        
        

    private readonly multiPlayerType: number
protected constructor (name: string, movement: Movement, animationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition){
            this(name, movement, animationInterface, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.getProcedural(ExplosionResources.getInstance()!.THIRD_EXPLOSION_RESOURCE)!.getInstance(NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0)), rectangle, viewPosition);
                        //var name = name
    //var movement = movement
    //var animationInterface = animationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (name: string, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition){
            this(name, RemoteInfo.REMOTE_INFO,  -1, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
                        //var name = name
    //var movement = movement
    //var animationInterface = animationInterface
    //var destroyedAnimationInterface = destroyedAnimationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (name: string, remoteInfo: RemoteInfo, multiPlayerType: number, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPosition){
            super(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition);
                        //var name = name
    //var remoteInfo = remoteInfo
    //var multiPlayerType = multiPlayerType
    //var movement = movement
    //var animationInterface = animationInterface
    //var destroyedAnimationInterface = destroyedAnimationInterface
    //var rectangle = rectangle
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.initAnimationInterface= animationInterface;
    
this.setAnimationInterface(animationInterface);
    
this.destroyedAnimationInterface= destroyedAnimationInterface;
    
this.movement= movement;
    
this.multiPlayerType= multiPlayerType;
    
}


    private collidableWeaponBehavior: CollidableWeaponBehavior = CollidableWeaponBehavior.NULL_COLLIDABLE_WEAPON_BEHAVIOR;
        
        

    public setCollidableInferface(collidableInferface: CollidableBaseBehavior){
var collidableInferface = collidableInferface
super.setCollidableInferface(collidableInferface);
    
this.collidableWeaponBehavior= this.getCollidableInferface();

                         as CollidableWeaponBehavior;
    
}


                //@Throws(Error::class)
            
    public init(x: number, y: number, z: number){
var x = x
var y = y
var z = z
this.x= x;
    
this.y= y;
    
this.z= z;
    
}


                //@Throws(Error::class)
            
    public init(sourceLayerInterface: AllBinaryLayer, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreable: ScoreableInterface){
var sourceLayerInterface = sourceLayerInterface
var angle = angle
var otherAngle = otherAngle
var weaponProperties = weaponProperties
var scoreable = scoreable
this.setWeaponPropertiesP(weaponProperties);
    
this.setReadyForExplosion(false);
    
this.setAnimationInterface(this.getInitAnimationInterfaceP());
    
this.setOwnerLayerInterface(sourceLayerInterface);
    
this.collidableWeaponBehavior!.init(sourceLayerInterface);
    
this.setGroupInterface();
    

                        if(scoreable != 
                                    null
                                )
                        
                                    {
                                    this.scoreableInterface= scoreable;
    

                                    }
                                
this.totalDamage= 0;
    
this.initDamage= weaponProperties!.getDamage();
    
this.setDestroyed(false);
    
this.movement.init(weaponProperties!.getSpeed(), angle, otherAngle);
    
}


    setGroupInterface(){

    var basicGroupFactory: BasicGroupFactory = BasicGroupFactory.getInstance()!;
        
        
;
    

                        if(this.sourceLayerInterface!.getGroupInterface()[0] == basicGroupFactory!.ENEMY)
                        
                                    {
                                    this.setGroupInterface(basicGroupFactory!.ENEMY_ARRAY);
    

                                    }
                                
                        else {
                            this.setGroupInterface(this.sourceLayerInterface!.getGroupInterface());
    

                        }
                            
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.isExhausted() && !this.isDestroyed();

                        )
                        
                                    {
                                    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var indexedAnimationInterface: IndexedAnimation = this.getAnimationInterface();

                         as IndexedAnimation;
        
        
;
    

    var currentFrame: number = indexedAnimationInterface!.getFrame()!;
        
        
;
    

                        if(currentFrame < indexedAnimationInterface!.getAnimationSize() -1)
                        
                                    {
                                    indexedAnimationInterface!.nextFrame();
    

                                    }
                                
                        else {
                            this.setDestroyed(true);
    

                        }
                            

                                    }
                                
                        else {
                            
    var collidableWeaponBehavior: CollidableWeaponBehavior = this.getCollidableInferface();

                         as CollidableWeaponBehavior;
        
        
;
    

                        if(collidableWeaponBehavior!.isCollided())
                        
                                    {
                                    this.setAnimationInterface(this.destroyedAnimationInterface);
    
this.getMovement()!.stop();
    
this.setReadyForExplosion(true);
    

                                    }
                                
                        else {
                            this.setDestroyed(true);
    

                        }
                            

                        }
                            

                                    }
                                
this.movement.process(this);
    
this.totalDamage += this.weaponProperties!.getDissipation();
    
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyed;
    
}


    public damage(damage: number, damageType: number){
var damage = damage
var damageType = damageType
this.totalDamage += damage *damage;
    
}


    givePoints(total: number){
var total = total
this.scoreableInterface!.addPoints(GameConfigurationUtil.getInstance()!.getCompetitionValue() *total);
    
}


    isExhausted(): boolean{

                        if(this.totalDamage > this.getInitDamage() || this.totalDamage < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getDamage(damageType: number): number{
var damageType = damageType

                        if(!this.isExhausted();

                        )
                        
                                    {
                                    
    var total: number = this.getInitDamage() -this.totalDamage;
        
        
;
    
this.givePoints(total);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    this.scoreableInterface= NoScoreable.getInstance();
    
DestroyedLayerProcessor.getInstance()!.add(this);
    

                                    }
                                
}


    getInitDamage(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initDamage;
    
}


    setAnimationInterface(animationInterface: Animation){
var animationInterface = animationInterface
this.animationInterface= animationInterface;
    
}


    getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


    public getInitAnimationInterfaceP(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initAnimationInterface;
    
}


    public setInitAnimationInterfaceP(initAnimationInterface: Animation){
var initAnimationInterface = initAnimationInterface
this.initAnimationInterface= initAnimationInterface;
    
}


    public getDestroyedAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return destroyedAnimationInterface;
    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sourceLayerInterface;
    
}


    public setOwnerLayerInterface(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface
this.sourceLayerInterface= sourceLayerInterface;
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var viewPosition: ViewPosition = this.getViewPosition()!;
        
        
;
    
this.animationInterface!.paint(graphics, viewPosition!.getX() -this.getHalfWidth(), viewPosition!.getY() -this.getHalfHeight());
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics

    var viewPosition: ViewPosition = this.getViewPosition()!;
        
        
;
    
this.animationInterface!.paintThreed(graphics, viewPosition!.getX() -this.getHalfWidth(), viewPosition!.getY() -this.getHalfHeight(), viewPosition!.getZ() -this.getHalfDepth());
    
}


    public getMovement(): Movement{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return movement;
    
}


    public setMovement(movement: Movement){
var movement = movement
this.movement= movement;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getStaticType();

                        ;
    
}


    public getMultiPlayerType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return multiPlayerType;
    
}


    public setWeaponPropertiesP(weaponProperties: WeaponProperties){
var weaponProperties = weaponProperties
this.weaponProperties= weaponProperties;
    
}


    public getWeaponPropertiesP(): WeaponProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return weaponProperties;
    
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public set(gl: GL){
var gl = gl
this.initAnimationInterface!.set(gl);
    
}


}
                
            

