
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
        



import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { ColorChangeEvent } from '../../../../org/allbinary/graphics/color/ColorChangeEvent.js';
      
import { ColorChangeListener } from '../../../../org/allbinary/graphics/color/ColorChangeListener.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullHighScoresSingletonFactory } from './NullHighScoresSingletonFactory.js';
import { HighScores } from './HighScores.js';
import { HighScore } from './HighScore.js';

export class HighScoresPaintable extends Paintable implements ColorChangeListener, UpdateMyFontInterface {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;

    private highScores: HighScores = NullHighScoresSingletonFactory.getInstance()!;

    private anchor: number = Anchor.TOP_LEFT;

    private charHeight: number= 0;

public constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.charHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public onEvent(eventObject: AllBinaryEventObject){

    var colorChangeEvent: ColorChangeEvent = eventObject as ColorChangeEvent;;
    
this.basicColor= colorChangeEvent!.getBasicColorP();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var width: number = this.displayInfoSingleton!.getLastWidth()!;;
    

    var height: number = this.displayInfoSingleton!.getLastHeight()!;;
    
graphics.setColor(this.getBasicColorP()!.intValue());
    

    var heading: string = this.highScores!.getHeading()!;;
    

    var topScoresWidth: number = (graphics.getFont()!.stringWidth(heading)>>1);;
    

    var charHeight: number = this.charHeight;;
    
graphics.drawString(heading, (width>>1) -topScoresWidth, charHeight, this.anchor);
    
graphics.drawString(this.highScores!.getColumnOneHeading(), 10, charHeight *3, this.anchor);
    

    var columnTwoHeading: string = this.highScores!.getColumnTwoHeading()!;;
    

    var columnTwoHeadingWidth: number = graphics.getFont()!.stringWidth(columnTwoHeading)!;;
    
graphics.drawString(columnTwoHeading, width -10 -columnTwoHeadingWidth, charHeight *3, this.anchor);
    

    var index: number = 4;;
    

    var largestSecondColumnWidth: number = columnTwoHeadingWidth;;
    

    var list: BasicArrayList = this.highScores!.getList()!;;
    

    var size: number = list.size()!;;
    

    var vectorIndex: number = 0;;
    

    var highScore: HighScore;;
    

        while(vectorIndex < size && charHeight *index < height -(charHeight *2))
        {
highScore= list.objectArray[vectorIndex]! as HighScore;
    

    var nextScoreWidth: number = graphics.getFont()!.stringWidth(highScore!.getScoreString())!;;
    

                        if(nextScoreWidth > largestSecondColumnWidth)
                        
                                    {
                                    largestSecondColumnWidth= nextScoreWidth;
    

                                    }
                                
vectorIndex++;
    
}

vectorIndex= 0;
    

        while(vectorIndex < size && charHeight *index < height -(charHeight *2))
        {
highScore= list.objectArray[vectorIndex]! as HighScore;
    
graphics.drawString(highScore!.getName(), 10, charHeight *index, this.anchor);
    
graphics.drawString(highScore!.getScoreString(), width -10 -largestSecondColumnWidth, charHeight *index, this.anchor);
    
index++;
    
vectorIndex++;
    
}

}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public setHighScores(highScores: HighScores){
this.highScores= highScores;
    
}


}
                
            

