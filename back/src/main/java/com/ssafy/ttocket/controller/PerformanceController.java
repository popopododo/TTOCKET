package com.ssafy.ttocket.controller;

import com.ssafy.ttocket.dto.ResponseDto;
import com.ssafy.ttocket.service.PerformanceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/performance")
@RequiredArgsConstructor
@Log4j2
public class PerformanceController {
    private final PerformanceService performanceService;


    @GetMapping("/home") // 파티 상세보기
    public ResponseEntity<?> home(){
        log.info("home data return");
        ResponseDto responseDto = performanceService.homeList();
        return new ResponseEntity<ResponseDto>(responseDto, HttpStatus.OK);
    }

    @PutMapping("/like/{userId}/{performanceId}")
    public ResponseEntity<?> like(@PathVariable String userId, @PathVariable int performanceId){
        ResponseDto responseDto = performanceService.changeLikeStatus(userId, performanceId);

        return new ResponseEntity<ResponseDto>(responseDto,HttpStatus.OK);
    }

    @GetMapping("/{userId}/{performanceId}")
    public ResponseEntity<?> getPerformance(@PathVariable String userId, @PathVariable int performanceId)
    {
        ResponseDto responseDto = performanceService.getPerformance(userId, performanceId);
        return new ResponseEntity<ResponseDto>(responseDto,HttpStatus.OK);
    }
}
