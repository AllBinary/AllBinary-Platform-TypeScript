
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

        


import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
      //not GWT import const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
import { ArtificialIntelligenceInterface } from '../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { CollidableBaseBehavior } from '../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
      //not GWT import const CollidableBaseBehavior = globalThis.org.allbinary.game.collision.CollidableBaseBehavior;

      
import { CollidableBaseBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableBaseBehaviorFactory.js';
      //not GWT import const CollidableBaseBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableBaseBehaviorFactory;

      
import { CollidableInterfaceCompositeInterface } from '../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      //not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
import { CollidableNeverCollideBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
      //not GWT import const CollidableNeverCollideBehaviorFactory = globalThis.org.allbinary.game.collision.CollidableNeverCollideBehaviorFactory;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      //not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

                
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



