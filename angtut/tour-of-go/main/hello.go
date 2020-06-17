package main

import (
	"fmt"
	"math/rand"
	"time"
)

func add(x int, y int) int {
	return x + y
}

func randomPrint() {
	rand.Seed(time.Now().Unix())
	fmt.Println("Some 'random' number: ", rand.Intn(10000))
}

func main() {
	fmt.Println("Hello, world!")
	fmt.Println("The time is: ", time.Now())

	randomPrint()

	fmt.Println(add(6, 7))
}
