import $ from 'jquery'
// import './css/index.css'

import './css/demo.less'
$(function () {  
  $('ul>li:odd').css('backgroundColor', 'red')
  $('ul>li:even').css('backgroundColor', 'purple')
})