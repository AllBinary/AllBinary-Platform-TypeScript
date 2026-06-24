
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


        
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GamePerformanceInitUpdatePaintable extends InitUpdatePaintable implements UpdateMyFontInterface {
        

    private readonly halfHeight: number = DisplayInfoSingleton.getInstance()!.getLastHalfHeight()!;

    private readonly yArray: number[] = [this.halfHeight +30,this.halfHeight +30,this.halfHeight +30 +15,this.halfHeight +30 +15,this.halfHeight +30 +30,this.halfHeight +30 +30,this.halfHeight +30 +45,this.halfHeight +30 +45];

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private baseRefreshHelperCharArray: string[][] = new Array(0).fill(null).map(() => new Array(0).fill(0));

    private defaultStringWidth: number= 0;

    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.defaultStringWidth= MyFontProcessor.defaultStringWidth(font, 2);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public init(){
}


    public update(){
this.baseRefreshHelperCharArray= GameStatisticsFactory.getInstance()!.to2DCharArray();
    
}


    private readonly RED: number = BasicColorFactory.getInstance()!.RED.intValue()!;

    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.RED);
    

    var charArray: string[];;
    

    var charArray2: string[];;
    

    var size2: number= 0;;
    

    var size3: number= 0;;
    

    var size: number = this.baseRefreshHelperCharArray!.length -2;;
    




                        for (
    var index: number = size;index >= 0; )
        {
charArray= this.baseRefreshHelperCharArray[index]!;
    
charArray2= this.baseRefreshHelperCharArray[index +1]!;
    
size2= charArray!.length;
    
size3= charArray2!.length;
    
graphics.drawChars(charArray, 0, size2, 0, this.yArray[index]!, 0);
    
graphics.drawChars(charArray2, 0, size3, size2 *this.defaultStringWidth, this.yArray[index +1]!, 0);
    
}

}


}
                
            

