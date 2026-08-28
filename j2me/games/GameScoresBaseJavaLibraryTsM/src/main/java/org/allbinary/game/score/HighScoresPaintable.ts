
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

      
//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { ColorChangeEvent } from '../../../../org/allbinary/graphics/color/ColorChangeEvent.js';
      const ColorChangeEvent = globalThis.org.allbinary.graphics.color.ColorChangeEvent;

      
//not game specific package import { ColorChangeListener } from '../../../../org/allbinary/graphics/color/ColorChangeListener.js';
      const ColorChangeListener = globalThis.org.allbinary.graphics.color.ColorChangeListener;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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



