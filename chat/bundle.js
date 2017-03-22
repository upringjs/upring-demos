(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

const yo = require('yo-yo')
const nes = require('nes')
const css = 0

;((require('sheetify/insert')("/*! TACHYONS v4.6.1 | http://tachyons.io */\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}/* 1 */ [type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}/* 1 */ menu,details{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}.border-box,a,article,body,code,dd,div,dl,dt,fieldset,footer,form,h1,h2,h3,h4,h5,h6,header,html,input[type=email],input[type=number],input[type=password],input[type=tel],input[type=text],input[type=url],legend,li,main,ol,p,pre,section,table,td,textarea,th,tr,ul{box-sizing:border-box}.aspect-ratio{height:0;position:relative}.aspect-ratio--16x9{padding-bottom:56.25%}.aspect-ratio--9x16{padding-bottom:177.77%}.aspect-ratio--4x3{padding-bottom:75%}.aspect-ratio--3x4{padding-bottom:133.33%}.aspect-ratio--6x4{padding-bottom:66.6%}.aspect-ratio--4x6{padding-bottom:150%}.aspect-ratio--8x5{padding-bottom:62.5%}.aspect-ratio--5x8{padding-bottom:160%}.aspect-ratio--7x5{padding-bottom:71.42%}.aspect-ratio--5x7{padding-bottom:140%}.aspect-ratio--1x1{padding-bottom:100%}.aspect-ratio--object{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}img{max-width:100%}.cover{background-size:cover!important}.contain{background-size:contain!important}.bg-center{background-position:50%}.bg-center,.bg-top{background-repeat:no-repeat}.bg-top{background-position:top}.bg-right{background-position:100%}.bg-bottom,.bg-right{background-repeat:no-repeat}.bg-bottom{background-position:bottom}.bg-left{background-repeat:no-repeat;background-position:0}.outline{outline:1px solid}.outline-transparent{outline:1px solid transparent}.outline-0{outline:0}.ba{border-style:solid;border-width:1px}.bt{border-top-style:solid;border-top-width:1px}.br{border-right-style:solid;border-right-width:1px}.bb{border-bottom-style:solid;border-bottom-width:1px}.bl{border-left-style:solid;border-left-width:1px}.bn{border-style:none;border-width:0}.b--black{border-color:#000}.b--near-black{border-color:#111}.b--dark-gray{border-color:#333}.b--mid-gray{border-color:#555}.b--gray{border-color:#777}.b--silver{border-color:#999}.b--light-silver{border-color:#aaa}.b--moon-gray{border-color:#ccc}.b--light-gray{border-color:#eee}.b--near-white{border-color:#f4f4f4}.b--white{border-color:#fff}.b--white-90{border-color:hsla(0,0%,100%,.9)}.b--white-80{border-color:hsla(0,0%,100%,.8)}.b--white-70{border-color:hsla(0,0%,100%,.7)}.b--white-60{border-color:hsla(0,0%,100%,.6)}.b--white-50{border-color:hsla(0,0%,100%,.5)}.b--white-40{border-color:hsla(0,0%,100%,.4)}.b--white-30{border-color:hsla(0,0%,100%,.3)}.b--white-20{border-color:hsla(0,0%,100%,.2)}.b--white-10{border-color:hsla(0,0%,100%,.1)}.b--white-05{border-color:hsla(0,0%,100%,.05)}.b--white-025{border-color:hsla(0,0%,100%,.025)}.b--white-0125{border-color:hsla(0,0%,100%,.0125)}.b--black-90{border-color:rgba(0,0,0,.9)}.b--black-80{border-color:rgba(0,0,0,.8)}.b--black-70{border-color:rgba(0,0,0,.7)}.b--black-60{border-color:rgba(0,0,0,.6)}.b--black-50{border-color:rgba(0,0,0,.5)}.b--black-40{border-color:rgba(0,0,0,.4)}.b--black-30{border-color:rgba(0,0,0,.3)}.b--black-20{border-color:rgba(0,0,0,.2)}.b--black-10{border-color:rgba(0,0,0,.1)}.b--black-05{border-color:rgba(0,0,0,.05)}.b--black-025{border-color:rgba(0,0,0,.025)}.b--black-0125{border-color:rgba(0,0,0,.0125)}.b--dark-red{border-color:#e7040f}.b--red{border-color:#ff4136}.b--light-red{border-color:#ff725c}.b--orange{border-color:#ff6300}.b--gold{border-color:#ffb700}.b--yellow{border-color:gold}.b--light-yellow{border-color:#fbf1a9}.b--purple{border-color:#5e2ca5}.b--light-purple{border-color:#a463f2}.b--dark-pink{border-color:#d5008f}.b--hot-pink{border-color:#ff41b4}.b--pink{border-color:#ff80cc}.b--light-pink{border-color:#ffa3d7}.b--dark-green{border-color:#137752}.b--green{border-color:#19a974}.b--light-green{border-color:#9eebcf}.b--navy{border-color:#001b44}.b--dark-blue{border-color:#00449e}.b--blue{border-color:#357edd}.b--light-blue{border-color:#96ccff}.b--lightest-blue{border-color:#cdecff}.b--washed-blue{border-color:#f6fffe}.b--washed-green{border-color:#e8fdf5}.b--washed-yellow{border-color:#fffceb}.b--washed-red{border-color:#ffdfdf}.b--transparent{border-color:transparent}.br0{border-radius:0}.br1{border-radius:.125rem}.br2{border-radius:.25rem}.br3{border-radius:.5rem}.br4{border-radius:1rem}.br-100{border-radius:100%}.br-pill{border-radius:9999px}.br--bottom{border-top-left-radius:0;border-top-right-radius:0}.br--top{border-bottom-right-radius:0}.br--right,.br--top{border-bottom-left-radius:0}.br--right{border-top-left-radius:0}.br--left{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted{border-style:dotted}.b--dashed{border-style:dashed}.b--solid{border-style:solid}.b--none{border-style:none}.bw0{border-width:0}.bw1{border-width:.125rem}.bw2{border-width:.25rem}.bw3{border-width:.5rem}.bw4{border-width:1rem}.bw5{border-width:2rem}.bt-0{border-top-width:0}.br-0{border-right-width:0}.bb-0{border-bottom-width:0}.bl-0{border-left-width:0}.shadow-1{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.pre{overflow-x:auto;overflow-y:hidden;overflow:scroll}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-1{top:1rem}.right-1{right:1rem}.bottom-1{bottom:1rem}.left-1{left:1rem}.top-2{top:2rem}.right-2{right:2rem}.bottom-2{bottom:2rem}.left-2{left:2rem}.top--1{top:-1rem}.right--1{right:-1rem}.bottom--1{bottom:-1rem}.left--1{left:-1rem}.top--2{top:-2rem}.right--2{right:-2rem}.bottom--2{bottom:-2rem}.left--2{left:-2rem}.absolute--fill{top:0;right:0;bottom:0;left:0}.cf:after,.cf:before{content:\" \";display:table}.cf:after{clear:both}.cf{*zoom:1}.cl{clear:left}.cr{clear:right}.cb{clear:both}.cn{clear:none}.dn{display:none}.di{display:inline}.db{display:block}.dib{display:inline-block}.dit{display:inline-table}.dt{display:table}.dtc{display:table-cell}.dt-row{display:table-row}.dt-row-group{display:table-row-group}.dt-column{display:table-column}.dt-column-group{display:table-column-group}.dt--fixed{table-layout:fixed;width:100%}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column,.flex-row{-webkit-box-direction:normal}.flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start{-ms-flex-item-align:start;align-self:flex-start}.self-end{-ms-flex-item-align:end;align-self:flex-end}.self-center{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-ms-flex-pack:distribute;justify-content:space-around}.content-start{-ms-flex-line-pack:start;align-content:flex-start}.content-end{-ms-flex-line-pack:end;align-content:flex-end}.content-center{-ms-flex-line-pack:center;align-content:center}.content-between{-ms-flex-line-pack:justify;align-content:space-between}.content-around{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl{float:left}.fl,.fr{_display:inline}.fr{float:right}.fn{float:none}.sans-serif{font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif}.serif{font-family:georgia,times,serif}.system-sans-serif{font-family:sans-serif}.system-serif{font-family:serif}.code,code{font-family:Consolas,monaco,monospace}.courier{font-family:Courier Next,courier,monospace}.helvetica{font-family:helvetica neue,helvetica,sans-serif}.avenir{font-family:avenir next,avenir,sans-serif}.athelas{font-family:athelas,georgia,serif}.georgia{font-family:georgia,serif}.times{font-family:times,serif}.bodoni{font-family:Bodoni MT,serif}.calisto{font-family:Calisto MT,serif}.garamond{font-family:garamond,serif}.baskerville{font-family:baskerville,serif}.i{font-style:italic}.fs-normal{font-style:normal}.normal{font-weight:400}.b{font-weight:700}.fw1{font-weight:100}.fw2{font-weight:200}.fw3{font-weight:300}.fw4{font-weight:400}.fw5{font-weight:500}.fw6{font-weight:600}.fw7{font-weight:700}.fw8{font-weight:800}.fw9{font-weight:900}.input-reset{-webkit-appearance:none;-moz-appearance:none}.button-reset::-moz-focus-inner,.input-reset::-moz-focus-inner{border:0;padding:0}.h1{height:1rem}.h2{height:2rem}.h3{height:4rem}.h4{height:8rem}.h5{height:16rem}.h-25{height:25%}.h-50{height:50%}.h-75{height:75%}.h-100{height:100%}.min-h-100{min-height:100%}.vh-25{height:25vh}.vh-50{height:50vh}.vh-75{height:75vh}.vh-100{height:100vh}.min-vh-100{min-height:100vh}.h-auto{height:auto}.h-inherit{height:inherit}.tracked{letter-spacing:.1em}.tracked-tight{letter-spacing:-.05em}.tracked-mega{letter-spacing:.25em}.lh-solid{line-height:1}.lh-title{line-height:1.25}.lh-copy{line-height:1.5}.link{text-decoration:none}.link,.link:active,.link:focus,.link:hover,.link:link,.link:visited{-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.link:focus{outline:1px dotted currentColor}.list{list-style-type:none}.mw-100{max-width:100%}.mw1{max-width:1rem}.mw2{max-width:2rem}.mw3{max-width:4rem}.mw4{max-width:8rem}.mw5{max-width:16rem}.mw6{max-width:32rem}.mw7{max-width:48rem}.mw8{max-width:64rem}.mw9{max-width:96rem}.mw-none{max-width:none}.w1{width:1rem}.w2{width:2rem}.w3{width:4rem}.w4{width:8rem}.w5{width:16rem}.w-10{width:10%}.w-20{width:20%}.w-25{width:25%}.w-30{width:30%}.w-33{width:33%}.w-34{width:34%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-75{width:75%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}.w-third{width:33.33333%}.w-two-thirds{width:66.66667%}.w-auto{width:auto}.overflow-visible{overflow:visible}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.overflow-x-visible{overflow-x:visible}.overflow-x-hidden{overflow-x:hidden}.overflow-x-scroll{overflow-x:scroll}.overflow-x-auto{overflow-x:auto}.overflow-y-visible{overflow-y:visible}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overflow-y-auto{overflow-y:auto}.static{position:static}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.o-100{opacity:1}.o-90{opacity:.9}.o-80{opacity:.8}.o-70{opacity:.7}.o-60{opacity:.6}.o-50{opacity:.5}.o-40{opacity:.4}.o-30{opacity:.3}.o-20{opacity:.2}.o-10{opacity:.1}.o-05{opacity:.05}.o-025{opacity:.025}.o-0{opacity:0}.rotate-45{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.black-90{color:rgba(0,0,0,.9)}.black-80{color:rgba(0,0,0,.8)}.black-70{color:rgba(0,0,0,.7)}.black-60{color:rgba(0,0,0,.6)}.black-50{color:rgba(0,0,0,.5)}.black-40{color:rgba(0,0,0,.4)}.black-30{color:rgba(0,0,0,.3)}.black-20{color:rgba(0,0,0,.2)}.black-10{color:rgba(0,0,0,.1)}.black-05{color:rgba(0,0,0,.05)}.white-90{color:hsla(0,0%,100%,.9)}.white-80{color:hsla(0,0%,100%,.8)}.white-70{color:hsla(0,0%,100%,.7)}.white-60{color:hsla(0,0%,100%,.6)}.white-50{color:hsla(0,0%,100%,.5)}.white-40{color:hsla(0,0%,100%,.4)}.white-30{color:hsla(0,0%,100%,.3)}.white-20{color:hsla(0,0%,100%,.2)}.white-10{color:hsla(0,0%,100%,.1)}.black{color:#000}.near-black{color:#111}.dark-gray{color:#333}.mid-gray{color:#555}.gray{color:#777}.silver{color:#999}.light-silver{color:#aaa}.moon-gray{color:#ccc}.light-gray{color:#eee}.near-white{color:#f4f4f4}.white{color:#fff}.dark-red{color:#e7040f}.red{color:#ff4136}.light-red{color:#ff725c}.orange{color:#ff6300}.gold{color:#ffb700}.yellow{color:gold}.light-yellow{color:#fbf1a9}.purple{color:#5e2ca5}.light-purple{color:#a463f2}.dark-pink{color:#d5008f}.hot-pink{color:#ff41b4}.pink{color:#ff80cc}.light-pink{color:#ffa3d7}.dark-green{color:#137752}.green{color:#19a974}.light-green{color:#9eebcf}.navy{color:#001b44}.dark-blue{color:#00449e}.blue{color:#357edd}.light-blue{color:#96ccff}.lightest-blue{color:#cdecff}.washed-blue{color:#f6fffe}.washed-green{color:#e8fdf5}.washed-yellow{color:#fffceb}.washed-red{color:#ffdfdf}.bg-black-90{background-color:rgba(0,0,0,.9)}.bg-black-80{background-color:rgba(0,0,0,.8)}.bg-black-70{background-color:rgba(0,0,0,.7)}.bg-black-60{background-color:rgba(0,0,0,.6)}.bg-black-50{background-color:rgba(0,0,0,.5)}.bg-black-40{background-color:rgba(0,0,0,.4)}.bg-black-30{background-color:rgba(0,0,0,.3)}.bg-black-20{background-color:rgba(0,0,0,.2)}.bg-black-10{background-color:rgba(0,0,0,.1)}.bg-black-05{background-color:rgba(0,0,0,.05)}.bg-white-90{background-color:hsla(0,0%,100%,.9)}.bg-white-80{background-color:hsla(0,0%,100%,.8)}.bg-white-70{background-color:hsla(0,0%,100%,.7)}.bg-white-60{background-color:hsla(0,0%,100%,.6)}.bg-white-50{background-color:hsla(0,0%,100%,.5)}.bg-white-40{background-color:hsla(0,0%,100%,.4)}.bg-white-30{background-color:hsla(0,0%,100%,.3)}.bg-white-20{background-color:hsla(0,0%,100%,.2)}.bg-white-10{background-color:hsla(0,0%,100%,.1)}.bg-black{background-color:#000}.bg-near-black{background-color:#111}.bg-dark-gray{background-color:#333}.bg-mid-gray{background-color:#555}.bg-gray{background-color:#777}.bg-silver{background-color:#999}.bg-light-silver{background-color:#aaa}.bg-moon-gray{background-color:#ccc}.bg-light-gray{background-color:#eee}.bg-near-white{background-color:#f4f4f4}.bg-white{background-color:#fff}.bg-transparent{background-color:transparent}.bg-dark-red{background-color:#e7040f}.bg-red{background-color:#ff4136}.bg-light-red{background-color:#ff725c}.bg-orange{background-color:#ff6300}.bg-gold{background-color:#ffb700}.bg-yellow{background-color:gold}.bg-light-yellow{background-color:#fbf1a9}.bg-purple{background-color:#5e2ca5}.bg-light-purple{background-color:#a463f2}.bg-dark-pink{background-color:#d5008f}.bg-hot-pink{background-color:#ff41b4}.bg-pink{background-color:#ff80cc}.bg-light-pink{background-color:#ffa3d7}.bg-dark-green{background-color:#137752}.bg-green{background-color:#19a974}.bg-light-green{background-color:#9eebcf}.bg-navy{background-color:#001b44}.bg-dark-blue{background-color:#00449e}.bg-blue{background-color:#357edd}.bg-light-blue{background-color:#96ccff}.bg-lightest-blue{background-color:#cdecff}.bg-washed-blue{background-color:#f6fffe}.bg-washed-green{background-color:#e8fdf5}.bg-washed-yellow{background-color:#fffceb}.bg-washed-red{background-color:#ffdfdf}.hover-black:focus,.hover-black:hover{color:#000}.hover-near-black:focus,.hover-near-black:hover{color:#111}.hover-dark-gray:focus,.hover-dark-gray:hover{color:#333}.hover-mid-gray:focus,.hover-mid-gray:hover{color:#555}.hover-gray:focus,.hover-gray:hover{color:#777}.hover-silver:focus,.hover-silver:hover{color:#999}.hover-light-silver:focus,.hover-light-silver:hover{color:#aaa}.hover-moon-gray:focus,.hover-moon-gray:hover{color:#ccc}.hover-light-gray:focus,.hover-light-gray:hover{color:#eee}.hover-near-white:focus,.hover-near-white:hover{color:#f4f4f4}.hover-white:focus,.hover-white:hover{color:#fff}.hover-black-90:focus,.hover-black-90:hover{color:rgba(0,0,0,.9)}.hover-black-80:focus,.hover-black-80:hover{color:rgba(0,0,0,.8)}.hover-black-70:focus,.hover-black-70:hover{color:rgba(0,0,0,.7)}.hover-black-60:focus,.hover-black-60:hover{color:rgba(0,0,0,.6)}.hover-black-50:focus,.hover-black-50:hover{color:rgba(0,0,0,.5)}.hover-black-40:focus,.hover-black-40:hover{color:rgba(0,0,0,.4)}.hover-black-30:focus,.hover-black-30:hover{color:rgba(0,0,0,.3)}.hover-black-20:focus,.hover-black-20:hover{color:rgba(0,0,0,.2)}.hover-black-10:focus,.hover-black-10:hover{color:rgba(0,0,0,.1)}.hover-white-90:focus,.hover-white-90:hover{color:hsla(0,0%,100%,.9)}.hover-white-80:focus,.hover-white-80:hover{color:hsla(0,0%,100%,.8)}.hover-white-70:focus,.hover-white-70:hover{color:hsla(0,0%,100%,.7)}.hover-white-60:focus,.hover-white-60:hover{color:hsla(0,0%,100%,.6)}.hover-white-50:focus,.hover-white-50:hover{color:hsla(0,0%,100%,.5)}.hover-white-40:focus,.hover-white-40:hover{color:hsla(0,0%,100%,.4)}.hover-white-30:focus,.hover-white-30:hover{color:hsla(0,0%,100%,.3)}.hover-white-20:focus,.hover-white-20:hover{color:hsla(0,0%,100%,.2)}.hover-white-10:focus,.hover-white-10:hover{color:hsla(0,0%,100%,.1)}.hover-bg-black:focus,.hover-bg-black:hover{background-color:#000}.hover-bg-near-black:focus,.hover-bg-near-black:hover{background-color:#111}.hover-bg-dark-gray:focus,.hover-bg-dark-gray:hover{background-color:#333}.hover-bg-dark-gray:focus,.hover-bg-mid-gray:hover{background-color:#555}.hover-bg-gray:focus,.hover-bg-gray:hover{background-color:#777}.hover-bg-silver:focus,.hover-bg-silver:hover{background-color:#999}.hover-bg-light-silver:focus,.hover-bg-light-silver:hover{background-color:#aaa}.hover-bg-moon-gray:focus,.hover-bg-moon-gray:hover{background-color:#ccc}.hover-bg-light-gray:focus,.hover-bg-light-gray:hover{background-color:#eee}.hover-bg-near-white:focus,.hover-bg-near-white:hover{background-color:#f4f4f4}.hover-bg-white:focus,.hover-bg-white:hover{background-color:#fff}.hover-bg-transparent:focus,.hover-bg-transparent:hover{background-color:transparent}.hover-bg-black-90:focus,.hover-bg-black-90:hover{background-color:rgba(0,0,0,.9)}.hover-bg-black-80:focus,.hover-bg-black-80:hover{background-color:rgba(0,0,0,.8)}.hover-bg-black-70:focus,.hover-bg-black-70:hover{background-color:rgba(0,0,0,.7)}.hover-bg-black-60:focus,.hover-bg-black-60:hover{background-color:rgba(0,0,0,.6)}.hover-bg-black-50:focus,.hover-bg-black-50:hover{background-color:rgba(0,0,0,.5)}.hover-bg-black-40:focus,.hover-bg-black-40:hover{background-color:rgba(0,0,0,.4)}.hover-bg-black-30:focus,.hover-bg-black-30:hover{background-color:rgba(0,0,0,.3)}.hover-bg-black-20:focus,.hover-bg-black-20:hover{background-color:rgba(0,0,0,.2)}.hover-bg-black-10:focus,.hover-bg-black-10:hover{background-color:rgba(0,0,0,.1)}.hover-bg-white-90:focus,.hover-bg-white-90:hover{background-color:hsla(0,0%,100%,.9)}.hover-bg-white-80:focus,.hover-bg-white-80:hover{background-color:hsla(0,0%,100%,.8)}.hover-bg-white-70:focus,.hover-bg-white-70:hover{background-color:hsla(0,0%,100%,.7)}.hover-bg-white-60:focus,.hover-bg-white-60:hover{background-color:hsla(0,0%,100%,.6)}.hover-bg-white-50:focus,.hover-bg-white-50:hover{background-color:hsla(0,0%,100%,.5)}.hover-bg-white-40:focus,.hover-bg-white-40:hover{background-color:hsla(0,0%,100%,.4)}.hover-bg-white-30:focus,.hover-bg-white-30:hover{background-color:hsla(0,0%,100%,.3)}.hover-bg-white-20:focus,.hover-bg-white-20:hover{background-color:hsla(0,0%,100%,.2)}.hover-bg-white-10:focus,.hover-bg-white-10:hover{background-color:hsla(0,0%,100%,.1)}.hover-dark-red:focus,.hover-dark-red:hover{color:#e7040f}.hover-red:focus,.hover-red:hover{color:#ff4136}.hover-light-red:focus,.hover-light-red:hover{color:#ff725c}.hover-orange:focus,.hover-orange:hover{color:#ff6300}.hover-gold:focus,.hover-gold:hover{color:#ffb700}.hover-yellow:focus,.hover-yellow:hover{color:gold}.hover-light-yellow:focus,.hover-light-yellow:hover{color:#fbf1a9}.hover-purple:focus,.hover-purple:hover{color:#5e2ca5}.hover-light-purple:focus,.hover-light-purple:hover{color:#a463f2}.hover-dark-pink:focus,.hover-dark-pink:hover{color:#d5008f}.hover-hot-pink:focus,.hover-hot-pink:hover{color:#ff41b4}.hover-pink:focus,.hover-pink:hover{color:#ff80cc}.hover-light-pink:focus,.hover-light-pink:hover{color:#ffa3d7}.hover-dark-green:focus,.hover-dark-green:hover{color:#137752}.hover-green:focus,.hover-green:hover{color:#19a974}.hover-light-green:focus,.hover-light-green:hover{color:#9eebcf}.hover-navy:focus,.hover-navy:hover{color:#001b44}.hover-dark-blue:focus,.hover-dark-blue:hover{color:#00449e}.hover-blue:focus,.hover-blue:hover{color:#357edd}.hover-light-blue:focus,.hover-light-blue:hover{color:#96ccff}.hover-lightest-blue:focus,.hover-lightest-blue:hover{color:#cdecff}.hover-washed-blue:focus,.hover-washed-blue:hover{color:#f6fffe}.hover-washed-green:focus,.hover-washed-green:hover{color:#e8fdf5}.hover-washed-yellow:focus,.hover-washed-yellow:hover{color:#fffceb}.hover-washed-red:focus,.hover-washed-red:hover{color:#ffdfdf}.hover-bg-dark-red:focus,.hover-bg-dark-red:hover{background-color:#e7040f}.hover-bg-red:focus,.hover-bg-red:hover{background-color:#ff4136}.hover-bg-light-red:focus,.hover-bg-light-red:hover{background-color:#ff725c}.hover-bg-orange:focus,.hover-bg-orange:hover{background-color:#ff6300}.hover-bg-gold:focus,.hover-bg-gold:hover{background-color:#ffb700}.hover-bg-yellow:focus,.hover-bg-yellow:hover{background-color:gold}.hover-bg-light-yellow:focus,.hover-bg-light-yellow:hover{background-color:#fbf1a9}.hover-bg-purple:focus,.hover-bg-purple:hover{background-color:#5e2ca5}.hover-bg-light-purple:focus,.hover-bg-light-purple:hover{background-color:#a463f2}.hover-bg-dark-pink:focus,.hover-bg-dark-pink:hover{background-color:#d5008f}.hover-bg-hot-pink:focus,.hover-bg-hot-pink:hover{background-color:#ff41b4}.hover-bg-pink:focus,.hover-bg-pink:hover{background-color:#ff80cc}.hover-bg-light-pink:focus,.hover-bg-light-pink:hover{background-color:#ffa3d7}.hover-bg-dark-green:focus,.hover-bg-dark-green:hover{background-color:#137752}.hover-bg-green:focus,.hover-bg-green:hover{background-color:#19a974}.hover-bg-light-green:focus,.hover-bg-light-green:hover{background-color:#9eebcf}.hover-bg-navy:focus,.hover-bg-navy:hover{background-color:#001b44}.hover-bg-dark-blue:focus,.hover-bg-dark-blue:hover{background-color:#00449e}.hover-bg-blue:focus,.hover-bg-blue:hover{background-color:#357edd}.hover-bg-light-blue:focus,.hover-bg-light-blue:hover{background-color:#96ccff}.hover-bg-lightest-blue:focus,.hover-bg-lightest-blue:hover{background-color:#cdecff}.hover-bg-washed-blue:focus,.hover-bg-washed-blue:hover{background-color:#f6fffe}.hover-bg-washed-green:focus,.hover-bg-washed-green:hover{background-color:#e8fdf5}.hover-bg-washed-yellow:focus,.hover-bg-washed-yellow:hover{background-color:#fffceb}.hover-bg-washed-red:focus,.hover-bg-washed-red:hover{background-color:#ffdfdf}.pa0{padding:0}.pa1{padding:.25rem}.pa2{padding:.5rem}.pa3{padding:1rem}.pa4{padding:2rem}.pa5{padding:4rem}.pa6{padding:8rem}.pa7{padding:16rem}.pl0{padding-left:0}.pl1{padding-left:.25rem}.pl2{padding-left:.5rem}.pl3{padding-left:1rem}.pl4{padding-left:2rem}.pl5{padding-left:4rem}.pl6{padding-left:8rem}.pl7{padding-left:16rem}.pr0{padding-right:0}.pr1{padding-right:.25rem}.pr2{padding-right:.5rem}.pr3{padding-right:1rem}.pr4{padding-right:2rem}.pr5{padding-right:4rem}.pr6{padding-right:8rem}.pr7{padding-right:16rem}.pb0{padding-bottom:0}.pb1{padding-bottom:.25rem}.pb2{padding-bottom:.5rem}.pb3{padding-bottom:1rem}.pb4{padding-bottom:2rem}.pb5{padding-bottom:4rem}.pb6{padding-bottom:8rem}.pb7{padding-bottom:16rem}.pt0{padding-top:0}.pt1{padding-top:.25rem}.pt2{padding-top:.5rem}.pt3{padding-top:1rem}.pt4{padding-top:2rem}.pt5{padding-top:4rem}.pt6{padding-top:8rem}.pt7{padding-top:16rem}.pv0{padding-top:0;padding-bottom:0}.pv1{padding-top:.25rem;padding-bottom:.25rem}.pv2{padding-top:.5rem;padding-bottom:.5rem}.pv3{padding-top:1rem;padding-bottom:1rem}.pv4{padding-top:2rem;padding-bottom:2rem}.pv5{padding-top:4rem;padding-bottom:4rem}.pv6{padding-top:8rem;padding-bottom:8rem}.pv7{padding-top:16rem;padding-bottom:16rem}.ph0{padding-left:0;padding-right:0}.ph1{padding-left:.25rem;padding-right:.25rem}.ph2{padding-left:.5rem;padding-right:.5rem}.ph3{padding-left:1rem;padding-right:1rem}.ph4{padding-left:2rem;padding-right:2rem}.ph5{padding-left:4rem;padding-right:4rem}.ph6{padding-left:8rem;padding-right:8rem}.ph7{padding-left:16rem;padding-right:16rem}.ma0{margin:0}.ma1{margin:.25rem}.ma2{margin:.5rem}.ma3{margin:1rem}.ma4{margin:2rem}.ma5{margin:4rem}.ma6{margin:8rem}.ma7{margin:16rem}.ml0{margin-left:0}.ml1{margin-left:.25rem}.ml2{margin-left:.5rem}.ml3{margin-left:1rem}.ml4{margin-left:2rem}.ml5{margin-left:4rem}.ml6{margin-left:8rem}.ml7{margin-left:16rem}.mr0{margin-right:0}.mr1{margin-right:.25rem}.mr2{margin-right:.5rem}.mr3{margin-right:1rem}.mr4{margin-right:2rem}.mr5{margin-right:4rem}.mr6{margin-right:8rem}.mr7{margin-right:16rem}.mb0{margin-bottom:0}.mb1{margin-bottom:.25rem}.mb2{margin-bottom:.5rem}.mb3{margin-bottom:1rem}.mb4{margin-bottom:2rem}.mb5{margin-bottom:4rem}.mb6{margin-bottom:8rem}.mb7{margin-bottom:16rem}.mt0{margin-top:0}.mt1{margin-top:.25rem}.mt2{margin-top:.5rem}.mt3{margin-top:1rem}.mt4{margin-top:2rem}.mt5{margin-top:4rem}.mt6{margin-top:8rem}.mt7{margin-top:16rem}.mv0{margin-top:0;margin-bottom:0}.mv1{margin-top:.25rem;margin-bottom:.25rem}.mv2{margin-top:.5rem;margin-bottom:.5rem}.mv3{margin-top:1rem;margin-bottom:1rem}.mv4{margin-top:2rem;margin-bottom:2rem}.mv5{margin-top:4rem;margin-bottom:4rem}.mv6{margin-top:8rem;margin-bottom:8rem}.mv7{margin-top:16rem;margin-bottom:16rem}.mh0{margin-left:0;margin-right:0}.mh1{margin-left:.25rem;margin-right:.25rem}.mh2{margin-left:.5rem;margin-right:.5rem}.mh3{margin-left:1rem;margin-right:1rem}.mh4{margin-left:2rem;margin-right:2rem}.mh5{margin-left:4rem;margin-right:4rem}.mh6{margin-left:8rem;margin-right:8rem}.mh7{margin-left:16rem;margin-right:16rem}.na1{margin:-.25rem}.na2{margin:-.5rem}.na3{margin:-1rem}.na4{margin:-2rem}.na5{margin:-4rem}.na6{margin:-8rem}.na7{margin:-16rem}.nl1{margin-left:-.25rem}.nl2{margin-left:-.5rem}.nl3{margin-left:-1rem}.nl4{margin-left:-2rem}.nl5{margin-left:-4rem}.nl6{margin-left:-8rem}.nl7{margin-left:-16rem}.nr1{margin-right:-.25rem}.nr2{margin-right:-.5rem}.nr3{margin-right:-1rem}.nr4{margin-right:-2rem}.nr5{margin-right:-4rem}.nr6{margin-right:-8rem}.nr7{margin-right:-16rem}.nb1{margin-bottom:-.25rem}.nb2{margin-bottom:-.5rem}.nb3{margin-bottom:-1rem}.nb4{margin-bottom:-2rem}.nb5{margin-bottom:-4rem}.nb6{margin-bottom:-8rem}.nb7{margin-bottom:-16rem}.nt1{margin-top:-.25rem}.nt2{margin-top:-.5rem}.nt3{margin-top:-1rem}.nt4{margin-top:-2rem}.nt5{margin-top:-4rem}.nt6{margin-top:-8rem}.nt7{margin-top:-16rem}.collapse{border-collapse:collapse;border-spacing:0}.striped--light-silver:nth-child(odd){background-color:#aaa}.striped--moon-gray:nth-child(odd){background-color:#ccc}.striped--light-gray:nth-child(odd){background-color:#eee}.striped--near-white:nth-child(odd){background-color:#f4f4f4}.stripe-light:nth-child(odd){background-color:hsla(0,0%,100%,.1)}.stripe-dark:nth-child(odd){background-color:rgba(0,0,0,.1)}.strike{text-decoration:line-through}.underline{text-decoration:underline}.no-underline{text-decoration:none}.tl{text-align:left}.tr{text-align:right}.tc{text-align:center}.ttc{text-transform:capitalize}.ttl{text-transform:lowercase}.ttu{text-transform:uppercase}.ttn{text-transform:none}.f-6,.f-headline{font-size:6rem}.f-5,.f-subheadline{font-size:5rem}.f1{font-size:3rem}.f2{font-size:2.25rem}.f3{font-size:1.5rem}.f4{font-size:1.25rem}.f5{font-size:1rem}.f6{font-size:.875rem}.measure{max-width:30em}.measure-wide{max-width:34em}.measure-narrow{max-width:20em}.indent{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps{font-variant:small-caps}.truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overflow-container{overflow-y:scroll}.center{margin-right:auto;margin-left:auto}.clip{position:fixed!important;_position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal{white-space:normal}.nowrap{white-space:nowrap}.pre{white-space:pre}.v-base{vertical-align:baseline}.v-mid{vertical-align:middle}.v-top{vertical-align:top}.v-btm{vertical-align:bottom}.dim{opacity:1}.dim,.dim:focus,.dim:hover{-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.dim:focus,.dim:hover{opacity:.5}.dim:active{opacity:.8;-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.glow,.glow:focus,.glow:hover{-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.glow:focus,.glow:hover{opacity:1}.hide-child .child{opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.hide-child:active .child,.hide-child:focus .child,.hide-child:hover .child{opacity:1;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.underline-hover:focus,.underline-hover:hover{text-decoration:underline}.grow{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .25s ease-out;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}.grow:focus,.grow:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.grow:active{-webkit-transform:scale(.9);transform:scale(.9)}.grow-large{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .25s ease-in-out;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.grow-large:focus,.grow-large:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.grow-large:active{-webkit-transform:scale(.95);transform:scale(.95)}.pointer:hover,.shadow-hover{cursor:pointer}.shadow-hover{position:relative;-webkit-transition:all .5s cubic-bezier(.165,.84,.44,1);transition:all .5s cubic-bezier(.165,.84,.44,1)}.shadow-hover:after{content:\"\";box-shadow:0 0 16px 2px rgba(0,0,0,.2);opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;-webkit-transition:opacity .5s cubic-bezier(.165,.84,.44,1);transition:opacity .5s cubic-bezier(.165,.84,.44,1)}.shadow-hover:focus:after,.shadow-hover:hover:after{opacity:1}.bg-animate,.bg-animate:focus,.bg-animate:hover{-webkit-transition:background-color .15s ease-in-out;transition:background-color .15s ease-in-out}.z-0{z-index:0}.z-1{z-index:1}.z-2{z-index:2}.z-3{z-index:3}.z-4{z-index:4}.z-5{z-index:5}.z-999{z-index:999}.z-9999{z-index:9999}.z-max{z-index:2147483647}.z-inherit{z-index:inherit}.z-initial{z-index:auto}.z-unset{z-index:unset}.nested-copy-line-height ol,.nested-copy-line-height p,.nested-copy-line-height ul{line-height:1.5}.nested-headline-line-height h1,.nested-headline-line-height h2,.nested-headline-line-height h3,.nested-headline-line-height h4,.nested-headline-line-height h5,.nested-headline-line-height h6{line-height:1.25}.nested-list-reset ol,.nested-list-reset ul{padding-left:0;margin-left:0;list-style-type:none}.nested-copy-indent p+p{text-indent:1em;margin-top:0;margin-bottom:0}.nested-copy-seperator p+p{margin-top:1.5em}.nested-img img{width:100%;max-width:100%;display:block}.nested-links a{color:#357edd;-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.nested-links a:focus,.nested-links a:hover{color:#96ccff;-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.debug *{outline:1px solid gold}.debug-white *{outline:1px solid #fff}.debug-black *{outline:1px solid #000}.debug-grid{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==) repeat 0 0}.debug-grid-16{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC) repeat 0 0}.debug-grid-8-solid{background:#fff url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMjI0OTczNjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMjI0OTc0NjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjEyMjQ5NzE2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjEyMjQ5NzI2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAgDASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAYBAQEAAAAAAAAAAAAAAAAAAAIEEAEBAAMBAAAAAAAAAAAAAAABADECA0ERAAEDBQAAAAAAAAAAAAAAAAARITFBUWESIv/aAAwDAQACEQMRAD8AoOnTV1QTD7JJshP3vSM3P//Z) repeat 0 0}.debug-grid-16-solid{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY3MkJEN0U2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY3MkJEN0Y2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3RDY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pve6J3kAAAAzSURBVHjaYvz//z8D0UDsMwMjSRoYP5Gq4SPNbRjVMEQ1fCRDg+in/6+J1AJUxsgAEGAA31BAJMS0GYEAAAAASUVORK5CYII=) repeat 0 0}@media screen and (min-width:30em){.aspect-ratio-ns{height:0;position:relative}.aspect-ratio--16x9-ns{padding-bottom:56.25%}.aspect-ratio--9x16-ns{padding-bottom:177.77%}.aspect-ratio--4x3-ns{padding-bottom:75%}.aspect-ratio--3x4-ns{padding-bottom:133.33%}.aspect-ratio--6x4-ns{padding-bottom:66.6%}.aspect-ratio--4x6-ns{padding-bottom:150%}.aspect-ratio--8x5-ns{padding-bottom:62.5%}.aspect-ratio--5x8-ns{padding-bottom:160%}.aspect-ratio--7x5-ns{padding-bottom:71.42%}.aspect-ratio--5x7-ns{padding-bottom:140%}.aspect-ratio--1x1-ns{padding-bottom:100%}.aspect-ratio--object-ns{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-ns{background-size:cover!important}.contain-ns{background-size:contain!important}.bg-center-ns{background-position:50%}.bg-center-ns,.bg-top-ns{background-repeat:no-repeat}.bg-top-ns{background-position:top}.bg-right-ns{background-position:100%}.bg-bottom-ns,.bg-right-ns{background-repeat:no-repeat}.bg-bottom-ns{background-position:bottom}.bg-left-ns{background-repeat:no-repeat;background-position:0}.outline-ns{outline:1px solid}.outline-transparent-ns{outline:1px solid transparent}.outline-0-ns{outline:0}.ba-ns{border-style:solid;border-width:1px}.bt-ns{border-top-style:solid;border-top-width:1px}.br-ns{border-right-style:solid;border-right-width:1px}.bb-ns{border-bottom-style:solid;border-bottom-width:1px}.bl-ns{border-left-style:solid;border-left-width:1px}.bn-ns{border-style:none;border-width:0}.br0-ns{border-radius:0}.br1-ns{border-radius:.125rem}.br2-ns{border-radius:.25rem}.br3-ns{border-radius:.5rem}.br4-ns{border-radius:1rem}.br-100-ns{border-radius:100%}.br-pill-ns{border-radius:9999px}.br--bottom-ns{border-top-left-radius:0;border-top-right-radius:0}.br--top-ns{border-bottom-right-radius:0}.br--right-ns,.br--top-ns{border-bottom-left-radius:0}.br--right-ns{border-top-left-radius:0}.br--left-ns{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-ns{border-style:dotted}.b--dashed-ns{border-style:dashed}.b--solid-ns{border-style:solid}.b--none-ns{border-style:none}.bw0-ns{border-width:0}.bw1-ns{border-width:.125rem}.bw2-ns{border-width:.25rem}.bw3-ns{border-width:.5rem}.bw4-ns{border-width:1rem}.bw5-ns{border-width:2rem}.bt-0-ns{border-top-width:0}.br-0-ns{border-right-width:0}.bb-0-ns{border-bottom-width:0}.bl-0-ns{border-left-width:0}.shadow-1-ns{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-ns{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-ns{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-ns{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-ns{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-ns{top:0}.left-0-ns{left:0}.right-0-ns{right:0}.bottom-0-ns{bottom:0}.top-1-ns{top:1rem}.left-1-ns{left:1rem}.right-1-ns{right:1rem}.bottom-1-ns{bottom:1rem}.top-2-ns{top:2rem}.left-2-ns{left:2rem}.right-2-ns{right:2rem}.bottom-2-ns{bottom:2rem}.top--1-ns{top:-1rem}.right--1-ns{right:-1rem}.bottom--1-ns{bottom:-1rem}.left--1-ns{left:-1rem}.top--2-ns{top:-2rem}.right--2-ns{right:-2rem}.bottom--2-ns{bottom:-2rem}.left--2-ns{left:-2rem}.absolute--fill-ns{top:0;right:0;bottom:0;left:0}.cl-ns{clear:left}.cr-ns{clear:right}.cb-ns{clear:both}.cn-ns{clear:none}.dn-ns{display:none}.di-ns{display:inline}.db-ns{display:block}.dib-ns{display:inline-block}.dit-ns{display:inline-table}.dt-ns{display:table}.dtc-ns{display:table-cell}.dt-row-ns{display:table-row}.dt-row-group-ns{display:table-row-group}.dt-column-ns{display:table-column}.dt-column-group-ns{display:table-column-group}.dt--fixed-ns{table-layout:fixed;width:100%}.flex-ns{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-ns{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-ns{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-ns{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-ns{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex-row-ns{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-ns{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start-ns{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-ns{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-ns{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-ns{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-ns{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-ns{-ms-flex-item-align:start;align-self:flex-start}.self-end-ns{-ms-flex-item-align:end;align-self:flex-end}.self-center-ns{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-ns{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-ns{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-ns{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-ns{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-ns{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-ns{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-ns{-ms-flex-pack:distribute;justify-content:space-around}.content-start-ns{-ms-flex-line-pack:start;align-content:flex-start}.content-end-ns{-ms-flex-line-pack:end;align-content:flex-end}.content-center-ns{-ms-flex-line-pack:center;align-content:center}.content-between-ns{-ms-flex-line-pack:justify;align-content:space-between}.content-around-ns{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-ns{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-ns{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-ns{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-ns{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-ns{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-ns{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-ns{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-ns{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-ns{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-ns{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-ns{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-ns{float:left}.fl-ns,.fr-ns{display:inline}.fr-ns{float:right}.fn-ns{float:none}.i-ns{font-style:italic}.fs-normal-ns{font-style:normal}.normal-ns{font-weight:400}.b-ns{font-weight:700}.fw1-ns{font-weight:100}.fw2-ns{font-weight:200}.fw3-ns{font-weight:300}.fw4-ns{font-weight:400}.fw5-ns{font-weight:500}.fw6-ns{font-weight:600}.fw7-ns{font-weight:700}.fw8-ns{font-weight:800}.fw9-ns{font-weight:900}.h1-ns{height:1rem}.h2-ns{height:2rem}.h3-ns{height:4rem}.h4-ns{height:8rem}.h5-ns{height:16rem}.h-25-ns{height:25%}.h-50-ns{height:50%}.h-75-ns{height:75%}.h-100-ns{height:100%}.min-h-100-ns{min-height:100%}.vh-25-ns{height:25vh}.vh-50-ns{height:50vh}.vh-75-ns{height:75vh}.vh-100-ns{height:100vh}.min-vh-100-ns{min-height:100vh}.h-auto-ns{height:auto}.h-inherit-ns{height:inherit}.tracked-ns{letter-spacing:.1em}.tracked-tight-ns{letter-spacing:-.05em}.tracked-mega-ns{letter-spacing:.25em}.lh-solid-ns{line-height:1}.lh-title-ns{line-height:1.25}.lh-copy-ns{line-height:1.5}.mw-100-ns{max-width:100%}.mw1-ns{max-width:1rem}.mw2-ns{max-width:2rem}.mw3-ns{max-width:4rem}.mw4-ns{max-width:8rem}.mw5-ns{max-width:16rem}.mw6-ns{max-width:32rem}.mw7-ns{max-width:48rem}.mw8-ns{max-width:64rem}.mw9-ns{max-width:96rem}.mw-none-ns{max-width:none}.w1-ns{width:1rem}.w2-ns{width:2rem}.w3-ns{width:4rem}.w4-ns{width:8rem}.w5-ns{width:16rem}.w-10-ns{width:10%}.w-20-ns{width:20%}.w-25-ns{width:25%}.w-30-ns{width:30%}.w-33-ns{width:33%}.w-34-ns{width:34%}.w-40-ns{width:40%}.w-50-ns{width:50%}.w-60-ns{width:60%}.w-70-ns{width:70%}.w-75-ns{width:75%}.w-80-ns{width:80%}.w-90-ns{width:90%}.w-100-ns{width:100%}.w-third-ns{width:33.33333%}.w-two-thirds-ns{width:66.66667%}.w-auto-ns{width:auto}.overflow-visible-ns{overflow:visible}.overflow-hidden-ns{overflow:hidden}.overflow-scroll-ns{overflow:scroll}.overflow-auto-ns{overflow:auto}.overflow-x-visible-ns{overflow-x:visible}.overflow-x-hidden-ns{overflow-x:hidden}.overflow-x-scroll-ns{overflow-x:scroll}.overflow-x-auto-ns{overflow-x:auto}.overflow-y-visible-ns{overflow-y:visible}.overflow-y-hidden-ns{overflow-y:hidden}.overflow-y-scroll-ns{overflow-y:scroll}.overflow-y-auto-ns{overflow-y:auto}.static-ns{position:static}.relative-ns{position:relative}.absolute-ns{position:absolute}.fixed-ns{position:fixed}.rotate-45-ns{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-ns{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-ns{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-ns{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-ns{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-ns{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-ns{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-ns{padding:0}.pa1-ns{padding:.25rem}.pa2-ns{padding:.5rem}.pa3-ns{padding:1rem}.pa4-ns{padding:2rem}.pa5-ns{padding:4rem}.pa6-ns{padding:8rem}.pa7-ns{padding:16rem}.pl0-ns{padding-left:0}.pl1-ns{padding-left:.25rem}.pl2-ns{padding-left:.5rem}.pl3-ns{padding-left:1rem}.pl4-ns{padding-left:2rem}.pl5-ns{padding-left:4rem}.pl6-ns{padding-left:8rem}.pl7-ns{padding-left:16rem}.pr0-ns{padding-right:0}.pr1-ns{padding-right:.25rem}.pr2-ns{padding-right:.5rem}.pr3-ns{padding-right:1rem}.pr4-ns{padding-right:2rem}.pr5-ns{padding-right:4rem}.pr6-ns{padding-right:8rem}.pr7-ns{padding-right:16rem}.pb0-ns{padding-bottom:0}.pb1-ns{padding-bottom:.25rem}.pb2-ns{padding-bottom:.5rem}.pb3-ns{padding-bottom:1rem}.pb4-ns{padding-bottom:2rem}.pb5-ns{padding-bottom:4rem}.pb6-ns{padding-bottom:8rem}.pb7-ns{padding-bottom:16rem}.pt0-ns{padding-top:0}.pt1-ns{padding-top:.25rem}.pt2-ns{padding-top:.5rem}.pt3-ns{padding-top:1rem}.pt4-ns{padding-top:2rem}.pt5-ns{padding-top:4rem}.pt6-ns{padding-top:8rem}.pt7-ns{padding-top:16rem}.pv0-ns{padding-top:0;padding-bottom:0}.pv1-ns{padding-top:.25rem;padding-bottom:.25rem}.pv2-ns{padding-top:.5rem;padding-bottom:.5rem}.pv3-ns{padding-top:1rem;padding-bottom:1rem}.pv4-ns{padding-top:2rem;padding-bottom:2rem}.pv5-ns{padding-top:4rem;padding-bottom:4rem}.pv6-ns{padding-top:8rem;padding-bottom:8rem}.pv7-ns{padding-top:16rem;padding-bottom:16rem}.ph0-ns{padding-left:0;padding-right:0}.ph1-ns{padding-left:.25rem;padding-right:.25rem}.ph2-ns{padding-left:.5rem;padding-right:.5rem}.ph3-ns{padding-left:1rem;padding-right:1rem}.ph4-ns{padding-left:2rem;padding-right:2rem}.ph5-ns{padding-left:4rem;padding-right:4rem}.ph6-ns{padding-left:8rem;padding-right:8rem}.ph7-ns{padding-left:16rem;padding-right:16rem}.ma0-ns{margin:0}.ma1-ns{margin:.25rem}.ma2-ns{margin:.5rem}.ma3-ns{margin:1rem}.ma4-ns{margin:2rem}.ma5-ns{margin:4rem}.ma6-ns{margin:8rem}.ma7-ns{margin:16rem}.ml0-ns{margin-left:0}.ml1-ns{margin-left:.25rem}.ml2-ns{margin-left:.5rem}.ml3-ns{margin-left:1rem}.ml4-ns{margin-left:2rem}.ml5-ns{margin-left:4rem}.ml6-ns{margin-left:8rem}.ml7-ns{margin-left:16rem}.mr0-ns{margin-right:0}.mr1-ns{margin-right:.25rem}.mr2-ns{margin-right:.5rem}.mr3-ns{margin-right:1rem}.mr4-ns{margin-right:2rem}.mr5-ns{margin-right:4rem}.mr6-ns{margin-right:8rem}.mr7-ns{margin-right:16rem}.mb0-ns{margin-bottom:0}.mb1-ns{margin-bottom:.25rem}.mb2-ns{margin-bottom:.5rem}.mb3-ns{margin-bottom:1rem}.mb4-ns{margin-bottom:2rem}.mb5-ns{margin-bottom:4rem}.mb6-ns{margin-bottom:8rem}.mb7-ns{margin-bottom:16rem}.mt0-ns{margin-top:0}.mt1-ns{margin-top:.25rem}.mt2-ns{margin-top:.5rem}.mt3-ns{margin-top:1rem}.mt4-ns{margin-top:2rem}.mt5-ns{margin-top:4rem}.mt6-ns{margin-top:8rem}.mt7-ns{margin-top:16rem}.mv0-ns{margin-top:0;margin-bottom:0}.mv1-ns{margin-top:.25rem;margin-bottom:.25rem}.mv2-ns{margin-top:.5rem;margin-bottom:.5rem}.mv3-ns{margin-top:1rem;margin-bottom:1rem}.mv4-ns{margin-top:2rem;margin-bottom:2rem}.mv5-ns{margin-top:4rem;margin-bottom:4rem}.mv6-ns{margin-top:8rem;margin-bottom:8rem}.mv7-ns{margin-top:16rem;margin-bottom:16rem}.mh0-ns{margin-left:0;margin-right:0}.mh1-ns{margin-left:.25rem;margin-right:.25rem}.mh2-ns{margin-left:.5rem;margin-right:.5rem}.mh3-ns{margin-left:1rem;margin-right:1rem}.mh4-ns{margin-left:2rem;margin-right:2rem}.mh5-ns{margin-left:4rem;margin-right:4rem}.mh6-ns{margin-left:8rem;margin-right:8rem}.mh7-ns{margin-left:16rem;margin-right:16rem}.na1-ns{margin:-.25rem}.na2-ns{margin:-.5rem}.na3-ns{margin:-1rem}.na4-ns{margin:-2rem}.na5-ns{margin:-4rem}.na6-ns{margin:-8rem}.na7-ns{margin:-16rem}.nl1-ns{margin-left:-.25rem}.nl2-ns{margin-left:-.5rem}.nl3-ns{margin-left:-1rem}.nl4-ns{margin-left:-2rem}.nl5-ns{margin-left:-4rem}.nl6-ns{margin-left:-8rem}.nl7-ns{margin-left:-16rem}.nr1-ns{margin-right:-.25rem}.nr2-ns{margin-right:-.5rem}.nr3-ns{margin-right:-1rem}.nr4-ns{margin-right:-2rem}.nr5-ns{margin-right:-4rem}.nr6-ns{margin-right:-8rem}.nr7-ns{margin-right:-16rem}.nb1-ns{margin-bottom:-.25rem}.nb2-ns{margin-bottom:-.5rem}.nb3-ns{margin-bottom:-1rem}.nb4-ns{margin-bottom:-2rem}.nb5-ns{margin-bottom:-4rem}.nb6-ns{margin-bottom:-8rem}.nb7-ns{margin-bottom:-16rem}.nt1-ns{margin-top:-.25rem}.nt2-ns{margin-top:-.5rem}.nt3-ns{margin-top:-1rem}.nt4-ns{margin-top:-2rem}.nt5-ns{margin-top:-4rem}.nt6-ns{margin-top:-8rem}.nt7-ns{margin-top:-16rem}.strike-ns{text-decoration:line-through}.underline-ns{text-decoration:underline}.no-underline-ns{text-decoration:none}.tl-ns{text-align:left}.tr-ns{text-align:right}.tc-ns{text-align:center}.ttc-ns{text-transform:capitalize}.ttl-ns{text-transform:lowercase}.ttu-ns{text-transform:uppercase}.ttn-ns{text-transform:none}.f-6-ns,.f-headline-ns{font-size:6rem}.f-5-ns,.f-subheadline-ns{font-size:5rem}.f1-ns{font-size:3rem}.f2-ns{font-size:2.25rem}.f3-ns{font-size:1.5rem}.f4-ns{font-size:1.25rem}.f5-ns{font-size:1rem}.f6-ns{font-size:.875rem}.measure-ns{max-width:30em}.measure-wide-ns{max-width:34em}.measure-narrow-ns{max-width:20em}.indent-ns{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-ns{font-variant:small-caps}.truncate-ns{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clip-ns{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-ns{white-space:normal}.nowrap-ns{white-space:nowrap}.pre-ns{white-space:pre}.v-base-ns{vertical-align:baseline}.v-mid-ns{vertical-align:middle}.v-top-ns{vertical-align:top}.v-btm-ns{vertical-align:bottom}}@media screen and (min-width:30em) and (max-width:60em){.aspect-ratio-m{height:0;position:relative}.aspect-ratio--16x9-m{padding-bottom:56.25%}.aspect-ratio--9x16-m{padding-bottom:177.77%}.aspect-ratio--4x3-m{padding-bottom:75%}.aspect-ratio--3x4-m{padding-bottom:133.33%}.aspect-ratio--6x4-m{padding-bottom:66.6%}.aspect-ratio--4x6-m{padding-bottom:150%}.aspect-ratio--8x5-m{padding-bottom:62.5%}.aspect-ratio--5x8-m{padding-bottom:160%}.aspect-ratio--7x5-m{padding-bottom:71.42%}.aspect-ratio--5x7-m{padding-bottom:140%}.aspect-ratio--1x1-m{padding-bottom:100%}.aspect-ratio--object-m{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-m{background-size:cover!important}.contain-m{background-size:contain!important}.bg-center-m{background-position:50%}.bg-center-m,.bg-top-m{background-repeat:no-repeat}.bg-top-m{background-position:top}.bg-right-m{background-position:100%}.bg-bottom-m,.bg-right-m{background-repeat:no-repeat}.bg-bottom-m{background-position:bottom}.bg-left-m{background-repeat:no-repeat;background-position:0}.outline-m{outline:1px solid}.outline-transparent-m{outline:1px solid transparent}.outline-0-m{outline:0}.outline-l{outline:1px solid}.outline-transparent-l{outline:1px solid transparent}.outline-0-l{outline:0}.ba-m{border-style:solid;border-width:1px}.bt-m{border-top-style:solid;border-top-width:1px}.br-m{border-right-style:solid;border-right-width:1px}.bb-m{border-bottom-style:solid;border-bottom-width:1px}.bl-m{border-left-style:solid;border-left-width:1px}.bn-m{border-style:none;border-width:0}.br0-m{border-radius:0}.br1-m{border-radius:.125rem}.br2-m{border-radius:.25rem}.br3-m{border-radius:.5rem}.br4-m{border-radius:1rem}.br-100-m{border-radius:100%}.br-pill-m{border-radius:9999px}.br--bottom-m{border-top-left-radius:0;border-top-right-radius:0}.br--top-m{border-bottom-right-radius:0}.br--right-m,.br--top-m{border-bottom-left-radius:0}.br--right-m{border-top-left-radius:0}.br--left-m{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-m{border-style:dotted}.b--dashed-m{border-style:dashed}.b--solid-m{border-style:solid}.b--none-m{border-style:none}.bw0-m{border-width:0}.bw1-m{border-width:.125rem}.bw2-m{border-width:.25rem}.bw3-m{border-width:.5rem}.bw4-m{border-width:1rem}.bw5-m{border-width:2rem}.bt-0-m{border-top-width:0}.br-0-m{border-right-width:0}.bb-0-m{border-bottom-width:0}.bl-0-m{border-left-width:0}.shadow-1-m{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-m{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-m{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-m{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-m{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-m{top:0}.left-0-m{left:0}.right-0-m{right:0}.bottom-0-m{bottom:0}.top-1-m{top:1rem}.left-1-m{left:1rem}.right-1-m{right:1rem}.bottom-1-m{bottom:1rem}.top-2-m{top:2rem}.left-2-m{left:2rem}.right-2-m{right:2rem}.bottom-2-m{bottom:2rem}.top--1-m{top:-1rem}.right--1-m{right:-1rem}.bottom--1-m{bottom:-1rem}.left--1-m{left:-1rem}.top--2-m{top:-2rem}.right--2-m{right:-2rem}.bottom--2-m{bottom:-2rem}.left--2-m{left:-2rem}.absolute--fill-m{top:0;right:0;bottom:0;left:0}.cl-m{clear:left}.cr-m{clear:right}.cb-m{clear:both}.cn-m{clear:none}.dn-m{display:none}.di-m{display:inline}.db-m{display:block}.dib-m{display:inline-block}.dit-m{display:inline-table}.dt-m{display:table}.dtc-m{display:table-cell}.dt-row-m{display:table-row}.dt-row-group-m{display:table-row-group}.dt-column-m{display:table-column}.dt-column-group-m{display:table-column-group}.dt--fixed-m{table-layout:fixed;width:100%}.flex-m{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-m{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-m{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-m{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-m{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column-m,.flex-row-m{-webkit-box-direction:normal}.flex-row-m{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-m{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start-m{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-m{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-m{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-m{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-m{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-m{-ms-flex-item-align:start;align-self:flex-start}.self-end-m{-ms-flex-item-align:end;align-self:flex-end}.self-center-m{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-m{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-m{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-m{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-m{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-m{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-m{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-m{-ms-flex-pack:distribute;justify-content:space-around}.content-start-m{-ms-flex-line-pack:start;align-content:flex-start}.content-end-m{-ms-flex-line-pack:end;align-content:flex-end}.content-center-m{-ms-flex-line-pack:center;align-content:center}.content-between-m{-ms-flex-line-pack:justify;align-content:space-between}.content-around-m{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-m{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-m{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-m{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-m{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-m{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-m{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-m{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-m{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-m{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-m{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-m{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-m{float:left}.fl-m,.fr-m{display:inline}.fr-m{float:right}.fn-m{float:none}.i-m{font-style:italic}.fs-normal-m{font-style:normal}.normal-m{font-weight:400}.b-m{font-weight:700}.fw1-m{font-weight:100}.fw2-m{font-weight:200}.fw3-m{font-weight:300}.fw4-m{font-weight:400}.fw5-m{font-weight:500}.fw6-m{font-weight:600}.fw7-m{font-weight:700}.fw8-m{font-weight:800}.fw9-m{font-weight:900}.h1-m{height:1rem}.h2-m{height:2rem}.h3-m{height:4rem}.h4-m{height:8rem}.h5-m{height:16rem}.h-25-m{height:25%}.h-50-m{height:50%}.h-75-m{height:75%}.h-100-m{height:100%}.min-h-100-m{min-height:100%}.vh-25-m{height:25vh}.vh-50-m{height:50vh}.vh-75-m{height:75vh}.vh-100-m{height:100vh}.min-vh-100-m{min-height:100vh}.h-auto-m{height:auto}.h-inherit-m{height:inherit}.tracked-m{letter-spacing:.1em}.tracked-tight-m{letter-spacing:-.05em}.tracked-mega-m{letter-spacing:.25em}.lh-solid-m{line-height:1}.lh-title-m{line-height:1.25}.lh-copy-m{line-height:1.5}.mw-100-m{max-width:100%}.mw1-m{max-width:1rem}.mw2-m{max-width:2rem}.mw3-m{max-width:4rem}.mw4-m{max-width:8rem}.mw5-m{max-width:16rem}.mw6-m{max-width:32rem}.mw7-m{max-width:48rem}.mw8-m{max-width:64rem}.mw9-m{max-width:96rem}.mw-none-m{max-width:none}.w1-m{width:1rem}.w2-m{width:2rem}.w3-m{width:4rem}.w4-m{width:8rem}.w5-m{width:16rem}.w-10-m{width:10%}.w-20-m{width:20%}.w-25-m{width:25%}.w-30-m{width:30%}.w-33-m{width:33%}.w-34-m{width:34%}.w-40-m{width:40%}.w-50-m{width:50%}.w-60-m{width:60%}.w-70-m{width:70%}.w-75-m{width:75%}.w-80-m{width:80%}.w-90-m{width:90%}.w-100-m{width:100%}.w-third-m{width:33.33333%}.w-two-thirds-m{width:66.66667%}.w-auto-m{width:auto}.overflow-visible-m{overflow:visible}.overflow-hidden-m{overflow:hidden}.overflow-scroll-m{overflow:scroll}.overflow-auto-m{overflow:auto}.overflow-x-visible-m{overflow-x:visible}.overflow-x-hidden-m{overflow-x:hidden}.overflow-x-scroll-m{overflow-x:scroll}.overflow-x-auto-m{overflow-x:auto}.overflow-y-visible-m{overflow-y:visible}.overflow-y-hidden-m{overflow-y:hidden}.overflow-y-scroll-m{overflow-y:scroll}.overflow-y-auto-m{overflow-y:auto}.static-m{position:static}.relative-m{position:relative}.absolute-m{position:absolute}.fixed-m{position:fixed}.rotate-45-m{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-m{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-m{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-m{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-m{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-m{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-m{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-m{padding:0}.pa1-m{padding:.25rem}.pa2-m{padding:.5rem}.pa3-m{padding:1rem}.pa4-m{padding:2rem}.pa5-m{padding:4rem}.pa6-m{padding:8rem}.pa7-m{padding:16rem}.pl0-m{padding-left:0}.pl1-m{padding-left:.25rem}.pl2-m{padding-left:.5rem}.pl3-m{padding-left:1rem}.pl4-m{padding-left:2rem}.pl5-m{padding-left:4rem}.pl6-m{padding-left:8rem}.pl7-m{padding-left:16rem}.pr0-m{padding-right:0}.pr1-m{padding-right:.25rem}.pr2-m{padding-right:.5rem}.pr3-m{padding-right:1rem}.pr4-m{padding-right:2rem}.pr5-m{padding-right:4rem}.pr6-m{padding-right:8rem}.pr7-m{padding-right:16rem}.pb0-m{padding-bottom:0}.pb1-m{padding-bottom:.25rem}.pb2-m{padding-bottom:.5rem}.pb3-m{padding-bottom:1rem}.pb4-m{padding-bottom:2rem}.pb5-m{padding-bottom:4rem}.pb6-m{padding-bottom:8rem}.pb7-m{padding-bottom:16rem}.pt0-m{padding-top:0}.pt1-m{padding-top:.25rem}.pt2-m{padding-top:.5rem}.pt3-m{padding-top:1rem}.pt4-m{padding-top:2rem}.pt5-m{padding-top:4rem}.pt6-m{padding-top:8rem}.pt7-m{padding-top:16rem}.pv0-m{padding-top:0;padding-bottom:0}.pv1-m{padding-top:.25rem;padding-bottom:.25rem}.pv2-m{padding-top:.5rem;padding-bottom:.5rem}.pv3-m{padding-top:1rem;padding-bottom:1rem}.pv4-m{padding-top:2rem;padding-bottom:2rem}.pv5-m{padding-top:4rem;padding-bottom:4rem}.pv6-m{padding-top:8rem;padding-bottom:8rem}.pv7-m{padding-top:16rem;padding-bottom:16rem}.ph0-m{padding-left:0;padding-right:0}.ph1-m{padding-left:.25rem;padding-right:.25rem}.ph2-m{padding-left:.5rem;padding-right:.5rem}.ph3-m{padding-left:1rem;padding-right:1rem}.ph4-m{padding-left:2rem;padding-right:2rem}.ph5-m{padding-left:4rem;padding-right:4rem}.ph6-m{padding-left:8rem;padding-right:8rem}.ph7-m{padding-left:16rem;padding-right:16rem}.ma0-m{margin:0}.ma1-m{margin:.25rem}.ma2-m{margin:.5rem}.ma3-m{margin:1rem}.ma4-m{margin:2rem}.ma5-m{margin:4rem}.ma6-m{margin:8rem}.ma7-m{margin:16rem}.ml0-m{margin-left:0}.ml1-m{margin-left:.25rem}.ml2-m{margin-left:.5rem}.ml3-m{margin-left:1rem}.ml4-m{margin-left:2rem}.ml5-m{margin-left:4rem}.ml6-m{margin-left:8rem}.ml7-m{margin-left:16rem}.mr0-m{margin-right:0}.mr1-m{margin-right:.25rem}.mr2-m{margin-right:.5rem}.mr3-m{margin-right:1rem}.mr4-m{margin-right:2rem}.mr5-m{margin-right:4rem}.mr6-m{margin-right:8rem}.mr7-m{margin-right:16rem}.mb0-m{margin-bottom:0}.mb1-m{margin-bottom:.25rem}.mb2-m{margin-bottom:.5rem}.mb3-m{margin-bottom:1rem}.mb4-m{margin-bottom:2rem}.mb5-m{margin-bottom:4rem}.mb6-m{margin-bottom:8rem}.mb7-m{margin-bottom:16rem}.mt0-m{margin-top:0}.mt1-m{margin-top:.25rem}.mt2-m{margin-top:.5rem}.mt3-m{margin-top:1rem}.mt4-m{margin-top:2rem}.mt5-m{margin-top:4rem}.mt6-m{margin-top:8rem}.mt7-m{margin-top:16rem}.mv0-m{margin-top:0;margin-bottom:0}.mv1-m{margin-top:.25rem;margin-bottom:.25rem}.mv2-m{margin-top:.5rem;margin-bottom:.5rem}.mv3-m{margin-top:1rem;margin-bottom:1rem}.mv4-m{margin-top:2rem;margin-bottom:2rem}.mv5-m{margin-top:4rem;margin-bottom:4rem}.mv6-m{margin-top:8rem;margin-bottom:8rem}.mv7-m{margin-top:16rem;margin-bottom:16rem}.mh0-m{margin-left:0;margin-right:0}.mh1-m{margin-left:.25rem;margin-right:.25rem}.mh2-m{margin-left:.5rem;margin-right:.5rem}.mh3-m{margin-left:1rem;margin-right:1rem}.mh4-m{margin-left:2rem;margin-right:2rem}.mh5-m{margin-left:4rem;margin-right:4rem}.mh6-m{margin-left:8rem;margin-right:8rem}.mh7-m{margin-left:16rem;margin-right:16rem}.na1-m{margin:-.25rem}.na2-m{margin:-.5rem}.na3-m{margin:-1rem}.na4-m{margin:-2rem}.na5-m{margin:-4rem}.na6-m{margin:-8rem}.na7-m{margin:-16rem}.nl1-m{margin-left:-.25rem}.nl2-m{margin-left:-.5rem}.nl3-m{margin-left:-1rem}.nl4-m{margin-left:-2rem}.nl5-m{margin-left:-4rem}.nl6-m{margin-left:-8rem}.nl7-m{margin-left:-16rem}.nr1-m{margin-right:-.25rem}.nr2-m{margin-right:-.5rem}.nr3-m{margin-right:-1rem}.nr4-m{margin-right:-2rem}.nr5-m{margin-right:-4rem}.nr6-m{margin-right:-8rem}.nr7-m{margin-right:-16rem}.nb1-m{margin-bottom:-.25rem}.nb2-m{margin-bottom:-.5rem}.nb3-m{margin-bottom:-1rem}.nb4-m{margin-bottom:-2rem}.nb5-m{margin-bottom:-4rem}.nb6-m{margin-bottom:-8rem}.nb7-m{margin-bottom:-16rem}.nt1-m{margin-top:-.25rem}.nt2-m{margin-top:-.5rem}.nt3-m{margin-top:-1rem}.nt4-m{margin-top:-2rem}.nt5-m{margin-top:-4rem}.nt6-m{margin-top:-8rem}.nt7-m{margin-top:-16rem}.strike-m{text-decoration:line-through}.underline-m{text-decoration:underline}.no-underline-m{text-decoration:none}.tl-m{text-align:left}.tr-m{text-align:right}.tc-m{text-align:center}.ttc-m{text-transform:capitalize}.ttl-m{text-transform:lowercase}.ttu-m{text-transform:uppercase}.ttn-m{text-transform:none}.f-6-m,.f-headline-m{font-size:6rem}.f-5-m,.f-subheadline-m{font-size:5rem}.f1-m{font-size:3rem}.f2-m{font-size:2.25rem}.f3-m{font-size:1.5rem}.f4-m{font-size:1.25rem}.f5-m{font-size:1rem}.f6-m{font-size:.875rem}.measure-m{max-width:30em}.measure-wide-m{max-width:34em}.measure-narrow-m{max-width:20em}.indent-m{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-m{font-variant:small-caps}.truncate-m{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clip-m{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-m{white-space:normal}.nowrap-m{white-space:nowrap}.pre-m{white-space:pre}.v-base-m{vertical-align:baseline}.v-mid-m{vertical-align:middle}.v-top-m{vertical-align:top}.v-btm-m{vertical-align:bottom}}@media screen and (min-width:60em){.aspect-ratio-l{height:0;position:relative}.aspect-ratio--16x9-l{padding-bottom:56.25%}.aspect-ratio--9x16-l{padding-bottom:177.77%}.aspect-ratio--4x3-l{padding-bottom:75%}.aspect-ratio--3x4-l{padding-bottom:133.33%}.aspect-ratio--6x4-l{padding-bottom:66.6%}.aspect-ratio--4x6-l{padding-bottom:150%}.aspect-ratio--8x5-l{padding-bottom:62.5%}.aspect-ratio--5x8-l{padding-bottom:160%}.aspect-ratio--7x5-l{padding-bottom:71.42%}.aspect-ratio--5x7-l{padding-bottom:140%}.aspect-ratio--1x1-l{padding-bottom:100%}.aspect-ratio--object-l{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-l{background-size:cover!important}.contain-l{background-size:contain!important}.bg-center-l{background-position:50%}.bg-center-l,.bg-top-l{background-repeat:no-repeat}.bg-top-l{background-position:top}.bg-right-l{background-position:100%}.bg-bottom-l,.bg-right-l{background-repeat:no-repeat}.bg-bottom-l{background-position:bottom}.bg-left-l{background-repeat:no-repeat;background-position:0}.ba-l{border-style:solid;border-width:1px}.bt-l{border-top-style:solid;border-top-width:1px}.br-l{border-right-style:solid;border-right-width:1px}.bb-l{border-bottom-style:solid;border-bottom-width:1px}.bl-l{border-left-style:solid;border-left-width:1px}.bn-l{border-style:none;border-width:0}.br0-l{border-radius:0}.br1-l{border-radius:.125rem}.br2-l{border-radius:.25rem}.br3-l{border-radius:.5rem}.br4-l{border-radius:1rem}.br-100-l{border-radius:100%}.br-pill-l{border-radius:9999px}.br--bottom-l{border-top-left-radius:0;border-top-right-radius:0}.br--top-l{border-bottom-right-radius:0}.br--right-l,.br--top-l{border-bottom-left-radius:0}.br--right-l{border-top-left-radius:0}.br--left-l{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-l{border-style:dotted}.b--dashed-l{border-style:dashed}.b--solid-l{border-style:solid}.b--none-l{border-style:none}.bw0-l{border-width:0}.bw1-l{border-width:.125rem}.bw2-l{border-width:.25rem}.bw3-l{border-width:.5rem}.bw4-l{border-width:1rem}.bw5-l{border-width:2rem}.bt-0-l{border-top-width:0}.br-0-l{border-right-width:0}.bb-0-l{border-bottom-width:0}.bl-0-l{border-left-width:0}.shadow-1-l{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-l{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-l{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-l{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-l{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-l{top:0}.left-0-l{left:0}.right-0-l{right:0}.bottom-0-l{bottom:0}.top-1-l{top:1rem}.left-1-l{left:1rem}.right-1-l{right:1rem}.bottom-1-l{bottom:1rem}.top-2-l{top:2rem}.left-2-l{left:2rem}.right-2-l{right:2rem}.bottom-2-l{bottom:2rem}.top--1-l{top:-1rem}.right--1-l{right:-1rem}.bottom--1-l{bottom:-1rem}.left--1-l{left:-1rem}.top--2-l{top:-2rem}.right--2-l{right:-2rem}.bottom--2-l{bottom:-2rem}.left--2-l{left:-2rem}.absolute--fill-l{top:0;right:0;bottom:0;left:0}.cl-l{clear:left}.cr-l{clear:right}.cb-l{clear:both}.cn-l{clear:none}.dn-l{display:none}.di-l{display:inline}.db-l{display:block}.dib-l{display:inline-block}.dit-l{display:inline-table}.dt-l{display:table}.dtc-l{display:table-cell}.dt-row-l{display:table-row}.dt-row-group-l{display:table-row-group}.dt-column-l{display:table-column}.dt-column-group-l{display:table-column-group}.dt--fixed-l{table-layout:fixed;width:100%}.flex-l{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-l{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-l{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-l{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-l{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column-l,.flex-row-l{-webkit-box-direction:normal}.flex-row-l{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-l{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start-l{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-l{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-l{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-l{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-l{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-l{-ms-flex-item-align:start;align-self:flex-start}.self-end-l{-ms-flex-item-align:end;align-self:flex-end}.self-center-l{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-l{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-l{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-l{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-l{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-l{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-l{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-l{-ms-flex-pack:distribute;justify-content:space-around}.content-start-l{-ms-flex-line-pack:start;align-content:flex-start}.content-end-l{-ms-flex-line-pack:end;align-content:flex-end}.content-center-l{-ms-flex-line-pack:center;align-content:center}.content-between-l{-ms-flex-line-pack:justify;align-content:space-between}.content-around-l{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-l{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-l{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-l{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-l{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-l{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-l{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-l{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-l{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-l{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-l{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-l{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-l{float:left}.fl-l,.fr-l{display:inline}.fr-l{float:right}.fn-l{float:none}.i-l{font-style:italic}.fs-normal-l{font-style:normal}.normal-l{font-weight:400}.b-l{font-weight:700}.fw1-l{font-weight:100}.fw2-l{font-weight:200}.fw3-l{font-weight:300}.fw4-l{font-weight:400}.fw5-l{font-weight:500}.fw6-l{font-weight:600}.fw7-l{font-weight:700}.fw8-l{font-weight:800}.fw9-l{font-weight:900}.h1-l{height:1rem}.h2-l{height:2rem}.h3-l{height:4rem}.h4-l{height:8rem}.h5-l{height:16rem}.h-25-l{height:25%}.h-50-l{height:50%}.h-75-l{height:75%}.h-100-l{height:100%}.min-h-100-l{min-height:100%}.vh-25-l{height:25vh}.vh-50-l{height:50vh}.vh-75-l{height:75vh}.vh-100-l{height:100vh}.min-vh-100-l{min-height:100vh}.h-auto-l{height:auto}.h-inherit-l{height:inherit}.tracked-l{letter-spacing:.1em}.tracked-tight-l{letter-spacing:-.05em}.tracked-mega-l{letter-spacing:.25em}.lh-solid-l{line-height:1}.lh-title-l{line-height:1.25}.lh-copy-l{line-height:1.5}.mw-100-l{max-width:100%}.mw1-l{max-width:1rem}.mw2-l{max-width:2rem}.mw3-l{max-width:4rem}.mw4-l{max-width:8rem}.mw5-l{max-width:16rem}.mw6-l{max-width:32rem}.mw7-l{max-width:48rem}.mw8-l{max-width:64rem}.mw9-l{max-width:96rem}.mw-none-l{max-width:none}.w1-l{width:1rem}.w2-l{width:2rem}.w3-l{width:4rem}.w4-l{width:8rem}.w5-l{width:16rem}.w-10-l{width:10%}.w-20-l{width:20%}.w-25-l{width:25%}.w-30-l{width:30%}.w-33-l{width:33%}.w-34-l{width:34%}.w-40-l{width:40%}.w-50-l{width:50%}.w-60-l{width:60%}.w-70-l{width:70%}.w-75-l{width:75%}.w-80-l{width:80%}.w-90-l{width:90%}.w-100-l{width:100%}.w-third-l{width:33.33333%}.w-two-thirds-l{width:66.66667%}.w-auto-l{width:auto}.overflow-visible-l{overflow:visible}.overflow-hidden-l{overflow:hidden}.overflow-scroll-l{overflow:scroll}.overflow-auto-l{overflow:auto}.overflow-x-visible-l{overflow-x:visible}.overflow-x-hidden-l{overflow-x:hidden}.overflow-x-scroll-l{overflow-x:scroll}.overflow-x-auto-l{overflow-x:auto}.overflow-y-visible-l{overflow-y:visible}.overflow-y-hidden-l{overflow-y:hidden}.overflow-y-scroll-l{overflow-y:scroll}.overflow-y-auto-l{overflow-y:auto}.static-l{position:static}.relative-l{position:relative}.absolute-l{position:absolute}.fixed-l{position:fixed}.rotate-45-l{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-l{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-l{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-l{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-l{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-l{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-l{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-l{padding:0}.pa1-l{padding:.25rem}.pa2-l{padding:.5rem}.pa3-l{padding:1rem}.pa4-l{padding:2rem}.pa5-l{padding:4rem}.pa6-l{padding:8rem}.pa7-l{padding:16rem}.pl0-l{padding-left:0}.pl1-l{padding-left:.25rem}.pl2-l{padding-left:.5rem}.pl3-l{padding-left:1rem}.pl4-l{padding-left:2rem}.pl5-l{padding-left:4rem}.pl6-l{padding-left:8rem}.pl7-l{padding-left:16rem}.pr0-l{padding-right:0}.pr1-l{padding-right:.25rem}.pr2-l{padding-right:.5rem}.pr3-l{padding-right:1rem}.pr4-l{padding-right:2rem}.pr5-l{padding-right:4rem}.pr6-l{padding-right:8rem}.pr7-l{padding-right:16rem}.pb0-l{padding-bottom:0}.pb1-l{padding-bottom:.25rem}.pb2-l{padding-bottom:.5rem}.pb3-l{padding-bottom:1rem}.pb4-l{padding-bottom:2rem}.pb5-l{padding-bottom:4rem}.pb6-l{padding-bottom:8rem}.pb7-l{padding-bottom:16rem}.pt0-l{padding-top:0}.pt1-l{padding-top:.25rem}.pt2-l{padding-top:.5rem}.pt3-l{padding-top:1rem}.pt4-l{padding-top:2rem}.pt5-l{padding-top:4rem}.pt6-l{padding-top:8rem}.pt7-l{padding-top:16rem}.pv0-l{padding-top:0;padding-bottom:0}.pv1-l{padding-top:.25rem;padding-bottom:.25rem}.pv2-l{padding-top:.5rem;padding-bottom:.5rem}.pv3-l{padding-top:1rem;padding-bottom:1rem}.pv4-l{padding-top:2rem;padding-bottom:2rem}.pv5-l{padding-top:4rem;padding-bottom:4rem}.pv6-l{padding-top:8rem;padding-bottom:8rem}.pv7-l{padding-top:16rem;padding-bottom:16rem}.ph0-l{padding-left:0;padding-right:0}.ph1-l{padding-left:.25rem;padding-right:.25rem}.ph2-l{padding-left:.5rem;padding-right:.5rem}.ph3-l{padding-left:1rem;padding-right:1rem}.ph4-l{padding-left:2rem;padding-right:2rem}.ph5-l{padding-left:4rem;padding-right:4rem}.ph6-l{padding-left:8rem;padding-right:8rem}.ph7-l{padding-left:16rem;padding-right:16rem}.ma0-l{margin:0}.ma1-l{margin:.25rem}.ma2-l{margin:.5rem}.ma3-l{margin:1rem}.ma4-l{margin:2rem}.ma5-l{margin:4rem}.ma6-l{margin:8rem}.ma7-l{margin:16rem}.ml0-l{margin-left:0}.ml1-l{margin-left:.25rem}.ml2-l{margin-left:.5rem}.ml3-l{margin-left:1rem}.ml4-l{margin-left:2rem}.ml5-l{margin-left:4rem}.ml6-l{margin-left:8rem}.ml7-l{margin-left:16rem}.mr0-l{margin-right:0}.mr1-l{margin-right:.25rem}.mr2-l{margin-right:.5rem}.mr3-l{margin-right:1rem}.mr4-l{margin-right:2rem}.mr5-l{margin-right:4rem}.mr6-l{margin-right:8rem}.mr7-l{margin-right:16rem}.mb0-l{margin-bottom:0}.mb1-l{margin-bottom:.25rem}.mb2-l{margin-bottom:.5rem}.mb3-l{margin-bottom:1rem}.mb4-l{margin-bottom:2rem}.mb5-l{margin-bottom:4rem}.mb6-l{margin-bottom:8rem}.mb7-l{margin-bottom:16rem}.mt0-l{margin-top:0}.mt1-l{margin-top:.25rem}.mt2-l{margin-top:.5rem}.mt3-l{margin-top:1rem}.mt4-l{margin-top:2rem}.mt5-l{margin-top:4rem}.mt6-l{margin-top:8rem}.mt7-l{margin-top:16rem}.mv0-l{margin-top:0;margin-bottom:0}.mv1-l{margin-top:.25rem;margin-bottom:.25rem}.mv2-l{margin-top:.5rem;margin-bottom:.5rem}.mv3-l{margin-top:1rem;margin-bottom:1rem}.mv4-l{margin-top:2rem;margin-bottom:2rem}.mv5-l{margin-top:4rem;margin-bottom:4rem}.mv6-l{margin-top:8rem;margin-bottom:8rem}.mv7-l{margin-top:16rem;margin-bottom:16rem}.mh0-l{margin-left:0;margin-right:0}.mh1-l{margin-left:.25rem;margin-right:.25rem}.mh2-l{margin-left:.5rem;margin-right:.5rem}.mh3-l{margin-left:1rem;margin-right:1rem}.mh4-l{margin-left:2rem;margin-right:2rem}.mh5-l{margin-left:4rem;margin-right:4rem}.mh6-l{margin-left:8rem;margin-right:8rem}.mh7-l{margin-left:16rem;margin-right:16rem}.na1-l{margin:-.25rem}.na2-l{margin:-.5rem}.na3-l{margin:-1rem}.na4-l{margin:-2rem}.na5-l{margin:-4rem}.na6-l{margin:-8rem}.na7-l{margin:-16rem}.nl1-l{margin-left:-.25rem}.nl2-l{margin-left:-.5rem}.nl3-l{margin-left:-1rem}.nl4-l{margin-left:-2rem}.nl5-l{margin-left:-4rem}.nl6-l{margin-left:-8rem}.nl7-l{margin-left:-16rem}.nr1-l{margin-right:-.25rem}.nr2-l{margin-right:-.5rem}.nr3-l{margin-right:-1rem}.nr4-l{margin-right:-2rem}.nr5-l{margin-right:-4rem}.nr6-l{margin-right:-8rem}.nr7-l{margin-right:-16rem}.nb1-l{margin-bottom:-.25rem}.nb2-l{margin-bottom:-.5rem}.nb3-l{margin-bottom:-1rem}.nb4-l{margin-bottom:-2rem}.nb5-l{margin-bottom:-4rem}.nb6-l{margin-bottom:-8rem}.nb7-l{margin-bottom:-16rem}.nt1-l{margin-top:-.25rem}.nt2-l{margin-top:-.5rem}.nt3-l{margin-top:-1rem}.nt4-l{margin-top:-2rem}.nt5-l{margin-top:-4rem}.nt6-l{margin-top:-8rem}.nt7-l{margin-top:-16rem}.strike-l{text-decoration:line-through}.underline-l{text-decoration:underline}.no-underline-l{text-decoration:none}.tl-l{text-align:left}.tr-l{text-align:right}.tc-l{text-align:center}.ttc-l{text-transform:capitalize}.ttl-l{text-transform:lowercase}.ttu-l{text-transform:uppercase}.ttn-l{text-transform:none}.f-6-l,.f-headline-l{font-size:6rem}.f-5-l,.f-subheadline-l{font-size:5rem}.f1-l{font-size:3rem}.f2-l{font-size:2.25rem}.f3-l{font-size:1.5rem}.f4-l{font-size:1.25rem}.f5-l{font-size:1rem}.f6-l{font-size:.875rem}.measure-l{max-width:30em}.measure-wide-l{max-width:34em}.measure-narrow-l{max-width:20em}.indent-l{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-l{font-variant:small-caps}.truncate-l{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clip-l{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-l{white-space:normal}.nowrap-l{white-space:nowrap}.pre-l{white-space:pre}.v-base-l{vertical-align:baseline}.v-mid-l{vertical-align:middle}.v-top-l{vertical-align:top}.v-btm-l{vertical-align:bottom}}") || true) && "_fdc4c1e6")

const state = {
  subscriptions: [],
  messages: []
}

console.log(document.URL)
const client = new nes.Client(document.URL.replace('http', 'ws'))
client.connect(function (err) {
  if (err) {
    alert('errored')
    return
  }
})

const el = page()
document.body.appendChild(el)

function publishForm () {
  return yo`
    <div class="fl pa2 w-100-m w-50-ns">
      <div class="pa2 outline w-100 h-50">
        <div class="fl w-100-m w-50-ns">
          <label class="fl w-30">Topic:</label>
          <input class="fl w-60" type="text" id="pubTopic"/>
        </div>
        <div class="fl w-100-m w-50-ns">
          <label class="fl v-top w-30">Payload:</label>
          <textarea class="fl w-60" id="pubPayload"></textarea>
        </div>
        <a class="f6 dim br3 ph3 pv2 mb2 dib white bg-mid-gray mv2" onclick=${onclick}>Publish</a>
      </div>
    </div>
  `

  function onclick () {
    const topic = '/' + document.getElementById('pubTopic').value
    const payload = document.getElementById('pubPayload').value

    client.request({
      path: '/publish',
      method: 'POST',
      payload: {
        topic,
        payload
      }
    }, function (err, result) {
      if (err) {
        throw err
      }

      console.log('publish successful')
    })
  }
}

function subscriptions () {
  return yo`
    <ul class="list pl0">
      ${state.subscriptions.map((sub) => yo`<li>${sub}</li>`)}
    </ul>
  `
}

function subscribeForm () {
  return yo`
    <div class="fl pa2 w-100-m w-50-ns">
      <div class="fl pa2 outline w-100">
        <div class="fl w-100-m w-50-ns">
          <label >Topic:</label>
          <input id="subTopic" type="text"/>
          <a class="f6 dim br3 ph3 pv2 mb2 dib white bg-mid-gray" onclick=${onclick}>Subscribe</a>
        </div>
        <div class="fl w-100-m w-50-ns">
          <b>Current Subscriptions</b>
          ${subscriptions()}
        </div>
      </div>
    </div>
  `

  function onclick () {
    const el = document.getElementById("subTopic")
    const topic = `/${el.value}`
    if (state.subscriptions.indexOf(topic) >= 0) {
      alert('topic already added')
      return
    }

    client.subscribe(topic, onMessage, function (err) {
      if (err) {
        throw err
      }
      state.subscriptions.push(topic)
      update()
    })

    function onMessage (payload) {
      console.log('received message', topic, payload)
      state.messages.push({ topic, payload })
      update()
    }
  }
}

function list () {
  return yo`
    <div class="fl w-100 pa2">
      <h3>Received Messages</h3>
      <ul class="list pl0">
        ${state.messages.map((msg) => yo`
          <li class="outline pa2 mv2">
            <b>${msg.topic}</b> - ${JSON.stringify(msg.payload)}
          </li>`)}
      </ul>
    </div>
  `
}

function page () {
  return yo`
<div class="pa4 ma3 fl w-100">
  ${publishForm()}
  ${subscribeForm()}
  ${list()}
</div>`
}

function update () {
  yo.update(el, page())
}

},{"nes":10,"sheetify/insert":12,"yo-yo":13}],2:[function(require,module,exports){
var document = require('global/document')
var hyperx = require('hyperx')
var onload = require('on-load')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var BOOL_PROPS = {
  autofocus: 1,
  checked: 1,
  defaultchecked: 1,
  disabled: 1,
  formnovalidate: 1,
  indeterminate: 1,
  readonly: 1,
  required: 1,
  selected: 1,
  willvalidate: 1
}
var SVG_TAGS = [
  'svg',
  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
  'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',
  'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
  'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

function belCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag)
  } else {
    el = document.createElement(tag)
  }

  // If adding onload events
  if (props.onload || props.onunload) {
    var load = props.onload || function () {}
    var unload = props.onunload || function () {}
    onload(el, function belOnload () {
      load(el)
    }, function belOnunload () {
      unload(el)
    },
    // We have to use non-standard `caller` to find who invokes `belCreateElement`
    belCreateElement.caller.caller.caller)
    delete props.onload
    delete props.onunload
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS[key]) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val)
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val)
          }
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  function appendChild (childs) {
    if (!Array.isArray(childs)) return
    for (var i = 0; i < childs.length; i++) {
      var node = childs[i]
      if (Array.isArray(node)) {
        appendChild(node)
        continue
      }

      if (typeof node === 'number' ||
        typeof node === 'boolean' ||
        node instanceof Date ||
        node instanceof RegExp) {
        node = node.toString()
      }

      if (typeof node === 'string') {
        if (el.lastChild && el.lastChild.nodeName === '#text') {
          el.lastChild.nodeValue += node
          continue
        }
        node = document.createTextNode(node)
      }

      if (node && node.nodeType) {
        el.appendChild(node)
      }
    }
  }
  appendChild(children)

  return el
}

module.exports = hyperx(belCreateElement)
module.exports.default = module.exports
module.exports.createElement = belCreateElement

},{"global/document":4,"hyperx":7,"on-load":11}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":3}],5:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],7:[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else cur[1][key] = concat(cur[1][key], parts[i][1])
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else cur[1][key] = concat(cur[1][key], parts[i][2])
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)],[CLOSE])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":6}],8:[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}],9:[function(require,module,exports){
'use strict';

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;

var testEl = doc ?
    doc.body || doc.createElement('div') :
    {};

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var actualHasAttributeNS;

if (testEl.hasAttributeNS) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.getAttributeNode(namespaceURI, name) != null;
    };
}

var hasAttributeNS = actualHasAttributeNS;


function toElement(str) {
    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = doc.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;

                if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!hasAttributeNS(toNode, null, attrName)) {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name, '');
        }
    }
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            if (newValue === '' && fromEl.firstChild.nodeValue === fromEl.placeholder) {
                return;
            }

            fromEl.firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!hasAttributeNS(toEl, null, 'multiple')) {
            var selectedIndex = -1;
            var i = 0;
            var curChild = toEl.firstChild;
            while(curChild) {
                var nodeName = curChild.nodeName;
                if (nodeName && nodeName.toUpperCase() === 'OPTION') {
                    if (hasAttributeNS(curChild, null, 'selected')) {
                        selectedIndex = i;
                        break;
                    }
                    i++;
                }
                curChild = curChild.nextSibling;
            }

            fromEl.selectedIndex = i;
        }
    }
};

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = {};
        var keyedRemovalList;

        function addKeyedRemoval(key) {
            if (keyedRemovalList) {
                keyedRemovalList.push(key);
            } else {
                keyedRemovalList = [key];
            }
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    }
                }

                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);
            var curFromNodeKey;

            if (toElKey) {
                // If an element with an ID is being morphed then it is will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                return;
            }

            if (!childrenOnly) {
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                morphAttrs(fromEl, toEl);
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
                var curToNodeChild = toEl.firstChild;
                var curFromNodeChild = fromEl.firstChild;
                var curToNodeKey;

                var fromNextSibling;
                var toNextSibling;
                var matchingFromEl;

                outer: while (curToNodeChild) {
                    toNextSibling = curToNodeChild.nextSibling;
                    curToNodeKey = getNodeKey(curToNodeChild);

                    while (curFromNodeChild) {
                        fromNextSibling = curFromNodeChild.nextSibling;

                        if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        curFromNodeKey = getNodeKey(curFromNodeChild);

                        var curFromNodeType = curFromNodeChild.nodeType;

                        var isCompatible = undefined;

                        if (curFromNodeType === curToNodeChild.nodeType) {
                            if (curFromNodeType === ELEMENT_NODE) {
                                // Both nodes being compared are Element nodes

                                if (curToNodeKey) {
                                    // The target node has a key so we want to match it up with the correct element
                                    // in the original DOM tree
                                    if (curToNodeKey !== curFromNodeKey) {
                                        // The current element in the original DOM tree does not have a matching key so
                                        // let's check our lookup to see if there is a matching element in the original
                                        // DOM tree
                                        if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                            if (curFromNodeChild.nextSibling === matchingFromEl) {
                                                // Special case for single element removals. To avoid removing the original
                                                // DOM node out of the tree (since that can break CSS transitions, etc.),
                                                // we will instead discard the current node and wait until the next
                                                // iteration to properly match up the keyed target element with its matching
                                                // element in the original tree
                                                isCompatible = false;
                                            } else {
                                                // We found a matching keyed element somewhere in the original DOM tree.
                                                // Let's moving the original DOM node into the current position and morph
                                                // it.

                                                // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                                // the `removeNode()` function for the node that is being discarded so that
                                                // all lifecycle hooks are correctly invoked
                                                fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                                fromNextSibling = curFromNodeChild.nextSibling;

                                                if (curFromNodeKey) {
                                                    // Since the node is keyed it might be matched up later so we defer
                                                    // the actual removal to later
                                                    addKeyedRemoval(curFromNodeKey);
                                                } else {
                                                    // NOTE: we skip nested keyed nodes from being removed since there is
                                                    //       still a chance they will be matched up later
                                                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                                }

                                                curFromNodeChild = matchingFromEl;
                                            }
                                        } else {
                                            // The nodes are not compatible since the "to" node has a key and there
                                            // is no matching keyed node in the source tree
                                            isCompatible = false;
                                        }
                                    }
                                } else if (curFromNodeKey) {
                                    // The original has a key
                                    isCompatible = false;
                                }

                                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                                if (isCompatible) {
                                    // We found compatible DOM elements so transform
                                    // the current "from" node to match the current
                                    // target DOM node.
                                    morphEl(curFromNodeChild, curToNodeChild);
                                }

                            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                                // Both nodes being compared are Text or Comment nodes
                                isCompatible = true;
                                // Simply update nodeValue on the original node to
                                // change the text value
                                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                            }
                        }

                        if (isCompatible) {
                            // Advance both the "to" child and the "from" child since we found a match
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        // No compatible match so remove the old node from the DOM and continue trying to find a
                        // match in the original DOM. However, we only do this if the from node is not keyed
                        // since it is possible that a keyed node might match up with a node somewhere else in the
                        // target tree and we don't want to discard it just yet since it still might find a
                        // home in the final DOM tree. After everything is done we will remove any keyed nodes
                        // that didn't find a home
                        if (curFromNodeKey) {
                            // Since the node is keyed it might be matched up later so we defer
                            // the actual removal to later
                            addKeyedRemoval(curFromNodeKey);
                        } else {
                            // NOTE: we skip nested keyed nodes from being removed since there is
                            //       still a chance they will be matched up later
                            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                        }

                        curFromNodeChild = fromNextSibling;
                    }

                    // If we got this far then we did not find a candidate match for
                    // our "to node" and we exhausted all of the children "from"
                    // nodes. Therefore, we will just append the current "to" node
                    // to the end
                    if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                        fromEl.appendChild(matchingFromEl);
                        morphEl(matchingFromEl, curToNodeChild);
                    } else {
                        var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                        if (onBeforeNodeAddedResult !== false) {
                            if (onBeforeNodeAddedResult) {
                                curToNodeChild = onBeforeNodeAddedResult;
                            }

                            if (curToNodeChild.actualize) {
                                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                            }
                            fromEl.appendChild(curToNodeChild);
                            handleNodeAdded(curToNodeChild);
                        }
                    }

                    curToNodeChild = toNextSibling;
                    curFromNodeChild = fromNextSibling;
                }

                // We have processed all of the "to nodes". If curFromNodeChild is
                // non-null then we still have some from nodes left over that need
                // to be removed
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;
                    if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }
                    curFromNodeChild = fromNextSibling;
                }
            }

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphEl(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    morphedNode.nodeValue = toNode.nodeValue;
                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

module.exports = morphdom;

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

/*
    (hapi)nes WebSocket Client (https://github.com/hapijs/nes)
    Copyright (c) 2015-2016, Eran Hammer <eran@hammer.io> and other contributors
    BSD Licensed
*/

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {

    // $lab:coverage:off$

    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
        module.exports = factory(); // Export if used as a module
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        exports.nes = factory();
    } else {
        root.nes = factory();
    }

    // $lab:coverage:on$
})( /* $lab:coverage:off$ */typeof window !== 'undefined' ? window : global /* $lab:coverage:on$ */, function () {

    // Utilities

    var version = '2';
    var ignore = function ignore() {};

    var parse = function parse(message, next) {

        var obj = null;
        var error = null;

        try {
            obj = JSON.parse(message);
        } catch (err) {
            error = new NesError(err, 'protocol');
        }

        return next(error, obj);
    };

    var stringify = function stringify(message, next) {

        var string = null;
        var error = null;

        try {
            string = JSON.stringify(message);
        } catch (err) {
            error = new NesError(err, 'user');
        }

        return next(error, string);
    };

    var nextTick = function nextTick(callback) {

        return function (err) {

            setTimeout(function () {
                return callback(err);
            }, 0);
        };
    };

    var NesError = function NesError(err, type) {

        if (typeof err === 'string') {
            err = new Error(err);
        }

        err.type = type;
        return err;
    };

    // Error codes

    var errorCodes = {
        1000: 'Normal closure',
        1001: 'Going away',
        1002: 'Protocol error',
        1003: 'Unsupported data',
        1004: 'Reserved',
        1005: 'No status received',
        1006: 'Abnormal closure',
        1007: 'Invalid frame payload data',
        1008: 'Policy violation',
        1009: 'Message too big',
        1010: 'Mandatory extension',
        1011: 'Internal server error',
        1015: 'TLS handshake'
    };

    // Client

    var Client = function Client(url, options) {

        options = options || {};

        // Configuration

        this._url = url;
        this._settings = options;
        this._heartbeatTimeout = false; // Server heartbeat configuration

        // State

        this._ws = null;
        this._reconnection = null;
        this._reconnectionTimer = null;
        this._ids = 0; // Id counter
        this._requests = {}; // id -> { callback, timeout }
        this._subscriptions = {}; // path -> [callbacks]
        this._heartbeat = null;
        this._packets = [];
        this._disconnectListeners = null;
        this._disconnectRequested = false;

        // Events

        this.onError = function (err) {
            return console.error(err);
        }; // General error callback (only when an error cannot be associated with a request)
        this.onConnect = ignore; // Called whenever a connection is established
        this.onDisconnect = ignore; // Called whenever a connection is lost: function(willReconnect)
        this.onUpdate = ignore;

        // Public properties

        this.id = null; // Assigned when hello response is received
    };

    Client.WebSocket = /* $lab:coverage:off$ */typeof WebSocket === 'undefined' ? null : WebSocket; /* $lab:coverage:on$ */

    Client.prototype.connect = function (options, callback) {

        if (typeof options === 'function') {
            callback = arguments[0];
            options = {};
        }

        if (this._reconnection) {
            return nextTick(callback)(new Error('Cannot connect while client attempts to reconnect'));
        }

        if (this._ws) {
            return nextTick(callback)(new Error('Already connected'));
        }

        if (options.reconnect !== false) {
            // Defaults to true
            this._reconnection = { // Options: reconnect, delay, maxDelay
                wait: 0,
                delay: options.delay || 1000, // 1 second
                maxDelay: options.maxDelay || 5000, // 5 seconds
                retries: options.retries || Infinity, // Unlimited
                settings: {
                    auth: options.auth,
                    timeout: options.timeout
                }
            };
        } else {
            this._reconnection = null;
        }

        this._connect(options, true, callback);
    };

    Client.prototype._connect = function (options, initial, callback) {
        var _this = this;

        var ws = new Client.WebSocket(this._url, this._settings.ws); // Settings used by node.js only
        this._ws = ws;

        clearTimeout(this._reconnectionTimer);
        this._reconnectionTimer = null;

        var finalize = function finalize(err) {

            if (callback) {
                // Call only once when connect() is called
                var cb = callback;
                callback = null;
                return cb(err);
            }

            return _this.onError(err);
        };

        var timeoutHandler = function timeoutHandler() {

            _this._cleanup();

            finalize(new NesError('Connection timed out', 'timeout'));

            if (initial) {
                return _this._reconnect();
            }
        };

        var timeout = options.timeout ? setTimeout(timeoutHandler, options.timeout) : null;

        ws.onopen = function () {

            clearTimeout(timeout);
            ws.onopen = null;

            return _this._hello(options.auth, function (err) {

                if (err) {
                    if (err.path) {
                        delete _this._subscriptions[err.path];
                    }

                    return _this._disconnect(function () {
                        return finalize(err);
                    }, true); // Stop reconnection when the hello message returns error
                }

                _this.onConnect();
                return finalize();
            });
        };

        ws.onerror = function (event) {

            clearTimeout(timeout);
            _this._cleanup();

            var error = new NesError('Socket error', 'ws');
            return finalize(error);
        };

        ws.onclose = function (event) {

            if (ws.onopen) {
                finalize(new Error('Connection terminated while while to connect'));
            }

            var wasRequested = _this._disconnectRequested; // Get value before _cleanup()

            _this._cleanup();

            var log = {
                code: event.code,
                explanation: errorCodes[event.code] || 'Unknown',
                reason: event.reason,
                wasClean: event.wasClean,
                willReconnect: !!(_this._reconnection && _this._reconnection.retries >= 1),
                wasRequested: wasRequested
            };

            _this.onDisconnect(log.willReconnect, log);
            _this._reconnect();
        };

        ws.onmessage = function (message) {

            return _this._onMessage(message);
        };
    };

    Client.prototype.overrideReconnectionAuth = function (auth) {

        if (!this._reconnection) {
            return false;
        }

        this._reconnection.settings.auth = auth;
        return true;
    };

    Client.prototype.disconnect = function (callback) {

        callback = callback || ignore;
        return this._disconnect(callback, false);
    };

    Client.prototype._disconnect = function (callback, isInternal) {

        this._reconnection = null;
        clearTimeout(this._reconnectionTimer);
        this._reconnectionTimer = null;
        var requested = this._disconnectRequested || !isInternal; // Retain true

        if (this._disconnectListeners) {
            this._disconnectRequested = requested;
            this._disconnectListeners.push(callback);
            return;
        }

        if (!this._ws || this._ws.readyState !== Client.WebSocket.OPEN && this._ws.readyState !== Client.WebSocket.CONNECTING) {

            return nextTick(callback)();
        }

        this._disconnectRequested = requested;
        this._disconnectListeners = [callback];
        this._ws.close();
    };

    Client.prototype._cleanup = function () {

        if (this._ws) {
            if (this._ws.readyState === Client.WebSocket.OPEN || this._ws.readyState === Client.WebSocket.CONNECTING) {

                this._ws.close();
            }

            this._ws.onopen = null;
            this._ws.onclose = null;
            this._ws.onerror = ignore;
            this._ws.onmessage = null;
            this._ws = null;
        }

        this._packets = [];
        this.id = null;

        clearTimeout(this._heartbeat);
        this._heartbeat = null;

        // Flush pending requests

        var error = new NesError('Request failed - server disconnected', 'disconnect');

        var ids = Object.keys(this._requests);
        for (var i = 0; i < ids.length; ++i) {
            var id = ids[i];
            var request = this._requests[id];
            var callback = request.callback;
            clearTimeout(request.timeout);
            delete this._requests[id];
            callback(error);
        }

        if (this._disconnectListeners) {
            var listeners = this._disconnectListeners;
            this._disconnectListeners = null;
            this._disconnectRequested = false;
            listeners.forEach(function (listener) {
                return listener();
            });
        }
    };

    Client.prototype._reconnect = function () {
        var _this2 = this;

        // Reconnect

        if (!this._reconnection) {
            return;
        }

        if (this._reconnection.retries < 1) {
            return this._disconnect(ignore, true); // Clear _reconnection state
        }

        --this._reconnection.retries;
        this._reconnection.wait = this._reconnection.wait + this._reconnection.delay;

        var timeout = Math.min(this._reconnection.wait, this._reconnection.maxDelay);
        this._reconnectionTimer = setTimeout(function () {

            _this2._connect(_this2._reconnection.settings, false, function (err) {

                if (err) {
                    _this2.onError(err);
                    return _this2._reconnect();
                }
            });
        }, timeout);
    };

    Client.prototype.request = function (options, callback) {

        if (typeof options === 'string') {
            options = {
                method: 'GET',
                path: options
            };
        }

        var request = {
            type: 'request',
            method: options.method || 'GET',
            path: options.path,
            headers: options.headers,
            payload: options.payload
        };

        return this._send(request, true, callback);
    };

    Client.prototype.message = function (message, callback) {

        var request = {
            type: 'message',
            message: message
        };

        return this._send(request, true, callback);
    };

    Client.prototype._send = function (request, track, callback) {
        var _this3 = this;

        callback = callback || ignore;

        if (!this._ws || this._ws.readyState !== Client.WebSocket.OPEN) {

            return nextTick(callback)(new NesError('Failed to send message - server disconnected', 'disconnect'));
        }

        request.id = ++this._ids;

        stringify(request, function (err, encoded) {

            if (err) {
                return nextTick(callback)(err);
            }

            // Ignore errors

            if (!track) {
                try {
                    return _this3._ws.send(encoded);
                } catch (err) {
                    return nextTick(callback)(new NesError(err, 'ws'));
                }
            }

            // Track errors

            var record = {
                callback: callback,
                timeout: null
            };

            if (_this3._settings.timeout) {
                record.timeout = setTimeout(function () {

                    record.callback = null;
                    record.timeout = null;

                    return callback(new NesError('Request timed out', 'timeout'));
                }, _this3._settings.timeout);
            }

            _this3._requests[request.id] = record;

            try {
                _this3._ws.send(encoded);
            } catch (err) {
                clearTimeout(_this3._requests[request.id].timeout);
                delete _this3._requests[request.id];
                return nextTick(callback)(new NesError(err, 'ws'));
            }
        });
    };

    Client.prototype._hello = function (auth, callback) {

        var request = {
            type: 'hello',
            version: version
        };

        if (auth) {
            request.auth = auth;
        }

        var subs = this.subscriptions();
        if (subs.length) {
            request.subs = subs;
        }

        return this._send(request, true, callback);
    };

    Client.prototype.subscriptions = function () {

        return Object.keys(this._subscriptions);
    };

    Client.prototype.subscribe = function (path, handler, callback) {
        var _this4 = this;

        if (!path || path[0] !== '/') {

            return nextTick(callback)(new NesError('Invalid path', 'user'));
        }

        var subs = this._subscriptions[path];
        if (subs) {

            // Already subscribed

            if (subs.indexOf(handler) === -1) {
                subs.push(handler);
            }

            return nextTick(callback)();
        }

        this._subscriptions[path] = [handler];

        if (!this._ws || this._ws.readyState !== Client.WebSocket.OPEN) {

            // Queued subscription

            return nextTick(callback)();
        }

        var request = {
            type: 'sub',
            path: path
        };

        return this._send(request, true, function (err) {

            if (err) {
                delete _this4._subscriptions[path];
            }

            return callback(err);
        });
    };

    Client.prototype.unsubscribe = function (path, handler, callback) {

        if (!path || path[0] !== '/') {

            return nextTick(callback)(new NesError('Invalid path', 'user'));
        }

        var subs = this._subscriptions[path];
        if (!subs) {
            return nextTick(callback)();
        }

        var sync = false;
        if (!handler) {
            delete this._subscriptions[path];
            sync = true;
        } else {
            var pos = subs.indexOf(handler);
            if (pos === -1) {
                return nextTick(callback)();
            }

            subs.splice(pos, 1);
            if (!subs.length) {
                delete this._subscriptions[path];
                sync = true;
            }
        }

        if (!sync || !this._ws || this._ws.readyState !== Client.WebSocket.OPEN) {

            return nextTick(callback)();
        }

        var request = {
            type: 'unsub',
            path: path
        };

        return this._send(request, true, function (errIgnore) {
            return callback();
        }); // Ignoring errors as the subscription handlers are already removed
    };

    Client.prototype._onMessage = function (message) {
        var _this5 = this;

        this._beat();

        var data = message.data;
        var prefix = data[0];
        if (prefix !== '{') {
            this._packets.push(data.slice(1));
            if (prefix !== '!') {
                return;
            }

            data = this._packets.join('');
            this._packets = [];
        }

        if (this._packets.length) {
            this._packets = [];
            this.onError(new NesError('Received an incomplete message', 'protocol'));
        }

        parse(data, function (err, update) {

            if (err) {
                return _this5.onError(err);
            }

            // Recreate error

            var error = null;
            if (update.statusCode && update.statusCode >= 400 && update.statusCode <= 599) {

                error = new NesError(update.payload.message || update.payload.error, 'server');
                error.statusCode = update.statusCode;
                error.data = update.payload;
                error.headers = update.headers;
                error.path = update.path;
            }

            // Ping

            if (update.type === 'ping') {
                return _this5._send({ type: 'ping' }, false); // Ignore errors
            }

            // Broadcast and update

            if (update.type === 'update') {
                return _this5.onUpdate(update.message);
            }

            // Publish or Revoke

            if (update.type === 'pub' || update.type === 'revoke') {

                var handlers = _this5._subscriptions[update.path];
                if (update.type === 'revoke') {
                    delete _this5._subscriptions[update.path];
                }

                if (handlers && update.message !== undefined) {

                    var flags = {};
                    if (update.type === 'revoke') {
                        flags.revoked = true;
                    }

                    for (var i = 0; i < handlers.length; ++i) {
                        handlers[i](update.message, flags);
                    }
                }

                return;
            }

            // Lookup callback (message must include an id from this point)

            var request = _this5._requests[update.id];
            if (!request) {
                return _this5.onError(new NesError('Received response for unknown request', 'protocol'));
            }

            var callback = request.callback;
            clearTimeout(request.timeout);
            delete _this5._requests[update.id];

            if (!callback) {
                return; // Response received after timeout
            }

            // Response

            if (update.type === 'request') {
                return callback(error, update.payload, update.statusCode, update.headers);
            }

            // Custom message

            if (update.type === 'message') {
                return callback(error, update.message);
            }

            // Authentication

            if (update.type === 'hello') {
                _this5.id = update.socket;
                if (update.heartbeat) {
                    _this5._heartbeatTimeout = update.heartbeat.interval + update.heartbeat.timeout;
                    _this5._beat(); // Call again once timeout is set
                }

                return callback(error);
            }

            // Subscriptions

            if (update.type === 'sub' || update.type === 'unsub') {

                return callback(error);
            }

            return _this5.onError(new NesError('Received unknown response type: ' + update.type, 'protocol'));
        });
    };

    Client.prototype._beat = function () {
        var _this6 = this;

        if (!this._heartbeatTimeout) {
            return;
        }

        clearTimeout(this._heartbeat);

        this._heartbeat = setTimeout(function () {

            _this6.onError(new NesError('Disconnecting due to heartbeat timeout', 'timeout'));
            _this6._ws.close();
        }, this._heartbeatTimeout);
    };

    // Expose interface

    return { Client: Client };
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
/* global MutationObserver */
var document = require('global/document')
var window = require('global/window')
var watch = Object.create(null)
var KEY_ID = 'onloadid' + (new Date() % 9e6).toString(36)
var KEY_ATTR = 'data-' + KEY_ID
var INDEX = 0

if (window && window.MutationObserver) {
  var observer = new MutationObserver(function (mutations) {
    if (Object.keys(watch).length < 1) return
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === KEY_ATTR) {
        eachAttr(mutations[i], turnon, turnoff)
        continue
      }
      eachMutation(mutations[i].removedNodes, turnoff)
      eachMutation(mutations[i].addedNodes, turnon)
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: [KEY_ATTR]
  })
}

module.exports = function onload (el, on, off, caller) {
  on = on || function () {}
  off = off || function () {}
  el.setAttribute(KEY_ATTR, 'o' + INDEX)
  watch['o' + INDEX] = [on, off, 0, caller || onload.caller]
  INDEX += 1
  return el
}

function turnon (index, el) {
  if (watch[index][0] && watch[index][2] === 0) {
    watch[index][0](el)
    watch[index][2] = 1
  }
}

function turnoff (index, el) {
  if (watch[index][1] && watch[index][2] === 1) {
    watch[index][1](el)
    watch[index][2] = 0
  }
}

function eachAttr (mutation, on, off) {
  var newValue = mutation.target.getAttribute(KEY_ATTR)
  if (sameOrigin(mutation.oldValue, newValue)) {
    watch[newValue] = watch[mutation.oldValue]
    return
  }
  if (watch[mutation.oldValue]) {
    off(mutation.oldValue, mutation.target)
  }
  if (watch[newValue]) {
    on(newValue, mutation.target)
  }
}

function sameOrigin (oldValue, newValue) {
  if (!oldValue || !newValue) return false
  return watch[oldValue][3] === watch[newValue][3]
}

function eachMutation (nodes, fn) {
  var keys = Object.keys(watch)
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] && nodes[i].getAttribute && nodes[i].getAttribute(KEY_ATTR)) {
      var onloadid = nodes[i].getAttribute(KEY_ATTR)
      keys.forEach(function (k) {
        if (onloadid === k) {
          fn(k, nodes[i])
        }
      })
    }
    if (nodes[i].childNodes.length > 0) {
      eachMutation(nodes[i].childNodes, fn)
    }
  }
}

},{"global/document":4,"global/window":5}],12:[function(require,module,exports){
module.exports = require('insert-css')

},{"insert-css":8}],13:[function(require,module,exports){
var bel = require('bel') // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements
var defaultEvents = require('./update-events.js') // default events to be copied when dom elements update

module.exports = bel

// TODO move this + defaultEvents to a new module once we receive more feedback
module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (opts.events !== false) {
    if (!opts.onBeforeElUpdated) opts.onBeforeElUpdated = copier
  }

  return morphdom(fromNode, toNode, opts)

  // morphdom only copies attributes. we decided we also wanted to copy events
  // that can be set via attributes
  function copier (f, t) {
    // copy events:
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
    }
    var oldValue = f.value
    var newValue = t.value
    // copy values for form elements
    if ((f.nodeName === 'INPUT' && f.type !== 'file') || f.nodeName === 'SELECT') {
      if (!newValue) {
        t.value = f.value
      } else if (newValue !== oldValue) {
        f.value = newValue
      }
    } else if (f.nodeName === 'TEXTAREA') {
      if (t.getAttribute('value') === null) f.value = t.value
    }
  }
}

},{"./update-events.js":14,"bel":2,"morphdom":9}],14:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjaGF0L2NsaWVudC5qcyIsIm5vZGVfbW9kdWxlcy9iZWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2h5cGVyc2NyaXB0LWF0dHJpYnV0ZS10by1wcm9wZXJ0eS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9oeXBlcngvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tb3JwaGRvbS9kaXN0L21vcnBoZG9tLmpzIiwibm9kZV9tb2R1bGVzL25lcy9kaXN0L2NsaWVudC5qcyIsIm5vZGVfbW9kdWxlcy9vbi1sb2FkL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3NoZWV0aWZ5L2luc2VydC5qcyIsIm5vZGVfbW9kdWxlcy95by15by9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy95by15by91cGRhdGUtZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3J0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB5byA9IHJlcXVpcmUoJ3lvLXlvJylcbmNvbnN0IG5lcyA9IHJlcXVpcmUoJ25lcycpXG5jb25zdCBjc3MgPSAwXG5cbjsoKHJlcXVpcmUoJ3NoZWV0aWZ5L2luc2VydCcpKFwiLyohIFRBQ0hZT05TIHY0LjYuMSB8IGh0dHA6Ly90YWNoeW9ucy5pbyAqL1xcbi8qISBub3JtYWxpemUuY3NzIHY1LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9odG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS4xNTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1maWdjYXB0aW9uLGZpZ3VyZSxtYWlue2Rpc3BsYXk6YmxvY2t9ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzfWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZS13aWR0aDowfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWRmbntmb250LXN0eWxlOml0YWxpY31tYXJre2JhY2tncm91bmQtY29sb3I6I2ZmMDtjb2xvcjojMDAwfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1hdWRpbyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfWltZ3tib3JkZXItc3R5bGU6bm9uZX1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfS8qIDEgKi8gW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1maWVsZHNldHtib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjttYXJnaW46MCAycHg7cGFkZGluZzouMzVlbSAuNjI1ZW0gLjc1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9LyogMSAqLyBtZW51LGRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfWNhbnZhc3tkaXNwbGF5OmlubGluZS1ibG9ja31baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9LmJvcmRlci1ib3gsYSxhcnRpY2xlLGJvZHksY29kZSxkZCxkaXYsZGwsZHQsZmllbGRzZXQsZm9vdGVyLGZvcm0saDEsaDIsaDMsaDQsaDUsaDYsaGVhZGVyLGh0bWwsaW5wdXRbdHlwZT1lbWFpbF0saW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9cGFzc3dvcmRdLGlucHV0W3R5cGU9dGVsXSxpbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9dXJsXSxsZWdlbmQsbGksbWFpbixvbCxwLHByZSxzZWN0aW9uLHRhYmxlLHRkLHRleHRhcmVhLHRoLHRyLHVse2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYXNwZWN0LXJhdGlve2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlfS5hc3BlY3QtcmF0aW8tLTE2eDl7cGFkZGluZy1ib3R0b206NTYuMjUlfS5hc3BlY3QtcmF0aW8tLTl4MTZ7cGFkZGluZy1ib3R0b206MTc3Ljc3JX0uYXNwZWN0LXJhdGlvLS00eDN7cGFkZGluZy1ib3R0b206NzUlfS5hc3BlY3QtcmF0aW8tLTN4NHtwYWRkaW5nLWJvdHRvbToxMzMuMzMlfS5hc3BlY3QtcmF0aW8tLTZ4NHtwYWRkaW5nLWJvdHRvbTo2Ni42JX0uYXNwZWN0LXJhdGlvLS00eDZ7cGFkZGluZy1ib3R0b206MTUwJX0uYXNwZWN0LXJhdGlvLS04eDV7cGFkZGluZy1ib3R0b206NjIuNSV9LmFzcGVjdC1yYXRpby0tNXg4e3BhZGRpbmctYm90dG9tOjE2MCV9LmFzcGVjdC1yYXRpby0tN3g1e3BhZGRpbmctYm90dG9tOjcxLjQyJX0uYXNwZWN0LXJhdGlvLS01eDd7cGFkZGluZy1ib3R0b206MTQwJX0uYXNwZWN0LXJhdGlvLS0xeDF7cGFkZGluZy1ib3R0b206MTAwJX0uYXNwZWN0LXJhdGlvLS1vYmplY3R7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMH1pbWd7bWF4LXdpZHRoOjEwMCV9LmNvdmVye2JhY2tncm91bmQtc2l6ZTpjb3ZlciFpbXBvcnRhbnR9LmNvbnRhaW57YmFja2dyb3VuZC1zaXplOmNvbnRhaW4haW1wb3J0YW50fS5iZy1jZW50ZXJ7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCV9LmJnLWNlbnRlciwuYmctdG9we2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uYmctdG9we2JhY2tncm91bmQtcG9zaXRpb246dG9wfS5iZy1yaWdodHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCV9LmJnLWJvdHRvbSwuYmctcmlnaHR7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5iZy1ib3R0b217YmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b219LmJnLWxlZnR7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246MH0ub3V0bGluZXtvdXRsaW5lOjFweCBzb2xpZH0ub3V0bGluZS10cmFuc3BhcmVudHtvdXRsaW5lOjFweCBzb2xpZCB0cmFuc3BhcmVudH0ub3V0bGluZS0we291dGxpbmU6MH0uYmF7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJ0e2JvcmRlci10b3Atc3R5bGU6c29saWQ7Ym9yZGVyLXRvcC13aWR0aDoxcHh9LmJye2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5iYntib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4fS5ibHtib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtib3JkZXItbGVmdC13aWR0aDoxcHh9LmJue2JvcmRlci1zdHlsZTpub25lO2JvcmRlci13aWR0aDowfS5iLS1ibGFja3tib3JkZXItY29sb3I6IzAwMH0uYi0tbmVhci1ibGFja3tib3JkZXItY29sb3I6IzExMX0uYi0tZGFyay1ncmF5e2JvcmRlci1jb2xvcjojMzMzfS5iLS1taWQtZ3JheXtib3JkZXItY29sb3I6IzU1NX0uYi0tZ3JheXtib3JkZXItY29sb3I6Izc3N30uYi0tc2lsdmVye2JvcmRlci1jb2xvcjojOTk5fS5iLS1saWdodC1zaWx2ZXJ7Ym9yZGVyLWNvbG9yOiNhYWF9LmItLW1vb24tZ3JheXtib3JkZXItY29sb3I6I2NjY30uYi0tbGlnaHQtZ3JheXtib3JkZXItY29sb3I6I2VlZX0uYi0tbmVhci13aGl0ZXtib3JkZXItY29sb3I6I2Y0ZjRmNH0uYi0td2hpdGV7Ym9yZGVyLWNvbG9yOiNmZmZ9LmItLXdoaXRlLTkwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9LmItLXdoaXRlLTgwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuOCl9LmItLXdoaXRlLTcwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9LmItLXdoaXRlLTYwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNil9LmItLXdoaXRlLTUwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNSl9LmItLXdoaXRlLTQwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNCl9LmItLXdoaXRlLTMwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMyl9LmItLXdoaXRlLTIwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMil9LmItLXdoaXRlLTEwe2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMSl9LmItLXdoaXRlLTA1e2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMDUpfS5iLS13aGl0ZS0wMjV7Ym9yZGVyLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4wMjUpfS5iLS13aGl0ZS0wMTI1e2JvcmRlci1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMDEyNSl9LmItLWJsYWNrLTkwe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC45KX0uYi0tYmxhY2stODB7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjgpfS5iLS1ibGFjay03MHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyl9LmItLWJsYWNrLTYwe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC42KX0uYi0tYmxhY2stNTB7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjUpfS5iLS1ibGFjay00MHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNCl9LmItLWJsYWNrLTMwe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zKX0uYi0tYmxhY2stMjB7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjIpfS5iLS1ibGFjay0xMHtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMSl9LmItLWJsYWNrLTA1e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4wNSl9LmItLWJsYWNrLTAyNXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMDI1KX0uYi0tYmxhY2stMDEyNXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMDEyNSl9LmItLWRhcmstcmVke2JvcmRlci1jb2xvcjojZTcwNDBmfS5iLS1yZWR7Ym9yZGVyLWNvbG9yOiNmZjQxMzZ9LmItLWxpZ2h0LXJlZHtib3JkZXItY29sb3I6I2ZmNzI1Y30uYi0tb3Jhbmdle2JvcmRlci1jb2xvcjojZmY2MzAwfS5iLS1nb2xke2JvcmRlci1jb2xvcjojZmZiNzAwfS5iLS15ZWxsb3d7Ym9yZGVyLWNvbG9yOmdvbGR9LmItLWxpZ2h0LXllbGxvd3tib3JkZXItY29sb3I6I2ZiZjFhOX0uYi0tcHVycGxle2JvcmRlci1jb2xvcjojNWUyY2E1fS5iLS1saWdodC1wdXJwbGV7Ym9yZGVyLWNvbG9yOiNhNDYzZjJ9LmItLWRhcmstcGlua3tib3JkZXItY29sb3I6I2Q1MDA4Zn0uYi0taG90LXBpbmt7Ym9yZGVyLWNvbG9yOiNmZjQxYjR9LmItLXBpbmt7Ym9yZGVyLWNvbG9yOiNmZjgwY2N9LmItLWxpZ2h0LXBpbmt7Ym9yZGVyLWNvbG9yOiNmZmEzZDd9LmItLWRhcmstZ3JlZW57Ym9yZGVyLWNvbG9yOiMxMzc3NTJ9LmItLWdyZWVue2JvcmRlci1jb2xvcjojMTlhOTc0fS5iLS1saWdodC1ncmVlbntib3JkZXItY29sb3I6IzllZWJjZn0uYi0tbmF2eXtib3JkZXItY29sb3I6IzAwMWI0NH0uYi0tZGFyay1ibHVle2JvcmRlci1jb2xvcjojMDA0NDllfS5iLS1ibHVle2JvcmRlci1jb2xvcjojMzU3ZWRkfS5iLS1saWdodC1ibHVle2JvcmRlci1jb2xvcjojOTZjY2ZmfS5iLS1saWdodGVzdC1ibHVle2JvcmRlci1jb2xvcjojY2RlY2ZmfS5iLS13YXNoZWQtYmx1ZXtib3JkZXItY29sb3I6I2Y2ZmZmZX0uYi0td2FzaGVkLWdyZWVue2JvcmRlci1jb2xvcjojZThmZGY1fS5iLS13YXNoZWQteWVsbG93e2JvcmRlci1jb2xvcjojZmZmY2VifS5iLS13YXNoZWQtcmVke2JvcmRlci1jb2xvcjojZmZkZmRmfS5iLS10cmFuc3BhcmVudHtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmJyMHtib3JkZXItcmFkaXVzOjB9LmJyMXtib3JkZXItcmFkaXVzOi4xMjVyZW19LmJyMntib3JkZXItcmFkaXVzOi4yNXJlbX0uYnIze2JvcmRlci1yYWRpdXM6LjVyZW19LmJyNHtib3JkZXItcmFkaXVzOjFyZW19LmJyLTEwMHtib3JkZXItcmFkaXVzOjEwMCV9LmJyLXBpbGx7Ym9yZGVyLXJhZGl1czo5OTk5cHh9LmJyLS1ib3R0b217Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LmJyLS10b3B7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uYnItLXJpZ2h0LC5ici0tdG9we2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uYnItLXJpZ2h0e2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uYnItLWxlZnR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5iLS1kb3R0ZWR7Ym9yZGVyLXN0eWxlOmRvdHRlZH0uYi0tZGFzaGVke2JvcmRlci1zdHlsZTpkYXNoZWR9LmItLXNvbGlke2JvcmRlci1zdHlsZTpzb2xpZH0uYi0tbm9uZXtib3JkZXItc3R5bGU6bm9uZX0uYncwe2JvcmRlci13aWR0aDowfS5idzF7Ym9yZGVyLXdpZHRoOi4xMjVyZW19LmJ3Mntib3JkZXItd2lkdGg6LjI1cmVtfS5idzN7Ym9yZGVyLXdpZHRoOi41cmVtfS5idzR7Ym9yZGVyLXdpZHRoOjFyZW19LmJ3NXtib3JkZXItd2lkdGg6MnJlbX0uYnQtMHtib3JkZXItdG9wLXdpZHRoOjB9LmJyLTB7Ym9yZGVyLXJpZ2h0LXdpZHRoOjB9LmJiLTB7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5ibC0we2JvcmRlci1sZWZ0LXdpZHRoOjB9LnNoYWRvdy0xe2JveC1zaGFkb3c6MCAwIDRweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0ye2JveC1zaGFkb3c6MCAwIDhweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0ze2JveC1zaGFkb3c6MnB4IDJweCA0cHggMnB4IHJnYmEoMCwwLDAsLjIpfS5zaGFkb3ctNHtib3gtc2hhZG93OjJweCAycHggOHB4IDAgcmdiYSgwLDAsMCwuMil9LnNoYWRvdy01e2JveC1zaGFkb3c6NHB4IDRweCA4cHggMCByZ2JhKDAsMCwwLC4yKX0ucHJle292ZXJmbG93LXg6YXV0bztvdmVyZmxvdy15OmhpZGRlbjtvdmVyZmxvdzpzY3JvbGx9LnRvcC0we3RvcDowfS5yaWdodC0we3JpZ2h0OjB9LmJvdHRvbS0we2JvdHRvbTowfS5sZWZ0LTB7bGVmdDowfS50b3AtMXt0b3A6MXJlbX0ucmlnaHQtMXtyaWdodDoxcmVtfS5ib3R0b20tMXtib3R0b206MXJlbX0ubGVmdC0xe2xlZnQ6MXJlbX0udG9wLTJ7dG9wOjJyZW19LnJpZ2h0LTJ7cmlnaHQ6MnJlbX0uYm90dG9tLTJ7Ym90dG9tOjJyZW19LmxlZnQtMntsZWZ0OjJyZW19LnRvcC0tMXt0b3A6LTFyZW19LnJpZ2h0LS0xe3JpZ2h0Oi0xcmVtfS5ib3R0b20tLTF7Ym90dG9tOi0xcmVtfS5sZWZ0LS0xe2xlZnQ6LTFyZW19LnRvcC0tMnt0b3A6LTJyZW19LnJpZ2h0LS0ye3JpZ2h0Oi0ycmVtfS5ib3R0b20tLTJ7Ym90dG9tOi0ycmVtfS5sZWZ0LS0ye2xlZnQ6LTJyZW19LmFic29sdXRlLS1maWxse3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfS5jZjphZnRlciwuY2Y6YmVmb3Jle2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6dGFibGV9LmNmOmFmdGVye2NsZWFyOmJvdGh9LmNmeyp6b29tOjF9LmNse2NsZWFyOmxlZnR9LmNye2NsZWFyOnJpZ2h0fS5jYntjbGVhcjpib3RofS5jbntjbGVhcjpub25lfS5kbntkaXNwbGF5Om5vbmV9LmRpe2Rpc3BsYXk6aW5saW5lfS5kYntkaXNwbGF5OmJsb2NrfS5kaWJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmRpdHtkaXNwbGF5OmlubGluZS10YWJsZX0uZHR7ZGlzcGxheTp0YWJsZX0uZHRje2Rpc3BsYXk6dGFibGUtY2VsbH0uZHQtcm93e2Rpc3BsYXk6dGFibGUtcm93fS5kdC1yb3ctZ3JvdXB7ZGlzcGxheTp0YWJsZS1yb3ctZ3JvdXB9LmR0LWNvbHVtbntkaXNwbGF5OnRhYmxlLWNvbHVtbn0uZHQtY29sdW1uLWdyb3Vwe2Rpc3BsYXk6dGFibGUtY29sdW1uLWdyb3VwfS5kdC0tZml4ZWR7dGFibGUtbGF5b3V0OmZpeGVkO3dpZHRoOjEwMCV9LmZsZXh7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uaW5saW5lLWZsZXh7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleH0uZmxleC1hdXRvey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MH0uZmxleC1ub25ley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uZmxleC1jb2x1bW57LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mbGV4LWNvbHVtbiwuZmxleC1yb3d7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbH0uZmxleC1yb3d7LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9LmZsZXgtd3JhcHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9Lml0ZW1zLXN0YXJ0ey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZHstd2Via2l0LWJveC1hbGlnbjplbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5pdGVtcy1jZW50ZXJ7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5ley13ZWJraXQtYm94LWFsaWduOmJhc2VsaW5lOy1tcy1mbGV4LWFsaWduOmJhc2VsaW5lO2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofS5zZWxmLXN0YXJ0ey1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZHstbXMtZmxleC1pdGVtLWFsaWduOmVuZDthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlcnstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjstbXMtZ3JpZC1yb3ctYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5ley1tcy1mbGV4LWl0ZW0tYWxpZ246YmFzZWxpbmU7YWxpZ24tc2VsZjpiYXNlbGluZX0uc2VsZi1zdHJldGNoey1tcy1mbGV4LWl0ZW0tYWxpZ246c3RyZXRjaDstbXMtZ3JpZC1yb3ctYWxpZ246c3RyZXRjaDthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnR7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVyey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2Vlbnstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZHstbXMtZmxleC1wYWNrOmRpc3RyaWJ1dGU7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydHstbXMtZmxleC1saW5lLXBhY2s6c3RhcnQ7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS5jb250ZW50LWVuZHstbXMtZmxleC1saW5lLXBhY2s6ZW5kO2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVyey1tcy1mbGV4LWxpbmUtcGFjazpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXJ9LmNvbnRlbnQtYmV0d2VlbnstbXMtZmxleC1saW5lLXBhY2s6anVzdGlmeTthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5key1tcy1mbGV4LWxpbmUtcGFjazpkaXN0cmlidXRlO2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2h7LW1zLWZsZXgtbGluZS1wYWNrOnN0cmV0Y2g7YWxpZ24tY29udGVudDpzdHJldGNofS5vcmRlci0wey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTstbXMtZmxleC1vcmRlcjowO29yZGVyOjB9Lm9yZGVyLTF7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ub3JkZXItMnstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjM7LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyfS5vcmRlci0zey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NDstbXMtZmxleC1vcmRlcjozO29yZGVyOjN9Lm9yZGVyLTR7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo1Oy1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NH0ub3JkZXItNXstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjY7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1fS5vcmRlci02ey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NzstbXMtZmxleC1vcmRlcjo2O29yZGVyOjZ9Lm9yZGVyLTd7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo4Oy1tcy1mbGV4LW9yZGVyOjc7b3JkZXI6N30ub3JkZXItOHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjk7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4fS5vcmRlci1sYXN0ey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTAwMDAwOy1tcy1mbGV4LW9yZGVyOjk5OTk5O29yZGVyOjk5OTk5fS5mbHtmbG9hdDpsZWZ0fS5mbCwuZnJ7X2Rpc3BsYXk6aW5saW5lfS5mcntmbG9hdDpyaWdodH0uZm57ZmxvYXQ6bm9uZX0uc2Fucy1zZXJpZntmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxhdmVuaXIgbmV4dCxhdmVuaXIsaGVsdmV0aWNhIG5ldWUsaGVsdmV0aWNhLHVidW50dSxyb2JvdG8sbm90byxzZWdvZSB1aSxhcmlhbCxzYW5zLXNlcmlmfS5zZXJpZntmb250LWZhbWlseTpnZW9yZ2lhLHRpbWVzLHNlcmlmfS5zeXN0ZW0tc2Fucy1zZXJpZntmb250LWZhbWlseTpzYW5zLXNlcmlmfS5zeXN0ZW0tc2VyaWZ7Zm9udC1mYW1pbHk6c2VyaWZ9LmNvZGUsY29kZXtmb250LWZhbWlseTpDb25zb2xhcyxtb25hY28sbW9ub3NwYWNlfS5jb3VyaWVye2ZvbnQtZmFtaWx5OkNvdXJpZXIgTmV4dCxjb3VyaWVyLG1vbm9zcGFjZX0uaGVsdmV0aWNhe2ZvbnQtZmFtaWx5OmhlbHZldGljYSBuZXVlLGhlbHZldGljYSxzYW5zLXNlcmlmfS5hdmVuaXJ7Zm9udC1mYW1pbHk6YXZlbmlyIG5leHQsYXZlbmlyLHNhbnMtc2VyaWZ9LmF0aGVsYXN7Zm9udC1mYW1pbHk6YXRoZWxhcyxnZW9yZ2lhLHNlcmlmfS5nZW9yZ2lhe2ZvbnQtZmFtaWx5Omdlb3JnaWEsc2VyaWZ9LnRpbWVze2ZvbnQtZmFtaWx5OnRpbWVzLHNlcmlmfS5ib2Rvbml7Zm9udC1mYW1pbHk6Qm9kb25pIE1ULHNlcmlmfS5jYWxpc3Rve2ZvbnQtZmFtaWx5OkNhbGlzdG8gTVQsc2VyaWZ9LmdhcmFtb25ke2ZvbnQtZmFtaWx5OmdhcmFtb25kLHNlcmlmfS5iYXNrZXJ2aWxsZXtmb250LWZhbWlseTpiYXNrZXJ2aWxsZSxzZXJpZn0uaXtmb250LXN0eWxlOml0YWxpY30uZnMtbm9ybWFse2ZvbnQtc3R5bGU6bm9ybWFsfS5ub3JtYWx7Zm9udC13ZWlnaHQ6NDAwfS5ie2ZvbnQtd2VpZ2h0OjcwMH0uZncxe2ZvbnQtd2VpZ2h0OjEwMH0uZncye2ZvbnQtd2VpZ2h0OjIwMH0uZncze2ZvbnQtd2VpZ2h0OjMwMH0uZnc0e2ZvbnQtd2VpZ2h0OjQwMH0uZnc1e2ZvbnQtd2VpZ2h0OjUwMH0uZnc2e2ZvbnQtd2VpZ2h0OjYwMH0uZnc3e2ZvbnQtd2VpZ2h0OjcwMH0uZnc4e2ZvbnQtd2VpZ2h0OjgwMH0uZnc5e2ZvbnQtd2VpZ2h0OjkwMH0uaW5wdXQtcmVzZXR7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmJ1dHRvbi1yZXNldDo6LW1vei1mb2N1cy1pbm5lciwuaW5wdXQtcmVzZXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfS5oMXtoZWlnaHQ6MXJlbX0uaDJ7aGVpZ2h0OjJyZW19Lmgze2hlaWdodDo0cmVtfS5oNHtoZWlnaHQ6OHJlbX0uaDV7aGVpZ2h0OjE2cmVtfS5oLTI1e2hlaWdodDoyNSV9LmgtNTB7aGVpZ2h0OjUwJX0uaC03NXtoZWlnaHQ6NzUlfS5oLTEwMHtoZWlnaHQ6MTAwJX0ubWluLWgtMTAwe21pbi1oZWlnaHQ6MTAwJX0udmgtMjV7aGVpZ2h0OjI1dmh9LnZoLTUwe2hlaWdodDo1MHZofS52aC03NXtoZWlnaHQ6NzV2aH0udmgtMTAwe2hlaWdodDoxMDB2aH0ubWluLXZoLTEwMHttaW4taGVpZ2h0OjEwMHZofS5oLWF1dG97aGVpZ2h0OmF1dG99LmgtaW5oZXJpdHtoZWlnaHQ6aW5oZXJpdH0udHJhY2tlZHtsZXR0ZXItc3BhY2luZzouMWVtfS50cmFja2VkLXRpZ2h0e2xldHRlci1zcGFjaW5nOi0uMDVlbX0udHJhY2tlZC1tZWdhe2xldHRlci1zcGFjaW5nOi4yNWVtfS5saC1zb2xpZHtsaW5lLWhlaWdodDoxfS5saC10aXRsZXtsaW5lLWhlaWdodDoxLjI1fS5saC1jb3B5e2xpbmUtaGVpZ2h0OjEuNX0ubGlua3t0ZXh0LWRlY29yYXRpb246bm9uZX0ubGluaywubGluazphY3RpdmUsLmxpbms6Zm9jdXMsLmxpbms6aG92ZXIsLmxpbms6bGluaywubGluazp2aXNpdGVkey13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjpjb2xvciAuMTVzIGVhc2UtaW59Lmxpbms6Zm9jdXN7b3V0bGluZToxcHggZG90dGVkIGN1cnJlbnRDb2xvcn0ubGlzdHtsaXN0LXN0eWxlLXR5cGU6bm9uZX0ubXctMTAwe21heC13aWR0aDoxMDAlfS5tdzF7bWF4LXdpZHRoOjFyZW19Lm13MnttYXgtd2lkdGg6MnJlbX0ubXcze21heC13aWR0aDo0cmVtfS5tdzR7bWF4LXdpZHRoOjhyZW19Lm13NXttYXgtd2lkdGg6MTZyZW19Lm13NnttYXgtd2lkdGg6MzJyZW19Lm13N3ttYXgtd2lkdGg6NDhyZW19Lm13OHttYXgtd2lkdGg6NjRyZW19Lm13OXttYXgtd2lkdGg6OTZyZW19Lm13LW5vbmV7bWF4LXdpZHRoOm5vbmV9Lncxe3dpZHRoOjFyZW19Lncye3dpZHRoOjJyZW19Lncze3dpZHRoOjRyZW19Lnc0e3dpZHRoOjhyZW19Lnc1e3dpZHRoOjE2cmVtfS53LTEwe3dpZHRoOjEwJX0udy0yMHt3aWR0aDoyMCV9LnctMjV7d2lkdGg6MjUlfS53LTMwe3dpZHRoOjMwJX0udy0zM3t3aWR0aDozMyV9LnctMzR7d2lkdGg6MzQlfS53LTQwe3dpZHRoOjQwJX0udy01MHt3aWR0aDo1MCV9LnctNjB7d2lkdGg6NjAlfS53LTcwe3dpZHRoOjcwJX0udy03NXt3aWR0aDo3NSV9LnctODB7d2lkdGg6ODAlfS53LTkwe3dpZHRoOjkwJX0udy0xMDB7d2lkdGg6MTAwJX0udy10aGlyZHt3aWR0aDozMy4zMzMzMyV9LnctdHdvLXRoaXJkc3t3aWR0aDo2Ni42NjY2NyV9LnctYXV0b3t3aWR0aDphdXRvfS5vdmVyZmxvdy12aXNpYmxle292ZXJmbG93OnZpc2libGV9Lm92ZXJmbG93LWhpZGRlbntvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbHtvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG97b3ZlcmZsb3c6YXV0b30ub3ZlcmZsb3cteC12aXNpYmxle292ZXJmbG93LXg6dmlzaWJsZX0ub3ZlcmZsb3cteC1oaWRkZW57b3ZlcmZsb3cteDpoaWRkZW59Lm92ZXJmbG93LXgtc2Nyb2xse292ZXJmbG93LXg6c2Nyb2xsfS5vdmVyZmxvdy14LWF1dG97b3ZlcmZsb3cteDphdXRvfS5vdmVyZmxvdy15LXZpc2libGV7b3ZlcmZsb3cteTp2aXNpYmxlfS5vdmVyZmxvdy15LWhpZGRlbntvdmVyZmxvdy15OmhpZGRlbn0ub3ZlcmZsb3cteS1zY3JvbGx7b3ZlcmZsb3cteTpzY3JvbGx9Lm92ZXJmbG93LXktYXV0b3tvdmVyZmxvdy15OmF1dG99LnN0YXRpY3twb3NpdGlvbjpzdGF0aWN9LnJlbGF0aXZle3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZXtwb3NpdGlvbjphYnNvbHV0ZX0uZml4ZWR7cG9zaXRpb246Zml4ZWR9Lm8tMTAwe29wYWNpdHk6MX0uby05MHtvcGFjaXR5Oi45fS5vLTgwe29wYWNpdHk6Ljh9Lm8tNzB7b3BhY2l0eTouN30uby02MHtvcGFjaXR5Oi42fS5vLTUwe29wYWNpdHk6LjV9Lm8tNDB7b3BhY2l0eTouNH0uby0zMHtvcGFjaXR5Oi4zfS5vLTIwe29wYWNpdHk6LjJ9Lm8tMTB7b3BhY2l0eTouMX0uby0wNXtvcGFjaXR5Oi4wNX0uby0wMjV7b3BhY2l0eTouMDI1fS5vLTB7b3BhY2l0eTowfS5yb3RhdGUtNDV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0ucm90YXRlLTkwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LnJvdGF0ZS0xMzV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfS5yb3RhdGUtMTgwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ucm90YXRlLTIyNXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyl9LnJvdGF0ZS0yNzB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5yb3RhdGUtMzE1ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKX0uYmxhY2stOTB7Y29sb3I6cmdiYSgwLDAsMCwuOSl9LmJsYWNrLTgwe2NvbG9yOnJnYmEoMCwwLDAsLjgpfS5ibGFjay03MHtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYmxhY2stNjB7Y29sb3I6cmdiYSgwLDAsMCwuNil9LmJsYWNrLTUwe2NvbG9yOnJnYmEoMCwwLDAsLjUpfS5ibGFjay00MHtjb2xvcjpyZ2JhKDAsMCwwLC40KX0uYmxhY2stMzB7Y29sb3I6cmdiYSgwLDAsMCwuMyl9LmJsYWNrLTIwe2NvbG9yOnJnYmEoMCwwLDAsLjIpfS5ibGFjay0xMHtjb2xvcjpyZ2JhKDAsMCwwLC4xKX0uYmxhY2stMDV7Y29sb3I6cmdiYSgwLDAsMCwuMDUpfS53aGl0ZS05MHtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9LndoaXRlLTgwe2NvbG9yOmhzbGEoMCwwJSwxMDAlLC44KX0ud2hpdGUtNzB7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS53aGl0ZS02MHtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNil9LndoaXRlLTUwe2NvbG9yOmhzbGEoMCwwJSwxMDAlLC41KX0ud2hpdGUtNDB7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjQpfS53aGl0ZS0zMHtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuMyl9LndoaXRlLTIwe2NvbG9yOmhzbGEoMCwwJSwxMDAlLC4yKX0ud2hpdGUtMTB7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5ibGFja3tjb2xvcjojMDAwfS5uZWFyLWJsYWNre2NvbG9yOiMxMTF9LmRhcmstZ3JheXtjb2xvcjojMzMzfS5taWQtZ3JheXtjb2xvcjojNTU1fS5ncmF5e2NvbG9yOiM3Nzd9LnNpbHZlcntjb2xvcjojOTk5fS5saWdodC1zaWx2ZXJ7Y29sb3I6I2FhYX0ubW9vbi1ncmF5e2NvbG9yOiNjY2N9LmxpZ2h0LWdyYXl7Y29sb3I6I2VlZX0ubmVhci13aGl0ZXtjb2xvcjojZjRmNGY0fS53aGl0ZXtjb2xvcjojZmZmfS5kYXJrLXJlZHtjb2xvcjojZTcwNDBmfS5yZWR7Y29sb3I6I2ZmNDEzNn0ubGlnaHQtcmVke2NvbG9yOiNmZjcyNWN9Lm9yYW5nZXtjb2xvcjojZmY2MzAwfS5nb2xke2NvbG9yOiNmZmI3MDB9LnllbGxvd3tjb2xvcjpnb2xkfS5saWdodC15ZWxsb3d7Y29sb3I6I2ZiZjFhOX0ucHVycGxle2NvbG9yOiM1ZTJjYTV9LmxpZ2h0LXB1cnBsZXtjb2xvcjojYTQ2M2YyfS5kYXJrLXBpbmt7Y29sb3I6I2Q1MDA4Zn0uaG90LXBpbmt7Y29sb3I6I2ZmNDFiNH0ucGlua3tjb2xvcjojZmY4MGNjfS5saWdodC1waW5re2NvbG9yOiNmZmEzZDd9LmRhcmstZ3JlZW57Y29sb3I6IzEzNzc1Mn0uZ3JlZW57Y29sb3I6IzE5YTk3NH0ubGlnaHQtZ3JlZW57Y29sb3I6IzllZWJjZn0ubmF2eXtjb2xvcjojMDAxYjQ0fS5kYXJrLWJsdWV7Y29sb3I6IzAwNDQ5ZX0uYmx1ZXtjb2xvcjojMzU3ZWRkfS5saWdodC1ibHVle2NvbG9yOiM5NmNjZmZ9LmxpZ2h0ZXN0LWJsdWV7Y29sb3I6I2NkZWNmZn0ud2FzaGVkLWJsdWV7Y29sb3I6I2Y2ZmZmZX0ud2FzaGVkLWdyZWVue2NvbG9yOiNlOGZkZjV9Lndhc2hlZC15ZWxsb3d7Y29sb3I6I2ZmZmNlYn0ud2FzaGVkLXJlZHtjb2xvcjojZmZkZmRmfS5iZy1ibGFjay05MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjkpfS5iZy1ibGFjay04MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjgpfS5iZy1ibGFjay03MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5iZy1ibGFjay02MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5iZy1ibGFjay01MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjUpfS5iZy1ibGFjay00MHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5iZy1ibGFjay0zMHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjMpfS5iZy1ibGFjay0yMHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjIpfS5iZy1ibGFjay0xMHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5iZy1ibGFjay0wNXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX0uYmctd2hpdGUtOTB7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9LmJnLXdoaXRlLTgwe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjgpfS5iZy13aGl0ZS03MHtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC43KX0uYmctd2hpdGUtNjB7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNil9LmJnLXdoaXRlLTUwe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjUpfS5iZy13aGl0ZS00MHtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC40KX0uYmctd2hpdGUtMzB7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMyl9LmJnLXdoaXRlLTIwe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjIpfS5iZy13aGl0ZS0xMHtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xKX0uYmctYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5iZy1uZWFyLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzExMX0uYmctZGFyay1ncmF5e2JhY2tncm91bmQtY29sb3I6IzMzM30uYmctbWlkLWdyYXl7YmFja2dyb3VuZC1jb2xvcjojNTU1fS5iZy1ncmF5e2JhY2tncm91bmQtY29sb3I6Izc3N30uYmctc2lsdmVye2JhY2tncm91bmQtY29sb3I6Izk5OX0uYmctbGlnaHQtc2lsdmVye2JhY2tncm91bmQtY29sb3I6I2FhYX0uYmctbW9vbi1ncmF5e2JhY2tncm91bmQtY29sb3I6I2NjY30uYmctbGlnaHQtZ3JheXtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9LmJnLW5lYXItd2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0fS5iZy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmJnLXRyYW5zcGFyZW50e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmJnLWRhcmstcmVke2JhY2tncm91bmQtY29sb3I6I2U3MDQwZn0uYmctcmVke2JhY2tncm91bmQtY29sb3I6I2ZmNDEzNn0uYmctbGlnaHQtcmVke2JhY2tncm91bmQtY29sb3I6I2ZmNzI1Y30uYmctb3Jhbmdle2JhY2tncm91bmQtY29sb3I6I2ZmNjMwMH0uYmctZ29sZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI3MDB9LmJnLXllbGxvd3tiYWNrZ3JvdW5kLWNvbG9yOmdvbGR9LmJnLWxpZ2h0LXllbGxvd3tiYWNrZ3JvdW5kLWNvbG9yOiNmYmYxYTl9LmJnLXB1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM1ZTJjYTV9LmJnLWxpZ2h0LXB1cnBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNhNDYzZjJ9LmJnLWRhcmstcGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNkNTAwOGZ9LmJnLWhvdC1waW5re2JhY2tncm91bmQtY29sb3I6I2ZmNDFiNH0uYmctcGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwY2N9LmJnLWxpZ2h0LXBpbmt7YmFja2dyb3VuZC1jb2xvcjojZmZhM2Q3fS5iZy1kYXJrLWdyZWVue2JhY2tncm91bmQtY29sb3I6IzEzNzc1Mn0uYmctZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojMTlhOTc0fS5iZy1saWdodC1ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiM5ZWViY2Z9LmJnLW5hdnl7YmFja2dyb3VuZC1jb2xvcjojMDAxYjQ0fS5iZy1kYXJrLWJsdWV7YmFja2dyb3VuZC1jb2xvcjojMDA0NDllfS5iZy1ibHVle2JhY2tncm91bmQtY29sb3I6IzM1N2VkZH0uYmctbGlnaHQtYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiM5NmNjZmZ9LmJnLWxpZ2h0ZXN0LWJsdWV7YmFja2dyb3VuZC1jb2xvcjojY2RlY2ZmfS5iZy13YXNoZWQtYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNmZmZmV9LmJnLXdhc2hlZC1ncmVlbntiYWNrZ3JvdW5kLWNvbG9yOiNlOGZkZjV9LmJnLXdhc2hlZC15ZWxsb3d7YmFja2dyb3VuZC1jb2xvcjojZmZmY2VifS5iZy13YXNoZWQtcmVke2JhY2tncm91bmQtY29sb3I6I2ZmZGZkZn0uaG92ZXItYmxhY2s6Zm9jdXMsLmhvdmVyLWJsYWNrOmhvdmVye2NvbG9yOiMwMDB9LmhvdmVyLW5lYXItYmxhY2s6Zm9jdXMsLmhvdmVyLW5lYXItYmxhY2s6aG92ZXJ7Y29sb3I6IzExMX0uaG92ZXItZGFyay1ncmF5OmZvY3VzLC5ob3Zlci1kYXJrLWdyYXk6aG92ZXJ7Y29sb3I6IzMzM30uaG92ZXItbWlkLWdyYXk6Zm9jdXMsLmhvdmVyLW1pZC1ncmF5OmhvdmVye2NvbG9yOiM1NTV9LmhvdmVyLWdyYXk6Zm9jdXMsLmhvdmVyLWdyYXk6aG92ZXJ7Y29sb3I6Izc3N30uaG92ZXItc2lsdmVyOmZvY3VzLC5ob3Zlci1zaWx2ZXI6aG92ZXJ7Y29sb3I6Izk5OX0uaG92ZXItbGlnaHQtc2lsdmVyOmZvY3VzLC5ob3Zlci1saWdodC1zaWx2ZXI6aG92ZXJ7Y29sb3I6I2FhYX0uaG92ZXItbW9vbi1ncmF5OmZvY3VzLC5ob3Zlci1tb29uLWdyYXk6aG92ZXJ7Y29sb3I6I2NjY30uaG92ZXItbGlnaHQtZ3JheTpmb2N1cywuaG92ZXItbGlnaHQtZ3JheTpob3Zlcntjb2xvcjojZWVlfS5ob3Zlci1uZWFyLXdoaXRlOmZvY3VzLC5ob3Zlci1uZWFyLXdoaXRlOmhvdmVye2NvbG9yOiNmNGY0ZjR9LmhvdmVyLXdoaXRlOmZvY3VzLC5ob3Zlci13aGl0ZTpob3Zlcntjb2xvcjojZmZmfS5ob3Zlci1ibGFjay05MDpmb2N1cywuaG92ZXItYmxhY2stOTA6aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuOSl9LmhvdmVyLWJsYWNrLTgwOmZvY3VzLC5ob3Zlci1ibGFjay04MDpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC44KX0uaG92ZXItYmxhY2stNzA6Zm9jdXMsLmhvdmVyLWJsYWNrLTcwOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5ob3Zlci1ibGFjay02MDpmb2N1cywuaG92ZXItYmxhY2stNjA6aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNil9LmhvdmVyLWJsYWNrLTUwOmZvY3VzLC5ob3Zlci1ibGFjay01MDpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC41KX0uaG92ZXItYmxhY2stNDA6Zm9jdXMsLmhvdmVyLWJsYWNrLTQwOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjQpfS5ob3Zlci1ibGFjay0zMDpmb2N1cywuaG92ZXItYmxhY2stMzA6aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMyl9LmhvdmVyLWJsYWNrLTIwOmZvY3VzLC5ob3Zlci1ibGFjay0yMDpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC4yKX0uaG92ZXItYmxhY2stMTA6Zm9jdXMsLmhvdmVyLWJsYWNrLTEwOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjEpfS5ob3Zlci13aGl0ZS05MDpmb2N1cywuaG92ZXItd2hpdGUtOTA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5ob3Zlci13aGl0ZS04MDpmb2N1cywuaG92ZXItd2hpdGUtODA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjgpfS5ob3Zlci13aGl0ZS03MDpmb2N1cywuaG92ZXItd2hpdGUtNzA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS5ob3Zlci13aGl0ZS02MDpmb2N1cywuaG92ZXItd2hpdGUtNjA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjYpfS5ob3Zlci13aGl0ZS01MDpmb2N1cywuaG92ZXItd2hpdGUtNTA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjUpfS5ob3Zlci13aGl0ZS00MDpmb2N1cywuaG92ZXItd2hpdGUtNDA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjQpfS5ob3Zlci13aGl0ZS0zMDpmb2N1cywuaG92ZXItd2hpdGUtMzA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjMpfS5ob3Zlci13aGl0ZS0yMDpmb2N1cywuaG92ZXItd2hpdGUtMjA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjIpfS5ob3Zlci13aGl0ZS0xMDpmb2N1cywuaG92ZXItd2hpdGUtMTA6aG92ZXJ7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5ob3Zlci1iZy1ibGFjazpmb2N1cywuaG92ZXItYmctYmxhY2s6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5ob3Zlci1iZy1uZWFyLWJsYWNrOmZvY3VzLC5ob3Zlci1iZy1uZWFyLWJsYWNrOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExMX0uaG92ZXItYmctZGFyay1ncmF5OmZvY3VzLC5ob3Zlci1iZy1kYXJrLWdyYXk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzMzfS5ob3Zlci1iZy1kYXJrLWdyYXk6Zm9jdXMsLmhvdmVyLWJnLW1pZC1ncmF5OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzU1NX0uaG92ZXItYmctZ3JheTpmb2N1cywuaG92ZXItYmctZ3JheTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM3Nzd9LmhvdmVyLWJnLXNpbHZlcjpmb2N1cywuaG92ZXItYmctc2lsdmVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izk5OX0uaG92ZXItYmctbGlnaHQtc2lsdmVyOmZvY3VzLC5ob3Zlci1iZy1saWdodC1zaWx2ZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYWFhfS5ob3Zlci1iZy1tb29uLWdyYXk6Zm9jdXMsLmhvdmVyLWJnLW1vb24tZ3JheTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9LmhvdmVyLWJnLWxpZ2h0LWdyYXk6Zm9jdXMsLmhvdmVyLWJnLWxpZ2h0LWdyYXk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5ob3Zlci1iZy1uZWFyLXdoaXRlOmZvY3VzLC5ob3Zlci1iZy1uZWFyLXdoaXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNH0uaG92ZXItYmctd2hpdGU6Zm9jdXMsLmhvdmVyLWJnLXdoaXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn0uaG92ZXItYmctdHJhbnNwYXJlbnQ6Zm9jdXMsLmhvdmVyLWJnLXRyYW5zcGFyZW50OmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmhvdmVyLWJnLWJsYWNrLTkwOmZvY3VzLC5ob3Zlci1iZy1ibGFjay05MDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjkpfS5ob3Zlci1iZy1ibGFjay04MDpmb2N1cywuaG92ZXItYmctYmxhY2stODA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44KX0uaG92ZXItYmctYmxhY2stNzA6Zm9jdXMsLmhvdmVyLWJnLWJsYWNrLTcwOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNyl9LmhvdmVyLWJnLWJsYWNrLTYwOmZvY3VzLC5ob3Zlci1iZy1ibGFjay02MDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5ob3Zlci1iZy1ibGFjay01MDpmb2N1cywuaG92ZXItYmctYmxhY2stNTA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41KX0uaG92ZXItYmctYmxhY2stNDA6Zm9jdXMsLmhvdmVyLWJnLWJsYWNrLTQwOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCl9LmhvdmVyLWJnLWJsYWNrLTMwOmZvY3VzLC5ob3Zlci1iZy1ibGFjay0zMDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjMpfS5ob3Zlci1iZy1ibGFjay0yMDpmb2N1cywuaG92ZXItYmctYmxhY2stMjA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yKX0uaG92ZXItYmctYmxhY2stMTA6Zm9jdXMsLmhvdmVyLWJnLWJsYWNrLTEwOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9LmhvdmVyLWJnLXdoaXRlLTkwOmZvY3VzLC5ob3Zlci1iZy13aGl0ZS05MDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC45KX0uaG92ZXItYmctd2hpdGUtODA6Zm9jdXMsLmhvdmVyLWJnLXdoaXRlLTgwOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjgpfS5ob3Zlci1iZy13aGl0ZS03MDpmb2N1cywuaG92ZXItYmctd2hpdGUtNzA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9LmhvdmVyLWJnLXdoaXRlLTYwOmZvY3VzLC5ob3Zlci1iZy13aGl0ZS02MDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC42KX0uaG92ZXItYmctd2hpdGUtNTA6Zm9jdXMsLmhvdmVyLWJnLXdoaXRlLTUwOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjUpfS5ob3Zlci1iZy13aGl0ZS00MDpmb2N1cywuaG92ZXItYmctd2hpdGUtNDA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNCl9LmhvdmVyLWJnLXdoaXRlLTMwOmZvY3VzLC5ob3Zlci1iZy13aGl0ZS0zMDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4zKX0uaG92ZXItYmctd2hpdGUtMjA6Zm9jdXMsLmhvdmVyLWJnLXdoaXRlLTIwOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjIpfS5ob3Zlci1iZy13aGl0ZS0xMDpmb2N1cywuaG92ZXItYmctd2hpdGUtMTA6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuMSl9LmhvdmVyLWRhcmstcmVkOmZvY3VzLC5ob3Zlci1kYXJrLXJlZDpob3Zlcntjb2xvcjojZTcwNDBmfS5ob3Zlci1yZWQ6Zm9jdXMsLmhvdmVyLXJlZDpob3Zlcntjb2xvcjojZmY0MTM2fS5ob3Zlci1saWdodC1yZWQ6Zm9jdXMsLmhvdmVyLWxpZ2h0LXJlZDpob3Zlcntjb2xvcjojZmY3MjVjfS5ob3Zlci1vcmFuZ2U6Zm9jdXMsLmhvdmVyLW9yYW5nZTpob3Zlcntjb2xvcjojZmY2MzAwfS5ob3Zlci1nb2xkOmZvY3VzLC5ob3Zlci1nb2xkOmhvdmVye2NvbG9yOiNmZmI3MDB9LmhvdmVyLXllbGxvdzpmb2N1cywuaG92ZXIteWVsbG93OmhvdmVye2NvbG9yOmdvbGR9LmhvdmVyLWxpZ2h0LXllbGxvdzpmb2N1cywuaG92ZXItbGlnaHQteWVsbG93OmhvdmVye2NvbG9yOiNmYmYxYTl9LmhvdmVyLXB1cnBsZTpmb2N1cywuaG92ZXItcHVycGxlOmhvdmVye2NvbG9yOiM1ZTJjYTV9LmhvdmVyLWxpZ2h0LXB1cnBsZTpmb2N1cywuaG92ZXItbGlnaHQtcHVycGxlOmhvdmVye2NvbG9yOiNhNDYzZjJ9LmhvdmVyLWRhcmstcGluazpmb2N1cywuaG92ZXItZGFyay1waW5rOmhvdmVye2NvbG9yOiNkNTAwOGZ9LmhvdmVyLWhvdC1waW5rOmZvY3VzLC5ob3Zlci1ob3QtcGluazpob3Zlcntjb2xvcjojZmY0MWI0fS5ob3Zlci1waW5rOmZvY3VzLC5ob3Zlci1waW5rOmhvdmVye2NvbG9yOiNmZjgwY2N9LmhvdmVyLWxpZ2h0LXBpbms6Zm9jdXMsLmhvdmVyLWxpZ2h0LXBpbms6aG92ZXJ7Y29sb3I6I2ZmYTNkN30uaG92ZXItZGFyay1ncmVlbjpmb2N1cywuaG92ZXItZGFyay1ncmVlbjpob3Zlcntjb2xvcjojMTM3NzUyfS5ob3Zlci1ncmVlbjpmb2N1cywuaG92ZXItZ3JlZW46aG92ZXJ7Y29sb3I6IzE5YTk3NH0uaG92ZXItbGlnaHQtZ3JlZW46Zm9jdXMsLmhvdmVyLWxpZ2h0LWdyZWVuOmhvdmVye2NvbG9yOiM5ZWViY2Z9LmhvdmVyLW5hdnk6Zm9jdXMsLmhvdmVyLW5hdnk6aG92ZXJ7Y29sb3I6IzAwMWI0NH0uaG92ZXItZGFyay1ibHVlOmZvY3VzLC5ob3Zlci1kYXJrLWJsdWU6aG92ZXJ7Y29sb3I6IzAwNDQ5ZX0uaG92ZXItYmx1ZTpmb2N1cywuaG92ZXItYmx1ZTpob3Zlcntjb2xvcjojMzU3ZWRkfS5ob3Zlci1saWdodC1ibHVlOmZvY3VzLC5ob3Zlci1saWdodC1ibHVlOmhvdmVye2NvbG9yOiM5NmNjZmZ9LmhvdmVyLWxpZ2h0ZXN0LWJsdWU6Zm9jdXMsLmhvdmVyLWxpZ2h0ZXN0LWJsdWU6aG92ZXJ7Y29sb3I6I2NkZWNmZn0uaG92ZXItd2FzaGVkLWJsdWU6Zm9jdXMsLmhvdmVyLXdhc2hlZC1ibHVlOmhvdmVye2NvbG9yOiNmNmZmZmV9LmhvdmVyLXdhc2hlZC1ncmVlbjpmb2N1cywuaG92ZXItd2FzaGVkLWdyZWVuOmhvdmVye2NvbG9yOiNlOGZkZjV9LmhvdmVyLXdhc2hlZC15ZWxsb3c6Zm9jdXMsLmhvdmVyLXdhc2hlZC15ZWxsb3c6aG92ZXJ7Y29sb3I6I2ZmZmNlYn0uaG92ZXItd2FzaGVkLXJlZDpmb2N1cywuaG92ZXItd2FzaGVkLXJlZDpob3Zlcntjb2xvcjojZmZkZmRmfS5ob3Zlci1iZy1kYXJrLXJlZDpmb2N1cywuaG92ZXItYmctZGFyay1yZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZTcwNDBmfS5ob3Zlci1iZy1yZWQ6Zm9jdXMsLmhvdmVyLWJnLXJlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQxMzZ9LmhvdmVyLWJnLWxpZ2h0LXJlZDpmb2N1cywuaG92ZXItYmctbGlnaHQtcmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmNzI1Y30uaG92ZXItYmctb3JhbmdlOmZvY3VzLC5ob3Zlci1iZy1vcmFuZ2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY2MzAwfS5ob3Zlci1iZy1nb2xkOmZvY3VzLC5ob3Zlci1iZy1nb2xkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmYjcwMH0uaG92ZXItYmcteWVsbG93OmZvY3VzLC5ob3Zlci1iZy15ZWxsb3c6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpnb2xkfS5ob3Zlci1iZy1saWdodC15ZWxsb3c6Zm9jdXMsLmhvdmVyLWJnLWxpZ2h0LXllbGxvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmYmYxYTl9LmhvdmVyLWJnLXB1cnBsZTpmb2N1cywuaG92ZXItYmctcHVycGxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzVlMmNhNX0uaG92ZXItYmctbGlnaHQtcHVycGxlOmZvY3VzLC5ob3Zlci1iZy1saWdodC1wdXJwbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTQ2M2YyfS5ob3Zlci1iZy1kYXJrLXBpbms6Zm9jdXMsLmhvdmVyLWJnLWRhcmstcGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkNTAwOGZ9LmhvdmVyLWJnLWhvdC1waW5rOmZvY3VzLC5ob3Zlci1iZy1ob3QtcGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQxYjR9LmhvdmVyLWJnLXBpbms6Zm9jdXMsLmhvdmVyLWJnLXBpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmY4MGNjfS5ob3Zlci1iZy1saWdodC1waW5rOmZvY3VzLC5ob3Zlci1iZy1saWdodC1waW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmYTNkN30uaG92ZXItYmctZGFyay1ncmVlbjpmb2N1cywuaG92ZXItYmctZGFyay1ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMzc3NTJ9LmhvdmVyLWJnLWdyZWVuOmZvY3VzLC5ob3Zlci1iZy1ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxOWE5NzR9LmhvdmVyLWJnLWxpZ2h0LWdyZWVuOmZvY3VzLC5ob3Zlci1iZy1saWdodC1ncmVlbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM5ZWViY2Z9LmhvdmVyLWJnLW5hdnk6Zm9jdXMsLmhvdmVyLWJnLW5hdnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAxYjQ0fS5ob3Zlci1iZy1kYXJrLWJsdWU6Zm9jdXMsLmhvdmVyLWJnLWRhcmstYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDQ0OWV9LmhvdmVyLWJnLWJsdWU6Zm9jdXMsLmhvdmVyLWJnLWJsdWU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzU3ZWRkfS5ob3Zlci1iZy1saWdodC1ibHVlOmZvY3VzLC5ob3Zlci1iZy1saWdodC1ibHVlOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izk2Y2NmZn0uaG92ZXItYmctbGlnaHRlc3QtYmx1ZTpmb2N1cywuaG92ZXItYmctbGlnaHRlc3QtYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjZGVjZmZ9LmhvdmVyLWJnLXdhc2hlZC1ibHVlOmZvY3VzLC5ob3Zlci1iZy13YXNoZWQtYmx1ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNmZmZmV9LmhvdmVyLWJnLXdhc2hlZC1ncmVlbjpmb2N1cywuaG92ZXItYmctd2FzaGVkLWdyZWVuOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZmRmNX0uaG92ZXItYmctd2FzaGVkLXllbGxvdzpmb2N1cywuaG92ZXItYmctd2FzaGVkLXllbGxvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZjZWJ9LmhvdmVyLWJnLXdhc2hlZC1yZWQ6Zm9jdXMsLmhvdmVyLWJnLXdhc2hlZC1yZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkZmRmfS5wYTB7cGFkZGluZzowfS5wYTF7cGFkZGluZzouMjVyZW19LnBhMntwYWRkaW5nOi41cmVtfS5wYTN7cGFkZGluZzoxcmVtfS5wYTR7cGFkZGluZzoycmVtfS5wYTV7cGFkZGluZzo0cmVtfS5wYTZ7cGFkZGluZzo4cmVtfS5wYTd7cGFkZGluZzoxNnJlbX0ucGwwe3BhZGRpbmctbGVmdDowfS5wbDF7cGFkZGluZy1sZWZ0Oi4yNXJlbX0ucGwye3BhZGRpbmctbGVmdDouNXJlbX0ucGwze3BhZGRpbmctbGVmdDoxcmVtfS5wbDR7cGFkZGluZy1sZWZ0OjJyZW19LnBsNXtwYWRkaW5nLWxlZnQ6NHJlbX0ucGw2e3BhZGRpbmctbGVmdDo4cmVtfS5wbDd7cGFkZGluZy1sZWZ0OjE2cmVtfS5wcjB7cGFkZGluZy1yaWdodDowfS5wcjF7cGFkZGluZy1yaWdodDouMjVyZW19LnByMntwYWRkaW5nLXJpZ2h0Oi41cmVtfS5wcjN7cGFkZGluZy1yaWdodDoxcmVtfS5wcjR7cGFkZGluZy1yaWdodDoycmVtfS5wcjV7cGFkZGluZy1yaWdodDo0cmVtfS5wcjZ7cGFkZGluZy1yaWdodDo4cmVtfS5wcjd7cGFkZGluZy1yaWdodDoxNnJlbX0ucGIwe3BhZGRpbmctYm90dG9tOjB9LnBiMXtwYWRkaW5nLWJvdHRvbTouMjVyZW19LnBiMntwYWRkaW5nLWJvdHRvbTouNXJlbX0ucGIze3BhZGRpbmctYm90dG9tOjFyZW19LnBiNHtwYWRkaW5nLWJvdHRvbToycmVtfS5wYjV7cGFkZGluZy1ib3R0b206NHJlbX0ucGI2e3BhZGRpbmctYm90dG9tOjhyZW19LnBiN3twYWRkaW5nLWJvdHRvbToxNnJlbX0ucHQwe3BhZGRpbmctdG9wOjB9LnB0MXtwYWRkaW5nLXRvcDouMjVyZW19LnB0MntwYWRkaW5nLXRvcDouNXJlbX0ucHQze3BhZGRpbmctdG9wOjFyZW19LnB0NHtwYWRkaW5nLXRvcDoycmVtfS5wdDV7cGFkZGluZy10b3A6NHJlbX0ucHQ2e3BhZGRpbmctdG9wOjhyZW19LnB0N3twYWRkaW5nLXRvcDoxNnJlbX0ucHYwe3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0ucHYxe3BhZGRpbmctdG9wOi4yNXJlbTtwYWRkaW5nLWJvdHRvbTouMjVyZW19LnB2MntwYWRkaW5nLXRvcDouNXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbX0ucHYze3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0ucHY0e3BhZGRpbmctdG9wOjJyZW07cGFkZGluZy1ib3R0b206MnJlbX0ucHY1e3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHY2e3BhZGRpbmctdG9wOjhyZW07cGFkZGluZy1ib3R0b206OHJlbX0ucHY3e3BhZGRpbmctdG9wOjE2cmVtO3BhZGRpbmctYm90dG9tOjE2cmVtfS5waDB7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5waDF7cGFkZGluZy1sZWZ0Oi4yNXJlbTtwYWRkaW5nLXJpZ2h0Oi4yNXJlbX0ucGgye3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5waDN7cGFkZGluZy1sZWZ0OjFyZW07cGFkZGluZy1yaWdodDoxcmVtfS5waDR7cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtfS5waDV7cGFkZGluZy1sZWZ0OjRyZW07cGFkZGluZy1yaWdodDo0cmVtfS5waDZ7cGFkZGluZy1sZWZ0OjhyZW07cGFkZGluZy1yaWdodDo4cmVtfS5waDd7cGFkZGluZy1sZWZ0OjE2cmVtO3BhZGRpbmctcmlnaHQ6MTZyZW19Lm1hMHttYXJnaW46MH0ubWExe21hcmdpbjouMjVyZW19Lm1hMnttYXJnaW46LjVyZW19Lm1hM3ttYXJnaW46MXJlbX0ubWE0e21hcmdpbjoycmVtfS5tYTV7bWFyZ2luOjRyZW19Lm1hNnttYXJnaW46OHJlbX0ubWE3e21hcmdpbjoxNnJlbX0ubWwwe21hcmdpbi1sZWZ0OjB9Lm1sMXttYXJnaW4tbGVmdDouMjVyZW19Lm1sMnttYXJnaW4tbGVmdDouNXJlbX0ubWwze21hcmdpbi1sZWZ0OjFyZW19Lm1sNHttYXJnaW4tbGVmdDoycmVtfS5tbDV7bWFyZ2luLWxlZnQ6NHJlbX0ubWw2e21hcmdpbi1sZWZ0OjhyZW19Lm1sN3ttYXJnaW4tbGVmdDoxNnJlbX0ubXIwe21hcmdpbi1yaWdodDowfS5tcjF7bWFyZ2luLXJpZ2h0Oi4yNXJlbX0ubXIye21hcmdpbi1yaWdodDouNXJlbX0ubXIze21hcmdpbi1yaWdodDoxcmVtfS5tcjR7bWFyZ2luLXJpZ2h0OjJyZW19Lm1yNXttYXJnaW4tcmlnaHQ6NHJlbX0ubXI2e21hcmdpbi1yaWdodDo4cmVtfS5tcjd7bWFyZ2luLXJpZ2h0OjE2cmVtfS5tYjB7bWFyZ2luLWJvdHRvbTowfS5tYjF7bWFyZ2luLWJvdHRvbTouMjVyZW19Lm1iMnttYXJnaW4tYm90dG9tOi41cmVtfS5tYjN7bWFyZ2luLWJvdHRvbToxcmVtfS5tYjR7bWFyZ2luLWJvdHRvbToycmVtfS5tYjV7bWFyZ2luLWJvdHRvbTo0cmVtfS5tYjZ7bWFyZ2luLWJvdHRvbTo4cmVtfS5tYjd7bWFyZ2luLWJvdHRvbToxNnJlbX0ubXQwe21hcmdpbi10b3A6MH0ubXQxe21hcmdpbi10b3A6LjI1cmVtfS5tdDJ7bWFyZ2luLXRvcDouNXJlbX0ubXQze21hcmdpbi10b3A6MXJlbX0ubXQ0e21hcmdpbi10b3A6MnJlbX0ubXQ1e21hcmdpbi10b3A6NHJlbX0ubXQ2e21hcmdpbi10b3A6OHJlbX0ubXQ3e21hcmdpbi10b3A6MTZyZW19Lm12MHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5tdjF7bWFyZ2luLXRvcDouMjVyZW07bWFyZ2luLWJvdHRvbTouMjVyZW19Lm12MnttYXJnaW4tdG9wOi41cmVtO21hcmdpbi1ib3R0b206LjVyZW19Lm12M3ttYXJnaW4tdG9wOjFyZW07bWFyZ2luLWJvdHRvbToxcmVtfS5tdjR7bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbX0ubXY1e21hcmdpbi10b3A6NHJlbTttYXJnaW4tYm90dG9tOjRyZW19Lm12NnttYXJnaW4tdG9wOjhyZW07bWFyZ2luLWJvdHRvbTo4cmVtfS5tdjd7bWFyZ2luLXRvcDoxNnJlbTttYXJnaW4tYm90dG9tOjE2cmVtfS5taDB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubWgxe21hcmdpbi1sZWZ0Oi4yNXJlbTttYXJnaW4tcmlnaHQ6LjI1cmVtfS5taDJ7bWFyZ2luLWxlZnQ6LjVyZW07bWFyZ2luLXJpZ2h0Oi41cmVtfS5taDN7bWFyZ2luLWxlZnQ6MXJlbTttYXJnaW4tcmlnaHQ6MXJlbX0ubWg0e21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm1oNXttYXJnaW4tbGVmdDo0cmVtO21hcmdpbi1yaWdodDo0cmVtfS5taDZ7bWFyZ2luLWxlZnQ6OHJlbTttYXJnaW4tcmlnaHQ6OHJlbX0ubWg3e21hcmdpbi1sZWZ0OjE2cmVtO21hcmdpbi1yaWdodDoxNnJlbX0ubmExe21hcmdpbjotLjI1cmVtfS5uYTJ7bWFyZ2luOi0uNXJlbX0ubmEze21hcmdpbjotMXJlbX0ubmE0e21hcmdpbjotMnJlbX0ubmE1e21hcmdpbjotNHJlbX0ubmE2e21hcmdpbjotOHJlbX0ubmE3e21hcmdpbjotMTZyZW19Lm5sMXttYXJnaW4tbGVmdDotLjI1cmVtfS5ubDJ7bWFyZ2luLWxlZnQ6LS41cmVtfS5ubDN7bWFyZ2luLWxlZnQ6LTFyZW19Lm5sNHttYXJnaW4tbGVmdDotMnJlbX0ubmw1e21hcmdpbi1sZWZ0Oi00cmVtfS5ubDZ7bWFyZ2luLWxlZnQ6LThyZW19Lm5sN3ttYXJnaW4tbGVmdDotMTZyZW19Lm5yMXttYXJnaW4tcmlnaHQ6LS4yNXJlbX0ubnIye21hcmdpbi1yaWdodDotLjVyZW19Lm5yM3ttYXJnaW4tcmlnaHQ6LTFyZW19Lm5yNHttYXJnaW4tcmlnaHQ6LTJyZW19Lm5yNXttYXJnaW4tcmlnaHQ6LTRyZW19Lm5yNnttYXJnaW4tcmlnaHQ6LThyZW19Lm5yN3ttYXJnaW4tcmlnaHQ6LTE2cmVtfS5uYjF7bWFyZ2luLWJvdHRvbTotLjI1cmVtfS5uYjJ7bWFyZ2luLWJvdHRvbTotLjVyZW19Lm5iM3ttYXJnaW4tYm90dG9tOi0xcmVtfS5uYjR7bWFyZ2luLWJvdHRvbTotMnJlbX0ubmI1e21hcmdpbi1ib3R0b206LTRyZW19Lm5iNnttYXJnaW4tYm90dG9tOi04cmVtfS5uYjd7bWFyZ2luLWJvdHRvbTotMTZyZW19Lm50MXttYXJnaW4tdG9wOi0uMjVyZW19Lm50MnttYXJnaW4tdG9wOi0uNXJlbX0ubnQze21hcmdpbi10b3A6LTFyZW19Lm50NHttYXJnaW4tdG9wOi0ycmVtfS5udDV7bWFyZ2luLXRvcDotNHJlbX0ubnQ2e21hcmdpbi10b3A6LThyZW19Lm50N3ttYXJnaW4tdG9wOi0xNnJlbX0uY29sbGFwc2V7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9LnN0cmlwZWQtLWxpZ2h0LXNpbHZlcjpudGgtY2hpbGQob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOiNhYWF9LnN0cmlwZWQtLW1vb24tZ3JheTpudGgtY2hpbGQob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9LnN0cmlwZWQtLWxpZ2h0LWdyYXk6bnRoLWNoaWxkKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5zdHJpcGVkLS1uZWFyLXdoaXRlOm50aC1jaGlsZChvZGQpe2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNH0uc3RyaXBlLWxpZ2h0Om50aC1jaGlsZChvZGQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5zdHJpcGUtZGFyazpudGgtY2hpbGQob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5zdHJpa2V7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaH0udW5kZXJsaW5le3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Lm5vLXVuZGVybGluZXt0ZXh0LWRlY29yYXRpb246bm9uZX0udGx7dGV4dC1hbGlnbjpsZWZ0fS50cnt0ZXh0LWFsaWduOnJpZ2h0fS50Y3t0ZXh0LWFsaWduOmNlbnRlcn0udHRje3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LnR0bHt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2V9LnR0dXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnR0bnt0ZXh0LXRyYW5zZm9ybTpub25lfS5mLTYsLmYtaGVhZGxpbmV7Zm9udC1zaXplOjZyZW19LmYtNSwuZi1zdWJoZWFkbGluZXtmb250LXNpemU6NXJlbX0uZjF7Zm9udC1zaXplOjNyZW19LmYye2ZvbnQtc2l6ZToyLjI1cmVtfS5mM3tmb250LXNpemU6MS41cmVtfS5mNHtmb250LXNpemU6MS4yNXJlbX0uZjV7Zm9udC1zaXplOjFyZW19LmY2e2ZvbnQtc2l6ZTouODc1cmVtfS5tZWFzdXJle21heC13aWR0aDozMGVtfS5tZWFzdXJlLXdpZGV7bWF4LXdpZHRoOjM0ZW19Lm1lYXN1cmUtbmFycm93e21heC13aWR0aDoyMGVtfS5pbmRlbnR7dGV4dC1pbmRlbnQ6MWVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNtYWxsLWNhcHN7Zm9udC12YXJpYW50OnNtYWxsLWNhcHN9LnRydW5jYXRle3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30ub3ZlcmZsb3ctY29udGFpbmVye292ZXJmbG93LXk6c2Nyb2xsfS5jZW50ZXJ7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0b30uY2xpcHtwb3NpdGlvbjpmaXhlZCFpbXBvcnRhbnQ7X3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtjbGlwOnJlY3QoMXB4IDFweCAxcHggMXB4KTtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX0ud3Mtbm9ybWFse3doaXRlLXNwYWNlOm5vcm1hbH0ubm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0ucHJle3doaXRlLXNwYWNlOnByZX0udi1iYXNle3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS52LW1pZHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnYtdG9we3ZlcnRpY2FsLWFsaWduOnRvcH0udi1idG17dmVydGljYWwtYWxpZ246Ym90dG9tfS5kaW17b3BhY2l0eToxfS5kaW0sLmRpbTpmb2N1cywuZGltOmhvdmVyey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlLWlufS5kaW06Zm9jdXMsLmRpbTpob3ZlcntvcGFjaXR5Oi41fS5kaW06YWN0aXZle29wYWNpdHk6Ljg7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlLW91dDt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlLW91dH0uZ2xvdywuZ2xvdzpmb2N1cywuZ2xvdzpob3Zlcnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZS1pbn0uZ2xvdzpmb2N1cywuZ2xvdzpob3ZlcntvcGFjaXR5OjF9LmhpZGUtY2hpbGQgLmNoaWxke29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZS1pbn0uaGlkZS1jaGlsZDphY3RpdmUgLmNoaWxkLC5oaWRlLWNoaWxkOmZvY3VzIC5jaGlsZCwuaGlkZS1jaGlsZDpob3ZlciAuY2hpbGR7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlLWlufS51bmRlcmxpbmUtaG92ZXI6Zm9jdXMsLnVuZGVybGluZS1ob3Zlcjpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5ncm93ey1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZS1vdXQ7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2Utb3V0fS5ncm93OmZvY3VzLC5ncm93OmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0uZ3JvdzphY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjkpO3RyYW5zZm9ybTpzY2FsZSguOSl9Lmdyb3ctbGFyZ2V7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXR9Lmdyb3ctbGFyZ2U6Zm9jdXMsLmdyb3ctbGFyZ2U6aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yKTt0cmFuc2Zvcm06c2NhbGUoMS4yKX0uZ3Jvdy1sYXJnZTphY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0ucG9pbnRlcjpob3Zlciwuc2hhZG93LWhvdmVye2N1cnNvcjpwb2ludGVyfS5zaGFkb3ctaG92ZXJ7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgY3ViaWMtYmV6aWVyKC4xNjUsLjg0LC40NCwxKTt0cmFuc2l0aW9uOmFsbCAuNXMgY3ViaWMtYmV6aWVyKC4xNjUsLjg0LC40NCwxKX0uc2hhZG93LWhvdmVyOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7Ym94LXNoYWRvdzowIDAgMTZweCAycHggcmdiYSgwLDAsMCwuMik7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6LTE7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjVzIGN1YmljLWJlemllciguMTY1LC44NCwuNDQsMSk7dHJhbnNpdGlvbjpvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoLjE2NSwuODQsLjQ0LDEpfS5zaGFkb3ctaG92ZXI6Zm9jdXM6YWZ0ZXIsLnNoYWRvdy1ob3Zlcjpob3ZlcjphZnRlcntvcGFjaXR5OjF9LmJnLWFuaW1hdGUsLmJnLWFuaW1hdGU6Zm9jdXMsLmJnLWFuaW1hdGU6aG92ZXJ7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dH0uei0we3otaW5kZXg6MH0uei0xe3otaW5kZXg6MX0uei0ye3otaW5kZXg6Mn0uei0ze3otaW5kZXg6M30uei00e3otaW5kZXg6NH0uei01e3otaW5kZXg6NX0uei05OTl7ei1pbmRleDo5OTl9LnotOTk5OXt6LWluZGV4Ojk5OTl9LnotbWF4e3otaW5kZXg6MjE0NzQ4MzY0N30uei1pbmhlcml0e3otaW5kZXg6aW5oZXJpdH0uei1pbml0aWFse3otaW5kZXg6YXV0b30uei11bnNldHt6LWluZGV4OnVuc2V0fS5uZXN0ZWQtY29weS1saW5lLWhlaWdodCBvbCwubmVzdGVkLWNvcHktbGluZS1oZWlnaHQgcCwubmVzdGVkLWNvcHktbGluZS1oZWlnaHQgdWx7bGluZS1oZWlnaHQ6MS41fS5uZXN0ZWQtaGVhZGxpbmUtbGluZS1oZWlnaHQgaDEsLm5lc3RlZC1oZWFkbGluZS1saW5lLWhlaWdodCBoMiwubmVzdGVkLWhlYWRsaW5lLWxpbmUtaGVpZ2h0IGgzLC5uZXN0ZWQtaGVhZGxpbmUtbGluZS1oZWlnaHQgaDQsLm5lc3RlZC1oZWFkbGluZS1saW5lLWhlaWdodCBoNSwubmVzdGVkLWhlYWRsaW5lLWxpbmUtaGVpZ2h0IGg2e2xpbmUtaGVpZ2h0OjEuMjV9Lm5lc3RlZC1saXN0LXJlc2V0IG9sLC5uZXN0ZWQtbGlzdC1yZXNldCB1bHtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tbGVmdDowO2xpc3Qtc3R5bGUtdHlwZTpub25lfS5uZXN0ZWQtY29weS1pbmRlbnQgcCtwe3RleHQtaW5kZW50OjFlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5uZXN0ZWQtY29weS1zZXBlcmF0b3IgcCtwe21hcmdpbi10b3A6MS41ZW19Lm5lc3RlZC1pbWcgaW1ne3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7ZGlzcGxheTpibG9ja30ubmVzdGVkLWxpbmtzIGF7Y29sb3I6IzM1N2VkZDstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWlufS5uZXN0ZWQtbGlua3MgYTpmb2N1cywubmVzdGVkLWxpbmtzIGE6aG92ZXJ7Y29sb3I6Izk2Y2NmZjstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWluO3RyYW5zaXRpb246Y29sb3IgLjE1cyBlYXNlLWlufS5kZWJ1ZyAqe291dGxpbmU6MXB4IHNvbGlkIGdvbGR9LmRlYnVnLXdoaXRlICp7b3V0bGluZToxcHggc29saWQgI2ZmZn0uZGVidWctYmxhY2sgKntvdXRsaW5lOjFweCBzb2xpZCAjMDAwfS5kZWJ1Zy1ncmlke2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRFeElEYzVMakUxT0RNeU5Td2dNakF4TlM4d09TOHhNQzB3TVRveE1Eb3lNQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVRSRE9UWTROMFUyTjBWRk1URkZOamcyTXpaRFFqa3dOa1E0TWpnd01FSWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVFJET1RZNE4wUTJOMFZGTVRGRk5qZzJNelpEUWprd05rUTRNamd3TUVJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFVnS0UxaFkybHVkRzl6YUNraVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzNOamN5UWtRM05qWTNRelV4TVVVMlFqSkNRMFV5TkRBNE1UQXdNakUzTVNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM05qY3lRa1EzTnpZM1F6VXhNVVUyUWpKQ1EwVXlOREE0TVRBd01qRTNNU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHNCUytHTUFBQUFqU1VSQlZIamFZdnovL3o4RExzRDRnY0dYaVlFQUdCSUtHQm5lLy9mRnB3QWd3QUI5OEFhRjJwamxVUUFBQUFCSlJVNUVya0pnZ2c9PSkgcmVwZWF0IDAgMH0uZGVidWctZ3JpZC0xNntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1URXhJRGM1TGpFMU9ETXlOU3dnTWpBeE5TOHdPUzh4TUMwd01Ub3hNRG95TUNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9EWXlSamhFUkRVMk4wWXlNVEZGTmpnMk16WkRRamt3TmtRNE1qZ3dNRUlpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0RZeVJqaEVSRFEyTjBZeU1URkZOamcyTXpaRFFqa3dOa1E0TWpnd01FSWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tFMWhZMmx1ZEc5emFDa2lQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8zTmpjeVFrUTNRVFkzUXpVeE1VVTJRakpDUTBVeU5EQTRNVEF3TWpFM01TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzNOamN5UWtRM1FqWTNRelV4TVVVMlFqSkNRMFV5TkRBNE1UQXdNakUzTVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1B2Q1MwMUlBQUFCTVNVUkJWSGphWW1SNC81K0JGUEJmQU1GbS9NQmd4OFJBR1dDbjFBQW1TZzM0UTZrQkRLTUdNREN3SUNlTUllbUYvNVFhd0VpcEFXd1Vod0VqTUR2YkFXbFdrdlZCd3U4dlFJQUJBRXdCQ3BoOFU2YzBBQUFBQUVsRlRrU3VRbUNDKSByZXBlYXQgMCAwfS5kZWJ1Zy1ncmlkLTgtc29saWR7YmFja2dyb3VuZDojZmZmIHVybChkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBQUFBRC80UU14YUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpZdFl6RXhNU0EzT1M0eE5UZ3pNalVzSURJd01UVXZNRGt2TVRBdE1ERTZNVEE2TWpBZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoTllXTnBiblJ2YzJncElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rSXhNakkwT1Rjek5qZENNekV4UlRaQ01rSkRSVEkwTURneE1EQXlNVGN4SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tJeE1qSTBPVGMwTmpkQ016RXhSVFpDTWtKRFJUSTBNRGd4TURBeU1UY3hJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UWpFeU1qUTVOekUyTjBJek1URkZOa0l5UWtORk1qUXdPREV3TURJeE56RWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZRakV5TWpRNU56STJOMEl6TVRGRk5rSXlRa05GTWpRd09ERXdNREl4TnpFaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6Ny83Z0FPUVdSdlltVUFaTUFBQUFBQi85c0FoQUFiR2hvcEhTbEJKaVpCUWk4dkwwSkhQejQrUDBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIQVIwcEtUUW1ORDhvS0Q5SFB6VS9SMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBkSFIwZEhSMGRIUjBmL3dBQVJDQUFJQUFnREFTSUFBaEVCQXhFQi84UUFXUUFCQVFBQUFBQUFBQUFBQUFBQUFBQUFBQVlCQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUlFRUFFQkFBTUJBQUFBQUFBQUFBQUFBQUFCQURFQ0EwRVJBQUVEQlFBQUFBQUFBQUFBQUFBQUFBQVJJVEZCVVdFU0l2L2FBQXdEQVFBQ0VRTVJBRDhBb09uVFYxUVREN0pKc2hQM3ZTTTNQLy9aKSByZXBlYXQgMCAwfS5kZWJ1Zy1ncmlkLTE2LXNvbGlke2JhY2tncm91bmQ6I2ZmZiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FJQUFBQ1FrV2cyQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5aHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVEV4SURjNUxqRTFPRE15TlN3Z01qQXhOUzh3T1M4eE1DMHdNVG94TURveU1DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tFMWhZMmx1ZEc5emFDa2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOelkzTWtKRU4wVTJOME0xTVRGRk5rSXlRa05GTWpRd09ERXdNREl4TnpFaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk56WTNNa0pFTjBZMk4wTTFNVEZGTmtJeVFrTkZNalF3T0RFd01ESXhOekVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvM05qY3lRa1EzUXpZM1F6VXhNVVUyUWpKQ1EwVXlOREE0TVRBd01qRTNNU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8zTmpjeVFrUTNSRFkzUXpVeE1VVTJRakpDUTBVeU5EQTRNVEF3TWpFM01TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QdmU2SjNrQUFBQXpTVVJCVkhqYVl2ei8vejhEMFVEc013TWpTUm9ZUDVHcTRTUE5iUmpWTUVRMWZDUkRnK2luLzYrSjFBSlV4c2dBRUdBQTMxQkFKTVMwR1lFQUFBQUFTVVZPUks1Q1lJST0pIHJlcGVhdCAwIDB9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMGVtKXsuYXNwZWN0LXJhdGlvLW5ze2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlfS5hc3BlY3QtcmF0aW8tLTE2eDktbnN7cGFkZGluZy1ib3R0b206NTYuMjUlfS5hc3BlY3QtcmF0aW8tLTl4MTYtbnN7cGFkZGluZy1ib3R0b206MTc3Ljc3JX0uYXNwZWN0LXJhdGlvLS00eDMtbnN7cGFkZGluZy1ib3R0b206NzUlfS5hc3BlY3QtcmF0aW8tLTN4NC1uc3twYWRkaW5nLWJvdHRvbToxMzMuMzMlfS5hc3BlY3QtcmF0aW8tLTZ4NC1uc3twYWRkaW5nLWJvdHRvbTo2Ni42JX0uYXNwZWN0LXJhdGlvLS00eDYtbnN7cGFkZGluZy1ib3R0b206MTUwJX0uYXNwZWN0LXJhdGlvLS04eDUtbnN7cGFkZGluZy1ib3R0b206NjIuNSV9LmFzcGVjdC1yYXRpby0tNXg4LW5ze3BhZGRpbmctYm90dG9tOjE2MCV9LmFzcGVjdC1yYXRpby0tN3g1LW5ze3BhZGRpbmctYm90dG9tOjcxLjQyJX0uYXNwZWN0LXJhdGlvLS01eDctbnN7cGFkZGluZy1ib3R0b206MTQwJX0uYXNwZWN0LXJhdGlvLS0xeDEtbnN7cGFkZGluZy1ib3R0b206MTAwJX0uYXNwZWN0LXJhdGlvLS1vYmplY3QtbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMH0uY292ZXItbnN7YmFja2dyb3VuZC1zaXplOmNvdmVyIWltcG9ydGFudH0uY29udGFpbi1uc3tiYWNrZ3JvdW5kLXNpemU6Y29udGFpbiFpbXBvcnRhbnR9LmJnLWNlbnRlci1uc3tiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJX0uYmctY2VudGVyLW5zLC5iZy10b3AtbnN7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5iZy10b3AtbnN7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3B9LmJnLXJpZ2h0LW5ze2JhY2tncm91bmQtcG9zaXRpb246MTAwJX0uYmctYm90dG9tLW5zLC5iZy1yaWdodC1uc3tiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LmJnLWJvdHRvbS1uc3tiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbX0uYmctbGVmdC1uc3tiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjowfS5vdXRsaW5lLW5ze291dGxpbmU6MXB4IHNvbGlkfS5vdXRsaW5lLXRyYW5zcGFyZW50LW5ze291dGxpbmU6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5vdXRsaW5lLTAtbnN7b3V0bGluZTowfS5iYS1uc3tib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweH0uYnQtbnN7Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYnItbnN7Ym9yZGVyLXJpZ2h0LXN0eWxlOnNvbGlkO2JvcmRlci1yaWdodC13aWR0aDoxcHh9LmJiLW5ze2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJsLW5ze2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm4tbnN7Ym9yZGVyLXN0eWxlOm5vbmU7Ym9yZGVyLXdpZHRoOjB9LmJyMC1uc3tib3JkZXItcmFkaXVzOjB9LmJyMS1uc3tib3JkZXItcmFkaXVzOi4xMjVyZW19LmJyMi1uc3tib3JkZXItcmFkaXVzOi4yNXJlbX0uYnIzLW5ze2JvcmRlci1yYWRpdXM6LjVyZW19LmJyNC1uc3tib3JkZXItcmFkaXVzOjFyZW19LmJyLTEwMC1uc3tib3JkZXItcmFkaXVzOjEwMCV9LmJyLXBpbGwtbnN7Ym9yZGVyLXJhZGl1czo5OTk5cHh9LmJyLS1ib3R0b20tbnN7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LmJyLS10b3AtbnN7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uYnItLXJpZ2h0LW5zLC5ici0tdG9wLW5ze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uYnItLXJpZ2h0LW5ze2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uYnItLWxlZnQtbnN7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5iLS1kb3R0ZWQtbnN7Ym9yZGVyLXN0eWxlOmRvdHRlZH0uYi0tZGFzaGVkLW5ze2JvcmRlci1zdHlsZTpkYXNoZWR9LmItLXNvbGlkLW5ze2JvcmRlci1zdHlsZTpzb2xpZH0uYi0tbm9uZS1uc3tib3JkZXItc3R5bGU6bm9uZX0uYncwLW5ze2JvcmRlci13aWR0aDowfS5idzEtbnN7Ym9yZGVyLXdpZHRoOi4xMjVyZW19LmJ3Mi1uc3tib3JkZXItd2lkdGg6LjI1cmVtfS5idzMtbnN7Ym9yZGVyLXdpZHRoOi41cmVtfS5idzQtbnN7Ym9yZGVyLXdpZHRoOjFyZW19LmJ3NS1uc3tib3JkZXItd2lkdGg6MnJlbX0uYnQtMC1uc3tib3JkZXItdG9wLXdpZHRoOjB9LmJyLTAtbnN7Ym9yZGVyLXJpZ2h0LXdpZHRoOjB9LmJiLTAtbnN7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5ibC0wLW5ze2JvcmRlci1sZWZ0LXdpZHRoOjB9LnNoYWRvdy0xLW5ze2JveC1zaGFkb3c6MCAwIDRweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0yLW5ze2JveC1zaGFkb3c6MCAwIDhweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0zLW5ze2JveC1zaGFkb3c6MnB4IDJweCA0cHggMnB4IHJnYmEoMCwwLDAsLjIpfS5zaGFkb3ctNC1uc3tib3gtc2hhZG93OjJweCAycHggOHB4IDAgcmdiYSgwLDAsMCwuMil9LnNoYWRvdy01LW5ze2JveC1zaGFkb3c6NHB4IDRweCA4cHggMCByZ2JhKDAsMCwwLC4yKX0udG9wLTAtbnN7dG9wOjB9LmxlZnQtMC1uc3tsZWZ0OjB9LnJpZ2h0LTAtbnN7cmlnaHQ6MH0uYm90dG9tLTAtbnN7Ym90dG9tOjB9LnRvcC0xLW5ze3RvcDoxcmVtfS5sZWZ0LTEtbnN7bGVmdDoxcmVtfS5yaWdodC0xLW5ze3JpZ2h0OjFyZW19LmJvdHRvbS0xLW5ze2JvdHRvbToxcmVtfS50b3AtMi1uc3t0b3A6MnJlbX0ubGVmdC0yLW5ze2xlZnQ6MnJlbX0ucmlnaHQtMi1uc3tyaWdodDoycmVtfS5ib3R0b20tMi1uc3tib3R0b206MnJlbX0udG9wLS0xLW5ze3RvcDotMXJlbX0ucmlnaHQtLTEtbnN7cmlnaHQ6LTFyZW19LmJvdHRvbS0tMS1uc3tib3R0b206LTFyZW19LmxlZnQtLTEtbnN7bGVmdDotMXJlbX0udG9wLS0yLW5ze3RvcDotMnJlbX0ucmlnaHQtLTItbnN7cmlnaHQ6LTJyZW19LmJvdHRvbS0tMi1uc3tib3R0b206LTJyZW19LmxlZnQtLTItbnN7bGVmdDotMnJlbX0uYWJzb2x1dGUtLWZpbGwtbnN7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LmNsLW5ze2NsZWFyOmxlZnR9LmNyLW5ze2NsZWFyOnJpZ2h0fS5jYi1uc3tjbGVhcjpib3RofS5jbi1uc3tjbGVhcjpub25lfS5kbi1uc3tkaXNwbGF5Om5vbmV9LmRpLW5ze2Rpc3BsYXk6aW5saW5lfS5kYi1uc3tkaXNwbGF5OmJsb2NrfS5kaWItbnN7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmRpdC1uc3tkaXNwbGF5OmlubGluZS10YWJsZX0uZHQtbnN7ZGlzcGxheTp0YWJsZX0uZHRjLW5ze2Rpc3BsYXk6dGFibGUtY2VsbH0uZHQtcm93LW5ze2Rpc3BsYXk6dGFibGUtcm93fS5kdC1yb3ctZ3JvdXAtbnN7ZGlzcGxheTp0YWJsZS1yb3ctZ3JvdXB9LmR0LWNvbHVtbi1uc3tkaXNwbGF5OnRhYmxlLWNvbHVtbn0uZHQtY29sdW1uLWdyb3VwLW5ze2Rpc3BsYXk6dGFibGUtY29sdW1uLWdyb3VwfS5kdC0tZml4ZWQtbnN7dGFibGUtbGF5b3V0OmZpeGVkO3dpZHRoOjEwMCV9LmZsZXgtbnN7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uaW5saW5lLWZsZXgtbnN7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleH0uZmxleC1hdXRvLW5zey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MH0uZmxleC1ub25lLW5zey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uZmxleC1jb2x1bW4tbnN7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmZsZXgtcm93LW5zey13ZWJraXQtYm94LW9yaWVudDpob3Jpem9udGFsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9LmZsZXgtd3JhcC1uc3stbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9Lml0ZW1zLXN0YXJ0LW5zey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZC1uc3std2Via2l0LWJveC1hbGlnbjplbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5pdGVtcy1jZW50ZXItbnN7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lml0ZW1zLWJhc2VsaW5lLW5zey13ZWJraXQtYm94LWFsaWduOmJhc2VsaW5lOy1tcy1mbGV4LWFsaWduOmJhc2VsaW5lO2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoLW5zey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofS5zZWxmLXN0YXJ0LW5zey1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5zZWxmLWVuZC1uc3stbXMtZmxleC1pdGVtLWFsaWduOmVuZDthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlci1uc3stbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjstbXMtZ3JpZC1yb3ctYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5lLW5zey1tcy1mbGV4LWl0ZW0tYWxpZ246YmFzZWxpbmU7YWxpZ24tc2VsZjpiYXNlbGluZX0uc2VsZi1zdHJldGNoLW5zey1tcy1mbGV4LWl0ZW0tYWxpZ246c3RyZXRjaDstbXMtZ3JpZC1yb3ctYWxpZ246c3RyZXRjaDthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnQtbnN7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZC1uc3std2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Lmp1c3RpZnktY2VudGVyLW5zey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2Vlbi1uc3std2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZC1uc3stbXMtZmxleC1wYWNrOmRpc3RyaWJ1dGU7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH0uY29udGVudC1zdGFydC1uc3stbXMtZmxleC1saW5lLXBhY2s6c3RhcnQ7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS5jb250ZW50LWVuZC1uc3stbXMtZmxleC1saW5lLXBhY2s6ZW5kO2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVyLW5zey1tcy1mbGV4LWxpbmUtcGFjazpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXJ9LmNvbnRlbnQtYmV0d2Vlbi1uc3stbXMtZmxleC1saW5lLXBhY2s6anVzdGlmeTthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5kLW5zey1tcy1mbGV4LWxpbmUtcGFjazpkaXN0cmlidXRlO2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2gtbnN7LW1zLWZsZXgtbGluZS1wYWNrOnN0cmV0Y2g7YWxpZ24tY29udGVudDpzdHJldGNofS5vcmRlci0wLW5zey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTstbXMtZmxleC1vcmRlcjowO29yZGVyOjB9Lm9yZGVyLTEtbnN7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ub3JkZXItMi1uc3std2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjM7LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyfS5vcmRlci0zLW5zey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NDstbXMtZmxleC1vcmRlcjozO29yZGVyOjN9Lm9yZGVyLTQtbnN7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo1Oy1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NH0ub3JkZXItNS1uc3std2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjY7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1fS5vcmRlci02LW5zey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NzstbXMtZmxleC1vcmRlcjo2O29yZGVyOjZ9Lm9yZGVyLTctbnN7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo4Oy1tcy1mbGV4LW9yZGVyOjc7b3JkZXI6N30ub3JkZXItOC1uc3std2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjk7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4fS5vcmRlci1sYXN0LW5zey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTAwMDAwOy1tcy1mbGV4LW9yZGVyOjk5OTk5O29yZGVyOjk5OTk5fS5mbC1uc3tmbG9hdDpsZWZ0fS5mbC1ucywuZnItbnN7ZGlzcGxheTppbmxpbmV9LmZyLW5ze2Zsb2F0OnJpZ2h0fS5mbi1uc3tmbG9hdDpub25lfS5pLW5ze2ZvbnQtc3R5bGU6aXRhbGljfS5mcy1ub3JtYWwtbnN7Zm9udC1zdHlsZTpub3JtYWx9Lm5vcm1hbC1uc3tmb250LXdlaWdodDo0MDB9LmItbnN7Zm9udC13ZWlnaHQ6NzAwfS5mdzEtbnN7Zm9udC13ZWlnaHQ6MTAwfS5mdzItbnN7Zm9udC13ZWlnaHQ6MjAwfS5mdzMtbnN7Zm9udC13ZWlnaHQ6MzAwfS5mdzQtbnN7Zm9udC13ZWlnaHQ6NDAwfS5mdzUtbnN7Zm9udC13ZWlnaHQ6NTAwfS5mdzYtbnN7Zm9udC13ZWlnaHQ6NjAwfS5mdzctbnN7Zm9udC13ZWlnaHQ6NzAwfS5mdzgtbnN7Zm9udC13ZWlnaHQ6ODAwfS5mdzktbnN7Zm9udC13ZWlnaHQ6OTAwfS5oMS1uc3toZWlnaHQ6MXJlbX0uaDItbnN7aGVpZ2h0OjJyZW19LmgzLW5ze2hlaWdodDo0cmVtfS5oNC1uc3toZWlnaHQ6OHJlbX0uaDUtbnN7aGVpZ2h0OjE2cmVtfS5oLTI1LW5ze2hlaWdodDoyNSV9LmgtNTAtbnN7aGVpZ2h0OjUwJX0uaC03NS1uc3toZWlnaHQ6NzUlfS5oLTEwMC1uc3toZWlnaHQ6MTAwJX0ubWluLWgtMTAwLW5ze21pbi1oZWlnaHQ6MTAwJX0udmgtMjUtbnN7aGVpZ2h0OjI1dmh9LnZoLTUwLW5ze2hlaWdodDo1MHZofS52aC03NS1uc3toZWlnaHQ6NzV2aH0udmgtMTAwLW5ze2hlaWdodDoxMDB2aH0ubWluLXZoLTEwMC1uc3ttaW4taGVpZ2h0OjEwMHZofS5oLWF1dG8tbnN7aGVpZ2h0OmF1dG99LmgtaW5oZXJpdC1uc3toZWlnaHQ6aW5oZXJpdH0udHJhY2tlZC1uc3tsZXR0ZXItc3BhY2luZzouMWVtfS50cmFja2VkLXRpZ2h0LW5ze2xldHRlci1zcGFjaW5nOi0uMDVlbX0udHJhY2tlZC1tZWdhLW5ze2xldHRlci1zcGFjaW5nOi4yNWVtfS5saC1zb2xpZC1uc3tsaW5lLWhlaWdodDoxfS5saC10aXRsZS1uc3tsaW5lLWhlaWdodDoxLjI1fS5saC1jb3B5LW5ze2xpbmUtaGVpZ2h0OjEuNX0ubXctMTAwLW5ze21heC13aWR0aDoxMDAlfS5tdzEtbnN7bWF4LXdpZHRoOjFyZW19Lm13Mi1uc3ttYXgtd2lkdGg6MnJlbX0ubXczLW5ze21heC13aWR0aDo0cmVtfS5tdzQtbnN7bWF4LXdpZHRoOjhyZW19Lm13NS1uc3ttYXgtd2lkdGg6MTZyZW19Lm13Ni1uc3ttYXgtd2lkdGg6MzJyZW19Lm13Ny1uc3ttYXgtd2lkdGg6NDhyZW19Lm13OC1uc3ttYXgtd2lkdGg6NjRyZW19Lm13OS1uc3ttYXgtd2lkdGg6OTZyZW19Lm13LW5vbmUtbnN7bWF4LXdpZHRoOm5vbmV9LncxLW5ze3dpZHRoOjFyZW19LncyLW5ze3dpZHRoOjJyZW19LnczLW5ze3dpZHRoOjRyZW19Lnc0LW5ze3dpZHRoOjhyZW19Lnc1LW5ze3dpZHRoOjE2cmVtfS53LTEwLW5ze3dpZHRoOjEwJX0udy0yMC1uc3t3aWR0aDoyMCV9LnctMjUtbnN7d2lkdGg6MjUlfS53LTMwLW5ze3dpZHRoOjMwJX0udy0zMy1uc3t3aWR0aDozMyV9LnctMzQtbnN7d2lkdGg6MzQlfS53LTQwLW5ze3dpZHRoOjQwJX0udy01MC1uc3t3aWR0aDo1MCV9LnctNjAtbnN7d2lkdGg6NjAlfS53LTcwLW5ze3dpZHRoOjcwJX0udy03NS1uc3t3aWR0aDo3NSV9LnctODAtbnN7d2lkdGg6ODAlfS53LTkwLW5ze3dpZHRoOjkwJX0udy0xMDAtbnN7d2lkdGg6MTAwJX0udy10aGlyZC1uc3t3aWR0aDozMy4zMzMzMyV9LnctdHdvLXRoaXJkcy1uc3t3aWR0aDo2Ni42NjY2NyV9LnctYXV0by1uc3t3aWR0aDphdXRvfS5vdmVyZmxvdy12aXNpYmxlLW5ze292ZXJmbG93OnZpc2libGV9Lm92ZXJmbG93LWhpZGRlbi1uc3tvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbC1uc3tvdmVyZmxvdzpzY3JvbGx9Lm92ZXJmbG93LWF1dG8tbnN7b3ZlcmZsb3c6YXV0b30ub3ZlcmZsb3cteC12aXNpYmxlLW5ze292ZXJmbG93LXg6dmlzaWJsZX0ub3ZlcmZsb3cteC1oaWRkZW4tbnN7b3ZlcmZsb3cteDpoaWRkZW59Lm92ZXJmbG93LXgtc2Nyb2xsLW5ze292ZXJmbG93LXg6c2Nyb2xsfS5vdmVyZmxvdy14LWF1dG8tbnN7b3ZlcmZsb3cteDphdXRvfS5vdmVyZmxvdy15LXZpc2libGUtbnN7b3ZlcmZsb3cteTp2aXNpYmxlfS5vdmVyZmxvdy15LWhpZGRlbi1uc3tvdmVyZmxvdy15OmhpZGRlbn0ub3ZlcmZsb3cteS1zY3JvbGwtbnN7b3ZlcmZsb3cteTpzY3JvbGx9Lm92ZXJmbG93LXktYXV0by1uc3tvdmVyZmxvdy15OmF1dG99LnN0YXRpYy1uc3twb3NpdGlvbjpzdGF0aWN9LnJlbGF0aXZlLW5ze3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZS1uc3twb3NpdGlvbjphYnNvbHV0ZX0uZml4ZWQtbnN7cG9zaXRpb246Zml4ZWR9LnJvdGF0ZS00NS1uc3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5yb3RhdGUtOTAtbnN7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ucm90YXRlLTEzNS1uc3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9LnJvdGF0ZS0xODAtbnN7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5yb3RhdGUtMjI1LW5zey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKX0ucm90YXRlLTI3MC1uc3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LnJvdGF0ZS0zMTUtbnN7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpfS5wYTAtbnN7cGFkZGluZzowfS5wYTEtbnN7cGFkZGluZzouMjVyZW19LnBhMi1uc3twYWRkaW5nOi41cmVtfS5wYTMtbnN7cGFkZGluZzoxcmVtfS5wYTQtbnN7cGFkZGluZzoycmVtfS5wYTUtbnN7cGFkZGluZzo0cmVtfS5wYTYtbnN7cGFkZGluZzo4cmVtfS5wYTctbnN7cGFkZGluZzoxNnJlbX0ucGwwLW5ze3BhZGRpbmctbGVmdDowfS5wbDEtbnN7cGFkZGluZy1sZWZ0Oi4yNXJlbX0ucGwyLW5ze3BhZGRpbmctbGVmdDouNXJlbX0ucGwzLW5ze3BhZGRpbmctbGVmdDoxcmVtfS5wbDQtbnN7cGFkZGluZy1sZWZ0OjJyZW19LnBsNS1uc3twYWRkaW5nLWxlZnQ6NHJlbX0ucGw2LW5ze3BhZGRpbmctbGVmdDo4cmVtfS5wbDctbnN7cGFkZGluZy1sZWZ0OjE2cmVtfS5wcjAtbnN7cGFkZGluZy1yaWdodDowfS5wcjEtbnN7cGFkZGluZy1yaWdodDouMjVyZW19LnByMi1uc3twYWRkaW5nLXJpZ2h0Oi41cmVtfS5wcjMtbnN7cGFkZGluZy1yaWdodDoxcmVtfS5wcjQtbnN7cGFkZGluZy1yaWdodDoycmVtfS5wcjUtbnN7cGFkZGluZy1yaWdodDo0cmVtfS5wcjYtbnN7cGFkZGluZy1yaWdodDo4cmVtfS5wcjctbnN7cGFkZGluZy1yaWdodDoxNnJlbX0ucGIwLW5ze3BhZGRpbmctYm90dG9tOjB9LnBiMS1uc3twYWRkaW5nLWJvdHRvbTouMjVyZW19LnBiMi1uc3twYWRkaW5nLWJvdHRvbTouNXJlbX0ucGIzLW5ze3BhZGRpbmctYm90dG9tOjFyZW19LnBiNC1uc3twYWRkaW5nLWJvdHRvbToycmVtfS5wYjUtbnN7cGFkZGluZy1ib3R0b206NHJlbX0ucGI2LW5ze3BhZGRpbmctYm90dG9tOjhyZW19LnBiNy1uc3twYWRkaW5nLWJvdHRvbToxNnJlbX0ucHQwLW5ze3BhZGRpbmctdG9wOjB9LnB0MS1uc3twYWRkaW5nLXRvcDouMjVyZW19LnB0Mi1uc3twYWRkaW5nLXRvcDouNXJlbX0ucHQzLW5ze3BhZGRpbmctdG9wOjFyZW19LnB0NC1uc3twYWRkaW5nLXRvcDoycmVtfS5wdDUtbnN7cGFkZGluZy10b3A6NHJlbX0ucHQ2LW5ze3BhZGRpbmctdG9wOjhyZW19LnB0Ny1uc3twYWRkaW5nLXRvcDoxNnJlbX0ucHYwLW5ze3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0ucHYxLW5ze3BhZGRpbmctdG9wOi4yNXJlbTtwYWRkaW5nLWJvdHRvbTouMjVyZW19LnB2Mi1uc3twYWRkaW5nLXRvcDouNXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbX0ucHYzLW5ze3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0ucHY0LW5ze3BhZGRpbmctdG9wOjJyZW07cGFkZGluZy1ib3R0b206MnJlbX0ucHY1LW5ze3BhZGRpbmctdG9wOjRyZW07cGFkZGluZy1ib3R0b206NHJlbX0ucHY2LW5ze3BhZGRpbmctdG9wOjhyZW07cGFkZGluZy1ib3R0b206OHJlbX0ucHY3LW5ze3BhZGRpbmctdG9wOjE2cmVtO3BhZGRpbmctYm90dG9tOjE2cmVtfS5waDAtbnN7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS5waDEtbnN7cGFkZGluZy1sZWZ0Oi4yNXJlbTtwYWRkaW5nLXJpZ2h0Oi4yNXJlbX0ucGgyLW5ze3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5waDMtbnN7cGFkZGluZy1sZWZ0OjFyZW07cGFkZGluZy1yaWdodDoxcmVtfS5waDQtbnN7cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtfS5waDUtbnN7cGFkZGluZy1sZWZ0OjRyZW07cGFkZGluZy1yaWdodDo0cmVtfS5waDYtbnN7cGFkZGluZy1sZWZ0OjhyZW07cGFkZGluZy1yaWdodDo4cmVtfS5waDctbnN7cGFkZGluZy1sZWZ0OjE2cmVtO3BhZGRpbmctcmlnaHQ6MTZyZW19Lm1hMC1uc3ttYXJnaW46MH0ubWExLW5ze21hcmdpbjouMjVyZW19Lm1hMi1uc3ttYXJnaW46LjVyZW19Lm1hMy1uc3ttYXJnaW46MXJlbX0ubWE0LW5ze21hcmdpbjoycmVtfS5tYTUtbnN7bWFyZ2luOjRyZW19Lm1hNi1uc3ttYXJnaW46OHJlbX0ubWE3LW5ze21hcmdpbjoxNnJlbX0ubWwwLW5ze21hcmdpbi1sZWZ0OjB9Lm1sMS1uc3ttYXJnaW4tbGVmdDouMjVyZW19Lm1sMi1uc3ttYXJnaW4tbGVmdDouNXJlbX0ubWwzLW5ze21hcmdpbi1sZWZ0OjFyZW19Lm1sNC1uc3ttYXJnaW4tbGVmdDoycmVtfS5tbDUtbnN7bWFyZ2luLWxlZnQ6NHJlbX0ubWw2LW5ze21hcmdpbi1sZWZ0OjhyZW19Lm1sNy1uc3ttYXJnaW4tbGVmdDoxNnJlbX0ubXIwLW5ze21hcmdpbi1yaWdodDowfS5tcjEtbnN7bWFyZ2luLXJpZ2h0Oi4yNXJlbX0ubXIyLW5ze21hcmdpbi1yaWdodDouNXJlbX0ubXIzLW5ze21hcmdpbi1yaWdodDoxcmVtfS5tcjQtbnN7bWFyZ2luLXJpZ2h0OjJyZW19Lm1yNS1uc3ttYXJnaW4tcmlnaHQ6NHJlbX0ubXI2LW5ze21hcmdpbi1yaWdodDo4cmVtfS5tcjctbnN7bWFyZ2luLXJpZ2h0OjE2cmVtfS5tYjAtbnN7bWFyZ2luLWJvdHRvbTowfS5tYjEtbnN7bWFyZ2luLWJvdHRvbTouMjVyZW19Lm1iMi1uc3ttYXJnaW4tYm90dG9tOi41cmVtfS5tYjMtbnN7bWFyZ2luLWJvdHRvbToxcmVtfS5tYjQtbnN7bWFyZ2luLWJvdHRvbToycmVtfS5tYjUtbnN7bWFyZ2luLWJvdHRvbTo0cmVtfS5tYjYtbnN7bWFyZ2luLWJvdHRvbTo4cmVtfS5tYjctbnN7bWFyZ2luLWJvdHRvbToxNnJlbX0ubXQwLW5ze21hcmdpbi10b3A6MH0ubXQxLW5ze21hcmdpbi10b3A6LjI1cmVtfS5tdDItbnN7bWFyZ2luLXRvcDouNXJlbX0ubXQzLW5ze21hcmdpbi10b3A6MXJlbX0ubXQ0LW5ze21hcmdpbi10b3A6MnJlbX0ubXQ1LW5ze21hcmdpbi10b3A6NHJlbX0ubXQ2LW5ze21hcmdpbi10b3A6OHJlbX0ubXQ3LW5ze21hcmdpbi10b3A6MTZyZW19Lm12MC1uc3ttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5tdjEtbnN7bWFyZ2luLXRvcDouMjVyZW07bWFyZ2luLWJvdHRvbTouMjVyZW19Lm12Mi1uc3ttYXJnaW4tdG9wOi41cmVtO21hcmdpbi1ib3R0b206LjVyZW19Lm12My1uc3ttYXJnaW4tdG9wOjFyZW07bWFyZ2luLWJvdHRvbToxcmVtfS5tdjQtbnN7bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbX0ubXY1LW5ze21hcmdpbi10b3A6NHJlbTttYXJnaW4tYm90dG9tOjRyZW19Lm12Ni1uc3ttYXJnaW4tdG9wOjhyZW07bWFyZ2luLWJvdHRvbTo4cmVtfS5tdjctbnN7bWFyZ2luLXRvcDoxNnJlbTttYXJnaW4tYm90dG9tOjE2cmVtfS5taDAtbnN7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubWgxLW5ze21hcmdpbi1sZWZ0Oi4yNXJlbTttYXJnaW4tcmlnaHQ6LjI1cmVtfS5taDItbnN7bWFyZ2luLWxlZnQ6LjVyZW07bWFyZ2luLXJpZ2h0Oi41cmVtfS5taDMtbnN7bWFyZ2luLWxlZnQ6MXJlbTttYXJnaW4tcmlnaHQ6MXJlbX0ubWg0LW5ze21hcmdpbi1sZWZ0OjJyZW07bWFyZ2luLXJpZ2h0OjJyZW19Lm1oNS1uc3ttYXJnaW4tbGVmdDo0cmVtO21hcmdpbi1yaWdodDo0cmVtfS5taDYtbnN7bWFyZ2luLWxlZnQ6OHJlbTttYXJnaW4tcmlnaHQ6OHJlbX0ubWg3LW5ze21hcmdpbi1sZWZ0OjE2cmVtO21hcmdpbi1yaWdodDoxNnJlbX0ubmExLW5ze21hcmdpbjotLjI1cmVtfS5uYTItbnN7bWFyZ2luOi0uNXJlbX0ubmEzLW5ze21hcmdpbjotMXJlbX0ubmE0LW5ze21hcmdpbjotMnJlbX0ubmE1LW5ze21hcmdpbjotNHJlbX0ubmE2LW5ze21hcmdpbjotOHJlbX0ubmE3LW5ze21hcmdpbjotMTZyZW19Lm5sMS1uc3ttYXJnaW4tbGVmdDotLjI1cmVtfS5ubDItbnN7bWFyZ2luLWxlZnQ6LS41cmVtfS5ubDMtbnN7bWFyZ2luLWxlZnQ6LTFyZW19Lm5sNC1uc3ttYXJnaW4tbGVmdDotMnJlbX0ubmw1LW5ze21hcmdpbi1sZWZ0Oi00cmVtfS5ubDYtbnN7bWFyZ2luLWxlZnQ6LThyZW19Lm5sNy1uc3ttYXJnaW4tbGVmdDotMTZyZW19Lm5yMS1uc3ttYXJnaW4tcmlnaHQ6LS4yNXJlbX0ubnIyLW5ze21hcmdpbi1yaWdodDotLjVyZW19Lm5yMy1uc3ttYXJnaW4tcmlnaHQ6LTFyZW19Lm5yNC1uc3ttYXJnaW4tcmlnaHQ6LTJyZW19Lm5yNS1uc3ttYXJnaW4tcmlnaHQ6LTRyZW19Lm5yNi1uc3ttYXJnaW4tcmlnaHQ6LThyZW19Lm5yNy1uc3ttYXJnaW4tcmlnaHQ6LTE2cmVtfS5uYjEtbnN7bWFyZ2luLWJvdHRvbTotLjI1cmVtfS5uYjItbnN7bWFyZ2luLWJvdHRvbTotLjVyZW19Lm5iMy1uc3ttYXJnaW4tYm90dG9tOi0xcmVtfS5uYjQtbnN7bWFyZ2luLWJvdHRvbTotMnJlbX0ubmI1LW5ze21hcmdpbi1ib3R0b206LTRyZW19Lm5iNi1uc3ttYXJnaW4tYm90dG9tOi04cmVtfS5uYjctbnN7bWFyZ2luLWJvdHRvbTotMTZyZW19Lm50MS1uc3ttYXJnaW4tdG9wOi0uMjVyZW19Lm50Mi1uc3ttYXJnaW4tdG9wOi0uNXJlbX0ubnQzLW5ze21hcmdpbi10b3A6LTFyZW19Lm50NC1uc3ttYXJnaW4tdG9wOi0ycmVtfS5udDUtbnN7bWFyZ2luLXRvcDotNHJlbX0ubnQ2LW5ze21hcmdpbi10b3A6LThyZW19Lm50Ny1uc3ttYXJnaW4tdG9wOi0xNnJlbX0uc3RyaWtlLW5ze3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2h9LnVuZGVybGluZS1uc3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5uby11bmRlcmxpbmUtbnN7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnRsLW5ze3RleHQtYWxpZ246bGVmdH0udHItbnN7dGV4dC1hbGlnbjpyaWdodH0udGMtbnN7dGV4dC1hbGlnbjpjZW50ZXJ9LnR0Yy1uc3t0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS50dGwtbnN7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfS50dHUtbnN7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS50dG4tbnN7dGV4dC10cmFuc2Zvcm06bm9uZX0uZi02LW5zLC5mLWhlYWRsaW5lLW5ze2ZvbnQtc2l6ZTo2cmVtfS5mLTUtbnMsLmYtc3ViaGVhZGxpbmUtbnN7Zm9udC1zaXplOjVyZW19LmYxLW5ze2ZvbnQtc2l6ZTozcmVtfS5mMi1uc3tmb250LXNpemU6Mi4yNXJlbX0uZjMtbnN7Zm9udC1zaXplOjEuNXJlbX0uZjQtbnN7Zm9udC1zaXplOjEuMjVyZW19LmY1LW5ze2ZvbnQtc2l6ZToxcmVtfS5mNi1uc3tmb250LXNpemU6Ljg3NXJlbX0ubWVhc3VyZS1uc3ttYXgtd2lkdGg6MzBlbX0ubWVhc3VyZS13aWRlLW5ze21heC13aWR0aDozNGVtfS5tZWFzdXJlLW5hcnJvdy1uc3ttYXgtd2lkdGg6MjBlbX0uaW5kZW50LW5ze3RleHQtaW5kZW50OjFlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5zbWFsbC1jYXBzLW5ze2ZvbnQtdmFyaWFudDpzbWFsbC1jYXBzfS50cnVuY2F0ZS1uc3t3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LmNsaXAtbnN7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtjbGlwOnJlY3QoMXB4IDFweCAxcHggMXB4KTtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX0ud3Mtbm9ybWFsLW5ze3doaXRlLXNwYWNlOm5vcm1hbH0ubm93cmFwLW5ze3doaXRlLXNwYWNlOm5vd3JhcH0ucHJlLW5ze3doaXRlLXNwYWNlOnByZX0udi1iYXNlLW5ze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS52LW1pZC1uc3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnYtdG9wLW5ze3ZlcnRpY2FsLWFsaWduOnRvcH0udi1idG0tbnN7dmVydGljYWwtYWxpZ246Ym90dG9tfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMwZW0pIGFuZCAobWF4LXdpZHRoOjYwZW0pey5hc3BlY3QtcmF0aW8tbXtoZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZX0uYXNwZWN0LXJhdGlvLS0xNng5LW17cGFkZGluZy1ib3R0b206NTYuMjUlfS5hc3BlY3QtcmF0aW8tLTl4MTYtbXtwYWRkaW5nLWJvdHRvbToxNzcuNzclfS5hc3BlY3QtcmF0aW8tLTR4My1te3BhZGRpbmctYm90dG9tOjc1JX0uYXNwZWN0LXJhdGlvLS0zeDQtbXtwYWRkaW5nLWJvdHRvbToxMzMuMzMlfS5hc3BlY3QtcmF0aW8tLTZ4NC1te3BhZGRpbmctYm90dG9tOjY2LjYlfS5hc3BlY3QtcmF0aW8tLTR4Ni1te3BhZGRpbmctYm90dG9tOjE1MCV9LmFzcGVjdC1yYXRpby0tOHg1LW17cGFkZGluZy1ib3R0b206NjIuNSV9LmFzcGVjdC1yYXRpby0tNXg4LW17cGFkZGluZy1ib3R0b206MTYwJX0uYXNwZWN0LXJhdGlvLS03eDUtbXtwYWRkaW5nLWJvdHRvbTo3MS40MiV9LmFzcGVjdC1yYXRpby0tNXg3LW17cGFkZGluZy1ib3R0b206MTQwJX0uYXNwZWN0LXJhdGlvLS0xeDEtbXtwYWRkaW5nLWJvdHRvbToxMDAlfS5hc3BlY3QtcmF0aW8tLW9iamVjdC1te3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxMDB9LmNvdmVyLW17YmFja2dyb3VuZC1zaXplOmNvdmVyIWltcG9ydGFudH0uY29udGFpbi1te2JhY2tncm91bmQtc2l6ZTpjb250YWluIWltcG9ydGFudH0uYmctY2VudGVyLW17YmFja2dyb3VuZC1wb3NpdGlvbjo1MCV9LmJnLWNlbnRlci1tLC5iZy10b3AtbXtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LmJnLXRvcC1te2JhY2tncm91bmQtcG9zaXRpb246dG9wfS5iZy1yaWdodC1te2JhY2tncm91bmQtcG9zaXRpb246MTAwJX0uYmctYm90dG9tLW0sLmJnLXJpZ2h0LW17YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5iZy1ib3R0b20tbXtiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbX0uYmctbGVmdC1te2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjB9Lm91dGxpbmUtbXtvdXRsaW5lOjFweCBzb2xpZH0ub3V0bGluZS10cmFuc3BhcmVudC1te291dGxpbmU6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5vdXRsaW5lLTAtbXtvdXRsaW5lOjB9Lm91dGxpbmUtbHtvdXRsaW5lOjFweCBzb2xpZH0ub3V0bGluZS10cmFuc3BhcmVudC1se291dGxpbmU6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5vdXRsaW5lLTAtbHtvdXRsaW5lOjB9LmJhLW17Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHh9LmJ0LW17Ym9yZGVyLXRvcC1zdHlsZTpzb2xpZDtib3JkZXItdG9wLXdpZHRoOjFweH0uYnItbXtib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweH0uYmItbXtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4fS5ibC1te2JvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO2JvcmRlci1sZWZ0LXdpZHRoOjFweH0uYm4tbXtib3JkZXItc3R5bGU6bm9uZTtib3JkZXItd2lkdGg6MH0uYnIwLW17Ym9yZGVyLXJhZGl1czowfS5icjEtbXtib3JkZXItcmFkaXVzOi4xMjVyZW19LmJyMi1te2JvcmRlci1yYWRpdXM6LjI1cmVtfS5icjMtbXtib3JkZXItcmFkaXVzOi41cmVtfS5icjQtbXtib3JkZXItcmFkaXVzOjFyZW19LmJyLTEwMC1te2JvcmRlci1yYWRpdXM6MTAwJX0uYnItcGlsbC1te2JvcmRlci1yYWRpdXM6OTk5OXB4fS5ici0tYm90dG9tLW17Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LmJyLS10b3AtbXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5ici0tcmlnaHQtbSwuYnItLXRvcC1te2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uYnItLXJpZ2h0LW17Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5ici0tbGVmdC1te2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uYi0tZG90dGVkLW17Ym9yZGVyLXN0eWxlOmRvdHRlZH0uYi0tZGFzaGVkLW17Ym9yZGVyLXN0eWxlOmRhc2hlZH0uYi0tc29saWQtbXtib3JkZXItc3R5bGU6c29saWR9LmItLW5vbmUtbXtib3JkZXItc3R5bGU6bm9uZX0uYncwLW17Ym9yZGVyLXdpZHRoOjB9LmJ3MS1te2JvcmRlci13aWR0aDouMTI1cmVtfS5idzItbXtib3JkZXItd2lkdGg6LjI1cmVtfS5idzMtbXtib3JkZXItd2lkdGg6LjVyZW19LmJ3NC1te2JvcmRlci13aWR0aDoxcmVtfS5idzUtbXtib3JkZXItd2lkdGg6MnJlbX0uYnQtMC1te2JvcmRlci10b3Atd2lkdGg6MH0uYnItMC1te2JvcmRlci1yaWdodC13aWR0aDowfS5iYi0wLW17Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5ibC0wLW17Ym9yZGVyLWxlZnQtd2lkdGg6MH0uc2hhZG93LTEtbXtib3gtc2hhZG93OjAgMCA0cHggMnB4IHJnYmEoMCwwLDAsLjIpfS5zaGFkb3ctMi1te2JveC1zaGFkb3c6MCAwIDhweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0zLW17Ym94LXNoYWRvdzoycHggMnB4IDRweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy00LW17Ym94LXNoYWRvdzoycHggMnB4IDhweCAwIHJnYmEoMCwwLDAsLjIpfS5zaGFkb3ctNS1te2JveC1zaGFkb3c6NHB4IDRweCA4cHggMCByZ2JhKDAsMCwwLC4yKX0udG9wLTAtbXt0b3A6MH0ubGVmdC0wLW17bGVmdDowfS5yaWdodC0wLW17cmlnaHQ6MH0uYm90dG9tLTAtbXtib3R0b206MH0udG9wLTEtbXt0b3A6MXJlbX0ubGVmdC0xLW17bGVmdDoxcmVtfS5yaWdodC0xLW17cmlnaHQ6MXJlbX0uYm90dG9tLTEtbXtib3R0b206MXJlbX0udG9wLTItbXt0b3A6MnJlbX0ubGVmdC0yLW17bGVmdDoycmVtfS5yaWdodC0yLW17cmlnaHQ6MnJlbX0uYm90dG9tLTItbXtib3R0b206MnJlbX0udG9wLS0xLW17dG9wOi0xcmVtfS5yaWdodC0tMS1te3JpZ2h0Oi0xcmVtfS5ib3R0b20tLTEtbXtib3R0b206LTFyZW19LmxlZnQtLTEtbXtsZWZ0Oi0xcmVtfS50b3AtLTItbXt0b3A6LTJyZW19LnJpZ2h0LS0yLW17cmlnaHQ6LTJyZW19LmJvdHRvbS0tMi1te2JvdHRvbTotMnJlbX0ubGVmdC0tMi1te2xlZnQ6LTJyZW19LmFic29sdXRlLS1maWxsLW17dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LmNsLW17Y2xlYXI6bGVmdH0uY3ItbXtjbGVhcjpyaWdodH0uY2ItbXtjbGVhcjpib3RofS5jbi1te2NsZWFyOm5vbmV9LmRuLW17ZGlzcGxheTpub25lfS5kaS1te2Rpc3BsYXk6aW5saW5lfS5kYi1te2Rpc3BsYXk6YmxvY2t9LmRpYi1te2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5kaXQtbXtkaXNwbGF5OmlubGluZS10YWJsZX0uZHQtbXtkaXNwbGF5OnRhYmxlfS5kdGMtbXtkaXNwbGF5OnRhYmxlLWNlbGx9LmR0LXJvdy1te2Rpc3BsYXk6dGFibGUtcm93fS5kdC1yb3ctZ3JvdXAtbXtkaXNwbGF5OnRhYmxlLXJvdy1ncm91cH0uZHQtY29sdW1uLW17ZGlzcGxheTp0YWJsZS1jb2x1bW59LmR0LWNvbHVtbi1ncm91cC1te2Rpc3BsYXk6dGFibGUtY29sdW1uLWdyb3VwfS5kdC0tZml4ZWQtbXt0YWJsZS1sYXlvdXQ6Zml4ZWQ7d2lkdGg6MTAwJX0uZmxleC1te2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmlubGluZS1mbGV4LW17ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleH0uZmxleC1hdXRvLW17LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowfS5mbGV4LW5vbmUtbXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LmZsZXgtY29sdW1uLW17LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5mbGV4LWNvbHVtbi1tLC5mbGV4LXJvdy1tey13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWx9LmZsZXgtcm93LW17LXdlYmtpdC1ib3gtb3JpZW50Omhvcml6b250YWw7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9LmZsZXgtd3JhcC1tey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uaXRlbXMtc3RhcnQtbXstd2Via2l0LWJveC1hbGlnbjpzdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5pdGVtcy1lbmQtbXstd2Via2l0LWJveC1hbGlnbjplbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5pdGVtcy1jZW50ZXItbXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0uaXRlbXMtYmFzZWxpbmUtbXstd2Via2l0LWJveC1hbGlnbjpiYXNlbGluZTstbXMtZmxleC1hbGlnbjpiYXNlbGluZTthbGlnbi1pdGVtczpiYXNlbGluZX0uaXRlbXMtc3RyZXRjaC1tey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofS5zZWxmLXN0YXJ0LW17LW1zLWZsZXgtaXRlbS1hbGlnbjpzdGFydDthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LnNlbGYtZW5kLW17LW1zLWZsZXgtaXRlbS1hbGlnbjplbmQ7YWxpZ24tc2VsZjpmbGV4LWVuZH0uc2VsZi1jZW50ZXItbXstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjstbXMtZ3JpZC1yb3ctYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWJhc2VsaW5lLW17LW1zLWZsZXgtaXRlbS1hbGlnbjpiYXNlbGluZTthbGlnbi1zZWxmOmJhc2VsaW5lfS5zZWxmLXN0cmV0Y2gtbXstbXMtZmxleC1pdGVtLWFsaWduOnN0cmV0Y2g7LW1zLWdyaWQtcm93LWFsaWduOnN0cmV0Y2g7YWxpZ24tc2VsZjpzdHJldGNofS5qdXN0aWZ5LXN0YXJ0LW17LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5qdXN0aWZ5LWVuZC1tey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uanVzdGlmeS1jZW50ZXItbXstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5qdXN0aWZ5LWJldHdlZW4tbXstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5qdXN0aWZ5LWFyb3VuZC1tey1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0YXJ0LW17LW1zLWZsZXgtbGluZS1wYWNrOnN0YXJ0O2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmQtbXstbXMtZmxleC1saW5lLXBhY2s6ZW5kO2FsaWduLWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRlbnQtY2VudGVyLW17LW1zLWZsZXgtbGluZS1wYWNrOmNlbnRlcjthbGlnbi1jb250ZW50OmNlbnRlcn0uY29udGVudC1iZXR3ZWVuLW17LW1zLWZsZXgtbGluZS1wYWNrOmp1c3RpZnk7YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVufS5jb250ZW50LWFyb3VuZC1tey1tcy1mbGV4LWxpbmUtcGFjazpkaXN0cmlidXRlO2FsaWduLWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5jb250ZW50LXN0cmV0Y2gtbXstbXMtZmxleC1saW5lLXBhY2s6c3RyZXRjaDthbGlnbi1jb250ZW50OnN0cmV0Y2h9Lm9yZGVyLTAtbXstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjE7LW1zLWZsZXgtb3JkZXI6MDtvcmRlcjowfS5vcmRlci0xLW17LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ub3JkZXItMi1tey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MzstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9Lm9yZGVyLTMtbXstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjQ7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfS5vcmRlci00LW17LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo1Oy1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NH0ub3JkZXItNS1tey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NjstbXMtZmxleC1vcmRlcjo1O29yZGVyOjV9Lm9yZGVyLTYtbXstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjc7LW1zLWZsZXgtb3JkZXI6NjtvcmRlcjo2fS5vcmRlci03LW17LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo4Oy1tcy1mbGV4LW9yZGVyOjc7b3JkZXI6N30ub3JkZXItOC1tey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6OTstbXMtZmxleC1vcmRlcjo4O29yZGVyOjh9Lm9yZGVyLWxhc3QtbXstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjEwMDAwMDstbXMtZmxleC1vcmRlcjo5OTk5OTtvcmRlcjo5OTk5OX0uZmwtbXtmbG9hdDpsZWZ0fS5mbC1tLC5mci1te2Rpc3BsYXk6aW5saW5lfS5mci1te2Zsb2F0OnJpZ2h0fS5mbi1te2Zsb2F0Om5vbmV9LmktbXtmb250LXN0eWxlOml0YWxpY30uZnMtbm9ybWFsLW17Zm9udC1zdHlsZTpub3JtYWx9Lm5vcm1hbC1te2ZvbnQtd2VpZ2h0OjQwMH0uYi1te2ZvbnQtd2VpZ2h0OjcwMH0uZncxLW17Zm9udC13ZWlnaHQ6MTAwfS5mdzItbXtmb250LXdlaWdodDoyMDB9LmZ3My1te2ZvbnQtd2VpZ2h0OjMwMH0uZnc0LW17Zm9udC13ZWlnaHQ6NDAwfS5mdzUtbXtmb250LXdlaWdodDo1MDB9LmZ3Ni1te2ZvbnQtd2VpZ2h0OjYwMH0uZnc3LW17Zm9udC13ZWlnaHQ6NzAwfS5mdzgtbXtmb250LXdlaWdodDo4MDB9LmZ3OS1te2ZvbnQtd2VpZ2h0OjkwMH0uaDEtbXtoZWlnaHQ6MXJlbX0uaDItbXtoZWlnaHQ6MnJlbX0uaDMtbXtoZWlnaHQ6NHJlbX0uaDQtbXtoZWlnaHQ6OHJlbX0uaDUtbXtoZWlnaHQ6MTZyZW19LmgtMjUtbXtoZWlnaHQ6MjUlfS5oLTUwLW17aGVpZ2h0OjUwJX0uaC03NS1te2hlaWdodDo3NSV9LmgtMTAwLW17aGVpZ2h0OjEwMCV9Lm1pbi1oLTEwMC1te21pbi1oZWlnaHQ6MTAwJX0udmgtMjUtbXtoZWlnaHQ6MjV2aH0udmgtNTAtbXtoZWlnaHQ6NTB2aH0udmgtNzUtbXtoZWlnaHQ6NzV2aH0udmgtMTAwLW17aGVpZ2h0OjEwMHZofS5taW4tdmgtMTAwLW17bWluLWhlaWdodDoxMDB2aH0uaC1hdXRvLW17aGVpZ2h0OmF1dG99LmgtaW5oZXJpdC1te2hlaWdodDppbmhlcml0fS50cmFja2VkLW17bGV0dGVyLXNwYWNpbmc6LjFlbX0udHJhY2tlZC10aWdodC1te2xldHRlci1zcGFjaW5nOi0uMDVlbX0udHJhY2tlZC1tZWdhLW17bGV0dGVyLXNwYWNpbmc6LjI1ZW19LmxoLXNvbGlkLW17bGluZS1oZWlnaHQ6MX0ubGgtdGl0bGUtbXtsaW5lLWhlaWdodDoxLjI1fS5saC1jb3B5LW17bGluZS1oZWlnaHQ6MS41fS5tdy0xMDAtbXttYXgtd2lkdGg6MTAwJX0ubXcxLW17bWF4LXdpZHRoOjFyZW19Lm13Mi1te21heC13aWR0aDoycmVtfS5tdzMtbXttYXgtd2lkdGg6NHJlbX0ubXc0LW17bWF4LXdpZHRoOjhyZW19Lm13NS1te21heC13aWR0aDoxNnJlbX0ubXc2LW17bWF4LXdpZHRoOjMycmVtfS5tdzctbXttYXgtd2lkdGg6NDhyZW19Lm13OC1te21heC13aWR0aDo2NHJlbX0ubXc5LW17bWF4LXdpZHRoOjk2cmVtfS5tdy1ub25lLW17bWF4LXdpZHRoOm5vbmV9LncxLW17d2lkdGg6MXJlbX0udzItbXt3aWR0aDoycmVtfS53My1te3dpZHRoOjRyZW19Lnc0LW17d2lkdGg6OHJlbX0udzUtbXt3aWR0aDoxNnJlbX0udy0xMC1te3dpZHRoOjEwJX0udy0yMC1te3dpZHRoOjIwJX0udy0yNS1te3dpZHRoOjI1JX0udy0zMC1te3dpZHRoOjMwJX0udy0zMy1te3dpZHRoOjMzJX0udy0zNC1te3dpZHRoOjM0JX0udy00MC1te3dpZHRoOjQwJX0udy01MC1te3dpZHRoOjUwJX0udy02MC1te3dpZHRoOjYwJX0udy03MC1te3dpZHRoOjcwJX0udy03NS1te3dpZHRoOjc1JX0udy04MC1te3dpZHRoOjgwJX0udy05MC1te3dpZHRoOjkwJX0udy0xMDAtbXt3aWR0aDoxMDAlfS53LXRoaXJkLW17d2lkdGg6MzMuMzMzMzMlfS53LXR3by10aGlyZHMtbXt3aWR0aDo2Ni42NjY2NyV9LnctYXV0by1te3dpZHRoOmF1dG99Lm92ZXJmbG93LXZpc2libGUtbXtvdmVyZmxvdzp2aXNpYmxlfS5vdmVyZmxvdy1oaWRkZW4tbXtvdmVyZmxvdzpoaWRkZW59Lm92ZXJmbG93LXNjcm9sbC1te292ZXJmbG93OnNjcm9sbH0ub3ZlcmZsb3ctYXV0by1te292ZXJmbG93OmF1dG99Lm92ZXJmbG93LXgtdmlzaWJsZS1te292ZXJmbG93LXg6dmlzaWJsZX0ub3ZlcmZsb3cteC1oaWRkZW4tbXtvdmVyZmxvdy14OmhpZGRlbn0ub3ZlcmZsb3cteC1zY3JvbGwtbXtvdmVyZmxvdy14OnNjcm9sbH0ub3ZlcmZsb3cteC1hdXRvLW17b3ZlcmZsb3cteDphdXRvfS5vdmVyZmxvdy15LXZpc2libGUtbXtvdmVyZmxvdy15OnZpc2libGV9Lm92ZXJmbG93LXktaGlkZGVuLW17b3ZlcmZsb3cteTpoaWRkZW59Lm92ZXJmbG93LXktc2Nyb2xsLW17b3ZlcmZsb3cteTpzY3JvbGx9Lm92ZXJmbG93LXktYXV0by1te292ZXJmbG93LXk6YXV0b30uc3RhdGljLW17cG9zaXRpb246c3RhdGljfS5yZWxhdGl2ZS1te3Bvc2l0aW9uOnJlbGF0aXZlfS5hYnNvbHV0ZS1te3Bvc2l0aW9uOmFic29sdXRlfS5maXhlZC1te3Bvc2l0aW9uOmZpeGVkfS5yb3RhdGUtNDUtbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5yb3RhdGUtOTAtbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5yb3RhdGUtMTM1LW17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpfS5yb3RhdGUtMTgwLW17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5yb3RhdGUtMjI1LW17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIyNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMjVkZWcpfS5yb3RhdGUtMjcwLW17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5yb3RhdGUtMzE1LW17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMxNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpfS5wYTAtbXtwYWRkaW5nOjB9LnBhMS1te3BhZGRpbmc6LjI1cmVtfS5wYTItbXtwYWRkaW5nOi41cmVtfS5wYTMtbXtwYWRkaW5nOjFyZW19LnBhNC1te3BhZGRpbmc6MnJlbX0ucGE1LW17cGFkZGluZzo0cmVtfS5wYTYtbXtwYWRkaW5nOjhyZW19LnBhNy1te3BhZGRpbmc6MTZyZW19LnBsMC1te3BhZGRpbmctbGVmdDowfS5wbDEtbXtwYWRkaW5nLWxlZnQ6LjI1cmVtfS5wbDItbXtwYWRkaW5nLWxlZnQ6LjVyZW19LnBsMy1te3BhZGRpbmctbGVmdDoxcmVtfS5wbDQtbXtwYWRkaW5nLWxlZnQ6MnJlbX0ucGw1LW17cGFkZGluZy1sZWZ0OjRyZW19LnBsNi1te3BhZGRpbmctbGVmdDo4cmVtfS5wbDctbXtwYWRkaW5nLWxlZnQ6MTZyZW19LnByMC1te3BhZGRpbmctcmlnaHQ6MH0ucHIxLW17cGFkZGluZy1yaWdodDouMjVyZW19LnByMi1te3BhZGRpbmctcmlnaHQ6LjVyZW19LnByMy1te3BhZGRpbmctcmlnaHQ6MXJlbX0ucHI0LW17cGFkZGluZy1yaWdodDoycmVtfS5wcjUtbXtwYWRkaW5nLXJpZ2h0OjRyZW19LnByNi1te3BhZGRpbmctcmlnaHQ6OHJlbX0ucHI3LW17cGFkZGluZy1yaWdodDoxNnJlbX0ucGIwLW17cGFkZGluZy1ib3R0b206MH0ucGIxLW17cGFkZGluZy1ib3R0b206LjI1cmVtfS5wYjItbXtwYWRkaW5nLWJvdHRvbTouNXJlbX0ucGIzLW17cGFkZGluZy1ib3R0b206MXJlbX0ucGI0LW17cGFkZGluZy1ib3R0b206MnJlbX0ucGI1LW17cGFkZGluZy1ib3R0b206NHJlbX0ucGI2LW17cGFkZGluZy1ib3R0b206OHJlbX0ucGI3LW17cGFkZGluZy1ib3R0b206MTZyZW19LnB0MC1te3BhZGRpbmctdG9wOjB9LnB0MS1te3BhZGRpbmctdG9wOi4yNXJlbX0ucHQyLW17cGFkZGluZy10b3A6LjVyZW19LnB0My1te3BhZGRpbmctdG9wOjFyZW19LnB0NC1te3BhZGRpbmctdG9wOjJyZW19LnB0NS1te3BhZGRpbmctdG9wOjRyZW19LnB0Ni1te3BhZGRpbmctdG9wOjhyZW19LnB0Ny1te3BhZGRpbmctdG9wOjE2cmVtfS5wdjAtbXtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LnB2MS1te3BhZGRpbmctdG9wOi4yNXJlbTtwYWRkaW5nLWJvdHRvbTouMjVyZW19LnB2Mi1te3BhZGRpbmctdG9wOi41cmVtO3BhZGRpbmctYm90dG9tOi41cmVtfS5wdjMtbXtwYWRkaW5nLXRvcDoxcmVtO3BhZGRpbmctYm90dG9tOjFyZW19LnB2NC1te3BhZGRpbmctdG9wOjJyZW07cGFkZGluZy1ib3R0b206MnJlbX0ucHY1LW17cGFkZGluZy10b3A6NHJlbTtwYWRkaW5nLWJvdHRvbTo0cmVtfS5wdjYtbXtwYWRkaW5nLXRvcDo4cmVtO3BhZGRpbmctYm90dG9tOjhyZW19LnB2Ny1te3BhZGRpbmctdG9wOjE2cmVtO3BhZGRpbmctYm90dG9tOjE2cmVtfS5waDAtbXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnBoMS1te3BhZGRpbmctbGVmdDouMjVyZW07cGFkZGluZy1yaWdodDouMjVyZW19LnBoMi1te3BhZGRpbmctbGVmdDouNXJlbTtwYWRkaW5nLXJpZ2h0Oi41cmVtfS5waDMtbXtwYWRkaW5nLWxlZnQ6MXJlbTtwYWRkaW5nLXJpZ2h0OjFyZW19LnBoNC1te3BhZGRpbmctbGVmdDoycmVtO3BhZGRpbmctcmlnaHQ6MnJlbX0ucGg1LW17cGFkZGluZy1sZWZ0OjRyZW07cGFkZGluZy1yaWdodDo0cmVtfS5waDYtbXtwYWRkaW5nLWxlZnQ6OHJlbTtwYWRkaW5nLXJpZ2h0OjhyZW19LnBoNy1te3BhZGRpbmctbGVmdDoxNnJlbTtwYWRkaW5nLXJpZ2h0OjE2cmVtfS5tYTAtbXttYXJnaW46MH0ubWExLW17bWFyZ2luOi4yNXJlbX0ubWEyLW17bWFyZ2luOi41cmVtfS5tYTMtbXttYXJnaW46MXJlbX0ubWE0LW17bWFyZ2luOjJyZW19Lm1hNS1te21hcmdpbjo0cmVtfS5tYTYtbXttYXJnaW46OHJlbX0ubWE3LW17bWFyZ2luOjE2cmVtfS5tbDAtbXttYXJnaW4tbGVmdDowfS5tbDEtbXttYXJnaW4tbGVmdDouMjVyZW19Lm1sMi1te21hcmdpbi1sZWZ0Oi41cmVtfS5tbDMtbXttYXJnaW4tbGVmdDoxcmVtfS5tbDQtbXttYXJnaW4tbGVmdDoycmVtfS5tbDUtbXttYXJnaW4tbGVmdDo0cmVtfS5tbDYtbXttYXJnaW4tbGVmdDo4cmVtfS5tbDctbXttYXJnaW4tbGVmdDoxNnJlbX0ubXIwLW17bWFyZ2luLXJpZ2h0OjB9Lm1yMS1te21hcmdpbi1yaWdodDouMjVyZW19Lm1yMi1te21hcmdpbi1yaWdodDouNXJlbX0ubXIzLW17bWFyZ2luLXJpZ2h0OjFyZW19Lm1yNC1te21hcmdpbi1yaWdodDoycmVtfS5tcjUtbXttYXJnaW4tcmlnaHQ6NHJlbX0ubXI2LW17bWFyZ2luLXJpZ2h0OjhyZW19Lm1yNy1te21hcmdpbi1yaWdodDoxNnJlbX0ubWIwLW17bWFyZ2luLWJvdHRvbTowfS5tYjEtbXttYXJnaW4tYm90dG9tOi4yNXJlbX0ubWIyLW17bWFyZ2luLWJvdHRvbTouNXJlbX0ubWIzLW17bWFyZ2luLWJvdHRvbToxcmVtfS5tYjQtbXttYXJnaW4tYm90dG9tOjJyZW19Lm1iNS1te21hcmdpbi1ib3R0b206NHJlbX0ubWI2LW17bWFyZ2luLWJvdHRvbTo4cmVtfS5tYjctbXttYXJnaW4tYm90dG9tOjE2cmVtfS5tdDAtbXttYXJnaW4tdG9wOjB9Lm10MS1te21hcmdpbi10b3A6LjI1cmVtfS5tdDItbXttYXJnaW4tdG9wOi41cmVtfS5tdDMtbXttYXJnaW4tdG9wOjFyZW19Lm10NC1te21hcmdpbi10b3A6MnJlbX0ubXQ1LW17bWFyZ2luLXRvcDo0cmVtfS5tdDYtbXttYXJnaW4tdG9wOjhyZW19Lm10Ny1te21hcmdpbi10b3A6MTZyZW19Lm12MC1te21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lm12MS1te21hcmdpbi10b3A6LjI1cmVtO21hcmdpbi1ib3R0b206LjI1cmVtfS5tdjItbXttYXJnaW4tdG9wOi41cmVtO21hcmdpbi1ib3R0b206LjVyZW19Lm12My1te21hcmdpbi10b3A6MXJlbTttYXJnaW4tYm90dG9tOjFyZW19Lm12NC1te21hcmdpbi10b3A6MnJlbTttYXJnaW4tYm90dG9tOjJyZW19Lm12NS1te21hcmdpbi10b3A6NHJlbTttYXJnaW4tYm90dG9tOjRyZW19Lm12Ni1te21hcmdpbi10b3A6OHJlbTttYXJnaW4tYm90dG9tOjhyZW19Lm12Ny1te21hcmdpbi10b3A6MTZyZW07bWFyZ2luLWJvdHRvbToxNnJlbX0ubWgwLW17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MH0ubWgxLW17bWFyZ2luLWxlZnQ6LjI1cmVtO21hcmdpbi1yaWdodDouMjVyZW19Lm1oMi1te21hcmdpbi1sZWZ0Oi41cmVtO21hcmdpbi1yaWdodDouNXJlbX0ubWgzLW17bWFyZ2luLWxlZnQ6MXJlbTttYXJnaW4tcmlnaHQ6MXJlbX0ubWg0LW17bWFyZ2luLWxlZnQ6MnJlbTttYXJnaW4tcmlnaHQ6MnJlbX0ubWg1LW17bWFyZ2luLWxlZnQ6NHJlbTttYXJnaW4tcmlnaHQ6NHJlbX0ubWg2LW17bWFyZ2luLWxlZnQ6OHJlbTttYXJnaW4tcmlnaHQ6OHJlbX0ubWg3LW17bWFyZ2luLWxlZnQ6MTZyZW07bWFyZ2luLXJpZ2h0OjE2cmVtfS5uYTEtbXttYXJnaW46LS4yNXJlbX0ubmEyLW17bWFyZ2luOi0uNXJlbX0ubmEzLW17bWFyZ2luOi0xcmVtfS5uYTQtbXttYXJnaW46LTJyZW19Lm5hNS1te21hcmdpbjotNHJlbX0ubmE2LW17bWFyZ2luOi04cmVtfS5uYTctbXttYXJnaW46LTE2cmVtfS5ubDEtbXttYXJnaW4tbGVmdDotLjI1cmVtfS5ubDItbXttYXJnaW4tbGVmdDotLjVyZW19Lm5sMy1te21hcmdpbi1sZWZ0Oi0xcmVtfS5ubDQtbXttYXJnaW4tbGVmdDotMnJlbX0ubmw1LW17bWFyZ2luLWxlZnQ6LTRyZW19Lm5sNi1te21hcmdpbi1sZWZ0Oi04cmVtfS5ubDctbXttYXJnaW4tbGVmdDotMTZyZW19Lm5yMS1te21hcmdpbi1yaWdodDotLjI1cmVtfS5ucjItbXttYXJnaW4tcmlnaHQ6LS41cmVtfS5ucjMtbXttYXJnaW4tcmlnaHQ6LTFyZW19Lm5yNC1te21hcmdpbi1yaWdodDotMnJlbX0ubnI1LW17bWFyZ2luLXJpZ2h0Oi00cmVtfS5ucjYtbXttYXJnaW4tcmlnaHQ6LThyZW19Lm5yNy1te21hcmdpbi1yaWdodDotMTZyZW19Lm5iMS1te21hcmdpbi1ib3R0b206LS4yNXJlbX0ubmIyLW17bWFyZ2luLWJvdHRvbTotLjVyZW19Lm5iMy1te21hcmdpbi1ib3R0b206LTFyZW19Lm5iNC1te21hcmdpbi1ib3R0b206LTJyZW19Lm5iNS1te21hcmdpbi1ib3R0b206LTRyZW19Lm5iNi1te21hcmdpbi1ib3R0b206LThyZW19Lm5iNy1te21hcmdpbi1ib3R0b206LTE2cmVtfS5udDEtbXttYXJnaW4tdG9wOi0uMjVyZW19Lm50Mi1te21hcmdpbi10b3A6LS41cmVtfS5udDMtbXttYXJnaW4tdG9wOi0xcmVtfS5udDQtbXttYXJnaW4tdG9wOi0ycmVtfS5udDUtbXttYXJnaW4tdG9wOi00cmVtfS5udDYtbXttYXJnaW4tdG9wOi04cmVtfS5udDctbXttYXJnaW4tdG9wOi0xNnJlbX0uc3RyaWtlLW17dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaH0udW5kZXJsaW5lLW17dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0ubm8tdW5kZXJsaW5lLW17dGV4dC1kZWNvcmF0aW9uOm5vbmV9LnRsLW17dGV4dC1hbGlnbjpsZWZ0fS50ci1te3RleHQtYWxpZ246cmlnaHR9LnRjLW17dGV4dC1hbGlnbjpjZW50ZXJ9LnR0Yy1te3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9LnR0bC1te3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZX0udHR1LW17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS50dG4tbXt0ZXh0LXRyYW5zZm9ybTpub25lfS5mLTYtbSwuZi1oZWFkbGluZS1te2ZvbnQtc2l6ZTo2cmVtfS5mLTUtbSwuZi1zdWJoZWFkbGluZS1te2ZvbnQtc2l6ZTo1cmVtfS5mMS1te2ZvbnQtc2l6ZTozcmVtfS5mMi1te2ZvbnQtc2l6ZToyLjI1cmVtfS5mMy1te2ZvbnQtc2l6ZToxLjVyZW19LmY0LW17Zm9udC1zaXplOjEuMjVyZW19LmY1LW17Zm9udC1zaXplOjFyZW19LmY2LW17Zm9udC1zaXplOi44NzVyZW19Lm1lYXN1cmUtbXttYXgtd2lkdGg6MzBlbX0ubWVhc3VyZS13aWRlLW17bWF4LXdpZHRoOjM0ZW19Lm1lYXN1cmUtbmFycm93LW17bWF4LXdpZHRoOjIwZW19LmluZGVudC1te3RleHQtaW5kZW50OjFlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5zbWFsbC1jYXBzLW17Zm9udC12YXJpYW50OnNtYWxsLWNhcHN9LnRydW5jYXRlLW17d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5jbGlwLW17cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtjbGlwOnJlY3QoMXB4IDFweCAxcHggMXB4KTtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KX0ud3Mtbm9ybWFsLW17d2hpdGUtc3BhY2U6bm9ybWFsfS5ub3dyYXAtbXt3aGl0ZS1zcGFjZTpub3dyYXB9LnByZS1te3doaXRlLXNwYWNlOnByZX0udi1iYXNlLW17dmVydGljYWwtYWxpZ246YmFzZWxpbmV9LnYtbWlkLW17dmVydGljYWwtYWxpZ246bWlkZGxlfS52LXRvcC1te3ZlcnRpY2FsLWFsaWduOnRvcH0udi1idG0tbXt2ZXJ0aWNhbC1hbGlnbjpib3R0b219fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjBlbSl7LmFzcGVjdC1yYXRpby1se2hlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlfS5hc3BlY3QtcmF0aW8tLTE2eDktbHtwYWRkaW5nLWJvdHRvbTo1Ni4yNSV9LmFzcGVjdC1yYXRpby0tOXgxNi1se3BhZGRpbmctYm90dG9tOjE3Ny43NyV9LmFzcGVjdC1yYXRpby0tNHgzLWx7cGFkZGluZy1ib3R0b206NzUlfS5hc3BlY3QtcmF0aW8tLTN4NC1se3BhZGRpbmctYm90dG9tOjEzMy4zMyV9LmFzcGVjdC1yYXRpby0tNng0LWx7cGFkZGluZy1ib3R0b206NjYuNiV9LmFzcGVjdC1yYXRpby0tNHg2LWx7cGFkZGluZy1ib3R0b206MTUwJX0uYXNwZWN0LXJhdGlvLS04eDUtbHtwYWRkaW5nLWJvdHRvbTo2Mi41JX0uYXNwZWN0LXJhdGlvLS01eDgtbHtwYWRkaW5nLWJvdHRvbToxNjAlfS5hc3BlY3QtcmF0aW8tLTd4NS1se3BhZGRpbmctYm90dG9tOjcxLjQyJX0uYXNwZWN0LXJhdGlvLS01eDctbHtwYWRkaW5nLWJvdHRvbToxNDAlfS5hc3BlY3QtcmF0aW8tLTF4MS1se3BhZGRpbmctYm90dG9tOjEwMCV9LmFzcGVjdC1yYXRpby0tb2JqZWN0LWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMH0uY292ZXItbHtiYWNrZ3JvdW5kLXNpemU6Y292ZXIhaW1wb3J0YW50fS5jb250YWluLWx7YmFja2dyb3VuZC1zaXplOmNvbnRhaW4haW1wb3J0YW50fS5iZy1jZW50ZXItbHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJX0uYmctY2VudGVyLWwsLmJnLXRvcC1se2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uYmctdG9wLWx7YmFja2dyb3VuZC1wb3NpdGlvbjp0b3B9LmJnLXJpZ2h0LWx7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlfS5iZy1ib3R0b20tbCwuYmctcmlnaHQtbHtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LmJnLWJvdHRvbS1se2JhY2tncm91bmQtcG9zaXRpb246Ym90dG9tfS5iZy1sZWZ0LWx7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246MH0uYmEtbHtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweH0uYnQtbHtib3JkZXItdG9wLXN0eWxlOnNvbGlkO2JvcmRlci10b3Atd2lkdGg6MXB4fS5ici1se2JvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtib3JkZXItcmlnaHQtd2lkdGg6MXB4fS5iYi1se2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9LmJsLWx7Ym9yZGVyLWxlZnQtc3R5bGU6c29saWQ7Ym9yZGVyLWxlZnQtd2lkdGg6MXB4fS5ibi1se2JvcmRlci1zdHlsZTpub25lO2JvcmRlci13aWR0aDowfS5icjAtbHtib3JkZXItcmFkaXVzOjB9LmJyMS1se2JvcmRlci1yYWRpdXM6LjEyNXJlbX0uYnIyLWx7Ym9yZGVyLXJhZGl1czouMjVyZW19LmJyMy1se2JvcmRlci1yYWRpdXM6LjVyZW19LmJyNC1se2JvcmRlci1yYWRpdXM6MXJlbX0uYnItMTAwLWx7Ym9yZGVyLXJhZGl1czoxMDAlfS5ici1waWxsLWx7Ym9yZGVyLXJhZGl1czo5OTk5cHh9LmJyLS1ib3R0b20tbHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uYnItLXRvcC1se2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LmJyLS1yaWdodC1sLC5ici0tdG9wLWx7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5ici0tcmlnaHQtbHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmJyLS1sZWZ0LWx7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5iLS1kb3R0ZWQtbHtib3JkZXItc3R5bGU6ZG90dGVkfS5iLS1kYXNoZWQtbHtib3JkZXItc3R5bGU6ZGFzaGVkfS5iLS1zb2xpZC1se2JvcmRlci1zdHlsZTpzb2xpZH0uYi0tbm9uZS1se2JvcmRlci1zdHlsZTpub25lfS5idzAtbHtib3JkZXItd2lkdGg6MH0uYncxLWx7Ym9yZGVyLXdpZHRoOi4xMjVyZW19LmJ3Mi1se2JvcmRlci13aWR0aDouMjVyZW19LmJ3My1se2JvcmRlci13aWR0aDouNXJlbX0uYnc0LWx7Ym9yZGVyLXdpZHRoOjFyZW19LmJ3NS1se2JvcmRlci13aWR0aDoycmVtfS5idC0wLWx7Ym9yZGVyLXRvcC13aWR0aDowfS5ici0wLWx7Ym9yZGVyLXJpZ2h0LXdpZHRoOjB9LmJiLTAtbHtib3JkZXItYm90dG9tLXdpZHRoOjB9LmJsLTAtbHtib3JkZXItbGVmdC13aWR0aDowfS5zaGFkb3ctMS1se2JveC1zaGFkb3c6MCAwIDRweCAycHggcmdiYSgwLDAsMCwuMil9LnNoYWRvdy0yLWx7Ym94LXNoYWRvdzowIDAgOHB4IDJweCByZ2JhKDAsMCwwLC4yKX0uc2hhZG93LTMtbHtib3gtc2hhZG93OjJweCAycHggNHB4IDJweCByZ2JhKDAsMCwwLC4yKX0uc2hhZG93LTQtbHtib3gtc2hhZG93OjJweCAycHggOHB4IDAgcmdiYSgwLDAsMCwuMil9LnNoYWRvdy01LWx7Ym94LXNoYWRvdzo0cHggNHB4IDhweCAwIHJnYmEoMCwwLDAsLjIpfS50b3AtMC1se3RvcDowfS5sZWZ0LTAtbHtsZWZ0OjB9LnJpZ2h0LTAtbHtyaWdodDowfS5ib3R0b20tMC1se2JvdHRvbTowfS50b3AtMS1se3RvcDoxcmVtfS5sZWZ0LTEtbHtsZWZ0OjFyZW19LnJpZ2h0LTEtbHtyaWdodDoxcmVtfS5ib3R0b20tMS1se2JvdHRvbToxcmVtfS50b3AtMi1se3RvcDoycmVtfS5sZWZ0LTItbHtsZWZ0OjJyZW19LnJpZ2h0LTItbHtyaWdodDoycmVtfS5ib3R0b20tMi1se2JvdHRvbToycmVtfS50b3AtLTEtbHt0b3A6LTFyZW19LnJpZ2h0LS0xLWx7cmlnaHQ6LTFyZW19LmJvdHRvbS0tMS1se2JvdHRvbTotMXJlbX0ubGVmdC0tMS1se2xlZnQ6LTFyZW19LnRvcC0tMi1se3RvcDotMnJlbX0ucmlnaHQtLTItbHtyaWdodDotMnJlbX0uYm90dG9tLS0yLWx7Ym90dG9tOi0ycmVtfS5sZWZ0LS0yLWx7bGVmdDotMnJlbX0uYWJzb2x1dGUtLWZpbGwtbHt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0uY2wtbHtjbGVhcjpsZWZ0fS5jci1se2NsZWFyOnJpZ2h0fS5jYi1se2NsZWFyOmJvdGh9LmNuLWx7Y2xlYXI6bm9uZX0uZG4tbHtkaXNwbGF5Om5vbmV9LmRpLWx7ZGlzcGxheTppbmxpbmV9LmRiLWx7ZGlzcGxheTpibG9ja30uZGliLWx7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmRpdC1se2Rpc3BsYXk6aW5saW5lLXRhYmxlfS5kdC1se2Rpc3BsYXk6dGFibGV9LmR0Yy1se2Rpc3BsYXk6dGFibGUtY2VsbH0uZHQtcm93LWx7ZGlzcGxheTp0YWJsZS1yb3d9LmR0LXJvdy1ncm91cC1se2Rpc3BsYXk6dGFibGUtcm93LWdyb3VwfS5kdC1jb2x1bW4tbHtkaXNwbGF5OnRhYmxlLWNvbHVtbn0uZHQtY29sdW1uLWdyb3VwLWx7ZGlzcGxheTp0YWJsZS1jb2x1bW4tZ3JvdXB9LmR0LS1maXhlZC1se3RhYmxlLWxheW91dDpmaXhlZDt3aWR0aDoxMDAlfS5mbGV4LWx7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uaW5saW5lLWZsZXgtbHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fS5mbGV4LWF1dG8tbHstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjB9LmZsZXgtbm9uZS1sey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uZmxleC1jb2x1bW4tbHstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmZsZXgtY29sdW1uLWwsLmZsZXgtcm93LWx7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbH0uZmxleC1yb3ctbHstd2Via2l0LWJveC1vcmllbnQ6aG9yaXpvbnRhbDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30uZmxleC13cmFwLWx7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5pdGVtcy1zdGFydC1sey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Lml0ZW1zLWVuZC1sey13ZWJraXQtYm94LWFsaWduOmVuZDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lml0ZW1zLWNlbnRlci1sey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5pdGVtcy1iYXNlbGluZS1sey13ZWJraXQtYm94LWFsaWduOmJhc2VsaW5lOy1tcy1mbGV4LWFsaWduOmJhc2VsaW5lO2FsaWduLWl0ZW1zOmJhc2VsaW5lfS5pdGVtcy1zdHJldGNoLWx7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnNlbGYtc3RhcnQtbHstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6ZmxleC1zdGFydH0uc2VsZi1lbmQtbHstbXMtZmxleC1pdGVtLWFsaWduOmVuZDthbGlnbi1zZWxmOmZsZXgtZW5kfS5zZWxmLWNlbnRlci1sey1tcy1mbGV4LWl0ZW0tYWxpZ246Y2VudGVyOy1tcy1ncmlkLXJvdy1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9LnNlbGYtYmFzZWxpbmUtbHstbXMtZmxleC1pdGVtLWFsaWduOmJhc2VsaW5lO2FsaWduLXNlbGY6YmFzZWxpbmV9LnNlbGYtc3RyZXRjaC1sey1tcy1mbGV4LWl0ZW0tYWxpZ246c3RyZXRjaDstbXMtZ3JpZC1yb3ctYWxpZ246c3RyZXRjaDthbGlnbi1zZWxmOnN0cmV0Y2h9Lmp1c3RpZnktc3RhcnQtbHstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lmp1c3RpZnktZW5kLWx7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5qdXN0aWZ5LWNlbnRlci1sey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmp1c3RpZnktYmV0d2Vlbi1sey13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lmp1c3RpZnktYXJvdW5kLWx7LW1zLWZsZXgtcGFjazpkaXN0cmlidXRlO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9LmNvbnRlbnQtc3RhcnQtbHstbXMtZmxleC1saW5lLXBhY2s6c3RhcnQ7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS5jb250ZW50LWVuZC1sey1tcy1mbGV4LWxpbmUtcGFjazplbmQ7YWxpZ24tY29udGVudDpmbGV4LWVuZH0uY29udGVudC1jZW50ZXItbHstbXMtZmxleC1saW5lLXBhY2s6Y2VudGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5jb250ZW50LWJldHdlZW4tbHstbXMtZmxleC1saW5lLXBhY2s6anVzdGlmeTthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW59LmNvbnRlbnQtYXJvdW5kLWx7LW1zLWZsZXgtbGluZS1wYWNrOmRpc3RyaWJ1dGU7YWxpZ24tY29udGVudDpzcGFjZS1hcm91bmR9LmNvbnRlbnQtc3RyZXRjaC1sey1tcy1mbGV4LWxpbmUtcGFjazpzdHJldGNoO2FsaWduLWNvbnRlbnQ6c3RyZXRjaH0ub3JkZXItMC1sey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTstbXMtZmxleC1vcmRlcjowO29yZGVyOjB9Lm9yZGVyLTEtbHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjI7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfS5vcmRlci0yLWx7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDozOy1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn0ub3JkZXItMy1sey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NDstbXMtZmxleC1vcmRlcjozO29yZGVyOjN9Lm9yZGVyLTQtbHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjU7LW1zLWZsZXgtb3JkZXI6NDtvcmRlcjo0fS5vcmRlci01LWx7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo2Oy1tcy1mbGV4LW9yZGVyOjU7b3JkZXI6NX0ub3JkZXItNi1sey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NzstbXMtZmxleC1vcmRlcjo2O29yZGVyOjZ9Lm9yZGVyLTctbHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjg7LW1zLWZsZXgtb3JkZXI6NztvcmRlcjo3fS5vcmRlci04LWx7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo5Oy1tcy1mbGV4LW9yZGVyOjg7b3JkZXI6OH0ub3JkZXItbGFzdC1sey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MTAwMDAwOy1tcy1mbGV4LW9yZGVyOjk5OTk5O29yZGVyOjk5OTk5fS5mbC1se2Zsb2F0OmxlZnR9LmZsLWwsLmZyLWx7ZGlzcGxheTppbmxpbmV9LmZyLWx7ZmxvYXQ6cmlnaHR9LmZuLWx7ZmxvYXQ6bm9uZX0uaS1se2ZvbnQtc3R5bGU6aXRhbGljfS5mcy1ub3JtYWwtbHtmb250LXN0eWxlOm5vcm1hbH0ubm9ybWFsLWx7Zm9udC13ZWlnaHQ6NDAwfS5iLWx7Zm9udC13ZWlnaHQ6NzAwfS5mdzEtbHtmb250LXdlaWdodDoxMDB9LmZ3Mi1se2ZvbnQtd2VpZ2h0OjIwMH0uZnczLWx7Zm9udC13ZWlnaHQ6MzAwfS5mdzQtbHtmb250LXdlaWdodDo0MDB9LmZ3NS1se2ZvbnQtd2VpZ2h0OjUwMH0uZnc2LWx7Zm9udC13ZWlnaHQ6NjAwfS5mdzctbHtmb250LXdlaWdodDo3MDB9LmZ3OC1se2ZvbnQtd2VpZ2h0OjgwMH0uZnc5LWx7Zm9udC13ZWlnaHQ6OTAwfS5oMS1se2hlaWdodDoxcmVtfS5oMi1se2hlaWdodDoycmVtfS5oMy1se2hlaWdodDo0cmVtfS5oNC1se2hlaWdodDo4cmVtfS5oNS1se2hlaWdodDoxNnJlbX0uaC0yNS1se2hlaWdodDoyNSV9LmgtNTAtbHtoZWlnaHQ6NTAlfS5oLTc1LWx7aGVpZ2h0Ojc1JX0uaC0xMDAtbHtoZWlnaHQ6MTAwJX0ubWluLWgtMTAwLWx7bWluLWhlaWdodDoxMDAlfS52aC0yNS1se2hlaWdodDoyNXZofS52aC01MC1se2hlaWdodDo1MHZofS52aC03NS1se2hlaWdodDo3NXZofS52aC0xMDAtbHtoZWlnaHQ6MTAwdmh9Lm1pbi12aC0xMDAtbHttaW4taGVpZ2h0OjEwMHZofS5oLWF1dG8tbHtoZWlnaHQ6YXV0b30uaC1pbmhlcml0LWx7aGVpZ2h0OmluaGVyaXR9LnRyYWNrZWQtbHtsZXR0ZXItc3BhY2luZzouMWVtfS50cmFja2VkLXRpZ2h0LWx7bGV0dGVyLXNwYWNpbmc6LS4wNWVtfS50cmFja2VkLW1lZ2EtbHtsZXR0ZXItc3BhY2luZzouMjVlbX0ubGgtc29saWQtbHtsaW5lLWhlaWdodDoxfS5saC10aXRsZS1se2xpbmUtaGVpZ2h0OjEuMjV9LmxoLWNvcHktbHtsaW5lLWhlaWdodDoxLjV9Lm13LTEwMC1se21heC13aWR0aDoxMDAlfS5tdzEtbHttYXgtd2lkdGg6MXJlbX0ubXcyLWx7bWF4LXdpZHRoOjJyZW19Lm13My1se21heC13aWR0aDo0cmVtfS5tdzQtbHttYXgtd2lkdGg6OHJlbX0ubXc1LWx7bWF4LXdpZHRoOjE2cmVtfS5tdzYtbHttYXgtd2lkdGg6MzJyZW19Lm13Ny1se21heC13aWR0aDo0OHJlbX0ubXc4LWx7bWF4LXdpZHRoOjY0cmVtfS5tdzktbHttYXgtd2lkdGg6OTZyZW19Lm13LW5vbmUtbHttYXgtd2lkdGg6bm9uZX0udzEtbHt3aWR0aDoxcmVtfS53Mi1se3dpZHRoOjJyZW19LnczLWx7d2lkdGg6NHJlbX0udzQtbHt3aWR0aDo4cmVtfS53NS1se3dpZHRoOjE2cmVtfS53LTEwLWx7d2lkdGg6MTAlfS53LTIwLWx7d2lkdGg6MjAlfS53LTI1LWx7d2lkdGg6MjUlfS53LTMwLWx7d2lkdGg6MzAlfS53LTMzLWx7d2lkdGg6MzMlfS53LTM0LWx7d2lkdGg6MzQlfS53LTQwLWx7d2lkdGg6NDAlfS53LTUwLWx7d2lkdGg6NTAlfS53LTYwLWx7d2lkdGg6NjAlfS53LTcwLWx7d2lkdGg6NzAlfS53LTc1LWx7d2lkdGg6NzUlfS53LTgwLWx7d2lkdGg6ODAlfS53LTkwLWx7d2lkdGg6OTAlfS53LTEwMC1se3dpZHRoOjEwMCV9LnctdGhpcmQtbHt3aWR0aDozMy4zMzMzMyV9LnctdHdvLXRoaXJkcy1se3dpZHRoOjY2LjY2NjY3JX0udy1hdXRvLWx7d2lkdGg6YXV0b30ub3ZlcmZsb3ctdmlzaWJsZS1se292ZXJmbG93OnZpc2libGV9Lm92ZXJmbG93LWhpZGRlbi1se292ZXJmbG93OmhpZGRlbn0ub3ZlcmZsb3ctc2Nyb2xsLWx7b3ZlcmZsb3c6c2Nyb2xsfS5vdmVyZmxvdy1hdXRvLWx7b3ZlcmZsb3c6YXV0b30ub3ZlcmZsb3cteC12aXNpYmxlLWx7b3ZlcmZsb3cteDp2aXNpYmxlfS5vdmVyZmxvdy14LWhpZGRlbi1se292ZXJmbG93LXg6aGlkZGVufS5vdmVyZmxvdy14LXNjcm9sbC1se292ZXJmbG93LXg6c2Nyb2xsfS5vdmVyZmxvdy14LWF1dG8tbHtvdmVyZmxvdy14OmF1dG99Lm92ZXJmbG93LXktdmlzaWJsZS1se292ZXJmbG93LXk6dmlzaWJsZX0ub3ZlcmZsb3cteS1oaWRkZW4tbHtvdmVyZmxvdy15OmhpZGRlbn0ub3ZlcmZsb3cteS1zY3JvbGwtbHtvdmVyZmxvdy15OnNjcm9sbH0ub3ZlcmZsb3cteS1hdXRvLWx7b3ZlcmZsb3cteTphdXRvfS5zdGF0aWMtbHtwb3NpdGlvbjpzdGF0aWN9LnJlbGF0aXZlLWx7cG9zaXRpb246cmVsYXRpdmV9LmFic29sdXRlLWx7cG9zaXRpb246YWJzb2x1dGV9LmZpeGVkLWx7cG9zaXRpb246Zml4ZWR9LnJvdGF0ZS00NS1sey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnJvdGF0ZS05MC1sey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LnJvdGF0ZS0xMzUtbHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZyl9LnJvdGF0ZS0xODAtbHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnJvdGF0ZS0yMjUtbHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjI1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIyNWRlZyl9LnJvdGF0ZS0yNzAtbHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LnJvdGF0ZS0zMTUtbHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMxNWRlZyl9LnBhMC1se3BhZGRpbmc6MH0ucGExLWx7cGFkZGluZzouMjVyZW19LnBhMi1se3BhZGRpbmc6LjVyZW19LnBhMy1se3BhZGRpbmc6MXJlbX0ucGE0LWx7cGFkZGluZzoycmVtfS5wYTUtbHtwYWRkaW5nOjRyZW19LnBhNi1se3BhZGRpbmc6OHJlbX0ucGE3LWx7cGFkZGluZzoxNnJlbX0ucGwwLWx7cGFkZGluZy1sZWZ0OjB9LnBsMS1se3BhZGRpbmctbGVmdDouMjVyZW19LnBsMi1se3BhZGRpbmctbGVmdDouNXJlbX0ucGwzLWx7cGFkZGluZy1sZWZ0OjFyZW19LnBsNC1se3BhZGRpbmctbGVmdDoycmVtfS5wbDUtbHtwYWRkaW5nLWxlZnQ6NHJlbX0ucGw2LWx7cGFkZGluZy1sZWZ0OjhyZW19LnBsNy1se3BhZGRpbmctbGVmdDoxNnJlbX0ucHIwLWx7cGFkZGluZy1yaWdodDowfS5wcjEtbHtwYWRkaW5nLXJpZ2h0Oi4yNXJlbX0ucHIyLWx7cGFkZGluZy1yaWdodDouNXJlbX0ucHIzLWx7cGFkZGluZy1yaWdodDoxcmVtfS5wcjQtbHtwYWRkaW5nLXJpZ2h0OjJyZW19LnByNS1se3BhZGRpbmctcmlnaHQ6NHJlbX0ucHI2LWx7cGFkZGluZy1yaWdodDo4cmVtfS5wcjctbHtwYWRkaW5nLXJpZ2h0OjE2cmVtfS5wYjAtbHtwYWRkaW5nLWJvdHRvbTowfS5wYjEtbHtwYWRkaW5nLWJvdHRvbTouMjVyZW19LnBiMi1se3BhZGRpbmctYm90dG9tOi41cmVtfS5wYjMtbHtwYWRkaW5nLWJvdHRvbToxcmVtfS5wYjQtbHtwYWRkaW5nLWJvdHRvbToycmVtfS5wYjUtbHtwYWRkaW5nLWJvdHRvbTo0cmVtfS5wYjYtbHtwYWRkaW5nLWJvdHRvbTo4cmVtfS5wYjctbHtwYWRkaW5nLWJvdHRvbToxNnJlbX0ucHQwLWx7cGFkZGluZy10b3A6MH0ucHQxLWx7cGFkZGluZy10b3A6LjI1cmVtfS5wdDItbHtwYWRkaW5nLXRvcDouNXJlbX0ucHQzLWx7cGFkZGluZy10b3A6MXJlbX0ucHQ0LWx7cGFkZGluZy10b3A6MnJlbX0ucHQ1LWx7cGFkZGluZy10b3A6NHJlbX0ucHQ2LWx7cGFkZGluZy10b3A6OHJlbX0ucHQ3LWx7cGFkZGluZy10b3A6MTZyZW19LnB2MC1se3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0ucHYxLWx7cGFkZGluZy10b3A6LjI1cmVtO3BhZGRpbmctYm90dG9tOi4yNXJlbX0ucHYyLWx7cGFkZGluZy10b3A6LjVyZW07cGFkZGluZy1ib3R0b206LjVyZW19LnB2My1se3BhZGRpbmctdG9wOjFyZW07cGFkZGluZy1ib3R0b206MXJlbX0ucHY0LWx7cGFkZGluZy10b3A6MnJlbTtwYWRkaW5nLWJvdHRvbToycmVtfS5wdjUtbHtwYWRkaW5nLXRvcDo0cmVtO3BhZGRpbmctYm90dG9tOjRyZW19LnB2Ni1se3BhZGRpbmctdG9wOjhyZW07cGFkZGluZy1ib3R0b206OHJlbX0ucHY3LWx7cGFkZGluZy10b3A6MTZyZW07cGFkZGluZy1ib3R0b206MTZyZW19LnBoMC1se3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MH0ucGgxLWx7cGFkZGluZy1sZWZ0Oi4yNXJlbTtwYWRkaW5nLXJpZ2h0Oi4yNXJlbX0ucGgyLWx7cGFkZGluZy1sZWZ0Oi41cmVtO3BhZGRpbmctcmlnaHQ6LjVyZW19LnBoMy1se3BhZGRpbmctbGVmdDoxcmVtO3BhZGRpbmctcmlnaHQ6MXJlbX0ucGg0LWx7cGFkZGluZy1sZWZ0OjJyZW07cGFkZGluZy1yaWdodDoycmVtfS5waDUtbHtwYWRkaW5nLWxlZnQ6NHJlbTtwYWRkaW5nLXJpZ2h0OjRyZW19LnBoNi1se3BhZGRpbmctbGVmdDo4cmVtO3BhZGRpbmctcmlnaHQ6OHJlbX0ucGg3LWx7cGFkZGluZy1sZWZ0OjE2cmVtO3BhZGRpbmctcmlnaHQ6MTZyZW19Lm1hMC1se21hcmdpbjowfS5tYTEtbHttYXJnaW46LjI1cmVtfS5tYTItbHttYXJnaW46LjVyZW19Lm1hMy1se21hcmdpbjoxcmVtfS5tYTQtbHttYXJnaW46MnJlbX0ubWE1LWx7bWFyZ2luOjRyZW19Lm1hNi1se21hcmdpbjo4cmVtfS5tYTctbHttYXJnaW46MTZyZW19Lm1sMC1se21hcmdpbi1sZWZ0OjB9Lm1sMS1se21hcmdpbi1sZWZ0Oi4yNXJlbX0ubWwyLWx7bWFyZ2luLWxlZnQ6LjVyZW19Lm1sMy1se21hcmdpbi1sZWZ0OjFyZW19Lm1sNC1se21hcmdpbi1sZWZ0OjJyZW19Lm1sNS1se21hcmdpbi1sZWZ0OjRyZW19Lm1sNi1se21hcmdpbi1sZWZ0OjhyZW19Lm1sNy1se21hcmdpbi1sZWZ0OjE2cmVtfS5tcjAtbHttYXJnaW4tcmlnaHQ6MH0ubXIxLWx7bWFyZ2luLXJpZ2h0Oi4yNXJlbX0ubXIyLWx7bWFyZ2luLXJpZ2h0Oi41cmVtfS5tcjMtbHttYXJnaW4tcmlnaHQ6MXJlbX0ubXI0LWx7bWFyZ2luLXJpZ2h0OjJyZW19Lm1yNS1se21hcmdpbi1yaWdodDo0cmVtfS5tcjYtbHttYXJnaW4tcmlnaHQ6OHJlbX0ubXI3LWx7bWFyZ2luLXJpZ2h0OjE2cmVtfS5tYjAtbHttYXJnaW4tYm90dG9tOjB9Lm1iMS1se21hcmdpbi1ib3R0b206LjI1cmVtfS5tYjItbHttYXJnaW4tYm90dG9tOi41cmVtfS5tYjMtbHttYXJnaW4tYm90dG9tOjFyZW19Lm1iNC1se21hcmdpbi1ib3R0b206MnJlbX0ubWI1LWx7bWFyZ2luLWJvdHRvbTo0cmVtfS5tYjYtbHttYXJnaW4tYm90dG9tOjhyZW19Lm1iNy1se21hcmdpbi1ib3R0b206MTZyZW19Lm10MC1se21hcmdpbi10b3A6MH0ubXQxLWx7bWFyZ2luLXRvcDouMjVyZW19Lm10Mi1se21hcmdpbi10b3A6LjVyZW19Lm10My1se21hcmdpbi10b3A6MXJlbX0ubXQ0LWx7bWFyZ2luLXRvcDoycmVtfS5tdDUtbHttYXJnaW4tdG9wOjRyZW19Lm10Ni1se21hcmdpbi10b3A6OHJlbX0ubXQ3LWx7bWFyZ2luLXRvcDoxNnJlbX0ubXYwLWx7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0ubXYxLWx7bWFyZ2luLXRvcDouMjVyZW07bWFyZ2luLWJvdHRvbTouMjVyZW19Lm12Mi1se21hcmdpbi10b3A6LjVyZW07bWFyZ2luLWJvdHRvbTouNXJlbX0ubXYzLWx7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbX0ubXY0LWx7bWFyZ2luLXRvcDoycmVtO21hcmdpbi1ib3R0b206MnJlbX0ubXY1LWx7bWFyZ2luLXRvcDo0cmVtO21hcmdpbi1ib3R0b206NHJlbX0ubXY2LWx7bWFyZ2luLXRvcDo4cmVtO21hcmdpbi1ib3R0b206OHJlbX0ubXY3LWx7bWFyZ2luLXRvcDoxNnJlbTttYXJnaW4tYm90dG9tOjE2cmVtfS5taDAtbHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowfS5taDEtbHttYXJnaW4tbGVmdDouMjVyZW07bWFyZ2luLXJpZ2h0Oi4yNXJlbX0ubWgyLWx7bWFyZ2luLWxlZnQ6LjVyZW07bWFyZ2luLXJpZ2h0Oi41cmVtfS5taDMtbHttYXJnaW4tbGVmdDoxcmVtO21hcmdpbi1yaWdodDoxcmVtfS5taDQtbHttYXJnaW4tbGVmdDoycmVtO21hcmdpbi1yaWdodDoycmVtfS5taDUtbHttYXJnaW4tbGVmdDo0cmVtO21hcmdpbi1yaWdodDo0cmVtfS5taDYtbHttYXJnaW4tbGVmdDo4cmVtO21hcmdpbi1yaWdodDo4cmVtfS5taDctbHttYXJnaW4tbGVmdDoxNnJlbTttYXJnaW4tcmlnaHQ6MTZyZW19Lm5hMS1se21hcmdpbjotLjI1cmVtfS5uYTItbHttYXJnaW46LS41cmVtfS5uYTMtbHttYXJnaW46LTFyZW19Lm5hNC1se21hcmdpbjotMnJlbX0ubmE1LWx7bWFyZ2luOi00cmVtfS5uYTYtbHttYXJnaW46LThyZW19Lm5hNy1se21hcmdpbjotMTZyZW19Lm5sMS1se21hcmdpbi1sZWZ0Oi0uMjVyZW19Lm5sMi1se21hcmdpbi1sZWZ0Oi0uNXJlbX0ubmwzLWx7bWFyZ2luLWxlZnQ6LTFyZW19Lm5sNC1se21hcmdpbi1sZWZ0Oi0ycmVtfS5ubDUtbHttYXJnaW4tbGVmdDotNHJlbX0ubmw2LWx7bWFyZ2luLWxlZnQ6LThyZW19Lm5sNy1se21hcmdpbi1sZWZ0Oi0xNnJlbX0ubnIxLWx7bWFyZ2luLXJpZ2h0Oi0uMjVyZW19Lm5yMi1se21hcmdpbi1yaWdodDotLjVyZW19Lm5yMy1se21hcmdpbi1yaWdodDotMXJlbX0ubnI0LWx7bWFyZ2luLXJpZ2h0Oi0ycmVtfS5ucjUtbHttYXJnaW4tcmlnaHQ6LTRyZW19Lm5yNi1se21hcmdpbi1yaWdodDotOHJlbX0ubnI3LWx7bWFyZ2luLXJpZ2h0Oi0xNnJlbX0ubmIxLWx7bWFyZ2luLWJvdHRvbTotLjI1cmVtfS5uYjItbHttYXJnaW4tYm90dG9tOi0uNXJlbX0ubmIzLWx7bWFyZ2luLWJvdHRvbTotMXJlbX0ubmI0LWx7bWFyZ2luLWJvdHRvbTotMnJlbX0ubmI1LWx7bWFyZ2luLWJvdHRvbTotNHJlbX0ubmI2LWx7bWFyZ2luLWJvdHRvbTotOHJlbX0ubmI3LWx7bWFyZ2luLWJvdHRvbTotMTZyZW19Lm50MS1se21hcmdpbi10b3A6LS4yNXJlbX0ubnQyLWx7bWFyZ2luLXRvcDotLjVyZW19Lm50My1se21hcmdpbi10b3A6LTFyZW19Lm50NC1se21hcmdpbi10b3A6LTJyZW19Lm50NS1se21hcmdpbi10b3A6LTRyZW19Lm50Ni1se21hcmdpbi10b3A6LThyZW19Lm50Ny1se21hcmdpbi10b3A6LTE2cmVtfS5zdHJpa2UtbHt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdofS51bmRlcmxpbmUtbHt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5uby11bmRlcmxpbmUtbHt0ZXh0LWRlY29yYXRpb246bm9uZX0udGwtbHt0ZXh0LWFsaWduOmxlZnR9LnRyLWx7dGV4dC1hbGlnbjpyaWdodH0udGMtbHt0ZXh0LWFsaWduOmNlbnRlcn0udHRjLWx7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0udHRsLWx7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfS50dHUtbHt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnR0bi1se3RleHQtdHJhbnNmb3JtOm5vbmV9LmYtNi1sLC5mLWhlYWRsaW5lLWx7Zm9udC1zaXplOjZyZW19LmYtNS1sLC5mLXN1YmhlYWRsaW5lLWx7Zm9udC1zaXplOjVyZW19LmYxLWx7Zm9udC1zaXplOjNyZW19LmYyLWx7Zm9udC1zaXplOjIuMjVyZW19LmYzLWx7Zm9udC1zaXplOjEuNXJlbX0uZjQtbHtmb250LXNpemU6MS4yNXJlbX0uZjUtbHtmb250LXNpemU6MXJlbX0uZjYtbHtmb250LXNpemU6Ljg3NXJlbX0ubWVhc3VyZS1se21heC13aWR0aDozMGVtfS5tZWFzdXJlLXdpZGUtbHttYXgtd2lkdGg6MzRlbX0ubWVhc3VyZS1uYXJyb3ctbHttYXgtd2lkdGg6MjBlbX0uaW5kZW50LWx7dGV4dC1pbmRlbnQ6MWVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNtYWxsLWNhcHMtbHtmb250LXZhcmlhbnQ6c21hbGwtY2Fwc30udHJ1bmNhdGUtbHt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LmNsaXAtbHtwb3NpdGlvbjpmaXhlZCFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O2NsaXA6cmVjdCgxcHggMXB4IDFweCAxcHgpO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpfS53cy1ub3JtYWwtbHt3aGl0ZS1zcGFjZTpub3JtYWx9Lm5vd3JhcC1se3doaXRlLXNwYWNlOm5vd3JhcH0ucHJlLWx7d2hpdGUtc3BhY2U6cHJlfS52LWJhc2UtbHt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX0udi1taWQtbHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnYtdG9wLWx7dmVydGljYWwtYWxpZ246dG9wfS52LWJ0bS1se3ZlcnRpY2FsLWFsaWduOmJvdHRvbX19XCIpIHx8IHRydWUpICYmIFwiX2ZkYzRjMWU2XCIpXG5cbmNvbnN0IHN0YXRlID0ge1xuICBzdWJzY3JpcHRpb25zOiBbXSxcbiAgbWVzc2FnZXM6IFtdXG59XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LlVSTClcbmNvbnN0IGNsaWVudCA9IG5ldyBuZXMuQ2xpZW50KGRvY3VtZW50LlVSTC5yZXBsYWNlKCdodHRwJywgJ3dzJykpXG5jbGllbnQuY29ubmVjdChmdW5jdGlvbiAoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICBhbGVydCgnZXJyb3JlZCcpXG4gICAgcmV0dXJuXG4gIH1cbn0pXG5cbmNvbnN0IGVsID0gcGFnZSgpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG5mdW5jdGlvbiBwdWJsaXNoRm9ybSAoKSB7XG4gIHJldHVybiB5b2BcbiAgICA8ZGl2IGNsYXNzPVwiZmwgcGEyIHctMTAwLW0gdy01MC1uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhMiBvdXRsaW5lIHctMTAwIGgtNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsIHctMTAwLW0gdy01MC1uc1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZsIHctMzBcIj5Ub3BpYzo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZsIHctNjBcIiB0eXBlPVwidGV4dFwiIGlkPVwicHViVG9waWNcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmwgdy0xMDAtbSB3LTUwLW5zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmwgdi10b3Agdy0zMFwiPlBheWxvYWQ6PC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmbCB3LTYwXCIgaWQ9XCJwdWJQYXlsb2FkXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGNsYXNzPVwiZjYgZGltIGJyMyBwaDMgcHYyIG1iMiBkaWIgd2hpdGUgYmctbWlkLWdyYXkgbXYyXCIgb25jbGljaz0ke29uY2xpY2t9PlB1Ymxpc2g8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuXG4gIGZ1bmN0aW9uIG9uY2xpY2sgKCkge1xuICAgIGNvbnN0IHRvcGljID0gJy8nICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YlRvcGljJykudmFsdWVcbiAgICBjb25zdCBwYXlsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1YlBheWxvYWQnKS52YWx1ZVxuXG4gICAgY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgcGF0aDogJy9wdWJsaXNoJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB0b3BpYyxcbiAgICAgICAgcGF5bG9hZFxuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ3B1Ymxpc2ggc3VjY2Vzc2Z1bCcpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJzY3JpcHRpb25zICgpIHtcbiAgcmV0dXJuIHlvYFxuICAgIDx1bCBjbGFzcz1cImxpc3QgcGwwXCI+XG4gICAgICAke3N0YXRlLnN1YnNjcmlwdGlvbnMubWFwKChzdWIpID0+IHlvYDxsaT4ke3N1Yn08L2xpPmApfVxuICAgIDwvdWw+XG4gIGBcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlRm9ybSAoKSB7XG4gIHJldHVybiB5b2BcbiAgICA8ZGl2IGNsYXNzPVwiZmwgcGEyIHctMTAwLW0gdy01MC1uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsIHBhMiBvdXRsaW5lIHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbCB3LTEwMC1tIHctNTAtbnNcIj5cbiAgICAgICAgICA8bGFiZWwgPlRvcGljOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwic3ViVG9waWNcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICA8YSBjbGFzcz1cImY2IGRpbSBicjMgcGgzIHB2MiBtYjIgZGliIHdoaXRlIGJnLW1pZC1ncmF5XCIgb25jbGljaz0ke29uY2xpY2t9PlN1YnNjcmliZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbCB3LTEwMC1tIHctNTAtbnNcIj5cbiAgICAgICAgICA8Yj5DdXJyZW50IFN1YnNjcmlwdGlvbnM8L2I+XG4gICAgICAgICAgJHtzdWJzY3JpcHRpb25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcblxuICBmdW5jdGlvbiBvbmNsaWNrICgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViVG9waWNcIilcbiAgICBjb25zdCB0b3BpYyA9IGAvJHtlbC52YWx1ZX1gXG4gICAgaWYgKHN0YXRlLnN1YnNjcmlwdGlvbnMuaW5kZXhPZih0b3BpYykgPj0gMCkge1xuICAgICAgYWxlcnQoJ3RvcGljIGFscmVhZHkgYWRkZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xpZW50LnN1YnNjcmliZSh0b3BpYywgb25NZXNzYWdlLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgICAgc3RhdGUuc3Vic2NyaXB0aW9ucy5wdXNoKHRvcGljKVxuICAgICAgdXBkYXRlKClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25NZXNzYWdlIChwYXlsb2FkKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQgbWVzc2FnZScsIHRvcGljLCBwYXlsb2FkKVxuICAgICAgc3RhdGUubWVzc2FnZXMucHVzaCh7IHRvcGljLCBwYXlsb2FkIH0pXG4gICAgICB1cGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0ICgpIHtcbiAgcmV0dXJuIHlvYFxuICAgIDxkaXYgY2xhc3M9XCJmbCB3LTEwMCBwYTJcIj5cbiAgICAgIDxoMz5SZWNlaXZlZCBNZXNzYWdlczwvaDM+XG4gICAgICA8dWwgY2xhc3M9XCJsaXN0IHBsMFwiPlxuICAgICAgICAke3N0YXRlLm1lc3NhZ2VzLm1hcCgobXNnKSA9PiB5b2BcbiAgICAgICAgICA8bGkgY2xhc3M9XCJvdXRsaW5lIHBhMiBtdjJcIj5cbiAgICAgICAgICAgIDxiPiR7bXNnLnRvcGljfTwvYj4gLSAke0pTT04uc3RyaW5naWZ5KG1zZy5wYXlsb2FkKX1cbiAgICAgICAgICA8L2xpPmApfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYFxufVxuXG5mdW5jdGlvbiBwYWdlICgpIHtcbiAgcmV0dXJuIHlvYFxuPGRpdiBjbGFzcz1cInBhNCBtYTMgZmwgdy0xMDBcIj5cbiAgJHtwdWJsaXNoRm9ybSgpfVxuICAke3N1YnNjcmliZUZvcm0oKX1cbiAgJHtsaXN0KCl9XG48L2Rpdj5gXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIHlvLnVwZGF0ZShlbCwgcGFnZSgpKVxufVxuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnZ2xvYmFsL2RvY3VtZW50JylcbnZhciBoeXBlcnggPSByZXF1aXJlKCdoeXBlcngnKVxudmFyIG9ubG9hZCA9IHJlcXVpcmUoJ29uLWxvYWQnKVxuXG52YXIgU1ZHTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG52YXIgWExJTktOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuXG52YXIgQk9PTF9QUk9QUyA9IHtcbiAgYXV0b2ZvY3VzOiAxLFxuICBjaGVja2VkOiAxLFxuICBkZWZhdWx0Y2hlY2tlZDogMSxcbiAgZGlzYWJsZWQ6IDEsXG4gIGZvcm1ub3ZhbGlkYXRlOiAxLFxuICBpbmRldGVybWluYXRlOiAxLFxuICByZWFkb25seTogMSxcbiAgcmVxdWlyZWQ6IDEsXG4gIHNlbGVjdGVkOiAxLFxuICB3aWxsdmFsaWRhdGU6IDFcbn1cbnZhciBTVkdfVEFHUyA9IFtcbiAgJ3N2ZycsXG4gICdhbHRHbHlwaCcsICdhbHRHbHlwaERlZicsICdhbHRHbHlwaEl0ZW0nLCAnYW5pbWF0ZScsICdhbmltYXRlQ29sb3InLFxuICAnYW5pbWF0ZU1vdGlvbicsICdhbmltYXRlVHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwUGF0aCcsICdjb2xvci1wcm9maWxlJyxcbiAgJ2N1cnNvcicsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLFxuICAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcbiAgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJyxcbiAgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLFxuICAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxuICAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZScsICdmaWx0ZXInLCAnZm9udCcsICdmb250LWZhY2UnLFxuICAnZm9udC1mYWNlLWZvcm1hdCcsICdmb250LWZhY2UtbmFtZScsICdmb250LWZhY2Utc3JjJywgJ2ZvbnQtZmFjZS11cmknLFxuICAnZm9yZWlnbk9iamVjdCcsICdnJywgJ2dseXBoJywgJ2dseXBoUmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLFxuICAnbGluZWFyR3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbWlzc2luZy1nbHlwaCcsICdtcGF0aCcsXG4gICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JyxcbiAgJ3NldCcsICdzdG9wJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0UGF0aCcsICd0aXRsZScsICd0cmVmJyxcbiAgJ3RzcGFuJywgJ3VzZScsICd2aWV3JywgJ3ZrZXJuJ1xuXVxuXG5mdW5jdGlvbiBiZWxDcmVhdGVFbGVtZW50ICh0YWcsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgZWxcblxuICAvLyBJZiBhbiBzdmcgdGFnLCBpdCBuZWVkcyBhIG5hbWVzcGFjZVxuICBpZiAoU1ZHX1RBR1MuaW5kZXhPZih0YWcpICE9PSAtMSkge1xuICAgIHByb3BzLm5hbWVzcGFjZSA9IFNWR05TXG4gIH1cblxuICAvLyBJZiB3ZSBhcmUgdXNpbmcgYSBuYW1lc3BhY2VcbiAgdmFyIG5zID0gZmFsc2VcbiAgaWYgKHByb3BzLm5hbWVzcGFjZSkge1xuICAgIG5zID0gcHJvcHMubmFtZXNwYWNlXG4gICAgZGVsZXRlIHByb3BzLm5hbWVzcGFjZVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBlbGVtZW50XG4gIGlmIChucykge1xuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpXG4gIH0gZWxzZSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgfVxuXG4gIC8vIElmIGFkZGluZyBvbmxvYWQgZXZlbnRzXG4gIGlmIChwcm9wcy5vbmxvYWQgfHwgcHJvcHMub251bmxvYWQpIHtcbiAgICB2YXIgbG9hZCA9IHByb3BzLm9ubG9hZCB8fCBmdW5jdGlvbiAoKSB7fVxuICAgIHZhciB1bmxvYWQgPSBwcm9wcy5vbnVubG9hZCB8fCBmdW5jdGlvbiAoKSB7fVxuICAgIG9ubG9hZChlbCwgZnVuY3Rpb24gYmVsT25sb2FkICgpIHtcbiAgICAgIGxvYWQoZWwpXG4gICAgfSwgZnVuY3Rpb24gYmVsT251bmxvYWQgKCkge1xuICAgICAgdW5sb2FkKGVsKVxuICAgIH0sXG4gICAgLy8gV2UgaGF2ZSB0byB1c2Ugbm9uLXN0YW5kYXJkIGBjYWxsZXJgIHRvIGZpbmQgd2hvIGludm9rZXMgYGJlbENyZWF0ZUVsZW1lbnRgXG4gICAgYmVsQ3JlYXRlRWxlbWVudC5jYWxsZXIuY2FsbGVyLmNhbGxlcilcbiAgICBkZWxldGUgcHJvcHMub25sb2FkXG4gICAgZGVsZXRlIHByb3BzLm9udW5sb2FkXG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHByb3BlcnRpZXNcbiAgZm9yICh2YXIgcCBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgdmFyIGtleSA9IHAudG9Mb3dlckNhc2UoKVxuICAgICAgdmFyIHZhbCA9IHByb3BzW3BdXG4gICAgICAvLyBOb3JtYWxpemUgY2xhc3NOYW1lXG4gICAgICBpZiAoa2V5ID09PSAnY2xhc3NuYW1lJykge1xuICAgICAgICBrZXkgPSAnY2xhc3MnXG4gICAgICAgIHAgPSAnY2xhc3MnXG4gICAgICB9XG4gICAgICAvLyBUaGUgZm9yIGF0dHJpYnV0ZSBnZXRzIHRyYW5zZm9ybWVkIHRvIGh0bWxGb3IsIGJ1dCB3ZSBqdXN0IHNldCBhcyBmb3JcbiAgICAgIGlmIChwID09PSAnaHRtbEZvcicpIHtcbiAgICAgICAgcCA9ICdmb3InXG4gICAgICB9XG4gICAgICAvLyBJZiBhIHByb3BlcnR5IGlzIGJvb2xlYW4sIHNldCBpdHNlbGYgdG8gdGhlIGtleVxuICAgICAgaWYgKEJPT0xfUFJPUFNba2V5XSkge1xuICAgICAgICBpZiAodmFsID09PSAndHJ1ZScpIHZhbCA9IGtleVxuICAgICAgICBlbHNlIGlmICh2YWwgPT09ICdmYWxzZScpIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICAvLyBJZiBhIHByb3BlcnR5IHByZWZlcnMgYmVpbmcgc2V0IGRpcmVjdGx5IHZzIHNldEF0dHJpYnV0ZVxuICAgICAgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gJ29uJykge1xuICAgICAgICBlbFtwXSA9IHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgaWYgKHAgPT09ICd4bGluazpocmVmJykge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlTlMoWExJTktOUywgcCwgdmFsKVxuICAgICAgICAgIH0gZWxzZSBpZiAoL154bWxucygkfDopL2kudGVzdChwKSkge1xuICAgICAgICAgICAgLy8gc2tpcCB4bWxucyBkZWZpbml0aW9uc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBwLCB2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShwLCB2YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRDaGlsZCAoY2hpbGRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcykpIHJldHVyblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbm9kZSA9IGNoaWxkc1tpXVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2Ygbm9kZSA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgbm9kZSA9IG5vZGUudG9TdHJpbmcoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChlbC5sYXN0Q2hpbGQgJiYgZWwubGFzdENoaWxkLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgICAgICAgZWwubGFzdENoaWxkLm5vZGVWYWx1ZSArPSBub2RlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlVHlwZSkge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHBlbmRDaGlsZChjaGlsZHJlbilcblxuICByZXR1cm4gZWxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBlcngoYmVsQ3JlYXRlRWxlbWVudClcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGJlbENyZWF0ZUVsZW1lbnRcbiIsIiIsInZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG4iLCJpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNlbGY7XG59IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge307XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGF0dHJpYnV0ZVRvUHJvcGVydHlcblxudmFyIHRyYW5zZm9ybSA9IHtcbiAgJ2NsYXNzJzogJ2NsYXNzTmFtZScsXG4gICdmb3InOiAnaHRtbEZvcicsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdidcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlVG9Qcm9wZXJ0eSAoaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJzLCBjaGlsZHJlbikge1xuICAgIGZvciAodmFyIGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRyIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBhdHRyc1t0cmFuc2Zvcm1bYXR0cl1dID0gYXR0cnNbYXR0cl1cbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoKHRhZ05hbWUsIGF0dHJzLCBjaGlsZHJlbilcbiAgfVxufVxuIiwidmFyIGF0dHJUb1Byb3AgPSByZXF1aXJlKCdoeXBlcnNjcmlwdC1hdHRyaWJ1dGUtdG8tcHJvcGVydHknKVxuXG52YXIgVkFSID0gMCwgVEVYVCA9IDEsIE9QRU4gPSAyLCBDTE9TRSA9IDMsIEFUVFIgPSA0XG52YXIgQVRUUl9LRVkgPSA1LCBBVFRSX0tFWV9XID0gNlxudmFyIEFUVFJfVkFMVUVfVyA9IDcsIEFUVFJfVkFMVUUgPSA4XG52YXIgQVRUUl9WQUxVRV9TUSA9IDksIEFUVFJfVkFMVUVfRFEgPSAxMFxudmFyIEFUVFJfRVEgPSAxMSwgQVRUUl9CUkVBSyA9IDEyXG52YXIgQ09NTUVOVCA9IDEzXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGgsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cbiAgdmFyIGNvbmNhdCA9IG9wdHMuY29uY2F0IHx8IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxuICB9XG4gIGlmIChvcHRzLmF0dHJUb1Byb3AgIT09IGZhbHNlKSB7XG4gICAgaCA9IGF0dHJUb1Byb3AoaClcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5ncykge1xuICAgIHZhciBzdGF0ZSA9IFRFWFQsIHJlZyA9ICcnXG4gICAgdmFyIGFyZ2xlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICB2YXIgcGFydHMgPSBbXVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA8IGFyZ2xlbiAtIDEpIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpKzFdXG4gICAgICAgIHZhciBwID0gcGFyc2Uoc3RyaW5nc1tpXSlcbiAgICAgICAgdmFyIHhzdGF0ZSA9IHN0YXRlXG4gICAgICAgIGlmICh4c3RhdGUgPT09IEFUVFJfVkFMVUVfRFEpIHhzdGF0ZSA9IEFUVFJfVkFMVUVcbiAgICAgICAgaWYgKHhzdGF0ZSA9PT0gQVRUUl9WQUxVRV9TUSkgeHN0YXRlID0gQVRUUl9WQUxVRVxuICAgICAgICBpZiAoeHN0YXRlID09PSBBVFRSX1ZBTFVFX1cpIHhzdGF0ZSA9IEFUVFJfVkFMVUVcbiAgICAgICAgaWYgKHhzdGF0ZSA9PT0gQVRUUikgeHN0YXRlID0gQVRUUl9LRVlcbiAgICAgICAgcC5wdXNoKFsgVkFSLCB4c3RhdGUsIGFyZyBdKVxuICAgICAgICBwYXJ0cy5wdXNoLmFwcGx5KHBhcnRzLCBwKVxuICAgICAgfSBlbHNlIHBhcnRzLnB1c2guYXBwbHkocGFydHMsIHBhcnNlKHN0cmluZ3NbaV0pKVxuICAgIH1cblxuICAgIHZhciB0cmVlID0gW251bGwse30sW11dXG4gICAgdmFyIHN0YWNrID0gW1t0cmVlLC0xXV1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VyID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdWzBdXG4gICAgICB2YXIgcCA9IHBhcnRzW2ldLCBzID0gcFswXVxuICAgICAgaWYgKHMgPT09IE9QRU4gJiYgL15cXC8vLnRlc3QocFsxXSkpIHtcbiAgICAgICAgdmFyIGl4ID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdWzFdXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhY2sucG9wKClcbiAgICAgICAgICBzdGFja1tzdGFjay5sZW5ndGgtMV1bMF1bMl1baXhdID0gaChcbiAgICAgICAgICAgIGN1clswXSwgY3VyWzFdLCBjdXJbMl0ubGVuZ3RoID8gY3VyWzJdIDogdW5kZWZpbmVkXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHMgPT09IE9QRU4pIHtcbiAgICAgICAgdmFyIGMgPSBbcFsxXSx7fSxbXV1cbiAgICAgICAgY3VyWzJdLnB1c2goYylcbiAgICAgICAgc3RhY2sucHVzaChbYyxjdXJbMl0ubGVuZ3RoLTFdKVxuICAgICAgfSBlbHNlIGlmIChzID09PSBBVFRSX0tFWSB8fCAocyA9PT0gVkFSICYmIHBbMV0gPT09IEFUVFJfS0VZKSkge1xuICAgICAgICB2YXIga2V5ID0gJydcbiAgICAgICAgdmFyIGNvcHlLZXlcbiAgICAgICAgZm9yICg7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gQVRUUl9LRVkpIHtcbiAgICAgICAgICAgIGtleSA9IGNvbmNhdChrZXksIHBhcnRzW2ldWzFdKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV1bMF0gPT09IFZBUiAmJiBwYXJ0c1tpXVsxXSA9PT0gQVRUUl9LRVkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFydHNbaV1bMl0gPT09ICdvYmplY3QnICYmICFrZXkpIHtcbiAgICAgICAgICAgICAgZm9yIChjb3B5S2V5IGluIHBhcnRzW2ldWzJdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldWzJdLmhhc093blByb3BlcnR5KGNvcHlLZXkpICYmICFjdXJbMV1bY29weUtleV0pIHtcbiAgICAgICAgICAgICAgICAgIGN1clsxXVtjb3B5S2V5XSA9IHBhcnRzW2ldWzJdW2NvcHlLZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXkgPSBjb25jYXQoa2V5LCBwYXJ0c1tpXVsyXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydHNbaV1bMF0gPT09IEFUVFJfRVEpIGkrK1xuICAgICAgICB2YXIgaiA9IGlcbiAgICAgICAgZm9yICg7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gQVRUUl9WQUxVRSB8fCBwYXJ0c1tpXVswXSA9PT0gQVRUUl9LRVkpIHtcbiAgICAgICAgICAgIGlmICghY3VyWzFdW2tleV0pIGN1clsxXVtrZXldID0gc3RyZm4ocGFydHNbaV1bMV0pXG4gICAgICAgICAgICBlbHNlIGN1clsxXVtrZXldID0gY29uY2F0KGN1clsxXVtrZXldLCBwYXJ0c1tpXVsxXSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldWzBdID09PSBWQVJcbiAgICAgICAgICAmJiAocGFydHNbaV1bMV0gPT09IEFUVFJfVkFMVUUgfHwgcGFydHNbaV1bMV0gPT09IEFUVFJfS0VZKSkge1xuICAgICAgICAgICAgaWYgKCFjdXJbMV1ba2V5XSkgY3VyWzFdW2tleV0gPSBzdHJmbihwYXJ0c1tpXVsyXSlcbiAgICAgICAgICAgIGVsc2UgY3VyWzFdW2tleV0gPSBjb25jYXQoY3VyWzFdW2tleV0sIHBhcnRzW2ldWzJdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCAmJiAhY3VyWzFdW2tleV0gJiYgaSA9PT0galxuICAgICAgICAgICAgJiYgKHBhcnRzW2ldWzBdID09PSBDTE9TRSB8fCBwYXJ0c1tpXVswXSA9PT0gQVRUUl9CUkVBSykpIHtcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNib29sZWFuLWF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgLy8gZW1wdHkgc3RyaW5nIGlzIGZhbHN5LCBub3Qgd2VsbCBiZWhhdmVkIHZhbHVlIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgY3VyWzFdW2tleV0gPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocyA9PT0gQVRUUl9LRVkpIHtcbiAgICAgICAgY3VyWzFdW3BbMV1dID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChzID09PSBWQVIgJiYgcFsxXSA9PT0gQVRUUl9LRVkpIHtcbiAgICAgICAgY3VyWzFdW3BbMl1dID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChzID09PSBDTE9TRSkge1xuICAgICAgICBpZiAoc2VsZkNsb3NpbmcoY3VyWzBdKSAmJiBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaXggPSBzdGFja1tzdGFjay5sZW5ndGgtMV1bMV1cbiAgICAgICAgICBzdGFjay5wb3AoKVxuICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aC0xXVswXVsyXVtpeF0gPSBoKFxuICAgICAgICAgICAgY3VyWzBdLCBjdXJbMV0sIGN1clsyXS5sZW5ndGggPyBjdXJbMl0gOiB1bmRlZmluZWRcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocyA9PT0gVkFSICYmIHBbMV0gPT09IFRFWFQpIHtcbiAgICAgICAgaWYgKHBbMl0gPT09IHVuZGVmaW5lZCB8fCBwWzJdID09PSBudWxsKSBwWzJdID0gJydcbiAgICAgICAgZWxzZSBpZiAoIXBbMl0pIHBbMl0gPSBjb25jYXQoJycsIHBbMl0pXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBbMl1bMF0pKSB7XG4gICAgICAgICAgY3VyWzJdLnB1c2guYXBwbHkoY3VyWzJdLCBwWzJdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1clsyXS5wdXNoKHBbMl0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocyA9PT0gVEVYVCkge1xuICAgICAgICBjdXJbMl0ucHVzaChwWzFdKVxuICAgICAgfSBlbHNlIGlmIChzID09PSBBVFRSX0VRIHx8IHMgPT09IEFUVFJfQlJFQUspIHtcbiAgICAgICAgLy8gbm8tb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5oYW5kbGVkOiAnICsgcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJlZVsyXS5sZW5ndGggPiAxICYmIC9eXFxzKiQvLnRlc3QodHJlZVsyXVswXSkpIHtcbiAgICAgIHRyZWVbMl0uc2hpZnQoKVxuICAgIH1cblxuICAgIGlmICh0cmVlWzJdLmxlbmd0aCA+IDJcbiAgICB8fCAodHJlZVsyXS5sZW5ndGggPT09IDIgJiYgL1xcUy8udGVzdCh0cmVlWzJdWzFdKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ211bHRpcGxlIHJvb3QgZWxlbWVudHMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIGVuY2xvc2luZyB0YWcnXG4gICAgICApXG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRyZWVbMl1bMF0pICYmIHR5cGVvZiB0cmVlWzJdWzBdWzBdID09PSAnc3RyaW5nJ1xuICAgICYmIEFycmF5LmlzQXJyYXkodHJlZVsyXVswXVsyXSkpIHtcbiAgICAgIHRyZWVbMl1bMF0gPSBoKHRyZWVbMl1bMF1bMF0sIHRyZWVbMl1bMF1bMV0sIHRyZWVbMl1bMF1bMl0pXG4gICAgfVxuICAgIHJldHVybiB0cmVlWzJdWzBdXG5cbiAgICBmdW5jdGlvbiBwYXJzZSAoc3RyKSB7XG4gICAgICB2YXIgcmVzID0gW11cbiAgICAgIGlmIChzdGF0ZSA9PT0gQVRUUl9WQUxVRV9XKSBzdGF0ZSA9IEFUVFJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKVxuICAgICAgICBpZiAoc3RhdGUgPT09IFRFWFQgJiYgYyA9PT0gJzwnKSB7XG4gICAgICAgICAgaWYgKHJlZy5sZW5ndGgpIHJlcy5wdXNoKFtURVhULCByZWddKVxuICAgICAgICAgIHJlZyA9ICcnXG4gICAgICAgICAgc3RhdGUgPSBPUEVOXG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nICYmICFxdW90KHN0YXRlKSAmJiBzdGF0ZSAhPT0gQ09NTUVOVCkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gT1BFTikge1xuICAgICAgICAgICAgcmVzLnB1c2goW09QRU4scmVnXSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX0tFWSkge1xuICAgICAgICAgICAgcmVzLnB1c2goW0FUVFJfS0VZLHJlZ10pXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUl9WQUxVRSAmJiByZWcubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXMucHVzaChbQVRUUl9WQUxVRSxyZWddKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXMucHVzaChbQ0xPU0VdKVxuICAgICAgICAgIHJlZyA9ICcnXG4gICAgICAgICAgc3RhdGUgPSBURVhUXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IENPTU1FTlQgJiYgLy0kLy50ZXN0KHJlZykgJiYgYyA9PT0gJy0nKSB7XG4gICAgICAgICAgaWYgKG9wdHMuY29tbWVudHMpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX1ZBTFVFLHJlZy5zdWJzdHIoMCwgcmVnLmxlbmd0aCAtIDEpXSxbQ0xPU0VdKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWcgPSAnJ1xuICAgICAgICAgIHN0YXRlID0gVEVYVFxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBPUEVOICYmIC9eIS0tJC8udGVzdChyZWcpKSB7XG4gICAgICAgICAgaWYgKG9wdHMuY29tbWVudHMpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKFtPUEVOLCByZWddLFtBVFRSX0tFWSwnY29tbWVudCddLFtBVFRSX0VRXSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVnID0gY1xuICAgICAgICAgIHN0YXRlID0gQ09NTUVOVFxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBURVhUIHx8IHN0YXRlID09PSBDT01NRU5UKSB7XG4gICAgICAgICAgcmVnICs9IGNcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gT1BFTiAmJiAvXFxzLy50ZXN0KGMpKSB7XG4gICAgICAgICAgcmVzLnB1c2goW09QRU4sIHJlZ10pXG4gICAgICAgICAgcmVnID0gJydcbiAgICAgICAgICBzdGF0ZSA9IEFUVFJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gT1BFTikge1xuICAgICAgICAgIHJlZyArPSBjXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFIgJiYgL1teXFxzXCInPS9dLy50ZXN0KGMpKSB7XG4gICAgICAgICAgc3RhdGUgPSBBVFRSX0tFWVxuICAgICAgICAgIHJlZyA9IGNcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUiAmJiAvXFxzLy50ZXN0KGMpKSB7XG4gICAgICAgICAgaWYgKHJlZy5sZW5ndGgpIHJlcy5wdXNoKFtBVFRSX0tFWSxyZWddKVxuICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX0JSRUFLXSlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUl9LRVkgJiYgL1xccy8udGVzdChjKSkge1xuICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX0tFWSxyZWddKVxuICAgICAgICAgIHJlZyA9ICcnXG4gICAgICAgICAgc3RhdGUgPSBBVFRSX0tFWV9XXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFJfS0VZICYmIGMgPT09ICc9Jykge1xuICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX0tFWSxyZWddLFtBVFRSX0VRXSlcbiAgICAgICAgICByZWcgPSAnJ1xuICAgICAgICAgIHN0YXRlID0gQVRUUl9WQUxVRV9XXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFJfS0VZKSB7XG4gICAgICAgICAgcmVnICs9IGNcbiAgICAgICAgfSBlbHNlIGlmICgoc3RhdGUgPT09IEFUVFJfS0VZX1cgfHwgc3RhdGUgPT09IEFUVFIpICYmIGMgPT09ICc9Jykge1xuICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX0VRXSlcbiAgICAgICAgICBzdGF0ZSA9IEFUVFJfVkFMVUVfV1xuICAgICAgICB9IGVsc2UgaWYgKChzdGF0ZSA9PT0gQVRUUl9LRVlfVyB8fCBzdGF0ZSA9PT0gQVRUUikgJiYgIS9cXHMvLnRlc3QoYykpIHtcbiAgICAgICAgICByZXMucHVzaChbQVRUUl9CUkVBS10pXG4gICAgICAgICAgaWYgKC9bXFx3LV0vLnRlc3QoYykpIHtcbiAgICAgICAgICAgIHJlZyArPSBjXG4gICAgICAgICAgICBzdGF0ZSA9IEFUVFJfS0VZXG4gICAgICAgICAgfSBlbHNlIHN0YXRlID0gQVRUUlxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX1ZBTFVFX1cgJiYgYyA9PT0gJ1wiJykge1xuICAgICAgICAgIHN0YXRlID0gQVRUUl9WQUxVRV9EUVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX1ZBTFVFX1cgJiYgYyA9PT0gXCInXCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEFUVFJfVkFMVUVfU1FcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUl9WQUxVRV9EUSAmJiBjID09PSAnXCInKSB7XG4gICAgICAgICAgcmVzLnB1c2goW0FUVFJfVkFMVUUscmVnXSxbQVRUUl9CUkVBS10pXG4gICAgICAgICAgcmVnID0gJydcbiAgICAgICAgICBzdGF0ZSA9IEFUVFJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUl9WQUxVRV9TUSAmJiBjID09PSBcIidcIikge1xuICAgICAgICAgIHJlcy5wdXNoKFtBVFRSX1ZBTFVFLHJlZ10sW0FUVFJfQlJFQUtdKVxuICAgICAgICAgIHJlZyA9ICcnXG4gICAgICAgICAgc3RhdGUgPSBBVFRSXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFJfVkFMVUVfVyAmJiAhL1xccy8udGVzdChjKSkge1xuICAgICAgICAgIHN0YXRlID0gQVRUUl9WQUxVRVxuICAgICAgICAgIGktLVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX1ZBTFVFICYmIC9cXHMvLnRlc3QoYykpIHtcbiAgICAgICAgICByZXMucHVzaChbQVRUUl9WQUxVRSxyZWddLFtBVFRSX0JSRUFLXSlcbiAgICAgICAgICByZWcgPSAnJ1xuICAgICAgICAgIHN0YXRlID0gQVRUUlxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX1ZBTFVFIHx8IHN0YXRlID09PSBBVFRSX1ZBTFVFX1NRXG4gICAgICAgIHx8IHN0YXRlID09PSBBVFRSX1ZBTFVFX0RRKSB7XG4gICAgICAgICAgcmVnICs9IGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN0YXRlID09PSBURVhUICYmIHJlZy5sZW5ndGgpIHtcbiAgICAgICAgcmVzLnB1c2goW1RFWFQscmVnXSlcbiAgICAgICAgcmVnID0gJydcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFJfVkFMVUUgJiYgcmVnLmxlbmd0aCkge1xuICAgICAgICByZXMucHVzaChbQVRUUl9WQUxVRSxyZWddKVxuICAgICAgICByZWcgPSAnJ1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQVRUUl9WQUxVRV9EUSAmJiByZWcubGVuZ3RoKSB7XG4gICAgICAgIHJlcy5wdXNoKFtBVFRSX1ZBTFVFLHJlZ10pXG4gICAgICAgIHJlZyA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBBVFRSX1ZBTFVFX1NRICYmIHJlZy5sZW5ndGgpIHtcbiAgICAgICAgcmVzLnB1c2goW0FUVFJfVkFMVUUscmVnXSlcbiAgICAgICAgcmVnID0gJydcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEFUVFJfS0VZKSB7XG4gICAgICAgIHJlcy5wdXNoKFtBVFRSX0tFWSxyZWddKVxuICAgICAgICByZWcgPSAnJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmZuICh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nKSByZXR1cm4geFxuICAgIGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykgcmV0dXJuIHhcbiAgICBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0JykgcmV0dXJuIHhcbiAgICBlbHNlIHJldHVybiBjb25jYXQoJycsIHgpXG4gIH1cbn1cblxuZnVuY3Rpb24gcXVvdCAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlID09PSBBVFRSX1ZBTFVFX1NRIHx8IHN0YXRlID09PSBBVFRSX1ZBTFVFX0RRXG59XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5mdW5jdGlvbiBoYXMgKG9iaiwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChvYmosIGtleSkgfVxuXG52YXIgY2xvc2VSRSA9IFJlZ0V4cCgnXignICsgW1xuICAnYXJlYScsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2Jnc291bmQnLCAnYnInLCAnY29sJywgJ2NvbW1hbmQnLCAnZW1iZWQnLFxuICAnZnJhbWUnLCAnaHInLCAnaW1nJywgJ2lucHV0JywgJ2lzaW5kZXgnLCAna2V5Z2VuJywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbScsXG4gICdzb3VyY2UnLCAndHJhY2snLCAnd2JyJywgJyEtLScsXG4gIC8vIFNWRyBUQUdTXG4gICdhbmltYXRlJywgJ2FuaW1hdGVUcmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2N1cnNvcicsICdkZXNjJywgJ2VsbGlwc2UnLFxuICAnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9zaXRlJyxcbiAgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLFxuICAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJyxcbiAgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JyxcbiAgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJyxcbiAgJ2ZlVHVyYnVsZW5jZScsICdmb250LWZhY2UtZm9ybWF0JywgJ2ZvbnQtZmFjZS1uYW1lJywgJ2ZvbnQtZmFjZS11cmknLFxuICAnZ2x5cGgnLCAnZ2x5cGhSZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdtaXNzaW5nLWdseXBoJywgJ21wYXRoJyxcbiAgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ3NldCcsICdzdG9wJywgJ3RyZWYnLCAndXNlJywgJ3ZpZXcnLFxuICAndmtlcm4nXG5dLmpvaW4oJ3wnKSArICcpKD86W1xcLiNdW2EtekEtWjAtOVxcdTAwN0YtXFx1RkZGRl86LV0rKSokJylcbmZ1bmN0aW9uIHNlbGZDbG9zaW5nICh0YWcpIHsgcmV0dXJuIGNsb3NlUkUudGVzdCh0YWcpIH1cbiIsInZhciBjb250YWluZXJzID0gW107IC8vIHdpbGwgc3RvcmUgY29udGFpbmVyIEhUTUxFbGVtZW50IHJlZmVyZW5jZXNcbnZhciBzdHlsZUVsZW1lbnRzID0gW107IC8vIHdpbGwgc3RvcmUge3ByZXBlbmQ6IEhUTUxFbGVtZW50LCBhcHBlbmQ6IEhUTUxFbGVtZW50fVxuXG52YXIgdXNhZ2UgPSAnaW5zZXJ0LWNzczogWW91IG5lZWQgdG8gcHJvdmlkZSBhIENTUyBzdHJpbmcuIFVzYWdlOiBpbnNlcnRDc3MoY3NzU3RyaW5nWywgb3B0aW9uc10pLic7XG5cbmZ1bmN0aW9uIGluc2VydENzcyhjc3MsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXNhZ2UpO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IG9wdGlvbnMucHJlcGVuZCA9PT0gdHJ1ZSA/ICdwcmVwZW5kJyA6ICdhcHBlbmQnO1xuICAgIHZhciBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgdmFyIGNvbnRhaW5lcklkID0gY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XG5cbiAgICAvLyBmaXJzdCB0aW1lIHdlIHNlZSB0aGlzIGNvbnRhaW5lciwgY3JlYXRlIHRoZSBuZWNlc3NhcnkgZW50cmllc1xuICAgIGlmIChjb250YWluZXJJZCA9PT0gLTEpIHtcbiAgICAgICAgY29udGFpbmVySWQgPSBjb250YWluZXJzLnB1c2goY29udGFpbmVyKSAtIDE7XG4gICAgICAgIHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdID0ge307XG4gICAgfVxuXG4gICAgLy8gdHJ5IHRvIGdldCB0aGUgY29ycmVwb25kaW5nIGNvbnRhaW5lciArIHBvc2l0aW9uIHN0eWxlRWxlbWVudCwgY3JlYXRlIGl0IG90aGVyd2lzZVxuICAgIHZhciBzdHlsZUVsZW1lbnQ7XG5cbiAgICBpZiAoc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF0gIT09IHVuZGVmaW5lZCAmJiBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXVtwb3NpdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQgPSBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXVtwb3NpdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAncHJlcGVuZCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0cmlwIHBvdGVudGlhbCBVVEYtOCBCT00gaWYgY3NzIHdhcyByZWFkIGZyb20gYSBmaWxlXG4gICAgaWYgKGNzcy5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHsgY3NzID0gY3NzLnN1YnN0cigxLCBjc3MubGVuZ3RoKTsgfVxuXG4gICAgLy8gYWN0dWFsbHkgYWRkIHRoZSBzdHlsZXNoZWV0XG4gICAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgKz0gY3NzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVFbGVtZW50LnRleHRDb250ZW50ICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xuICAgIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydENzcztcbm1vZHVsZS5leHBvcnRzLmluc2VydENzcyA9IGluc2VydENzcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmdlOyAvLyBDcmVhdGUgYSByYW5nZSBvYmplY3QgZm9yIGVmZmljZW50bHkgcmVuZGVyaW5nIHN0cmluZ3MgdG8gZWxlbWVudHMuXG52YXIgTlNfWEhUTUwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5cbnZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG5cbnZhciB0ZXN0RWwgPSBkb2MgP1xuICAgIGRvYy5ib2R5IHx8IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSA6XG4gICAge307XG5cbi8vIEZpeGVzIDxodHRwczovL2dpdGh1Yi5jb20vcGF0cmljay1zdGVlbGUtaWRlbS9tb3JwaGRvbS9pc3N1ZXMvMzI+XG4vLyAoSUU3KyBzdXBwb3J0KSA8PUlFNyBkb2VzIG5vdCBzdXBwb3J0IGVsLmhhc0F0dHJpYnV0ZShuYW1lKVxudmFyIGFjdHVhbEhhc0F0dHJpYnV0ZU5TO1xuXG5pZiAodGVzdEVsLmhhc0F0dHJpYnV0ZU5TKSB7XG4gICAgYWN0dWFsSGFzQXR0cmlidXRlTlMgPSBmdW5jdGlvbihlbCwgbmFtZXNwYWNlVVJJLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBlbC5oYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUpO1xuICAgIH07XG59IGVsc2UgaWYgKHRlc3RFbC5oYXNBdHRyaWJ1dGUpIHtcbiAgICBhY3R1YWxIYXNBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKGVsLCBuYW1lc3BhY2VVUkksIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShuYW1lKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBhY3R1YWxIYXNBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKGVsLCBuYW1lc3BhY2VVUkksIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZU5vZGUobmFtZXNwYWNlVVJJLCBuYW1lKSAhPSBudWxsO1xuICAgIH07XG59XG5cbnZhciBoYXNBdHRyaWJ1dGVOUyA9IGFjdHVhbEhhc0F0dHJpYnV0ZU5TO1xuXG5cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBpZiAoIXJhbmdlICYmIGRvYy5jcmVhdGVSYW5nZSkge1xuICAgICAgICByYW5nZSA9IGRvYy5jcmVhdGVSYW5nZSgpO1xuICAgICAgICByYW5nZS5zZWxlY3ROb2RlKGRvYy5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgaWYgKHJhbmdlICYmIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCkge1xuICAgICAgICBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICAgICAgZnJhZ21lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdHdvIG5vZGUncyBuYW1lcyBhcmUgdGhlIHNhbWUuXG4gKlxuICogTk9URTogV2UgZG9uJ3QgYm90aGVyIGNoZWNraW5nIGBuYW1lc3BhY2VVUklgIGJlY2F1c2UgeW91IHdpbGwgbmV2ZXIgZmluZCB0d28gSFRNTCBlbGVtZW50cyB3aXRoIHRoZSBzYW1lXG4gKiAgICAgICBub2RlTmFtZSBhbmQgZGlmZmVyZW50IG5hbWVzcGFjZSBVUklzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiIFRoZSB0YXJnZXQgZWxlbWVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZU5vZGVOYW1lcyhmcm9tRWwsIHRvRWwpIHtcbiAgICB2YXIgZnJvbU5vZGVOYW1lID0gZnJvbUVsLm5vZGVOYW1lO1xuICAgIHZhciB0b05vZGVOYW1lID0gdG9FbC5ub2RlTmFtZTtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvRWwuYWN0dWFsaXplICYmXG4gICAgICAgIGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApIDwgOTEgJiYgLyogZnJvbSB0YWcgbmFtZSBpcyB1cHBlciBjYXNlICovXG4gICAgICAgIHRvTm9kZU5hbWUuY2hhckNvZGVBdCgwKSA+IDkwIC8qIHRhcmdldCB0YWcgbmFtZSBpcyBsb3dlciBjYXNlICovKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIHZpcnR1YWwgRE9NIG5vZGUgdGhlbiB3ZSBtYXkgbmVlZCB0byBub3JtYWxpemUgdGhlIHRhZyBuYW1lXG4gICAgICAgIC8vIGJlZm9yZSBjb21wYXJpbmcuIE5vcm1hbCBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgICAgICAvLyBhcmUgY29udmVydGVkIHRvIHVwcGVyIGNhc2VcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlTmFtZSA9PT0gdG9Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gbW9ycGhBdHRycyhmcm9tTm9kZSwgdG9Ob2RlKSB7XG4gICAgdmFyIGF0dHJzID0gdG9Ob2RlLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGF0dHI7XG4gICAgdmFyIGF0dHJOYW1lO1xuICAgIHZhciBhdHRyTmFtZXNwYWNlVVJJO1xuICAgIHZhciBhdHRyVmFsdWU7XG4gICAgdmFyIGZyb21WYWx1ZTtcblxuICAgIGZvciAoaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgIGF0dHJOYW1lc3BhY2VVUkkgPSBhdHRyLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgYXR0clZhbHVlID0gYXR0ci52YWx1ZTtcblxuICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSBhdHRyLmxvY2FsTmFtZSB8fCBhdHRyTmFtZTtcbiAgICAgICAgICAgIGZyb21WYWx1ZSA9IGZyb21Ob2RlLmdldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tVmFsdWUgPSBmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXRcbiAgICAvLyB3ZXJlbid0IGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICBhdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBhdHRyID0gYXR0cnNbaV07XG4gICAgICAgIGlmIChhdHRyLnNwZWNpZmllZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0F0dHJpYnV0ZU5TKHRvTm9kZSwgYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGFzQXR0cmlidXRlTlModG9Ob2RlLCBudWxsLCBhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCBuYW1lKSB7XG4gICAgaWYgKGZyb21FbFtuYW1lXSAhPT0gdG9FbFtuYW1lXSkge1xuICAgICAgICBmcm9tRWxbbmFtZV0gPSB0b0VsW25hbWVdO1xuICAgICAgICBpZiAoZnJvbUVsW25hbWVdKSB7XG4gICAgICAgICAgICBmcm9tRWwuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBkb2Vzbid0IHRoaW5rIHRoYXQgXCJzZWxlY3RlZFwiIGlzIGFuXG4gICAgICogYXR0cmlidXRlIHdoZW4gcmVhZGluZyBvdmVyIHRoZSBhdHRyaWJ1dGVzIHVzaW5nIHNlbGVjdEVsLmF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBPUFRJT046IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlTlModG9FbCwgbnVsbCwgJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIE5lZWRlZCBmb3IgSUUuIEFwcGFyZW50bHkgSUUgc2V0cyB0aGUgcGxhY2Vob2xkZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBub2RlIHZhbHVlIGFuZCB2aXNlIHZlcnNhLiBUaGlzIGlnbm9yZXMgYW4gZW1wdHkgdXBkYXRlLlxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSAnJyAmJiBmcm9tRWwuZmlyc3RDaGlsZC5ub2RlVmFsdWUgPT09IGZyb21FbC5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFNFTEVDVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlTlModG9FbCwgbnVsbCwgJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSAmJiBub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnT1BUSU9OJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQXR0cmlidXRlTlMoY3VyQ2hpbGQsIG51bGwsICdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICAgIHJldHVybiBub2RlLmlkO1xufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICAgICAgICAgIHZhciB0b05vZGVIdG1sID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIHRvTm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgICAgICAgICAgICAgdG9Ob2RlLmlubmVySFRNTCA9IHRvTm9kZUh0bWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTm9kZSA9IHRvRWxlbWVudCh0b05vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGdldE5vZGVLZXkgPSBvcHRpb25zLmdldE5vZGVLZXkgfHwgZGVmYXVsdEdldE5vZGVLZXk7XG4gICAgICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlQWRkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uTm9kZUFkZGVkID0gb3B0aW9ucy5vbk5vZGVBZGRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVFbFVwZGF0ZWQgPSBvcHRpb25zLm9uQmVmb3JlRWxVcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkVsVXBkYXRlZCA9IG9wdGlvbnMub25FbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uQmVmb3JlTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25CZWZvcmVOb2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbk5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgY2hpbGRyZW5Pbmx5ID0gb3B0aW9ucy5jaGlsZHJlbk9ubHkgPT09IHRydWU7XG5cbiAgICAgICAgLy8gVGhpcyBvYmplY3QgaXMgdXNlZCBhcyBhIGxvb2t1cCB0byBxdWlja2x5IGZpbmQgYWxsIGtleWVkIGVsZW1lbnRzIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgdmFyIGZyb21Ob2Rlc0xvb2t1cCA9IHt9O1xuICAgICAgICB2YXIga2V5ZWRSZW1vdmFsTGlzdDtcblxuICAgICAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ZWRSZW1vdmFsTGlzdCkge1xuICAgICAgICAgICAgICAgIGtleWVkUmVtb3ZhbExpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXllZFJlbW92YWxMaXN0ID0gW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lwS2V5ZWROb2RlcyAmJiAoa2V5ID0gZ2V0Tm9kZUtleShjdXJDaGlsZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgc2tpcHBpbmcga2V5ZWQgbm9kZXMgdGhlbiB3ZSBhZGQgdGhlIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBsaXN0IHNvIHRoYXQgaXQgY2FuIGJlIGhhbmRsZWQgYXQgdGhlIHZlcnkgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHJlcG9ydCB0aGUgbm9kZSBhcyBkaXNjYXJkZWQgaWYgaXQgaXMgbm90IGtleWVkLiBXZSBkbyB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0IHRoZSBlbmQgd2UgbG9vcCB0aHJvdWdoIGFsbCBrZXllZCBlbGVtZW50cyB0aGF0IHdlcmUgdW5tYXRjaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBkaXNjYXJkIHRoZW0gaW4gb25lIGZpbmFsIHBhc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckNoaWxkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhjdXJDaGlsZCwgc2tpcEtleWVkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhIERPTSBub2RlIG91dCBvZiB0aGUgb3JpZ2luYWwgRE9NXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gICAgICAgICAqIEBwYXJhbSAge05vZGV9IHBhcmVudE5vZGUgVGhlIG5vZGVzIHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBza2lwS2V5ZWROb2RlcyBJZiB0cnVlIHRoZW4gZWxlbWVudHMgd2l0aCBrZXlzIHdpbGwgYmUgc2tpcHBlZCBhbmQgbm90IGRpc2NhcmRlZC5cbiAgICAgICAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCBwYXJlbnROb2RlLCBza2lwS2V5ZWROb2Rlcykge1xuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTm9kZURpc2NhcmRlZChub2RlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKG5vZGUpO1xuICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSwgc2tpcEtleWVkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLy8gVHJlZVdhbGtlciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAgICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKHJvb3QpIHtcbiAgICAgICAgLy8gICAgIHZhciB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgLy8gICAgICAgICByb290LFxuICAgICAgICAvLyAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciBlbDtcbiAgICAgICAgLy8gICAgIHdoaWxlKChlbCA9IHRyZWVXYWxrZXIubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIC8vIE5vZGVJdGVyYXRvciBpbXBsZW1lbnRhdGlvbiBpcyBubyBmYXN0ZXIsIGJ1dCBrZWVwaW5nIHRoaXMgYXJvdW5kIGluIGNhc2UgdGhpcyBjaGFuZ2VzIGluIHRoZSBmdXR1cmVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gZnVuY3Rpb24gaW5kZXhUcmVlKG5vZGUpIHtcbiAgICAgICAgLy8gICAgIHZhciBub2RlSXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3Iobm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgICAgICAvLyAgICAgdmFyIGVsO1xuICAgICAgICAvLyAgICAgd2hpbGUoKGVsID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoZWwpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZnJvbU5vZGVzTG9va3VwW2tleV0gPSBlbDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgICAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5tYXRjaGVkRnJvbUVsICYmIGNvbXBhcmVOb2RlTmFtZXMoY3VyQ2hpbGQsIHVubWF0Y2hlZEZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbCh1bm1hdGNoZWRGcm9tRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vcnBoRWwoZnJvbUVsLCB0b0VsLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIHZhciB0b0VsS2V5ID0gZ2V0Tm9kZUtleSh0b0VsKTtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUtleTtcblxuICAgICAgICAgICAgaWYgKHRvRWxLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbiBlbGVtZW50IHdpdGggYW4gSUQgaXMgYmVpbmcgbW9ycGhlZCB0aGVuIGl0IGlzIHdpbGwgYmUgaW4gdGhlIGZpbmFsXG4gICAgICAgICAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmcm9tTm9kZXNMb29rdXBbdG9FbEtleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShmcm9tTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb3JwaEF0dHJzKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICAgICAgb25FbFVwZGF0ZWQoZnJvbUVsKTtcblxuICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcm9tRWwubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyVG9Ob2RlQ2hpbGQgPSB0b0VsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB2YXIgY3VyVG9Ob2RlS2V5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdGcm9tRWw7XG5cbiAgICAgICAgICAgICAgICBvdXRlcjogd2hpbGUgKGN1clRvTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTmV4dFNpYmxpbmcgPSBjdXJUb05vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlICYmIGN1clRvTm9kZUNoaWxkLmlzU2FtZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVLZXkgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgRWxlbWVudCBub2Rlc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0YXJnZXQgbm9kZSBoYXMgYSBrZXkgc28gd2Ugd2FudCB0byBtYXRjaCBpdCB1cCB3aXRoIHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY3VycmVudCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBET00gdHJlZSBkb2VzIG5vdCBoYXZlIGEgbWF0Y2hpbmcga2V5IHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgY2hlY2sgb3VyIGxvb2t1cCB0byBzZWUgaWYgdGhlcmUgaXMgYSBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtYXRjaGluZ0Zyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtjdXJUb05vZGVLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3Igc2luZ2xlIGVsZW1lbnQgcmVtb3ZhbHMuIFRvIGF2b2lkIHJlbW92aW5nIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NIG5vZGUgb3V0IG9mIHRoZSB0cmVlIChzaW5jZSB0aGF0IGNhbiBicmVhayBDU1MgdHJhbnNpdGlvbnMsIGV0Yy4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW9uIHRvIHByb3Blcmx5IG1hdGNoIHVwIHRoZSBrZXllZCB0YXJnZXQgZWxlbWVudCB3aXRoIGl0cyBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxlbWVudCBpbiB0aGUgb3JpZ2luYWwgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG1hdGNoaW5nIGtleWVkIGVsZW1lbnQgc29tZXdoZXJlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmluZyB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgaW50byB0aGUgY3VycmVudCBwb3NpdGlvbiBhbmQgbW9ycGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBXZSB1c2UgaW5zZXJ0QmVmb3JlIGluc3RlYWQgb2YgcmVwbGFjZUNoaWxkIGJlY2F1c2Ugd2Ugd2FudCB0byBnbyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYHJlbW92ZU5vZGUoKWAgZnVuY3Rpb24gZm9yIHRoZSBub2RlIHRoYXQgaXMgYmVpbmcgZGlzY2FyZGVkIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tRWwuaW5zZXJ0QmVmb3JlKG1hdGNoaW5nRnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm8gbWF0Y2hpbmcga2V5ZWQgbm9kZSBpbiB0aGUgc291cmNlIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGNvbXBhdGlibGUgRE9NIGVsZW1lbnRzIHNvIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IERPTSBub2RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBURVhUX05PREUgfHwgY3VyRnJvbU5vZGVUeXBlID09IENPTU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIG5vZGVzIGJlaW5nIGNvbXBhcmVkIGFyZSBUZXh0IG9yIENvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkdmFuY2UgYm90aCB0aGUgXCJ0b1wiIGNoaWxkIGFuZCB0aGUgXCJmcm9tXCIgY2hpbGQgc2luY2Ugd2UgZm91bmQgYSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBjb21wYXRpYmxlIG1hdGNoIHNvIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCBjb250aW51ZSB0cnlpbmcgdG8gZmluZCBhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGlzIHBvc3NpYmxlIHRoYXQgYSBrZXllZCBub2RlIG1pZ2h0IG1hdGNoIHVwIHdpdGggYSBub2RlIHNvbWV3aGVyZSBlbHNlIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IHRyZWUgYW5kIHdlIGRvbid0IHdhbnQgdG8gZGlzY2FyZCBpdCBqdXN0IHlldCBzaW5jZSBpdCBzdGlsbCBtaWdodCBmaW5kIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGRpZG4ndCBmaW5kIGEgaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhpcyBmYXIgdGhlbiB3ZSBkaWQgbm90IGZpbmQgYSBjYW5kaWRhdGUgbWF0Y2ggZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZXMuIFRoZXJlZm9yZSwgd2Ugd2lsbCBqdXN0IGFwcGVuZCB0aGUgY3VycmVudCBcInRvXCIgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKG1hdGNoaW5nRnJvbUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCA9IG9uQmVmb3JlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBvbkJlZm9yZU5vZGVBZGRlZFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKGZyb21FbC5vd25lckRvY3VtZW50IHx8IGRvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm9kZUFkZGVkKGN1clRvTm9kZUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gdG9OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIFwidG8gbm9kZXNcIi4gSWYgY3VyRnJvbU5vZGVDaGlsZCBpc1xuICAgICAgICAgICAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgICAgICAgICAgIC8vIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBub2RlIGlzIGtleWVkIGl0IG1pZ2h0IGJlIG1hdGNoZWQgdXAgbGF0ZXIgc28gd2UgZGVmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhY3R1YWwgcmVtb3ZhbCB0byBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IHdlIHNraXAgbmVzdGVkIGtleWVkIG5vZGVzIGZyb20gYmVpbmcgcmVtb3ZlZCBzaW5jZSB0aGVyZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoY3VyRnJvbU5vZGVDaGlsZCwgZnJvbUVsLCB0cnVlIC8qIHNraXAga2V5ZWQgbm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3BlY2lhbEVsSGFuZGxlciA9IHNwZWNpYWxFbEhhbmRsZXJzW2Zyb21FbC5ub2RlTmFtZV07XG4gICAgICAgICAgICBpZiAoc3BlY2lhbEVsSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxFbEhhbmRsZXIoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFTkQ6IG1vcnBoRWwoLi4uKVxuXG4gICAgICAgIHZhciBtb3JwaGVkTm9kZSA9IGZyb21Ob2RlO1xuICAgICAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgICAgIHZhciB0b05vZGVUeXBlID0gdG9Ob2RlLm5vZGVUeXBlO1xuXG4gICAgICAgIGlmICghY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgYXJlIGdpdmVuIHR3byBET00gbm9kZXMgdGhhdCBhcmUgbm90XG4gICAgICAgICAgICAvLyBjb21wYXRpYmxlIChlLmcuIDxkaXY+IC0tPiA8c3Bhbj4gb3IgPGRpdj4gLS0+IFRFWFQpXG4gICAgICAgICAgICBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZU5vZGVOYW1lcyhmcm9tTm9kZSwgdG9Ob2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW92ZUNoaWxkcmVuKGZyb21Ob2RlLCBjcmVhdGVFbGVtZW50TlModG9Ob2RlLm5vZGVOYW1lLCB0b05vZGUubmFtZXNwYWNlVVJJKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBHb2luZyBmcm9tIGFuIGVsZW1lbnQgbm9kZSB0byBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZSA9IHRvTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gVEVYVF9OT0RFIHx8IG1vcnBoZWROb2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFKSB7IC8vIFRleHQgb3IgY29tbWVudCBub2RlXG4gICAgICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IG1vcnBoZWROb2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAgICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAgICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgICAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vcnBoZG9tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICAgIChoYXBpKW5lcyBXZWJTb2NrZXQgQ2xpZW50IChodHRwczovL2dpdGh1Yi5jb20vaGFwaWpzL25lcylcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTUtMjAxNiwgRXJhbiBIYW1tZXIgPGVyYW5AaGFtbWVyLmlvPiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gICAgQlNEIExpY2Vuc2VkXG4qL1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXG4gICAgLy8gJGxhYjpjb3ZlcmFnZTpvZmYkXG5cbiAgICBpZiAoKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihleHBvcnRzKSkgPT09ICdvYmplY3QnICYmICh0eXBlb2YgbW9kdWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtb2R1bGUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IC8vIEV4cG9ydCBpZiB1c2VkIGFzIGEgbW9kdWxlXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihleHBvcnRzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGV4cG9ydHMubmVzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QubmVzID0gZmFjdG9yeSgpO1xuICAgIH1cblxuICAgIC8vICRsYWI6Y292ZXJhZ2U6b24kXG59KSggLyogJGxhYjpjb3ZlcmFnZTpvZmYkICovdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwgLyogJGxhYjpjb3ZlcmFnZTpvbiQgKi8sIGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIFV0aWxpdGllc1xuXG4gICAgdmFyIHZlcnNpb24gPSAnMic7XG4gICAgdmFyIGlnbm9yZSA9IGZ1bmN0aW9uIGlnbm9yZSgpIHt9O1xuXG4gICAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UobWVzc2FnZSwgbmV4dCkge1xuXG4gICAgICAgIHZhciBvYmogPSBudWxsO1xuICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvYmogPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IE5lc0Vycm9yKGVyciwgJ3Byb3RvY29sJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChlcnJvciwgb2JqKTtcbiAgICB9O1xuXG4gICAgdmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShtZXNzYWdlLCBuZXh0KSB7XG5cbiAgICAgICAgdmFyIHN0cmluZyA9IG51bGw7XG4gICAgICAgIHZhciBlcnJvciA9IG51bGw7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IE5lc0Vycm9yKGVyciwgJ3VzZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGVycm9yLCBzdHJpbmcpO1xuICAgIH07XG5cbiAgICB2YXIgbmV4dFRpY2sgPSBmdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaykge1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBOZXNFcnJvciA9IGZ1bmN0aW9uIE5lc0Vycm9yKGVyciwgdHlwZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgZXJyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZXJyID0gbmV3IEVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBlcnIudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgfTtcblxuICAgIC8vIEVycm9yIGNvZGVzXG5cbiAgICB2YXIgZXJyb3JDb2RlcyA9IHtcbiAgICAgICAgMTAwMDogJ05vcm1hbCBjbG9zdXJlJyxcbiAgICAgICAgMTAwMTogJ0dvaW5nIGF3YXknLFxuICAgICAgICAxMDAyOiAnUHJvdG9jb2wgZXJyb3InLFxuICAgICAgICAxMDAzOiAnVW5zdXBwb3J0ZWQgZGF0YScsXG4gICAgICAgIDEwMDQ6ICdSZXNlcnZlZCcsXG4gICAgICAgIDEwMDU6ICdObyBzdGF0dXMgcmVjZWl2ZWQnLFxuICAgICAgICAxMDA2OiAnQWJub3JtYWwgY2xvc3VyZScsXG4gICAgICAgIDEwMDc6ICdJbnZhbGlkIGZyYW1lIHBheWxvYWQgZGF0YScsXG4gICAgICAgIDEwMDg6ICdQb2xpY3kgdmlvbGF0aW9uJyxcbiAgICAgICAgMTAwOTogJ01lc3NhZ2UgdG9vIGJpZycsXG4gICAgICAgIDEwMTA6ICdNYW5kYXRvcnkgZXh0ZW5zaW9uJyxcbiAgICAgICAgMTAxMTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsXG4gICAgICAgIDEwMTU6ICdUTFMgaGFuZHNoYWtlJ1xuICAgIH07XG5cbiAgICAvLyBDbGllbnRcblxuICAgIHZhciBDbGllbnQgPSBmdW5jdGlvbiBDbGllbnQodXJsLCBvcHRpb25zKSB7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgLy8gQ29uZmlndXJhdGlvblxuXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9oZWFydGJlYXRUaW1lb3V0ID0gZmFsc2U7IC8vIFNlcnZlciBoZWFydGJlYXQgY29uZmlndXJhdGlvblxuXG4gICAgICAgIC8vIFN0YXRlXG5cbiAgICAgICAgdGhpcy5fd3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lkcyA9IDA7IC8vIElkIGNvdW50ZXJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMgPSB7fTsgLy8gaWQgLT4geyBjYWxsYmFjaywgdGltZW91dCB9XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB7fTsgLy8gcGF0aCAtPiBbY2FsbGJhY2tzXVxuICAgICAgICB0aGlzLl9oZWFydGJlYXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYWNrZXRzID0gW107XG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0UmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRXZlbnRzXG5cbiAgICAgICAgdGhpcy5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfTsgLy8gR2VuZXJhbCBlcnJvciBjYWxsYmFjayAob25seSB3aGVuIGFuIGVycm9yIGNhbm5vdCBiZSBhc3NvY2lhdGVkIHdpdGggYSByZXF1ZXN0KVxuICAgICAgICB0aGlzLm9uQ29ubmVjdCA9IGlnbm9yZTsgLy8gQ2FsbGVkIHdoZW5ldmVyIGEgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZFxuICAgICAgICB0aGlzLm9uRGlzY29ubmVjdCA9IGlnbm9yZTsgLy8gQ2FsbGVkIHdoZW5ldmVyIGEgY29ubmVjdGlvbiBpcyBsb3N0OiBmdW5jdGlvbih3aWxsUmVjb25uZWN0KVxuICAgICAgICB0aGlzLm9uVXBkYXRlID0gaWdub3JlO1xuXG4gICAgICAgIC8vIFB1YmxpYyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdGhpcy5pZCA9IG51bGw7IC8vIEFzc2lnbmVkIHdoZW4gaGVsbG8gcmVzcG9uc2UgaXMgcmVjZWl2ZWRcbiAgICB9O1xuXG4gICAgQ2xpZW50LldlYlNvY2tldCA9IC8qICRsYWI6Y292ZXJhZ2U6b2ZmJCAqL3R5cGVvZiBXZWJTb2NrZXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IFdlYlNvY2tldDsgLyogJGxhYjpjb3ZlcmFnZTpvbiQgKi9cblxuICAgIENsaWVudC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2FsbGJhY2spKG5ldyBFcnJvcignQ2Fubm90IGNvbm5lY3Qgd2hpbGUgY2xpZW50IGF0dGVtcHRzIHRvIHJlY29ubmVjdCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKShuZXcgRXJyb3IoJ0FscmVhZHkgY29ubmVjdGVkJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVjb25uZWN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0geyAvLyBPcHRpb25zOiByZWNvbm5lY3QsIGRlbGF5LCBtYXhEZWxheVxuICAgICAgICAgICAgICAgIHdhaXQ6IDAsXG4gICAgICAgICAgICAgICAgZGVsYXk6IG9wdGlvbnMuZGVsYXkgfHwgMTAwMCwgLy8gMSBzZWNvbmRcbiAgICAgICAgICAgICAgICBtYXhEZWxheTogb3B0aW9ucy5tYXhEZWxheSB8fCA1MDAwLCAvLyA1IHNlY29uZHNcbiAgICAgICAgICAgICAgICByZXRyaWVzOiBvcHRpb25zLnJldHJpZXMgfHwgSW5maW5pdHksIC8vIFVubGltaXRlZFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IG9wdGlvbnMuYXV0aCxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogb3B0aW9ucy50aW1lb3V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb25uZWN0KG9wdGlvbnMsIHRydWUsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgQ2xpZW50LnByb3RvdHlwZS5fY29ubmVjdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBpbml0aWFsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciB3cyA9IG5ldyBDbGllbnQuV2ViU29ja2V0KHRoaXMuX3VybCwgdGhpcy5fc2V0dGluZ3Mud3MpOyAvLyBTZXR0aW5ncyB1c2VkIGJ5IG5vZGUuanMgb25seVxuICAgICAgICB0aGlzLl93cyA9IHdzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWNvbm5lY3Rpb25UaW1lcik7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvblRpbWVyID0gbnVsbDtcblxuICAgICAgICB2YXIgZmluYWxpemUgPSBmdW5jdGlvbiBmaW5hbGl6ZShlcnIpIHtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBvbmx5IG9uY2Ugd2hlbiBjb25uZWN0KCkgaXMgY2FsbGVkXG4gICAgICAgICAgICAgICAgdmFyIGNiID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25FcnJvcihlcnIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlciA9IGZ1bmN0aW9uIHRpbWVvdXRIYW5kbGVyKCkge1xuXG4gICAgICAgICAgICBfdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgICAgICBmaW5hbGl6ZShuZXcgTmVzRXJyb3IoJ0Nvbm5lY3Rpb24gdGltZWQgb3V0JywgJ3RpbWVvdXQnKSk7XG5cbiAgICAgICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCA/IHNldFRpbWVvdXQodGltZW91dEhhbmRsZXIsIG9wdGlvbnMudGltZW91dCkgOiBudWxsO1xuXG4gICAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgd3Mub25vcGVuID0gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9oZWxsbyhvcHRpb25zLmF1dGgsIGZ1bmN0aW9uIChlcnIpIHtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuX3N1YnNjcmlwdGlvbnNbZXJyLnBhdGhdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9kaXNjb25uZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZShlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTsgLy8gU3RvcCByZWNvbm5lY3Rpb24gd2hlbiB0aGUgaGVsbG8gbWVzc2FnZSByZXR1cm5zIGVycm9yXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMub25Db25uZWN0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsaXplKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBOZXNFcnJvcignU29ja2V0IGVycm9yJywgJ3dzJyk7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemUoZXJyb3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgaWYgKHdzLm9ub3Blbikge1xuICAgICAgICAgICAgICAgIGZpbmFsaXplKG5ldyBFcnJvcignQ29ubmVjdGlvbiB0ZXJtaW5hdGVkIHdoaWxlIHdoaWxlIHRvIGNvbm5lY3QnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3YXNSZXF1ZXN0ZWQgPSBfdGhpcy5fZGlzY29ubmVjdFJlcXVlc3RlZDsgLy8gR2V0IHZhbHVlIGJlZm9yZSBfY2xlYW51cCgpXG5cbiAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHZhciBsb2cgPSB7XG4gICAgICAgICAgICAgICAgY29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICBleHBsYW5hdGlvbjogZXJyb3JDb2Rlc1tldmVudC5jb2RlXSB8fCAnVW5rbm93bicsXG4gICAgICAgICAgICAgICAgcmVhc29uOiBldmVudC5yZWFzb24sXG4gICAgICAgICAgICAgICAgd2FzQ2xlYW46IGV2ZW50Lndhc0NsZWFuLFxuICAgICAgICAgICAgICAgIHdpbGxSZWNvbm5lY3Q6ICEhKF90aGlzLl9yZWNvbm5lY3Rpb24gJiYgX3RoaXMuX3JlY29ubmVjdGlvbi5yZXRyaWVzID49IDEpLFxuICAgICAgICAgICAgICAgIHdhc1JlcXVlc3RlZDogd2FzUmVxdWVzdGVkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfdGhpcy5vbkRpc2Nvbm5lY3QobG9nLndpbGxSZWNvbm5lY3QsIGxvZyk7XG4gICAgICAgICAgICBfdGhpcy5fcmVjb25uZWN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9vbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIENsaWVudC5wcm90b3R5cGUub3ZlcnJpZGVSZWNvbm5lY3Rpb25BdXRoID0gZnVuY3Rpb24gKGF1dGgpIHtcblxuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uLnNldHRpbmdzLmF1dGggPSBhdXRoO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgQ2xpZW50LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBpZ25vcmU7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNjb25uZWN0KGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIENsaWVudC5wcm90b3R5cGUuX2Rpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGlzSW50ZXJuYWwpIHtcblxuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVjb25uZWN0aW9uVGltZXIpO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25UaW1lciA9IG51bGw7XG4gICAgICAgIHZhciByZXF1ZXN0ZWQgPSB0aGlzLl9kaXNjb25uZWN0UmVxdWVzdGVkIHx8ICFpc0ludGVybmFsOyAvLyBSZXRhaW4gdHJ1ZVxuXG4gICAgICAgIGlmICh0aGlzLl9kaXNjb25uZWN0TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0UmVxdWVzdGVkID0gcmVxdWVzdGVkO1xuICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fd3MgfHwgdGhpcy5fd3MucmVhZHlTdGF0ZSAhPT0gQ2xpZW50LldlYlNvY2tldC5PUEVOICYmIHRoaXMuX3dzLnJlYWR5U3RhdGUgIT09IENsaWVudC5XZWJTb2NrZXQuQ09OTkVDVElORykge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2FsbGJhY2spKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXNjb25uZWN0UmVxdWVzdGVkID0gcmVxdWVzdGVkO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0TGlzdGVuZXJzID0gW2NhbGxiYWNrXTtcbiAgICAgICAgdGhpcy5fd3MuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgQ2xpZW50LnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAodGhpcy5fd3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl93cy5yZWFkeVN0YXRlID09PSBDbGllbnQuV2ViU29ja2V0Lk9QRU4gfHwgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gQ2xpZW50LldlYlNvY2tldC5DT05ORUNUSU5HKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl93cy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93cy5vbm9wZW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fd3Mub25jbG9zZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl93cy5vbmVycm9yID0gaWdub3JlO1xuICAgICAgICAgICAgdGhpcy5fd3Mub25tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3dzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhY2tldHMgPSBbXTtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hlYXJ0YmVhdCk7XG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdCA9IG51bGw7XG5cbiAgICAgICAgLy8gRmx1c2ggcGVuZGluZyByZXF1ZXN0c1xuXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBOZXNFcnJvcignUmVxdWVzdCBmYWlsZWQgLSBzZXJ2ZXIgZGlzY29ubmVjdGVkJywgJ2Rpc2Nvbm5lY3QnKTtcblxuICAgICAgICB2YXIgaWRzID0gT2JqZWN0LmtleXModGhpcy5fcmVxdWVzdHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGlkID0gaWRzW2ldO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLl9yZXF1ZXN0c1tpZF07XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSByZXF1ZXN0LmNhbGxiYWNrO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlcXVlc3QudGltZW91dCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcmVxdWVzdHNbaWRdO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2Rpc2Nvbm5lY3RMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9kaXNjb25uZWN0TGlzdGVuZXJzO1xuICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdExpc3RlbmVycyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0UmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIENsaWVudC5wcm90b3R5cGUuX3JlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0XG5cbiAgICAgICAgaWYgKCF0aGlzLl9yZWNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24ucmV0cmllcyA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kaXNjb25uZWN0KGlnbm9yZSwgdHJ1ZSk7IC8vIENsZWFyIF9yZWNvbm5lY3Rpb24gc3RhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIC0tdGhpcy5fcmVjb25uZWN0aW9uLnJldHJpZXM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbi53YWl0ID0gdGhpcy5fcmVjb25uZWN0aW9uLndhaXQgKyB0aGlzLl9yZWNvbm5lY3Rpb24uZGVsYXk7XG5cbiAgICAgICAgdmFyIHRpbWVvdXQgPSBNYXRoLm1pbih0aGlzLl9yZWNvbm5lY3Rpb24ud2FpdCwgdGhpcy5fcmVjb25uZWN0aW9uLm1heERlbGF5KTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgX3RoaXMyLl9jb25uZWN0KF90aGlzMi5fcmVjb25uZWN0aW9uLnNldHRpbmdzLCBmYWxzZSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLl9yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfTtcblxuICAgIENsaWVudC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBwYXRoOiBvcHRpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgICAgICAgcGF0aDogb3B0aW9ucy5wYXRoLFxuICAgICAgICAgICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICAgICAgcGF5bG9hZDogb3B0aW9ucy5wYXlsb2FkXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmQocmVxdWVzdCwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBDbGllbnQucHJvdG90eXBlLm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZChyZXF1ZXN0LCB0cnVlLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIENsaWVudC5wcm90b3R5cGUuX3NlbmQgPSBmdW5jdGlvbiAocmVxdWVzdCwgdHJhY2ssIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgaWdub3JlO1xuXG4gICAgICAgIGlmICghdGhpcy5fd3MgfHwgdGhpcy5fd3MucmVhZHlTdGF0ZSAhPT0gQ2xpZW50LldlYlNvY2tldC5PUEVOKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYWxsYmFjaykobmV3IE5lc0Vycm9yKCdGYWlsZWQgdG8gc2VuZCBtZXNzYWdlIC0gc2VydmVyIGRpc2Nvbm5lY3RlZCcsICdkaXNjb25uZWN0JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5pZCA9ICsrdGhpcy5faWRzO1xuXG4gICAgICAgIHN0cmluZ2lmeShyZXF1ZXN0LCBmdW5jdGlvbiAoZXJyLCBlbmNvZGVkKSB7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2FsbGJhY2spKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElnbm9yZSBlcnJvcnNcblxuICAgICAgICAgICAgaWYgKCF0cmFjaykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3dzLnNlbmQoZW5jb2RlZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYWxsYmFjaykobmV3IE5lc0Vycm9yKGVyciwgJ3dzJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJhY2sgZXJyb3JzXG5cbiAgICAgICAgICAgIHZhciByZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChfdGhpczMuX3NldHRpbmdzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5jYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC50aW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IE5lc0Vycm9yKCdSZXF1ZXN0IHRpbWVkIG91dCcsICd0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzMy5fc2V0dGluZ3MudGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzMy5fcmVxdWVzdHNbcmVxdWVzdC5pZF0gPSByZWNvcmQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLl93cy5zZW5kKGVuY29kZWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMy5fcmVxdWVzdHNbcmVxdWVzdC5pZF0udGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy5fcmVxdWVzdHNbcmVxdWVzdC5pZF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKShuZXcgTmVzRXJyb3IoZXJyLCAnd3MnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBDbGllbnQucHJvdG90eXBlLl9oZWxsbyA9IGZ1bmN0aW9uIChhdXRoLCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgdHlwZTogJ2hlbGxvJyxcbiAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb25cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYXV0aCkge1xuICAgICAgICAgICAgcmVxdWVzdC5hdXRoID0gYXV0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJzID0gdGhpcy5zdWJzY3JpcHRpb25zKCk7XG4gICAgICAgIGlmIChzdWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVxdWVzdC5zdWJzID0gc3VicztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kKHJlcXVlc3QsIHRydWUsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9zdWJzY3JpcHRpb25zKTtcbiAgICB9O1xuXG4gICAgQ2xpZW50LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAocGF0aCwgaGFuZGxlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFwYXRoIHx8IHBhdGhbMF0gIT09ICcvJykge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2FsbGJhY2spKG5ldyBOZXNFcnJvcignSW52YWxpZCBwYXRoJywgJ3VzZXInKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VicyA9IHRoaXMuX3N1YnNjcmlwdGlvbnNbcGF0aF07XG4gICAgICAgIGlmIChzdWJzKSB7XG5cbiAgICAgICAgICAgIC8vIEFscmVhZHkgc3Vic2NyaWJlZFxuXG4gICAgICAgICAgICBpZiAoc3Vicy5pbmRleE9mKGhhbmRsZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc1twYXRoXSA9IFtoYW5kbGVyXTtcblxuICAgICAgICBpZiAoIXRoaXMuX3dzIHx8IHRoaXMuX3dzLnJlYWR5U3RhdGUgIT09IENsaWVudC5XZWJTb2NrZXQuT1BFTikge1xuXG4gICAgICAgICAgICAvLyBRdWV1ZWQgc3Vic2NyaXB0aW9uXG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYWxsYmFjaykoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgdHlwZTogJ3N1YicsXG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmQocmVxdWVzdCwgdHJ1ZSwgZnVuY3Rpb24gKGVycikge1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzNC5fc3Vic2NyaXB0aW9uc1twYXRoXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBDbGllbnQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHBhdGgsIGhhbmRsZXIsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgaWYgKCFwYXRoIHx8IHBhdGhbMF0gIT09ICcvJykge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2FsbGJhY2spKG5ldyBOZXNFcnJvcignSW52YWxpZCBwYXRoJywgJ3VzZXInKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VicyA9IHRoaXMuX3N1YnNjcmlwdGlvbnNbcGF0aF07XG4gICAgICAgIGlmICghc3Vicykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3Vic2NyaXB0aW9uc1twYXRoXTtcbiAgICAgICAgICAgIHN5bmMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBvcyA9IHN1YnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJzLnNwbGljZShwb3MsIDEpO1xuICAgICAgICAgICAgaWYgKCFzdWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zdWJzY3JpcHRpb25zW3BhdGhdO1xuICAgICAgICAgICAgICAgIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzeW5jIHx8ICF0aGlzLl93cyB8fCB0aGlzLl93cy5yZWFkeVN0YXRlICE9PSBDbGllbnQuV2ViU29ja2V0Lk9QRU4pIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNhbGxiYWNrKSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICB0eXBlOiAndW5zdWInLFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kKHJlcXVlc3QsIHRydWUsIGZ1bmN0aW9uIChlcnJJZ25vcmUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9KTsgLy8gSWdub3JpbmcgZXJyb3JzIGFzIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlcnMgYXJlIGFscmVhZHkgcmVtb3ZlZFxuICAgIH07XG5cbiAgICBDbGllbnQucHJvdG90eXBlLl9vbk1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB0aGlzLl9iZWF0KCk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBtZXNzYWdlLmRhdGE7XG4gICAgICAgIHZhciBwcmVmaXggPSBkYXRhWzBdO1xuICAgICAgICBpZiAocHJlZml4ICE9PSAneycpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhY2tldHMucHVzaChkYXRhLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGlmIChwcmVmaXggIT09ICchJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX3BhY2tldHMuam9pbignJyk7XG4gICAgICAgICAgICB0aGlzLl9wYWNrZXRzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcGFja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhY2tldHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihuZXcgTmVzRXJyb3IoJ1JlY2VpdmVkIGFuIGluY29tcGxldGUgbWVzc2FnZScsICdwcm90b2NvbCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlKGRhdGEsIGZ1bmN0aW9uIChlcnIsIHVwZGF0ZSkge1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5vbkVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlY3JlYXRlIGVycm9yXG5cbiAgICAgICAgICAgIHZhciBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICBpZiAodXBkYXRlLnN0YXR1c0NvZGUgJiYgdXBkYXRlLnN0YXR1c0NvZGUgPj0gNDAwICYmIHVwZGF0ZS5zdGF0dXNDb2RlIDw9IDU5OSkge1xuXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgTmVzRXJyb3IodXBkYXRlLnBheWxvYWQubWVzc2FnZSB8fCB1cGRhdGUucGF5bG9hZC5lcnJvciwgJ3NlcnZlcicpO1xuICAgICAgICAgICAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSB1cGRhdGUuc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICBlcnJvci5kYXRhID0gdXBkYXRlLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgZXJyb3IuaGVhZGVycyA9IHVwZGF0ZS5oZWFkZXJzO1xuICAgICAgICAgICAgICAgIGVycm9yLnBhdGggPSB1cGRhdGUucGF0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGluZ1xuXG4gICAgICAgICAgICBpZiAodXBkYXRlLnR5cGUgPT09ICdwaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczUuX3NlbmQoeyB0eXBlOiAncGluZycgfSwgZmFsc2UpOyAvLyBJZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCBhbmQgdXBkYXRlXG5cbiAgICAgICAgICAgIGlmICh1cGRhdGUudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1Lm9uVXBkYXRlKHVwZGF0ZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHVibGlzaCBvciBSZXZva2VcblxuICAgICAgICAgICAgaWYgKHVwZGF0ZS50eXBlID09PSAncHViJyB8fCB1cGRhdGUudHlwZSA9PT0gJ3Jldm9rZScpIHtcblxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVycyA9IF90aGlzNS5fc3Vic2NyaXB0aW9uc1t1cGRhdGUucGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZS50eXBlID09PSAncmV2b2tlJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXM1Ll9zdWJzY3JpcHRpb25zW3VwZGF0ZS5wYXRoXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMgJiYgdXBkYXRlLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlLnR5cGUgPT09ICdyZXZva2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncy5yZXZva2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzW2ldKHVwZGF0ZS5tZXNzYWdlLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIExvb2t1cCBjYWxsYmFjayAobWVzc2FnZSBtdXN0IGluY2x1ZGUgYW4gaWQgZnJvbSB0aGlzIHBvaW50KVxuXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IF90aGlzNS5fcmVxdWVzdHNbdXBkYXRlLmlkXTtcbiAgICAgICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczUub25FcnJvcihuZXcgTmVzRXJyb3IoJ1JlY2VpdmVkIHJlc3BvbnNlIGZvciB1bmtub3duIHJlcXVlc3QnLCAncHJvdG9jb2wnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHJlcXVlc3QuY2FsbGJhY2s7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVxdWVzdC50aW1lb3V0KTtcbiAgICAgICAgICAgIGRlbGV0ZSBfdGhpczUuX3JlcXVlc3RzW3VwZGF0ZS5pZF07XG5cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIFJlc3BvbnNlIHJlY2VpdmVkIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzcG9uc2VcblxuICAgICAgICAgICAgaWYgKHVwZGF0ZS50eXBlID09PSAncmVxdWVzdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIHVwZGF0ZS5wYXlsb2FkLCB1cGRhdGUuc3RhdHVzQ29kZSwgdXBkYXRlLmhlYWRlcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDdXN0b20gbWVzc2FnZVxuXG4gICAgICAgICAgICBpZiAodXBkYXRlLnR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgdXBkYXRlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdXRoZW50aWNhdGlvblxuXG4gICAgICAgICAgICBpZiAodXBkYXRlLnR5cGUgPT09ICdoZWxsbycpIHtcbiAgICAgICAgICAgICAgICBfdGhpczUuaWQgPSB1cGRhdGUuc29ja2V0O1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGUuaGVhcnRiZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5faGVhcnRiZWF0VGltZW91dCA9IHVwZGF0ZS5oZWFydGJlYXQuaW50ZXJ2YWwgKyB1cGRhdGUuaGVhcnRiZWF0LnRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5fYmVhdCgpOyAvLyBDYWxsIGFnYWluIG9uY2UgdGltZW91dCBpcyBzZXRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRpb25zXG5cbiAgICAgICAgICAgIGlmICh1cGRhdGUudHlwZSA9PT0gJ3N1YicgfHwgdXBkYXRlLnR5cGUgPT09ICd1bnN1YicpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfdGhpczUub25FcnJvcihuZXcgTmVzRXJyb3IoJ1JlY2VpdmVkIHVua25vd24gcmVzcG9uc2UgdHlwZTogJyArIHVwZGF0ZS50eXBlLCAncHJvdG9jb2wnKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBDbGllbnQucHJvdG90eXBlLl9iZWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oZWFydGJlYXQpO1xuXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBfdGhpczYub25FcnJvcihuZXcgTmVzRXJyb3IoJ0Rpc2Nvbm5lY3RpbmcgZHVlIHRvIGhlYXJ0YmVhdCB0aW1lb3V0JywgJ3RpbWVvdXQnKSk7XG4gICAgICAgICAgICBfdGhpczYuX3dzLmNsb3NlKCk7XG4gICAgICAgIH0sIHRoaXMuX2hlYXJ0YmVhdFRpbWVvdXQpO1xuICAgIH07XG5cbiAgICAvLyBFeHBvc2UgaW50ZXJmYWNlXG5cbiAgICByZXR1cm4geyBDbGllbnQ6IENsaWVudCB9O1xufSk7XG4iLCIvKiBnbG9iYWwgTXV0YXRpb25PYnNlcnZlciAqL1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnZ2xvYmFsL2RvY3VtZW50JylcbnZhciB3aW5kb3cgPSByZXF1aXJlKCdnbG9iYWwvd2luZG93JylcbnZhciB3YXRjaCA9IE9iamVjdC5jcmVhdGUobnVsbClcbnZhciBLRVlfSUQgPSAnb25sb2FkaWQnICsgKG5ldyBEYXRlKCkgJSA5ZTYpLnRvU3RyaW5nKDM2KVxudmFyIEtFWV9BVFRSID0gJ2RhdGEtJyArIEtFWV9JRFxudmFyIElOREVYID0gMFxuXG5pZiAod2luZG93ICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKSB7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMod2F0Y2gpLmxlbmd0aCA8IDEpIHJldHVyblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobXV0YXRpb25zW2ldLmF0dHJpYnV0ZU5hbWUgPT09IEtFWV9BVFRSKSB7XG4gICAgICAgIGVhY2hBdHRyKG11dGF0aW9uc1tpXSwgdHVybm9uLCB0dXJub2ZmKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgZWFjaE11dGF0aW9uKG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMsIHR1cm5vZmYpXG4gICAgICBlYWNoTXV0YXRpb24obXV0YXRpb25zW2ldLmFkZGVkTm9kZXMsIHR1cm5vbilcbiAgICB9XG4gIH0pXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbS0VZX0FUVFJdXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gb25sb2FkIChlbCwgb24sIG9mZiwgY2FsbGVyKSB7XG4gIG9uID0gb24gfHwgZnVuY3Rpb24gKCkge31cbiAgb2ZmID0gb2ZmIHx8IGZ1bmN0aW9uICgpIHt9XG4gIGVsLnNldEF0dHJpYnV0ZShLRVlfQVRUUiwgJ28nICsgSU5ERVgpXG4gIHdhdGNoWydvJyArIElOREVYXSA9IFtvbiwgb2ZmLCAwLCBjYWxsZXIgfHwgb25sb2FkLmNhbGxlcl1cbiAgSU5ERVggKz0gMVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gdHVybm9uIChpbmRleCwgZWwpIHtcbiAgaWYgKHdhdGNoW2luZGV4XVswXSAmJiB3YXRjaFtpbmRleF1bMl0gPT09IDApIHtcbiAgICB3YXRjaFtpbmRleF1bMF0oZWwpXG4gICAgd2F0Y2hbaW5kZXhdWzJdID0gMVxuICB9XG59XG5cbmZ1bmN0aW9uIHR1cm5vZmYgKGluZGV4LCBlbCkge1xuICBpZiAod2F0Y2hbaW5kZXhdWzFdICYmIHdhdGNoW2luZGV4XVsyXSA9PT0gMSkge1xuICAgIHdhdGNoW2luZGV4XVsxXShlbClcbiAgICB3YXRjaFtpbmRleF1bMl0gPSAwXG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaEF0dHIgKG11dGF0aW9uLCBvbiwgb2ZmKSB7XG4gIHZhciBuZXdWYWx1ZSA9IG11dGF0aW9uLnRhcmdldC5nZXRBdHRyaWJ1dGUoS0VZX0FUVFIpXG4gIGlmIChzYW1lT3JpZ2luKG11dGF0aW9uLm9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICB3YXRjaFtuZXdWYWx1ZV0gPSB3YXRjaFttdXRhdGlvbi5vbGRWYWx1ZV1cbiAgICByZXR1cm5cbiAgfVxuICBpZiAod2F0Y2hbbXV0YXRpb24ub2xkVmFsdWVdKSB7XG4gICAgb2ZmKG11dGF0aW9uLm9sZFZhbHVlLCBtdXRhdGlvbi50YXJnZXQpXG4gIH1cbiAgaWYgKHdhdGNoW25ld1ZhbHVlXSkge1xuICAgIG9uKG5ld1ZhbHVlLCBtdXRhdGlvbi50YXJnZXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2FtZU9yaWdpbiAob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gIGlmICghb2xkVmFsdWUgfHwgIW5ld1ZhbHVlKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHdhdGNoW29sZFZhbHVlXVszXSA9PT0gd2F0Y2hbbmV3VmFsdWVdWzNdXG59XG5cbmZ1bmN0aW9uIGVhY2hNdXRhdGlvbiAobm9kZXMsIGZuKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMod2F0Y2gpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0gJiYgbm9kZXNbaV0uZ2V0QXR0cmlidXRlICYmIG5vZGVzW2ldLmdldEF0dHJpYnV0ZShLRVlfQVRUUikpIHtcbiAgICAgIHZhciBvbmxvYWRpZCA9IG5vZGVzW2ldLmdldEF0dHJpYnV0ZShLRVlfQVRUUilcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBpZiAob25sb2FkaWQgPT09IGspIHtcbiAgICAgICAgICBmbihrLCBub2Rlc1tpXSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG5vZGVzW2ldLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZWFjaE11dGF0aW9uKG5vZGVzW2ldLmNoaWxkTm9kZXMsIGZuKVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbnNlcnQtY3NzJylcbiIsInZhciBiZWwgPSByZXF1aXJlKCdiZWwnKSAvLyB0dXJucyB0ZW1wbGF0ZSB0YWcgaW50byBET00gZWxlbWVudHNcbnZhciBtb3JwaGRvbSA9IHJlcXVpcmUoJ21vcnBoZG9tJykgLy8gZWZmaWNpZW50bHkgZGlmZnMgKyBtb3JwaHMgdHdvIERPTSBlbGVtZW50c1xudmFyIGRlZmF1bHRFdmVudHMgPSByZXF1aXJlKCcuL3VwZGF0ZS1ldmVudHMuanMnKSAvLyBkZWZhdWx0IGV2ZW50cyB0byBiZSBjb3BpZWQgd2hlbiBkb20gZWxlbWVudHMgdXBkYXRlXG5cbm1vZHVsZS5leHBvcnRzID0gYmVsXG5cbi8vIFRPRE8gbW92ZSB0aGlzICsgZGVmYXVsdEV2ZW50cyB0byBhIG5ldyBtb2R1bGUgb25jZSB3ZSByZWNlaXZlIG1vcmUgZmVlZGJhY2tcbm1vZHVsZS5leHBvcnRzLnVwZGF0ZSA9IGZ1bmN0aW9uIChmcm9tTm9kZSwgdG9Ob2RlLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG4gIGlmIChvcHRzLmV2ZW50cyAhPT0gZmFsc2UpIHtcbiAgICBpZiAoIW9wdHMub25CZWZvcmVFbFVwZGF0ZWQpIG9wdHMub25CZWZvcmVFbFVwZGF0ZWQgPSBjb3BpZXJcbiAgfVxuXG4gIHJldHVybiBtb3JwaGRvbShmcm9tTm9kZSwgdG9Ob2RlLCBvcHRzKVxuXG4gIC8vIG1vcnBoZG9tIG9ubHkgY29waWVzIGF0dHJpYnV0ZXMuIHdlIGRlY2lkZWQgd2UgYWxzbyB3YW50ZWQgdG8gY29weSBldmVudHNcbiAgLy8gdGhhdCBjYW4gYmUgc2V0IHZpYSBhdHRyaWJ1dGVzXG4gIGZ1bmN0aW9uIGNvcGllciAoZiwgdCkge1xuICAgIC8vIGNvcHkgZXZlbnRzOlxuICAgIHZhciBldmVudHMgPSBvcHRzLmV2ZW50cyB8fCBkZWZhdWx0RXZlbnRzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBldiA9IGV2ZW50c1tpXVxuICAgICAgaWYgKHRbZXZdKSB7IC8vIGlmIG5ldyBlbGVtZW50IGhhcyBhIHdoaXRlbGlzdGVkIGF0dHJpYnV0ZVxuICAgICAgICBmW2V2XSA9IHRbZXZdIC8vIHVwZGF0ZSBleGlzdGluZyBlbGVtZW50XG4gICAgICB9IGVsc2UgaWYgKGZbZXZdKSB7IC8vIGlmIGV4aXN0aW5nIGVsZW1lbnQgaGFzIGl0IGFuZCBuZXcgb25lIGRvZXNudFxuICAgICAgICBmW2V2XSA9IHVuZGVmaW5lZCAvLyByZW1vdmUgaXQgZnJvbSBleGlzdGluZyBlbGVtZW50XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvbGRWYWx1ZSA9IGYudmFsdWVcbiAgICB2YXIgbmV3VmFsdWUgPSB0LnZhbHVlXG4gICAgLy8gY29weSB2YWx1ZXMgZm9yIGZvcm0gZWxlbWVudHNcbiAgICBpZiAoKGYubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZi50eXBlICE9PSAnZmlsZScpIHx8IGYubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoIW5ld1ZhbHVlKSB7XG4gICAgICAgIHQudmFsdWUgPSBmLnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICBmLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGYubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGlmICh0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gbnVsbCkgZi52YWx1ZSA9IHQudmFsdWVcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAvLyBhdHRyaWJ1dGUgZXZlbnRzIChjYW4gYmUgc2V0IHdpdGggYXR0cmlidXRlcylcbiAgJ29uY2xpY2snLFxuICAnb25kYmxjbGljaycsXG4gICdvbm1vdXNlZG93bicsXG4gICdvbm1vdXNldXAnLFxuICAnb25tb3VzZW92ZXInLFxuICAnb25tb3VzZW1vdmUnLFxuICAnb25tb3VzZW91dCcsXG4gICdvbmRyYWdzdGFydCcsXG4gICdvbmRyYWcnLFxuICAnb25kcmFnZW50ZXInLFxuICAnb25kcmFnbGVhdmUnLFxuICAnb25kcmFnb3ZlcicsXG4gICdvbmRyb3AnLFxuICAnb25kcmFnZW5kJyxcbiAgJ29ua2V5ZG93bicsXG4gICdvbmtleXByZXNzJyxcbiAgJ29ua2V5dXAnLFxuICAnb251bmxvYWQnLFxuICAnb25hYm9ydCcsXG4gICdvbmVycm9yJyxcbiAgJ29ucmVzaXplJyxcbiAgJ29uc2Nyb2xsJyxcbiAgJ29uc2VsZWN0JyxcbiAgJ29uY2hhbmdlJyxcbiAgJ29uc3VibWl0JyxcbiAgJ29ucmVzZXQnLFxuICAnb25mb2N1cycsXG4gICdvbmJsdXInLFxuICAnb25pbnB1dCcsXG4gIC8vIG90aGVyIGNvbW1vbiBldmVudHNcbiAgJ29uY29udGV4dG1lbnUnLFxuICAnb25mb2N1c2luJyxcbiAgJ29uZm9jdXNvdXQnXG5dXG4iXX0=
