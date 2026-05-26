
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomScreen } from './CustomScreen.js';

export class ABCustomForm extends CustomScreen {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (title: string, items: ABCustomItem[], backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        }


    public size(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public setSelectedIndex(index: number){
}


    public getSelectedIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public deleteAll(){
}


    public delete(itemNum: number){
}


    public append(item: ABCustomItem): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public insert(itemNum: number, item: ABCustomItem){
}


    public set(itemNum: number, item: ABCustomItem){
}


    public get(itemNum: number): ABCustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABCustomItem.NULL_CUSTOM_ITEM;
    
}


    public getWidth(): number{



                            throw new RuntimeException();
                    
}


    public paint(graphics: Graphics){
}


    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}
                
            

