import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Welcome = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };


  return (
    <div className="welcome">
      <div className="welcome__image">

        <svg
          className="animated"
          id="freepik_stories-people-flying"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"

        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    svg#freepik_stories-people-flying:not(.animated) .animable {opacity: 0;}svg#freepik_stories-people-flying.animated\n    #freepik--Clouds--inject-5 {animation: 1.5s Infinite linear floating;animation-delay:\n    0s;} @keyframes floating { 0% { opacity: 1; transform: translateY(0px);\n    } 50% { transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0px);\n    } }\n  "
            }}
          />
          <g
            id="freepik--Clouds--inject-5"
            className="animable"
            style={{ transformOrigin: "254.987px 251.364px" }}
          >
            <path
              d="M136.79,233.37a24.32,24.32,0,0,0-38.45,12.81c-5.59-3.39-11.77-6-18.31-6s-13.28,2.86-17,8.27-3.49,13.48,1.21,18c-5.46,1.87-11,3.78-15.83,7s-9,7.78-10.35,13.4c-1.89,7.69,1.93,16.07,8.21,20.87s14.61,6.37,22.5,5.7c1.34,13.27,10.55,25.95,23.63,28.53s27.47-4.22,33.77-16a39.24,39.24,0,0,0,61.59-37.5A28.48,28.48,0,0,0,209,246.6c7.22-7.85,7.74-22.79.18-30.3s-21.13-7.72-28.92-.46a26.16,26.16,0,0,0-23.38-2.2C149.29,216.65,138.73,225.47,136.79,233.37Z"
              style={{
                fill: "#0c4ca9d4",
                transformOrigin: "126.105px 276.511px"
              }}
              id="eloj9khiukg0g"
              className="animable"
            ></path>
            <path
              d="M437.79,326.56a26.07,26.07,0,0,1-24.25,40.76c4.49,8.11,2.51,18.81-3.41,25.94s-15.11,11-24.32,12-18.52-.43-27.57-2.42a29.1,29.1,0,0,1-50.7-6.53c-11.61,2.45-24.22,1.88-34.68-3.73s-18.27-16.85-17.81-28.71,10.48-23.69,22.35-23.66a18.59,18.59,0,0,1,24.26-26.72A39.29,39.29,0,0,1,358.53,286c2.1-8.18,8.74-11.27,16.87-13.56a24.73,24.73,0,0,1,23.45,6,31.6,31.6,0,0,1,58.56,13.79C458.47,305.4,450.06,321.51,437.79,326.56Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "356.265px 339.017px"
              }}
              id="el6rko5zgmig4"
              className="animable"
            ></path>
            <path
              d="M229.24,445a20.56,20.56,0,0,1-16.52,16.36c-8.17,1.33-18.45-4.59-22.37-11.87-5.33,5.64-12.82,9.46-20.58,9.41s-15.59-4.35-19-11.34-1.46-16.39,4.91-20.82a10.23,10.23,0,0,1-2.78-12.65c2.25-4.13,8.79-6.5,13.2-4.86a18,18,0,0,1-10.65-14.74A21.92,21.92,0,0,1,162,377.18a28.26,28.26,0,0,1,17.07-7.75,30,30,0,0,1,22.07,6.42c5.21-8.65,18.71-9.53,27.63-4.8a24.22,24.22,0,0,1,10.06,10.79,30.5,30.5,0,0,1,1.7,22.55c8.88-1,17.14,7.34,18.89,16.1s-3.54,18.28-11.74,21.84C243.39,444.2,233.77,446.26,229.24,445Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "204.433px 414.876px"
              }}
              id="eltt94nvqr8kp"
              className="animable"
            ></path>
            <path
              d="M440.82,68.67a10.81,10.81,0,0,0,5.14-12,12.84,12.84,0,0,0-9.74-9.07A16.19,16.19,0,0,0,423,51.08a14.58,14.58,0,0,0-13.84-9.9c-6.09.14-13.49,6.38-15,12.26-6.29.22-12.75.61-18.45,3.25S365.07,64.75,364.94,71a13.21,13.21,0,0,0,10.69,12.88c-2.56,2.45-3.53,8.77-1.79,11.86A11.1,11.1,0,0,0,382.6,101a17,17,0,0,0,10.1-2.71c6.24,6.64,15.83,8.68,24.76,6.9a16.82,16.82,0,0,0,8.84-4.35,9.61,9.61,0,0,0,2.64-9.16c4.44-.19,9.16-.17,13.19-2s7.44-5.84,7.25-10.28S444.39,71.15,440.82,68.67Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "407.164px 73.4913px"
              }}
              id="el0lmll7ljj4a9"
              className="animable"
            ></path>
            <path
              d="M115.77,400a6.84,6.84,0,0,1,5.1,11.42c-2.3,2.55-6,2.51-9.39,2.79a11.31,11.31,0,0,1-7,12.83c-5.06,1.75-11.15-1.14-13.4-6a11.31,11.31,0,0,1-19.23-2.75,7.48,7.48,0,0,1-.59-4.29,4.51,4.51,0,0,1,2.54-3.36,7,7,0,0,1-4.31-8.15c.91-3.26,5.69-6.35,9-5.64a7.41,7.41,0,0,1-3.1-7.74,10.12,10.12,0,0,1,5.41-6.69A16.06,16.06,0,0,1,89.41,381,14.26,14.26,0,0,1,96,383a8.08,8.08,0,0,1,3.73,5.62c3.25-1.15,7.21-1.34,10.31.17S116.92,396.74,115.77,400Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "95.9658px 404.227px"
              }}
              id="elp6loa7ir5pk"
              className="animable"
            ></path>
            <path
              d="M465.54,213.9a6.84,6.84,0,0,1,5.1,11.42c-2.3,2.54-6,2.51-9.39,2.78a11.29,11.29,0,0,1-7.05,12.83c-5.05,1.76-11.14-1.13-13.39-6a11.32,11.32,0,0,1-19.24-2.76,7.65,7.65,0,0,1-.59-4.29,4.59,4.59,0,0,1,2.54-3.36,7,7,0,0,1-4.3-8.15c.9-3.26,5.69-6.34,9-5.63a7.43,7.43,0,0,1-3.11-7.75,10.1,10.1,0,0,1,5.41-6.68,16.08,16.08,0,0,1,8.66-1.45,14.1,14.1,0,0,1,6.59,2,8.13,8.13,0,0,1,3.74,5.61c3.25-1.15,7.21-1.34,10.3.18S466.69,210.64,465.54,213.9Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "445.715px 218.106px"
              }}
              id="el4641k1vbnas"
              className="animable"
            ></path>
            <path
              d="M89.93,92.56A6.32,6.32,0,0,0,83,97a7.39,7.39,0,0,0,3,7.9,8.89,8.89,0,0,0,8.64.48,11.33,11.33,0,0,0,5.71-6.7c-.16.47,5.06-.25,5.56-.45a9.81,9.81,0,0,0,4.72-3.78c2-3.18,1.86-8,.1-11.29C107.47,77,97,76.25,91.94,80.42A9.65,9.65,0,0,0,89.93,92.56Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "97.434px 92.0406px"
              }}
              id="eljvw22cu2ufs"
              className="animable"
            ></path>
          </g>
          <g
            id="freepik--Birds--inject-5"
            className="animable"
            style={{ transformOrigin: "227.16px 242.075px" }}
          >
            <path
              d="M283.81,90.07a31.38,31.38,0,0,0-33.21,12.28,28.65,28.65,0,0,0-31.36-12.64A23.78,23.78,0,0,1,236,86.57,24.91,24.91,0,0,1,251,95.66C261.19,82.62,275.24,85.68,283.81,90.07Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "251.525px 94.2647px"
              }}
              id="el1ahwhinyyw0i"
              className="animable"
            ></path>
            <path
              d="M372.07,443a31.44,31.44,0,0,0-18.46,1,31.84,31.84,0,0,0-14.76,11.29,28.63,28.63,0,0,0-31.35-12.64,23.75,23.75,0,0,1,16.79-3.14,24.88,24.88,0,0,1,14.94,9.09C349.45,435.58,363.5,438.64,372.07,443Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "339.785px 447.202px"
              }}
              id="elo9o0hulp7e8"
              className="animable"
            ></path>
            <path
              d="M327.54,70.26a20.18,20.18,0,0,0-21.38,7.9A18.47,18.47,0,0,0,286,70a15.31,15.31,0,0,1,10.81-2,16,16,0,0,1,9.62,5.85C313,65.46,322,67.43,327.54,70.26Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "306.77px 72.9504px"
              }}
              id="el3v3ua9p2rh2"
              className="animable"
            ></path>
            <path
              d="M414.51,424.45a20.21,20.21,0,0,0-21.39,7.91,18.42,18.42,0,0,0-20.19-8.14,15.33,15.33,0,0,1,10.82-2,16,16,0,0,1,9.62,5.85C399.94,419.65,409,421.62,414.51,424.45Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "393.72px 427.16px"
              }}
              id="elqznt406yfh"
              className="animable"
            ></path>
            <path
              d="M81.36,366.5A20.2,20.2,0,0,0,60,374.41a18.44,18.44,0,0,0-20.19-8.14,15.31,15.31,0,0,1,10.81-2,16,16,0,0,1,9.62,5.85C66.8,361.7,75.84,363.67,81.36,366.5Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "60.585px 369.21px"
              }}
              id="el74bplfjk21i"
              className="animable"
            ></path>
            <path
              d="M312.61,425.27a14.09,14.09,0,0,0-14.92,5.51,12.88,12.88,0,0,0-14.09-5.68,10.71,10.71,0,0,1,7.55-1.41,11.15,11.15,0,0,1,6.71,4.09C302.45,421.92,308.76,423.29,312.61,425.27Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "298.105px 427.146px"
              }}
              id="elk7nju2aoib"
              className="animable"
            ></path>
            <path
              d="M285.7,31.35a20.25,20.25,0,0,0-11.88.64,20.48,20.48,0,0,0-9.51,7.26,18.43,18.43,0,0,0-20.18-8.13,15.31,15.31,0,0,1,10.81-2A16,16,0,0,1,264.56,35C271.14,26.55,280.18,28.52,285.7,31.35Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "264.915px 34.0554px"
              }}
              id="elfpm1qiarvi4"
              className="animable"
            ></path>
          </g>
          <g
            id="freepik--Lines--inject-5"
            className="animable"
            style={{ transformOrigin: "266.2px 245.231px" }}
          >
            <path
              d="M133.38,172.88l68.24-36.17L133.4,179.34c-1.56.9-2.82.18-2.83-1.61A6.19,6.19,0,0,1,133.38,172.88Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "166.095px 158.219px"
              }}
              id="ely2vmrzyval"
              className="animable"
            ></path>
            <path
              d="M45.7,153.54,97,126.34,45.71,158.4c-1.17.67-2.12.13-2.12-1.21A4.62,4.62,0,0,1,45.7,153.54Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "70.295px 142.514px"
              }}
              id="elq0cvq9sgy5"
              className="animable"
            ></path>
            <path
              d="M62.6,219.72l51.32-27.19-51.3,32.05c-1.17.68-2.12.14-2.13-1.2A4.67,4.67,0,0,1,62.6,219.72Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "87.205px 208.702px"
              }}
              id="el6oa33qotgpt"
              className="animable"
            ></path>
            <path
              d="M96.64,133.63,148,106.43l-51.3,32.06c-1.17.67-2.12.13-2.13-1.21A4.67,4.67,0,0,1,96.64,133.63Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "121.285px 122.604px"
              }}
              id="el9as7q9tsky7"
              className="animable"
            ></path>
            <path
              d="M130.62,135.4l51.32-27.19-51.31,32.05c-1.16.68-2.11.14-2.12-1.2A4.67,4.67,0,0,1,130.62,135.4Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "155.225px 124.382px"
              }}
              id="elltkp38a7exa"
              className="animable"
            ></path>
            <path
              d="M124.92,128.26,195.15,91l-70.21,43.87c-1.59.92-2.9.18-2.9-1.66A6.36,6.36,0,0,1,124.92,128.26Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "158.595px 113.133px"
              }}
              id="elt43ing87vra"
              className="animable"
            ></path>
            <path
              d="M219.1,344l77.75-41.2-77.73,48.57c-1.77,1-3.21.2-3.22-1.83A7.08,7.08,0,0,1,219.1,344Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "256.375px 327.3px"
              }}
              id="elbf0ilfixssp"
              className="animable"
            ></path>
            <path
              d="M307.08,293.85l77.76-41.21L307.1,301.21c-1.77,1-3.21.2-3.21-1.83A7,7,0,0,1,307.08,293.85Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "344.365px 277.14px"
              }}
              id="elg8pe9knhgi"
              className="animable"
            ></path>
            <path
              d="M346.18,293.18l42.92-22.74-42.91,26.81c-1,.56-1.77.11-1.77-1A3.92,3.92,0,0,1,346.18,293.18Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "366.76px 283.965px"
              }}
              id="elm1v5d44vytp"
              className="animable"
            ></path>
            <path
              d="M324,297l46.15-24.46L324,301.39c-1.05.61-1.9.12-1.91-1.09A4.19,4.19,0,0,1,324,297Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "346.12px 287.096px"
              }}
              id="eli8c82qosb2a"
              className="animable"
            ></path>
            <path
              d="M344.85,389.33l101-53.52-101,63.08c-2.3,1.33-4.17.26-4.18-2.38A9.12,9.12,0,0,1,344.85,389.33Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "393.26px 367.636px"
              }}
              id="elkhxjrkp1qvj"
              className="animable"
            ></path>
            <path
              d="M375.33,384.4l46.84-24.82-46.82,29.25c-1.07.62-1.94.12-1.94-1.1A4.24,4.24,0,0,1,375.33,384.4Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "397.79px 374.338px"
              }}
              id="eluzucf2mqpt"
              className="animable"
            ></path>
            <path
              d="M360.33,372.14l58.47-31-58.45,36.52c-1.33.77-2.41.15-2.42-1.37A5.29,5.29,0,0,1,360.33,372.14Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "388.365px 359.566px"
              }}
              id="elh1vdcrku8rt"
              className="animable"
            ></path>
            <path
              d="M167.31,304.72l58.47-31-58.45,36.52c-1.33.77-2.42.15-2.42-1.37A5.29,5.29,0,0,1,167.31,304.72Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "195.345px 292.146px"
              }}
              id="elgn7716ci39f"
              className="animable"
            ></path>
            <path
              d="M169.57,314.34l77.76-41.2-77.74,48.57c-1.77,1-3.21.2-3.21-1.84A7,7,0,0,1,169.57,314.34Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "206.855px 297.64px"
              }}
              id="elidetwybwgop"
              className="animable"
            ></path>
            <path
              d="M416,182.49l72.81-38.58L416,189.38c-1.65,1-3,.19-3-1.71A6.64,6.64,0,0,1,416,182.49Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "450.905px 166.86px"
              }}
              id="el8pxn8uf75l7"
              className="animable"
            ></path>
            <path
              d="M342.77,155.46l72.81-38.58-72.79,45.47c-1.65,1-3,.19-3-1.71A6.6,6.6,0,0,1,342.77,155.46Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "377.685px 139.83px"
              }}
              id="eligxcsidmtm"
              className="animable"
            ></path>
            <path
              d="M346.61,251.91l40.18-21.29-40.17,25.1c-.92.52-1.66.1-1.66-.95A3.61,3.61,0,0,1,346.61,251.91Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "365.875px 243.281px"
              }}
              id="elyei00avlm1k"
              className="animable"
            ></path>
            <path
              d="M334.82,251.91,375,230.62l-40.18,25.1c-.91.52-1.65.1-1.66-.95A3.66,3.66,0,0,1,334.82,251.91Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "354.08px 243.281px"
              }}
              id="elulvue480uzn"
              className="animable"
            ></path>
            <path
              d="M428.83,187.54,469,166.24l-40.17,25.1c-.92.53-1.66.1-1.66-1A3.58,3.58,0,0,1,428.83,187.54Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "448.085px 178.903px"
              }}
              id="elldnd5qfblqg"
              className="animable"
            ></path>
            <path
              d="M436.82,157.59,477,136.29l-40.17,25.1c-.92.53-1.66.1-1.67-.95A3.63,3.63,0,0,1,436.82,157.59Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "456.08px 148.954px"
              }}
              id="ell0thmoy1gts"
              className="animable"
            ></path>
            <path
              d="M258.13,143.7l72.8-38.58-72.78,45.47c-1.66,1-3,.19-3-1.71A6.6,6.6,0,0,1,258.13,143.7Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "293.04px 128.07px"
              }}
              id="elt216khdhw6"
              className="animable"
            ></path>
            <path
              d="M271,148.74l40.18-21.29L271,152.55c-.92.53-1.66.1-1.67-1A3.65,3.65,0,0,1,271,148.74Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "290.255px 140.113px"
              }}
              id="elx4n6gpyyu7a"
              className="animable"
            ></path>
            <path
              d="M279,118.79,319.17,97.5,279,122.6c-.91.53-1.66.1-1.66-.95A3.66,3.66,0,0,1,279,118.79Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "298.255px 110.164px"
              }}
              id="eli2kzsirkkr"
              className="animable"
            ></path>
            <path
              d="M371.27,152.54l40.18-21.29-40.17,25.1c-.92.52-1.66.1-1.66-.95A3.61,3.61,0,0,1,371.27,152.54Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "390.535px 143.911px"
              }}
              id="elcpglq0f1ldo"
              className="animable"
            ></path>
            <path
              d="M379.29,129.28,419.47,108l-40.17,25.1c-.91.53-1.66.11-1.66-.94A3.66,3.66,0,0,1,379.29,129.28Z"
              style={{
                fill: "#5bc0de",
                transformOrigin: "398.555px 120.665px"
              }}
              id="elqbsiovvpq4"
              className="animable"
            ></path>
          </g>
          <g
            id="freepik--character-1--inject-5"
            className="animable"
            style={{ transformOrigin: "148.522px 161.991px" }}
          >
            <path
              d="M60.54,160.81c-5.1,4.76-1,9.62,2.36,11.16C69.17,166.12,60.54,160.81,60.54,160.81Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "61.6607px 166.39px"
              }}
              id="elsel8dot1nsn"
              className="animable"
            ></path>
            <g id="elc34dgka8rzk">
              <path
                d="M60.54,160.81c-5.1,4.76-1,9.62,2.36,11.16C69.17,166.12,60.54,160.81,60.54,160.81Z"
                style={{ opacity: "0.3", transformOrigin: "61.6607px 166.39px" }}
                className="animable"
              ></path>
            </g>
            <g id="el4h88rxoliv9">
              <path
                d="M60.54,160.81c-5.1,4.76-1,9.62,2.36,11.16C69.17,166.12,60.54,160.81,60.54,160.81Z"
                style={{ opacity: "0.3", transformOrigin: "61.6607px 166.39px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M123.37,159.17c-7.78-4.11-22.62-.88-35.51.5C66,157,42.05,165.42,42.05,165.42s-6.76-2.06-10.29-1-2.91,7.68-1.68,9.14,6,2.86,6,2.86h0a1.4,1.4,0,0,0,1.15,1.53l.3.06a7.53,7.53,0,0,0,5.54-1.13h0a7.46,7.46,0,0,0,2-1.93l2.24-3.18c21.33-1.6,38-1.92,38-1.92l36.3-1Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "76.2411px 167.646px"
              }}
              id="elg4vnbxw6tv"
              className="animable"
            ></path>
            <g id="elhps8handi7q">
              <path
                d="M123.37,159.17c-7.78-4.11-22.62-.88-35.51.5C66,157,42.05,165.42,42.05,165.42s-6.76-2.06-10.29-1-2.91,7.68-1.68,9.14,6,2.86,6,2.86h0a1.4,1.4,0,0,0,1.15,1.53l.3.06a7.53,7.53,0,0,0,5.54-1.13h0a7.46,7.46,0,0,0,2-1.93l2.24-3.18c21.33-1.6,38-1.92,38-1.92l36.3-1Z"
                style={{ opacity: "0.3", transformOrigin: "76.2411px 167.646px" }}
                className="animable"
              ></path>
            </g>
            <g id="el7e3i0b4gge6">
              <path
                d="M36.12,176.38l1.86.38a2,2,0,0,0,1.35-.18l1.46-.73a1.41,1.41,0,0,0,.77-1.36L41.38,172l.69.95a2.23,2.23,0,0,1,.24,2.16h0a2.44,2.44,0,0,1-1.38,1.35l-1.72.69a1.64,1.64,0,0,1-1.23,0Z"
                style={{ opacity: "0.3", transformOrigin: "39.3023px 174.635px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M62.9,172s3.32-5.09-2.36-11.16c10.83-3,25.42-2.27,27.84-1.88,11-2.73,30.38-4.12,35,.24l-1.69,9.66C100.91,171.34,62.9,172,62.9,172Z"
              style={{ fill: "rgb(170, 43, 45)", transformOrigin: "91.96px 164.202px" }}
              id="elkygr71pomrg"
              className="animable"
            ></path>
            <g id="el66dxdl062bd">
              <path
                d="M62.9,172s3.32-5.09-2.36-11.16c10.83-3,25.42-2.27,27.84-1.88,11-2.73,30.38-4.12,35,.24l-1.69,9.66C100.91,171.34,62.9,172,62.9,172Z"
                style={{ opacity: "0.2", transformOrigin: "91.96px 164.202px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M248.34,149.66a5.26,5.26,0,0,1,4.27,1.06,17.29,17.29,0,0,1,3.43,3.89,34,34,0,0,0,5.32,5.6,40.49,40.49,0,0,1,3.64,3.15,7.61,7.61,0,0,1,2.18,4.21,4.59,4.59,0,0,1-.84,3.24,4.33,4.33,0,0,0,1.55-3.95,7.57,7.57,0,0,0-2.18-4.21,40.49,40.49,0,0,0-3.64-3.15,34.4,34.4,0,0,1-5.32-5.6,18.48,18.48,0,0,0-3.43-4.07,5.22,5.22,0,0,0-4.27-1.05Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "258.136px 159.746px"
              }}
              id="elnrl4gclguk"
              className="animable"
            ></path>
            <path
              d="M259.43,165.07c-1-1-2.15.87-4.13.91.42.37.82.76,1.22,1.16C258.64,166.75,260.12,165.76,259.43,165.07Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "257.451px 165.958px"
              }}
              id="el37swl6b5hox"
              className="animable"
            ></path>
            <path
              d="M257.24,163c-1-1-2.56,1-4.61,1.08a7.92,7.92,0,0,1,.9.5c.24.15.48.32.71.49C256.41,164.74,257.93,163.73,257.24,163Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "255.019px 163.895px"
              }}
              id="elnyj7t21qjvk"
              className="animable"
            ></path>
            <path
              d="M243.71,156.4a1.92,1.92,0,0,0-.3,1.36l5.37,5.64a6.65,6.65,0,0,1,3.85.72c2.05,0,3.58-2.11,4.61-1.08.69.69-.83,1.7-3,2.07a12.56,12.56,0,0,1,1.06.87c2,0,3.11-1.92,4.13-.91.69.69-.79,1.68-2.91,2.07l.76.78c.23.23.45.48.67.74,3.62.42,5.53-1.14,8-4.13a11.84,11.84,0,0,0-.95-1.17,40.49,40.49,0,0,0-3.64-3.15,34,34,0,0,1-5.32-5.6,17.29,17.29,0,0,0-3.43-3.89,5.26,5.26,0,0,0-4.27-1.06Z"
              style={{
                fill: "rgb(69, 90, 100)",
                transformOrigin: "254.669px 159.147px"
              }}
              id="eldwtf8det9v4"
              className="animable"
            ></path>
            <path
              d="M258,168.66a12.16,12.16,0,0,0,2.75,2.75,4.62,4.62,0,0,0,4.63.32,3.18,3.18,0,0,0,1-.92,4.59,4.59,0,0,0,.84-3.24,6.8,6.8,0,0,0-1.23-3C263.48,167.52,261.57,169.08,258,168.66Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "262.626px 168.387px"
              }}
              id="elembs31kiq1h"
              className="animable"
            ></path>
            <path
              d="M241.41,171.49l8.61-9a1.55,1.55,0,0,0,0-2.18l-2.78-2.77a2.53,2.53,0,0,0-3.52-.06L234.27,166Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "242.369px 164.144px"
              }}
              id="elxuamt4dd72i"
              className="animable"
            ></path>
            <g id="elkj500vqae5d">
              <path
                d="M241.41,171.49l8.61-9a1.55,1.55,0,0,0,0-2.18l-2.78-2.77a2.53,2.53,0,0,0-3.52-.06L234.27,166Z"
                style={{ opacity: "0.3", transformOrigin: "242.369px 164.144px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M214.05,130a5.24,5.24,0,0,1,4.4.15,17.35,17.35,0,0,1,4.16,3.1,34,34,0,0,0,6.36,4.39,39.18,39.18,0,0,1,4.21,2.33,7.66,7.66,0,0,1,3,3.67A4.58,4.58,0,0,1,236,147a4.32,4.32,0,0,0,.7-4.18,7.58,7.58,0,0,0-3-3.67,41.08,41.08,0,0,0-4.21-2.34,33.44,33.44,0,0,1-6.36-4.38c-1.31-1.14-2.6-2.57-4.19-3.27a5.24,5.24,0,0,0-4.4-.15Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "225.504px 137.799px"
              }}
              id="elzbhjae8xdtb"
              className="animable"
            ></path>
            <path
              d="M228.09,142.81c-1.21-.78-1.93,1.29-3.86,1.74.49.28,1,.58,1.43.88C227.66,144.62,228.9,143.35,228.09,142.81Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "226.286px 144.033px"
              }}
              id="elgetd8gz1g3w"
              className="animable"
            ></path>
            <path
              d="M225.52,141.27c-1.21-.79-2.28,1.55-4.29,2q.51.14,1,.3l.8.34C225.06,143.11,226.34,141.81,225.52,141.27Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "223.501px 142.509px"
              }}
              id="eli7x2zibka7"
              className="animable"
            ></path>
            <path
              d="M210.91,137.57a2,2,0,0,0,0,1.39l6.42,4.41a6.76,6.76,0,0,1,3.91-.09c2-.46,3.08-2.8,4.29-2,.82.54-.46,1.84-2.5,2.65.41.19.81.4,1.21.63,1.93-.45,2.65-2.52,3.86-1.74.81.54-.43,1.81-2.43,2.62l.91.61c.27.18.54.38.8.59,3.64-.34,5.18-2.26,7-5.69a10.56,10.56,0,0,0-1.17-.95,39.18,39.18,0,0,0-4.21-2.33,34,34,0,0,1-6.36-4.39,17.35,17.35,0,0,0-4.16-3.1,5.24,5.24,0,0,0-4.4-.15Z"
              style={{
                fill: "rgb(69, 90, 100)",
                transformOrigin: "222.583px 138.129px"
              }}
              id="elip9hm88528"
              className="animable"
            ></path>
            <path
              d="M227.37,146.63a12.42,12.42,0,0,0,3.26,2.12,4.61,4.61,0,0,0,4.6-.64A3.25,3.25,0,0,0,236,147a4.58,4.58,0,0,0,.16-3.34,6.82,6.82,0,0,0-1.84-2.72C232.55,144.37,231,146.29,227.37,146.63Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "231.885px 145.018px"
              }}
              id="el1gms5a1wccz"
              className="animable"
            ></path>
            <path
              d="M211.78,152.81l6.56-10.6a1.54,1.54,0,0,0-.45-2.13l-3.29-2.15a2.54,2.54,0,0,0-3.45.67l-7.5,10.27Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "211.12px 145.168px"
              }}
              id="elpirbf7qhvh"
              className="animable"
            ></path>
            <g id="elpave9a1ems">
              <path
                d="M211.78,152.81l6.56-10.6a1.54,1.54,0,0,0-.45-2.13l-3.29-2.15a2.54,2.54,0,0,0-3.45.67l-7.5,10.27Z"
                style={{ opacity: "0.3", transformOrigin: "211.12px 145.168px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M167.41,204.39a273.08,273.08,0,0,0,41.14-2.76A26.59,26.59,0,0,0,224.46,193l20.67-23.25c-2.6-6.61-11.37-9.29-11.37-9.29-5.65,6.84-23.49,14.09-25.65,22a155,155,0,0,0-20.18-1.75l4.79-2a19.6,19.6,0,0,0,9.14-7.71L216,148.49c-5.27-6.21-14.19-6.65-14.19-6.65-3.86,7.88-15,16.2-17.39,22.89-17.4,1.49-24.07,4.76-30.7,8.88Z"
              style={{ fill: "rgb(55, 71, 79)", transformOrigin: "199.425px 173.12px" }}
              id="elwhbmt3ezrla"
              className="animable"
            ></path>
            <g id="elfk2hprlpv7g">
              <g
                style={{ opacity: "0.2", transformOrigin: "192.544px 176.355px" }}
                className="animable"
              >
                <path
                  d="M215,191c1.75-7.87-2.42-11.29-4.59-12.44a10.39,10.39,0,0,0-2.26,3.85A11.18,11.18,0,0,1,215,191Z"
                  id="elz3f49kdwium"
                  className="animable"
                  style={{ transformOrigin: "211.784px 184.78px" }}
                ></path>
                <path
                  d="M169.67,172s6.12,1.53,11.69,8.67c0,0,2.51,0,6.57,0l4.79-2,.83-.38-10.44.46A21.83,21.83,0,0,0,169.67,172Z"
                  id="ellcoae71lm2m"
                  className="animable"
                  style={{ transformOrigin: "181.61px 176.335px" }}
                ></path>
                <path
                  d="M191.14,170.89c.32-5.94-3.47-8.38-5.18-9.18a14.77,14.77,0,0,0-1.56,3A10.27,10.27,0,0,1,191.14,170.89Z"
                  id="eldpm9jqtl7xh"
                  className="animable"
                  style={{ transformOrigin: "187.78px 166.3px" }}
                ></path>
              </g>
            </g>
            <path
              d="M112,163.58c-2.59,19.51,5.33,35,24.4,40.58,10.19,2.92,31.77,1.45,31.77,1.45,6.8-16.83,1.14-24.79-14.49-32-9.7,3.13-12-8-12.41-9.36-7-3.68-24.5-8.93-24.5-8.93C112.88,157,112,163.58,112,163.58Z"
              style={{
fill: "#0c4ca9d4",
                transformOrigin: "141.264px 180.65px"
              }}
              id="elppubkwbe1u"
              className="animable"
            ></path>
            <path
              d="M130.18,160.89l-2.8-5.06-11.22,7.57,4.44,6a7.47,7.47,0,0,0,6,.24A7.65,7.65,0,0,0,130.7,165,5.4,5.4,0,0,0,130.18,160.89Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "123.526px 162.993px"
              }}
              id="elg4hg8nrwmad"
              className="animable"
            ></path>
            <g id="elua1tdewanf">
              <path
                d="M130.18,160.89l-2.8-5.06-11.22,7.57,4.44,6a7.47,7.47,0,0,0,6,.24A7.65,7.65,0,0,0,130.7,165,5.4,5.4,0,0,0,130.18,160.89Z"
                style={{ opacity: "0.3", transformOrigin: "123.526px 162.993px" }}
                className="animable"
              ></path>
            </g>
            <g id="el7qu3ap1lrjh">
              <path
                d="M126.33,156.54c0,6.09-4.84,9-7.81,10l-2.36-3.17Z"
                style={{ opacity: "0.3", transformOrigin: "121.245px 161.54px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M103.07,150.31a11,11,0,0,1-3.92-2A5.9,5.9,0,0,1,97,144.6a4.09,4.09,0,0,1,1.66-3.85,4.76,4.76,0,0,1-.61-4.78,5.31,5.31,0,0,1,4.08-3.05,7.33,7.33,0,0,1,1.44-5.78,7.06,7.06,0,0,1,5.22-2.67,3.88,3.88,0,0,1,6.73-3A6.11,6.11,0,0,1,127.29,124a4.59,4.59,0,1,1,7.57,5.18,4.44,4.44,0,0,1,2.59,8.14,5.15,5.15,0,0,1-1.26,9.6,4.55,4.55,0,0,1-6.78,5.18,7.27,7.27,0,0,1-12.56-1,8.15,8.15,0,0,1-6.8,3.17A9.21,9.21,0,0,1,103.07,150.31Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "118.597px 136.451px"
              }}
              id="el38jncnhz1mx"
              className="animable"
            ></path>
            <path
              d="M102.59,139.17a40.18,40.18,0,0,0,2.3,21.5,7.76,7.76,0,0,0,2.93,4.05c1.54.88,3.45.69,5.21.43a26.64,26.64,0,0,0,8.24-2.32,11.26,11.26,0,0,0,5.7-6.14,4.93,4.93,0,0,0,5-2,9.34,9.34,0,0,0,1.62-5.45c0-1.24-.23-2.69-1.34-3.24s-2.26.07-3.16.79a9.34,9.34,0,0,0-3.07,4.62c-.82-3-2.09-5.91-2.9-8.91a5.07,5.07,0,0,0-1.75-3.14c-1.26-.8-2.91-.34-4.36,0A28.71,28.71,0,0,1,102.59,139.17Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "117.815px 152.142px"
              }}
              id="el8eygv2q7lqe"
              className="animable"
            ></path>
            <g id="elzq36vklkxjs">
              <path
                d="M102.59,139.17a40.18,40.18,0,0,0,2.3,21.5,7.76,7.76,0,0,0,2.93,4.05c1.54.88,3.45.69,5.21.43a26.64,26.64,0,0,0,8.24-2.32,11.26,11.26,0,0,0,5.7-6.14,4.93,4.93,0,0,0,5-2,9.34,9.34,0,0,0,1.62-5.45c0-1.24-.23-2.69-1.34-3.24s-2.26.07-3.16.79a9.34,9.34,0,0,0-3.07,4.62c-.82-3-2.09-5.91-2.9-8.91a5.07,5.07,0,0,0-1.75-3.14c-1.26-.8-2.91-.34-4.36,0A28.71,28.71,0,0,1,102.59,139.17Z"
                style={{ opacity: "0.3", transformOrigin: "117.815px 152.142px" }}
                className="animable"
              ></path>
            </g>
            <polygon
              points="111.35 148.29 107.83 154.21 112.02 154.99 111.35 148.29"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "109.925px 151.64px"
              }}
              id="elnpahd5hi1m8"
              className="animable"
            ></polygon>
            <g id="el1ljcdkxukmj">
              <polygon
                points="111.35 148.29 107.83 154.21 112.02 154.99 111.35 148.29"
                style={{ opacity: "0.3", transformOrigin: "109.925px 151.64px" }}
                className="animable"
              ></polygon>
            </g>
            <path
              d="M116.06,157l-3.18,1.55a2.09,2.09,0,0,0,2.41.69A1.87,1.87,0,0,0,116.06,157Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "114.528px 158.189px"
              }}
              id="el4je752s5jdp"
              className="animable"
            ></path>
            <g id="el7v3qfymetc3">
              <path
                d="M116.06,157l-3.18,1.55a2.09,2.09,0,0,0,2.41.69A1.87,1.87,0,0,0,116.06,157Z"
                style={{ opacity: "0.5", transformOrigin: "114.528px 158.189px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M114.19,159.37a1.94,1.94,0,0,0,1.1-.1,1.69,1.69,0,0,0,.85-1.68,1.91,1.91,0,0,0-2,1.78Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "115.146px 158.498px"
              }}
              id="ely0cc1b75g9g"
              className="animable"
            ></path>
            <path
              d="M117.42,148.52a1.21,1.21,0,1,1-1.32-1.07A1.2,1.2,0,0,1,117.42,148.52Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "116.217px 148.654px"
              }}
              id="elu5l7ndm11ed"
              className="animable"
            ></path>
            <path
              d="M107.32,149.15a1.2,1.2,0,0,1-1.07,1.32,1.22,1.22,0,0,1-1.32-1.08,1.2,1.2,0,1,1,2.39-.24Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "106.125px 149.271px"
              }}
              id="el1brx2kkluqj"
              className="animable"
            ></path>
            <path
              d="M105.68,144.5l-2.47,2.1a1.7,1.7,0,0,1,.33-1.93A2.05,2.05,0,0,1,105.68,144.5Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "104.362px 145.438px"
              }}
              id="el4e1hri0aw7g"
              className="animable"
            ></path>
            <path
              d="M115.92,143.32c.94.53,1.89,1.05,2.84,1.57a1.73,1.73,0,0,0-.71-1.83A2,2,0,0,0,115.92,143.32Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "117.363px 143.878px"
              }}
              id="eliln5y8jyvda"
              className="animable"
            ></path>
            <path
              d="M95.67,195.74c-2.72-1.16-6.87-6.63-2.39-11.67C100.16,185.42,99.16,193.73,95.67,195.74Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "94.841px 189.905px"
              }}
              id="el3bs903l70r2"
              className="animable"
            ></path>
            <g id="el9sqz6vr8i7r">
              <path
                d="M95.67,195.74c-2.72-1.16-6.87-6.63-2.39-11.67C100.16,185.42,99.16,193.73,95.67,195.74Z"
                style={{ opacity: "0.3", transformOrigin: "94.841px 189.905px" }}
                className="animable"
              ></path>
            </g>
            <g id="elulizfxx4ael">
              <path
                d="M95.67,195.74c-2.72-1.16-6.87-6.63-2.39-11.67C100.16,185.42,99.16,193.73,95.67,195.74Z"
                style={{ opacity: "0.3", transformOrigin: "94.841px 189.905px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M141.58,164.22c-7.88-1.93-34.72,14.47-34.72,14.47C99.38,179.45,77,193.26,77,193.26l-7.7-1.44a2.55,2.55,0,0,0-3,2.24l-.5,4.58a4,4,0,0,0,1.94,3.88l5.49,3.25a4,4,0,0,0,3.36.34l.74-.25a1.92,1.92,0,0,0,1.13-2.59h0c2.23-.44,4.4-4.13,4.4-4.13,8.41-3.63,24.11-8.88,29.86-11.17C131.13,180.19,153.2,173,141.58,164.22Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "105.294px 185.197px"
              }}
              id="elbkqdieinqac"
              className="animable"
            ></path>
            <g id="elxro6vn8cyo8">
              <path
                d="M141.58,164.22c-7.88-1.93-34.72,14.47-34.72,14.47C99.38,179.45,77,193.26,77,193.26l-7.7-1.44a2.55,2.55,0,0,0-3,2.24l-.5,4.58a4,4,0,0,0,1.94,3.88l5.49,3.25a4,4,0,0,0,3.36.34l.74-.25a1.92,1.92,0,0,0,1.13-2.59h0c2.23-.44,4.4-4.13,4.4-4.13,8.41-3.63,24.11-8.88,29.86-11.17C131.13,180.19,153.2,173,141.58,164.22Z"
                style={{ opacity: "0.3", transformOrigin: "105.294px 185.197px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M95.67,195.74c1.55-1.63,2-9.32-2.39-11.67a41.17,41.17,0,0,1,13.24-6.15c9.09-6.8,29.52-16.36,35.06-13.7,5.89,2.57,5.59,8.28,0,11.29s-21.64,10.74-27.84,13.28S95.67,195.74,95.67,195.74Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "119.583px 179.752px"
              }}
              id="elkzp99um5sed"
              className="animable"
            ></path>
            <g id="elmjjoexjct">
              <path
                d="M95.67,195.74c1.55-1.63,2-9.32-2.39-11.67a41.17,41.17,0,0,1,13.24-6.15c9.09-6.8,29.52-16.36,35.06-13.7,5.89,2.57,5.59,8.28,0,11.29s-21.64,10.74-27.84,13.28S95.67,195.74,95.67,195.74Z"
                style={{ opacity: "0.2", transformOrigin: "119.583px 179.752px" }}
                className="animable"
              ></path>
            </g>
            <g id="el24z0k3yh8qa">
              <path
                d="M78.5,203.27a4.14,4.14,0,0,0-2.64,0c.76-1.39.38-4,.38-4a3.2,3.2,0,0,1,.54,3.25A1.51,1.51,0,0,1,78.5,203.27Z"
                style={{ opacity: "0.3", transformOrigin: "77.18px 201.27px" }}
                className="animable"
              ></path>
            </g>
          </g>
          <g
            id="freepik--character-2--inject-5"
            className="animable"
            style={{ transformOrigin: "328.193px 205.638px" }}
          >
            <path
              d="M384.75,155.47c2,.09,4.19-1,4.72-2.91s-.62-3.72-1.7-5.31c-1.38-2-2.75-4.06-4.13-6.08-1.15-1.7-2.38-3.48-4.22-4.4a6.9,6.9,0,0,0-6,0,8.42,8.42,0,0,0-2.86,2.31c-.08,1.21-.17,2.41-.19,3.61a9.47,9.47,0,0,0,.7,4.49c1.22,2.38,3.83,3.2,6.19,3.93,1.94.6,2.86,2,4.11,3.41A9.49,9.49,0,0,0,384.75,155.47Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "379.968px 145.779px"
              }}
              id="elamyvdhyadi"
              className="animable"
            ></path>
            <g id="elof0z2wzrng9">
              <path
                d="M381,154.18a9,9,0,0,0-3.27-2.79l2.57-3.48A13.75,13.75,0,0,1,381,154.18Z"
                style={{ opacity: "0.3", transformOrigin: "379.415px 151.045px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M370.53,139.12a8.42,8.42,0,0,1,2.86-2.31,6.9,6.9,0,0,1,6,0c1.84.92,3.07,2.7,4.22,4.4,1.38,2,2.75,4.05,4.13,6.08,1.08,1.59,2.21,3.46,1.7,5.31s-2.73,3-4.72,2.91a9.49,9.49,0,0,1-3.41-.91l.43.48a23.52,23.52,0,0,0,3.74,3.23,7.62,7.62,0,0,0,5,1.72,5.63,5.63,0,0,0,4.55-4.35,9.84,9.84,0,0,0-1-6.5,43.51,43.51,0,0,0-3.6-5.65,57.27,57.27,0,0,1-4.51-7.86,37.32,37.32,0,0,0-3.12-5.94,8.69,8.69,0,0,0-5.39-3.71,5.11,5.11,0,0,0-5,1.89,8,8,0,0,0-1.1,3.36A77.58,77.58,0,0,0,370.53,139.12Z"
              style={{ fill: "rgb(55, 71, 79)", transformOrigin: "382.867px 142.98px" }}
              id="el3w25bsa3n42"
              className="animable"
            ></path>
            <path
              d="M370.4,141.2c-2.28,4.94-5.17,16.7-5.17,16.7,5.84,3.36,13.18.81,13.18.81l1.91-10.8C380.14,140.22,371.51,138.78,370.4,141.2Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "372.775px 149.882px"
              }}
              id="elhn65t1glt59"
              className="animable"
            ></path>
            <path
              d="M316,236.51c23.16.13,53.67-3.56,68-5.48a23.85,23.85,0,0,0,14.43-7.58c10-11,24.4-29.38,24.4-29.38-3.33-8.37-9.88-9.14-9.88-9.14-8.69,7.5-20.28,12.49-26.17,18.1a19.25,19.25,0,0,0-4.62,6.14l-25-1.85,7.3-3.35a11,11,0,0,0,6.13-7.59L379.34,157c-7.94,3.47-12.1-.77-13.41-1.93-4.55,11.25-12.49,20.73-12.49,33.37-15.56,4.82-38.84,5.39-43.31,14.33Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "366.48px 195.792px"
              }}
              id="el1khnnqw7ra9"
              className="animable"
            ></path>
            <g id="elbotecjxni08">
              <path
                d="M316,236.51c23.16.13,53.67-3.56,68-5.48a23.85,23.85,0,0,0,14.43-7.58c10-11,24.4-29.38,24.4-29.38-3.33-8.37-9.88-9.14-9.88-9.14-8.69,7.5-20.28,12.49-26.17,18.1a19.25,19.25,0,0,0-4.62,6.14l-25-1.85,7.3-3.35a11,11,0,0,0,6.13-7.59L379.34,157c-7.94,3.47-12.1-.77-13.41-1.93-4.55,11.25-12.49,20.73-12.49,33.37-15.56,4.82-38.84,5.39-43.31,14.33Z"
                style={{ opacity: "0.4", transformOrigin: "366.48px 195.792px" }}
                className="animable"
              ></path>
            </g>
            <g id="el5h74y6cbne7">
              <g
                style={{ opacity: "0.3", transformOrigin: "359.444px 200.72px" }}
                className="animable"
              >
                <path
                  d="M330.25,199.08c9.24-2.24,18.72.92,21.73,5.16l10.22.76-5.06,2.32-6.63-.49A27.48,27.48,0,0,0,330.25,199.08Z"
                  id="el1regkjv5jsv"
                  className="animable"
                  style={{ transformOrigin: "346.225px 202.829px" }}
                ></path>
                <path
                  d="M359.63,192.93a9,9,0,0,0-6.19-4.49,28.9,28.9,0,0,1,.17-3A7.78,7.78,0,0,1,359.63,192.93Z"
                  id="eldxvg25tlm1n"
                  className="animable"
                  style={{ transformOrigin: "356.535px 189.185px" }}
                ></path>
                <path
                  d="M387.89,216a7.35,7.35,0,0,0-5.78-6.82A14.79,14.79,0,0,1,384,206C386.59,206.82,390.22,211.48,387.89,216Z"
                  id="el9d569t97tv"
                  className="animable"
                  style={{ transformOrigin: "385.374px 211px" }}
                ></path>
              </g>
            </g>
            <path
              d="M209.52,240.3,237.62,221S250,207,256.08,199.24s8-7,16.51-7.32l-6.95,19.16-13.53,13.11a55.14,55.14,0,0,1-13.35,9.52L214,246.28l-4.44,5.37-4.79,3.49a1.41,1.41,0,0,1-1.65,0h0a1.42,1.42,0,0,1-.34-2l2.81-4-5.13.81a6.14,6.14,0,0,0-2.76,1.19l-3.89,3a1.45,1.45,0,0,1-2-.19h0a1.44,1.44,0,0,1-.09-1.77l4-5.7a8.57,8.57,0,0,1,4.42-3.25Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "232.024px 223.663px"
              }}
              id="elzi9f3nbytbf"
              className="animable"
            ></path>
            <path
              d="M284.09,189.67l17.1,2.91c2.32,7.11,5.71,9.89,8.94,10.19,8.33,9.87,8.33,28.94,5.86,33.74-23.32,1-30-5.84-39.34-11.7-11.83.16-13.31-13.25-11.41-18.65,1.15-3.27,2.37-7.65,3.15-10.59a5.22,5.22,0,0,1,4.1-3.79Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "290.987px 213.139px"
              }}
              id="el3vivh4onuha"
              className="animable"
            ></path>
            <g id="eltveke1696pc">
              <path
                d="M284.09,189.67l17.1,2.91c2.32,7.11,5.71,9.89,8.94,10.19,8.33,9.87,8.33,28.94,5.86,33.74-23.32,1-30-5.84-39.34-11.7-11.83.16-13.31-13.25-11.41-18.65,1.15-3.27,2.37-7.65,3.15-10.59a5.22,5.22,0,0,1,4.1-3.79Z"
                style={{
                  fill: "rgb(255, 255, 255)",
                  opacity: "0.5",
                  transformOrigin: "290.987px 213.139px"
                }}
                className="animable"
              ></path>
            </g>
            <path
              d="M291.72,191c.11,14-12.28,12.52-18.19,10.73s-2.85-9.23-2.85-9.23l13.41-2.8Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "280.804px 196.278px"
              }}
              id="elzbjpaq8su1"
              className="animable"
            ></path>
            <path
              d="M282.7,181.54l1.39,8.13c-.23,14.34-8.79,12.56-10.56,12l-4.32-12.57Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "276.65px 191.795px"
              }}
              id="el883b0t2p46g"
              className="animable"
            ></path>
            <g id="el3jwtc9kreke">
              <path
                d="M281.36,182.29c-.84,8.25-6.19,10.79-10.73,11l-1.42-4.13Z"
                style={{ opacity: "0.3", transformOrigin: "275.285px 187.79px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M256.63,176.19c-2.62-3.51-5.32-7.18-6.13-11.49s.91-9.42,5-11.06c2.31-.94,5-.64,7.27-1.64,3.58-1.57,5.08-5.71,7-9.13a28.53,28.53,0,0,1,15.44-13c3.62-1.26,7.78-1.73,11.16.06s5.37,6.45,3.31,9.67c2.45-1.42,6.46-.27,8.36,1.82a6.45,6.45,0,0,1,.45,7.84c-1.48,2-4.11,3.12-5.31,5.34-1,1.8-.79,3.95-.9,6a21.72,21.72,0,0,1-9,15.83,28.11,28.11,0,0,1-17.71,5.11C269.28,181.27,260.38,181.2,256.63,176.19Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "279.956px 155.165px"
              }}
              id="el5dj9hzkuu6m"
              className="animable"
            ></path>
            <path
              d="M254.82,165.68a50.79,50.79,0,0,0-.22,18.56c.41,2.31,1.08,4.77,2.91,6.24,2.25,1.81,5.47,1.54,8.34,1.17a33,33,0,0,0,9.19-2.06,11.24,11.24,0,0,0,6.45-6.51,4,4,0,0,0,4.89-.8,7.21,7.21,0,0,0,1.81-4.92c0-1.62-.38-3.45-1.78-4.29a3.7,3.7,0,0,0-3.2-.14,8,8,0,0,0-2.67,1.93,5.48,5.48,0,0,1-1.27,1.09,1.58,1.58,0,0,1-1.6,0,2.3,2.3,0,0,1-.68-1.88c-.14-2.82-.43-5.74-1.87-8.17s-4.36-4.2-7.08-3.46c-1.25.33-2.38,1.16-3.67,1.19a5.84,5.84,0,0,1-2.91-.95l0,0C258.47,161,255.48,162.39,254.82,165.68Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "271.021px 176.942px"
              }}
              id="elnyd49bqoayf"
              className="animable"
            ></path>
            <polygon
              points="263.62 173.29 259.91 179.54 264.33 180.37 263.62 173.29"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "262.12px 176.83px"
              }}
              id="eldf15trlh6m6"
              className="animable"
            ></polygon>
            <g id="ele9mmhxh1op">
              <polygon
                points="263.62 173.29 259.91 179.54 264.33 180.37 263.62 173.29"
                style={{ opacity: "0.1", transformOrigin: "262.12px 176.83px" }}
                className="animable"
              ></polygon>
            </g>
            <path
              d="M268.6,182.52l-3.36,1.64a2.21,2.21,0,0,0,2.55.73A2,2,0,0,0,268.6,182.52Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "266.98px 183.778px"
              }}
              id="elsbpl4ox9jer"
              className="animable"
            ></path>
            <g id="elhj0fj4g7lve">
              <path
                d="M268.6,182.52l-3.36,1.64a2.21,2.21,0,0,0,2.55.73A2,2,0,0,0,268.6,182.52Z"
                style={{ opacity: "0.3", transformOrigin: "266.98px 183.778px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M266.62,185a2.1,2.1,0,0,0,1.17-.11,1.82,1.82,0,0,0,.9-1.78,2.13,2.13,0,0,0-1.33.46A2.09,2.09,0,0,0,266.62,185Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "267.661px 184.074px"
              }}
              id="elt94kny6ady"
              className="animable"
            ></path>
            <g id="eli4hesdsry9l">
              <path
                d="M266.62,185a2.1,2.1,0,0,0,1.17-.11,1.82,1.82,0,0,0,.9-1.78,2.13,2.13,0,0,0-1.33.46A2.09,2.09,0,0,0,266.62,185Z"
                style={{ opacity: "0.1", transformOrigin: "267.661px 184.074px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M270,173.54a1.27,1.27,0,1,1-1.39-1.14A1.27,1.27,0,0,1,270,173.54Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "268.736px 173.664px"
              }}
              id="el6k7usa1ee34"
              className="animable"
            ></path>
            <path
              d="M259.37,174.2a1.27,1.27,0,1,1-1.39-1.14A1.27,1.27,0,0,1,259.37,174.2Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "258.106px 174.324px"
              }}
              id="elh4qx33moz4w"
              className="animable"
            ></path>
            <path
              d="M257.63,169.29,255,171.51a1.82,1.82,0,0,1,.35-2A2.16,2.16,0,0,1,257.63,169.29Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "256.236px 170.286px"
              }}
              id="el1enx4pe1hc8"
              className="animable"
            ></path>
            <path
              d="M268.45,168.05l3,1.65a1.8,1.8,0,0,0-.74-1.93A2.13,2.13,0,0,0,268.45,168.05Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "269.977px 168.633px"
              }}
              id="el497znk8ajz1"
              className="animable"
            ></path>
            <path
              d="M297.28,191.92c7.5-1.36,14.64,7.89,17.67,10.9,1.85,1.84,21.85,29.08,21.85,29.08l20.61,36.22,5.94,3.19a26,26,0,0,1,6.46,4.91l1.56,1.64a2.44,2.44,0,0,1-.63,3.84L368.25,283a5.54,5.54,0,0,1-5.06.07l-9-4.44L357,283a1.52,1.52,0,0,1-.5,2.13h0a1.51,1.51,0,0,1-1.79-.17l-2.65-2.36a8.6,8.6,0,0,1-2.75-4.91l-.86-4.77L325.7,241s-20.15-26.52-26.51-34.19S297.28,191.92,297.28,191.92Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "333.904px 238.566px"
              }}
              id="elcwwq8e0kpuo"
              className="animable"
            ></path>
            <path
              d="M456.37,191.06c.11-1.62-1-3.07-2-4.3a53.35,53.35,0,0,0-11-9.62,29.47,29.47,0,0,0-7.41-3.68,20.7,20.7,0,0,0-9.58-.58c-1.9,2.47-11.05,10.94-13.34,13.06,2.6,3.05,6.2,5.68,8.82,8.71l11.11-9.92a62.64,62.64,0,0,1,19.83,9.39,3.25,3.25,0,0,0,3.64-3.06Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "434.74px 183.61px"
              }}
              id="ell0n0d3y5hl"
              className="animable"
            ></path>
            <path
              d="M428.7,169.56c-.75,1.14-1.56,2.24-2.39,3.32a20.7,20.7,0,0,1,9.58.58,29.47,29.47,0,0,1,7.41,3.68,53.35,53.35,0,0,1,11,9.62c1.07,1.23,2.14,2.68,2,4.3a3.25,3.25,0,0,1-3.64,3.06l1.36,1a16.1,16.1,0,0,0,5,3c1.87.55,4.19.17,5.26-1.46,1-1.47.67-3.44.15-5.14a27.88,27.88,0,0,0-12.18-15.63c-3.61-2.18-7.84-3.62-10.51-6.88-1.52-1.86-2.65-4.38-5-5a5.4,5.4,0,0,0-4.9,1.41A19.77,19.77,0,0,0,428.7,169.56Z"
              style={{
                fill: "rgb(55, 71, 79)",
                transformOrigin: "445.618px 181.123px"
              }}
              id="el3zjwstdye3k"
              className="animable"
            ></path>
          </g>
          <g
            id="freepik--character-3--inject-5"
            className="animable"
            style={{ transformOrigin: "295.765px 336.965px" }}
          >
            <path
              d="M214.11,307.6c-4.43,4.91-3.66,14,2.66,17.07C227.53,315.82,217.82,308.74,214.11,307.6Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "216.497px 316.135px"
              }}
              id="elz83tx0rkwm"
              className="animable"
            ></path>
            <g id="elf1mktl51vo8">
              <path
                d="M214.11,307.6c-4.43,4.91-3.66,14,2.66,17.07C227.53,315.82,217.82,308.74,214.11,307.6Z"
                style={{ opacity: "0.3", transformOrigin: "216.497px 316.135px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M252.38,304.25c-10-4.07-27.73,1.71-43.31,5-27-.63-55.24,12.64-55.24,12.64s-8.52-1.68-12.71,0-2.61,9.74-.93,11.38,7.73,2.74,7.73,2.74h0a1.75,1.75,0,0,0,1.59,1.74l.38,0a9.22,9.22,0,0,0,6.63-2.06h0a9.31,9.31,0,0,0,2.19-2.6l2.35-4.16c25.82-3,46.08-4.82,46.08-4.82l44.07-3.65Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "195.414px 320.317px"
              }}
              id="elchsq1ec17lb"
              className="animable"
            ></path>
            <path
              d="M216.77,324.67s6.1-7.61-2.66-17.07c9.48-2.68,30.75-9.1,38.27-3.35l-1.17,16.2Z"
              style={{ fill: "rgb(170, 43, 45)", transformOrigin: "233.245px 313.3px" }}
              id="elox13ptz7ibk"
              className="animable"
            ></path>
            <g id="el0vklc4v4n44f">
              <path
                d="M216.77,324.67s6.1-7.61-2.66-17.07c9.48-2.68,30.75-9.1,38.27-3.35l-1.17,16.2Z"
                style={{
                  fill: "rgb(255, 255, 255)",
                  opacity: "0.3",
                  transformOrigin: "233.245px 313.3px"
                }}
                className="animable"
              ></path>
            </g>
            <g id="el64y0hevntvj">
              <path
                d="M147.92,336l2.32.24a2.52,2.52,0,0,0,1.63-.38l1.69-1.08a1.72,1.72,0,0,0,.78-1.75l-.53-3.06.95,1.08a2.73,2.73,0,0,1,.57,2.61h0a3.05,3.05,0,0,1-1.52,1.82l-2,1.05a2,2,0,0,1-1.5.15Z"
                style={{ opacity: "0.3", transformOrigin: "151.684px 333.366px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M426.78,291.36c1.45-.52,3.84.06,5.73,1.42s3.2,3.36,4.61,5.22a45.38,45.38,0,0,0,7.14,7.52,54.82,54.82,0,0,1,4.89,4.24,10.26,10.26,0,0,1,2.93,5.64,6.2,6.2,0,0,1-1.13,4.35,5.84,5.84,0,0,0,2.08-5.3,10.22,10.22,0,0,0-2.93-5.65,53.35,53.35,0,0,0-4.89-4.23,46.63,46.63,0,0,1-7.14-7.52c-1.41-1.86-2.71-4.1-4.6-5.46s-4.29-1.93-5.74-1.42Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "439.932px 304.868px"
              }}
              id="elpi1v9ffv168"
              className="animable"
            ></path>
            <path
              d="M441.67,312.05c-1.37-1.37-2.89,1.16-5.55,1.22.56.49,1.11,1,1.64,1.55C440.61,314.31,442.6,313,441.67,312.05Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "439.011px 313.232px"
              }}
              id="elcts75misi5"
              className="animable"
            ></path>
            <path
              d="M438.72,309.32c-1.37-1.38-3.42,1.39-6.18,1.45a10.81,10.81,0,0,1,1.2.67q.5.31,1,.66C437.61,311.6,439.66,310.25,438.72,309.32Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "435.745px 310.518px"
              }}
              id="elt0vgqw6x58t"
              className="animable"
            ></path>
            <path
              d="M420.56,300.4a2.62,2.62,0,0,0-.4,1.83l7.2,7.58a8.93,8.93,0,0,1,5.18,1c2.76-.06,4.81-2.83,6.18-1.45.94.93-1.11,2.28-4,2.78.49.37,1,.76,1.42,1.17,2.66-.06,4.18-2.59,5.55-1.22.93.93-1.06,2.26-3.91,2.77l1,1.05c.31.31.6.65.89,1,4.87.57,7.44-1.53,10.75-5.54a14.88,14.88,0,0,0-1.27-1.56,54.82,54.82,0,0,0-4.89-4.24,45.38,45.38,0,0,1-7.14-7.52c-1.41-1.86-2.71-3.86-4.61-5.22s-4.28-1.94-5.73-1.42Z"
              style={{
                fill: "rgb(69, 90, 100)",
                transformOrigin: "435.275px 304.112px"
              }}
              id="elzhd9uj7n4f"
              className="animable"
            ></path>
            <path
              d="M439.67,316.86a16.44,16.44,0,0,0,3.7,3.7,6.24,6.24,0,0,0,6.22.43,4.75,4.75,0,0,0,1.36-1.24,6.2,6.2,0,0,0,1.13-4.35,9.18,9.18,0,0,0-1.66-4.08C447.11,315.33,444.54,317.43,439.67,316.86Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "445.896px 316.471px"
              }}
              id="eliq7c1ncp1k8"
              className="animable"
            ></path>
            <path
              d="M417.48,320.67,429,308.56a2.07,2.07,0,0,0,0-2.93l-3.73-3.72a3.39,3.39,0,0,0-4.72-.08l-12.69,11.4Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "418.734px 310.791px"
              }}
              id="el79nb46bckg"
              className="animable"
            ></path>
            <path
              d="M380.74,265c1.32-.81,3.78-.73,5.91.2s3.82,2.64,5.58,4.17a46.29,46.29,0,0,0,8.54,5.88,53.7,53.7,0,0,1,5.66,3.14,10.2,10.2,0,0,1,4,4.92,6.13,6.13,0,0,1-.21,4.48,5.84,5.84,0,0,0,.95-5.61,10.2,10.2,0,0,0-4-4.92,54.72,54.72,0,0,0-5.66-3.14,46,46,0,0,1-8.54-5.88c-1.76-1.53-3.5-3.45-5.63-4.39s-4.59-1-5.91-.21Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "396.123px 275.441px"
              }}
              id="elwihv7m4ta7h"
              className="animable"
            ></path>
            <path
              d="M399.59,282.17c-1.62-1.06-2.59,1.73-5.18,2.33.65.37,1.29.77,1.92,1.18C399,284.59,400.68,282.88,399.59,282.17Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "397.168px 283.806px"
              }}
              id="elvfxylonuc9"
              className="animable"
            ></path>
            <path
              d="M396.14,280.1c-1.63-1.07-3.07,2.07-5.75,2.7a12.33,12.33,0,0,1,1.31.4q.56.21,1.08.45C395.53,282.56,397.25,280.82,396.14,280.1Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "393.436px 281.765px"
              }}
              id="elze0d0bob31d"
              className="animable"
            ></path>
            <path
              d="M376.53,275.12a2.62,2.62,0,0,0,0,1.87l8.61,5.93a9,9,0,0,1,5.27-.12c2.68-.63,4.12-3.77,5.75-2.7,1.11.72-.61,2.46-3.36,3.55.56.26,1.1.54,1.63.85,2.59-.6,3.56-3.39,5.18-2.33,1.09.71-.58,2.42-3.26,3.51l1.22.82c.36.24.72.51,1.08.79,4.88-.45,6.95-3,9.36-7.64a13.52,13.52,0,0,0-1.56-1.27,53.7,53.7,0,0,0-5.66-3.14,46.29,46.29,0,0,1-8.54-5.88c-1.76-1.53-3.44-3.23-5.58-4.17s-4.59-1-5.91-.2Z"
              style={{
                fill: "rgb(69, 90, 100)",
                transformOrigin: "392.184px 275.862px"
              }}
              id="ellmc82hl7sp"
              className="animable"
            ></path>
            <path
              d="M398.63,287.29a16.44,16.44,0,0,0,4.37,2.85,6.21,6.21,0,0,0,6.18-.86,4.53,4.53,0,0,0,1.07-1.5,6.13,6.13,0,0,0,.21-4.48,9,9,0,0,0-2.47-3.65C405.58,284.25,403.51,286.84,398.63,287.29Z"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "404.708px 285.126px"
              }}
              id="eloyo4krummij"
              className="animable"
            ></path>
            <path
              d="M377.69,295.59l8.81-14.23a2.09,2.09,0,0,0-.6-2.87l-4.42-2.87a3.39,3.39,0,0,0-4.64.89l-10.06,13.78Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "376.806px 285.326px"
              }}
              id="el08z1y74igqce"
              className="animable"
            ></path>
            <path
              d="M318.13,364.83a365,365,0,0,0,55.23-3.7,35.74,35.74,0,0,0,21.36-11.63l27.75-31.22c-3.5-8.89-15.27-12.48-15.27-12.48-7.59,9.18-31.54,18.92-34.43,29.52-11.53-2.07-27.1-2.35-27.1-2.35l6.43-2.65A26.4,26.4,0,0,0,364.38,320l18.95-30.18c-7.07-8.34-19.05-8.94-19.05-8.94-5.19,10.58-20.16,21.76-23.35,30.74-23.35,2-32.31,6.39-41.22,11.93Z"
              style={{
                fill: "rgb(69, 90, 100)",
                transformOrigin: "361.09px 322.862px"
              }}
              id="elafnh3hoxho6"
              className="animable"
            ></path>
            <g id="el1zvriyytmjp">
              <path
                d="M318.13,364.83a365,365,0,0,0,55.23-3.7,35.74,35.74,0,0,0,21.36-11.63l27.75-31.22c-3.5-8.89-15.27-12.48-15.27-12.48-7.59,9.18-31.54,18.92-34.43,29.52-11.53-2.07-27.1-2.35-27.1-2.35l6.43-2.65A26.4,26.4,0,0,0,364.38,320l18.95-30.18c-7.07-8.34-19.05-8.94-19.05-8.94-5.19,10.58-20.16,21.76-23.35,30.74-23.35,2-32.31,6.39-41.22,11.93Z"
                style={{
                  fill: "rgb(255, 255, 255)",
                  opacity: "0.5",
                  transformOrigin: "361.09px 322.862px"
                }}
                className="animable"
              ></path>
            </g>
            <g id="el27ad5muuaj9">
              <g
                style={{ opacity: "0.2", transformOrigin: "351.856px 327.195px" }}
                className="animable"
              >
                <path
                  d="M382,346.85c2.35-10.57-3.25-15.16-6.16-16.71a13.77,13.77,0,0,0-3,5.18C380.06,338.45,381.89,345.09,382,346.85Z"
                  id="eles8dv0vl7jn"
                  className="animable"
                  style={{ transformOrigin: "377.701px 338.495px" }}
                ></path>
                <path
                  d="M321.15,321.32s8.22,2.06,15.7,11.65c0,0,3.38-.06,8.82,0l6.43-2.65c.38-.16.75-.34,1.12-.51l-14,.61A29.29,29.29,0,0,0,321.15,321.32Z"
                  id="elgk9166v5ev7"
                  className="animable"
                  style={{ transformOrigin: "337.185px 327.145px" }}
                ></path>
                <path
                  d="M350,319.86c.43-8-4.65-11.25-7-12.32a20.14,20.14,0,0,0-2.1,4A13.77,13.77,0,0,1,350,319.86Z"
                  id="elg9klmud3lw"
                  className="animable"
                  style={{ transformOrigin: "345.463px 313.7px" }}
                ></path>
              </g>
            </g>
            <path
              d="M243.76,310c-3.48,26.2,7.15,47,32.75,54.49,13.69,3.92,42.66,2,42.66,2,9.14-22.6,1.54-33.29-19.46-43-13,4.19-16.1-10.78-16.66-12.58-9.38-4.94-32.89-12-32.89-12C244.91,301.25,243.76,310,243.76,310Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "283.051px 332.935px"
              }}
              id="elijx70wdtww"
              className="animable"
            ></path>
            <path
              d="M268.14,306.44l-3.76-6.8L249.32,309.8l6,8a10,10,0,0,0,8.09.32,10.26,10.26,0,0,0,5.46-6.12A7.18,7.18,0,0,0,268.14,306.44Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "259.226px 309.232px"
              }}
              id="el1ltdph7ggr5"
              className="animable"
            ></path>
            <g id="el6fx2xjdmdev">
              <path
                d="M263,300.59c0,8.18-6.5,12-10.48,13.47l-3.17-4.26Z"
                style={{ opacity: "0.3", transformOrigin: "256.175px 307.325px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M267.11,294.22c-1.26,1.57-2.91,3-4.91,3.24-2.63.27-5-1.68-6.49-3.85s-2.53-4.7-4.36-6.6a12.78,12.78,0,0,0-9.43-3.53,24.54,24.54,0,0,0-10,2.81,11.57,11.57,0,0,1-5.67-12.55,1,1,0,0,1,1.81-.4,6.8,6.8,0,0,0,1,1.1,15.29,15.29,0,0,1,2.15-9.15,15.68,15.68,0,0,1,5.68-5.47,1.43,1.43,0,0,1,2,.63,5.87,5.87,0,0,0,1.8,2.2,19.48,19.48,0,0,1,9.24-7,1.21,1.21,0,0,1,1.61,1.07c.38,5.37,9.65,8.85,12.64,11.25a6.16,6.16,0,0,1,2.65-3.63,6.46,6.46,0,0,1,4.51-1l-5,5.22a14.72,14.72,0,0,0,5.23-1.12,1.43,1.43,0,0,1,2,1.16A9.41,9.41,0,0,1,272,275a17.44,17.44,0,0,0,1.62-.8.84.84,0,0,1,1.23.86,13.56,13.56,0,0,1-4.18,7.92,5.18,5.18,0,0,0,1.17-.21,1,1,0,0,1,1.39,1.13,12,12,0,0,1-2,4.46C270,290.28,268.53,292.46,267.11,294.22Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "250.424px 276.533px"
              }}
              id="elzonarylrkth"
              className="animable"
            ></path>
            <path
              d="M231.09,277.27a54.12,54.12,0,0,0,3.1,28.87c.85,2.11,1.94,4.3,3.92,5.43s4.64.94,7,.58A35.42,35.42,0,0,0,256.17,309a15.12,15.12,0,0,0,7.66-8.25,6.63,6.63,0,0,0,6.7-2.63,12.46,12.46,0,0,0,2.17-7.32c0-1.65-.3-3.61-1.79-4.34s-3.05.08-4.24,1.05a12.65,12.65,0,0,0-4.13,6.2c-1.1-4-2.8-7.92-3.9-12-.43-1.59-1-3.32-2.34-4.2-1.7-1.09-3.91-.46-5.86,0A38.55,38.55,0,0,1,231.09,277.27Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "251.531px 294.668px"
              }}
              id="elhjjbvc0wbn"
              className="animable"
            ></path>
            <polygon
              points="242.85 289.52 238.14 297.46 243.76 298.51 242.85 289.52"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "240.95px 294.015px"
              }}
              id="elad9rs0onn34"
              className="animable"
            ></polygon>
            <path
              d="M249.19,301.25l-4.28,2.08a2.78,2.78,0,0,0,3.24.92A2.53,2.53,0,0,0,249.19,301.25Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "247.124px 302.846px"
              }}
              id="elzy4xu2q3yl"
              className="animable"
            ></path>
            <g id="el80wkt8rjq3s">
              <path
                d="M249.19,301.25l-4.28,2.08a2.78,2.78,0,0,0,3.24.92A2.53,2.53,0,0,0,249.19,301.25Z"
                style={{ opacity: "0.3", transformOrigin: "247.124px 302.846px" }}
                className="animable"
              ></path>
            </g>
            <path
              d="M246.67,304.39a2.55,2.55,0,0,0,1.48-.14,2.25,2.25,0,0,0,1.14-2.25,2.65,2.65,0,0,0-1.68.59A2.68,2.68,0,0,0,246.67,304.39Z"
              style={{
                fill: "rgb(242, 143, 143)",
                transformOrigin: "247.989px 303.221px"
              }}
              id="elelgazubwub"
              className="animable"
            ></path>
            <path
              d="M251,289.83a1.61,1.61,0,1,1-1.77-1.44A1.62,1.62,0,0,1,251,289.83Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "249.398px 289.992px"
              }}
              id="el92bk7t2a8cg"
              className="animable"
            ></path>
            <path
              d="M237.45,290.67a1.61,1.61,0,1,1-1.77-1.44A1.62,1.62,0,0,1,237.45,290.67Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "235.848px 290.832px"
              }}
              id="elnn7w5vyta6"
              className="animable"
            ></path>
            <path
              d="M235.24,284.43l-3.31,2.82a2.3,2.3,0,0,1,.44-2.59A2.72,2.72,0,0,1,235.24,284.43Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "233.476px 285.688px"
              }}
              id="elsr54iwqnyte"
              className="animable"
            ></path>
            <path
              d="M249,282.85l3.81,2.1a2.29,2.29,0,0,0-1-2.45A2.72,2.72,0,0,0,249,282.85Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "250.935px 283.605px"
              }}
              id="el901t3nzej0b"
              className="animable"
            ></path>
            <path
              d="M329.36,340.79l-21.25-17a70.48,70.48,0,0,0-25.06-12.84,31.37,31.37,0,0,0,15.75,30l19.95,11.35.86,34.94-.31,6.59-3.69,2.42-6.35,7.63a1.2,1.2,0,0,0-.09,1.43h0a1.21,1.21,0,0,0,1.64.38l5.75-3.46-1.07,5.6a5.86,5.86,0,0,1-.91,2.19l-4.26,6.19a1.36,1.36,0,0,0,.21,1.79h0a1.37,1.37,0,0,0,1.47.23l3.86-1.75a19.14,19.14,0,0,0,10.45-12l2.79-9.39a22,22,0,0,0,.82-4.17l3.87-39.62A12,12,0,0,0,329.36,340.79Z"
              style={{
                fill: "rgb(255, 168, 167)",
                transformOrigin: "308.388px 364.649px"
              }}
              id="elpjdyc8w1m3"
              className="animable"
            ></path>
            <path
              d="M283.05,310.94l7.42,2.28a54.09,54.09,0,0,1,15.46,7.62l12.55,8.91c-.1,10.48-11.28,18.37-11.28,18.37l-15.69-9.27a20.44,20.44,0,0,1-9.69-21.4Z"
              style={{
                fill: "rgb(170, 43, 45)",
                transformOrigin: "299.972px 329.53px"
              }}
              id="elea7g55sovzw"
              className="animable"
            ></path>
            <g id="elq67nji6666d">
              <path
                d="M283.05,310.94l7.42,2.28a54.09,54.09,0,0,1,15.46,7.62l12.55,8.91c-.1,10.48-11.28,18.37-11.28,18.37l-15.69-9.27a20.44,20.44,0,0,1-9.69-21.4Z"
                style={{
                  fill: "rgb(255, 255, 255)",
                  opacity: "0.3",
                  transformOrigin: "299.972px 329.53px"
                }}
                className="animable"
              ></path>
            </g>
          </g>
          <defs>
            <filter id="active" height="200%">
              <feMorphology
                in="SourceAlpha"
                result="DILATED"
                operator="dilate"
                radius={2}
              ></feMorphology>
              <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK"></feFlood>
              <feComposite
                in="PINK"
                in2="DILATED"
                operator="in"
                result="OUTLINE"
              ></feComposite>
              <feMerge>
                <feMergeNode in="OUTLINE"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter id="hover" height="200%">
              <feMorphology
                in="SourceAlpha"
                result="DILATED"
                operator="dilate"
                radius={2}
              ></feMorphology>
              <feFlood floodColor="#ff0000" floodOpacity="0.5" result="PINK"></feFlood>
              <feComposite
                in="PINK"
                in2="DILATED"
                operator="in"
                result="OUTLINE"
              ></feComposite>
              <feMerge>
                <feMergeNode in="OUTLINE"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
              <feColorMatrix
                type="matrix"
                values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>

      </div>
      
      <div className="welcome__content">
        <h1 className="welcome__heading">Your learning path is ready. 
          Create a free account to start building connections.
        </h1>

        <div className="social-login-buttons">
          <button className="login-button google-button">
          <FontAwesomeIcon icon={faGoogle} className="input-icon" />
            Login with Google
          </button>
          <button className="login-button facebook-button">
          <FontAwesomeIcon icon={faFacebook} className="input-icon" />
            Login with Facebook
          </button>
        </div>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <p>By clicking Sign up, I agree to Marcopolo’s Terms and Privacy Policy</p>
          </div>

          <button type="submit" className="login-button">
            Sign up
          </button>
        </form>

        <div className="signup-prompt">
          <p>Exsisting user?</p>
          <Link to="/signup" className="signup-link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

