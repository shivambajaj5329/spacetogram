import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase"



function getJsD() {

    const [loading, setLoading] = useState(false)



useEffect(() => {
    fetch ("https://api.nasa.gov/planetary/apod?api_key=pDELJQpbf9oWiNSY8ds4pILsm2DxSUiwNQDgZ6Fj")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const uploadPost = async() => {
            const postCol = collection(db, 'posts')
            const dateSnapshot = await getDocs(postCol)
            const postList = dateSnapshot.docs.map(doc => doc.data());
            const date_array = (postList.map((e) => e.date))
    
            const ct = []
    
            date_array.map((e) => {
                if (e === data.date){
                    ct.push(1)
                }else{
                    ct.push(0)
                }
            })
    
            let sum = ct.reduce((collector, num) => {
                return collector += num;
              }, 0);
    
              if (sum > 0){
                  console.log("Todays pic has already been posted")
              }else{
    
                if(loading) return;
                setLoading(true)

		 if (data.copyright === undefined){
                    data.copyright = 'NASA'
                }  
                if (data.hdurl === undefined){
                    data.hdurl = data.url
                }  
                //1) Create a post and add to firestore ' posts' collection
                //2) get the post ID for the newly created post
                //3) upload the image to firebase storage with the post ID
                //4) get a download URl from fb storafe and update the original post with image
    
                const docRef = await addDoc(collection(db, 'posts'), {
                    username: data.copyright,
                    caption: data.explanation,
                    profileImg: data.url,
                    timestamp: data.date,
                    image: data.hdurl,
                    date: data.date
                })
                console.log("New doc added with id", docRef.id);
            }
                setLoading(false);
    
    
        }

        uploadPost()
    })
}, [])




    //     const uploadPost = async() => {
    //     const postCol = collection(db, 'posts')
    //     const dateSnapshot = await getDocs(postCol)
    //     const postList = dateSnapshot.docs.map(doc => doc.data());
    //     const date_array = (postList.map((e) => e.date))
    //     setDate(date_array)

    //     const ct = []

    //     date_array.map((e) => {
    //         if (e === jsonData.date){
    //             ct.push(1)
    //         }else{
    //             ct.push(0)
    //         }
    //     })

    //     let sum = ct.reduce((collector, num) => {
    //         return collector += num;
    //       }, 0);

    //       if (sum > 0){
    //           console.log("Todays pic has already been posted")
    //       }else{

    //         if(loading) return;
    //         setLoading(true)

    //         //1) Create a post and add to firestore ' posts' collection
    //         //2) get the post ID for the newly created post
    //         //3) upload the image to firebase storage with the post ID
    //         //4) get a download URl from fb storafe and update the original post with image

    //         const docRef = await addDoc(collection(db, 'posts'), {
    //             username: jsonData.copyright,
    //             caption: jsonData.explanation,
    //             profileImg: jsonData.url,
    //             timestamp: jsonData.date,
    //             image: jsonData.hdurl,
    //             date: jsonData.date
    //         })
    //         console.log("New doc added with id", docRef.id);
    //     }
    //         setLoading(false);


    // }


  return (
      <div>
      </div>
     

  )
}

export default getJsD;


