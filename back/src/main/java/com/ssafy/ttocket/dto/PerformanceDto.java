package com.ssafy.ttocket.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class PerformanceDto {
    @JsonProperty(value = "id")
    private int id;

    private String title;


    private String description;

    private int maxSeats;

    private String location;

    private double price;

    private String startTime;

    private String endTime;
    private String etc;

}
