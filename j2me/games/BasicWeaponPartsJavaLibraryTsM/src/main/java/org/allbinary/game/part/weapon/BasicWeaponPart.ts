
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { PartInterface } from '../../../../../org/allbinary/game/part/PartInterface.js';
      //not GWT import const PartInterface = globalThis.org?.allbinary?.game?.part?.PartInterface;

      
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
      //not GWT import const NoScoreable = globalThis.org.allbinary.game.score.NoScoreable;

      
import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      //not GWT import const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      //not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SalvoInterface } from './SalvoInterface.js';
//not GWT import const SalvoInterface = globalThis.org.allbinary.game.part.weapon.SalvoInterface;

                
export class BasicWeaponPart
            extends Object
         implements PartInterface, SalvoInterface {
        

    public static createBasicWeaponPart(animationInterface: Animation): BasicWeaponPart{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    
}


    public static readonly NULL_BASIC_WEAPON_PART: BasicWeaponPart = BasicWeaponPart.createBasicWeaponPart(NullAnimationFactory.getFactoryInstance()!.getInstance(0))!;

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

    private ownerLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

    private weaponProperties: WeaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;

    private scoreableInterface: ScoreableInterface = NoScoreable.getInstance()!;

    relativeRelationship: RelativeRelationship = RelativeRelationship.NULL_RELATIVE_RELATIONSHIP;

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){

            super();
        this.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
    
this.setAnimationInterface(animationInterface);
    
}


    public init(sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
this.setOwnerLayerInterface(sourceLayerInterface);
    
this.setWeaponProperties(weaponProperties);
    
this.scoreableInterface= scoreableInterface;
    
this.relativeRelationship= relativeRelationship;
    
}


                //@Throws(Exception.constructor)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number){
this.processScore(allbinaryLayerManager, angle, otherAngle, this.getWeaponProperties(), this.scoreableInterface);
    
}


                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){



                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownerLayerInterface;
    
}


    public setOwnerLayerInterface(ownerLayerInterface: AllBinaryLayer){
this.ownerLayerInterface= ownerLayerInterface;
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    public setAnimationInterface(animationInterface: Animation){
this.animationInterface= animationInterface;
    
}


    public paint(graphics: Graphics){

    var viewPosition: ViewPositionBase = this.getOwnerLayerInterface()!.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.animationInterface!.paintXY(graphics, viewX, viewY);
    
}


    public paintThreed(graphics: Graphics){
}


    public getWeaponProperties(): WeaponProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.weaponProperties;
    
}


    public setWeaponProperties(weaponProperties: WeaponProperties){
this.weaponProperties= weaponProperties;
    
}


}



