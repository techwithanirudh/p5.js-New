var recorder;
var chunks = [];

const fr = 30;

function record() {
  chunks.length = 0;
  
  let stream = document.querySelector('canvas').captureStream(fr);
  recorder = new MediaRecorder(stream);

  const r = document.createElement("div")
  r.id = "record"
  r.innerHTML = "Recording..."
  document.body.appendChild(r)
	
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  
  recorder.onstop = exportVideo;
}

function exportVideo(e) {
  var blob = new Blob(chunks, { 'type' : 'video/mp4' });
  
  // Download the video 
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = 'recording.mp4';
  a.click();
  window.URL.revokeObjectURL(url);
}
