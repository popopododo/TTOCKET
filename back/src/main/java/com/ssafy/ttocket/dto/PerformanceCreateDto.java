package com.ssafy.ttocket.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class PerformanceCreateDto {
    private String title;
    private String endTime;
    private String location;
    private int maxSeats;
    private String description;
}
