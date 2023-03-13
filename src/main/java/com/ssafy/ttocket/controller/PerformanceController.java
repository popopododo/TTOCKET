package com.ssafy.ttocket.controller;

import com.ssafy.ttocket.dto.ResponseDto;
import com.ssafy.ttocket.service.PerformaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/performance")
@RequiredArgsConstructor
@Log4j2
public class PerformanceController {
    private final PerformaceService performaceService;

    @GetMapping("/home") // 파티 상세보기
    public ResponseEntity<?> home(){
        log.info("home data return");
        ResponseDto responseDto = performaceService.homeList();
        return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
    }
}
