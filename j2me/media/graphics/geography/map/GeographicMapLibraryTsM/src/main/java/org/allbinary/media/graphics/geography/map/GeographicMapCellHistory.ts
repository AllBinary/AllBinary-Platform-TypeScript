
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
        
import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { Animation } from '../../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation

import { AnimationBehavior } from '../../../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior

import { TextAnimation } from '../../../../../../org/allbinary/animation/text/TextAnimation.js';
//not GWT import const TextAnimation

import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor

import { UpdateMyFontInterface } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface

import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor

import { BasicDecimal } from '../../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import - same folder const GeographicMapCellPosition
import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import - same folder const BasicGeographicMap

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

    let font: Font = graphics.getFont()!;;
    
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

    let size: number = list.size()!;;
    
this.list.ensureCapacity(size);
    
this.visitedList!.ensureCapacity(size);
    

    let geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let localList: BasicArrayList = this.list;;
    

    let index: number = localList!.indexOf(geographicMapCellPosition)!;;
    

                        if(localList!.size() > index +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(index +1) as GeographicMapCellPosition;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


    public getFirstUnvisited(): GeographicMapCellPosition{

    let localList: BasicArrayList = this.list;;
    

    let localVisitedList: BasicArrayList = this.visitedList;;
    

    let size: number = localVisitedList!.size()!;;
    

    let value: Boolean;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let localVisitedList: BasicArrayList = this.visitedList;;
    

    let size: number = localVisitedList!.size()!;;
    

    let value: Boolean;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let inPathButNotTrackedList: BasicArrayList = new BasicArrayListD();;
    

    let localList: BasicArrayList = this.list;;
    

    let size: number = pathList!.size()!;;
    

    let geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    let index: number = 0;index < size; index++)
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

    let index: number = this.list.indexOf(geographicMapCellPosition)!;;
    

                        if(index !=  -1)
                        
                                    {
                                    
    let value: Boolean = this.visitedList!.get(index) as Boolean;;
    

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

    let index: number = this.list.indexOf(geographicMapCellPosition)!;;
    

    let value: Boolean;;
    

                        if(index !=  -1)
                        
                                    {
                                    value= this.visitedList!.get(index) as Boolean;
    

    let TRUE: Boolean = this.booleanFactory!.TRUE;;
    

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

    let size: number = this.getSize()!;;
    

    let numberRequired: number = (size<<basicDecimal!.getScaledFactor()) /globalThis.Math.trunc(basicDecimal!.getUnscaled());;
    

    let numberNotVisited: number = this.getSize() -1 -this.totalVisited;;
    

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

    let localVisitedList: BasicArrayList = this.visitedList;;
    

    let localFalseBoolean: Boolean = this.booleanFactory!.FALSE;;
    

    let size: number = localVisitedList!.size()!;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
localVisitedList!.set(index, localFalseBoolean);
    
}

this.totalVisited= 0;
    
}


    paintNotVisitedRelativeToPoint(graphics: Graphics, tiledLayer: AllBinaryTiledLayer, point: GPoint){

    let x: number = point.getX() -tiledLayer!.getXP();;
    

    let y: number = point.getY() -tiledLayer!.getYP();;
    

                        if(this.halfWidth == 0)
                        
                                    {
                                    this.halfWidth= (graphics.getFont()!.stringWidth(this.MISSED_INFO)>>1);
    

                                    }
                                

    let height: number = 2 *this.fontHeight;;
    
this.animation.paintXY(graphics, x +this.halfWidth, y +(height));
    
}


    private readonly RED: number = BasicColorFactory.getInstance()!.RED.intValue()!;

    public paintNotVisited(graphics: Graphics, geographicMapInterface: BasicGeographicMap){

 try { this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.RED);
    

    let localVisitedList: BasicArrayList = this.visitedList;;
    

    let size: number = localVisitedList!.size()!;;
    

    let geographicMapCellPosition: GeographicMapCellPosition;;
    

    let isCellVisitedBoolean: Boolean;;
    




                        for (
    let index: number = size;--index >= 0; )
        {
geographicMapCellPosition= this.list.get(index) as GeographicMapCellPosition;
    
isCellVisitedBoolean= localVisitedList!.get(index) as Boolean;
    

                        if(!isCellVisitedBoolean.valueOf())
                        
                                    {
                                    this.paintNotVisitedRelativeToPoint(graphics, geographicMapInterface!.getAllBinaryTiledLayer(), geographicMapCellPosition!.getPoint());
    

                                    }
                                
}

 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "paintNotVisited", e);
    

 }
   }
 
}


    public init(){
this.list.clear();
    
this.visitedList!.clear();
    
this.totalVisited= 0;
    
}


}

