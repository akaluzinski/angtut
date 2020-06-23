package main

import (
	"log"
	"net/http"
)

const message = `{"message": "Hello World"}`

const ApplicationJson = "application/json"

type server struct{}

func (s *server) ServeHTTP(responseWriter http.ResponseWriter, request *http.Request) {
	responseWriter.Header().Set("Content-Type", "application/json")
	setContentType(responseWriter, ApplicationJson)
	setOKStatus(responseWriter)
	responseWriter.Write([]byte(message))
}

func setContentType(writer http.ResponseWriter, contentType string) {
	writer.Header().Set("Content-Type", contentType)
}

func setOKStatus(writer http.ResponseWriter) {
	writer.WriteHeader(http.StatusOK)
}

func main() {
	s := &server{}
	http.Handle("/", s)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
