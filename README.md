# interview-fe
interview-fe
# Pages
   * Users page- can view all users from application.
   * When selecting a user from table that user in stored in the localStorage and can by access with user context.
   * Message page - can view all messages from application or the messages from the current selected user.
   * Send message - can send messages to any user from user page
   * Inbox element - this component it's calling the BE every 3 minutes to see if the curent use has any new messages
# Structure
    * api - includes the BE calls from application
    * components - includes all components from application that are stateless and can be reused
    * screen - includes main application pages, usualy they are statefull components
    * service - this is the place where the POST, GET methonds are define and olso where the headers are added
# Git commend
   * To start the project 
   Some basic Git commands are:
```
   npm i
   npm start
   ```
   * To run test
     Some basic Git commands are:
```
   npm run test
   ```

   
