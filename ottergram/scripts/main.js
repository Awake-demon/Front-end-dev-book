var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

// function setDetails(imageUrl,titleText) {
//     'use strict'
//     var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
//     // detailImage.setAttribute('src','ottergram-resources/img/otter2.jpg');
//     detailImage.setAttribute('src','imageUrl');

//     var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
//     // detailTitle.textContent = 'You Should Be Dancing';
//     detailTitle.textContent = titleText;
// }

// function imageFromThumb(thumbnail) {
//     'use strict'
//     return thumbnail.getAttribute('data-image-url');
// }

// function titleFromThumb(thumbnail) {
//     'use strict';
//     return thumbnail.getAttribute('data-image-title');
// }

// function setDetailsFromThumb(thumbnail) {
//     'use strict';
//     setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
// }

// function addThumbnailClickHandler(thumb) {
//     'use strict';
//     thumb.addEventListener('click',function(event) {
//         event.preventDefault();
//         setDetailsFromThumb(thumb);
//     });
// }

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    //放置要运行的代码
    // detailImage.setAttribute('src','ottergram-resources/img/otter3.jpg');
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    //调用document.querySelector,并且向其传递DETAIL_TITLE_SELECTOR参数，将结果赋给一个名为detailTitlede
    // detailTitle.textContent = 'You should Be Dancing'
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
//var firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
//imageFromThumb(firstThumbnail);

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}
// 添加titleFromThumb的函数声明，其中包含一个thumbnail参数，这个函数将返回data-image-title属性的值
//var firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
// titleFromThumb(firstThumbnail);

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}


// 添加事件监听器  为每一个缩略图添加事件监听器
// 浏览器是个很忙碌的软件，
// 它会注意每一次的触碰，点击，滚动以及按键，
// 这些行为都是浏览器可能要响应的事件，
// 为了使网站动态化并可交互，可以在这些事件发生的时候触发某些代码
// 事件监听器是一个对象，可以监听某个特定事件(如鼠标点击) 当指定事件发生时，事件监听器就会触发一个函数调用以响应事件

// var firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
// firstThumbnail.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log('you clicked!');
//     console.log(event);
// });
// 当firstThumbnail被点击时，浏览器都会调用这个匿名函数，
// 并且将时间对象传递给匿名函数，通过这个对象(即event)可以调用它的precentDefault方法，
// 这个方法可以阻止链接让浏览器跳到另一个页面，最后，调用console.log并传入event对象，
// 以便在开发者工具中看看它到底包含哪些信息

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}
//回调函数作为addThumbClickHandler的一部分，
// 可以访问已声明的参数thumb，并且把它传递给setDetailsFromThumb的调用
// 访问所有缩略图失败*************************8

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

// 劫持链接