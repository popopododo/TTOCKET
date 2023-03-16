const seat = [1,2,3,4,5,6,7,8];
const seat2 = [1,2,3,4,5,6,7,8];
function Ticketing(){
    const showMsg = (msg : string) =>{
        alert(msg);
    }
    return (
        <div>
            {/* 헤더 */}
            <div className="m-2">
                <p className="font-bold">콜드 플레이 내한공연</p>
                <p className="text-xs">현대카드 슈퍼콘서트 2023 S/S S</p>
                <div className="bg-gray-200 rounded-sm mt-4 h-32 flex items-center justify-center">
                    <p className="font-bold">STAGE</p>
                </div>

                <div className="mt-20 grid grid-flow-col grid-cols-8">
                    {/* 좌석 섹션 */}
                    {seat.map((sId, index)=>{
                        return <div className="bg-gray-200 rounded-sm h-10 w-10 m-1" key={sId} onClick={() => {showMsg(`뿌잉 ${sId}`)}}></div>;
                    })}
                </div>
                <div className="mt-20 grid grid-flow-col grid-cols-8">
                    {/* 좌석 섹션 */}
                    {seat2.map((sId, index)=>{
                        return <div className="bg-gray-200 rounded-sm h-10 w-10 m-1" key={sId} onClick={() => {showMsg(`뿌잉 ${sId}`)}}></div>;
                    })}
                </div>
                    {/* <div className="bg-gray-200 rounded-sm h-10 w-10 m-1" onClick={() => {showMsg('뿌잉')}}></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div>
                    <div className="bg-gray-200 rounded-sm h-10 w-10 m-1"></div> */}
                
            </div>
            {/* Footer */}
        </div>
    )
}

export default Ticketing;