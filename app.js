$(document).ready(function() {

// declaring color array: you can add to this to create more colors, either // strings or hex or rgb colors
    var colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        "rgb(17, 144, 136)",
        "rgb(103, 144, 113)",
        "rgba(245, 35, 0, 0.54)",
        "white",
        "rgb(55, 34, 53)",
    ]
    var myColor = colors[0];

    function makeGrid() {
        for (var i = 0; i < 1638; i++) {
            var grid = $('<div class="square"></div>')

            grid.click(function() {
                $(this).css("background-color", myColor)
            })
            $('#art').append(grid)
        }

    }

    //this function is used on line 47 to change the 'myColor' variable
    function changeColor(anyNewColor) {
        myColor = anyNewColor;

        //check that myColor variable has changed
        console.log('new color!', myColor)
    }

    function makePallette() {
        for (var i = 0; i < colors.length; i++) {
            var paint = $('<div class="circle"></div>')
            paint.css("background-color", colors[i])

            paint.click(function() {
                var pickedColor = $(this)[0].style.backgroundColor
                changeColor(pickedColor)
                //change myColor display when new coloris picked
                displayMyColor()
            })

            $('#paints').append(paint)
        }
    }

    function displayMyColor() {
      var swatch = $('<div id="myColor"></div>')
      swatch.css("background-color", myColor)

      //replace old color with new color in 'myColor' dispaly
      $('#colorDisplay > div').html(swatch)
    }

    //make sure to call the functions so that the grid and colors will be // drawn
    makeGrid()
    makePallette()
    displayMyColor()
})
