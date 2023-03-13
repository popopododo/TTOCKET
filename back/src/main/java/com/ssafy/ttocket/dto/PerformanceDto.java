package com.ssafy.ttocket.controller;

import lombok.Data;

import java.util.Date;

@Data
public class PerformanceDto {
    private String performanceTitle;
    private Date performanceDate;
    private String performanceLocation;
    private int ticketPrice;
    private int maxSeats;
    private String performanceContent;
}
