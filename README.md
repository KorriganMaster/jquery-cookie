jQuery cookies manager
======================

This plugin requires jQuery 1.9.1 and provides an easy way to manage your cookies.

## Getting started

First you have to include [jQuery](http://jquery.com/) and the plugin on your page.

```html
<script type="text/javascript">jquery.js</script>
<script type="text/javascript">jquery-cookie-1.0.js</script>
```
## Usage

Create a cookie with default options (by default path is set to "/" and expires to 1 year) :

```javascript
$.cookie({name: "my_cookie", value: "my_value"});
```
Create a cookie with a custom path and expiration (days is the number of days your cookie will be available) :

```javascript
$.cookie({name: "my_cookie", value: "my_value", days: 7, path: "/my_path"});
```

Read a cookie value. This method returns null if the cookie doesn't exists :

```javascript
$.cookie("read", "cookie_name");
```

Delete a cookie : 

```javascript
$.cookie("delete", "cookie_name");
```
