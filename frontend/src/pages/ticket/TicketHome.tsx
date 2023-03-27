import React, { useCallback, useEffect, useState } from 'react'
import "../../css/Ticket.css";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import useWeb3 from '../../services/web3/useWeb3';
import { Link } from 'react-router-dom';

function TicketHome() {
    const [address, setAddress] = useState();
    const { tokenContract } = useWeb3();
    const id = useSelector((state: RootState) => state.userSlice.user_id);
    const [retrieve, setRetrieve] = useState<any[]>();

    const getRetrieve = useCallback(
        async () => {
            const result = await tokenContract?.methods.getBeforeTicketList().call({from : address});
            setRetrieve(result);
      },
      [address, tokenContract?.methods],
    )
    
    useEffect(() => {
        setAddress(id);
        getRetrieve();
    }, [id, getRetrieve]);
    return (
    <div className=''>
        <p className='pt-32 mb-8 text-xl font-bold text-center'>나의 티켓</p>

        {retrieve !== undefined && 
            <div className='flex overflow-x-auto snap-mandatory TicketList'>
                {retrieve[0].map((ticket : any, index : any) => 
                        <div key={index} className='relative flex-shrink-0 mx-8 border-2 rounded-lg shadow-lg Ticket1'>
                            <Link to='/home/detail' key={index}>
                                <div className='absolute flex items-center justify-center w-8 h-full border-r-2 border-dashed'>
                                    <p className='absolute text-xs text-center w-60 TicketTitleSmall'>
                                        { ticket[3] }
                                    </p>
                                </div>
                                <div className="absolute h-full left-8 TicketRight">
                                 <img src={ ticket[1] } alt="공연 이미지" className='absolute m-2 rounded-lg TicketImg' />
                                 <div className='absolute bottom-0 w-16 bg-white border-t-2 border-r-2 rounded-tr-lg h-28'>
                                     <p className='text-sm text-center'>2022</p>
                                     <p className='text-3xl font-bold text-center'>04</p>
                                     <p className='text-3xl font-bold text-center'>01</p>
                                     <p className='text-sm text-center'>18:00</p>
                                 </div>
                                 <div className='absolute bottom-0 h-20 pt-2 TicketInfo left-16'>
                                     <p className='m-2 text-sm text-right truncate'>{ticket[4]}</p>
                                     <p className='m-2 text-lg font-bold text-center'>1층 A구역 23번</p>
                                 </div>
                             </div>
                            </Link>
                        </div>
                )}
            </div>
        }
    </div>
  )
}

export default TicketHome