
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
        



import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { RectangleAdjustedAnimation } from "../../../../org/allbinary/animation/vector/RectangleAdjustedAnimation.js";

    
import { RectangleFilledAdjustedAnimation } from "../../../../org/allbinary/animation/vector/RectangleFilledAdjustedAnimation.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CommandTextItem } from "../../../../org/allbinary/graphics/form/item/CommandTextItem.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CustomItemInterface } from "../../../../org/allbinary/graphics/form/item/CustomItemInterface.js";

    

export class CommandCurrentSelectionForm extends ScrollCurrentSelectionForm {
        

    readonly selectedAnimationArray: Animation[] = new Array(16);
        
        

    readonly unSelectedAnimationArray: Animation[] = new Array(16);
        
        
public constructor (title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, rectangle, formType, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var moveForSmallScreen = moveForSmallScreen
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.this.initAnimations()
this.this.update(items)
}


    initAnimations(){

    var nullAnimation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        





                        for (
    var index: number = selectedAnimationArray!.length
                ;
        
        
--index >= 0; )
        {
this.selectedAnimationArray[index]= nullAnimation
}





                        for (
    var index: number = unSelectedAnimationArray!.length
                ;
        
        
--index >= 0; )
        {
this.unSelectedAnimationArray[index]= nullAnimation
}

}


    update(items: CustomItem[]){
    //var items = items




                        for (
    var index: number = items.length
                ;
        
        
--index >= 0; )
        {
this.this.update(index, items[index]!)
}

}


    update(index: number, item: CustomItem){
    //var index = index
    //var item = item

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        


    var buttonColor: BasicColor = basicColorFactory!.TRANSPARENT_GREY;
        
        


    var selectedButtonColor: BasicColor = basicColorFactory!.TRANSPARENT_RED;
        
        


    var width: number = item.getMinimumWidth()!;
        
        


    var height: number = item.getMinimumHeight()!;
        
        


    var adjustedBorder: number = 3;
        
        


    var offset: number =  -(halfBorder +adjustedBorder);
        
        


                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    this.selectedAnimationArray[index]= RectangleAdjustedAnimation(width +border -adjustedBorder, height +border -adjustedBorder, offset, offset, selectedButtonColor)

                                    }
                                
                        else {
                            this.selectedAnimationArray[index]= RectangleFilledAdjustedAnimation(width +border -adjustedBorder, height +border -adjustedBorder, offset, offset, selectedButtonColor)

                        }
                            
adjustedBorder= 4

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    this.unSelectedAnimationArray[index]= RectangleAdjustedAnimation(width +border -adjustedBorder, height +border -adjustedBorder, offset, offset, buttonColor)

                                    }
                                
                        else {
                            this.unSelectedAnimationArray[index]= RectangleFilledAdjustedAnimation(width +border -adjustedBorder, height +border -adjustedBorder, offset, offset, buttonColor)

                        }
                            
}


    public getSelectedCommand(): Command{

    var index: number = super.getSelectedIndex()!;
        
        


    var commandTextItem: CommandTextItem = this.get(index) as CommandTextItem;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandTextItem!.getCommand();
    
}


    public append(item: CustomItem): number{
    //var item = item

    var result: number = super.append(item)!;
        
        

this.this.update(result, item)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public delete(itemNum: number){
    //var itemNum = itemNum
super.delete(itemNum)
}


    public deleteAll(){
this.this.initAnimations()
super.deleteAll()
}


    public insert(itemNum: number, item: CustomItem){
    //var itemNum = itemNum
    //var item = item
super.insert(itemNum, item)
}


    public set(itemNum: number, item: CustomItem){
    //var itemNum = itemNum
    //var item = item
super.set(itemNum, item)
}


                //@Throws(Error::class)
            
    public paintItem(graphics: Graphics, index: number, item: CustomItemInterface, x: number, y: number): number{
    //var graphics = graphics
    //var index = index
    //var item = item
    //var x = x
    //var y = y
this.selectedAnimationArray[index]!.paint(graphics, x, y)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.paintItem(graphics, index, item, x, y);
    
}


                //@Throws(Error::class)
            
    public paintUnselectedItem(graphics: Graphics, index: number, item: CustomItemInterface, x: number, y: number): number{
    //var graphics = graphics
    //var index = index
    //var item = item
    //var x = x
    //var y = y
this.unSelectedAnimationArray[index]!.paint(graphics, x, y)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.paintUnselectedItem(graphics, index, item, x, y);
    
}


}
                
            

