const drawGraph = () => {
    const graph = document.getElementById('graph');
    if (graph){
      var trace1 = {
      text: [''],
      mode: 'text'
      };
  
      var trace2 = {
      x: [-1, -1, 1, 1, -1],
      y: [-1, 1, 1, -1, -1],
      type: 'scatter',
      line: {
          color: 'rgba(0, 0, 0, 0.5))'
      }
      };
      
      var layout = {
      title: '',
      xaxis: {
          range: [0, 1]
      },
      yaxis: {
          range: [0, 1]
      },
      width: 500,
      height: 500,
      shapes: [ 
          {
              type: 'circle',
              xref: 'x',
              yref: 'y',
              fillcolor: 'rgba(255, 0, 0, 0.2)',
              x0: -1,
              y0: -1,
              x1: 1,
              y1: 1,
              line: {
              color: 'rgba(255, 0, 0, 0.8)'
              }
          }
          ]
      };
      
      var data = [trace1, trace2];
      Plotly.newPlot("graph", data, layout);
    }
}

const randomCoor = () =>{
  return [Math.random(), Math.random()];
};

const tryBtn = () =>{
  const boton = document.getElementById('try');
  const answer = document.getElementById('answer')
  boton.addEventListener("click", (event) =>{
    answer.innerText = randomCoor(); 
  });
}


tryBtn();
drawGraph();