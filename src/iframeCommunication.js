class IframeCommunication {
    constructor(iframeSelector, targetOrigin, username) {
        this.iframeRef = document.querySelector(iframeSelector);
        this.targetOrigin = targetOrigin;
        this.username = username;

        // Bind methods
        this.handleMessage = this.handleMessage.bind(this);
    }

    init() {
        if (this.iframeRef) {
            window.addEventListener('message', (event) => {
                this.handleMessage(event);
            });
            if (this.iframeRef.contentWindow) {
                this.sendMessage();
            }
        } else {
            console.error('Iframe element not found.');
        }
    }

    handleMessage(event) {
        if (this.iframeRef.contentWindow) {
            this.sendMessage();
        }
    }
    
    sendMessage() {
        const message = {
            url: window.location.href,
            username: this.username,
            key: 'friends.casino-5g8h3j2k1'
        };
        this.iframeRef.contentWindow.postMessage(message, this.targetOrigin);
    }

    cleanup() {
        window.removeEventListener('message', this.handleMessage);
    }
}

module.exports = IframeCommunication;