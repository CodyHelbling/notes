/**
 * Notes on AWS Lambda Pluralsight video
 *
 * Event, Scheduled, or API driven
 *
 * 5 minute time limit
 * - So if something doesn't complete because of network timeout can you
 * call it again?
 *
 * Size Limitations
 * - Uncompressed code and dependencies < 250 MB
 * - Compressed function package < 50MB
 * - Total function packages in a region < 75 GB
 *
 * If functions are too big you should probably chain them.
 * It's good to think of Lambda as a component.
 * If you can't break out code into smaller components that fit within
 * Lambda's limitations, or if you have long running workloads Lambda may
 * not be the right tool.
 *
 * Lambda Prerequisites
 * 1. Gather Dependencies
 * - Libraries
 * - Other files like html
 * - AWS services - update the services IAM to allow the lambda
 * - API keys
 *
 * 2. Writing Code
 * - Locally
 * - In AWS editor
 *
 * 3. Create a Function Package
 * - Zip files into function package
 *
 * 4. Debugging
 * - Use logging (they're stored in Cloudwatch )
 * - Environment differences
 *
 *
 * What is Amazon VPC (Virtyal Private Cloud)?
 * Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.
 */