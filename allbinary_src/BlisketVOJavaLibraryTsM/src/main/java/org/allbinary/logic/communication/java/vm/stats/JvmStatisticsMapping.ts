
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { TableMappingInterface } from '../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { StdUtil } from '../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JvmStatistics } from './JvmStatistics.js';
//not GWT import const JvmStatistics = globalThis.org.allbinary.logic.communication.java.vm.stats.JvmStatistics;

                import { JvmStatisticsData } from './JvmStatisticsData.js';
//not GWT import const JvmStatisticsData = globalThis.org.allbinary.logic.communication.java.vm.stats.JvmStatisticsData;

                
export class JvmStatisticsMapping extends JvmStatistics implements TableMappingInterface {
        

public constructor (){
            super();
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(JvmStatisticsData.FREE_MEMORY_BYTES, this.getFreeMemoryBytesString());
    
hashMap!.put(JvmStatisticsData.FREE_MEMORY_KILOBYTES, this.getFreeMemoryKilobytesString());
    
hashMap!.put(JvmStatisticsData.FREE_MEMORY_MEGABYTES, this.getFreeMemoryMegabytesString());
    
hashMap!.put(JvmStatisticsData.MAX_MEMORY_BYTES, this.getMaxMemoryBytesString());
    
hashMap!.put(JvmStatisticsData.MAX_MEMORY_KILOBYTES, this.getMaxMemoryKilobytesString());
    
hashMap!.put(JvmStatisticsData.MAX_MEMORY_MEGABYTES, this.getMaxMemoryMegabytesString());
    
hashMap!.put(JvmStatisticsData.NUMBER_OF_THREADS, this.getNumberOfThreadsString());
    
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_BYTES, this.getTotalMemoryBytesString());
    
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_KILOBYTES, this.getTotalMemoryKilobytesString());
    
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_MEGABYTES, this.getTotalMemoryMegabytesString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JvmStatisticsData.NAME;
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.getFreeMemoryBytesString());
    
vector.add(this.getFreeMemoryKilobytesString());
    
vector.add(this.getFreeMemoryMegabytesString());
    
vector.add(this.getMaxMemoryBytesString());
    
vector.add(this.getMaxMemoryKilobytesString());
    
vector.add(this.getMaxMemoryMegabytesString());
    
vector.add(this.getNumberOfThreadsString());
    
vector.add(this.getTotalMemoryBytesString());
    
vector.add(this.getTotalMemoryKilobytesString());
    
vector.add(this.getTotalMemoryMegabytesString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



