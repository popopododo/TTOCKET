package com.ssafy.ttocket.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
public class Seat {
    // 복합키 추가 전 임시로 PK 설정
    @Id
    @GeneratedValue
    private int seatId;
    @NotNull
    @ColumnDefault("'EMPTY'")
    @Enumerated(EnumType.STRING)
    private SeatStatus status;
}
