
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
      
import { ArtificialIntelligenceInterface } from '../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      
import { CollidableBaseBehavior } from '../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
      
import { CollidableBaseBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableBaseBehaviorFactory.js';
      
import { CollidableInterfaceCompositeInterface } from '../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      
import { CollidableNeverCollideBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
import { ViewPosition } from '../../../../org/allbinary/view/ViewPosition.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';

export class CollidableCompositeLayer extends AllBinaryGameLayer implements CollidableInterfaceCompositeInterface {
        

    public static readonly NULL_COLLIDABLE_COMPOSITE_LAYER: CollidableCompositeLayer = new CollidableCompositeLayer(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPosition.NULL_VIEW_POSITION, CollidableNeverCollideBehaviorFactory.getInstance());

    private collidableInferface: CollidableBaseBehavior = CollidableNeverCollideBehaviorFactory.getInstance()!.createBehavior()!;
public constructor (name: string, layerInfo: Rectangle, viewPosition: ViewPosition, collidableBaseBehaviorFactory: CollidableBaseBehaviorFactory){
            super(name, layerInfo, viewPosition);
                        //var name = name
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition
    //var collidableBaseBehaviorFactory = collidableBaseBehaviorFactory


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
    //var collidableInferface = collidableInferface
this.collidableInferface= collidableInferface;
    
}


    public implmentsCollidableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public toStringAppend(stringBuffer: StringMaker){
    //var stringBuffer = stringBuffer

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
;
    
super.toStringAppend(stringBuffer);
    
stringBuffer!.append(commonSeps!.NEW_LINE);
    
stringBuffer!.append(this.getCollidableInferface()!.toString());
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
this.toStringAppend(stringBuffer);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

