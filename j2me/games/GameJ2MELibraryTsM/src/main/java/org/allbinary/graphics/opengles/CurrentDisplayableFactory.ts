
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
        



import { Displayable } from "../../../../javax/microedition/lcdui/Displayable.js";

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { DemoCanvas } from "../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js";

    
import { GameInputMappingCanvas } from "../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js";

    
import { GameInputMappingInstructionsCanvas } from "../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js";

    
import { GameRunnable } from "../../../../org/allbinary/game/displayable/canvas/GameRunnable.js";

    
import { NullDisplayable } from "../../../../org/allbinary/game/displayable/canvas/NullDisplayable.js";

    
import { NullWaitGameRunnable } from "../../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js";

    
import { SWTUtil } from "../../../../org/allbinary/game/layer/SWTUtil.js";

    
import { HighScoresCanvas } from "../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js";

    
import { GraphicsStrings } from "../../../../org/allbinary/graphics/GraphicsStrings.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { MyCanvas } from "../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { NullRunnable } from "../../../../org/allbinary/thread/NullRunnable.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class CurrentDisplayableFactory
            extends Object
         {
        

    private static readonly instance: CurrentDisplayableFactory = new CurrentDisplayableFactory();
        
        

    public static getInstance(): CurrentDisplayableFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly SET_DISPLAYABLE: string = "setDisplayable";
        
        

    private readonly SET_RUNNABLE: string = "setRunnable";
        
        

    private readonly CLEAR_RUNNABLE: string = "clearRunnable";
        
        

    private readonly SET_USED_RUNNABLE: string = "setUsedRunnable";
        
        

    private readonly RUNNABLE: string = "Runnable: ";
        
        

    private readonly RUNNABLE_WAS_ALREADY_IN_USE: string = "Runnable was already in use: ";
        
        

    public readonly DEFAULT_CHILD_NAME_LIST: BasicArrayList = new BasicArrayList();
        
        

    private displayable: Displayable = NullDisplayable.getInstance()!;
        
        

    private openGlReadydisplayable: Displayable = NullDisplayable.getInstance()!;
        
        

    private runnable: GameRunnable = NullWaitGameRunnable.getInstance()!;
        
        

    private usedRunnable: GameRunnable = NullWaitGameRunnable.getInstance()!;
        
        
private constructor (){

            super();
            this.DEFAULT_CHILD_NAME_LIST.add(this.canvasStrings!.ABOUT);
    
this.DEFAULT_CHILD_NAME_LIST.add(this.canvasStrings!.OPTIONS);
    
this.DEFAULT_CHILD_NAME_LIST.add(GameInputMappingCanvas.NAME);
    
this.DEFAULT_CHILD_NAME_LIST.add(GameInputMappingInstructionsCanvas.NAME);
    
this.DEFAULT_CHILD_NAME_LIST.add(HighScoresCanvas.NAME);
    
}


    public setMyCanvas(displayable: MyCanvas){
    //var displayable = displayable

                        if(this.displayable is MyCanvas)
                        
                                    {
                                    
                        if(displayable.hasChild(this.displayable as MyCanvas))
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append("Child Displayable is already set for: ")!.append(this.stringUtil!.toString(displayable))!.toString(), this, SET_DISPLAYABLE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                
this.setDisplayable(displayable);
    
}


    public setDisplayable(displayable: Displayable){
    //var displayable = displayable
this.displayable= displayable;
    
this.setOpenGlReadydisplayable(displayable);
    
}


    public setOpenGlReadydisplayable(openGlReadydisplayable: Displayable){
    //var openGlReadydisplayable = openGlReadydisplayable
this.openGlReadydisplayable= openGlReadydisplayable;
    
this.update();
    
}


    public getOpenGlReadydisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return openGlReadydisplayable;
    
}


    public setRunnable(runnable: GameRunnable){
    //var runnable = runnable
PreLogUtil.put(new StringMaker().
                            append(RUNNABLE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, SET_RUNNABLE);
    
this.runnable= runnable;
    

                        if(this.usedRunnable != this.runnable)
                        
                                    {
                                    this.update();
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().
                            append(RUNNABLE_WAS_ALREADY_IN_USE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, SET_RUNNABLE);
    

                        }
                            
}


    public clearRunnable(){
PreLogUtil.put(new StringMaker().
                            append(RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, CLEAR_RUNNABLE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    
}


    update(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
stringMaker!.append(this.stringUtil!.toString(openGlReadydisplayable));
    

                        if(SWTUtil.isSWT && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL);

                        )
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(SWTUtil.SWT)!.append(commonSeps!.SPACE)!.append(RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, commonStrings!.UPDATE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    

                                    }
                                
                             else 
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(GraphicsStrings.getInstance()!.HTML)!.append(commonSeps!.SPACE)!.append(RUNNABLE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, commonStrings!.UPDATE);
    
this.setUsedRunnable(runnable);
    

                                    }
                                
                             else 
                        if(openGlReadydisplayable is DemoCanvas || openGlReadydisplayable is AllBinaryGameCanvas || features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(OpenGLFeatureFactory.getInstance()!.OPENGL.toString())!.append(commonSeps!.SPACE)!.append(RUNNABLE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, commonStrings!.UPDATE);
    
this.setUsedRunnable(runnable);
    

                                    }
                                
                        else {
                            PreLogUtil.put(stringMaker!.append(RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, commonStrings!.UPDATE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    

                        }
                            
}

}


    public getDisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return displayable;
    
}


    public getUsedRunnable(): GameRunnable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usedRunnable;
    
}


    public setUsedRunnable(usedRunnable: GameRunnable){
var usedRunnable = usedRunnable
PreLogUtil.put(new StringMaker().
                            append(RUNNABLE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, SET_USED_RUNNABLE);
    
this.usedRunnable= usedRunnable;
    
}


}
                
            

