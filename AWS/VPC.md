### What is a VPC?
Virtual Private Cloud. 
Your own network in an AWS region.
Used to control access to resources. 

### What is a subnet?
Subnetworks inside our VPC. 
A network inside a network.
Can only span one Availability Zone.

### How do Security Groups relate to VPCs?
Security groups are applied on a per instance level.
You assign security groups to a VPC. Then every instance running inside the 
VPC can be attached to that security group.
Security groups can be used like a firewall to control inbound and outbound 
traffic.