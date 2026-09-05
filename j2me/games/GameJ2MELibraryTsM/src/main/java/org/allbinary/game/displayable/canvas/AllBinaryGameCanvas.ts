
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
            import { Thread } from '../../../../../java/lang/Thread.js';
        
            import { Runnable } from '../../../../../java/lang/Runnable.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
//not plain js import { ChoiceGroup } 
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;

      
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;

      
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
//not GWT import const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;

      
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
//not GWT import const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
import { BaseGameStatistics } from '../../../../../org/allbinary/canvas/BaseGameStatistics.js';
//not GWT import const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;

      
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;

      
import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
//not GWT import const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
import { DebugFactory } from '../../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;

      
import { NoDebug } from '../../../../../org/allbinary/debug/NoDebug.js';
//not GWT import const NoDebug = globalThis.org.allbinary.debug.NoDebug;

      
import { GameAdState } from '../../../../../org/allbinary/game/GameAdState.js';
//not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
import { GameStrings } from '../../../../../org/allbinary/game/GameStrings.js';
//not GWT import const GameStrings = globalThis.org.allbinary.game.GameStrings;

      
import { GameTypeFactory } from '../../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
import { Intermission } from '../../../../../org/allbinary/game/Intermission.js';
//not GWT import const Intermission = globalThis.org.allbinary.game.Intermission;

      
import { IntermissionCompositeInterface } from '../../../../../org/allbinary/game/IntermissionCompositeInterface.js';
//not GWT import const IntermissionCompositeInterface = globalThis.org.allbinary.game.IntermissionCompositeInterface;

      
import { IntermissionEnableListenerInterface } from '../../../../../org/allbinary/game/IntermissionEnableListenerInterface.js';
//not GWT import const IntermissionEnableListenerInterface = globalThis.org.allbinary.game.IntermissionEnableListenerInterface;

      
import { IntermissionInterface } from '../../../../../org/allbinary/game/IntermissionInterface.js';
//not GWT import const IntermissionInterface = globalThis.org.allbinary.game.IntermissionInterface;

      
import { PlayerTypesFactory } from '../../../../../org/allbinary/game/PlayerTypesFactory.js';
//not GWT import const PlayerTypesFactory = globalThis.org.allbinary.game.PlayerTypesFactory;

      
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { InGameFeatures } from '../../../../../org/allbinary/game/configuration/InGameFeatures.js';
//not GWT import const InGameFeatures = globalThis.org.allbinary.game.configuration.InGameFeatures;

      
import { InGameOptionsForm } from '../../../../../org/allbinary/game/configuration/InGameOptionsForm.js';
//not GWT import const InGameOptionsForm = globalThis.org.allbinary.game.configuration.InGameOptionsForm;

      
import { ChangedGameFeatureListener } from '../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
import { GameInitializedEvent } from '../../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
//not GWT import const GameInitializedEvent = globalThis.org.allbinary.game.configuration.event.GameInitializedEvent;

      
import { GameInitializedEventHandler } from '../../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js';
//not GWT import const GameInitializedEventHandler = globalThis.org.allbinary.game.configuration.event.GameInitializedEventHandler;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
import { GameFeatureUtil } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js';
//not GWT import const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;

      
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
import { SensorFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

      
import { TouchFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js';
//not GWT import const TouchFeatureFactory = globalThis.org.allbinary.game.configuration.feature.TouchFeatureFactory;

      
import { GameLevelDisplayChangeEventListenersFactory } from '../../../../../org/allbinary/game/displayable/GameLevelDisplayChangeEventListenersFactory.js';
//not GWT import const GameLevelDisplayChangeEventListenersFactory = globalThis.org.allbinary.game.displayable.GameLevelDisplayChangeEventListenersFactory;

      
import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
//not GWT import const BasicBuildGameInitializerFactory = globalThis.org.allbinary.game.init.BasicBuildGameInitializerFactory;

      
import { GameInitializationUtil } from '../../../../../org/allbinary/game/init/GameInitializationUtil.js';
//not GWT import const GameInitializationUtil = globalThis.org.allbinary.game.init.GameInitializationUtil;

      
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const GameInputStrings = globalThis.org.allbinary.game.input.GameInputStrings;

      
import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
//not GWT import const InputProcessor = globalThis.org.allbinary.game.input.InputProcessor;

      
import { NoPlayerGameInput } from '../../../../../org/allbinary/game/input/NoPlayerGameInput.js';
//not GWT import const NoPlayerGameInput = globalThis.org.allbinary.game.input.NoPlayerGameInput;

      
import { PlayerGameInput } from '../../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
//not GWT import const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
//not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
//not GWT import const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
import { ResourceLoadingLevel } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevel.js';
//not GWT import const ResourceLoadingLevel = globalThis.org.allbinary.game.resource.ResourceLoadingLevel;

      
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
//not GWT import const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
import { HighScoresHelperBaseInterface } from '../../../../../org/allbinary/game/score/HighScoresHelperBaseInterface.js';
//not GWT import const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

      
import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
//not GWT import const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
//not GWT import const HighScoresPaintable = globalThis.org.allbinary.game.score.HighScoresPaintable;

      
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
//not GWT import const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;

      
import { HighScoreTextBox } from '../../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js';
//not GWT import const HighScoreTextBox = globalThis.org.allbinary.game.score.displayable.HighScoreTextBox;

      
import { GameState } from '../../../../../org/allbinary/game/state/GameState.js';
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;

      
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
import { GraphicsStrings } from '../../../../../org/allbinary/graphics/GraphicsStrings.js';
//not GWT import const GraphicsStrings = globalThis.org.allbinary.graphics.GraphicsStrings;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { ScreenCapture } from '../../../../../org/allbinary/graphics/ScreenCapture.js';
//not GWT import const ScreenCapture = globalThis.org.allbinary.graphics.ScreenCapture;

      
import { ScreenCaptureFactory } from '../../../../../org/allbinary/graphics/ScreenCaptureFactory.js';
//not GWT import const ScreenCaptureFactory = globalThis.org.allbinary.graphics.ScreenCaptureFactory;

      
import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { GameTickDisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/GameTickDisplayInfoSingleton.js';
//not GWT import const GameTickDisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.GameTickDisplayInfoSingleton;

      
import { MyCommandsFactory } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
//not GWT import const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventHandler = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventHandler;

      
import { DisplayChangeEventListener } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
//not GWT import const DisplayChangeEventListener = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventListener;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { CommandCurrentSelectionFormFactory } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js';
//not GWT import const CommandCurrentSelectionFormFactory = globalThis.org.allbinary.graphics.form.CommandCurrentSelectionFormFactory;

      
import { FormPaintable } from '../../../../../org/allbinary/graphics/form/FormPaintable.js';
//not GWT import const FormPaintable = globalThis.org.allbinary.graphics.form.FormPaintable;

      
import { FormType } from '../../../../../org/allbinary/graphics/form/FormType.js';
//not GWT import const FormType = globalThis.org.allbinary.graphics.form.FormType;

      
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

      
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
import { ScrollSelectionFormNoneFactory } from '../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js';
//not GWT import const ScrollSelectionFormNoneFactory = globalThis.org.allbinary.graphics.form.ScrollSelectionFormNoneFactory;

      
import { CommandTextItemArrayFactory } from '../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js';
//not GWT import const CommandTextItemArrayFactory = globalThis.org.allbinary.graphics.form.item.CommandTextItemArrayFactory;

      
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
//not GWT import const CurrentDisplayableFactory = globalThis.org.allbinary.graphics.opengles.CurrentDisplayableFactory;

      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
import { OpenGLThreadUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js';
//not GWT import const OpenGLThreadUtil = globalThis.org.allbinary.graphics.opengles.OpenGLThreadUtil;

      
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
import { NullInitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js';
//not GWT import const NullInitUpdatePaintable = globalThis.org.allbinary.graphics.paint.NullInitUpdatePaintable;

      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { OpenGLImageSpecificFactory } from '../../../../../org/allbinary/image/opengles/OpenGLImageSpecificFactory.js';
//not GWT import const OpenGLImageSpecificFactory = globalThis.org.allbinary.image.opengles.OpenGLImageSpecificFactory;

      
import { SensorGameUpdateProcessor } from '../../../../../org/allbinary/input/gyro/SensorGameUpdateProcessor.js';
//not GWT import const SensorGameUpdateProcessor = globalThis.org.allbinary.input.gyro.SensorGameUpdateProcessor;

      
import { SingleSensorGameUpdateProcessor } from '../../../../../org/allbinary/input/gyro/SingleSensorGameUpdateProcessor.js';
//not GWT import const SingleSensorGameUpdateProcessor = globalThis.org.allbinary.input.gyro.SingleSensorGameUpdateProcessor;

      
import { BaseTouchInput } from '../../../../../org/allbinary/input/motion/button/BaseTouchInput.js';
//not GWT import const BaseTouchInput = globalThis.org.allbinary.input.motion.button.BaseTouchInput;

      
import { NoButtonsTouchInputFactory } from '../../../../../org/allbinary/input/motion/button/NoButtonsTouchInputFactory.js';
//not GWT import const NoButtonsTouchInputFactory = globalThis.org.allbinary.input.motion.button.NoButtonsTouchInputFactory;

      
import { TouchButtonFactory } from '../../../../../org/allbinary/input/motion/button/TouchButtonFactory.js';
//not GWT import const TouchButtonFactory = globalThis.org.allbinary.input.motion.button.TouchButtonFactory;

      
import { TouchButtonsPaintableFactory } from '../../../../../org/allbinary/input/motion/button/TouchButtonsPaintableFactory.js';
//not GWT import const TouchButtonsPaintableFactory = globalThis.org.allbinary.input.motion.button.TouchButtonsPaintableFactory;

      
import { TouchScreenFactory } from '../../../../../org/allbinary/input/motion/button/TouchScreenFactory.js';
//not GWT import const TouchScreenFactory = globalThis.org.allbinary.input.motion.button.TouchScreenFactory;

      
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { AllBinaryMediaManager } from '../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
//not GWT import const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

      
import { PlayerQueue } from '../../../../../org/allbinary/media/audio/PlayerQueue.js';
//not GWT import const PlayerQueue = globalThis.org.allbinary.media.audio.PlayerQueue;

      
import { PrimaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
//not GWT import const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;

      
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { SecondaryThreadPool } from '../../../../../org/allbinary/thread/SecondaryThreadPool.js';
//not GWT import const SecondaryThreadPool = globalThis.org.allbinary.thread.SecondaryThreadPool;

      
import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvasInterface } from './AllBinaryGameCanvasInterface.js';
//not GWT import - same folder const AllBinaryGameCanvasInterface = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvasInterface;

                import { GameCanvasRunnableInterface } from './GameCanvasRunnableInterface.js';
//not GWT import - same folder const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

                import { MenuListener } from './MenuListener.js';
//not GWT import - same folder const MenuListener = globalThis.org.allbinary.game.displayable.canvas.MenuListener;

                import { PopupMenuInterface } from './PopupMenuInterface.js';
//not GWT import - same folder const PopupMenuInterface = globalThis.org.allbinary.game.displayable.canvas.PopupMenuInterface;

                import { GameCanvasRunnable } from './GameCanvasRunnable.js';
//not GWT import - same folder const GameCanvasRunnable = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnable;

                import { GameCanvasPauseRunnable } from './GameCanvasPauseRunnable.js';
//not GWT import - same folder const GameCanvasPauseRunnable = globalThis.org.allbinary.game.displayable.canvas.GameCanvasPauseRunnable;

                import { FormUtil } from './FormUtil.js';
//not GWT import - same folder const FormUtil = globalThis.org.allbinary.game.displayable.canvas.FormUtil;

                import { MyFormUtil } from './MyFormUtil.js';
//not GWT import - same folder const MyFormUtil = globalThis.org.allbinary.game.displayable.canvas.MyFormUtil;

                import { EndGameInfo } from './EndGameInfo.js';
//not GWT import - same folder const EndGameInfo = globalThis.org.allbinary.game.displayable.canvas.EndGameInfo;

                import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
//not GWT import - same folder const NoMenuInputProcessor = globalThis.org.allbinary.game.displayable.canvas.NoMenuInputProcessor;

                import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
//not GWT import - same folder const BasicMenuInputProcessor = globalThis.org.allbinary.game.displayable.canvas.BasicMenuInputProcessor;

                import { DemoGameBehavior } from './DemoGameBehavior.js';
//not GWT import - same folder const DemoGameBehavior = globalThis.org.allbinary.game.displayable.canvas.DemoGameBehavior;

                import { BaseMenuBehavior } from './BaseMenuBehavior.js';
//not GWT import - same folder const BaseMenuBehavior = globalThis.org.allbinary.game.displayable.canvas.BaseMenuBehavior;

                import { BaseGameBehavior } from './BaseGameBehavior.js';
//not GWT import - same folder const BaseGameBehavior = globalThis.org.allbinary.game.displayable.canvas.BaseGameBehavior;

                import { BasicPopupMenuPaintable } from './BasicPopupMenuPaintable.js';
//not GWT import - same folder const BasicPopupMenuPaintable = globalThis.org.allbinary.game.displayable.canvas.BasicPopupMenuPaintable;

                import { PopupMenuInputProcessor } from './PopupMenuInputProcessor.js';
//not GWT import - same folder const PopupMenuInputProcessor = globalThis.org.allbinary.game.displayable.canvas.PopupMenuInputProcessor;

                import { InGameMenuBehavior } from './InGameMenuBehavior.js';
//not GWT import - same folder const InGameMenuBehavior = globalThis.org.allbinary.game.displayable.canvas.InGameMenuBehavior;

                import { GameLimitedCommandTextItemArrayFactory } from './GameLimitedCommandTextItemArrayFactory.js';
//not GWT import - same folder const GameLimitedCommandTextItemArrayFactory = globalThis.org.allbinary.game.displayable.canvas.GameLimitedCommandTextItemArrayFactory;

                import { PopupCommandFormInputProcessor } from './PopupCommandFormInputProcessor.js';
//not GWT import - same folder const PopupCommandFormInputProcessor = globalThis.org.allbinary.game.displayable.canvas.PopupCommandFormInputProcessor;

                import { NullWaitGameRunnable } from './NullWaitGameRunnable.js';
//not GWT import - same folder const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;

                import { GameProcessor } from './GameProcessor.js';
//not GWT import - same folder const GameProcessor = globalThis.org.allbinary.game.displayable.canvas.GameProcessor;

                import { CheatGameInputProcessor } from './CheatGameInputProcessor.js';
//not GWT import - same folder const CheatGameInputProcessor = globalThis.org.allbinary.game.displayable.canvas.CheatGameInputProcessor;

                import { EndGameProcessor } from './EndGameProcessor.js';
//not GWT import - same folder const EndGameProcessor = globalThis.org.allbinary.game.displayable.canvas.EndGameProcessor;

                import { StartIntermissionProcessor } from './StartIntermissionProcessor.js';
//not GWT import - same folder const StartIntermissionProcessor = globalThis.org.allbinary.game.displayable.canvas.StartIntermissionProcessor;

                import { EndGamePaintable } from './EndGamePaintable.js';
//not GWT import - same folder const EndGamePaintable = globalThis.org.allbinary.game.displayable.canvas.EndGamePaintable;

                import { NullDemoPaintable } from './NullDemoPaintable.js';
//not GWT import - same folder const NullDemoPaintable = globalThis.org.allbinary.game.displayable.canvas.NullDemoPaintable;

                import { DemoPaintableInterface } from './DemoPaintableInterface.js';
//not GWT import - same folder const DemoPaintableInterface = globalThis.org.allbinary.game.displayable.canvas.DemoPaintableInterface;

                import { GameCanvasInputProcessor } from './GameCanvasInputProcessor.js';
//not GWT import - same folder const GameCanvasInputProcessor = globalThis.org.allbinary.game.displayable.canvas.GameCanvasInputProcessor;

                import { FormInputProcessor } from './FormInputProcessor.js';
//not GWT import - same folder const FormInputProcessor = globalThis.org.allbinary.game.displayable.canvas.FormInputProcessor;

                
export class AllBinaryGameCanvas extends RunnableCanvas implements AllBinaryGameCanvasInterface, GameCanvasRunnableInterface, MenuListener, IntermissionCompositeInterface, IntermissionEnableListenerInterface, PopupMenuInterface, DisplayChangeEventListener, UpdateMyFontInterface {
        

    private static readonly id: number = 0;

    public static readonly TYPE: number = 2;

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    readonly touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;

    readonly openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;

    readonly touchButtonFactory: TouchButtonFactory = TouchButtonFactory.getInstance()!;

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;

    readonly gameStrings: GameStrings = GameStrings.getInstance()!;

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;

    readonly gameStateFactory: GameStateFactory = GameStateFactory.getInstance()!;

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    private readonly gameTickDisplayInfoSingleton: GameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance()!;

    public readonly gameRunnable: GameCanvasRunnable = new GameCanvasRunnable(this);

    public readonly gamePauseRunnable: GameCanvasPauseRunnable = new GameCanvasPauseRunnable(this);

    readonly formUtil: FormUtil = FormUtil.getInstance()!;

    readonly myFormUtil: MyFormUtil = MyFormUtil.getInstance()!;

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    gameSpecificPaintable: Paintable = NullPaintable.getInstance()!;

    private readonly sensorGameUpdateProcessor: SensorGameUpdateProcessor = new SingleSensorGameUpdateProcessor();

    endGameInfo: EndGameInfo = new EndGameInfo();

    private readonly startIntermissionInterface: IntermissionInterface = new Intermission();

    private readonly endLevelIntermissionInterface: IntermissionInterface = new Intermission();

    gameLayerManager: AllBinaryGameLayerManager = AllBinaryGameLayerManager.getNullInstance()!;

    private gameState: GameState = this.gameStateFactory!.NO_GAME_STATE;

    private gameOver: boolean= false;

    private initialized: boolean= false;

    private readonly gameStateTimeHelper: TimeDelayHelper = new TimeDelayHelper(0);

    readonly highScoresHelper: HighScoresHelperBaseInterface;

    private highScoreSubmitted: boolean= false;

    private readonly realHighScoresPaintable: HighScoresPaintable = new HighScoresPaintable();

    private highScoresPaintable: Paintable = NullPaintable.getInstance()!;

    private localPlayerGameInputList: BasicArrayList = new BasicArrayListD();

    private isCheating: boolean= false;

    private hashtable: ABHashtable = this.stdUtil!.NULL_TABLE;

    private isSingleKeyRepeatableProcessing: boolean= false;

    private gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory = BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY;

    private touchButtonsPaintable: Paintable = NullPaintable.getInstance()!;

    touchPaintable: Paintable = NullPaintable.getInstance()!;

    private cheatProcessor: PlayerGameInput = NoPlayerGameInput.getInstance()!;

    private gameInputProcessor: Processor = Processor.getInstance()!;

    private endGameProcessor: Processor = Processor.getInstance()!;

    private realEndGameProcessor: Processor = Processor.getInstance()!;

    private startIntermissionProcessor: Processor = Processor.getInstance()!;

    private realStartIntermissionProcessor: Processor = Processor.getInstance()!;

    private endGamePaintable: Paintable = NullPaintable.getInstance()!;

    private endGameStatePaintable: Paintable = NullPaintable.getInstance()!;

    nonBotPaintable: Paintable = NullPaintable.getInstance()!;

    private intermissionPaintable: Paintable = NullPaintable.getInstance()!;

    private startIntermissionPaintable: InitUpdatePaintable = NullInitUpdatePaintable.getInstance()!;

    private mainStateProcessor: Processor = Processor.getInstance()!;

    private processGameProcessor: Processor = Processor.getInstance()!;

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface;

    private startLevel: number= 0;

    private mainMenuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;

    private popupMenuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;

    private menuForm: ScrollSelectionForm = ScrollSelectionForm.getNullScrollSelectionForm()!;

    private formPaintable: Paintable = NullPaintable.getInstance()!;

    private openMenuPaintable: Paintable = NullPaintable.getInstance()!;

    private menuPaintable: Paintable = NullPaintable.getInstance()!;

    private currentTouchInputFactory: BaseTouchInput = NoButtonsTouchInputFactory.getInstance()!;

    colorFillPaintable: ColorFillBasePaintable = ColorFillPaintableFactory.getInstance()!.getInstance(this.basicColorFactory!.BLACK, true)!;

    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;

    private readonly primaryPlayerQueue: PlayerQueue = PrimaryPlayerQueueFactory.getInstance()!;

    private readonly secondaryPlayerQueue: PlayerQueue = SecondaryPlayerQueueFactory.getInstance()!;

    readonly BUILD_GAME: string = "buildGame";

    readonly gameTypeFactory: GameTypeFactory = GameTypeFactory.getInstance()!;

    readonly screenCapture: ScreenCapture = ScreenCaptureFactory.getInstance()!;

    private readonly basicMotionGesturesHandler: BasicMotionGesturesHandler = BasicMotionGesturesHandler.getInstance()!;

    private readonly gameKeyEventHandler: GameKeyEventHandler = GameKeyEventHandler.getInstance()!;

    private readonly gameBehavior: DemoGameBehavior;

    private readonly menuBehavior: BaseMenuBehavior;

    private progressPaintable: PaintableInterface = ProgressCanvasFactory.getLazyInstance()!;

    fontHeightP: number= 0;

public constructor (commandListener: CommandListener, gameLayerManager: AllBinaryGameLayerManager, highScoresFactoryInterface: HighScoresFactoryInterface, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, buffered: boolean){
            super(commandListener, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST, true);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.highScoresHelper= highScoresFactoryInterface!.createHighScoresHelper();
    
this.gameInitializationInterfaceFactoryInterface= gameInitializationInterfaceFactoryInterface;
    
this.init(gameLayerManager, buffered);
    
this.highScoresFactoryInterface= highScoresFactoryInterface;
    

                        if(this.gameLayerManager!.getGameInfo()!.getGameType() == this.gameTypeFactory!.BOT || this.gameLayerManager!.getGameInfo()!.getGameType() == this.gameTypeFactory!.NONE)
                        
                                    {
                                    this.gameBehavior= DemoGameBehavior.getInstance();
    
this.menuBehavior= BaseMenuBehavior.getInstance();
    

                                    }
                                
                        else {
                            this.gameBehavior= BaseGameBehavior.getInstance();
    
this.menuBehavior= this.getInGameMenuBehavior();
    

                        }
                            
this.initPopupMenu();
    
this.initMenu();
    
this.initSpecialPaint();
    
DisplayChangeEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public updateMeasurement(graphics: Graphics){

        try {
            
    var font: Font = graphics.getFont()!;;
    
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(this.canvasStrings!.FD_WIDTH)!.appendint(MyFontProcessor.defaultCharWidth(font))!.append(this.canvasStrings!.FD_HEIGHT)!.appendint(font.getHeight())!.toString(), this, this.canvasStrings!.UPDATE_MEASUREMENT);
    
this.fontHeightP= font.getHeight();
    
this.myFormUtil!.updateMeasurement(graphics);
    

    var popupMenuRectangle: Rectangle = this.myFormUtil!.getPopupMenuRectangle()!;;
    

    var basicPopupMenuPaintable: BasicPopupMenuPaintable = (this.getOpenMenuPaintable() as BasicPopupMenuPaintable);;
    
basicPopupMenuPaintable!.init(popupMenuRectangle);
    

                        if(this.getPopupMenuInputProcessor() != NoMenuInputProcessor.getInstance())
                        
                                    {
                                    
    var popupMenuInputProcessor: PopupMenuInputProcessor = (this.getPopupMenuInputProcessor() as PopupMenuInputProcessor);;
    
popupMenuInputProcessor!.init(popupMenuRectangle);
    

                                    }
                                
this.myFontProcessor= MyFontProcessor.getInstance();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


    public getInGameMenuBehavior(): BaseMenuBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InGameMenuBehavior.getInstance();;
    
}


    public setCurrentThread(){

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    super.setCurrentThreadFake();
    

                                    }
                                
                        else {
                            super.setCurrentThread();
    

                        }
                            
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(DisplayInfoSingleton.getInstance()!.toString())!.toString(), this, this.canvasStrings!.UPDATE_MEASUREMENT);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
this.menuBehavior!.onDisplayChangeEvent(this, displayChangeEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public updateMenuFromEvent(displayChangeEvent: DisplayChangeEvent){

    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;;
    

    var rectangle: Rectangle = this.formUtil!.createFormRectangle()!;;
    
this.menuForm!.init(rectangle, formType);
    

                        if(this.currentTouchInputFactory != NoButtonsTouchInputFactory.getInstance())
                        
                                    {
                                    this.touchButtonFactory!.toggle(this.isPaused(), this.currentTouchInputFactory!.getList());
    

                                    }
                                
this.myFontProcessor= this.updateMyFontProcessor;
    
}


                //@Throws(Exception.constructor)
            
    public processSleep(){
super.processSleep();
    

                        if(AllBinaryMediaManager.update())
                        
                                    {
                                    
                        if(!this.primaryPlayerQueue!.process())
                        
                                    {
                                    this.secondaryPlayerQueue!.process();
    

                                    }
                                

                                    }
                                

                        if(this.menuInputProcessor!.processInputList() !=  -1)
                        
                                    {
                                    this.runnableCanvasRefreshHelper!.process();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    initPopupMenu(){

                        if(this.popupMenuInputProcessor == NoMenuInputProcessor.getInstance())
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;;
    

    var popupMenuRectangle: Rectangle = this.myFormUtil!.getPopupMenuRectangle()!;;
    

                        if(features.isFeature(this.touchFeatureFactory!.TOUCH_ENABLED))
                        
                                    {
                                    this.setOpenMenuPaintable(new BasicPopupMenuPaintable(popupMenuRectangle, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()));
    
this.setPopupMenuInputProcessor(new PopupMenuInputProcessor(new BasicArrayListD(),  -1, this, popupMenuRectangle));
    

                                    }
                                

                                    }
                                
                        else {
                            
                        }
                            
}


    initMenu(){

        try {
            this.menuBehavior!.initMenu(this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "initMenu", e);
    
}

}


                //@Throws(Exception.constructor)
            
    initMenu2(){
this.closeMenu();
    

    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;;
    

    var gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance()!;;
    

    var commandTextItemArrayFactory: CommandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory()!;;
    

    var items: ABCustomItem[] = commandTextItemArrayFactory!.getInstance(this.getCommandStack(), this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())!;;
    

    var rectangle: Rectangle = this.formUtil!.createFormRectangle()!;;
    
this.setMenuForm(CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, formType, 25, false, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()));
    

    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;;
    

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(this.touchFeatureFactory!.TOUCH_ENABLED))
                        
                                    {
                                    this.mainMenuInputProcessor= new PopupCommandFormInputProcessor(new BasicArrayListD(),  -1, this, scrollSelectionForm, this.getPopupMenuInputProcessor() as PopupMenuInputProcessor);
    

                                    }
                                
                        else {
                            
                        }
                            
this.setMenuInputProcessor(this.getPopupMenuInputProcessor());
    

                        if(scrollSelectionForm != ScrollSelectionFormNoneFactory.getInstance())
                        
                                    {
                                    this.setFormPaintable(new FormPaintable(scrollSelectionForm));
    

                                    }
                                
                        else {
                            
                        }
                            
this.closeMenu();
    
}


    public updateMenu(){

        try {
            this.menuBehavior!.updateMenu(this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "initMenu", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public updateMenu2(){

    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;;
    
scrollSelectionForm!.deleteAll();
    

    var gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance()!;;
    

    var commandTextItemArrayFactory: CommandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory()!;;
    

    var items: ABCustomItem[] = commandTextItemArrayFactory!.getInstance(this.getCommandStack(), this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())!;;
    

    var size: number = items.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
scrollSelectionForm!.append(items[index]!);
    
}


    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;;
    

    var rectangle: Rectangle = this.formUtil!.createFormRectangle()!;;
    
scrollSelectionForm!.init(rectangle, formType);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public pause(){
this.gameBehavior!.pause(this);
    
this.closeMenu();
    
super.pause();
    
this.touchButtonFactory!.toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance());
    
this.systemWrapper!.gc();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public unPause(){
this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.UNPAUSE);
    
this.closeMenu();
    
this.systemWrapper!.gc();
    
super.unPause();
    
this.touchButtonFactory!.toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance());
    
this.gameBehavior!.unPause(this);
    
}


    public isPausable(): boolean{

                        if(CurrentDisplayableFactory.getInstance()!.getUsedRunnable() == NullWaitGameRunnable.getInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public popupMenu(){
this.menuBehavior!.popupMenu(this);
    
}


                //@Throws(Exception.constructor)
            
    public popupMenu2(){
this.primaryPlayerQueue!.add(SelectSound.getInstance());
    
this.setMenuPaintable(this.getFormPaintable());
    
this.setMenuInputProcessor(this.mainMenuInputProcessor);
    
this.basicMotionGesturesHandler!.addListenerInterface(this.mainMenuInputProcessor);
    
this.gameKeyEventHandler!.addListener(this.mainMenuInputProcessor);
    
}


                //@Throws(Exception.constructor)
            
    public toggleMenu(){
this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.TOGGLE_MENU);
    

                        if(this.getMenuPaintable() == this.getOpenMenuPaintable())
                        
                                    {
                                    this.pause();
    
this.updateMenu();
    
this.popupMenu();
    

                                    }
                                
                             else 
                        if(this.getMenuPaintable() == this.getFormPaintable())
                        
                                    {
                                    this.primaryPlayerQueue!.add(SelectSound.getInstance());
    
this.unPause();
    

                                    }
                                
}


    public closeMenu(){
this.menuBehavior!.closeMenu(this);
    
}


    public closeMenu2(){
this.setMenuPaintable(this.getOpenMenuPaintable());
    
this.basicMotionGesturesHandler!.removeListener(this.mainMenuInputProcessor);
    
this.gameKeyEventHandler!.removeListener(this.mainMenuInputProcessor);
    
this.setMenuInputProcessor(this.getPopupMenuInputProcessor());
    
}


    public open(){
this.basicMotionGesturesHandler!.addListenerInterface(this.menuInputProcessor);
    
this.gameKeyEventHandler!.addListener(this.menuInputProcessor);
    
}


    public close(){
this.basicMotionGesturesHandler!.removeListener(this.menuInputProcessor);
    
this.gameKeyEventHandler!.removeListener(this.menuInputProcessor);
    
this.primaryPlayerQueue!.clear();
    
this.secondaryPlayerQueue!.clear();
    
}


                //@Throws(Exception.constructor)
            
    processorInit(){
this.setMainStateProcessor(Processor.getInstance());
    
this.setProcessGameProcessor(new GameProcessor(this));
    
}


    initSpecialPaint(){
this.menuBehavior!.initSpecialPaint(this);
    
}


                //@Throws(Exception.constructor)
            
    init(gameLayerManager: AllBinaryGameLayerManager, buffered: boolean){
this.gameStateTimeHelper!.setStartTimeTNT();
    
this.setHighScoreSubmitted(false);
    
this.setLayerManager(gameLayerManager);
    

                        if(!buffered)
                        
                                    {
                                    
    var BUFF_MESSAGE: string = "XXX Not Buffering Causes Concurrency Issues XXX";;
    
this.logUtil!.putF(BUFF_MESSAGE, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Buffering is disabled");
                    

                        }
                            
this.setGameInputProcessor(Processor.getInstance());
    

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(GameFeatureFactory.getInstance()!.CHEATING))
                        
                                    {
                                    this.isCheating= true;
    
this.cheatProcessor= new CheatGameInputProcessor(this);
    
this.gameKeyEventHandler!.addListener(this.cheatProcessor);
    

                                    }
                                
                        else {
                            this.isCheating= false;
    
this.cheatProcessor= NoPlayerGameInput.getInstance();
    

                        }
                            
this.realEndGameProcessor= new EndGameProcessor(this);
    
this.setEndGameProcessor(Processor.getInstance());
    
this.realStartIntermissionProcessor= new StartIntermissionProcessor(this);
    
this.startIntermissionProcessor= Processor.getInstance();
    
this.setEndGameStatePaintable(new EndGamePaintable(this));
    
this.setEndGamePaintable(NullPaintable.getInstance());
    
this.setIntermissionPaintable(NullPaintable.getInstance());
    
this.getStartIntermissionInterface()!.setListener(this);
    
}


    public notifyIntermission(enable: boolean){

                        if(enable)
                        
                                    {
                                    this.startIntermissionProcessor= this.realStartIntermissionProcessor;
    

                                    }
                                
                        else {
                            this.startIntermissionProcessor= Processor.getInstance();
    

                        }
                            

                        if(enable)
                        
                                    {
                                    this.setIntermissionPaintable(this.getStartIntermissionPaintable());
    

                                    }
                                
                        else {
                            this.setIntermissionPaintable(NullPaintable.getInstance());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public mediaInit(){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    initConfigurable(abeClientInformation: AbeClientInformationInterface){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(50, "Setting Configurables");
    
GameInitializationUtil.getInstance()!.initGame(abeClientInformation, this, this.gameInitializationInterfaceFactoryInterface);
    

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;;
    

    var changedGameFeatureListener: ChangedGameFeatureListener = ChangedGameFeatureListener.getInstance()!;;
    

                        if(changedGameFeatureListener!.isChangedFeature(gameFeatureFactory!.SOUND))
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;;
    
this.logUtil!.putF(new StringMaker().append("Sound Changing To: ")!.appendboolean(features.isFeature(gameFeatureFactory!.SOUND))!.toString(), this, "initConfigurable");
    
this.mediaInit();
    
changedGameFeatureListener!.remove(gameFeatureFactory!.SOUND);
    

                                    }
                                

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;;
    

                        if(changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.ORIENTATION_SENSORS) || changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.NO_ORIENTATION) || changedGameFeatureListener!.isChangedFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    changedGameFeatureListener!.remove(sensorFeatureFactory!.NO_ORIENTATION);
    
changedGameFeatureListener!.remove(sensorFeatureFactory!.ORIENTATION_SENSORS);
    
changedGameFeatureListener!.remove(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS);
    

                                    }
                                

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    
this.loadResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_GAME);
    
}


                //@Throws(Exception.constructor)
            
    initApp(abeClientInformation: AbeClientInformationInterface){
this.initConfigurable(abeClientInformation);
    
this.processorInit();
    
this.sensorGameUpdateProcessor!.process(this.gameLayerManager);
    
this.sensorGameUpdateProcessor!.sendNotifications(this.gameLayerManager);
    
this.initTouch();
    
}


                //@Throws(Exception.constructor)
            
    initTouch(){

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;;
    

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;;
    
gameInitializedEvent!.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_TOUCH);
    
GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent);
    
this.touchButtonFactory!.defaultList();
    
this.updateTouch();
    
this.postInitTouch();
    
}


                //@Throws(Exception.constructor)
            
    public updateCurrentTouchInputFactory(nextTouchInput: BaseTouchInput){

                        if(nextTouchInput != this.currentTouchInputFactory)
                        
                                    {
                                    this.currentTouchInputFactory= nextTouchInput;
    
PreLogUtil.put(this.currentTouchInputFactory!.toString(), this, this.gameInputStrings!.UDPATE_CURRENT_TOUCH_INPUT_FACTORY);
    
this.touchButtonFactory!.toggle(this.isPaused(), this.currentTouchInputFactory!.getList());
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    updateTouch(){
this.gameBehavior!.updateTouch(this);
    
}


                //@Throws(Exception.constructor)
            
    updateTouch2(){

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(this.touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    
                        if(this.gameLayerManager!.getGameInfo()!.getCurrentLevel() -this.getStartLevel() == 1)
                        
                                    {
                                    this.setTouchPaintableP(NullPaintable.getInstance());
    

                                    }
                                

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    postInitTouch(){
this.setTouchButtonsPaintable(TouchButtonsPaintableFactory.getInstance(this.gameLayerManager!.getForegroundBasicColor()));
    
this.updateScreenButtonPaintable();
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommands();
    
this.setCommandListener(cmdListener);
    
}


    public addCommands(){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

    var myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;;
    

                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    this.addCommand(gameCommandsFactory!.START_TRACE);
    

                                    }
                                
this.addCommand(gameCommandsFactory!.RESTART_COMMAND);
    
this.addCommand(myCommandsFactory!.PAUSE_COMMAND);
    
this.addCommand(gameCommandsFactory!.QUIT_COMMAND);
    

    var isOverScan: boolean = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()!;;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(SWTUtil.isSWT)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(!isOverScan)
                        
                                    {
                                    
                        if(TouchScreenFactory.getInstance()!.isTouch() && new InGameFeatures().isAny())
                        
                                    {
                                    this.addCommand(InGameOptionsForm.DISPLAY);
    

                                    }
                                
this.addCommand(gameCommandsFactory!.SAVE);
    
this.addCommand(gameCommandsFactory!.DISPLAY_LOAD_FORM);
    

                                    }
                                
}


    public itemStateChanged(item: Item){

        try {
            
    var itemLabel: string = item.getLabel()!;;
    
this.logUtil!.putF(new StringMaker().append(this.commonLabels!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged");
    

                        if(item instanceof ChoiceGroup)
                        
                                    {
                                    
    var gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;;
    

                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    gameFeatureUtil!.updateExclusiveForChoiceGroup(item as ChoiceGroup);
    

                                    }
                                
                        else {
                            gameFeatureUtil!.updateMultiple(item as ChoiceGroup);
    

                        }
                            

                                    }
                                
this.sensorGameUpdateProcessor!.process(this.gameLayerManager);
    
this.updateTouch();
    
this.updateScreenButtonPaintable();
    
this.sensorGameUpdateProcessor!.sendNotifications(this.gameLayerManager);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "itemStateChanged", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public updateScreenButtonPaintable(){
this.gameBehavior!.updateScreenButtonPaintable(this);
    
}


    public updateScreenButtonPaintable2(){

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(this.touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(this.getTouchButtonsPaintable());
    
this.setStartLevel(this.gameLayerManager!.getGameInfo()!.getCurrentLevel());
    

                                    }
                                
                             else 
                        if(features.isFeature(this.touchFeatureFactory!.SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(this.getTouchButtonsPaintable());
    

                                    }
                                
                             else 
                        if(features.isFeature(this.touchFeatureFactory!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(NullPaintable.getInstance());
    

                                    }
                                
                        else {
                            this.setTouchPaintableP(NullPaintable.getInstance());
    

                        }
                            
}


    public getLayerManager(): AllBinaryGameLayerManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameLayerManager;
    
}


    public setLayerManager(layerManager: AllBinaryGameLayerManager){
this.gameLayerManager= layerManager;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isGameOver(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameOver;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setGameOver(gameOver: boolean){
this.gameOver= gameOver;
    
}


                //@Throws(Exception.constructor)
            
    public processGameOver(){
PreLogUtil.put(this.commonStrings!.START, this, this.gameStrings!.SET_GAME_OVER);
    
this.setGameOver(true);
    
this.removePauseCommand();
    
this.setGameState(this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE);
    
this.setEndGamePaintable(this.getEndGameStatePaintable());
    
}


    public isHighScoreSubmitted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoreSubmitted;
    
}


                //@Throws(Exception.constructor)
            
    public setHighScoreSubmitted(highScoreSubmitted: boolean){
this.highScoreSubmitted= highScoreSubmitted;
    

                        if(highScoreSubmitted)
                        
                                    {
                                    this.highScoresHelper!.setSelectedHighScores(NullHighScoresSingletonFactory.getInstance());
    

                                    }
                                
this.logUtil!.putF(new StringMaker().append("isHighScoreSubmitted: ")!.appendboolean(highScoreSubmitted)!.toString(), this, "setHighScoreSubmitted");
    
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameState;
    
}


                //@Throws(Exception.constructor)
            
    public setGameState(gameState: GameState){
this.logUtil!.putF(new StringMaker().append(this.gameStrings!.GAME_STATE)!.append(this.stringUtil!.toString(gameState))!.toString(), this, this.gameStrings!.SET_GAME_STATE);
    
this.gameState= gameState;
    
this.gameStateTimeHelper!.setStartTimeTNT();
    
this.updateEndGameProcessor();
    
this.updateGameKeyEventProcessor();
    
this.gameBehavior!.setGameState(this);
    
}


                //@Throws(Exception.constructor)
            
    public updateGameState(){

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.processAdState(this.gameState, this.gameLayerManager!.getGameInfo()!.getGameType());
    

                        if(this.gameState != this.gameStateFactory!.PLAYING_GAME_STATE)
                        
                                    {
                                    gameAdState!.processPageAdState();
    

                                    }
                                
}


    updateGameKeyEventProcessor(){

                        if(this.getGameState() != this.gameStateFactory!.PLAYING_GAME_STATE || this.isCheating)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        }
                            
}


    removeAllGameKeyInputListenersOnBuild(){
this.removeAllGameKeyInputListeners();
    
}


    removeAllGameKeyInputListeners(){
this.gameBehavior!.removeAllGameKeyInputListeners(this);
    
}


    removeAllGameKeyInputListeners2(){
this.logUtil!.putF("Remove PlayerInput Listeners", this, "removeAllGameKeyInputListeners");
    




                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;index >= 0; index--)
        {

    var playerGameInput: PlayerGameInput = this.localPlayerGameInputList!.get(index) as PlayerGameInput;;
    
this.removeKeyInputListener(playerGameInput);
    
playerGameInput!.removeNonAIInputGameKeyEvents();
    
}

}


    public removeKeyInputListener(playerGameInput: PlayerGameInput){
this.gameKeyEventHandler!.removeListener(playerGameInput);
    
}


                //@Throws(Exception.constructor)
            
    updateEndGameProcessor(){
this.gameBehavior!.updateEndGameProcessor(this);
    
}


                //@Throws(Exception.constructor)
            
    updateEndGameProcessor2(){

                        if(this.getGameState() == this.gameStateFactory!.SHOW_END_RESULT_GAME_STATE || this.getGameState() == this.gameStateFactory!.SHOW_HIGH_SCORE_GAME_STATE)
                        
                                    {
                                    this.setEndGameProcessor(this.realEndGameProcessor);
    

                                    }
                                
                        else {
                            this.setEndGameProcessor(Processor.getInstance());
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public buildGameInit(isPortion: boolean){
}


                //@Throws(Exception.constructor)
            
    cleanupGame(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLEANUP);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(10, "Cleaning Up");
    
this.primaryPlayerQueue!.clear();
    
this.secondaryPlayerQueue!.clear();
    
GameLevelDisplayChangeEventListenersFactory.getInstance()!.clear();
    
}


                //@Throws(Exception.constructor)
            
    public loadResourceLoadingLevel(resourceLoadingLevel: ResourceLoadingLevel){

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;;
    
gameInitializedEvent!.setResourceLoadingLevel(resourceLoadingLevel);
    
GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent);
    
}


                //@Throws(Exception.constructor)
            
    public loadResources(level: number){

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;;
    
gameInitializedEvent!.setLevel(level);
    
GameInitializedEventHandler.getInstance()!.fireEvent(gameInitializedEvent);
    
}


                //@Throws(Exception.constructor)
            
    public updateColor(){
}


                //@Throws(Exception.constructor)
            
    public buildGame(portion: number){
this.screenCapture!.endRecording();
    
this.screenCapture!.startRecording();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    
progressCanvas!.addNormalPortion(portion, "Generic Build");
    
this.removeAllGameKeyInputListenersOnBuild();
    
this.updateTouch();
    
progressCanvas!.addNormalPortion(portion, "High Scores");
    
this.highScoresFactoryInterface!.fetchHighScores(this.gameLayerManager!.getGameInfo(), this.highScoresHelper);
    
this.setHighScoresPaintable(NullPaintable.getInstance());
    
progressCanvas!.addNormalPortion(portion, "Finishing.");
    
this.getEndGameInfoP()!.update(this.getLayerManager()!.getGameInfo(), this);
    
this.isSingleKeyRepeatableProcessing= features.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS);
    
this.setGameOver(false);
    
progressCanvas!.addNormalPortion(portion, "Finishing..");
    
this.updateColor();
    
this.getStartIntermissionPaintable()!.update();
    

                        if(!this.isRunningInAnotherThread())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
progressCanvas!.addNormalPortion(portion, "Finishing...");
    

                        if(this.isMainCanvas() || !this.isInitialized())
                        
                                    {
                                    
                        if(features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    
                        if(this.getCustomCommandListener() != 
                                    null
                                )
                        
                                    {
                                    progressCanvas!.end();
    

                                    }
                                

                                    }
                                
                        else {
                            progressCanvas!.end();
    

                        }
                            
this.setInitialized(true);
    

                                    }
                                

                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    this.logUtil!.putF("Show Game Paintable in DemoCanvas Thread", this, this.BUILD_GAME);
    
this.gameCanvasStartListener!.showGamePaintable();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No GameCanvasStartListener", this, this.BUILD_GAME);
    

                        }
                            
this.colorFillPaintable!.setBasicColorP(this.gameLayerManager!.getBackgroundBasicColor());
    
this.gameBehavior!.buildGame(this);
    
}


    public buildGame2(){
PreLogUtil.put(new StringMaker().append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUTS)!.appendint(this.localPlayerGameInputList!.size())!.toString(), this, this.BUILD_GAME);
    

    var playerGameInput: PlayerGameInput;;
    




                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;index >= 0; index--)
        {
playerGameInput= this.localPlayerGameInputList!.get(index) as PlayerGameInput;
    
PreLogUtil.put(new StringMaker().append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUT)!.append(playerGameInput!.toString())!.toString(), this, this.BUILD_GAME);
    
playerGameInput!.removeNonAIInputGameKeyEvents();
    
this.addKeyInputListener(playerGameInput);
    
}

}


    public addKeyInputListener(playerGameInput: PlayerGameInput){
GameKeyEventHandler.getInstance()!.addListenerForPlayer(playerGameInput, playerGameInput!.getPlayerInputId());
    
}


    private gameCanvasStartListener: DemoPaintableInterface = NullDemoPaintable.NULL_DEMO_PAINTABLE;

    public setGameCanvasStartListener(gameCanvasStartListener: DemoPaintableInterface){
this.gameCanvasStartListener= gameCanvasStartListener;
    
}


                //@Throws(Exception.constructor)
            
    public loadState(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.LOAD);
    

    var hashtable: ABHashtable = this.getLoadStateHashtable()!;;
    

                        if(hashtable != 
                                    null
                                 && hashtable.size() > 0)
                        
                                    {
                                    
    var levelAsString: string = hashtable.get(GameInfo.LEVEL_NAME) as string;;
    

    var level: number = Integer.valueOf(levelAsString)!.intValue()!;;
    

    var gameInfo: GameInfo = this.gameLayerManager!.getGameInfo()!;;
    
gameInfo!.setCurrentLevel(level);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getLoadStateHashtable(): ABHashtable{
this.logUtil!.putF(new StringMaker().append(this.commonLabels!.START_LABEL)!.append(this.stringUtil!.toString(this.hashtable))!.toString(), this, "getLoadStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public setLoadStateHashtable(hashtable: ABHashtable){
this.logUtil!.putF(new StringMaker().append(this.commonLabels!.START_LABEL)!.append(this.stringUtil!.toString(hashtable))!.toString(), this, "setLoadStateHashtable");
    
this.hashtable= hashtable;
    
}


    public getCurrentStateHashtable(): ABHashtable{

    var hashtable: ABHashtable = this.stdUtil!.createHashtable()!;;
    

    var level: number = this.gameLayerManager!.getGameInfo()!.getCurrentLevel()!;;
    
hashtable.put(GameInfo.LEVEL_NAME.toString(), level.toString());
    
this.logUtil!.putF(new StringMaker().append("End: ")!.append(this.stringUtil!.toString(hashtable))!.toString(), this, "getCurrentStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public paintGameOver(graphics: Graphics){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


    public draw(graphics: Graphics){
this.colorFillPaintable!.paint(graphics);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.gameLayerManager!.getForegroundBasicColor());
    
this.gameSpecificPaintable!.paint(graphics);
    
}


    public clear(graphics: Graphics){
this.colorFillPaintable!.paint(graphics);
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
this.baseGameStatistics!.nextRefresh();
    
this.draw(graphics);
    
this.menuPaintable!.paint(graphics);
    
this.progressPaintable!.paint(graphics);
    
}


    public paintThreed(graphics: Graphics){
}


                //@Throws(Exception.constructor)
            
    public processEndLevelIntermissionGameState(){
}


    public nonBotPaint(graphics: Graphics){
this.endGamePaintable!.paint(graphics);
    
this.intermissionPaintable!.paint(graphics);
    
this.paintIntermission(graphics);
    
this.touchPaintable!.paint(graphics);
    
}


    public paintIntermission(graphics: Graphics){
}


    private readonly rawGameInputProcessor: InputProcessor = new GameCanvasInputProcessor(this);

    private readonly rawInputProcessor: InputProcessor = new FormInputProcessor(this);

    private inputProcessor: InputProcessor = this.getRawGameInputProcessor()!;

    public keyPressed(keyCode: number){
this.keyPressedByDevice(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
this.keyReleasedByDevice(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
this.keyRepeatedByDevice(keyCode, 0);
    
}


    public keyPressedByDevice(keyCode: number, deviceId: number){
this.inputProcessor!.keyPressedByDevice(keyCode, deviceId);
    
}


    public keyRepeatedByDevice(keyCode: number, deviceId: number){

                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    this.inputProcessor!.keyPressedByDevice(keyCode, deviceId);
    

                                    }
                                
}


    public keyReleasedByDevice(keyCode: number, deviceId: number){
this.inputProcessor!.keyReleasedByDevice(this, keyCode, deviceId);
    
}


                //@Throws(Exception.constructor)
            
    public handleRawKey(keyCode: number, deviceId: number, repeated: boolean){
}


    endProgress(isProgress: boolean): number{

    var portion: number = 30;;
    

                        if(isProgress && this.isMainCanvas())
                        
                                    {
                                    
    var myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.start();
    
this.getCustomCommandListener()!.commandAction(myCommandsFactory!.SET_DISPLAYABLE, progressCanvas);
    
portion= 4;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return portion;
    
}


                //@Throws(Exception.constructor)
            
    processPlayingGame(){
this.cheatProcessor!.update();
    
this.sensorGameUpdateProcessor!.getInputSensor()!.update();
    
this.gameInputProcessor!.process();
    
this.gameLayerManager!.process();
    
this.startIntermissionProcessor!.process();
    
}


                //@Throws(Exception.constructor)
            
    threadInit(){
}


                //@Throws(Exception.constructor)
            
    processGame(){
super.process();
    

                        if(AllBinaryMediaManager.update())
                        
                                    {
                                    
                        if(!this.primaryPlayerQueue!.process())
                        
                                    {
                                    this.secondaryPlayerQueue!.process();
    

                                    }
                                

                                    }
                                
this.mainStateProcessor!.process();
    
this.menuInputProcessor!.processInputList();
    
this.endGameProcessor!.process();
    
this.baseGameStatistics!.nextFrame();
    
}


    public notifyDonePainting(){

        
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 

        //mutex.withLock
        
this.threadObjectUtil!.notifyObject(this);
    


}


    private readonly YIELD_SLEEP: number = 100;

                //@Throws(Exception.constructor)
            
    public shouldWait(){

    var features: Features = Features.getInstance()!;;
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(features.isFeature(this.openGLFeatureFactory!.OPENGL_2D))
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        if(features.isDefault(this.openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    var openGLImageSpecificFactory: OpenGLImageSpecificFactory = OpenGLImageSpecificFactory.getInstance()!;;
    

        while(openGLImageSpecificFactory!.updating)
        {
Thread.sleep(this.YIELD_SLEEP);
    
}


                                    }
                                

                        }
                            
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(50, "Game Thread");
    
this.setCurrentThread();
    
this.setRunning(true);
    

                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    Thread.sleep(this.YIELD_SLEEP);
    

                                    }
                                
this.shouldWait();
    
this.threadInit();
    

                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    Thread.sleep(this.YIELD_SLEEP);
    

                                    }
                                
this.open();
    

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.init();
    
gameAdState!.setGameIsReady(true);
    
this.gameBehavior!.run(this);
    
this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public run2(){

    var features: Features = Features.getInstance()!;;
    

                        if(features.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML())
                        
                                    {
                                    
                        if(features.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    this.logUtil!.putF(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD.getName(), this, this.commonStrings!.RUN);
    

                                    }
                                

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    this.logUtil!.putF(GraphicsStrings.getInstance()!.HTML, this, this.commonStrings!.RUN);
    

                                    }
                                

    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;;
    
currentDisplayableFactory!.setRunnable(this.gameRunnable);
    
currentDisplayableFactory!.setDisplayable(this);
    
OpenGLThreadUtil.getInstance()!.onResume();
    

                                    }
                                
                             else 
                        if(features.isDefault(this.openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS))
                        
                                    {
                                    this.logUtil!.putF(this.openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS.getName(), this, this.commonStrings!.RUN);
    
OpenGLThreadUtil.getInstance()!.onResume();
    

        while(this.isRunning())
        {
this.run3();
    
}

this.end();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("this thread", this, this.commonStrings!.RUN);
    

        while(this.isRunning())
        {
this.run3();
    
}

this.end();
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public run3(){
this.loopTimeHelper!.setStartTime(this.gameTickTimeDelayHelper!.setStartTime());
    
this.gameTickDisplayInfoSingleton!.update();
    
this.processGame();
    
this.processLoopSleep();
    
}


    public setRunning(running: boolean){
super.setRunning(running);
    

        try {
            
    var features: Features = Features.getInstance()!;;
    

                        if(running)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        if(features.isDefault(this.openGLFeatureFactory!.OPENGL) || SWTUtil.isSWT)
                        
                                    {
                                    
                        if(this.gameLayerManager!.getGameInfo()!.getGameType() != this.gameTypeFactory!.BOT)
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;;
    
currentDisplayableFactory!.clearRunnable();
    

                                    }
                                
this.end();
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.SET_RUNNING, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public end(){
this.screenCapture!.endRecording();
    
this.baseGameStatistics!.add(new StringMaker().append(this.baseGameStatistics!.toString())!.append(CommonSeps.getInstance()!.NEW_LINE)!.toString());
    
this.baseGameStatistics!.init();
    
this.gameKeyEventHandler!.removeListener(this.cheatProcessor);
    
this.close();
    
this.removeAllGameKeyInputListeners();
    
this.endGameThread();
    
}


                //@Throws(Exception.constructor)
            
    public endGameThread(){
DisplayChangeEventHandler.getInstance()!.removeListener(this);
    
GameLevelDisplayChangeEventListenersFactory.getInstance()!.clear();
    

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.notPlayingAdState();
    
}


    public createHighScore(score: number): HighScore{

    var gameInfo: GameInfo = this.gameLayerManager!.getGameInfo()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScore(0, "NONE", new GameInfo(gameInfo!.getGameType(), gameInfo!.getGameMode(), PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 0, 0), score);
    
}


                //@Throws(Exception.constructor)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, name: string, score: number, autoSubmit: boolean, isLast: boolean){
this.gameBehavior!.setHighScore(abeClientInformation, this, name, score, autoSubmit, isLast);
    
}


                //@Throws(Exception.constructor)
            
    public setHighScore2(abeClientInformation: AbeClientInformationInterface, name: string, score: number, autoSubmit: boolean, isLast: boolean){

    var highScore: HighScore = this.createHighScore(score)!;;
    

    var textBox: HighScoreTextBox = new HighScoreTextBox(this.highScoresFactoryInterface, this.highScoresHelper, abeClientInformation, this.gameLayerManager!.getGameInfo(), this.getCustomCommandListener(), name, highScore, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor());;
    

                        if(isLast)
                        
                                    {
                                    this.getCustomCommandListener()!.commandAction(GameCommandsFactory.getInstance()!.SET_MENU_DISPLAYABLE, textBox);
    

                                    }
                                

                        if(autoSubmit)
                        
                                    {
                                    
//inner=true member= isStatic=
class SaveHighScoreRunnable
            extends Object
         implements Runnable {
        

    private readonly progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;

    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
                        if(isLast)
                        
                                    {
                                    textBox!.submit();
    

                                    }
                                
                        else {
                            textBox!.saveHighScore();
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "run", e);
    
this.progressCanvas!.end();
    
}

}


}


SecondaryThreadPool.getInstance()!.runTask(new SaveHighScoreRunnable());
    

                                    }
                                
}


    getGameStateTimeHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameStateTimeHelper;
    
}


    setInitialized(initialized: boolean){
this.initialized= initialized;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initialized;
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryGameCanvas.id;
    
}


    public setProgressPaintable(paintable: PaintableInterface){
this.progressPaintable= paintable;
    
}


    public getStartIntermissionInterface(): IntermissionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startIntermissionInterface;
    
}


    public getEndLevelIntermissionInterface(): IntermissionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endLevelIntermissionInterface;
    
}


    setTouchPaintableP(paintable: Paintable){
this.touchPaintable= paintable;
    
}


    public getTouchPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.touchPaintable;
    
}


    setEndGamePaintable(endGamePaintable: Paintable){
this.endGamePaintable= endGamePaintable;
    
}


    public getEndGamePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endGamePaintable;
    
}


    setIntermissionPaintable(intermissionPaintable: Paintable){
this.intermissionPaintable= intermissionPaintable;
    
}


    public getIntermissionPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.intermissionPaintable;
    
}


    public getEndGameInfoP(): EndGameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endGameInfo;
    
}


    public setHighScoresPaintable(highScoresPaintable: Paintable){
this.highScoresPaintable= highScoresPaintable;
    
}


    public getHighScoresPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresPaintable;
    
}


    getRealHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.realHighScoresPaintable;
    
}


    clearPlayerGameInputList(){

    var playerGameInput: PlayerGameInput;;
    




                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;index >= 0; index--)
        {
playerGameInput= this.localPlayerGameInputList!.get(index) as PlayerGameInput;
    
this.gameKeyEventHandler!.removeListener(playerGameInput);
    
}

this.localPlayerGameInputList!.clear();
    
}


    addPlayerGameInput(playerGameInput: PlayerGameInput){
this.localPlayerGameInputList!.add(playerGameInput);
    
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
this.menuInputProcessor= menuInputProcessor;
    
}


    getMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuInputProcessor;
    
}


    public getMenuForm(): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuForm;
    
}


    public setMenuForm(menuForm: ScrollSelectionForm){
this.menuForm= menuForm;
    
}


    public getStartLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startLevel;
    
}


    public setStartLevel(startLevel: number){
this.startLevel= startLevel;
    
}


    setTouchButtonsPaintable(touchButtonsPaintable: Paintable){
this.touchButtonsPaintable= touchButtonsPaintable;
    
}


    getTouchButtonsPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.touchButtonsPaintable;
    
}


    public setGameInputProcessor(gameInputProcessor: Processor){
this.gameInputProcessor= gameInputProcessor;
    
}


    getGameInputProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInputProcessor;
    
}


    setEndGameProcessor(endGameProcessor: Processor){
this.endGameProcessor= endGameProcessor;
    
}


    getEndGameProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endGameProcessor;
    
}


    setEndGameStatePaintable(endGameStatePaintable: Paintable){
this.endGameStatePaintable= endGameStatePaintable;
    
}


    getEndGameStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endGameStatePaintable;
    
}


    setNonBotPaintableP(nonBotPaintable: Paintable){
this.nonBotPaintable= nonBotPaintable;
    
}


    getNonBotPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nonBotPaintable;
    
}


    setStartIntermissionPaintable(startIntermissionPaintable: InitUpdatePaintable){
this.startIntermissionPaintable= startIntermissionPaintable;
    
}


    getStartIntermissionPaintable(): InitUpdatePaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startIntermissionPaintable;
    
}


    public setMainStateProcessor(mainStateProcessor: Processor){
this.mainStateProcessor= mainStateProcessor;
    
}


    getMainStateProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mainStateProcessor;
    
}


    setProcessGameProcessor(processGameProcessor: Processor){
this.processGameProcessor= processGameProcessor;
    
}


    public getProcessGameProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.processGameProcessor;
    
}


    setOpenMenuPaintable(openMenuPaintable: Paintable){
this.openMenuPaintable= openMenuPaintable;
    
}


    getOpenMenuPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.openMenuPaintable;
    
}


    setPopupMenuInputProcessor(popupMenuInputProcessor: BasicMenuInputProcessor){
this.popupMenuInputProcessor= popupMenuInputProcessor;
    
}


    getPopupMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.popupMenuInputProcessor;
    
}


    public getSensorGameUpdateProcessor(): SensorGameUpdateProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sensorGameUpdateProcessor;
    
}


    public getRawGameInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rawGameInputProcessor;
    
}


    public getRawInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rawInputProcessor;
    
}


    public setInputProcessor(inputProcessor: InputProcessor){
this.inputProcessor= inputProcessor;
    
}


    getInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputProcessor;
    
}


    setMenuPaintable(menuPaintable: Paintable){
this.menuPaintable= menuPaintable;
    
}


    getMenuPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuPaintable;
    
}


    setFormPaintable(formPaintable: Paintable){
this.formPaintable= formPaintable;
    
}


    getFormPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.formPaintable;
    
}


    public setGameSpecificPaintableP(gameSpecificPaintable: Paintable){
this.gameSpecificPaintable= gameSpecificPaintable;
    
}


    getGameSpecificPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameSpecificPaintable;
    
}


    public isSingleThread(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed() || SWTUtil.isSWT;
    
}


    public isRunningInAnotherThread(): boolean{

    var features: Features = Features.getInstance()!;;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRunning();;
    

                        }
                            
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryGameCanvas.TYPE;
    
}


}



