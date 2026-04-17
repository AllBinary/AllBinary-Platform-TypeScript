
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

    
import { MyRandomFactory } from "../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorArrayIndexer } from "../../../../../org/allbinary/graphics/color/BasicColorArrayIndexer.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { CharArrayFactory } from "../../../../../org/allbinary/logic/java/character/CharArrayFactory.js";

    
import { PrimitiveLongUtil } from "../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    
import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DamageFloaters } from "./DamageFloaters.js";

export class PtsDamageFloaters extends DamageFloaters {
        

    private static readonly basicColorArrayIndexer: BasicColorArrayIndexer = new BasicColorArrayIndexer(
                                                [
                                                    BasicColorFactory.getInstance()!.WHITE,BasicColorFactory.getInstance()!.RED,BasicColorFactory.getInstance()!.YELLOW,BasicColorFactory.getInstance()!.BLUE;
        
        
                                                ]);
        
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    private layerInterface: AllBinaryLayer

    private lastDamage: number[] = new Array(5);
        
        

    private lastDamageString: string[][] = new Array(5) [0];
        
        

    private lastDamageStringSizeArray: number[] = new Array(5);
        
        

    private circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(5)!;
        
        

    private readonly primitiveLongUtil: PrimitiveLongUtil
public constructor (layerInterface: AllBinaryLayer){

            super();
            var layerInterface = layerInterface
this.primitiveLongUtil= new PrimitiveLongUtil(100000);
    
this.layerInterface= layerInterface;
    

    var CHAR_ARRAY: string[] = CharArrayFactory.getInstance()!.getZeroCharArray()!;
        
        
;
    




                        for (
    var index: number = this.lastDamageString!.length -1;
        
        
index >= 0; index--)
        {
this.lastDamageString[index]= CHAR_ARRAY;
    
}

}


    public add(damage: number){
var damage = damage

    var index: number = this.circularIndexUtil!.getIndex()!;
        
        
;
    
this.lastDamage[index]= damage;
    
this.lastDamageString[index]= this.primitiveLongUtil!.getCharArray(this.lastDamage[index]!);
    
this.lastDamageStringSizeArray[index]= this.primitiveLongUtil!.getCurrentTotalDigits();
    
this.circularIndexUtil!.next();
    
}


    private readonly myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var viewPosition: ViewPosition = this.layerInterface!.getViewPosition()!;
        
        
;
    

    var x: number = viewPosition!.getX()!;
        
        
;
    

    var y: number = viewPosition!.getY()!;
        
        
;
    




                        for (
    var index: number = this.lastDamage!.length -1;
        
        
index >= 0; index--)
        {

                        if(this.lastDamage[index] != 0)
                        
                                    {
                                    
    var delta: number = 10 *(index +2);
        
        
;
    
this.basicSetColorUtil!.setBasicColorP(graphics, basicColorArrayIndexer!.get());
    
graphics.drawChars(this.lastDamageString[index]!, 0, this.lastDamageStringSizeArray[index]!, x -myRandomFactory!.getNextInt(delta), y -delta, 0);
    
basicColorArrayIndexer!.next();
    

                                    }
                                
this.lastDamage[index]= 0;
    
}

}


}
                
            

