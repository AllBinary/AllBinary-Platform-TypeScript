
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      
import { CountedPickedUpLayerInterfaceFactory } from '../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { PrimitiveLongUtil } from '../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PartInterface } from './PartInterface.js';

export class CountedLayerInterfaceFactoryPart
            extends Object
         implements PartInterface, UpdateMyFontInterface {
        

    public static readonly NULL_COUNTED_LAYER_INTERFACE_FACTORY: CountedLayerInterfaceFactoryPart = new CountedLayerInterfaceFactoryPart(0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY);

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

    private total: number= 0;

    private totalString: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;

    private xOffset: number= 0;

    private countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;

    private readonly primitiveLongUtil: PrimitiveLongUtil;

public constructor (total: number, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){

            super();
        this.primitiveLongUtil= PrimitiveLongUtil.createPowerOfTen(1000);
    
this.init(total, countedPickedUpLayerInterfaceFactory);
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.setXOffset(font.charsWidth(this.totalString, 0, this.primitiveLongUtil!.getCurrentTotalDigits()) +(font.getSize()>>1));
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    init(total: number, countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){
this.setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory);
    
this.total= total;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: Hashtable<any, any>, x: number, y: number, z: number): AllBinaryLayer{

                        if(this.total > 0)
                        
                                    {
                                    this.setTotal(this.total -1);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getCountedPickedUpLayerInterfaceFactory()!.getNextInstance(hashtable, x, y, z);;
    

                                    }
                                
                        else {
                            


                            throw new Exception("No more left. Could use a listener to automatically remove");
                    

                        }
                            
}


    public getTotal(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.total;
    
}


    public setTotal(total: number){
this.total= total;
    
this.totalString= this.primitiveLongUtil!.getCharArray(total);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
}


    public paintThreed(graphics: Graphics){
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    public setAnimationInterface(animationInterface: Animation){
this.animationInterface= animationInterface;
    
}


    public getXOffset(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.xOffset;
    
}


    setXOffset(totalStringWidth: number){
this.xOffset= totalStringWidth;
    
}


    public getTotalString(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalString;
    
}


    public getCountedPickedUpLayerInterfaceFactory(): CountedPickedUpLayerInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.countedPickedUpLayerInterfaceFactory;
    
}


    public setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory: CountedPickedUpLayerInterfaceFactory){
this.countedPickedUpLayerInterfaceFactory= countedPickedUpLayerInterfaceFactory;
    
}


}
                
            

