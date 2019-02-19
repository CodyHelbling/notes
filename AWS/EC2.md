# EC2 (Elastic Compute Cloud)
## A Cloud Guru Course
### What is EC2?
A web service providing resizeable compute capacity in the cloud.

### What are the EC2 pricing options?
TODO: Break this into multiple questions.
- On demand - pay a fixed rate/time.
- Reserved - cheaper than on demand but you commit for 1 or 3 year terms.
- Spot - bid whatever price you want for instance capacity. Provides greater 
savings if your applications have flexible start and end times.
- Dedicated Hosts - Physical EC2 server dedicated for your use. Enables 
people to use existing server-bound software licenses.

### What are use cases for using EC2 on demand?
- Users that want low cost and flexibility up front.
- Applications with short term, spiky or unpredictable workloads that cannot 
be interrupted.
- Applications being developed or tested on EC2 for the first time. 

### What are use cases for using EC2 on a reserved bases?
- Applications with steady state or predictable usage.
- Applications that require reserved capacity.
- Users can make up-front payments to reduce total computing costs.
    - Standard Reserved Instances: Can be up to 75% off on-demand
    - Convertible Reserved Instances: up to 54% off on-demand
        - Allowed to change some attributes of the instance
    - Scheduled Resource Instances are available to launch within the time 
    window you reserve.
    
### What are use cases for using EC2 spot instances?
- Applications with flexible start and end times.
    - Like genome projects that just want cheap computation and don't mind if
     it's at 4am on a Sunday morning or whatever
 - Applications that are only feasible at very low compute prices
 
 ### Who pays for the termination hour of spot instance?
    - If AWS terminates it, they pay.
    - If you terminate it, you pay.

### What are use cases for dedicated hosts?
- When regulations require no multi-tenant visualization (health-care or 
software licensing...)
- Supports EC2 On Demand and Reservation
- Supports On Demand and Reservation pricing

### What EC2 types are available, and what are they for?
Remember the letters. The numbers are for versions.
- f1
    - Field programmable gate array
- t2
    - Low cost, general purpose
    - Busrtable, good for changing workloads
    - Good for web servers and small DBs
    - t is for tiny or turbo
- m5
    - Balanced, good for consistent workloads
    - m is for main or happy Medium
- c5
    - High ratio of compute to memeory
    - c is for compute
- r4
    - Memory optimized for memory intensive apps/dbs
    - Good for in-memory databases
    - r is for RAM
- x1
    - Useful with SAP HANA/Apache Spark etc.
    - Good for ful in-memory applications
    - x is for xtreme
- p3
    - Good for graphics processing and other GPU uses
    - p is for pictures
- h1
    - High disk throughput
    - HDD backed, balanced of compute and memory
    - h is for HDD
- i3
    - High speed storage
    - NoSQL DBs, Data Warehousing
    - SDD backed, balance of compute and memory
    - i is for IOPS
- d3
    - Highest disk ratio
    - d is for dense
- g3
    - Graphics Intensive
    - Good for Video encoding/ 3d application streaming
    
### What is a phnumonic to remember the EC2 instnace types?
FIGHT-DR-MCPIX

### What is EBS?
- Elastic Block Storage.
- If you think of EC2 as a virtual server in the cloud, EBS would be virtual 
storage in the cloud.
- Allows you to create storage blocks and attach them to EC2 instances.
- They automatically have replication across an availability zone.

What are some EBS Volume Types?
- General Purpose SSD
- Provisioned IOPS SSD
    - Designed fo rI/O intensive applications such as large relational NoSQL
     databases
- Throughput optimized HDD
    - Big data
    - Data warehouse
    - Cannont be boot volume
- Cold HDD
- Magnetic (Standard)
    - Lowest cost for bootable volumes

### In order to enable encryping at rest using EC2 and Elastic Block Store, 
you must:
- Configure encryption when creating the EBS volume.

### Individual instances are provisioned:
    - In Availability Zones

### What is the Gerneral Purpose SSD and why would you use it?
- This EBS volume type balances price and performacnce for a wide variety of 
workloads.

### What is the Provisioned IOPS SSD and when would you use it?
- It's an Elastic Block Storage type with the highest-performance SSD volume 
for mission-critical low-latency or high-throughput workloads.

### What is a Throuput Optimized HDD and when would you use it?
- It's an Elastic Block Storage type that's a loc cost HDD volume designed 
for frequently accessed, thoughpuit-intensive workload.

### Describe the Magnetic EBS type.
- Previous generation tech that's low cost and can be a boot volume.

### What is a Cold HDD and when would you use it?
- It's an Elastic Block Storage type HDD volume designed fo rless frequently 
accessed workloads.

## AWS Cert Guild Meeting
* When AWS terminates the machine, and it is halfway through the billing 
period (hfffour), they pay the cost of the hour

* When you terminate th emachine, and it is halfway though the billing period
 (hour), you pay the cost of the whole hour