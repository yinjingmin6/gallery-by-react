require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//  获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');
// 利用函数 将图片名信息转成图片URL路径信息
function getImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleID = imageDatasArr[i];
		singleID.imageURL = require('../images/' + singleID.fileName);
		imageDatasArr[i] = singleID;
	}
	return imageDatasArr;
}
var imageDatas = getImageURL(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec"></section>
    		<nav className="controller-nav"></nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
