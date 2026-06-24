
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { SelectionHudPaintable } from '../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { BasicHudFactory } from '../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      
import { NumberStringHud } from '../../../../../org/allbinary/game/layer/hud/basic/NumberStringHud.js';
      
import { NumberStringHudFactory } from '../../../../../org/allbinary/game/layer/hud/basic/NumberStringHudFactory.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { MathUtil } from '../../../../../org/allbinary/logic/math/MathUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BuildingLayer } from './BuildingLayer.js';

export class BuildingInfoHudPaintable extends SelectionHudPaintable {
        

    private static readonly instance: BuildingInfoHudPaintable = new BuildingInfoHudPaintable();

    public static getInstance(): BuildingInfoHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BuildingInfoHudPaintable.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly HEALTH: string = "Health:";

    private readonly productivityHud: NumberStringHud;

    private readonly efficiencyHud: NumberStringHud;

    private readonly healthHud: NumberStringHud;

    private readonly maxHealthHud: NumberStringHud;

    private rtsLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;

    private currentHealth: number = 0;

private constructor (){

            super();
        
    var numberStringHudFactory: NumberStringHudFactory = NumberStringHudFactory.getInstance()!;;
    

    var productivityHud: NumberStringHud = numberStringHudFactory!.NULL_NUMBER_STRING_HUD;;
    

    var efficiencyHud: NumberStringHud = numberStringHudFactory!.NULL_NUMBER_STRING_HUD;;
    

    var healthHud: NumberStringHud = numberStringHudFactory!.NULL_NUMBER_STRING_HUD;;
    

    var maxHealthHud: NumberStringHud = numberStringHudFactory!.NULL_NUMBER_STRING_HUD;;
    

        try {
            
    var index: number = 0;;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;;
    

    var basicColor: BasicColor = this.getBasicColorP()!;;
    

    var textX: number = this.textX;;
    

    var y: number = this.y;;
    

    var firstIndex: number = index;;
    

//inner=true member= isStatic=
class ProductivityNumberStringHud extends NumberStringHud {
        

 constructor (){
            super("Productivity:", 999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, 0, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= textX;
    
this.updateMaxHeight= y +((firstIndex +1) *font.getHeight());
    
super.updateMeasurement(graphics);
    
}


}
                
            

                    //Otherwise - statement - EmptyStmt

productivityHud= new ProductivityNumberStringHud();
    
index++;
    

    var secondIndex: number = index;;
    

//inner=true member= isStatic=
class EfficiencyNumberStringHud extends NumberStringHud {
        

 constructor (){
            super("Efficiency:", 999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, 0, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= textX;
    
this.updateMaxHeight= y +((secondIndex +1) *font.getHeight());
    
}


}
                
            

                    //Otherwise - statement - EmptyStmt

efficiencyHud= new EfficiencyNumberStringHud();
    
index++;
    

    var HEALTH: string = this.HEALTH;;
    

    var thirdIndex: number = index;;
    

//inner=true member= isStatic=
class HealthNumberStringHud extends NumberStringHud {
        

 constructor (){
            super(HEALTH, 99999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, 0, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= textX;
    
this.updateMaxHeight= y +((thirdIndex +1) *font.getHeight());
    
super.updateMeasurement(graphics);
    
}


}
                
            

                    //Otherwise - statement - EmptyStmt


    var totalLength: number = HEALTH.length +1;;
    
healthHud= new HealthNumberStringHud();
    

    var fourthIndex: number = index;;
    

//inner=true member= isStatic=
class MaxHealthNumberStringHud extends NumberStringHud {
        

 constructor (){
            super("/ ", 99999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, 0, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.updateMaxWidth= textX +(totalLength *font.getHeight());
    
this.updateMaxHeight= y +((fourthIndex +1) *font.getHeight());
    
}


}
                
            

                    //Otherwise - statement - EmptyStmt

maxHealthHud= new MaxHealthNumberStringHud();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.productivityHud= productivityHud;
    
this.efficiencyHud= efficiencyHud;
    
this.healthHud= healthHud;
    
this.maxHealthHud= maxHealthHud;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    

    var totalLength: number = this.HEALTH.length +MathUtil.getInstance()!.getTotalDigits(this.currentHealth);;
    
this.maxHealthHud!.setX(this.textX +MyFontProcessor.defaultStringWidth(font, totalLength));
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public setBasicColorP(basicColor: BasicColor){
super.setBasicColorP(basicColor);
    
this.productivityHud!.setBasicColorP(basicColor);
    
this.efficiencyHud!.setBasicColorP(basicColor);
    
this.healthHud!.setBasicColorP(basicColor);
    
this.maxHealthHud!.setBasicColorP(basicColor);
    
}


    public paint(graphics: Graphics){
super.paint(graphics);
    
this.myFontProcessor!.process(graphics);
    
this.productivityHud!.paint(graphics);
    
this.efficiencyHud!.paint(graphics);
    
this.healthHud!.paint(graphics);
    
this.maxHealthHud!.paint(graphics);
    
this.getAnimationInterface()!.paintXY(graphics, this.imageX, this.y);
    
}


    public updateSelectionInfo(){

    var buildingLayer: BuildingLayer = this.rtsLayer as BuildingLayer;;
    
this.setName(buildingLayer!.getName());
    
this.setAnimationInterface(buildingLayer!.getVerticleBuildAnimationInterface());
    
this.productivityHud!.set(buildingLayer!.getProductivity());
    
this.efficiencyHud!.set(buildingLayer!.getEfficiency() /100);
    
this.currentHealth= buildingLayer!.getHealthInterface()!.getHealth();
    
this.healthHud!.set(this.currentHealth);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
this.maxHealthHud!.set(buildingLayer!.getHealthInterface()!.getMaxHealth());
    
}


    public setRtsLayer(rtsLayer: PathFindingLayerInterface){
this.rtsLayer= rtsLayer;
    
}


}
                
            

