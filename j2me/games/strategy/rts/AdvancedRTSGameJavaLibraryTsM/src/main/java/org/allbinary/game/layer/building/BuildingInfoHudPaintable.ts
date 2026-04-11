
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { SelectionHudPaintable } from "../../../../../org/allbinary/game/layer/SelectionHudPaintable.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicHudFactory } from "../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { NumberStringHud } from "../../../../../org/allbinary/game/layer/hud/basic/NumberStringHud.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { MathUtil } from "../../../../../org/allbinary/logic/math/MathUtil.js";

    

export class BuildingInfoHudPaintable extends SelectionHudPaintable {
        

    private static readonly instance: BuildingInfoHudPaintable = new BuildingInfoHudPaintable();
        
        

    public static getInstance(): BuildingInfoHudPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly HEALTH: string = "Health:";
        
        

    private readonly productivityHud: NumberStringHud

    private readonly efficiencyHud: NumberStringHud

    private readonly healthHud: NumberStringHud

    private readonly maxHealthHud: NumberStringHud

    private rtsLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        
private constructor (){

            super();
            
    var productivityHud: NumberStringHud = NumberStringHud.NULL_NUMBER_STRING_HUD;
        
        
;
    

    var efficiencyHud: NumberStringHud = NumberStringHud.NULL_NUMBER_STRING_HUD;
        
        
;
    

    var healthHud: NumberStringHud = NumberStringHud.NULL_NUMBER_STRING_HUD;
        
        
;
    

    var maxHealthHud: NumberStringHud = NumberStringHud.NULL_NUMBER_STRING_HUD;
        
        
;
    

        try {
            
    var index: number = 0;
        
        
;
    

    var basicHudFactory: BasicHudFactory = BasicHudFactory.getInstance()!;
        
        
;
    

    var DEFAULT_CHAR_HEIGHT: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
productivityHud= new NumberStringHud("Productivity:", 999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, this.textX, y +((index +1) *DEFAULT_CHAR_HEIGHT), 0, this.getBasicColorP());
    
index++;
    
efficiencyHud= new NumberStringHud("Efficiency:", 999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, this.textX, y +((index +1) *DEFAULT_CHAR_HEIGHT), 0, this.getBasicColorP());
    
index++;
    

    var totalLength: number = HEALTH.length +1;
        
        
;
    
healthHud= new NumberStringHud(HEALTH, 99999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, this.textX, y +((index +1) *DEFAULT_CHAR_HEIGHT), 0, this.getBasicColorP());
    
maxHealthHud= new NumberStringHud("/ ", 99999, basicHudFactory!.ABSOLUTE, basicHudFactory!.HORIZONTAL, this.textX +(totalLength *DEFAULT_CHAR_HEIGHT), y +((index +1) *DEFAULT_CHAR_HEIGHT), 0, this.getBasicColorP());
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

this.productivityHud= productivityHud;
    
this.efficiencyHud= efficiencyHud;
    
this.healthHud= healthHud;
    
this.maxHealthHud= maxHealthHud;
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
super.setBasicColorP(basicColor);
    
this.productivityHud!.setBasicColorP(basicColor);
    
this.efficiencyHud!.setBasicColorP(basicColor);
    
this.healthHud!.setBasicColorP(basicColor);
    
this.maxHealthHud!.setBasicColorP(basicColor);
    
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics);
    
this.productivityHud!.paint(graphics);
    
this.efficiencyHud!.paint(graphics);
    
this.healthHud!.paint(graphics);
    
this.maxHealthHud!.paint(graphics);
    
this.getAnimationInterface()!.paint(graphics, this.imageX, y);
    
}


    public updateSelectionInfo(){

    var buildingLayer: BuildingLayer = this.rtsLayer as BuildingLayer;
        
        
;
    
this.setName(buildingLayer!.getName());
    
this.setAnimationInterface(buildingLayer!.getVerticleBuildAnimationInterface());
    
this.productivityHud!.set(buildingLayer!.getProductivity());
    
this.efficiencyHud!.set(buildingLayer!.getEfficiency() /100);
    

    var health: number = buildingLayer!.getHealthInterface()!.getHealth()!;
        
        
;
    
this.healthHud!.set(health);
    

    var totalLength: number = HEALTH.length +MathUtil.getInstance()!.getTotalDigits(health);
        
        
;
    
this.maxHealthHud!.setX(this.textX +MyFont.getInstance()!.stringWidth(totalLength));
    
this.maxHealthHud!.set(buildingLayer!.getHealthInterface()!.getMaxHealth());
    
}


    public setRtsLayer(rtsLayer: PathFindingLayerInterface){
var rtsLayer = rtsLayer
this.rtsLayer= rtsLayer;
    
}


}
                
            

