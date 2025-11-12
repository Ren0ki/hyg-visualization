//zoom and pan event
window.addEventListener("load", () => {
  const svg = d3.select("#star-map"); //get svg
  const g = svg.select("g"); //star container

  const zoom = d3.zoom() //zoom logic
    .scaleExtent([0.5, 50]) //ammount to move
    .on("zoom", (e) => g.attr("transform", e.transform)); //transform when dragged

  svg.call(zoom); //call
});
