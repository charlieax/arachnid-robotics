#Arachnid Robotics

This is a demo repo for the Arachnid Robotics challenge.s

# Setup

- run `yarn install` to install dependencies

# Running

- run `yarn dev` to run the game in development mode
- run `yarn build` to build the game
- run `yarn start` to start to play the game

# Testing

- run `yarn test` to run the unit tests

# Part One Assumptions

- There is an infinite board
- Side to side movement does not turn the robot

# Part Two Assumptions

- Infinite board Upwards and to the right, finite left and down
- If the robot is due to go backwards but won't due to the edge, it doesn't turn around at all

# Part Three Assumptions

- If the robot runs out of fuel and wants to do another boost, it just stops
- If the robot tries to boost for more than 5 spaces, it overheats and stops

# General Thougths

- Simple version control to keep each part very separate and guarantee compatibility with Mk1 and Mk2
