package com.ssafy.ttocket.exception;

import lombok.Data;
import lombok.Getter;
import org.springframework.dao.QueryTimeoutException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {
    // Exception handling code goes here
    @ExceptionHandler(QueryTimeoutException.class)
    public ResponseEntity<Object> handleQueryTimeoutException(QueryTimeoutException ex, WebRequest request) {
        String errorMessage = "Redis query timed out";
        ErrorDetails errorDetails = new ErrorDetails(new Date(), errorMessage, request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Data
    class ErrorDetails{
        Date date;
        String msg;
        String description;

        public ErrorDetails(Date date, String msg, String description) {
            this.date = date;
            this.msg = msg;
            this.description = description;
        }
    }
}