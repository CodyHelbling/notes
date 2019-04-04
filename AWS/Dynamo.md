### What is DynamoDB?
- A fast flexible NoSQL database service for all applications that need 
consistent, single-didget millisecond latency at any scale.
- It is a fully managed database
- It supports both document and key-value data models
- SSD
- Stored accross 3 areas
- 2 consistency models
    - Eventual Consistent Reads (Default)
    - Strongly Consistent Reads
- We're at a point with technology where computation costs more than storage,
 so we can use denormalized data stores to save computation costs.
    
### What is an eventually consistent read?
- Data across all 3 regions of dynamo is consistent within a second.
- Best read performance.

### What is a strongly consistent read?
- Returns a result that reflects all writes that received a successful 
response prior to the read.

### How is data organized in Dynamo?
- Tables
- Items ( Think row of data in a table)
- Attributes ( Think column )
- Supports key-value and document structures
- Key = name of data, Value = the data itself
- Documents can be written in JSON, HTML, XML

### What is a DynamoDB Primary Key?
- Dynamo stores and retrieves data based on a Primary key
- There are 2 types or Primary Key
    - Partition Key
        - unique attribute (e.g. User ID)
    - Composite Key
        - Partition Key + Sort Key
        - Use when the partition key isn't necessarily unique
        - e.g. some table using user ID and timestamp as composite key
        
### How is access control managed for Dynamo?
- IAM
- You have the resolution to restrict access down to table values. This can 
be done by adding a Condition to an IAM policy.

### What is a wide column key-value store?


### What is a Secondary Index?
- A data structure that contains a subset of attributes from a table, along 
with an alternate key to support Query operations.
- You query the index like querying a table.
- A table can have multiple secondary indexes, which gives your applications 
access to many different query patterns.
- You can Scan on an index in much the same way as you would Scan a table.

### What is the `base table` for an index?
The table very secondary index is associated with exactly one table, from 
which it obtains data.

### What do you define when creating a secondary index?
- An alternate key for the index (partition key and sort key)
- Attributes you want projected, or copied, from the base table into the index

### What are the two types of secondary indexes?
- Global secondary index
    - an index with partition and sort key differeing from those on the base 
    table.
    - A global secondary index is considered "global" because queries on the
     index can span all the data in the base table, across all partitions.
- Local secondary index
    - an index that has the same partition key as a base table, but a 
    different sort key
    - A local secondary index is "local" in the sense that every partition of
     the local secondary index is scoped to a base table partition that has 
     the same partition key value
     
### What is a partition?
- A partition is an allocation of storage for a table, backed by SSD and 
automatically replicated across multiple Availability Zones within an AWS 
region

### How can you use partition keys to reduce scans?
- Create a composite primary key where a partition key is combined with a 
sort key. This way you can use a local secondary index and only scan a 
partition, instead of the entire table.

### What is adaptive capacity?
DynamoDB originally allocated read and write throughput evenly across keys. 
Now they've updated it to allocate read and write adaptively to whatever 
partition needs it. One still can't overstep full capacity, but one partition
 key can now use the entire read and write throughput.