# AWS Elastic Load Balancers
Balance loads across servers.

### What are the types of load balancers?
- Application load balancer
    - They can see into the application layer giving the opperotunity to make
     smarter decisions
- Network load balancer
    - Most expensive but fast
- Classic load balancer
    - Not recommended
    
    
### What is an Application Load Balancer and when should I use one?
- A load balancer type best suited for load balancing HTTP and HTTPS traffic.
- Operate at Layer 7 and are application-aware.
- They are intelligent, and you can create advanced request routing, sending 
specified requests to specific web servers.

## What is Network Load Balancer and when should I use it?
- A load balancer type best suited for loading balancing of TCP traffic where
 extreme performance is required. 
 - Operating at the connection level (Layer 4), this load balancer is 
 capable of handling millions of requests per second, while maintaining 
 ultra-low latencies.
 
 ## What is a Classic Load Balancer and when should I use it?
 - A load balancer type that is the legacy Elastic Load Balancer.
 - You can balance HTTP/HTTPS applications and use Layer 7-specific features,
  such as X-Forwarded and sticky sessions.
  - You can also use strict Layer 4 load balancing for applicaitons that rely
   purely on the TCP protocol.
   
### What does it mean when the ELB responds with a 504 error?
- The application is having issues.
    - Could be web server or database layer.
- You will probably need to scale out/up where possible.


### How can I seed the public ip address when the ELB forwards from it's IP?
- You can get this from the X-Forwarded-For header.

