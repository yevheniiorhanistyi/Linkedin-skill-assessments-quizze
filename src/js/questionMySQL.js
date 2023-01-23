const MySQL = [

    {
        question: ' When you have a subquery inside of the main query, which query is executed first? ',

        answers: [
            `The subquery is never executed. Only the main query is executed.`,
            `They are executed at the same time`,
            `the main query`,
            `the subquery`,],

        correct: 3,
    },
    {
        question: ' You need to export the entire database, including the database objects, in addition to the data. Which command-line tool do you use? ',

        answers: [
            `mysqlexport`,
            `mysqladmin`,
            `mysqldump`,
            `mysqld`],

        correct: 2,
    },
    {
        question: ' You must ensure the accuracy and reliability of the data in your database. You assign some constraints to limit the type of data that can go into a table. What type of constraints are you assigning? ',

        answers: [
            `row level`,
            `database level`,
            `column level`,
            `function level`],

        correct: 2,
    },
    {
        question: ' Which option of most MySQL command-line programs can be used to get a description of the program`s different options? ',

        answers: [
            `--options`,
            `?`,
            `--help`,
            `-h`],

        correct: 2,
    },
    {
        question: ` MySQL uses environment variables in some of the programs and command-line operations. 
Which variable is used by the shell to find MySQL programs? `,

        answers: [
            `DIR`,
            `HOME`,
            ` PATH`,
            `MYSQL_HOME`],

        correct: 2,
    },
    {
        question: ' How can you create a stored procedure in MySQL? ',

        answers: [
            `
1 CREATE PROCEDURE P () AS
2 BEGIN
3 END;
`,
            `
1 CREATE PROCEDURE P ()
2 BEGIN
3 END
`,
            `
1 CREATE PROCP
2 BEGIN
3 END;
`,

            `
1 CREATE PROC P AS O
2 BEGIN
3 END;
`],

        correct: 1,
    },
    {
        question: ` If you were building a table schema to store student grades as a letter (A, B, C, D, or F) which column 
type would be the best choice? `,

        answers: [
            `ENUM`,
            `OTEXT`,
            `VARCHAR`,
            `LONGTEXT`],

        correct: 0,
    },
    {
        question: ' Management has requested that you build an employee database. You start with the employee table. What is the correct syntax? ',

        answers: [
            `
    CREATE TABLE employee (
    employeeID char(10),
    firstName varchar(50),
    lastName varchar(50),
    phone varchar(20),
    address varchar(50),
    PRIMARY KEY ON employeeID
    );
`,

            `
    CREATE TABLE employee (
    employeeID char(10),
    firstName varchar(50),
    lastName varchar(50),
    phone varchar(20),
    address varchar(50),
    PRIMARY KEY employeeID
    );
`,

            `
    CREATE TABLE IF EXISTS employee (
    employeeID char(10),
    firstName varchar(50),
    lastName varchar(50),
    phone varchar(20),
    address varchar(50),
    PRIMARY KEY (employeeID)
    );
`,

            `
    CREATE TABLE IF NOT EXISTS employee (
    employeeID char(10),
    firstName varchar(50),
    lastName varchar(50),
    phone varchar(20),
    address varchar(50),
    PRIMARY KEY (employeeID)
    );
`],

        correct: 3,
    },
    {
        question: ' You are working with the tables as shown in this diagram. You need to generate the list of customers who purchased certain car models. Which SQL clause do you use? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `LIKE`,
            `IN`,
            `BETWEEN`,
            `HAVING`],

        correct: 1,
    },
    {
        question: ' Which query would NOT be used to administer a MySQL server? ',

        answers: [
            `USE db`,
            `SELECT column FROM tbl`,
            `SHOW COLUMNS FROM tbl`,
            `SHOW TABLES`],

        correct: 1,
    },
    {
        question: ' MySQL server can operate in different SQL modes, depending on the value of the sql_mode system variable. Which mode changes syntax and behavior to conform more closely to standard SQL? ',

        answers: [
            `TRADITIONAL`,
            `ANSI`,
            `MSSQL`,
            `STRICT`],

        correct: 1,
    },
    {
        question: ' MySQL programs are a set of command-line utilities that are provided with typical MySQL distributions. MySQL is designed to be a database. ',

        answers: [
            `database and programming`,
            `user and administrator`,
            `client and server`,
            `syntax and objects`],

        correct: 2,
    },
    {
        question: ' Which MySQL command shows the structure of a table? ',

        answers: [
            `INFO table;`,
            `SHOW table;`,
            `STRUCTURE table;`,
            `DESCRIBE table;`],

        correct: 3,
    },
    {
        question: ' MySQL uses security based on \_ for all connections, queries, and other operations that users can attempt to perform. ',

        answers: [
            `administrator schema`,
            `encrypted algorithms`,
            `user settings`,
            `access control lists`],

        correct: 3,
    },
    {
        question: ' Which MySQL command modifies data records in a table? ',

        answers: [
            `UPDATE`,
            `MODIFY`,
            `CHANGE`,
            `ALTER`],

        correct: 0,
    },
    {
        question: ' What is the best type of query for validating the format of an email address in a MySQL table? ',

        answers: [
            `a SQL query using partitions`,
            `a SQL query using IS NULL`,
            `a SQL query using a regular expression`,
            `a SQL query using LTRIM Or RTRIM`],

        correct: 2,
    },
    {
        question: ' In MySQL, queries are always followed by what character? ',

        answers: [
            ` line break`,
            `colon`,
            `semicolon`,
            `period`],

        correct: 2,
    },
    {
        question: ' How can you remove a record using MySQL? ',

        answers: [
            `DELETE`,
            `DELETE FROM`,
            `REMOVE`,
            `REMOVE FROM`],

        correct: 1,
    },
    {
        question: ' Which choice is NOT a statement you would use to filter data? ',

        answers: [
            `GROUP BY`,
            ` WHERE`,
            `LIMIT`,
            `LIKE`],

        correct: 0,
    },
    {
        question: ' What does the following SQL statement return? ',

        multicode: `SELECT * FROM Employees WHERE EmployeeName LIKE 'a%'`,

        answers: [
            `It records in the Employees table where the value in the EmployeeName column doesn't have an "a".`,
            `It records in the Employees table where the value in the EmployeeName column starts with "a".`,
            `It records in the Employees table where the value in the EmployeeName column has an "a".`,
            `It records in the Employees table where the value in the EmployeeName column ends with "a".`],

        correct: 1,
    },
    {
        question: ' In `SELECT * FROM clients;` what does clients represent? ',

        answers: [
            `a SQL query`,
            `a SQL statement`,
            `a database`,
            `a table`],

        correct: 3,
    },
    {
        question: ' How does MySQL differ from SQL? ',

        answers: [
            `SQL is a standard language for retrieving and manipulating data from structured databases. 
 MySQL is a nonrelational database management system that is used to manage SQL databases.`,
            `SQL is a standard language for retrieving and manipulating data from structured databases. 
 MySQL is a relational database management system that is used to manage SQL databases.`,
            `They are not different. MySQL and SQL refer to the same thing.`,
            `My SQL is a language, and SQL is a software application.`],

        correct: 1,
    },
    {
        question: ' If you need to order a table of movies by name, which query will work? ',

        answers: [
            `SELECT \* FROM movies GROUP BY name`,
            `SELECT \* FROM movies ORDER BY name`,
            `SELECT \* FROM movies ORDER TABLE by name`,
            `SELECT \* FROM movies FILTER BY name`],

        correct: 1,
    },
    {
        question: ' A trigger is a database object that is associated with a table, and that activates when a particular event occurs for the table. Which three events are these? ',

        answers: [
            `INSERT, UPDATE, DELETE`,
            `CREATE, ALTER, DROP`,
            `OPEN, FETCH, CLOSE`,
            `DECLARE, SET, SELECT`],

        correct: 0,
    },
    {
        question: ' You are working with very large tables in your database. Which SQL clause do you use to prevent exceedingly large query results? ',

        answers: [
            `UNIQUE`,
            `LIMIT`,
            `DISTINCT`,
            `CONSTRAINT`],

        correct: 1,
    },
    {
        question: ' What is the default port for MySQL Server? ',

        answers: [
            `25`,
            `990`,
            `0`,
            `3306`],

        correct: 3,
    },
    {
        question: ' How can you filter duplicate data while retrieving records from a table? ',

        answers: [
            `DISTINCT`,
            `WHERE`,
            `LIMIT`,
            `AS`],

        correct: 0,
    },
    {
        question: ' What is the difference between DROP and TRUNCATE? ',

        answers: [
            `They both refer to the same operation of deleting the table completely.`,
            `They both refer to the same operation of clearing the table, but keeping its definition intact.`,
            `TRUNCATE deletes table completely, removing its definition as well. DROP clears the table but does not delete the definition.`,
            `DROP deletes table completely, removing its definition as well. TRUNCATE clears the table but does not delete the definition.`],

        correct: 3,
    },
    {
        question: ' How do you select every row in a given table named "inventory"? ',

        answers: [
            `SELECT all FROM inventory;`,
            `FROM inventory SELECT all;`,
            `FROM inventory SELECT \*;`,
            `SELECT \* FROM inventory;`],

        correct: 3,
    },
    {
        question: ' In an efficiently designed relational database, what does every table have? ',

        answers: [
            `set of triggers`,
            `sequential id field`,
            `minimum of three columns`,
            `primary key`],

        correct: 3,
    },
    {
        question: ' MySQL option files provide a way to specify commonly used options so that they need not be entered on the command line each time you run a program. What is another name for the option files? ',

        answers: [
            `variable settings`,
            `configuration files`,
            `help files`,
            `default settings`],

        correct: 1,
    },
    {
        question: ' After installing MySQL, it may be necessary to initialize the \_ which may be done automatically with some MySQL installation methods. ',

        answers: [
            `storage engine`,
            `user accounts`,
            `grant tables`,
            `data directory`],

        correct: 3,
    },
    {
        question: ' You need to export the data in the customers table into a CSV file, with columns headers in the first row. Which clause do you add to your MySQL command? ',

        answers: [
            `JOIN`,
            `WITH HEADERS`,
            `UNION`,
            `WITH COLUMNS`],

        correct: 2,
    },
    {
        question: ' One form of backup, replication, enables you to maintain identical data on multiple servers, as a \_ configuration. ',

        answers: [
            `remote-local`,
            `parent-child`,
            `master-slave`,
            `logical-physical`],

        correct: 2,
    },
    {
        question: ' What is the requirement for using a subquery in the SELECT clause? ',

        answers: [
            `the subquery must use an aggregate function.`,
            `the subquery must refer to the same table as the main query.`,
            `the subquery must return a single value.`,
            `the subquery must return at least one value.`],

        correct: 2,
    },
    {
        question: ' Each time MySQL is upgraded, it is best to execute mysql_upgrade, which looks for incompatibilities with the upgraded MySQL server. What does this command do, upon finding a table with a possible incompatibility? ',

        answers: [
            `it performs a table check and, if problems are found, 
 attempts a table repair.`,
            `it stops and notifies the server administrator that the upgrade cannot complete 
 until the incompatibility issue are resolved.`,
            `it provides a full report of the table specifications 
 and the incompatibilities to the server administrator.`,
            `it performs a table check and, if problems are found, 
 displays the information for the server administrator to take action.`],

        correct: 0,
    },
    {
        question: ' What mysql statement is used to check which accounts have specific privileges? ',

        answers: [
            `show grants (displays the privileges and roles that are assigned to a MySQL user account or role)`,
            `show privileges (shows the list of system privileges that the MySQL server supports)`,
            `show access`,
            `show user permissions`],

        correct: 0,
    },
    {
        question: ' What cannot have a trigger associated with it? ',

        answers: [
            `temporary table`,
            `system table`,
            `large table`,
            `new table`],

        correct: 1,
    },
    {
        question: ' Later versions of mysql support the native json data type for storing json documents. What is a drawback of json columns? ',

        answers: [
            `inefficient for storing json documents`,
            `cannot be indexed directly`,
            `documents cannot be validated when stored in json columns`,
            `cannot be normalized`],

        correct: 1,
    },
    {
        question: ' Which statement is true for the diagram below? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `carid is the primary key for purchases`,
            `carid is the foreign key for cars.carid`,
            `customerid is the foreign key for customers.id`,
            `customerid is the primary key for purchases`],

        correct: 2,
    },
    {
        question: ' Which statement can you use to load data from a file into the table? ',

        answers: [
            `cat file|mysql`,
            `load data infile (correct if the file is already on the server)`,
            `load data local infile (also correct but only if the file is from the client)`,
            `extended insert statement`],

        correct: 1,
    },
    {
        question: ' You are working with the tables as shown in this diagram. You need to make sure that any record added to the purchases table consists of a customerID, which already exists in the customers table, and a carID, which already exists in the cars table. You decide to use a trigger to do the validation. Which one do you use? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `AFTER INSERT`,
            `BEFORE INSERT`,
            `CROSS JOIN`,
            `IF EXISTS`],

        correct: 1,
    },
    {
        question: ' Which is the correct syntax of an extended insert statement? ',

        answers: [
            `insert into cars (make, model, year) values ('Ford', 'Mustang', 2002)
      ('Mercedes', 'C', 2003)`,

            `insert into cars (make, model, year) values ('Ford', 'Mustang', 2002)
      values ('Mercedes', 'C', 2003)`,

            `insert into cars (make, model, year) extended ('Ford', 'Mustang', 2002),
      ('Mercedes', 'C', 2003)`,

            `insert into cars (make, model, year) values ('Ford', 'Mustang', 2002),
      ('Mercedes', 'C', 2003)`],

        correct: 3,
    },
    {
        question: ' You need to make an exact copy of a table, with all columns and indexes. How can you get all of the information needed to accomplish this? ',

        answers: [
            `create table`,
            `clone table`,
            `insert into`,
            `show create table`],

        correct: 3,
    },
    {
        question: ' you need to make your mysql system secure against attackers. What are you _not_ supposed to do? ',

        answers: [
            `Run MySQL server as a normal user.`,
            `Grant PROCESS or SUPER privilege to other users.`,
            `Run MySQL server as the unix root user.`,
            `Use the compressed protocol.`],

        correct: 2,
    },
    {
        question: ' You manage a database with a table "customers". You created a temporary table also called "customers" with which you are working for the duration of your session. You need to recreate the temporary table with different specs. Which command do you need to run first? ',

        answers: [
            `CREATE TEMPORARY TABLE customers;`,
            `DROP TEMP TABLE customers;`,
            `DROP TABLE customers;`,
            `DROP TEMPORARY TABLE customers;`],

        correct: 3,
    },
    {
        question: ' You need to run a complex query with recursive subqueries, but without creating a stored procedure or a function. Which command or clause do you use? ',

        answers: [
            `COLLATE`,
            `UNION`,
            `FULL JOIN`,
            `WITH`],

        correct: 3,
    },
    {
        question: ' Which choice is not a processing algorithm for database views? ',

        answers: [
            `merge`,
            `updatable`,
            `temptable`,
            `undefined`],

        correct: 1,
    },
    {
        question: ' What is the MySQL `perror` command-line utility used for? ',

        answers: [
            `to display your version of MySQL`,
            `to display operating system error codes`,
            `to display default settings that are in error`,
            `to display storage error codes`],

        correct: 3,
    },
    {
        question: ' How can you list all columns for a given table? ',

        answers: [
            `SHOW table COLUMNS;`,
            `SHOW COLUMNS FROM table;`,
            `LIST table COLUMNS;`,
            `SELECT COLUMNS FROM table;`],

        correct: 1,
    },
    {
        question: ' How would you list the full set of tables in the currently selected database? ',

        answers: [
            `SELECT \* FROM DATABASE;`,
            `SHOW TABLES;`,
            `LIST TABLES;`,
            `SELECT ALL TABLES;`],

        correct: 1,
    },
    {
        question: ' Which choice is not one of the table maintenance statements? ',

        answers: [
            `CHECK TABLE;`,
            `CREATE TABLE;`,
            `ANALYZE TABLE;`,
            `OPTIMIZE TABLE;`],

        correct: 1,
    },
    {
        question: ' In which table does MySQL store passwords for user accounts? ',

        answers: [
            `mysql.accounts;`,
            `mysql.passwords;`,
            `mysql.admin;`,
            `mysql.user;`],

        correct: 3,
    },
    {
        question: ' Management has requested that you build an employee database. You need to include each employee`s current position and salary, as well as all prior positions and salaries with the company. You decide to use a one-to-many structure: an employee table with the main information such as name and address, and an employment table with position and salary history. You can use the employeeID field to connect them. What is employment.employeeID an example of? ',

        answers: [
            `primary key;`,
            `secondary key;`,
            `foreign key;`,
            `alternate key;`],

        correct: 2,
    },
    {
        question: ' In recent versions of MySQL (8.0+), what`s the correct syntax to declare a CTE (Common Table Expression)? ',

        answers: [
            `WITH (SELECT id FROM users) as cte, SELECT ...`,
            `WITH (SELECT id FROM users) as cte SELECT ...`,
            `WITH cte as (SELECT id FROM users), SELECT ...`,
            `WITH cte as (SELECT id FROM users) SELECT ...`],

        correct: 3,
    },
    {
        question: ' What is one reason to introduce data redundancy into a normalized database design? ',

        answers: [
            `to reduce corruption in data`,
            `to reduce storage space`,
            `to make the system faster`,
            `to prevent data anomalies`],

        correct: 0,
    },
    {
        question: ' The code snippet below is used to read data from an XML file into a table. Which XML structure is \_not\_ supported by the statement? ',

        multicode: `mysql
LOAD XML LOCAL INFILE 'cars.xml'
INTO TABLE cars
ROWS IDENTIFIED BY '&ltcar&gt';
`,

        answers: [
            `
&ltcar&gt
   &ltfield name="make"&gt Lexus &lt/field&gt
   &ltfield name="model"&gt IS300 &lt/field&gt
   &ltfield name="make"&gt 2016 &lt/field&gt
&lt/car&gt
`,

            `
&ltcar name="make"&gt Dodge &lt/car&gt
&ltcar name="model"&gt Ram &lt/car&gt
&ltcar name="year"&gt 2000 &lt/car&gt
`,

            `
&ltcar make="Ford" model="Mustang" year="2002"/&gt
`,

            `
&ltcar year="2010"&gt
    &ltmake&gtMercedes&lt/make&gt &ltmodel&gt C-Class&lt/model&gt
&lt/car&gt
`],

        correct: 1,
    },
    {
        question: ' You are loading data into a table. Which command can you use to make sure that all data is inserted and duplicates rows are discarded? ',

        answers: [
            `INSERT IGNORE`,
            `INSERT UNIQUE`,
            `INSERT INTO`,
            `INSERT DISTINCT`],

        correct: 0,
    },
    {
        question: ' You are working with the tables as shown in this diagram. You need to get the number of cars sold per the home state of each customer`s residence. How can you accomplish this? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `SELECT state, COUNT(*) FROM customers WHERE ID IN (SELECT customerID FROM purchases) GROUP BY state;`,
            `SELECT state, COUNT(*) FROM customers c LEFT JOIN purchases p ON c.ID = p.customerID GROUP BY state;`,
            `SELECT state, COUNT(*) FROM customers c, purchases p WHERE c.ID = p.customerID GROUP BY state;`,
            `SELECT state, COUNT(*) FROM customers GROUP BY state;`],

        correct: 2,
    },
    {
        question: ' In data migration, there is often a need to delete duplicate rows as part of data cleanup. Which statement works best? ',

        answers: [
            `DELETE DUPS`,
            `DELETE DISTINCT`,
            `DELETE JOIN`,
            `DELETE WITH`],

        correct: 2,
    },
    {
        question: ' When working with MySQL cursor, what must you also declare? ',

        answers: [
            '`DEFAULT` value',
            '`RETURN` variable',
            '`SQLEXCEPTION` routine',
            '`NOT FOUND` handler'],

        correct: 3,
    },
    {
        question: ' Which type of backup includes all the changes made to the data since the last full backup was performed? ',

        answers: [
            `snapshot`,
            `logical`,
            `differential`,
            `incremental`],

        correct: 2,
    },
    {
        question: ' You need to restore a MySQL database from a backup file. Which command-line tool do you use for the actual data import, after re-creating the database? ',

        answers: [
            `mysqld`,
            `mysql`,
            `mysqladmin`,
            `mysqldump`],

        correct: 1,
    },
    {
        question: ' You are importing data as JSON into a new table. You run CREATE TABLE json_data ( city JSON ); and insert rows into this table. What is the correct syntax to see the list of cities? ',

        answers: [
            `SELECT city FROM json_data;`,
            `SELECT city->>'$.name' city FROM json_data;`,
            `SELECT city.name city FROM json_data;`,
            `SELECT city->'$.name' city FROM json_data;`],

        correct: 1,
    },
    {
        question: ' If you want to use MyISAM instead of InnoDB, which option do you need to specify in the CREATE TABLE statement? ',

        answers: [
            `ENGINE`,
            `PARTITION`,
            `STORAGE`,
            `TABLESPACE`],

        correct: 0,
    },
    {
        question: ' You are working with the table in this diagram. You want to use full-text search to find the customers who live on a street or a drive. What is the command to do that? ',

        img: 'img/mySQL/q67.png',

        answers: [

            `
SELECT *
FROM customers
WHERE address MATCH 'Street' OR 'Drive';
`,

            `
SELECT *
FROM customers
WHERE MATCH(address) IN ('street, drive');
`,

            `
SELECT *
FROM customers
WHERE address MATCH 'Street' OR address MATCH 'Drive';
`,

            `
SELECT *
FROM customers
WHERE MATCH(address) AGAINST ('street, drive');
`],

        correct: 3,
    },
    {
        question: ' Which query lists the databases on the current server? ',

        answers: [
            `SHOW DATABASES;`,
            `LIST ALL DATABASES;`,
            `LIST DATABASES;`,
            `SHOW DB;`],

        correct: 0,
    },
    {
        question: ' What is the product of the database designing phase? ',

        answers: [
            `all tables, columns, data types, indexes and their relationships`,
            `a list of entities, their relationship, and constraints`,
            `all tables and their names, which are needed to implement the logical model`,
            `a list of entities, their relationship, constraints, data types, and cardinalities`],

        correct: 3,
    },
    {
        question: ' Which choice is _not_ a valid model for a stored procedure parameter? ',

        answers: [
            `INOUT`,
            `IN`,
            `OUT`,
            `IN OUT`],

        correct: 3,
    },
    {
        question: ' What is the advantage of using a temporary table instead of a heap table? ',

        answers: [
            `The temporary table will be dropped when the database is restarted.`,
            `Temporary tables can be shared among clients, which makes them more usable in group development environments.`,
            `The temporary table will be dropped as soon as your session disconnects.`,
            `Creating a temporary table does not require any special privileges.`],

        correct: 2,
    },
    {
        question: ' Which is a valid constructor for a class named User? ',

        answers: [
            `public construct User() {}`,
            `public User() {}`,
            `public instance User() {}`,
            `public init User() {}`],

        correct: 1,
    },
    {
        question: ' What is the maximum number of columns that can be used by a single table index? ',

        answers: [
            2,
            4,
            8,
            16],

        correct: 3,
    },
    {
        question: ' Which command will return a list of triggers in the current database? ',

        answers: [
            `DISPLAY TRIGGERS;`,
            `SHOW TRIGGERS;`,
            `SELECT ALL TRIGGERS;`,
            `SELECT * FROM information_schema.triggers;`],

        correct: 1,
    },
    {
        question: ' Which statement is true about TIMESTAMP and DATETIME data types? ',

        answers: [
            `TIMESTAMP values require more bytes for storage than DATETIME values.`,
            `TIMESTAMP is stored without timezone, and DATETIME is stored in UTC values.`,
            `TIMESTAMP and DATETIME are both stored without time zone.`,
            `TIMESTAMP is stored in UTC values, and DATETIME is stored in without time zone.`],

        correct: 2,
    },
    {
        question: ' What is the equivalent of the mysqladmin reload command? ',

        answers: [
            `mysqladmin flush-threads`,
            `mysqladmin flush-tables`,
            `mysqladmin flush-privileges`,
            `mysqladmin flush-all`],

        correct: 2,
    },
    {
        question: ' Explain the security aspect of stored procedures. ',

        answers: [
            `Stored procedures are not secure, 
 because they can be executed from the command line as the root user`,
            `Stored procedures are secure, 
 because the owner of the stored procedure can decide to whom access is granted`,
            `Stored procedures are secure, 
 because applications can be given access to stored procedures and not any underlying variables`,
            `Stored procedures are not secure, 
 because they can execute statements to drop tables or bulk delete data`],

        correct: 2,
    },
    {
        question: ' How would you retrieve data on all the customers where no phone number is stored? ',

        answers: [
            `SELECT * FROM customers WHERE PhoneNumber = NULL;`,
            `SELECT * FROM customers WHERE PhoneNumber IS NOT VALID;`,
            `SELECT * FROM customers WHERE PhoneNumber IS NULL;`,
            `SELECT * FROM customers WHERE PhoneNumber IS UNKNOWN;`],

        correct: 2,
    },
    {
        question: ' In the diagram below, the price field is declared as type DECIMAL. What would be a more efficient declaration for this field? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `FLOAT`,
            `DECIMAL(10,2)`,
            `NUMERIC`,
            `DOUBLE`],

        correct: 1,
    },
    {
        question: ' Which choice is `not` an available string type for a column? ',

        answers: [
            `ENUM`,
            `SET`,
            `BIT`,
            `CHAR`],

        correct: 2,
    },
    {
        question: ' This diagram shows what type of relationship between customers and cars? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `one-to-many`,
            `parent-child`,
            `many-to-many`,
            `many-to-one`],

        correct: 2,
    },
    {
        question: ' A stored routine is a set of SQL statements stored on the server and takes form as either a procedure or a function. Which statement cannot be used inside stored routines? ',

        answers: [
            `SELECT`,
            `USE`,
            `SET`,
            `DECLARE`],

        correct: 1,
    },
    {
        question: ' When a new student is added to a new database, you want new records to be created in the related tables such as Exam, Score and Attendance. How would you accomplish this? ',

        answers: [
            `trigger`,
            `regular expression`,
            `view`,
            `index`],

        correct: 0,
    },
    {
        question: ' In the diagram below, the ID fields are declared as type CHAR instead of INT . Which is NOT one of the possible reasons behind that decision? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `The ID field needs to include letters and not just numbers.`,
            `You can have a consistent format across all of the tables that require ID fields.`,
            `The ID field needs to have leading 0s, which the INT data type would truncate.`,
            `The 'CHAR(10)' data type is more efficient and space-saving.`],

        correct: 3,
    },
    {
        question: ' Why would you use a common table expression (CTE)? ',

        answers: [
            `To define queries for later reuse for the duration of the current session`,
            `To create temporary tables that can be used to pre-select often-used result sets.`,
            `To calculate a new single value from a result set and return it to the query parser.`,
            `To break down complex queries and allow reuse within a query.`],

        correct: 3,
    },
    {
        question: ' Which option modifier tells a program not to exit with an error if it does not recognize the option, but instead to issue a warning? ',

        answers: [
            `--verbose`,
            `--skip`,
            `--skip-error`,
            `--loose`],

        correct: 3,
    },
    {
        question: ' What does this SQL statement return? ',

        multicode: `
SELECT name FROM students WHERE name REGEXP '^to';
`,

        answers: [
            `all names starting with "to," such as Tommy or Tony`,
            `all names with "to," such as Roberto and Tommy`,
            `all names without "to," such as Samantha or Kathryn`,
            `all names ending with "to," such as Roberto`],

        correct: 0,
    },
    {
        question: ' You are working with the tables as shown in the diagram. You need to generate the list of price totals for each make and model of car, with subtotals for each make, and the grand total of all prices. Which SQL clause do you use? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `UNION`,
            `SHOW TOTALS`,
            `UNION ALL`,
            `WITH ROLLUP`],

        correct: 3,
    },
    {
        question: ' The left and right joins are also known as \_. ',

        answers: [
            `Inner Join`,
            `Natural Join`,
            `Outer Join`,
            `Cartesian Join`],

        correct: 2,
    },
    {
        question: ' What is the valid way to create a database view in MySQL? ',

        answers: [
            `CREATE VIEW v1 SELECT * FROM t1 WHERE col1 > 10;`,
            `CREATE VIEW v1 AS BEGIN SELECT * FROM t1 END;`,
            `CREATE VIEW v1 BEGIN SELECT * FROM t1 END;`,
            `CREATE VIEW v1 AS SELECT * FROM t1;`],

        correct: 3,
    },
    {
        question: ' How are permissions implemented in MySQL? ',

        answers: [
            `encrypted algorithms`,
            `access control lists`,
            `user settings`,
            `administrator schema`],

        correct: 1,
    },
    {
        question: ' Inside a transaction, several operations need to be performed. What would you do if an exception happens during that transaction? ',

        answers: [
            `UNDO`,
            `UNCOMMIT`,
            `ROLLBACK`,
            `REVERSE`],

        correct: 2,
    },
    {
        question: ' What function finds the current time or date in MySQL? ',

        answers: [
            `DATE()`,
            `GETDATE()`,
            `CURDATE()`,
            `CURRENT()`],

        correct: 2,
    },
    {
        question: ' What is the correct usage of ENUM in MySQL? ',

        answers: [
            `Create table size (ENUM ('Small','Medium','Large'));`,
            `Create table ENUM (name ('Small','Medium','Large'));`,
            `Create table size (name: ENUM['Small','Medium','Large']);`,
            `Create table size (name ENUM('Small','Medium','Large'));`],

        correct: 3,
    },
    {
        question: ' The mysqldump command cannot generate output in **\_**. ',

        answers: [
            `JSON`,
            `CSV`,
            ` XML`,
            `TXT`],

        correct: 0,
    },
    {
        question: ' You are working with the tables as shown in this diagram. You need to generate the list of all cars, whether or not they had been sold, with the purchase date of the cars that were sold. Which statement accomplishes that? ',

        img: 'img/mySQL/q80.png',

        answers: [
            `
SELECT cars.*, purchases.date
FROM cars RIGHT JOIN purchases
ON cars.ID = purchases.carID;
`,

            `
SELECT cars.*, purchases.date
FROM cars INNER JOIN purchases
ON cars.ID = purchases.carID;
`,

            `
SELECT cars.*, purchases.date
FROM cars JOIN purchases
ON cars.ID = purchases.carID;
`,

            `
SELECT cars.*, purchases.date FROM cars LEFT JOIN purchases ON cars.ID = purchases.carID;
`],

        correct: 3,
    },
    {
        question: ' Which code snippet from a stored procedure should be rewritten as a CASE statement? ',

        answers: [
            `
    IF var1 THEN SET varA = var1;
    ELSEIF var2 THEN SET varA = var2;
    ELSEIF var3 THEN SET varA = var3;
    ELSE SET varA = var4;
    END IF;
`,

            `
    IF var1 = var2 THEN SET varA = var1;
    ELSEIF var2 = var3 THEN SET varA = var2;
    ELSEIF var3 = var4 THEN SET varA = var3;
    ELSE SET varA = var4;
    END IF;
`,

            `
    IF var1 = 1 THEN SET varA = var1;
    ELSEIF var2 = 2 THEN SET varA = var2;
    ELSEIF var3 = 3 THEN SET varA = var3;
    ELSE SET varA = var4;
    END IF;
`,

            `
    IF var1 = 1 THEN SET varA = var1;
    ELSEIF var1 = 2 THEN SET varA = var2;
    ELSEIF var1 = 3 THEN SET varA = var3;
    ELSE SET varA = var4;
    END IF;
`],

        correct: 3,
    },
    {
        question: ' Why would you use stored functions? ',

        answers: [
            `for formulas and business rules that you want to apply to columns in an SQL query`,
            `for formulas and business rules that should be applied on a specific trigger event like on inserts`,
            `to automatically modify the data of a table based on a query`,
            `for reusing recurring queries`],

        correct: 1,
    },
    {
        question: ' What steps do you need to take to normalize the table from this diagram? ',

        img: 'img/mySQL/q99.png',

        answers: [
            `Create another table to serve as a lookup for powers with fields for code and description, 
 as well as a junction table with superhero names and power codes.`,
            `Add a column to this table to serve as a record identifier, and make it the primary key.`,
            `Extend this table to have additional columns "power4," "power5," 
 and so on, to allow additional powers for each superhero.`,
            `Convert this table to have column called "power," 
 and add one record for each superhero-power combination, for a total of 15 records in this example.`],

        correct: 0,
    },
    {
        question: ' A table Item has a Boolean field endOfLife and a field makeYear of type YEAR(4). How can you set the Boolean to true for all Items that have been made before 2019? ',

        answers: [
            `UPSERT Item SET endOfLife = true WHERE makeYear < 2019`,
            `CHANGE Item SET endOfLife = true WHERE makeYear < 2019`,
            `ALTER Item SET endOfLife = true WHERE makeYear < 2019`,
            `UPDATE Item SET endOfLife = true WHERE makeYear < 2019`],

        correct: 3,
    },
    {
        question: ' Which choice is an example of an aggregate function? ',

        answers: [
            `NOW()`,
            `MID()`,
            `FORMAT()`,
            `COUNT()`],

        correct: 3,
    },
    {
        question: ' You are working with the tables as shown in this diagram. You need to generate the list of customers who purchased certain car models. Which SQL clause do you use? ',

        answers: [
            `UNION ALL`,
            `UNION`,
            `SHOW TOTALS`,
            `WITH ROLLUP`],

        correct: 1,
    },
    {
        question: ' You are managing a database with a table called "customers". You created a temporary table also called "customers" with which you are working for the duration of your session. You need to re-create the temporary table with different specifications. Which command do you need to run first? ',

        answers: [
            `CREATE TEMPORARY TABLE customers;`,
            `DROP TEMP TABLE customers;`,
            `DROP TEMPORARY TABLE customers;`,
            `DROP TABLE customers;`],

        correct: 3
    }
];

export default MySQL;