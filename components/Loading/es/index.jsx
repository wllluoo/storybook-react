/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
import imgPath from './assets/loader.gif';
import PropTypes from 'prop-types';
import React from 'react';
const style = require('./index.css')
console.log('style', style);

const Loading = ({ show, className }) => show && 
<img src={imgPath} alt="" className={`${style["u-loading"]} ${className}`} />
 || '';


Loading.defaultProps = {
	show: true,
	imgPath: "../assets/loader.gif",
	className: "",
};
Loading.propTypes = {
	 /** 是否显示 */
	show: PropTypes.bool,
	/** 图片路径 */
	imgPath: PropTypes.string,
	/** 自定义className */
	className: PropTypes.string,
};


export default Loading;

