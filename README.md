# fancy-image-loader

Fancy Image Loader
=================


A generic React component to show a placeholder in place of an image while the image is loading
and replace the placeholder with the image when the image has loaded.

Features:
1. Placeholder can be another image or an HTML element
2. It should be possible to style the image
3. All attributes of <img> tag are supported

----------------------------------------------------------------------------------------------------

Context

Most of the modern websites use images in some form or the other in their content. For example, e-
commerce websites commonly have pages showing a list of products with the products’ images.

Whenever you navigate to a web page that has one or more images in it, the browser tries to load those
images. And loading an image may take time depending upon the size of the image and the network of the
user. So sometimes images can take a lot of time to load. And usually how browsers behave is that until
the image has loaded, the browser would have nothing to show.
This is generally considered a bad user-experience because the user does not know if something is
expected in that content area but as soon as the image loads, it suddenly appears. So it is considered a
good practice to show a placeholder until the image has loaded. Facebook takes this practice to another
level by showing placeholder for the entire page until the content has loaded.


Usage
-----

```javascript
import React from 'react';
import {render} from 'react-dom';
import FancyImageLoader from 'fancy-image-loader';

let placeholder = () => {
    return <img src="file/path/loading.gif"/>
}

let error = () => {
    return <img src="file/path/error.png"/>
}

let imageItem = "https://images.alphacoders.com/151/151291.jpg";

render(
  <FancyImageLoader 
        src={item}
        placeholder={placeholder}
        error ={error}
        class="img"
        alt = "Awesome image dude"
        key = {generateRandom()}
        style = {{borderRadius : '9px'}}
        height="200px"
        width="300px"></FancyImageLoader>
, document.getElementById('root'));

```


Props
-----

Name          | Required | Type     | Description |
--------------|----------|----------|--------------
`src`         | Yes      | string   | Source path of the image to be loaded + displayed   
`placeholder` | Yes      | function | A Placeholder function which returns simple react element html/image to be dispayed before image loads/loading
`error`       | No       | function | An optional error function which returns simple HTML/image to be displayed when image failed to load
`class`       | No       | string   | css class property for the image element
`width`       | No       | string   | An optioal width attribute string 100px, 200px etc
`height`      | No       | string   | Height attribute string 100px, 200px etc
`alt`         | No       | string   | Alternative text content
`style`       | No       | object   | Style object containing css stuff for the `image` component.
`border`      | No       | string   | Standered border styling - 0px solid etc.




## Author
Krishcdbry [krishcdbry@gmail.com]

## Licence
MIT @[krishcdbry](krishcdbry.com)