
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
import { CommonButtons } from './CommonButtons.js';
import { TouchButton } from './TouchButton.js';
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';

export class TouchButtonsMappingPaintable extends Paintable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    foregroundColor: number

    private paintableTable: Paintable[][] = new Array(0) [0]
                                                            ;

    private touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
public constructor (basicColor: BasicColor){

            super();
        var basicColor = basicColor
this.foregroundColor= basicColor!.intValue();
    
this.init();
    
}


    init(){

        try {
            this.paintableTable= this.createPaintableTable();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "updateRectangle", e);
    
}

}


                //@Throws(Exception.constructor)
            
    createPaintableTable(): Paintable[][]{

    var totalColumns: number = this.touchButtonLocationHelper!.getTotalColumns()!;
;
    

    var totalRows: number = this.touchButtonLocationHelper!.getTotalRows()!;
;
    

    var paintableTable: Paintable[][] = new Array(totalColumns) [totalRows]
                                                            ;
;
    

    var cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;
;
    

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;
;
    




                        for (
    var index: number = totalColumns -1;
index >= 0; index--)
        {




                        for (
    var rowIndex: number = totalRows -1;
rowIndex >= 0; rowIndex--)
        {
this.paintableTable[index]![rowIndex]= TouchButton.createButton(BasicTouchInputFactory.getInstance()!.NONE, TouchButtonBlankResource.getInstance(), commonButtons!.NORMAL_BUTTON, cellPositionFactory!.getInstanceColRow(index, rowIndex), this.touchButtonLocationHelper!.getColumnsRemainderHalf(), this.touchButtonLocationHelper!.getRowsRemainderHalf());
    
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paintableTable;
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var totalColumns: number = this.touchButtonLocationHelper!.getTotalColumns()!;
;
    

    var totalRows: number = this.touchButtonLocationHelper!.getTotalRows()!;
;
    




                        for (
    var index: number = totalColumns -1;
index >= 0; index--)
        {




                        for (
    var rowIndex: number = totalRows -1;
rowIndex >= 0; rowIndex--)
        {
this.paintableTable[index]![rowIndex]!.paint(graphics);
    
}

}

}


}
                
            

