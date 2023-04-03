import { useEffect, useRef } from "react";
import SockJS from 'sockjs-client';
import  { CompatClient, Stomp } from '@stomp/stompjs'

function ReserveWait (){
    const client = useRef<CompatClient>();

    useEffect(()=>{
        client.current = Stomp.over(() => {
            const sock = new SockJS("http://localhost:8081" + "/wait/ticket")
            return sock;
        });
        client.current.connect({},
            ()=>{
                client.current?.subscribe(
                    `/sub/chat/perform/${1}`,
                    (message)=>{
                        //메시지 받는거?
                        console.log(message.body);

                        //메세지가 연결 종료 flag를 받으면 navigate
                        
                    }
                )
                client.current?.send("/pub/chat/enter",{}, JSON.stringify({userId : 'abc', performId : 1}));
            },{}
        );
        

        return () =>{
            // 컴포넌트 사라질때
        }
    },[]);

    return (
        <div>
            예매 대기
        </div>
    )
}

export default ReserveWait;