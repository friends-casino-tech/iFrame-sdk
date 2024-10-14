# Iframe Communication Example

This project demonstrates how to use the `iframeCommunication` library for seamless communication between your main application and iframes using vanilla JavaScript.

## Overview

The `iframeCommunication` library allows for easy communication between your main application and iframes. This README provides instructions on how to include and use the library in a vanilla JavaScript application using both npm and a script tag.

## Installation Methods

### Method 1: Using npm

1. **Install the Library**

   ```bash
   npm install @friends-casino-tech/iframecommunication
   ```
   
2. **Use the Library in Your JavaScript File**   
   
   ```javascript
    import IframeCommunication from '@friends-casino-tech/iframecommunication';

    document.addEventListener('DOMContentLoaded', () => {
       const url = 'https://friends.casino';
       const iframe = document.getElementById('myIframe');
       const iframeCommunication = new IframeCommunication('#myIframe', `${url}${window.location.pathname}`, username);
       iframeCommunication.init();

       // Cleanup on window unload
       window.addEventListener('unload', () => {
          iframeCommunication.cleanup();
       });
    });
   ```

### Method 2: Using a Script Tag

1. **Add the Script Tag to Your HTML**
   ```html
    <script src="https://unpkg.com/@friends-casino-tech/iframecommunication@0.9.0/dist/iframeCommunication.min.js"></script>
   ```
   
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Iframe Communication Example</title>
        <script src="https://unpkg.com/@friends-casino-tech/iframecommunication@0.9.0/dist/iframeCommunication.min.js"></script>
    </head>
    <body>
        <iframe
            id="myIframe"
            src="https://friends.casino"
            width="100%"
            height="100%"
            allow="camera; microphone; clipboard-write; clipboard-read; compute-pressure; geolocation"
        ></iframe>
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                const username = "put your username here" //replace this string with your username
                const url = 'https://friends.casino';
                const dynamicSrc = `${url}${window.location.pathname}`;
                const iframe = document.getElementById('myIframe');
                iframe.src = dynamicSrc;
    
                iframe.onload = () => {
                    const iframeCommunication = new IframeCommunication('#myIframe', dynamicSrc, username);
                    iframeCommunication.init();
                };
            });
        </script>
    </body>
    </html>
   ```
   
## Additional Info

For any questions or support, please contact us at:

- **Email:** tech@friends.casino
- **Website:** [friends.casino](https://friends.casino)

Feel free to reach out for any inquiries or feedback regarding the iframeCommunication library!


   

