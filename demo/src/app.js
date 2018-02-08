import React from 'react';
import { render } from 'react-dom';
import FancyImageLoader from '../../dist/index';

class App extends React.Component {
    
    render() {
  
      let componentStyle = {
          display: "inline-flex", 
          justifyContent : "center",
          flexWrap : "wrap",
          textAlign : "center",
          alignItems: "center"
      }

      let itemStyle = {
         height: "200px",
         width: "300px"
      };

      let itemHtmlStyle = {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        textAlign: "center",
        background: "azure"
      }
      let placeholder = function () {
          return  <img src="http://www.tbaf.org.tw/event/2016safe/imgs/loader1.gif" style={itemStyle}/>;
      }

      let placeholderHtml = function () {
        return <div style={itemHtmlStyle}>
                 Loading image please wait
              </div>  
      }

      let error = function () {
        return <img src="data:image/png;base64,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" height="200px"/>      
      }

      let errorHtml = function () {
        return <div style={itemHtmlStyle}>
           This image failed to load  
           <br/> ;) <br/>
           Sorry for the inconvinence
        </div>     
      }
  
      const generateRandom = () => {
          let min = 100;
          let max = 100000;
          return  min + Math.random() * (max - min);
      }
      
      const imageList = [
        'https://images2.alphacoders.com/521/521718.jpg',
        'https://images5.alphacoders.com/587/587323.jpg',
        'https://images4.alphacoders.com/378/3764.jpg',  // removed 6 from 37864
        'https://images7.alphacoders.com/333/333205.jpg',
        'https://images8.alphacoders.com/570/570189.jpg',
      ]

      const imageList2 = [
        'https://images7.alphacoders.com/333/333198.jpg',
        'https://images5.alphacoders.com/570/570618.jpg',
        'https://images2.alphacoders.com/238/238870.jpg',
        'https://images2.alphacoders.com/468/468.jpg',   // error image modified from 4682
        'https://images3.alphacoders.com/191/19177.jpg',
        // 'https://images7.alphacoders.com/329/329050.jpg',
        // 'https://images7.alphacoders.com/491/491050.jpg',
      ]

      let imageComponent = imageList.map((item) => {
            return <FancyImageLoader 
            src={item}
            placeholder={placeholder}
            error ={error}
            class="img"
            alt = "Awesome image dude"
            key = {generateRandom()}
            style={itemStyle}></FancyImageLoader>
      });

      let imageComponent2 = imageList2.map((item) => {
          return <FancyImageLoader 
          src={item}
          placeholder={placeholderHtml}
          error ={errorHtml}
          class="img"
          alt = "Awesome image dude"
          key = {generateRandom()}
          style={itemStyle}></FancyImageLoader>
      });

      return (
        <div className="App">
          <div className="App-header">
            <h1>Fancy Image Loader</h1>
          </div>

          <div className="App-body">

            <div className="section section-one">
              <h2>Placeholder Image</h2>
              <div style={componentStyle}>
                {imageComponent}
              </div>
            </div>

            <div className="section section-two">
              <h2>Placeholder Html</h2>
              <div style={componentStyle}>
                {imageComponent2}
              </div>
            </div>
            
          </div>
          
        </div>
      );
    }
  }
  export default App;
  
  render(
      <App/>, document.getElementById('root')
  )