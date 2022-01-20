import React from 'react';

import {useEffect, useState} from "react";
import faker from "faker";

import stories_data from "../data/stories_data"



function Suggestions() {

    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {

        const suggestions = [...Array(5)].map((_,i) => (
            {
                ...faker.helpers.contextualCard,
                id: i
            }
        )
        )
            setSuggestions(suggestions);
    }, [])
  return ( 
  
  <div className='mt-4 ml-10'>

      <div className='flex justify-between text-sm mb-5'>
          <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
          <button className='text-gray-600 font-semibold'>See All</button>
      </div>



      {
          stories_data.slice(25,31).map(profile => (
              <div key={profile.flight_number}
              className='flex items-center justify-between mt-3'>

                  <img className='w-10 h-10  rounded-full border p-[2px]' src = {profile.links.mission_patch_small} />

                  <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{profile.mission_name}</h2>
                    <h3 className='text-xs text-gray-400'>Works at {profile.rocket.second_stage.payloads[0].manufacturer}</h3>

                  </div>


                <button className='text-blue-400 text-xs font-bold'>Follow</button>
              </div>

          ))
      }
  </div> 
  
  );
}

export default Suggestions;
