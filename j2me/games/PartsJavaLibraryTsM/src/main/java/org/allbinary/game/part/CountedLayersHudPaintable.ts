
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
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      //not GWT import const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { PickedUpLayerInterfaceFactoryInterface } from '../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js';
      //not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { PaintableInterface } from '../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PartInterface } from './PartInterface.js';
import { CountedLayerInterfaceFactoryPart } from './CountedLayerInterfaceFactoryPart.js';

export class CountedLayersHudPaintable
            extends Object
         implements PaintableInterface, UpdateMyFontInterface {
        

    private static XXStringWidth: number = 0;

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private readonly partInterfaceArray: PartInterface[];

    private readonly countedTotalStringColor: number;

    private readonly countedPartsBorder: number;

    private readonly startIndex: number;

    private readonly dropSize: number;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private height: number= 0;

public constructor (partInterfaceArray: PartInterface[], dropSize: number, startIndex: number, countedTotalStringColor: number, countedPartsBorder: number){

            super();
        this.partInterfaceArray= partInterfaceArray;
    
this.startIndex= startIndex;
    
this.countedTotalStringColor= countedTotalStringColor;
    
this.countedPartsBorder= countedPartsBorder;
    
this.dropSize= dropSize;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.height= font.getHeight();
    

                        if(this.dropSize > font.getHeight())
                        
                                    {
                                    this.height= this.dropSize;
    

                                    }
                                

                        if(CountedLayersHudPaintable.XXStringWidth == 0)
                        
                                    {
                                    
    var XXString: string = "XX";;
    
CountedLayersHudPaintable.XXStringWidth= font.stringWidth(XXString);
    

                                    }
                                
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var lastWidth: number = this.displayInfoSingleton!.getLastWidth()!;;
    

    var widthEdge: number = lastWidth -this.dropSize;;
    

    var size: number = this.partInterfaceArray!.length
                ;;
    

    var count: number = 0;;
    

    var y: number= 0;;
    

    var countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart;;
    

    var pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface;;
    

    var layerInterface: AllBinaryLayer;;
    

    var charArray: string[];;
    




                        for (
    var index: number = this.startIndex;index < size; index++)
        {
countedLayerInterfaceFactory= this.partInterfaceArray[index]! as CountedLayerInterfaceFactoryPart;
    

                        if(countedLayerInterfaceFactory!.getTotal() > 0)
                        
                                    {
                                    pickedUpLayerInterfaceFactoryInterface= countedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory();
    
layerInterface= pickedUpLayerInterfaceFactoryInterface!.getIconLayer();
    
y= 40 +(count *this.height);
    
layerInterface!.setPosition(widthEdge, y, layerInterface!.getZP());
    
layerInterface!.paint(graphics);
    
graphics.setColor(this.countedTotalStringColor);
    
countedLayerInterfaceFactory!.paint(graphics);
    
charArray= countedLayerInterfaceFactory!.getTotalString();
    
graphics.drawChars(charArray, 0, charArray!.length, widthEdge -countedLayerInterfaceFactory!.getXOffset(), y, 0);
    
count++;
    

                                    }
                                
}


                        if(count > 0)
                        
                                    {
                                    graphics.setColor(this.countedPartsBorder);
    
graphics.drawRect(lastWidth -(CountedLayersHudPaintable.XXStringWidth +this.dropSize), 40, CountedLayersHudPaintable.XXStringWidth +this.dropSize, (count *this.height) +3);
    

                                    }
                                
}


    public paintThreed(graphics: Graphics){
}


}



