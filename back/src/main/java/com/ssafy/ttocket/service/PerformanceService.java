package com.ssafy.ttocket.service;

import com.ssafy.ttocket.domain.Performance;
import com.ssafy.ttocket.domain.PerformanceLike;
import com.ssafy.ttocket.dto.ResponseDto;
import com.ssafy.ttocket.repository.PerformanceLikeRepository;
import com.ssafy.ttocket.repository.PerformanceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
@Transactional(readOnly = false)
@RequiredArgsConstructor
@Slf4j
public class PerformanceService {


    private final PerformanceRepository performanceRepository;
    private final PerformanceLikeRepository performanceLikeRepository;

    private final TimeService timeService;
    public ResponseDto homeList() {
        // 활용할 자료구조 생성
        Map<String,Object> result = new HashMap<>();
        ResponseDto responseDto = new ResponseDto();

        // DB에서 원하는 데이터 찾아오기




        // 찾은 데이터 result에 입력
        result.put("openSoon",1);
        result.put("performSoon",2);
        result.put("likePerform",3);


        // response형식에 맞게 메시지, result, 상태코드 리턴
        // 물론 중간중간 원하는 동작 안될시 데이터 넣지 말고 상태코드 다르게 해서 리턴
        responseDto.setMessage("홈 화면 데이터 리턴");
        responseDto.setBody(result);
        responseDto.setStatusCode(200);
        return responseDto;
    }



    public ResponseDto changeLikeStatus(String userId, int performanceId)
    {
        Map<String,Object> result = new HashMap<>();
        ResponseDto responseDto = new ResponseDto();

        PerformanceLike performanceLike = performanceLikeRepository.getLike(userId, performanceId);
        boolean flag = true;

        if(performanceLike.isLike())
        {
            flag = false;
        }
        else
        {
            flag =true;
        }
        performanceLikeRepository.updateLike(performanceLike, flag);

        responseDto.setMessage("success");

        return responseDto;
    }
    public ResponseDto getPerformance(String userId, int performanceId)
    {
        Map<String,Object> result = new HashMap<>();
        ResponseDto responseDto = new ResponseDto();

        Performance performance = performanceRepository.getPerformanceById(performanceId);

        //Performance returnPerformance

        return responseDto;
    }
}
