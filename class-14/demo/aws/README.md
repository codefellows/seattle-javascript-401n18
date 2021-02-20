# Demo - Message Queues at AWS

This is a replicant in AWS of the system that we're building in class during this module

## AWS SNS and SQS

This demo contains 3 files, one for publishing to SNS, one for publishing to SQL, and one for receiving messages from an SQS queue.

- Ensure that your AWS credentials are installed on your machine and add if not
  - `aws configure`
- The demo and participation sections for lab require that you have your credentials

We're going to go through the process of using AWS's SNS and SQS systems to show students where we're headed.

First, SNS, which is the "Simple Notification System" ... a service which receives a "message" to a "topic" and then broadcasts it immediately to all subscribers

- To get setup:
  - Create a new TOPIC in the AWS SNS Dashboard
  - Create a new subscription for that topic of type SMS and give it your phone number

- In your terminal use `npm i` to install the dependencies
- Edit the file `sns-publish.js`
  - Note that this uses `dotenv()`
    - Create a `.env` file that has the following key:
      - `SNS_TOPIC` which should contain the ARN to the topic you created above
    - Edit the file and change the text of the message
- Run the `sns-publish.js` file using node.
  - You should get a text message with your message text!

That's a single message, broadcast in real time. But what about a processing queue, where you want to make sure that you can get messages even when you're not connected?

- Create an SQS queue in the AWS console
  - Give it wide open permissions
    - Everyone (*)
    - Read, Send, Delete

- Edit the `.env` file and add the following key:
  - `SQS_QUEUE` which should contain the URI to the Queue you created above
- Edit the `sqs-receive.js` and `sqs-send.js` files
  - These are pretty self explanatory in that they connect to the Queue you just created

1. Run `node sqs-receive.js`  This will "listen" for queued events
1. Run `node sqs-send.js` in another window.  This will send a message to the Queue
1. Messages sent from one will be seen in the other (with AWS being the go-between)
1. Stop the "receive" app and fire a few events using the "send" app
   - You should see in the dashboard that the queue has a few unsent messages
1. Start up the "receive" app and you should instantly get all of those old messages
   - The dashboard should now show zero

This demo shows how you can queue undelivered messages up for later, until the client re-connects

You can also initiate the Queue from the other app ...

- Go back to the SNS dashboard and add a new subscriber.  Instead of SMS, choose a Queue and add the ARN of the Queue you've just been working with.
- Now, if you run the original app (`sns-publish.js`), you'll still get the text message AND now it'll also write to the queue.
- Notice how your code didn't write to the Queue ... SNS did that for you. That's an event in one system triggering and event in another.

![Queues](./assets/queues.png)

![Permissions](./assets/perms.png)

![Topics](./assets/topics.png)

![Subscriptions](./assets/subscriptions.png)
