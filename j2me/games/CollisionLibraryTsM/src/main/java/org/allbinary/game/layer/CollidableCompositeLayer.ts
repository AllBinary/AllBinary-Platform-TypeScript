
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
      const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
//not game specific package import { ArtificialIntelligenceInterface } from '../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
//not game specific package import { CollidableBaseBehavior } from '../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
      const CollidableBaseBehavior = globalThis.org.allbinary.game.collision.CollidableBaseBehavior;

      
//not game specific package import { CollidableBaseBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableBaseBehaviorFactory.js';
      const CollidableBaseBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableBaseBehaviorFactory;

      
//not game specific package import { CollidableInterfaceCompositeInterface } from '../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
//not game specific package import { CollidableNeverCollideBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
      const CollidableNeverCollideBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableNeverCollideBehaviorFactory;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';

export class CollidableCompositeLayer extends AllBinaryGameLayer implements CollidableInterfaceCompositeInterface {
        

    private static NULL_COLLIDABLE_COMPOSITE_LAYER: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): CollidableCompositeLayer{

                        if(CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER= new CollidableCompositeLayer(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION, CollidableNeverCollideBehaviorFactory.getInstance());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER as CollidableCompositeLayer;
    
}


    private collidableInferface: CollidableBaseBehavior = CollidableNeverCollideBehaviorFactory.getInstance()!.createBehavior()!;

public constructor (name: string, layerInfo: Rectangle, viewPosition: ViewPositionBase, collidableBaseBehaviorFactory: CollidableBaseBehaviorFactory){
            super(name, layerInfo, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(collidableBaseBehaviorFactory != CollidableNeverCollideBehaviorFactory.getInstance())
                        
                                    {
                                    this.setCollidableInferface(collidableBaseBehaviorFactory!.createBehavior());
    

                                    }
                                
}


    public getArtificialIntelligenceInterface(): ArtificialIntelligenceInterface{
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArtificialIntelligence.getInstance();;
    
}


    public getCollidableInferface(): CollidableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collidableInferface;
    
}


    public setCollidableInferface(collidableInferface: CollidableBaseBehavior){
this.collidableInferface= collidableInferface;
    
}


    public implmentsCollidableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public toStringAppend(stringBuffer: StringMaker){

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
super.toStringAppend(stringBuffer);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.getCollidableInferface()!.toString());
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
this.toStringAppend(stringBuffer);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



