console.log("test1");
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        details.responseHeaders.push(
            {
                name: 'Content-Security-Policy',
                value: 'default-src \'none\'; report-uri http://localhost:25555/'
            }
        );
        return {
            responseHeaders: details.responseHeaders
        };
    },
    {
        urls: [
            '*://*/*'
        ],
        types: [ 'main_frame', 'sub_frame' ]
    },
    [ 'blocking', 'responseHeaders' ]
)
