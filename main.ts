game.splash("lets calculate the area of a trapezoid")
let base1 = game.askForNumber("What is the length of the first base (in CM)")
let base2 = game.askForNumber("What is the length of the second base (in CM)")
let height = game.askForNumber("What is the height (in CM)")
let area = base1 + base2
area = area / 2
area = area * height
game.splash("The answer is (IN CM2)", area)
