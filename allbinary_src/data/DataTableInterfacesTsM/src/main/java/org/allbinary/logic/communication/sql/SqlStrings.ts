
        /* Generated Code Do Not Modify */
        




export class SqlStrings
            extends Object
         {
        

    private static readonly instance: SqlStrings = new SqlStrings();
        
        

    public static getInstance(): SqlStrings{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly CREATE_DATABASE: string = "CREATE DATABASE ";
        
        

    public readonly DROP_TABLE: string = "DROP TABLE ";
        
        

    public readonly CREATE_TABLE: string = "CREATE TABLE ";
        
        

    public readonly START: string = " (";
        
        

    public readonly SELECT: string = "SELECT ";
        
        

    public readonly FROM: string = " FROM ";
        
        

    public readonly SELECT_ALL: string = "SELECT *";
        
        

    public readonly WHERE: string = " WHERE ";
        
        

    public readonly AND: string = " AND ";
        
        

    public readonly UPDATE: string = "UPDATE ";
        
        

    public readonly SET: string = " SET ";
        
        

    public readonly SELECT_ALL_FROM: string = this.SELECT_ALL +this.FROM;
        
        

    public readonly DELETE: string = "DELETE";
        
        

    public readonly LIKE_QUOTE: string = " LIKE \"";
        
        

    public readonly INSERT_INTO: string = "INSERT INTO ";
        
        

    public readonly VALUES: string = " VALUES ('";
        
        

    public readonly ORDER_BY: string = "ORDER BY";
        
        

    public readonly COUNT: string = "COUNT(";
        
        

    public readonly ASC: string = "ASC";
        
        

    public readonly DESC: string = "DESC";
        
        

    public readonly PRIMARY_KEY: string = "PRIMARY KEY(";
        
        

    public readonly END: string = ") )";
        
        

    public readonly EQUAL_QUOTE: string = " = \"";
        
        

    public readonly CLOSE_QUOTE: string = "\"";
        
        

    public readonly EQUAL_QUOTE_NO_SPACE: string = "=\"";
        
        

    public readonly ESCAPE: string = "\\";
        
        

    public readonly DOUBLE_ESCAPE: string = "\\\\";
        
        

    public readonly MORE_THAN_QUOTE: string = " > \"";
        
        

    public readonly LESS_THAN_QUOTE: string = " < \"";
        
        

    public readonly SINGLE_QUOTE_COMMA_SEP: string = "','";
        
        

    public readonly ID: string = "ID";
        
        

    public readonly SQL_STATEMENT_LABEL: string = "SQL Statement: ";
        
        

    public readonly COLUMN_VALUE: string = "\nColumn Value: ";
        
        

    public readonly CREATE_RETURN: string = " Created Successfully";
        
        

    public readonly FIELD_VALUE: string = "\nField Value: ";
        
        

}
                
            

