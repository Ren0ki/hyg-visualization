  //Set screen size
    const width = 3200;
    const height = 2400;

    const svg = d3.select("#star-map");
    const g = svg.append("g");
    
    // Load CSV
    d3.csv("./data/stars.csv").then(data => {
      
    // Convert csv string values to numbers
      data.forEach(d => {
        d.x = +d.x;
        d.y = +d.y;
        d.z = +d.z;
      });

      // Define scales (x, y, z)
      const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.x)) //take min max of x from dataset
        .range([0, width]); //set desired min max of x

      const yScale = d3.scaleLinear() 
        .domain(d3.extent(data, d => d.y)) //take min max of y from dataset
        .range([height, 0]); //set desired min max of y

      const zScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.z)) //take min max of z from dataset
        .range([0, 1]); // can't show z axis in 2D, dot opacity by z value

      // Draw stars, use g to contain for zoom
      g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.x))
        .attr("cy", d => yScale(d.y))
        .attr("r", d => zScale(d.z))
        .attr("fill", "white");
    }).catch(error => {
      console.error("Error loading CSV:", error);
    });

    // console.log("x extent:", d3.extent(data, d => d.x));
    // console.log("y extent:", d3.extent(data, d => d.y));
