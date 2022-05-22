function random(min, max) {
    return min + Math.random() * (max - min);
  }

var nodes = [
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650),bx: 100, by: 100, contador_mosca: 0, tag: "Mosca 1"},   
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 100, by: 250, contador_mosca: 0, tag: "Mosca 2"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 100, by: 400, contador_mosca: 0, tag: "Mosca 3"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 100, by: 550, contador_mosca: 0, tag: "Mosca 4"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 150, contador_mosca: 0, tag: "Mosca 5"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 220, contador_mosca: 0, tag: "Mosca 6"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 290, contador_mosca: 0, tag: "Mosca 7"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 340, contador_mosca: 0, tag: "Mosca 8"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 420, contador_mosca: 0, tag: "Mosca 9"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 430, by: 530, contador_mosca: 0, tag: "Mosca 10"},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx: 700, by: 100, contador_mosca: 0, tag: "Mosca 11"}
    ];

    var w = window.innerWidth;
    var h = window.innerHeight;
  
    var svg = d3.select("body").append("svg").attr({"width":2000,"height":2000}); //It seems to be a problem with the resize of the svg element. Some elements were translated into further positions and I had to establish a 2000*2000 element
                                                                                  // window.inner(Width/Height) should work but it doesn't

var node = svg.selectAll("circle")  //The project asked for a "flie shape" but I couldn't achive to draw that shape, so I developed the project with black circles
    .data(nodes)
    .enter()
    .append("circle")
    .attr("id",function(d,i) {return 'circle'+i})
    .attr("r", function(d) { return d.r })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("fill", "rgb(0,0,0)")
    .attr("fill-opacity", "1") 
    .on("click", function(d) {

        d3.select(this).style('fill', 'black').transition().attr("r", 0).duration(3000);
        
        if(d.contador_mosca === 0){ //conditions to know where the circle should go
            
            d.bx = d.x //Once we have the first coordinate, we save it for later
            d.by = d.y
            d.x = d.x1;
            d.y = d.y1;
            d.contador_mosca = d.contador_mosca + 1; //this is how we now in which step we are
            d.r = 25;

        }
        else if(d.contador_mosca === 1){

            d.x = d.x2;
            d.y = d.y2;
            d.contador_mosca = d.contador_mosca + 1;
            d.r = 25;

        }
        else if(d.contador_mosca === 2){

            d.x = d.x3;
            d.y = d.y3;
            d.contador_mosca = d.contador_mosca + 1;
            d.r = 25;

        }
        else if(d.contador_mosca === 3){

            d.x = d.bx;
            d.y = d.by;
            d.contador_mosca = d.contador_mosca + 1;
            d.r = 25;
        }

        else if(d.contador_mosca === 4){

            d3.select(this).style('fill', 'red').transition().attr("r", 0).duration(3000); //Animation of "death"

            d3.select(this).delay(6000).remove();

        }

        
        d3.select(this).transition().attr("r", 25).duration(2000).attr("transform","translate("+d.x+","+d.y+")") //This is how the shape is moved on the screen
       
        
    });

    




