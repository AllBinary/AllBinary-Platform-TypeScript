
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
        
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
      const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

      
//not game specific package import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { PaintableInterface } from '../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { ViewPosition } from '../../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameInputInterface } from './GameInputInterface.js';
import { InputFactory } from './InputFactory.js';
import { GameInputProcessor } from './GameInputProcessor.js';
import { GameInputProcessorUtil } from './GameInputProcessorUtil.js';
import { TestInputInterface } from './TestInputInterface.js';

export class TestingInputSingleton extends AllBinaryGameLayer implements GameInputInterface {
        

    private static readonly instance: TestingInputSingleton = new TestingInputSingleton();

    public static getInstance(): TestingInputSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TestingInputSingleton.instance;
    
}


    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);

private constructor (){
            super(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
GameInputProcessorUtil.init(this.inputProcessorArray);
    
}


    private paintable: PaintableInterface = NullPaintable.getInstance()!;

    public initInputProcessors(){
}


    public initInputProcessorsForTestInput(aTestInputInterface: TestInputInterface){

    var testInputInterface: TestInputInterface = aTestInputInterface;;
    
this.paintable= testInputInterface;
    
this.inputProcessorArray[Canvas.UP]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.up();
    
}

                                }
                            ;
    
this.inputProcessorArray[Canvas.DOWN]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.down();
    
}

                                }
                            ;
    
this.inputProcessorArray[Canvas.LEFT]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.left();
    
}

                                }
                            ;
    
this.inputProcessorArray[Canvas.RIGHT]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.right();
    
}

                                }
                            ;
    
this.inputProcessorArray[Canvas.KEY_NUM7]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.strafeLeft();
    
}

                                }
                            ;
    
this.inputProcessorArray[Canvas.KEY_NUM9]= new class extends GameInputProcessor
                                {
                                
                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
testInputInterface!.strafeRight();
    
}

                                }
                            ;
    
GameInputProcessorUtil.init(this.inputProcessorArray);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public processInputList(allbinaryLayerManager: AllBinaryLayerManager, list: BasicArrayList){

    var key: number = 0;;
    

    var gameKeyEvent: GameKeyEvent;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameKeyEvent= (list.objectArray[index]! as GameKeyEvent);
    
key= gameKeyEvent!.getKey();
    
this.inputProcessorArray[key]!.processEvent(allbinaryLayerManager, GameKeyEvent.NONE);
    
}

}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public processInput(allbinaryLayerManager: AllBinaryLayerManager){
this.processInputList(allbinaryLayerManager, this.getGameKeyEventList());
    
this.getGameKeyEventList()!.clear();
    
}


    public paint(graphics: Graphics){
this.paintable.paint(graphics);
    
}


    public implmentsGameInputInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

