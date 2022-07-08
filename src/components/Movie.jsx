import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import {arrayUnion,doc,updateDoc} from 'firebase/firestore'

function Movie({item}) {

    const {user} = UserAuth()
    // eslint-disable-next-line
    const [saved,setSaved] = useState(false) 
    const [like, setLike] = useState(false)
    const movieID = doc(db,'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
          setLike(!like);
          setSaved(true);
          await updateDoc(movieID, {
            savedShows: arrayUnion({
              id: item.id,
              title: item.title,
              img: item.backdrop_path,
            }),
          });
        } else {
          alert('Porfavor logeate para guardar una pelicula ⚠️');
        }
      };

    const truncateStr = (str,num) => {
        if(str?.length > num) {
            return str.slice(0,num) + '...';
        }else{
            return str ;
        }
    }
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full rounded-lg hover:bg-black/80 opacity-0 hover:opacity-100 text-white duration-500'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-end pb-5 h-full text-center'>{truncateStr(item?.title,25)}</p>
                <p onClick={saveShow}>
                    {like ? <FaHeart size={25} className='absolute top-3 left-3 text-gray-300 duration-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300 duration-300' />}
                </p>
            </div>
        </div>
    )
}

export default Movie