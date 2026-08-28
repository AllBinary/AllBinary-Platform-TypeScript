
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

      
//not game specific package import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { CollidableBaseBehavior } from '../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
      const CollidableBaseBehavior = globalThis.org.allbinary.game.collision.CollidableBaseBehavior;

      
//not game specific package import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
//not game specific package import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
      const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;

      
//not game specific package import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { MultiPlayerGameLayer } from '../../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
      const MultiPlayerGameLayer = globalThis.org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer;

      
//not game specific package import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
      const NoScoreable = globalThis.org.allbinary.game.score.NoScoreable;

      
//not game specific package import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
//not game specific package import { TickableInterface } from '../../../../../org/allbinary/game/tick/TickableInterface.js';
      const TickableInterface = globalThis.org?.allbinary?.game?.tick?.TickableInterface;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { Movement } from '../../../../../org/allbinary/physics/movement/Movement.js';
      const Movement = globalThis.org.allbinary.physics.movement.Movement;

      
//not game specific package import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
//not game specific package import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';

export class WeaponLayer extends MultiPlayerGameLayer implements TickableInterface {
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

    initAnimationInterface: Animation;

    private destroyedAnimationInterface: Animation;

    private sourceLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

    totalDamage: number= 0;

    private initDamage: number= 0;

    private destroyed: boolean = true;

    scoreableInterface: ScoreableInterface = NoScoreable.getInstance()!;

    private movement: Movement;

    private weaponProperties: WeaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;

    private readonly multiPlayerType: number;

protected constructor (name: string, remoteInfo: RemoteInfo, multiPlayerType: number, movement: Movement, animationInterface: Animation, destroyedAnimationInterface: Animation, rectangle: Rectangle, viewPosition: ViewPositionBase){
            super(remoteInfo, BasicGroupFactory.getInstance()!.NONE_ARRAY, name, rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initAnimationInterface= animationInterface;
    
this.setAnimationInterface(animationInterface);
    
this.destroyedAnimationInterface= destroyedAnimationInterface;
    
this.movement= movement;
    
this.multiPlayerType= multiPlayerType;
    
}


    private collidableWeaponBehavior: CollidableWeaponBehavior = CollidableWeaponBehavior.getNullInstance()!;

    public setCollidableInferface(collidableInferface: CollidableBaseBehavior){
super.setCollidableInferface(collidableInferface);
    
this.collidableWeaponBehavior= this.getCollidableInferface() as CollidableWeaponBehavior;
    
}


                //@Throws(Exception.constructor)
            
    public initXYZ(x: number, y: number, z: number){
this.x= x;
    
this.y= y;
    
this.z= z;
    
}


                //@Throws(Exception.constructor)
            
    public init(sourceLayerInterface: AllBinaryLayer, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreable: ScoreableInterface){
this.setWeaponPropertiesP(weaponProperties);
    
this.setReadyForExplosion(false);
    
this.setAnimationInterface(this.getInitAnimationInterfaceP());
    
this.setOwnerLayerInterface(sourceLayerInterface);
    
this.collidableWeaponBehavior!.init(sourceLayerInterface);
    
this.setGroupInterfaces();
    

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


    setGroupInterfaces(){

    var basicGroupFactory: BasicGroupFactory = BasicGroupFactory.getInstance()!;;
    

                        if(this.sourceLayerInterface!.getGroupInterface()[0] == basicGroupFactory!.ENEMY)
                        
                                    {
                                    this.setGroupInterface(basicGroupFactory!.ENEMY_ARRAY);
    

                                    }
                                
                        else {
                            this.setGroupInterface(this.sourceLayerInterface!.getGroupInterface());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.isExhausted() && !this.isDestroyed())
                        
                                    {
                                    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var indexedAnimationInterface: IndexedAnimation = this.getAnimationInterface() as IndexedAnimation;;
    

    var currentFrame: number = indexedAnimationInterface!.getFrame()!;;
    

                        if(currentFrame < indexedAnimationInterface!.getAnimationSize() -1)
                        
                                    {
                                    indexedAnimationInterface!.nextFrame();
    

                                    }
                                
                        else {
                            this.setDestroyed(true);
    

                        }
                            

                                    }
                                
                        else {
                            
    var collidableWeaponBehavior: CollidableWeaponBehavior = this.getCollidableInferface() as CollidableWeaponBehavior;;
    

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
this.totalDamage += damage *damage;
    
}


    givePoints(total: number){
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

                        if(!this.isExhausted())
                        
                                    {
                                    
    var total: number = this.getInitDamage() -this.totalDamage;;
    
this.givePoints(total);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setDestroyed(destroyed: boolean){
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    this.scoreableInterface= NoScoreable.getInstance();
    
DestroyedLayerProcessor.getInstance()!.add(this);
    

                                    }
                                
}


    getInitDamage(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initDamage;
    
}


    setAnimationInterface(animationInterface: Animation){
this.animationInterface= animationInterface;
    
}


    getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    public getInitAnimationInterfaceP(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initAnimationInterface;
    
}


    public setInitAnimationInterfaceP(initAnimationInterface: Animation){
this.initAnimationInterface= initAnimationInterface;
    
}


    public getDestroyedAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyedAnimationInterface;
    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sourceLayerInterface;
    
}


    public setOwnerLayerInterface(sourceLayerInterface: AllBinaryLayer){
this.sourceLayerInterface= sourceLayerInterface;
    
}


    public paint(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    
this.animationInterface!.paintXY(graphics, viewPosition!.getX() -this.getHalfWidth(), viewPosition!.getY() -this.getHalfHeight());
    
}


    public paintThreed(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    
this.animationInterface!.paintThreedXYZ(graphics, viewPosition!.getX() -this.getHalfWidth(), viewPosition!.getY() -this.getHalfHeight(), viewPosition!.getZ() -this.getHalfDepth());
    
}


    public getMovement(): Movement{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.movement;
    
}


    public setMovement(movement: Movement){
this.movement= movement;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WeaponLayer.getStaticType();;
    
}


    public getMultiPlayerType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.multiPlayerType;
    
}


    public setWeaponPropertiesP(weaponProperties: WeaponProperties){
this.weaponProperties= weaponProperties;
    
}


    public getWeaponPropertiesP(): WeaponProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weaponProperties;
    
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public set(gl: GL){
this.initAnimationInterface!.set(gl);
    
}


}



