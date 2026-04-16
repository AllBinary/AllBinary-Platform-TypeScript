
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
        



            import { Integer } from "../../../../../../../../java/lang/Integer.js";
        
import { Calendar } from "../../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../../java/util/Set.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

import { DownloadItemData } from "./DownloadItemData.js";

export class DownloadableItemView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private downloadableItem: DownloadableItem
public constructor (downloadableItem: DownloadableItem){

            super();
            var downloadableItem = downloadableItem
this.downloadableItem= downloadableItem;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toXmlNode");
    

                                    }
                                

    var hashMap: HashMap<any, any> = downloadableItem!.toHashMap()!;
        
        
;
    

    var totalTime: number = downloadableItem!.getValidTime()!.longValue()!;
        
        
;
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var year: number = calendar.get(Calendar.YEAR)!;
        
        
;
    

    var month: number = calendar.get(Calendar.MONTH)!;
        
        
;
    

    var day: number = calendar.get(Calendar.DAY_OF_MONTH)!;
        
        
;
    

    var hour: number = calendar.get(Calendar.HOUR)!;
        
        
;
    

    var minute: number = calendar.get(Calendar.MINUTE)!;
        
        
;
    

    var second: number = calendar.get(Calendar.SECOND)!;
        
        
;
    
calendar.setTimeInMillis(calendar.getTimeInMillis() +totalTime);
    

    var yearDelta: number = calendar.get(Calendar.YEAR)!;
        
        
;
    

    var monthDelta: number = calendar.get(Calendar.MONTH)!;
        
        
;
    

    var dayDelta: number = calendar.get(Calendar.DAY_OF_MONTH)!;
        
        
;
    

    var hourDelta: number = calendar.get(Calendar.HOUR)!;
        
        
;
    

    var minuteDelta: number = calendar.get(Calendar.MINUTE)!;
        
        
;
    

    var secondDelta: number = calendar.get(Calendar.SECOND)!;
        
        
;
    
hashMap!.put(DownloadItemData.VALID_TIME_YEARS, Integer(Integer.valueOf(yearDelta -year)));
    
hashMap!.put(DownloadItemData.VALID_TIME_MONTHS, Integer(Integer.valueOf(monthDelta -month)));
    
hashMap!.put(DownloadItemData.VALID_TIME_DAYS, Integer(Integer.valueOf(dayDelta -day)));
    
hashMap!.put(DownloadItemData.VALID_TIME_HOURS, Integer(Integer.valueOf(hourDelta -hour)));
    
hashMap!.put(DownloadItemData.VALID_TIME_MINUTES, Integer(Integer.valueOf(minuteDelta -minute)));
    
hashMap!.put(DownloadItemData.VALID_TIME_SECONDS, Integer(Integer.valueOf(secondDelta -second)));
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var node: Node = document.createElement(DownloadItemData.NAME)!;
        
        
;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var nameArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var name: string = nameArray[index]! as String;
        
        
;
    

    var value: string = hashMap!.get(name as Object);

                         as String;
        
        
;
    
value= stringUtil!.getInstance(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

