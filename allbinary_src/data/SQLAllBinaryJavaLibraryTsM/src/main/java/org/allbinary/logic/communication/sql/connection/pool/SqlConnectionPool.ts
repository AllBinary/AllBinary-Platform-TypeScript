
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
        



import { Connection } from "../../../../../../../java/sql/Connection.js";

    
import { DriverManager } from "../../../../../../../java/sql/DriverManager.js";

    
import { SQLException } from "../../../../../../../java/sql/SQLException.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class SqlConnectionPool
            extends Object
         {
        

    private static readonly instance: SqlConnectionPool = new SqlConnectionPool();
        
        

    public static getInstance(): SqlConnectionPool{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private connectionHashMap: HashMap<Any, Any> = 
                null
            ;
        
        

    private readonly FIRST_NEW_CONNECTION_CREATED: string = "First New Connection Created: ";
        
        

    private readonly FIRST: string = "First ";
        
        

    private readonly NEW_CONNECTION_FOR: string = "New Connection For ";
        
        

    private readonly CREATED: string = " Created";
        
        

    private readonly NUMBER_OF_SQL_CONNECTIONS_FOR: string = "Number Of Sql Connections for: ";
        
        

    private readonly NUMBER_OF_SQL_CONNECTION_VECTORS: string = "Number Of Sql Connection Vectors: ";
        
        

    private readonly IS: string = " is ";
        
        

    private readonly CONNECTION_ALLREADY_CLOSED: string = "Connection AllReady Closed";
        
        

    private readonly METHOD_GET: string = "get()";
        
        

    private readonly METHOD_ADD: string = "add()";
        
        
private constructor (){

            super();
            }


                @Throws(SQLException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public get(url: string): Connection{
var url = url

    
                        if(this.connectionHashMap == 
                                    null
                                )
                        
                                    {
                                    this.connectionHashMap= HashMap<Any, Any>()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    put(FIRST_NEW_CONNECTION_CREATED +url, this, METHOD_GET)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);
    

                                    }
                                
                        else {
                            
    var connectionVector: Vector = this.connectionHashMap!.get(url as Object) as Vector;
        
        


    
                        if(connectionVector == 
                                    null
                                )
                        
                                    {
                                    connectionVector= Vector()

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(FIRST)
append(NEW_CONNECTION_FOR)
append(url)
append(CREATED)
put(stringBuffer!.toString(), this, METHOD_GET)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);
    

                                    }
                                
                             else 
    
                        if(connectionVector!.length == 0)
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    put(StringBuilder().
                            append(NEW_CONNECTION_FOR)!.append(url)!.append(CREATED)!.toString(), this, METHOD_GET)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        


    var size: number = connectionVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var sqlConnection: Connection = connectionVector!.get(i) as Connection;
        
        


    
                        if(!sqlConnection!.isClosed())
                        
                                    {
                                    remove(sqlConnection)
put(url, connectionVector)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    delete(0, stringBuffer!.length())
append(NUMBER_OF_SQL_CONNECTIONS_FOR)
append(url)
append(IS)
appendint(connectionVector!.length)
put(NUMBER_OF_SQL_CONNECTION_VECTORS +this.connectionHashMap!.size, this, METHOD_GET)
put(stringBuffer!.toString(), this, METHOD_GET)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sqlConnection as Connection;
    

                                    }
                                
}


                        }
                            

                        }
                            

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(NEW_CONNECTION_FOR)
append(url)
append(CREATED)
put(stringBuffer!.toString(), this, METHOD_GET)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DriverManager.getConnection(url);
    
}


                @Throws(SQLException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public add(url: string, sqlConnection: Connection){
var url = url
var sqlConnection = sqlConnection

    
                        if(!sqlConnection!.isClosed())
                        
                                    {
                                    
    var connectionVector: Vector


    
                        if(this.connectionHashMap == 
                                    null
                                )
                        
                                    {
                                    this.connectionHashMap= HashMap<Any, Any>()
connectionVector= Vector()
add(sqlConnection)

                                    }
                                
                        else {
                            connectionVector= this.connectionHashMap!.get(url as Object) as Vector

    
                        if(connectionVector == 
                                    null
                                )
                        
                                    {
                                    connectionVector= Vector()

                                    }
                                
add(sqlConnection)
put(url, connectionVector)

                        }
                            

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(NUMBER_OF_SQL_CONNECTIONS_FOR)
append(url)
append(IS)
appendint(connectionVector!.length)
put(NUMBER_OF_SQL_CONNECTION_VECTORS +this.connectionHashMap!.size, this, METHOD_ADD)
put(stringBuffer!.toString(), this, METHOD_ADD)

                                    }
                                

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGINGPOOL))
                        
                                    {
                                    put(CONNECTION_ALLREADY_CLOSED, this, METHOD_ADD)

                                    }
                                
}


}
                
            

