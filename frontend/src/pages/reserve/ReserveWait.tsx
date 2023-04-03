import { useEffect, useRef } from "react";
import SockJS from 'sockjs-client';
import  { CompatClient, Stomp } from '@stomp/stompjs'

function ReserveWait (){
    const client = useRef<CompatClient>();

    useEffect(()=>{
        client.current = Stomp.over(() => {
            const sock = new SockJS("http://localhost:8080" + "/wait/ticket")
            return sock;
        });
        client.current.connect({},
            ()=>{
                client.current?.subscribe(
                    `/sub/chat/perform/${1}`,
                    (message)=>{
                        //메시지 받는거?
                        console.log(message.body);
                    }
                )
            },{}
        );
        client.current.send("/pub/chat/message",{}, JSON.stringify({}));

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