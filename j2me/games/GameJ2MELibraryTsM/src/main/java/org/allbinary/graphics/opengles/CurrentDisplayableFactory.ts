
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Displayable } from '../../../../javax/microedition/lcdui/Displayable.js';
      const Displayable = globalThis.javax.microedition.lcdui.Displayable;

      
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      //not GWT import const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
      //not GWT import const GameInputMappingCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingCanvas;

      
import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
      //not GWT import const GameInputMappingInstructionsCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;

      
import { GameRunnable } from '../../../../org/allbinary/game/displayable/canvas/GameRunnable.js';
      //not GWT import const GameRunnable = globalThis.org.allbinary.game.displayable.canvas.GameRunnable;

      
import { NullDisplayable } from '../../../../org/allbinary/game/displayable/canvas/NullDisplayable.js';
      //not GWT import const NullDisplayable = globalThis.org.allbinary.game.displayable.canvas.NullDisplayable;

      
import { NullWaitGameRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js';
      //not GWT import const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;

      
import { SWTUtil } from '../../../../org/allbinary/game/layer/SWTUtil.js';
      //not GWT import const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      //not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
import { GraphicsStrings } from '../../../../org/allbinary/graphics/GraphicsStrings.js';
      //not GWT import const GraphicsStrings = globalThis.org.allbinary.graphics.GraphicsStrings;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      //not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      //not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { NullRunnable } from '../../../../org/allbinary/thread/NullRunnable.js';
      const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

                
export class CurrentDisplayableFactory
            extends Object
         {
        

    private static readonly instance: CurrentDisplayableFactory = new CurrentDisplayableFactory();

    public static getInstance(): CurrentDisplayableFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CurrentDisplayableFactory.instance;
    
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

    public readonly DEFAULT_CHILD_NAME_LIST: BasicArrayList = new BasicArrayListD();

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

                        if(this.displayable instanceof MyCanvas)
                        
                                    {
                                    
                        if(displayable.hasChild(this.displayable as MyCanvas))
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append("Child Displayable is already set for: ")!.append(this.stringUtil!.toString(displayable))!.toString(), this, this.SET_DISPLAYABLE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                                    }
                                
this.setDisplayable(displayable);
    
}


    public setDisplayable(displayable: Displayable){
this.displayable= displayable;
    
this.setOpenGlReadydisplayable(displayable);
    
}


    public setOpenGlReadydisplayable(openGlReadydisplayable: Displayable){
this.openGlReadydisplayable= openGlReadydisplayable;
    
this.update();
    
}


    public getOpenGlReadydisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.openGlReadydisplayable;
    
}


    public setRunnable(runnable: GameRunnable){
PreLogUtil.put(new StringMaker().append(this.RUNNABLE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, this.SET_RUNNABLE);
    
this.runnable= runnable;
    

                        if(this.usedRunnable != this.runnable)
                        
                                    {
                                    this.update();
    

                                    }
                                
                        else {
                            PreLogUtil.put(new StringMaker().append(this.RUNNABLE_WAS_ALREADY_IN_USE)!.append(this.stringUtil!.toString(runnable))!.toString(), this, this.SET_RUNNABLE);
    

                        }
                            
}


    public clearRunnable(){
PreLogUtil.put(new StringMaker().append(this.RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, this.CLEAR_RUNNABLE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    
}


    update(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    

    var stringMaker: StringMaker = new StringMaker();;
    
stringMaker!.append(this.stringUtil!.toString(this.openGlReadydisplayable));
    

                        if(SWTUtil.isSWT && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(SWTUtil.SWT)!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, this.commonStrings!.UPDATE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    

                                    }
                                
                             else 
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(GraphicsStrings.getInstance()!.HTML)!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString(this.runnable))!.toString(), this, this.commonStrings!.UPDATE);
    
this.setUsedRunnable(this.runnable);
    

                                    }
                                
                             else 
                        if(this.openGlReadydisplayable instanceof DemoCanvas || this.openGlReadydisplayable instanceof AllBinaryGameCanvas || features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    PreLogUtil.put(stringMaker!.append(commonSeps!.SPACE)!.append(OpenGLFeatureFactory.getInstance()!.OPENGL.toString())!.append(commonSeps!.SPACE)!.append(this.RUNNABLE)!.append(this.stringUtil!.toString(this.runnable))!.toString(), this, this.commonStrings!.UPDATE);
    
this.setUsedRunnable(this.runnable);
    

                                    }
                                
                        else {
                            PreLogUtil.put(stringMaker!.append(this.RUNNABLE)!.append(this.stringUtil!.toString(NullRunnable.getInstance()))!.toString(), this, this.commonStrings!.UPDATE);
    
this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    

                        }
                            


}


    public getDisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.displayable;
    
}


    public getUsedRunnable(): GameRunnable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.usedRunnable;
    
}


    public setUsedRunnable(usedRunnable: GameRunnable){
PreLogUtil.put(new StringMaker().append(this.RUNNABLE)!.append(this.stringUtil!.toString(this.runnable))!.toString(), this, this.SET_USED_RUNNABLE);
    
this.usedRunnable= usedRunnable;
    
}


}



