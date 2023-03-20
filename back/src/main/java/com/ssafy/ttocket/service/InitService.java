package com.ssafy.ttocket.service;

import com.ssafy.ttocket.domain.*;
import com.ssafy.ttocket.repository.PerformanceLikeRepository;
import com.ssafy.ttocket.repository.PerformanceRepository;
import com.ssafy.ttocket.repository.SeatRepository;
import com.ssafy.ttocket.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
@RequiredArgsConstructor
public class InitService implements CommandLineRunner {

    private final TimeService timeService;

    private final PerformanceRepository performanceRepository;
    private final UserRepository userRepository;

    private final SeatRepository seatRepository;

    private final PerformanceLikeRepository performanceLikeRepository;

    private static User userAdmin;

    private static Performance performance;
    private static Performance performance1;
    private static Performance performance2;
    private static Performance performance3;
    private static Performance performance4;

    private static final String HEX_CHARACTERS = "0123456789abcdef";
    private static final int HEX_LENGTH = 42;
    @Override
    public void run(String... args) throws Exception {
    // 더미데이터 생성
    createUser();
    createPerformance();
    createSeat(performance);
        createSeat(performance1);
        createSeat(performance2);
        createSeat(performance3);
        createSeat(performance4);
    }


    public static String generateRandomHexString() {
        SecureRandom secureRandom = new SecureRandom();
        StringBuilder sb = new StringBuilder(HEX_LENGTH);
        for (int i = 0; i < HEX_LENGTH; i++) {
            int randomIndex = secureRandom.nextInt(HEX_CHARACTERS.length());
            char randomChar = HEX_CHARACTERS.charAt(randomIndex);
            sb.append(randomChar);
        }
        return sb.toString();
    }
    public void createUser()
    {

        userAdmin = User.builder()
                .id(generateRandomHexString())
                .nickname("admin").build();


        User user1 = User.builder()
                .id(generateRandomHexString())
                .nickname("김동욱").build();

        User user2 = User.builder()
                .id(generateRandomHexString())
                .nickname("김경민").build();

        User user3 = User.builder()
                .id(generateRandomHexString())
                .nickname("정상민").build();

        userRepository.save(userAdmin);
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);


    }
    public void createPerformance()
    {
        performance = Performance.builder()
                .user(userAdmin)
                .title("베리베리 스토로베리 우유")
                .description("맛있는 딸기 우유")
                .max_seats(20)
                .location("서울 여의도")
                .price(500)
                .startTime(timeService.getCurrentTime())
                .endTime(timeService.getCurrentTime().plus(Duration.ofDays(7)))
                .poster(generateRandomHexString())
                .etc("맛있게 드세요")
                .build();
       performance1 = Performance.builder()
                .user(userAdmin)
                .title("정상민의 슬램덩크")
                .description("센터 정상민의 박스아웃 구경해보세요")
                .max_seats(20)
                .location("대전 유성구")
                .price(300)
               .startTime(timeService.getCurrentTime())
               .endTime(timeService.getCurrentTime().plus(Duration.ofDays(7)))
                .poster(generateRandomHexString())
                .etc("환불 안 됩니다")
                .build();
        performance2 = Performance.builder()
                .user(userAdmin)
                .title("맘마미아")
                .description("올 여름 최고의 뮤지컬")
                .max_seats(20)
                .location("서울 강남구")
                .price(800)
                .startTime(timeService.getCurrentTime())
                .endTime(timeService.getCurrentTime().plus(Duration.ofDays(7)))
                .poster(generateRandomHexString())
                .etc("환불 규정은 다음과 같습니다.")
                .build();

        performance3 = Performance.builder()
                .user(userAdmin)
                .title("콜드플레이 내한공연")
                .description("현대카드 슈퍼콘서트 22")
                .max_seats(20)
                .location("서울 송파구 잠실종합운동장 주경기장")
                .price(800)
                .startTime(timeService.getCurrentTime())
                .endTime(timeService.getCurrentTime().plus(Duration.ofDays(7)))
                .poster(generateRandomHexString())
                .etc("콜드플레이 제발 내한 해주세요")
                .build();
        performance4 = Performance.builder()
                .user(userAdmin)
                .title("미스터 트롯 2 전국투어 IN 서울")
                .description("새로운 전설의 시작")
                .max_seats(20)
                .location("올림픽공원 체조경기장")
                .price(800)
                .startTime(timeService.getCurrentTime())
                .endTime(timeService.getCurrentTime().plus(Duration.ofDays(7)))
                .poster(generateRandomHexString())
                .etc("미스터 트롯에 뒤이을 새로운 전설들의 등장!")
                .build();

       performance = performanceRepository.save(performance);
        createLike(performance);
       performance1 = performanceRepository.save(performance1);
        createLike(performance1);
       performance2 = performanceRepository.save(performance2);
        createLike(performance2);
       performance3 = performanceRepository.save(performance3);
        createLike(performance3);
       performance4 = performanceRepository.save(performance4);
        createLike(performance4);

    }

    public void createSeat(Performance performance)
    {
        int mSeat = performance.getMax_seats();

        for(int i=1;i<=mSeat;i++)
        {
            Seat seat = Seat.builder()
                    .seatId(new SeatId(performance.getId(),i))
                    .performance(performance)
                    .seatNo(i)
                    .status(SeatStatus.EMPTY)
                    .build();
        seatRepository.save(seat);
        }
    }
    public void createLike(Performance performance)
    {
        List<User> userList = userRepository.getUserList();
        for(User user: userList)
        {
            PerformanceLike performanceLike = PerformanceLike.builder()
                    .likeId(new LikeId(performance.getId(),user.getId()))
                    .performance(performance)
                    .user(user)
                    .build();
        performanceLikeRepository.save(performanceLike);
        }
    }
}
