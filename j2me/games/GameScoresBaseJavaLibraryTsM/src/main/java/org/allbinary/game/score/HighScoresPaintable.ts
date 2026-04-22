
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

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ColorChangeEvent } from "../../../../org/allbinary/graphics/color/ColorChangeEvent.js";

    
import { ColorChangeListener } from "../../../../org/allbinary/graphics/color/ColorChangeListener.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullHighScoresSingletonFactory } from "./NullHighScoresSingletonFactory.js";

import { HighScores } from "./HighScores.js";

export class HighScoresPaintable extends Paintable implements ColorChangeListener {
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    private highScores: HighScores = NullHighScoresSingletonFactory.getInstance()!;
        
        
public constructor (){

            super();
        }


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject

    var colorChangeEvent: ColorChangeEvent = eventObject as ColorChangeEvent;
        
        
;
    
this.basicColor= colorChangeEvent!.getBasicColorP();
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var charHeight: number = MyFont.getInstance()!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var width: number = this.displayInfoSingleton!.getLastWidth()!;
        
        
;
    

    var height: number = this.displayInfoSingleton!.getLastHeight()!;
        
        
;
    
graphics.setColor(getBasicColorP()!.toInt());
    

    var heading: string = this.highScores!.getHeading()!;
        
        
;
    

    var topScoresWidth: number = (graphics.getFont()!.stringWidth(heading)>>1);
        
        
;
    
graphics.drawString(heading, (width>>1) -topScoresWidth, charHeight, anchor);
    
graphics.drawString(this.highScores!.getColumnOneHeading(), 10, charHeight *3, anchor);
    

    var columnTwoHeading: string = this.highScores!.getColumnTwoHeading()!;
        
        
;
    

    var columnTwoHeadingWidth: number = graphics.getFont()!.stringWidth(columnTwoHeading)!;
        
        
;
    
graphics.drawString(columnTwoHeading, width -10 -columnTwoHeadingWidth, charHeight *3, anchor);
    

    var index: number = 4;
        
        
;
    

    var largestSecondColumnWidth: number = columnTwoHeadingWidth;
        
        
;
    

    var list: BasicArrayList = this.highScores!.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var vectorIndex: number = 0;
        
        
;
    

        while(vectorIndex < size && charHeight *index < height -(charHeight *2))
        {

    var highScore: HighScore = list.objectArray[vectorIndex]! as HighScore;
        
        
;
    

    var nextScoreWidth: number = graphics.getFont()!.stringWidth(highScore!.getScoreString())!;
        
        
;
    

                        if(nextScoreWidth > largestSecondColumnWidth)
                        
                                    {
                                    largestSecondColumnWidth= nextScoreWidth;
    

                                    }
                                
vectorIndex++;
    
}

vectorIndex= 0;
    

        while(vectorIndex < size && charHeight *index < height -(charHeight *2))
        {

    var highScore: HighScore = list.objectArray[vectorIndex]! as HighScore;
        
        
;
    
graphics.drawString(highScore!.getName(), 10, charHeight *index, anchor);
    
graphics.drawString(highScore!.getScoreString(), width -10 -largestSecondColumnWidth, charHeight *index, anchor);
    
index++;
    
vectorIndex++;
    
}

}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    public setHighScores(highScores: HighScores){
var highScores = highScores
this.highScores= highScores;
    
}


}
                
            

