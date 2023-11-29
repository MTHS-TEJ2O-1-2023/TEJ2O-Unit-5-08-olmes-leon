/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Nov 2023
 * This program ...
*/

// setup
basic.showIcon(IconNames.Happy)

let distansetoObject: number = 0

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        basic.showIcon(IconNames.Duck)
        while (true) {
         robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        
        }
    }

    if (input.buttonIsPressed(Button.B) == true) {
        // move car forwards and backwards
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        basic.pause(500)
        robotbit.StpCarMove(-10, 48)
        basic.showIcon(IconNames.Diamond)
    }
}
