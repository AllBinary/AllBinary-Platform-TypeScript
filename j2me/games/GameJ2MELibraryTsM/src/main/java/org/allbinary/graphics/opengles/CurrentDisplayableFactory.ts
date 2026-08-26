
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Displayable } from '../../../../javax/microedition/lcdui/Displayable.js';
      const Displayable = globalThis.javax.microedition.lcdui.Displayable;

      
//not game specific package import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
//not game specific package import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
      const GameInputMappingCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingCanvas;

      
//not game specific package import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
      const GameInputMappingInstructionsCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;

      
//not game specific package import { GameRunnable } from '../../../../org/allbinary/game/displayable/canvas/GameRunnable.js';
      const GameRunnable = globalThis.org.allbinary.game.displayable.canvas.GameRunnable;

      
//not game specific package import { NullDisplayable } from '../../../../org/allbinary/game/displayable/canvas/NullDisplayable.js';
      const NullDisplayable = globalThis.org.allbinary.game.displayable.canvas.NullDisplayable;

      
//not game specific package import { NullWaitGameRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js';
      const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;

      
//not game specific package import { SWTUtil } from '../../../../org/allbinary/game/layer/SWTUtil.js';
      const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
//not game specific package import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
//not game specific package import { GraphicsStrings } from '../../../../org/allbinary/graphics/GraphicsStrings.js';
      const GraphicsStrings = globalThis.org.allbinary.graphics.GraphicsStrings;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { NullRunnable } from '../../../../org/allbinary/thread/NullRunnable.js';
      const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';

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
                
            

