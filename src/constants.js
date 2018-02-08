import PropTypes from 'prop-types';

const IMAGE_STATE_LOADING = 'loading';        // Before image load/ While loading
const IMAGE_STATE_SUCCESS = 'success';        // Once successfully loaded
const IMAGE_STATE_FAILED = "failed";          // Image src failed / Invalid path

const propTypes = {
    src : PropTypes.string.isRequired,         // Source path of the image to be loaded + displayed 
    placeholder : PropTypes.func.isRequired,   // A Placeholder function which returns simple react element html/image to be dispayed before image loads/loading
    error : PropTypes.func,                    // An optional error function which returns simple HTML/image to be displayed when image failed to load
    class : PropTypes.string,                  // css class property for the image element
    width : PropTypes.string,                  // width as string 100px, 200px etc
    height : PropTypes.string,                 // Height attr same as width 100px, 200px etc
    alt : PropTypes.string,                    // alt - Text information
    border: PropTypes.string,                  // standered border styling - 0px solid etc.
    style: PropTypes.object                    // styling object 
}

const defaultProps = {
    width : 'auto',                            // by default auto 
    height: 'auto',                             // by default auto
}

const fadeInObj = {                            // FadeIn animation when image loads
    opacity: "1",
    transition: "opacity 1.0s"
}

const fadeOutObj = {
    opacity: "0",
    transition: "opacity 1.0s"
}


export {
    propTypes,
    defaultProps,
    
    fadeInObj,
    fadeOutObj,

    IMAGE_STATE_FAILED,
    IMAGE_STATE_LOADING,
    IMAGE_STATE_SUCCESS
}