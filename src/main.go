package main

import (
	"fmt"
	"time"
)

func main() {
	for {
		fmt.Println("Hello!")

		time.Sleep(time.Second * 1)
	}
}
