
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
        



import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Animation } from "../../../../../../org/allbinary/animation/Animation.js";

    
import { AnimationBehavior } from "../../../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { TextAnimation } from "../../../../../../org/allbinary/animation/text/TextAnimation.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { BasicDecimal } from "../../../../../../org/allbinary/logic/math/BasicDecimal.js";

    

export class GeographicMapCellHistory
            extends Object
         {
        

    public static readonly NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY: GeographicMapCellHistory[] = [];
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        

    private readonly list: BasicArrayList

    private readonly visitedList: BasicArrayList

    private readonly MISSED_INFO: string = "Missed";
        
        

    private readonly animation: Animation = new TextAnimation(MISSED_INFO, AnimationBehavior.getInstance());
        
        

    private totalVisited: number= 0

    private halfWidth: number = 0;
        
        
public constructor (){

            super();
            this.list= new BasicArrayList();
    
this.visitedList= new BasicArrayList();
    
this.init();
    
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
                        return this.list.size();

                        ;
    
}


    public track(list: BasicArrayList){
    //var list = list

    var size: number = list.size()!;
        
        
;
    
this.list.ensureCapacity(size);
    
this.visitedList!.ensureCapacity(size);
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
geographicMapCellPosition= list.get(index);

                         as GeographicMapCellPosition;
    
this.track(geographicMapCellPosition);
    
}

}


    public track(geographicMapCellPosition: GeographicMapCellPosition){
    //var geographicMapCellPosition = geographicMapCellPosition

                        if(!this.list.contains(geographicMapCellPosition);

                        )
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    
this.visitedList!.add(booleanFactory!.FALSE);
    

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
var geographicMapCellPosition = geographicMapCellPosition

    var localList: BasicArrayList = this.list;
        
        
;
    

    var index: number = localList!.indexOf(geographicMapCellPosition)!;
        
        
;
    

                        if(localList!.size() > index +1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(index +1);

                         as GeographicMapCellPosition;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


    public getFirstUnvisited(): GeographicMapCellPosition{

    var localList: BasicArrayList = this.list;
        
        
;
    

    var localVisitedList: BasicArrayList = this.visitedList;
        
        
;
    

    var size: number = localVisitedList!.size()!;
        
        
;
    

    var value: Boolean
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
value= this.visitedList!.get(index);

                         as Boolean;
    

                        if(value == booleanFactory!.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(index);

                         as GeographicMapCellPosition;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return localList!.get(0);

                         as GeographicMapCellPosition;
    
}


    public getFirstUnvisitedIndex(): number{

    var localVisitedList: BasicArrayList = this.visitedList;
        
        
;
    

    var size: number = localVisitedList!.size()!;
        
        
;
    

    var value: Boolean
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
value= this.visitedList!.get(index);

                         as Boolean;
    

                        if(value == booleanFactory!.FALSE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getInPathButNotTracked(pathList: BasicArrayList): BasicArrayList{
var pathList = pathList

    var inPathButNotTrackedList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var localList: BasicArrayList = this.list;
        
        
;
    

    var size: number = pathList!.size()!;
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
geographicMapCellPosition= pathList!.get(index);

                         as GeographicMapCellPosition;
    

                        if(!localList!.contains(geographicMapCellPosition);

                        )
                        
                                    {
                                    inPathButNotTrackedList!.add(geographicMapCellPosition);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inPathButNotTrackedList;
    
}


    public isVisited(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition

    var index: number = this.list.indexOf(geographicMapCellPosition)!;
        
        
;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var value: Boolean = this.visitedList!.get(index);

                         as Boolean;
        
        
;
    

                        if(value == booleanFactory!.TRUE)
                        
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
    //var geographicMapCellPosition = geographicMapCellPosition

    var index: number = this.list.indexOf(geographicMapCellPosition)!;
        
        
;
    

    var value: Boolean
;
    

                        if(index !=  -1)
                        
                                    {
                                    value= this.visitedList!.get(index);

                         as Boolean;
    

    var TRUE: Boolean = booleanFactory!.TRUE;
        
        
;
    

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


                //@Throws(Error::class)
            
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


                //@Throws(Error::class)
            
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


                //@Throws(Error::class)
            
    public isVisited(basicDecimal: BasicDecimal): boolean{
    //var basicDecimal = basicDecimal

    var size: number = this.getSize()!;
        
        
;
    

    var numberRequired: number = (size shl basicDecimal!.getScaledFactor()) /basicDecimal!.getUnscaled();

                        .toInt();
        
        
;
    

    var numberNotVisited: number = this.getSize() -1 -this.totalVisited;
        
        
;
    

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


                //@Throws(Error::class)
            
    public reset(){

    var localVisitedList: BasicArrayList = this.visitedList;
        
        
;
    

    var localFalseBoolean: Boolean = booleanFactory!.FALSE;
        
        
;
    

    var size: number = localVisitedList!.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
localVisitedList!.set(index, localFalseBoolean);
    
}

this.totalVisited= 0;
    
}


    paintNotVisited(graphics: Graphics, tiledLayer: AllBinaryTiledLayer, point: GPoint){
    //var graphics = graphics
    //var tiledLayer = tiledLayer
    //var point = point

    var x: number = point.getX() -tiledLayer!.getXP();
        
        
;
    

    var y: number = point.getY() -tiledLayer!.getYP();
        
        
;
    

                        if(halfWidth == 0)
                        
                                    {
                                    this.halfWidth= (graphics.getFont()!.stringWidth(MISSED_INFO) shr 1);
    

                                    }
                                

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var height: number = 2 *myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
this.animation.paint(graphics, x +halfWidth, y +(height));
    
}


    private readonly RED: number = BasicColorFactory.getInstance()!.RED.toInt()!;
        
        

    public paintNotVisited(graphics: Graphics, geographicMapInterface: BasicGeographicMap){
    //var graphics = graphics
    //var geographicMapInterface = geographicMapInterface

        try {
            graphics.setColor(RED);
    

    var localVisitedList: BasicArrayList = this.visitedList;
        
        
;
    

    var size: number = localVisitedList!.size()!;
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    

    var isCellVisitedBoolean: Boolean
;
    




                        for (
    var index: number = size;
        
        
--index >= 0; )
        {
geographicMapCellPosition= list.get(index);

                         as GeographicMapCellPosition;
    
isCellVisitedBoolean= localVisitedList!.get(index);

                         as Boolean;
    

                        if(!isCellVisitedBoolean;

                        )
                        
                                    {
                                    this.paintNotVisited(graphics, geographicMapInterface!.getAllBinaryTiledLayer(), geographicMapCellPosition!.getPoint());
    

                                    }
                                
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "paintNotVisited", e);
    
}

}


    public init(){
this.list.clear();
    
this.visitedList!.clear();
    
this.totalVisited= 0;
    
}


}
                
            

