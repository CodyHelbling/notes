# Elasticache

### What is Elasticache?
- Elasticache allows you to store stuff in memory. 
- So if you have common requests for stuff you don't want to wait for disk retrieval you can use 
Elasticache to store it in memory.

### What tools does Elasticache support?
    - Redis
    - Memcached
    
### Why choose Elasticache Memcached?
- Primary goal is to offload the database.
- Simple as possible caching model.
- If you want the ability to scale a cache horizontally.


### Why choose Elastic Memcache?
- If you want advanced datatype, such as lists, hashes, and sets
- If you need sorting and ranking dataset done in memory
- If persistence is important
- If you need to run in multiple AWS Availability Zones with failover
- Pub/Sub capabilities are needed


### If your database is running slowly because managements keeps running OLAP
 transactions on it, what tool should you use to speed up the DB?
 - RedShift
 