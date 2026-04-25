
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { CountedPickedUpLayerInterfaceFactory } from "../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { PrimitiveLongUtil } from "../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PartInterface } from "./PartInterface.js";

export class CountedLayerInterfaceFactoryPart
            extends Object
         implements PartInterface {
        

    public static readonly NULL_COUNTED_LAYER_INTERFACE_FACTORY: CountedLayerInterfaceFactoryPart = new CountedLayerInterfaceFactoryPart(0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY);
        
        

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        

    private total: number= 0

    private totalString: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
        
        

    private xOffset: number= 0

    private countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        
        

    private readonly primitiveLongUtil: PrimitiveLongUtil
public constructor (total: number, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){

            super();
        var total = total
var countedPickedUpLayerInterfaceFactory = countedPickedUpLayerInterfaceFactory
this.primitiveLongUtil= PrimitiveLongUtil.create(1000);
    
this.init(total, countedPickedUpLayerInterfaceFactory);
    
}


    init(total: number, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){
var total = total
var countedPickedUpLayerInterfaceFactory = countedPickedUpLayerInterfaceFactory
this.setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory);
    
this.total= total;
    
}


                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{
var hashtable = hashtable
var x = x
var y = y
var z = z

                        if(this.total > 0)
                        
                                    {
                                    this.setTotal(this.total -1);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getCountedPickedUpLayerInterfaceFactory()!.getInstance(hashtable, x, y, z);;
    

                                    }
                                
                        else {
                            


                            throw new Error("No more left. Could use a listener to automatically remove")

                        }
                            
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public setTotal(total: number){
var total = total
this.total= total;
    
this.totalString= this.primitiveLongUtil!.getCharArray(total);
    

    var font: MyFont = MyFont.getInstance()!;
        
        
;
    
this.setXOffset(font.charsWidth(totalString, 0, this.primitiveLongUtil!.getCurrentTotalDigits()) +(font.getSize()>>1));
    
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


    public setAnimationInterface(animationInterface: Animation){
var animationInterface = animationInterface
this.animationInterface= animationInterface;
    
}


    public getXOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xOffset;
    
}


    setXOffset(totalStringWidth: number){
var totalStringWidth = totalStringWidth
this.xOffset= totalStringWidth;
    
}


    public getTotalString(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalString;
    
}


    public getCountedPickedUpLayerInterfaceFactory(): CountedPickedUpLayerInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return countedPickedUpLayerInterfaceFactory;
    
}


    public setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){
var countedPickedUpLayerInterfaceFactory = countedPickedUpLayerInterfaceFactory
this.countedPickedUpLayerInterfaceFactory= countedPickedUpLayerInterfaceFactory;
    
}


}
                
            

