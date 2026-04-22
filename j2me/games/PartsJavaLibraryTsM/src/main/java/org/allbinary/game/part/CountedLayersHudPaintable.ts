
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { PickedUpLayerInterfaceFactoryInterface } from "../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactoryInterface.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { PaintableInterface } from "../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CountedLayersHudPaintable
            extends Object
         implements PaintableInterface {
        

    private static readonly XXString: string = "XX";
        
        

    private static readonly XXStringWidth: number = MyFont.getInstance()!.stringWidth(XXString)!;
        
        

    private readonly myFont: MyFont = MyFont.getInstance()!;
        
        

    private readonly partInterfaceArray: PartInterface[]

    private readonly countedTotalStringColor: number

    private readonly countedPartsBorder: number

    private readonly startIndex: number

    private readonly dropSize: number
public constructor (partInterfaceArray: PartInterface[], dropSize: number, startIndex: number, countedTotalStringColor: number, countedPartsBorder: number){

            super();
        var partInterfaceArray = partInterfaceArray
var dropSize = dropSize
var startIndex = startIndex
var countedTotalStringColor = countedTotalStringColor
var countedPartsBorder = countedPartsBorder
this.partInterfaceArray= partInterfaceArray;
    
this.startIndex= startIndex;
    
this.countedTotalStringColor= countedTotalStringColor;
    
this.countedPartsBorder= countedPartsBorder;
    
this.dropSize= dropSize;
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var height: number = this.myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

                        if(this.dropSize > this.myFont!.DEFAULT_CHAR_HEIGHT)
                        
                                    {
                                    height= this.dropSize;
    

                                    }
                                

    var lastWidth: number = DisplayInfoSingleton.getInstance()!.getLastWidth()!;
        
        
;
    

    var count: number = 0;
        
        
;
    

    var widthEdge: number = lastWidth -this.dropSize;
        
        
;
    

    var y: number= 0
;
    

    var size: number = this.partInterfaceArray!.length
                ;
        
        
;
    

    var countedLayerInterfaceFactory: CountedLayerInterfaceFactoryPart
;
    

    var pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface
;
    

    var layerInterface: AllBinaryLayer
;
    

    var charArray: string[]
;
    




                        for (
    var index: number = this.startIndex;
        
        
index < size; index++)
        {
countedLayerInterfaceFactory= this.partInterfaceArray[index]! as CountedLayerInterfaceFactoryPart;
    

                        if(countedLayerInterfaceFactory!.getTotal() > 0)
                        
                                    {
                                    pickedUpLayerInterfaceFactoryInterface= countedLayerInterfaceFactory!.getCountedPickedUpLayerInterfaceFactory();
    
layerInterface= pickedUpLayerInterfaceFactoryInterface!.getIconLayer();
    
y= 40 +(count *height);
    
layerInterface!.setPosition(widthEdge, y, layerInterface!.getZP());
    
layerInterface!.paint(graphics);
    
graphics.setColor(this.countedTotalStringColor);
    
charArray= countedLayerInterfaceFactory!.getTotalString();
    
graphics.drawChars(charArray, 0, charArray!.length, widthEdge -countedLayerInterfaceFactory!.getXOffset(), y, 0);
    
count++;
    

                                    }
                                
}


                        if(count > 0)
                        
                                    {
                                    graphics.setColor(this.countedPartsBorder);
    
graphics.drawRect(lastWidth -(XXStringWidth +this.dropSize), 40, XXStringWidth +this.dropSize, (count *height) +3);
    

                                    }
                                
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


}
                
            

