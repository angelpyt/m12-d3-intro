// Main JavaScript File

// First Exam
var exam1 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:90},
  {id:3, student:'Rose', grade:80},
];

// Second Exam
var exam2 = [
  {id:1, student:'Jade', grade:75},
  {id:2, student:'Billy', grade:85},
  {id:3, student:'Rose', grade:90},
  {id:4, student:'Avery', grade:90},
];

// Third Exam
var exam3 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:80},
  {id:3, student:'Rose', grade:80},
  {id:4, student:'Avery', grade:70},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Select SVG
  var svg = d3.select('#my-svg');
  // Reusable draw function
  var draw = function(data) {
    var rects = svg.selectAll('rect')
                   .data(data, function(d) {return d.id});   // Bind data to selection of rects in your svg
    rects.enter()           // Enter rect elements
         .append('rect')    // Entering and updating elements rects
         .merge(rects)
         .attr('width', function (d) {return d.grade})
         .attr('height', 50)
         .attr('x', 50)
         .attr('y', function(d) {return (d.id) * 50});
    rects.exit()
         .transition()
         .duration(500)
         .attr('width', 0)
         .remove();

    var texts = svg.selectAll('text')
               .data(data, function(d) {return d.id});

    texts.enter()
        .append('text')
        .merge(texts)
        .text(function(d) {return d.student})
        .attr('x', 50)
        .attr('y', function(d) {return (d.id) * 50 + 10})
        .style('fill', '#fff');
    texts.exit()
         .transition()
         .duration(500)
         .remove();
  }

    


    


    


    // Transition a remove for exiting elements


    // Perform the same data-binding for text


    // enter elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements
    $('button').on('click', function() {
      var btn = $(this).attr("id");
      switch(btn){
        case 'exam-1':
          draw(exam1);
          break;
        case 'exam-2':
          draw(exam2);
          break;
        case 'exam-3':
          draw(exam3);
          break;
        default:
          break;
      };
    })



});
