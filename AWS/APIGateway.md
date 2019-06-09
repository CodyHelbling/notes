# API Gateway

<!--- QA: Question --->
### What is API Gateway?
<!--- QA: Answer --->
Amazon API Gateway is a fully managed service that makes it easy for 
developers to publish, maintain, monitor, and secure APIs at any scale. With 
a few clicks in the AWS Management Console, you can create an API that acts 
as a "front door" for applications to access data, business logic, or 
functionality from your back-end services, such as applications running on 
EC2, Lambda or any web application.

<!--- QA: Question --->
### What can API Gateway do?
<!--- QA: Answer --->
- Expose HTTPS endpoints to define a RESTful API
- Serverless-ly connect to services like Lambda and DynamoDB
- Send each API endpoint to a different target
- Run efficiently with low cost
- Scale effortlessly
- Track and control usage by API key
- Connect to Cloudwatch to log stuff
- Maintain multiple API versions

<!--- QA: Question --->
### How do I configure API Gateway?
<!--- QA: Answer --->
- Define an API (container)
- Define Resources and nested Resources (URL paths)
- For each resource:
    - Select supported HTTP methods
    - Set security
    - Choose target (EC2, Lambda, DynamoDB, etc. )
    - Set request and response transformations
- Deploy to a Stage
    - Uses API Gateway domain, by default
    - Can use custom domain
    - Now supports AWS Certificate manager (free SSL certs!)
    
<!--- QA: Question --->
### What is API caching?
<!--- QA: Answer --->
- API Gateway can cache static responses for you for a specified time-to-live
 (TTL)
 
 <!--- QA: Question --->
### What will you need to do if you're using JS/AJAX that uses mutiple domains with API Gateway?
<!--- QA: Answer --->
 - Ensure that you have enabled CORS on API Gateway
    