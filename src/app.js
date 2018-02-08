import React from 'react';

import {
    propTypes, 
    defaultProps,

    fadeInObj,
    fadeOutObj,

    IMAGE_STATE_LOADING,
    IMAGE_STATE_SUCCESS,
    IMAGE_STATE_FAILED
} from './constants';

/**
 * @name : FancyImageloader
 * @description : This class handles placeholders/error as per image loading status
 * @argument {*} props
 * @argument {*} propTypes
 * @argument {*} defaultProps
 * @author krishcdbry
 */
class FancyImageloader extends React.Component {

    /**
     * @constructor
     * @param {*} context 
     * @param {*} props 
     */
    constructor (context, props) {
        super(context, props);

        let {width, height, alt, border, id, placeholder, style, src, error} = this.props;
        let className = this.props.class;
 
        style = Object.assign({}, style, fadeInObj); // For fadeIn/out animation when image source loads
        
        let imageProps = {
            width,
            height,
            className,
            alt,
            border,
            id,
            style
        }

        this.state = {
            imageProps,
            placeholder,
            error,
            style,
            imageState: IMAGE_STATE_LOADING,
            src
        }
    }

    /**
     * @name imageLoaded
     * @description If image loaded successfully, It updates the imageState prop of the state @ component
     * @method FancyImageloader
     */
    _imageLoaded () {
        if (this.state.imageState == IMAGE_STATE_SUCCESS) {
            return;
        }
        this.setState({
            imageState : IMAGE_STATE_SUCCESS,
            style : Object.assign({}, this.state.style, fadeOutObj)
        });
    }

    /**
     * @name imageFailed
     * @description If image failed to load, It updates the imageState prop of the state @ component
     * @method FancyImageloader
     */
    _imageFailed () {
        if (this.state.error == undefined) {
            return;
        }
        this.setState({
            imageState : IMAGE_STATE_FAILED
        });
    }

    /**
     * @name createAsyncImage
     * @description Creates an Async dynamic image to loaded original source in the background
     * @method FancyImageloader
     */
    _simulateAsyncImage () {
        let realImage = new Image();
        realImage.onload = () => {
            this._imageLoaded();
        }
        realImage.onerror = () => {
            this._imageFailed();   
        }
        realImage.src = this.state.src;
    }

    /**
     * @name componentDidMound
     * @description Once component successfully mounted then it triggers the createAsyncImage method
     * @method FancyImageloader
     */
    componentDidMount() {
        if (this.state.src) {
            this._simulateAsyncImage();
        }
    }

    /**
     * @name prepareProps
     * @description Prepare props for the html element to display
     * @method FancyImageloader
     */
    _prepareProps() {
        let props = {};
        for (let prop in this.state.imageProps){
            if (prop != undefined) {
                props[prop] = this.state.imageProps[prop]
            }
        }
        return props;
    }

    /**
     * @description Creates a span element and invokes the placeholder function received via props
     * @param {*} props 
     * @method FancyImageloader
     * @returns HTML
     */
    _createPlaceholderHtml(props) {
        return <span {...props}>
                    {this.state.placeholder()}
                </span>
    }

     /**
     * @description Creates a span element and invokes the error function received via props
     * @param {*} props 
     * @method FancyImageloader
     * @returns HTML
     */
    _createErrorHTML(props) {
        return <span {...props}>
                    {this.state.error()}
                </span>
    }

     /**
     * @description Creates an Image with props, style and source attribute
     * @param {*} props 
     * @method FancyImageloader
     * @returns HTML
     */
    _createImageElement (props) {
        return <img 
                {...props} 
                style={this.state.style}
                src={this.state.src}/>;
    }

    /**
     * @name render
     * @description renders the component according to the image state and returns the appropriate HTML
     * @method FancyImageloader
     * @returns HTML
     */
    render () {
        const props = this._prepareProps();
        let renderElem = null;

        switch (this.state.imageState) {
            case IMAGE_STATE_LOADING : 
                renderElem = this._createPlaceholderHtml(props);
                break;
            case IMAGE_STATE_SUCCESS : 
                renderElem = this._createImageElement(props);
                setTimeout(() => {
                    let style = Object.assign({}, this.state.style, fadeInObj)
                    this.setState({
                        style: style
                    })
                })
                break;
            case IMAGE_STATE_FAILED : 
                renderElem = this._createErrorHTML(props);
                break;            
        }
    
        return (
            renderElem
        )
    }
}

FancyImageloader.propTypes = propTypes;
FancyImageloader.defaultProps = defaultProps;

export default FancyImageloader;