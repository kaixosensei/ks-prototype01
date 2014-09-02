var video = document.querySelector("#vid");
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var localMediaStream = null;

    var onCameraFail = function (e) {
        console.log('Camera did not work.', e);
    };

    function snapshot() {
        if (localMediaStream) {
            ctx.drawImage(video, 0, 0);
        }
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia({video:true}, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream;
    }, onCameraFail);