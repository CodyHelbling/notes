# AWS Relational Database Service (RDS)

### What database types are supported?
- SQL Server
- Oravle
- MySQL
- PostgreSQL
- Amazon Aurora
    - Amazon developed relational database
- MariaDB

### What is Data Warehousing?
- Used to pull in very large and complex data sets. Usually used by 
management to do queries on data.


### What is Online Transaction Processing(OLTP)?
- Where information systems facilitate and manage transaction-oriented 
applications, typically for data entry and retrieval transaction processing.
- E.g. processing a payment, inserting into one table and returning an order 
number.
- Frequent simple transactions

### What is Online Analytics Processing?
- An approach to answer multi-dimensional analytical (MDA) queries swiftly in
 computing. 
 - E.g. Trying to find net profit for something using data across different 
 tables (currency, sales numbers, manufacturing data)
 - More complex transactions, infrequent
 
 ### What is Elasticache?
 - A web service that makes it easy to deploy, operate, and scale an 
 in-memory cache in the cloud.
 - Supports Memcahed and Redis
 - Cache frequently accessed information in faster storage.
 
 ### What types of backups are offed through RDS?
 - Automated
 - Snapshots
 
 ### What is an Automated RDS backup?
 - Allows you to backup your database withiin any period in the "retention 
 period".
 - The retention period can be between 1 and 35 days
 - Can be backed up to a point with resolution of a second
 - Backup data is stored on S3
 - You can define the backup window
 
 ### What is an RDS database snapshot?
 - Done manually.
 - Stored even after the RDS instance is deleted, unlike automated backups.
 
 
 ### What should you know about restoring from an automated or snapshot RDS 
 backup?
 - You get a new RDS instance when you restore (It has a new DNS endpoint)
 
 ### What should you know about RDS and encryption?
 - All RDS services currently provide encryption at rest
 - Once a DB is encrypted, everything you do to it will be encrypted
 - DBs don't come encrypted, you must do it manually
 
 ### What is Multi-AZ?
 - Disaster recovery only, (If you want performance improvements use read 
 replicas)
 - Allows you to have an exact copy of your production database in another 
 availability zone.
 - AWS handles the replication for you.
 - AWS RDS automatically handles the fail-over to the standby database
 
 ### What is a Read Replica?
 - Allow you to have a read-only copy of your production database.
 - This is achieved by using Async replication from the primary RDS instance 
 to the read replica.
 - Used primarily for very ready-heavy database workloads.
 - For scaling NOT disaster recovery.
 - have up to 5 read replicas for any database.
 - Can have read replicas of read replicas, but there will be some latency.
 - You can have read replicas in another region.