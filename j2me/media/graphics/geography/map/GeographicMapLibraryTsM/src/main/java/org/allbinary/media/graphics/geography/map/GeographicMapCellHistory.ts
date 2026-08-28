
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { Animation } from '../../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationBehavior } from '../../../../../../org/allbinary/animation/AnimationBehavior.js';
      const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
//not game specific package import { TextAnimation } from '../../../../../../org/allbinary/animation/text/TextAnimation.js';
      const TextAnimation = globalThis.org.allbinary.animation.text.TextAnimation;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { BasicDecimal } from '../../../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
import { BasicGeographicMap } from './BasicGeographicMap.js';

export class GeographicMapCellHistory
            extends Object
         implements UpdateMyFontInterface {
        

    public static readonly NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY: GeographicMapCellHistory[] = [];

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;

    private readonly list: BasicArrayList;

    private readonly visitedList: BasicArrayList;

    private readonly MISSED_INFO: string = "Missed";

    private readonly animation: Animation = new TextAnimation(this.MISSED_INFO, AnimationBehavior.getInstance());

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private totalVisited: number= 0;

    private halfWidth: number = 0;

    private fontHeight: number = 0;

public constructor (){

            super();
        this.list= new BasicArrayListD();
    
this.visitedList= new BasicArrayListD();
    
this.init();
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public getTotalVisited(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalVisited;
    
}


    public getTotalNotVisited(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSize() -this.totalVisited;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.size();;
    
}


    public trackAll(list: BasicArrayList){

    var size: number = list.size()!;;
    
this.list.ensureCapacity(size);
    
this.visitedList!.ensureCapacity(size);
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
geographicMapCellPosition= list.get(index) as GeographicMapCellPosition;
    
this.track(geographicMapCellPosition);
    
}

}


    public track(geographicMapCellPosition: GeographicMapCellPosition){

                        if(!this.list.contains(geographicMapCellPosition))
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    
this.visitedList!.add(this.booleanFactory!.FALSE);
    

                                    }
                                
}


    public getTracked(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


    public getVisited(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.visitedList;
    
}


    public getAfterIfNotLast(geographicMapCellPosition: GeographicMapCellPosition): GeographicMapCellPosition{

    var localList: BasicArrayList = this.list;;
    

    var index: number = localList!.indexOf(geographicMapCellPosition)!;;
    

                        if(localList!.size() > index +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(index +1) as GeographicMapCellPosition;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


    public getFirstUnvisited(): GeographicMapCellPosition{

    var localList: BasicArrayList = this.list;;
    

    var localVisitedList: BasicArrayList = this.visitedList;;
    

    var size: number = localVisitedList!.size()!;;
    

    var value: Boolean;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
value= this.visitedList!.get(index) as Boolean;
    

                        if(value == this.booleanFactory!.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(index) as GeographicMapCellPosition;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(0) as GeographicMapCellPosition;
    
}


    public getFirstUnvisitedIndex(): number{

    var localVisitedList: BasicArrayList = this.visitedList;;
    

    var size: number = localVisitedList!.size()!;;
    

    var value: Boolean;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
value= this.visitedList!.get(index) as Boolean;
    

                        if(value == this.booleanFactory!.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getInPathButNotTracked(pathList: BasicArrayList): BasicArrayList{

    var inPathButNotTrackedList: BasicArrayList = new BasicArrayListD();;
    

    var localList: BasicArrayList = this.list;;
    

    var size: number = pathList!.size()!;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
geographicMapCellPosition= pathList!.get(index) as GeographicMapCellPosition;
    

                        if(!localList!.contains(geographicMapCellPosition))
                        
                                    {
                                    inPathButNotTrackedList!.add(geographicMapCellPosition);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inPathButNotTrackedList;
    
}


    public isVisited(geographicMapCellPosition: GeographicMapCellPosition): boolean{

    var index: number = this.list.indexOf(geographicMapCellPosition)!;;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var value: Boolean = this.visitedList!.get(index) as Boolean;;
    

                        if(value == this.booleanFactory!.TRUE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public visit(geographicMapCellPosition: GeographicMapCellPosition): boolean{

    var index: number = this.list.indexOf(geographicMapCellPosition)!;;
    

    var value: Boolean;;
    

                        if(index !=  -1)
                        
                                    {
                                    value= this.visitedList!.get(index) as Boolean;
    

    var TRUE: Boolean = this.booleanFactory!.TRUE;;
    

                        if(value != TRUE)
                        
                                    {
                                    this.visitedList!.set(index, TRUE);
    
this.totalVisited++;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public isAllVisited(): boolean{

                        if(this.totalVisited == this.getSize() -1)
                        
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
            
    public isAllVisited2(): boolean{

                        if(this.totalVisited == this.getSize())
                        
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
            
    public isPortionVisited(basicDecimal: BasicDecimal): boolean{

    var size: number = this.getSize()!;;
    

    var numberRequired: number = (size<<basicDecimal!.getScaledFactor()) /Math.round(basicDecimal!.getUnscaled());;
    

    var numberNotVisited: number = this.getSize() -1 -this.totalVisited;;
    

                        if(size -numberNotVisited > numberRequired)
                        
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
            
    public reset(){

    var localVisitedList: BasicArrayList = this.visitedList;;
    

    var localFalseBoolean: Boolean = this.booleanFactory!.FALSE;;
    

    var size: number = localVisitedList!.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
localVisitedList!.set(index, localFalseBoolean);
    
}

this.totalVisited= 0;
    
}


    paintNotVisitedRelativeToPoint(graphics: Graphics, tiledLayer: AllBinaryTiledLayer, point: GPoint){

    var x: number = point.getX() -tiledLayer!.getXP();;
    

    var y: number = point.getY() -tiledLayer!.getYP();;
    

                        if(this.halfWidth == 0)
                        
                                    {
                                    this.halfWidth= (graphics.getFont()!.stringWidth(this.MISSED_INFO)>>1);
    

                                    }
                                

    var height: number = 2 *this.fontHeight;;
    
this.animation.paintXY(graphics, x +this.halfWidth, y +(height));
    
}


    private readonly RED: number = BasicColorFactory.getInstance()!.RED.intValue()!;

    public paintNotVisited(graphics: Graphics, geographicMapInterface: BasicGeographicMap){

        try {
            this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.RED);
    

    var localVisitedList: BasicArrayList = this.visitedList;;
    

    var size: number = localVisitedList!.size()!;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    

    var isCellVisitedBoolean: Boolean;;
    




                        for (
    var index: number = size;--index >= 0; )
        {
geographicMapCellPosition= this.list.get(index) as GeographicMapCellPosition;
    
isCellVisitedBoolean= localVisitedList!.get(index) as Boolean;
    

                        if(!isCellVisitedBoolean.valueOf())
                        
                                    {
                                    this.paintNotVisitedRelativeToPoint(graphics, geographicMapInterface!.getAllBinaryTiledLayer(), geographicMapCellPosition!.getPoint());
    

                                    }
                                
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "paintNotVisited", e);
    
}

}


    public init(){
this.list.clear();
    
this.visitedList!.clear();
    
this.totalVisited= 0;
    
}


}



