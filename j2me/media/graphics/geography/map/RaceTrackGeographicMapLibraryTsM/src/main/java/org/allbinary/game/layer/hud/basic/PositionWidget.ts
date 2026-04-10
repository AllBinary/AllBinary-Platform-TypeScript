
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

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicHud } from "../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    

export class PositionWidget extends BasicHud {
        

    public static toString(position: number): string{
var position = position

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(position.toString())

                        if(position == 1)
                        
                                    {
                                    stringBuffer!.append("st")

                                    }
                                
                             else 
                        if(position == 2)
                        
                                    {
                                    stringBuffer!.append("nd")

                                    }
                                
                             else 
                        if(position == 3)
                        
                                    {
                                    stringBuffer!.append("rd")

                                    }
                                
                        else {
                            stringBuffer!.append("th")

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    private position: number= 0

    private positionString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (position: number, location: number, direction: number, basicColor: BasicColor)                        

                            : super(location, direction, 10, 40, 2, basicColor){

            super();
            var position = position
var location = location
var direction = direction
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.position;
    
}


    public set(position: number){
var position = position
this.position= position
this.positionString= PositionWidget.toString(this.get())
}


    public paint(graphics: Graphics){
var graphics = graphics
super.paint(graphics, positionString)
}


}
                
            

