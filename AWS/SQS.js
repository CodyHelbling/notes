/**
 * What is Amazon Simple Queue Service?
 * It's an Amazon hosted queue....
 * - Good for distributed software systems and components.
 * - It can be more cost effective than compared to scheduled lambdas.
 *
 * What is a dead-letter queue?
 * - "Set aside messages that can't be processed correctly to determine why
 * their processing didn't succeed." https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html
 * - So this gives us tools to determine how we want to handle message
 * failure... It doesn't have anything to do with retries.
 * */