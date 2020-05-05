function legendClickCallback(event){
  event = event || window.event;

  var target = event.target || event.srcElement;
  
  while (target.nodeName !== 'LI') {
    target = target.parentElement;
  }
  
  var parent = target.parentElement;
  var chartId = parseInt(parent.classList[0].split("-")[0], 10);
  var chart = Chart.instances[chartId];
  var index = Array.prototype.slice.call(parent.children).indexOf(target);
  var meta = chart.getDatasetMeta(0);
  console.log(index);
  var item = meta.data[index];

  if (item.hidden === null || item.hidden === false) {
    item.hidden = true;
    target.classList.add('hidden');
  } else {
    target.classList.remove('hidden');
    item.hidden = null;
  }
  chart.update();
}

export { legendClickCallback };
