
   
function random(min, max) {     //Random function to compute next position
    return min + Math.random() * (max - min);
  }

var nodes = [ //This is the logical data structure I followed to maintain the data of every single shape on the svg element
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},   
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0},
    { x:random(100, 650), y:random(100, 650), r:25, x1: random(100, 650), y1: random(100, 650), x2: random(100, 650), y2: random(100, 650), bx:0, by: 0}
    ];

    var w = window.innerWidth;
    var h = window.innerHeight;
    var contador_mosca = 0;
    var svg = d3.select("body").append("svg").attr({"width":2000,"height":2000}); //It seems to be a problem with the resize of the svg element. Some elements were translated into further positions and I had to establish a 2000*2000 element
                                                                                  // window.inner(Width/Height) should work but it doesn't
   // d3.selectAll().attr("x", d.x).attr("y", d.y);

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

        var temporary = d3.selectAll("circle").style('fill', 'black');
        
        
        if(contador_mosca === 0){ //conditions to know where the circle should go
            
           for(var i = 1; i < 10; i++){

                temporary.each(function(d,i) {

                    d3.select(this).attr("x", d.bx).attr("y", d.by);

                    d3.select(this).transition().attr("r", 25).duration(2000).attr("transform","translate("+d.x1+","+d.y1+")")
                    

                })


           }
            
            contador_mosca = contador_mosca + 1; //this is how we now in which step we are

        }
        else if(contador_mosca === 1){

            for(var i = 1; i < 10; i++){

                temporary.each(function(d,i) {

                    d3.select(this).transition().attr("r", 25).duration(2000).attr("transform","translate("+d.x2+","+d.y2+")")

                })


           }
            
            contador_mosca = contador_mosca + 1; //this is how we now in which step we are

        }
        else if(contador_mosca === 2){

            for(var i = 1; i < 10; i++){

                temporary.each(function(d,i) {

                    d3.select(this).transition().attr("r", 25).duration(2000).attr("transform","translate("+d.bx+","+d.by+")")

                })


           }
            
            contador_mosca = contador_mosca + 1; //this is how we now in which step we are

        }    
        else if(contador_mosca === 3){

                temporary.style('fill', 'red').transition().attr("r", 0).duration(3000);
                temporary.delay(6000).remove();


        }
 
        
    });

    



