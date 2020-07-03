# Adfly redirector
A simple chrome extension that redirects to the Adfly destination *whithout granting "Allow notifications"*

## How it works?
1. Parses the query string of https://\*/pushredirect/\* url matches and find the 'dest' param
2. Redirects the current tab to the 'dest' param url

## Installation
- Navigate to chrome://extensions and click the "Load unpacked extension" button.
- Navigate to and select this directory.
