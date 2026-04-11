
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { PartInterface } from "../../../../../org/allbinary/game/part/PartInterface.js";

    
import { NoScoreable } from "../../../../../org/allbinary/game/score/NoScoreable.js";

    
import { ScoreableInterface } from "../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { RelativeRelationship } from "../../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class BasicWeaponPart
            extends Object
        
                , PartInterface
                , SalvoInterface {
        

    public static readonly NULL_BASIC_WEAPON_PART: BasicWeaponPart = new BasicWeaponPart(NullAnimationFactory.getFactoryInstance()!.getInstance(0));
        
        

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        

    private ownerLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        

    private weaponProperties: WeaponProperties = WeaponProperties.NULL_WEAPON_PROPERTIES;
        
        

    private scoreableInterface: ScoreableInterface = NoScoreable.getInstance()!;
        
        

    relativeRelationship: RelativeRelationship = RelativeRelationship.NULL_RELATIVE_RELATIONSHIP;
        
        
public constructor (animationInterface: Animation){

            super();
                //var animationInterface = animationInterface
this.setAnimationInterface(animationInterface);
    
}

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){

            super();
                //var animationInterface = animationInterface
    //var sourceLayerInterface = sourceLayerInterface
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface
    //var relativeRelationship = relativeRelationship
this.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
    
this.setAnimationInterface(animationInterface);
    
}


    public init(sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
    //var sourceLayerInterface = sourceLayerInterface
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface
    //var relativeRelationship = relativeRelationship
this.setOwnerLayerInterface(sourceLayerInterface);
    
this.setWeaponProperties(weaponProperties);
    
this.scoreableInterface= scoreableInterface;
    
this.relativeRelationship= relativeRelationship;
    
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var angle = angle
    //var otherAngle = otherAngle
this.process(allbinaryLayerManager, angle, otherAngle, this.getWeaponProperties(), this.scoreableInterface);
    
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var angle = angle
    //var otherAngle = otherAngle
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface



                            throw new Error(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ownerLayerInterface;
    
}


    public setOwnerLayerInterface(ownerLayerInterface: AllBinaryLayer){
    //var ownerLayerInterface = ownerLayerInterface
this.ownerLayerInterface= ownerLayerInterface;
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


    public setAnimationInterface(animationInterface: Animation){
    //var animationInterface = animationInterface
this.animationInterface= animationInterface;
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics

    var viewPosition: ViewPosition = this.getOwnerLayerInterface()!.getViewPosition()!;
        
        
;
    

    var viewX: number = viewPosition!.getX()!;
        
        
;
    

    var viewY: number = viewPosition!.getY()!;
        
        
;
    
this.animationInterface!.paint(graphics, viewX, viewY);
    
}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics
}


    public getWeaponProperties(): WeaponProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return weaponProperties;
    
}


    public setWeaponProperties(weaponProperties: WeaponProperties){
    //var weaponProperties = weaponProperties
this.weaponProperties= weaponProperties;
    
}


}
                
            

