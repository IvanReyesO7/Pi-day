const insideOrOutside = (coord) => {
    const answer2 = document.getElementById('answer2')
    const d = Math.sqrt(coord[0]**2 + coord[1]**2 );
    if (d > 1){
      answer2.innerText = `For coord = [${coord[0].toFixed(2)}, ${coord[1].toFixed(2)}] => Outside`;
      answer2.style = "color: #000000;"
    } else {
      answer2.innerText =  `For coord = [${coord[0].toFixed(2)}, ${coord[1].toFixed(2)}] => Inside`;
      answer2.style = "color: #f7595b;"
    }
  };

  const inOrOut = (coord) => {
    const d = Math.sqrt(coord[0]**2 + coord[1]**2 );
    if (d > 1){
      return "out"
    } else {
      return "in"
    }
  };

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

      
      var trace3 = {
      x: [0.5],
      y: [0.5],
      type: "scattergl",
      mode: "markers",
      marker: {
        size: 3,
      },    
      };
      

      var data = [trace1, trace2, trace3];
      Plotly.newPlot("graph", data, layout);
      const legend = document.querySelector('.infolayer');
      legend.remove();

      var i = 1;
      var j = 0;                
      function myLoop() {         
        setTimeout(function() { 
          const randomCoord = [Math.random(), Math.random()]  
          Plotly.extendTraces("graph", { x: [[randomCoord[0]]], y: [[randomCoord[1]]] }, [2]);
          document.getElementById('total').innerText = `${i}`
          if (inOrOut(randomCoord) === "in"){
            j++;
            document.getElementById('total-circle').innerText = `${j}`
          }
          document.getElementById("PI").innerText = `${parseFloat(4 * j / i)}`;
          i++;
                            
        if (i < 10000) {           
          myLoop();             
        }                       
        }, 100)
      }
      myLoop();
    }      
}

const randomCoor = () =>{
  coord = [Math.random(), Math.random()];
  insideOrOutside(coord);
  return `[${coord[0].toFixed(2)}, ${coord[1].toFixed(2)}]`;
};

const tryBtn = () =>{
  const boton = document.getElementById('try');
  const answer = document.getElementById('answer')
  boton.addEventListener("click", (event) =>{
    answer.innerText = randomCoor(); 
  });
};

const start = () =>{
  const startbtn = document.getElementById('start')
  startbtn.addEventListener("click", (event) => {
    document.getElementById('hidden-div').style.transition = "all 0.3s";
    document.getElementById('hidden-div').style.height =  "420px";
    drawGraph();
    window.scrollTo(0,document.body.scrollHeight);
  })
};

const stop = () => {
  const stahp = document.getElementById('stahp');
  stahp.addEventListener("click", (event) => {
    document.location.reload();
    // document.getElementById('hidden-div').style.height =  "420px";
  } )
};

tryBtn();
start();

stop();
